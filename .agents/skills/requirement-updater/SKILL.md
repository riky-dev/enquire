---
name: requirement-updater
description: Guides the agent through a 5-phase workflow (Understand, Impact Analysis, Refactor Plan, Execute, Verify) for updating existing features and requirements in the PMF WebApp project.
---

# Requirement Updater Skill

## Overview

This skill implements an agentic workflow for evolving existing features and adapting to new requirements. Unlike the `feature-developer` skill, which builds new functionality, this skill focuses on surgical changes, impact analysis, and maintaining system integrity during refactoring or logic updates.

## Workflow Phases

The update lifecycle is divided into 5 sequential phases. You should complete each phase before moving to the next.

1.  **Understand (Change & Rationale)**: Define the "delta" between the current behavior and the new requirements.
    - See [phase-1-understand.md](references/phase-1-understand.md)
2.  **Impact Analysis (Research)**: Identify all affected components, tests, and data models.
    - See [phase-2-impact-analysis.md](references/phase-2-impact-analysis.md)
3.  **Refactor Plan (Strategy)**: Document the surgical update strategy and migration plan. **Wait for user approval.**
    - See [phase-3-refactor-plan.md](references/phase-3-refactor-plan.md)
4.  **Execute Change (Implement)**: Apply changes surgically while adhering to project standards.
    - See [phase-4-execute.md](references/phase-4-execute.md)
5.  **Verify & Validate**: Ensure requirements are met and run full validation (lint, typecheck, and regression tests).
    - See [phase-5-verify.md](references/phase-5-verify.md)

## Usage

Trigger this workflow whenever you need to modify existing logic, refactor code, or adapt to changing requirements. Start by telling the user you are beginning Phase 1.

### Example Trigger

"I will now use the `requirement-updater` workflow to adapt to these new requirements. Starting with Phase 1: Understand (Change & Rationale)."

## Guidelines

- **Surgical Changes**: Prioritize minimal, high-impact edits over broad refactoring.
- **Impact First**: Never start implementation before identifying all potential side effects.
- **Test Integrity**: Always update existing tests before adding new ones for the changed behavior.
- **Approval Gate**: Do NOT start implementation (Phase 4) until the plan (Phase 3) is approved.
