# Phase 4: Execute Change (Implement)

## Goal

To apply the changes surgically while maintaining code quality and project standards.

## Actions

1. **Incremental Modification**: Apply changes file-by-file (using `replace` or `write_file`).
2. **Standard Adherence**: Ensure all new/updated code follows `AGENTS.md` (Next.js 16, Tailwind 4, Zod, type safety).
3. **Refinement**: As you modify files, perform light cleanup only on the code being changed.
4. **Immediate Validation**: Run build/lint/type-check after each major step to ensure the change is still sound.

## Success Criteria

- [ ] Code has been updated according to the plan.
- [ ] The build and type-check are still passing.
- [ ] No unrelated refactoring has been done outside the scope.
