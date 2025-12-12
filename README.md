Portfolio Redesign — branch: redesign/profile-update

What's changed
- Responsive avatars grid for the profile section (mobile-first).
- Simple responsive gallery with image placeholders.
- AI helper client and a Netlify function stub at netlify/functions/chat.js.
- Placeholder assets referenced under /assets/placeholders/ — add your real images or update paths.

Files added/updated in this branch
- index.html
- styles.css
- netlify/functions/chat.js
- README.md

How to test locally
1. Install Netlify CLI (optional but recommended):
   npm install -g netlify-cli

2. Run a dev server that supports Netlify Functions:
   netlify dev

3. Open http://localhost:8888 (or the port netlify dev reports).
   Use the AI helper form to POST to /.netlify/functions/chat which will return a placeholder response.

Wiring a real AI backend
- The function netlify/functions/chat.js contains a stub with instructions. To enable real responses:
  1. Add your provider key (for example OPENAI_API_KEY) to your Netlify site settings (Environment > Add variable).
  2. Update the function implementation to call the provider API and return its output.

Notes
- This commit provides structure and UI for the redesign. It references placeholder assets located at /assets/placeholders/* — add SVG/PNG/WebP files to that folder or replace the paths with hosted assets.

Commit message used for this update:
"Redesign: responsive avatars, AI helper, gallery, assets placeholders"
