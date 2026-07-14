# Creative STEM Modules

Interactive STEM website for kids and parents, built around Arduino learning kits.

Live site:
[https://creative-stem-modues.vercel.app/](https://creative-stem-modues.vercel.app/)

## Project Overview

This project presents beginner-friendly Arduino kits and guided tutorials in a colorful, mobile-friendly format.

The website includes:

- Product storytelling for two kits (Sound and Light, Motion Detector)
- Step-by-step tutorial pages with progress tracking
- Bilingual UI (English and Georgian)
- Parent-focused explanation and downloadable resources
- A working order form using Formspree

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel (hosting/deployment)

No framework or build step is required.

## Features

- Responsive landing page with hero animations and section-based navigation
- Language toggle with localStorage persistence
- Tutorial flow with next-step interactions and progress bar
- SEO essentials:

  - Page descriptions
  - Canonical URLs
  - Open Graph and Twitter metadata
  - JSON-LD organization schema
  - robots.txt
  - sitemap.xml

## Project Structure

```text
Creative-STEM-Modues-/
  index.html              # Main landing page
  styles.css              # Global styles
  index.js                # Landing page interactions + i18n
  robots.txt              # Crawling rules
  sitemap.xml             # Indexable URLs
  images/                 # Landing page assets
  tutorial/
    tutorial.html         # Generic tutorial page
    tutorial-sound.html   # Sound & Light tutorial page
    tutorial-motion.html  # Motion Detector tutorial page
    tutorial.css          # Tutorial page styles
    tutorial.js           # Tutorial logic + i18n
    images/               # Tutorial assets
```

## Run Locally

Because this is a static site, you can run it with any static server.

Option 1 (VS Code Live Server):

1. Open the project folder in VS Code.
2. Right-click index.html.
3. Choose Open with Live Server.

Option 2 (Python):

1. Open terminal in the project root.
2. Run:

```bash
python -m http.server 5500
```

1. Open [http://localhost:5500/Creative-STEM-Modues-/](http://localhost:5500/Creative-STEM-Modues-/)

## Deployment

The project is deployed on Vercel.

To deploy updates:

1. Push your latest changes to GitHub.
2. Vercel auto-deploys from the connected branch.
3. Verify that the live URL and sitemap are accessible.

## SEO Notes

Current canonical base URL:

[https://creative-stem-modues.vercel.app/](https://creative-stem-modues.vercel.app/)

If the domain changes again, update these files:

- index.html
- tutorial/tutorial.html
- tutorial/tutorial-sound.html
- tutorial/tutorial-motion.html
- robots.txt
- sitemap.xml

Then re-submit sitemap.xml in Google Search Console.

## Customization Tips

- Update text translations inside index.js and tutorial/tutorial.js.
- Replace placeholder bank/contact details in index.html for production.
- Replace sample code download placeholder link in the downloads section.
- Optimize images (WebP/AVIF) to improve load speed and SEO.

## Contact

Current contact references in the site:

- [info@stemkits.ge](mailto:info@stemkits.ge)
- +995 500 00 00 00

Update these to your official support channels when ready.
