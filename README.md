# GRTWebsite2.0
A Next.js port of the GRT website, with the aims of keeping the theme the same but improving code readability and 
maintainability, as well as modernizing the CSS and JS logic.

### Running locally
Make sure you have a compatible version of Node installed.

This project uses `googleapis` for build-time static props similarly to [`events-app`](https://github.com/gunnsec/events-app#running-locally).
The website uses the same service account as [`guava-bot-slack`](https://github.com/ky28059/guava-bot-slack); go there for
info about creating a service account and downloading a credentials file. In addition to the steps outlined in the 
`guava-bot-slack` README, enable the Google Docs API.

![image](https://user-images.githubusercontent.com/60120929/182207596-6274a973-107a-46cd-bc4c-cb35b67361cd.png)

You should have a `keys.json` that looks something like this:
```json
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n...\n...\n...\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}
```
Instead of using a `keyFile` to authenticate, for this app credentials are passed via the `credentials` property from 
environment variables. To define these variables locally, create a `.env.local` file in the root directory that declares 
your `CLIENT_EMAIL`, `PRIVATE_KEY`, and the ID of the updates google doc. Your `.env.local` should look something like 
this:
```
CLIENT_EMAIL=...
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n...\n...\n...\n...\n-----END PRIVATE KEY-----\n
DOC_ID=...
```
For the `PRIVATE_KEY`, make sure that the `\n` newline characters are kept as `\n` and not converted to actual newlines,
or the `.env` will not be parsed correctly.

After defining environment variables, run `npm install` to install dependencies and `npm run dev` to start the dev server
on `localhost:3000`.

### Changelog
The following is an incomplete changelog of differences from the old PHP website. I may move this to an issue or remove
this entirely at some point, perhaps after the port is finished.

#### Fundamental changes
- Next.js as a framework, instead of PHP and vanilla JS
- `tailwindcss` instead of raw CSS and style tags
- React instead of raw HTML
- PWA capabilities with `next-pwa` (this isn't strictly necessary, but we had the manifest already so I thought "why not?")

#### Bug fixes
- Fixed navbar wrapping and disappearing issues with `display: flex`
- Fixed subnavbar wrapping and expanding issues with `display: flex`
- Fixed navbar caret off centering the navlinks with `position: absolute`
- Fixed footer not staying at the bottom of the page when the content doesn't fill the whole screen
- Fixed page title saying "GRT | FIRST" on `/join`, `/donations`
- Fixed favicon on non-index pages

#### UI changes / improvements
- Changed `GRT | Page` titles to `Page | GRT`
- Added block quote for `firstinspires.org` quotes in `/FIRST` instead of having them be separate sections
- Made 2019 and 2018 in `/FIRST/accolades` obey the same award formatting as the other years
- Added year subheadings to `/FIRST` writeups
- Split and rearranged long paragraphs and sections in `/FIRST` writeups, used a side-by-side flex layout for tall images
- Added jumbotron for "teach a man to fish" quote in `/mentors`
- Added captions to images in `/mentors/*`
- Used block quote for interview responses in `/mentors/*`
- Redid list styling, expanded on list items in `/join`
- Used disclosures for Q&A in `/summer`
- Added "elevator pitch" blurb section in `/summer`
- Added alert-ish box for the "sign-ups available" text in `/summer`
- Removed unnecessary one-item subnav for pages with no subpages
- Added a black overlay for text contrast on the home page slideshow
- Added carets and shadow to home page timeline boxes
- Redesigned home page sponsors section to eliminate awkward grid, hover color, and overflow
- Used block quote for payment details in `/donations` instead of manually spaced `<p>`s
- General typo fixes, wording improvements
- Generally more semantic HTML: `<footer>` for the footer, `<header>` and `<nav>` for the navbar, etc.
- Generally less dependence on images: svg icon for down arrow on home page, css-only triangles for navs, css-only timeline and dots (replacing the images the old website used for the nav triangles, down arrow, and timeline)
