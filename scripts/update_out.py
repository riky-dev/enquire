#!/usr/bin/env python3
"""Redact a WhatsApp export and write only new messages to out.txt."""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
from pathlib import Path

# Fixed salt so phone hashes stay stable across runs.
SALT = "e7q3n9k2m5w8r1t4v6x0y"

SCRIPTS_DIR = Path(__file__).resolve().parent
DEFAULT_BASELINE = SCRIPTS_DIR / "baseline.txt"
DEFAULT_OUT = SCRIPTS_DIR / "out.txt"

# Matches common phone formats in WhatsApp exports:
# +39 333 123 4567, +393331234567, 333 123 4567, 333-123-4567
PHONE_REGEX = re.compile(
    r"""
    (?<!\w)                  # not preceded by a word char
    (?:\+?\d{1,3}[\s.-]?)?   # optional country code
    (?:\(?\d{2,4}\)?[\s.-]?){2,5}
    \d{2,4}
    (?!\w)                   # not followed by a word char
    """,
    re.VERBOSE,
)


def normalize_phone(phone: str) -> str:
    return re.sub(r"\D", "", phone)


def hash_phone(phone: str, salt: str = SALT, length: int = 10) -> str:
    normalized = normalize_phone(phone)
    digest = hashlib.sha256((salt + normalized).encode("utf-8")).hexdigest()
    return f"[PHONE_{digest[:length]}]"


def redact_text(text: str, salt: str = SALT) -> str:
    mapping: dict[str, str] = {}

    def replace(match: re.Match[str]) -> str:
        original = match.group(0)
        normalized = normalize_phone(original)

        if len(normalized) < 8:
            return original

        if normalized not in mapping:
            mapping[normalized] = hash_phone(normalized, salt)

        return mapping[normalized]

    return PHONE_REGEX.sub(replace, text)


def normalize_newlines(text: str) -> str:
    return text.replace("\r\n", "\n").replace("\r", "\n")


def extract_delta(baseline: str, redacted: str) -> str:
    """Return text in redacted that comes after baseline.

    Baseline is expected to be a contiguous substring of the new export
    (WhatsApp exports are append-only). Trailing newlines on the baseline
    are ignored for matching.
    """
    baseline_body = baseline.rstrip("\n")
    if not baseline_body:
        return redacted

    idx = redacted.find(baseline_body)
    if idx == -1:
        raise ValueError(
            "Could not find baseline.txt inside the new redacted export. "
            "Re-export a longer history, or delete baseline.txt to treat "
            "this as a first run."
        )

    after = redacted[idx + len(baseline_body) :]
    return after.lstrip("\n")


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Redact a WhatsApp chat export and write only new messages to "
            "scripts/out.txt (updates scripts/baseline.txt)."
        )
    )
    parser.add_argument("input", help="Input WhatsApp .txt export")
    parser.add_argument(
        "--baseline",
        type=Path,
        default=DEFAULT_BASELINE,
        help=f"Full previous redacted export (default: {DEFAULT_BASELINE})",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=DEFAULT_OUT,
        help=f"Delta output for the agent (default: {DEFAULT_OUT})",
    )
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.is_file():
        print(f"Input not found: {input_path}", file=sys.stderr)
        return 1

    redacted = normalize_newlines(redact_text(input_path.read_text(encoding="utf-8")))
    if not redacted.endswith("\n") and redacted:
        redacted += "\n"

    baseline_path: Path = args.baseline
    out_path: Path = args.out

    if baseline_path.is_file():
        baseline = normalize_newlines(baseline_path.read_text(encoding="utf-8"))
        try:
            delta = extract_delta(baseline, redacted)
        except ValueError as exc:
            print(str(exc), file=sys.stderr)
            return 1
    else:
        print("No baseline found — treating this as a first run (full dump).")
        delta = redacted

    out_path.write_text(delta, encoding="utf-8")
    baseline_path.write_text(redacted, encoding="utf-8")

    baseline_lines = baseline_path.read_text(encoding="utf-8").count("\n")
    delta_lines = delta.count("\n") if delta else 0
    print(f"Baseline updated: {baseline_path} ({baseline_lines} lines)")
    print(f"New messages:     {out_path} ({delta_lines} lines)")
    if not delta.strip():
        print("No new content since the last baseline.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
