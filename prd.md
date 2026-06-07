## Problem Statement

Short-term interns and newcomers at CERN face significant challenges when relocating to the Geneva/Pays de Gex area. Beyond finding everyday services (barbers, phone repair, mechanics, etc.) that speak English, they struggle with the complex logistics of moving to a cross-border region. This includes figuring out how to get to Geneva/CERN, navigating the rental housing market on the Swiss vs. French side, and handling administrative tasks (visas, bank accounts, SIM cards, health insurance). 

While CERN provides official guides, they are often high-level, lack granular details, and don't address the practical "hacks" or step-by-step guides that newcomers actually need. Current informal knowledge sharing is heavily reliant on ephemeral WhatsApp groups, making critical information hard to find, unsearchable, and easily lost over time.

## Solution

A centralized, collaborative, lightweight static website (built with Astro) that serves as a comprehensive onboarding companion and directory for CERN newcomers. The site will provide two main sections:
1. **Interactive Directory**: Recommended local services structured by categories, with essential metadata (location, languages spoken) and community reviews.
2. **Practical Step-by-Step Guides**: In-depth, community-curated guides covering arrival logistics (transportation), housing search strategies (Swiss vs. French side), and local admin setup (SIM cards, bank accounts, health insurance).

The website will leverage Markdown for easy content management, Giscus (GitHub Discussions) for community reviews and comments on individual listings/guides, and simple embedded forms for new recommendations and feedback.

## User Stories

1. As a CERN newcomer, I want to browse a list of local services by category (e.g., barbers, mechanics), so that I can easily find what I need in a new area.
2. As an English-speaking intern, I want to see if a service provider speaks English, so that I can communicate effectively.
3. As a user of the site, I want to read reviews or comments from other interns on a specific service provider, so that I can gauge their reliability and quality.
4. As a user of the site, I want to add my own review or experience to a service provider using my GitHub account, so that I can help future newcomers.
5. As a community member, I want to suggest a new service provider via a simple form, so that the directory stays up-to-date and comprehensive.
6. As the platform maintainer, I want to easily add new services by creating simple Markdown files, so that updating the site takes minimal time and effort.
7. As a tech-savvy user, I want to be able to submit a Pull Request to add or update a service listing, so that the community can collaboratively maintain the platform.
8. As a user on a mobile phone, I want the website to be fully responsive, so that I can look up places while I'm out in the city.
9. As a newcomer arriving at Geneva Airport, I want clear, step-by-step instructions on public transport routes (buses/trams) to CERN, including ticketing details, so I don't get lost or fined.
10. As a house hunter, I want to compare the pros and cons of living on the Swiss side vs. the French side (e.g. Saint-Genis, Ferney-Voltaire), including tax, visa, and rental market differences.
11. As a newcomer, I want to find a curated list of active housing portals, Facebook groups, and temporary hostel options, along with tips to avoid rental scams.
12. As a newly arrived intern, I want to know which mobile operators offer the best coverage inside CERN's underground areas and across the border, and how to get a SIM card quickly.
13. As an international student/intern, I want a comparison of bank account options (Swiss Post, local banks, online banks like Revolut) and health insurance requirements, so I can set up my finances and coverage correctly.
14. As a reader of a guide, I want to see comments/tips from other newcomers on that specific guide (e.g., "Bus 66 schedule changed"), so I get up-to-date community advice.

## Implementation Decisions

- **Framework:** Astro will be used to generate a fast, static website.
- **Content Management:** Astro Content Collections will be used to manage both `services` (directory listings) and `guides` (informational articles) via Markdown (`.md` or `.mdx`) files. A Zod schema will enforce required frontmatter for each collection (e.g., `services` has `title`, `category`, `address`, `languages`, `tags`; `guides` has `title`, `description`, `category`, `lastUpdated`).
- **Commenting System:** Giscus will be integrated on individual service detail pages AND guide pages to enable community comments, updates, and corrections.
- **Submissions:** A free embedded form (like Google Forms or Tally) will be hosted on a "Suggest a Place/Guide" page. Submissions will be manually reviewed and converted to Markdown files by the maintainers (or submitted via PRs by users).
- **Modules:**
  - `Content Collection Schema`: Defines the structure for service listings and guides.
  - `Directory Listing`: An Astro page mapping over the services content collection.
  - `Guides Listing`: An Astro page mapping over the guides content collection (categorized into Getting Here, Housing, Settling In, Admin).
  - `Service Detail Page` & `Guide Detail Page`: Astro dynamic routes (`[slug].astro`) rendering the Markdown content, metadata, and Giscus component.
  - `Giscus Component`: A reusable UI component wrapping the Giscus script tag.
  - `Form Embed Component`: A simple wrapper for the suggestion form `iframe`.
- **Hosting:** The site will be deployed statically via a free tier service such as GitHub Pages, Vercel, or Netlify.

## Testing Decisions

- **Philosophy:** Given the time constraints and simple static nature of the app, testing will be minimal and focused on preventing build failures. Tests should verify structural integrity rather than complex UI interactions.
- **Modules Tested:**
  - `Content Collection Schema`: We will rely heavily on Astro's built-in Zod schema validation. The build process will naturally fail if Markdown files contain invalid frontmatter, serving as our primary "test" for data integrity.
  - No extensive unit or end-to-end tests will be written for the initial MVP to save time, relying on manual verification for UI layout and basic functionality.

## Out of Scope

- Custom user accounts, authentication, or profiles (handled by GitHub for comments).
- A custom backend or database (e.g., PostgreSQL, MongoDB).
- Complex server-side filtering or advanced search functionalities.
- A built-in marketplace for buying/selling goods.
- Real-time RSVP or event calendar systems.
- Automated processing of form submissions into the codebase.

## Further Notes

- The project will be open-sourced to encourage collaborative contributions from other CERN interns and staff.
- The UI should be kept minimal and clean, perhaps leveraging a simple CSS framework like Tailwind CSS for rapid styling.