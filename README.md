# SP Construction Group website

Next.js 14 site, exported as static files. Same framework as the current spconstructiongroup.com.

## Run it locally
```
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the finished site to /out
```

## Where things live
| What | File |
|---|---|
| Homepage section order | `app/page.tsx` |
| Each homepage section | `components/home/*.tsx` (Hero, StatsIntro, AudienceSelector, Commitments, FeaturedWork, OwnerReporting, Process, Testimonials, WhereWeBuild, Team, Insights, ClosingCta) |
| Header and phone menu | `components/layout/Header.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Careers / Subcontractors / Request a budget | `app/careers/page.tsx`, `app/subcontractors/page.tsx`, `app/request-a-budget/page.tsx` |
| Audience views ("Tailor this site") | `public/js/audiences.js` |
| Interactions (menu, scroll effects, project strip, forms) | `public/js/site.js` |
| Colors, layout and phone styles | `app/globals.css` |
| Company email, phone, form endpoints | `content/site.ts` |
| Images | `public/images/` |

To move a homepage section, reorder the lines in `app/page.tsx`. To remove one, delete its line.

## Forms
Each form posts to Formspree. Create three forms at formspree.io (budget and subcontractors to bids@, careers to careers@) and paste each endpoint into `content/site.ts`. Until then the forms validate but show a "not connected yet" note. File uploads (drawings, resumes, W-9s) require a Formspree paid plan.

## Deploy
1. Push this folder to a GitHub repository owned by SPCG.
2. In Vercel, import the repository. Framework: Next.js. No other settings needed.
3. For the temporary preview, add the environment variable `NEXT_PUBLIC_NOINDEX=1` so search engines skip it.
4. To go live, either point spconstructiongroup.com at the Vercel project, or hand the repository to the web developer to publish on their hosting. Remove `NEXT_PUBLIC_NOINDEX` at launch.

## Before launch
- Replace bracketed placeholders like [48 hours], [Value], [Weeks], [25th], [Net X], [$250,000] and the benefits list.
- Add headshots (Team section) and project photos (Featured work) to `public/images/` and swap them into the components.
- Confirm the open roles on the Careers page.
- Darken small gray labels (#8C8F93 to #6E7175) for accessibility contrast, and add a pause control to the scrolling sector strip.

## Digital business cards

Each person's card page lives in `public/<handle>/index.html` (e.g. `/jdiaz/`), and their contact file in `public/cards/`. `vercel.json` serves the `.vcf` files so phones open "Add to Contacts". To retire a page, replace it with a redirect to the Contact section.
