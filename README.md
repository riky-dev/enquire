# Enquire

> **An unofficial relocation guide & directory for CERN newcomers.**

The project is named in homage to _ENQUIRE_, the system developed by Sir Tim Berners-Lee at CERN in 1980, which laid the conceptual foundation for the World Wide Web.

## Problem Statement

Relocating to CERN presents unique challenges:

- **Cross-Border Complexity:** Deciding whether to live on the Swiss side (Geneva) vs. the French side (Pays de Gex), each having different visa rules, tax obligations, bank account eligibility, and rental procedures.
- **Language Barrier:** Finding local everyday services (barbers, mechanics, plumbers, etc.) where English is spoken.
- **Ephemeral Information:** Important practical advice is often shared in temporary WhatsApp groups, which makes it hard to find, unsearchable, and easily lost over time.

Official guides exist but are often high-level and lack the granular, step-by-step hacks and reviews that newcomers actually need. **Enquire** bridges this gap by centralizing community-curated, searchable, and open-source knowledge.

## Key Features

### 1. Interactive Directory

A catalog of recommended local service providers structured by categories with essential metadata

### 2. Practical Step-by-Step Guides

In-depth articles covering the logistics of cross-border living

### 3. Community Comments (via Giscus)

Every directory page and guide integrates **Giscus**, allowing users to comment, correct, and add reviews directly using their GitHub accounts.

### 4. Direct Submissions

A simple suggestion form allows any newcomer or alumnis to propose a new listing or guide without needing coding knowledge.

## Tech Stack

Astro v6, Zod, CSS, Giscus

## Getting Started

### Prerequisites

- Node.js (version `>= 22.12.0` recommended)
- npm (installed with Node)

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Running Locally

To launch the local development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

### Build and Preview

To generate a production-ready static build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## How to Contribute

Contributions are what make the CERN newcomer community thrive! Here is how you can help:

### 1. Propose Content via the Website

If you aren't familiar with GitHub or markdown, you can use the built-in form on the "Suggest a Place" page to submit suggestions, which the maintainers will manually review and add.

### 2. Submit a Pull Request

If you are tech-savvy, you can add listings or guides directly by submitting a PR:

1.  Fork the repository.
2.  Create a new markdown file in the appropriate directory:
    - For services: `src/content/services/your-service.md`
    - For guides: `src/content/guides/your-guide.md`
3.  Fill out the required frontmatter attributes (validated by Zod schemas in `src/content/config.ts`).
4.  Submit a Pull Request targeting the `main` branch.

### 3. AI Agent Contributions

This project is AI-agent friendly and coordinates tasks via GitHub Issues. If you are an AI coding agent, please refer to [AGENTS.md](file:///home/riky/stuff/git/enquire/AGENTS.md) for guidelines, workflow instructions, and specialized skills usage.

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
