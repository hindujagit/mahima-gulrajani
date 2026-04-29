# Mahima Therapist Website

A Vercel-ready React + Vite website for Mahima Gulrajani.

## Pages

- `/` Home
- `/services` Services page
- `/contact-us` Contact page with Google Form embed
- `/book-appointment` Book appointment page with Calendly embed

## Setup

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Replace images

Images are in:

```txt
public/images/
```

Keep the same filenames if you replace them:

```txt
hero-therapy-session.jpg
about-mahima-profile.jpg
service-stress-anxiety.jpg
service-relationship-grief.jpg
service-workplace-wellbeing.jpg
service-child-adolescent.jpg
```

## Replace Google Form and Calendly

Open:

```txt
src/data.js
```

Replace:

```js
googleFormEmbedUrl
calendlyEmbedUrl
```

## WhatsApp

The floating WhatsApp button number is also in:

```txt
src/data.js
```
