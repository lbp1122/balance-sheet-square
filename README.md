# Balance Sheet Square — GitHub Pages edition

An interactive, responsive personal balance sheet visualizer in English, Malay, and Chinese.

## Public website

https://lbp1122.github.io/balance-sheet-square/

GitHub Pages is configured from the `main` branch and repository root.

## Offline use

The website includes a Progressive Web App manifest and a service worker. After a visitor opens the site online once, the main calculator files are cached on that device. The calculator can then reopen and calculate without an internet connection.

Figures are stored in the visitor's browser storage and remain on that device. Clearing browser/site data removes the saved figures.

To test offline mode:

1. Open the website online and wait for it to finish loading.
2. Close and reopen it once so the service worker controls the page.
3. Turn on airplane mode.
4. Reopen the same address.

When publishing new generated asset filenames, also update `sw.js` and change `CACHE_NAME` so visitors receive the new version.

## Edit and rebuild

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Edit the wording and calculations in `src/App.jsx`. Edit the design in `src/styles.css`.

Create a fresh upload package with:

```bash
npm run build
```

Upload the contents of `dist/` to the GitHub Pages publishing branch or folder. Preserve `manifest.webmanifest`, `sw.js`, and the service-worker registration in `index.html`.

## How interactivity works

GitHub Pages serves the generated HTML, CSS, and JavaScript. Calculations, language switching, scenarios, proportional blocks, and browser saving all run directly on the visitor's device. No database or server is required.

## Security

The package contains no password, ChatGPT credential, API key, or private financial data. A public GitHub repository exposes its source code, so never add passwords or secret keys to these files.
