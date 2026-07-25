---
name: whatsapp-to-content
description: Mine scripts/out.txt (redacted WhatsApp delta) into Enquire services/guides Markdown. Use when the user asks to update content from WhatsApp, process out.txt, or extract listings/guides from chat.
---

# WhatsApp → Enquire Content

Turn the redacted WhatsApp delta at `scripts/out.txt` into updates under `src/content/services/` and `src/content/guides/`.

## When to use

Trigger when the user points you at `scripts/out.txt`, asks to mine WhatsApp chat into the site, or says to use this skill.

## Hard limits

- **Geographic scope**: CERN / Geneva / Pays de Gex / nearby FR–CH border practical life only. Drop unrelated chat (but list them briefly).
- **Practical value only**: services, logistics, admin, housing, insurance, transport, local hacks. Skip banter, memes, one-off social plans, pure news/politics.
- **Dedupe**: Prefer updating existing files under `src/content/services/` and `src/content/guides/` over new duplicates; match by name/place.
- **No PII**: Never paste personal names, private DMs, or phone hashes (`[PHONE_…]`) into published content. Public business phones/websites are OK when clearly a listing.
- **Schema**: New/updated Markdown must match Zod schemas in `src/content.config.ts` and categories in `src/categories.ts`. Match tone and structure of existing listings/guides.
- **Verify**: Run `npm run build` before finishing.
- **Approval**: Propose the set of files to add/change first (path + one-line rationale); implement only after the user OK — unless they explicitly say to just do it.

## Workflow

1. Read `scripts/out.txt` (empty / “no new content” → stop and say so).
2. Scan existing `src/content/services/` and `src/content/guides/`.
3. List candidate updates: new or changed file paths with a one-line rationale; explicitly note noise you are skipping.
4. Wait for approval (unless told to proceed).
5. Write or update Markdown:
   - **Services**: frontmatter `title`, `category`, `address`, `languages`, `tags`; optional `phone`, `website`. Body: short practical notes (pricing, booking tips, English-friendliness).
   - **Guides**: frontmatter `title`, `description`, `category` (one of `Getting Here` | `Housing` | `Settling In` | `Admin`), `lastUpdated` (ISO date). Body: actionable steps; link official resources when known.
6. Run `npm run build`. Fix schema/build errors.
7. Summarize what changed.

## Service categories

Use keys from `src/categories.ts` (`serviceCategories`): e.g. `barbers`, `bicycle-repair`, `car-repair`, `electronics-repair`, `plumbing`, `leisure-sports`, `hiking`. If nothing fits, ask before inventing a new category.

## Out of scope

- Running `scripts/update_out.py` or WhatsApp export (user does that).
- Changing site UI, layouts, or content schemas unless the user asks.
