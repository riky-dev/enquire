# Phase 4: Execute Change (Implement)

## Goal

To apply the changes surgically while maintaining code quality and project standards.

## Actions

1. **Incremental Modification**: Apply changes file-by-file (using `replace_file_content`, `multi_replace_file_content`, or `write_to_file`).
2. **Standard Adherence**: Ensure all new/updated code follows the project's tech stack (Astro v6, Vanilla CSS in global.css, Zod schemas for content collections, strict TypeScript type safety).
3. **Refinement**: As you modify files, perform light cleanup only on the code being changed.
4. **Immediate Validation**: Run `npx astro check` and/or `npm run build` after each major step to ensure the changes are still sound.

## Success Criteria

- [ ] Code has been updated according to the plan.
- [ ] The build (`npm run build`) and type/diagnostic checks (`npx astro check`) are passing.
- [ ] No unrelated refactoring has been done outside the scope.
