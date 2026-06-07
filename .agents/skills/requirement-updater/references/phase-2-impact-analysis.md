# Phase 2: Impact Analysis (Research)

## Goal

To identify all affected areas of the codebase, including hidden dependencies and potential breaking changes.

## Actions

1. **Symbol Search**: Use `grep_search` to find all usages of components, layouts, content collections, or routing pages affected by the change.
2. **Dependency Mapping**: Identify if Content Collection Zod schemas ([config.ts](file:///home/riky/stuff/git/enquire/src/content/config.ts)), page templates, shared styles, or environment variables are impacted.
3. **Test/Verification Inventory**: Identify if there are any existing tests covering the logic, or plan manual verification pages/states to test.
4. **Identify Constraints**: Document any architectural constraints or styling patterns (e.g., in [global.css](file:///home/riky/stuff/git/enquire/src/styles/global.css)) that might complicate the change.

## Success Criteria

- [ ] You have a complete list of files to modify.
- [ ] You have identified potential breaking changes (e.g. Content Collection schema updates, broken layout routes).
- [ ] You have mapped out the verification plan.
