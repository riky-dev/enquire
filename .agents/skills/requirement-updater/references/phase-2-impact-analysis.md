# Phase 2: Impact Analysis (Research)

## Goal

To identify all affected areas of the codebase, including hidden dependencies and potential breaking changes.

## Actions

1. **Symbol Search**: Use `grep_search` to find all usages of components, hooks, schemas, or API routes affected by the change.
2. **Review the Playbook**: Refer to `.agents/REVIEW_PLAYBOOK.md` for the current source-of-truth map and architecture boundaries.
3. **Dependency Mapping**: Identify if database schemas (Prisma), shared types, or environment variables are impacted.
4. **Test Inventory**: Identify all existing tests that cover the affected logic (unit, integration, and E2E).
5. **Identify Constraints**: Document any architectural constraints or legacy code issues that might complicate the change.

## Success Criteria

- [ ] You have a complete list of files to modify.
- [ ] You have identified potential breaking changes (API, UI, Database).
- [ ] You have mapped out the testing footprint.
