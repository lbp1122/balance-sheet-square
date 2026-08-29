# Balance Sheet Square — GitHub Pages edition

An interactive, responsive personal balance sheet visualizer in English, Malay, and Chinese.

## Fastest deployment: upload the ready-made files

Use the separate `balance-sheet-square-github-upload.zip` package. Unzip it, then upload **the contents** (`index.html`, `.nojekyll`, `favicon.svg`, and the `assets` folder) to the root of your GitHub repository.

In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**. Save and wait for GitHub Pages to publish.

Recommended repository name: `balance-sheet-square`. The public URL will be:

`https://lbp1122.github.io/balance-sheet-square/`

To use the root address `https://lbp1122.github.io/`, the repository must be named exactly `lbp1122.github.io`. Do this only if you want this calculator to replace the current root website.

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

Upload the contents of `dist/` to the GitHub Pages publishing branch or folder.

## How interactivity works

GitHub Pages serves the generated HTML, CSS, and JavaScript. Calculations, language switching, scenarios, proportional blocks, and browser saving all run directly on the visitor's device. No database or server is required. Each visitor's figures remain in that visitor's browser storage.

The web edition installs a service worker after the first successful visit, allowing later offline use. The `android-app` folder contains a separate Google Play project with a bundled, fully offline copy of the calculator and native PDF saving and sharing. Play listing and release guidance are in `play-store`.

## Security

The package contains no password, ChatGPT credential, API key, or private financial data. A public GitHub repository exposes its source code, so never add passwords or secret keys to these files.
