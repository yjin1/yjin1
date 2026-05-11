# Research Lab Website

This is a Next.js website for our research lab, showcasing our work in AI, sustainable energy, and climate modeling.

## Features

- Homepage with hero section, about, research projects, team members, and contact form
- Dedicated pages for About, Research, Team, and Contact
- Responsive design using Tailwind CSS
- TypeScript for type safety

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Project Structure

- `app/page.tsx` - Homepage
- `app/about/page.tsx` - About page
- `app/research/page.tsx` - Research projects page
- `app/team/page.tsx` - Team members page
- `app/contact/page.tsx` - Contact page
- `app/components/Navigation.tsx` - Navigation component

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- ESLint

## Build

To build the project for production:

```bash
npm run build
```

## Deploy

The project is configured for static export and can be deployed to GitHub Pages using GitHub Actions.

1. Create a new repository on GitHub.
2. Push this code to the `main` branch of your repository.
3. Go to your repository settings > Pages.
4. Set the source to "GitHub Actions".
5. The workflow will automatically build and deploy on pushes to `main`.
6. Your site will be available at `https://<username>.github.io/<repository-name>/`.
