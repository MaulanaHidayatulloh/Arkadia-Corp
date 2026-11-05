# Arkadia Corp | Website Redesign

A modern, responsive website redesign for **PT Arkadia Digital Media Tbk.**, built with React, Vite, and Tailwind CSS. This project recreates and modernizes the Arkadia Corp website experience with a clean interface, reusable components, responsive layouts, and client-side navigation.

## Overview

Arkadia Corp is a digital media company. This project focuses on improving the presentation of its corporate website while maintaining its brand identity and making its content easier to navigate.

The website is developed from scratch using a component-based architecture, with dedicated pages for corporate information, business activities, careers, contact details, and investor relations.

## Features

- **Responsive design** - layouts adapted for desktop, tablet, and mobile devices.
- **Modern UI** - clean layouts with consistent typography, spacing, and brand colors.
- **Reusable components** - shared interface elements and modular page sections.
- **Client-side routing** - navigation between pages using React Router.
- **Corporate information** - dedicated About and Business pages.
- **Career page** - company culture, career-related content, and opportunities.
- **Contact page** - office locations, contact information, and directions.
- **Investor Relations** - pages for company presentations, general meetings, disclosures, reports, prospectus, and press releases.

## Tech Stack

| Technology     | Purpose                              |
| -------------- | ------------------------------------ |
| React 19       | Component-based user interface       |
| Vite           | Development server and build tooling |
| Tailwind CSS 4 | Styling and responsive layouts       |
| React Router 7 | Client-side routing                  |
| Lucide React   | Interface icons                      |
| ESLint         | Code quality and linting             |

## Pages

| Route                                           | Description                              |
| ----------------------------------------------- | ---------------------------------------- |
| `/`                                             | Home                                     |
| `/about`                                        | About Arkadia                            |
| `/business`                                     | Business overview                        |
| `/career`                                       | Career and company culture               |
| `/contact`                                      | Contact information and office locations |
| `/investor-relations/company-presentation`      | Company presentation                     |
| `/investor-relations/general-meetings`          | General meetings                         |
| `/investor-relations/disclosure-of-information` | Disclosure of information                |
| `/investor-relations/annual-report`             | Annual reports                           |
| `/investor-relations/financial-report`          | Financial reports                        |
| `/investor-relations/prospectus`                | Prospectus                               |
| `/investor-relations/press-release`             | Press releases                           |
| `/investor-relations/press-release/:id`         | Individual press release                 |
| Any unknown route                               | Custom 404 page                          |

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/MaulanaHidayatulloh/Arkadia-Corp.git
```

### 2. Navigate to the project directory

```bash
cd Arkadia-Corp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the website.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the local development server   |
| `npm run build`   | Builds the production version         |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint checks                    |

## Development Notes

- Page-specific sections are organized into reusable components where appropriate.
- Images are maintained in the project's assets directory and imported into components as needed.
- Navigation is handled internally using React Router.
- The custom 404 page handles routes that do not match a defined page.
- The project uses Tailwind CSS for styling and responsive behavior.

## Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The generated files will be placed in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## Project Goals

- Modernize the visual presentation of the Arkadia Corp website.
- Improve usability and responsive behavior across screen sizes.
- Maintain a consistent corporate design language.
- Make the codebase easier to maintain and extend.

## Author

**Maulana Hidayatulloh Mujanah**

- GitHub: [@MaulanaHidayatulloh](https://github.com/MaulanaHidayatulloh)
- Repository: [Arkadia-Corp](https://github.com/MaulanaHidayatulloh/Arkadia-Corp)

---

_Built as a website redesign project for PT Arkadia Digital Media Tbk._
