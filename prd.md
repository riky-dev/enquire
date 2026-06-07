## Problem Statement

Short-term interns and newcomers at CERN face significant challenges when relocating to the Geneva/Pays de Gex area. Beyond finding everyday services (barbers, phone repair, mechanics, etc.) that speak English, they struggle with the complex logistics of moving to a cross-border region. This includes figuring out how to get to Geneva/CERN, navigating the rental housing market on the Swiss vs. French side, and handling administrative tasks (visas, bank accounts, SIM cards, health insurance). 

While CERN provides official guides, they are often high-level, lack granular details, and don't address the practical "hacks" or step-by-step guides that newcomers actually need. Current informal knowledge sharing is heavily reliant on ephemeral WhatsApp groups, making critical information hard to find, unsearchable, and easily lost over time.

## Solution

A centralized, collaborative, lightweight static website (built with Astro) branded as **Enquire** (a reference to Tim Berners-Lee's original 1980 database system built at CERN) that serves as a comprehensive onboarding companion and directory for CERN newcomers. To ensure trademark safety while maintaining search relevance, the site will carry the tagline: *An unofficial relocation guide & directory for CERN newcomers*.

The site will provide two main sections:
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
15. As a newcomer living on the French side, I want to know what banking and currency conversion options are available to me, since some Swiss digital banks (e.g. Yuh) do not accept French addresses.
16. As a bank customer, I want to understand how to handle requests from banks regarding Swiss or French Taxpayer Identification Numbers (TIN).
17. As an international driver, I want to know how to exchange my foreign driving license, where to get lessons, and how to get car insurance for foreign-registered vehicles.
18. As a car owner, I want to understand the steps and timelines for importing a Swiss used car to France using customs/green plates.
19. As a traveler, I want to know the correct procedure if my Swiss legitimation card is lost or stolen abroad to avoid unnecessary bureaucratic travel.
20. As a Uniqa health insurance policyholder, I want clear instructions on what is covered (e.g., glasses, dermatology, extreme sports rescue) and what documentation is required.
21. As a resident on the French side, I want to know how to dispose of bulky furniture/waste without having to transport it to a déchetterie myself.
22. As a campus commuter, I want to find helpful campus hacks such as where to find quiet phone boxes, how to locate showers, and where to rent free safety gear.

## Expanded Directory & Guide Scope (from Community Feedback)

To address real-world newcomer pain points, the initial content collections will be seeded with the following directories and guide topics:

### 1. New Directory Categories & Seed Listings
- **Barbers**: *Loïc & Lea (Saint-Genis)* - English-speaking and bookable online via Planity.
- **Bicycle Repair/Shops**: *Bouticycle (Ferney-Voltaire)* (English-speaking, e-bike discounts) and *Culture Velo (Thoiry)*.
- **Car Repair & Tyres**: *Feu Vert (Thoiry)*, *Autodistribution (Prévessin)*, and info on the *CERN Car Club* (DIY tyre mounting machines).
- **Electronics & Console Repair**: *GSM Shop (Geneva)* and *iFixit* guides.
- **Plumbing**: *ABC Plomberie* (French side, basic English spoken).
- **Leisure & Sports**: *Totem (Bouldering)*, *Grimper.ch (Satigny)*, and *CERN Climbing Club*.
- **Hiking Routes**: *Salève* (via public transit/cable car), *Crête de la Neige / Reculet* (access via Bus 68 from Sergy/Thoiry), and *Valserhône river routes* (via bus X33 to Bellegarde).

### 2. Practical Step-by-Step Guides
- **Cross-Border Banking & Currency**: 
  - Compare bank accounts suitable for both Swiss and French residents (UBS, Dukascopy, Revolut).
  - Explain how to use **Ibani** (CH IBAN with auto-conversion to EUR) and **Wise** to minimize exchange rate losses.
- **TIN & AVS Numbers Demystified**:
  - Step-by-step on finding your Swiss TIN (AVS number from Cards Service) and how to respond to bank requests if you live in France and don't have a French TIN yet.
- **Avoiding Housing Deposit Scams & Dossier Prep**:
  - Tips for negotiating deposits after contract signing, verifying agencies (e.g., BC Immobilier, Matera), and obtaining Swiss non-pursuit extracts.
- **Legitimation Card Survival Guide**:
  - Actionable advice for lost/stolen cards (e.g., why reporting a card as "lost" instead of "stolen" when abroad avoids a forced trip back for a police report).
  - Guidelines for handling airlines/border control agents who do not recognize the card.
- **Vehicle Importing, Driving Licensing, and Insurance**:
  - Navigating green plates (CD/transit) with the CERN Mobility Center (including the 2-3 month waiting period).
  - Exchanging driving licenses in Geneva/Pays de Gex, and taking tests (theory is available in English, practical is French-only).
  - Insuring UK/foreign-plated cars in France (e.g., FabFrenchInsurance, Allianz).
- **Getting the Most Out of Uniqa Health Insurance**:
  - Clarifying that optical prescriptions must come from an ophthalmologist (not an optician) to be reimbursed.
  - Getting medical necessity certificates for dermatological treatments.
  - Recommending supplementary insurance (e.g., Austrian Alpine Club) for helicopter rescue and repatriation during mountain activities.
- **Bulky Waste Disposal (France)**:
  - Instructions on scheduling free curbside bulky item pick-ups in Pays de Gex (demarchesdechets.paysdegex.fr).
- **CERN Campus Hacks**:
  - Locating quiet phone boxes on campus (e.g., Library booths).
  - Locating showers on campus using the `maps.cern.ch` sanitary filters.
  - Borrowing free helmets/vests from the CERN Mobility Center.

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