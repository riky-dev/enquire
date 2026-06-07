# Enquire 🚀

> **An unofficial relocation guide & directory for CERN newcomers.**

**Enquire** is a collaborative and lightweight static website built with [Astro](https://astro.build/) that serves as a comprehensive onboarding companion and local directory for short-term interns, students, and employees relocating to the Geneva/Pays de Gex cross-border region.

The project is named in homage to _ENQUIRE_, the system developed by Sir Tim Berners-Lee at CERN in 1980, which laid the conceptual foundation for the World Wide Web.

## Problem Statement

Relocating to CERN presents unique challenges:

- **Cross-Border Complexity:** Deciding whether to live on the Swiss side (Geneva) vs. the French side (Pays de Gex), each having different visa rules, tax obligations, bank account eligibility, and rental procedures.
- **Language Barrier:** Finding local everyday services (barbers, mechanics, plumbers, etc.) where English is spoken.
- **Ephemeral Information:** Important practical advice is often shared in temporary WhatsApp groups, which makes it hard to find, unsearchable, and easily lost over time.

Official guides exist but are often high-level and lack the granular, step-by-step hacks and reviews that newcomers actually need. **Enquire** bridges this gap by centralizing community-curated, searchable, and open-source knowledge.

---

## Key Features

### 1. Interactive Directory

A catalog of recommended local service providers structured by categories with essential metadata:

- **Categories:** Barbers, Bicycle Repair, Car Repair/Tyres, Electronics Repair, Plumbing, Leisure & Sports, Hiking, and more.
- **Details:** Address, languages spoken (with English indicators), and tags (e.g., e-bike discounts, bookable online).
- **CERN Hacks:** Mentions of CERN-specific resources (e.g., the CERN Car Club DIY tyre mounting machines).

### 2. Practical Step-by-Step Guides

In-depth articles covering the logistics of cross-border living:

- **Arrival & Transport:** Getting to CERN from Geneva Airport, ticketing, and bus/tram routes.
- **Housing & Dossiers:** Avoiding rental deposit scams, preparing your dossier, and obtaining Swiss non-pursuit extracts.
- **Finance & Banking:** Navigating cross-border banking (comparing UBS, Dukascopy, Revolut) and using currency converters (Wise, Ibani) to avoid exchange fee losses.
- **Legitimation Card Survival:** What to do when your Swiss legitimation card is lost/stolen abroad, and how to handle border/airline checks.
- **AVS/TIN Numbers:** Locating Swiss TINs and dealing with foreign taxpayer requests.
- **Uniqa Health Insurance:** What is covered, getting optical/dermatological prescriptions reimbursed, and rescue insurance recommendations.
- **CERN Campus Hacks:** Locating quiet phone booths, showers, and borrowing free safety gear.

### 3. Community Comments (via Giscus)

Every directory page and guide integrates **Giscus**, allowing users to comment, correct, and add reviews directly using their GitHub accounts.

### 4. Direct Submissions

A simple suggestion form allows any newcomer or alumnus to propose a new listing or guide without needing coding knowledge.

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) (v6) - Fast, lightweight, static site generator.
- **Content Management:** Astro Content Collections with [Zod](https://zod.dev/) schemas to ensure strict validation of frontmatter.
- **Styling:** Vanilla CSS (Custom design system in [src/styles/global.css](file:///home/riky/stuff/git/newcomers-guide/src/styles/global.css)).
- **Comments:** [Giscus](https://giscus.app/) (GitHub Discussions API).
- **Deployment:** GitHub Pages / Vercel / Netlify.

## 🚀 Getting Started

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

## 🤝 How to Contribute

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

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
