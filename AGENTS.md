# AI Agent Guidelines & Workflow

This project is built to be AI-agent friendly. We coordinate tasks, features, and bug fixes using **GitHub Issues** to allow both human contributors and AI agents to work asynchronously and collaboratively on the codebase.

## 🛠️ Task Coordination via GitHub Issues

- **GitHub Issues as Single Source of Truth**: Every task, feature, or bug fix should have a corresponding GitHub Issue.
- **Triage Labels for Agents**:
  - **`ready-for-agent`**: This label is applied to issues that have been triaged, specified, and are ready for an AI agent to pick up and implement.
  - **`in-progress-by-agent`**: (Optional) Applied when an agent is currently working on the issue to prevent duplicate work.
- **PRD Publishing**:
  - When drafting a new feature, agents use the `to-prd` skill to turn the conversation context into a Product Requirements Document (PRD).
  - This PRD is published directly to the project's GitHub Issue tracker with the `ready-for-agent` label.

## 🚀 Guidelines for AI Agents Working on the Repository

If you are an AI agent assigned to a task, please follow these guidelines:

1. **Understand Context & Guidelines**:
   - Read README.md to understand the project setup, prerequisites, and technology stack.
   - Read the issue description and any linked PRD or architectural decision records (ADRs).

2. **Use Specialized Skills**:
   - **`requirement-updater`** (located at [.agents/skills/requirement-updater](SKILL.md)): Use this when updating existing requirements or features.
   - **`to-prd`** (located at [.agents/skills/to-prd](.agents/skills/to-prd/SKILL.md)): Use this to synthesize a feature design and publish it as an issue to the tracker.
   - **`improve-codebase-architecture`** (located at [.agents/skills/improve-codebase-architecture](.agents/skills/improve-codebase-architecture/SKILL.md)): Use this to find refactoring opportunities or restructure tightly-coupled components.

3. **Verify the Build**:
   - Before finishing your task, always run a production build (`npm run build`) to ensure there are no Astro compilation or Zod content schema validation errors.

4. **Pull Request & Reference**:
   - Once implementation is complete, submit your changes as a pull request and link it back to the corresponding GitHub Issue.
