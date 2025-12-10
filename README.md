# Prince Balaj — Portfolio

This is a simple static portfolio (HTML + CSS). Use the instructions below to push this project to GitHub and deploy with Netlify.

## Before you start
1. Replace `assets/avatar.jpg` with your photo (keep the same filename).
2. Add other images in `assets/` (project1.jpg etc).

## Option A — Quick deploy (Drag & Drop)
1. Zip the contents of this folder (select the files and compress).
2. Go to https://app.netlify.com/sites and sign in.
3. Click "Add new site" → "Deploy manually" → Drag & drop the zip or the folder.
4. Netlify will upload and publish the site immediately. Your live URL will be shown in the Netlify dashboard.

## Option B — Deploy from GitHub (recommended — keeps site updatable)
1. Create a GitHub repository:
   - On GitHub create a new repo (e.g. `portfolio`) under your account `balajprince46-faridi` and make it Public.
   - Or from your terminal (if you have GitHub CLI):
     ```
     git init
     git add .
     git commit -m "Initial commit — portfolio"
     gh repo create balajprince46-faridi/portfolio --public --source=. --remote=origin --push
     ```
   - Or with plain git:
     ```
     git init
     git add .
     git commit -m "Initial commit — portfolio"
     # replace USERNAME and REPO with your values:
     git remote add origin git@github.com:USERNAME/REPO.git
     git branch -M main
     git push -u origin main
     ```

2. Deploy on Netlify from Git:
   - Sign in to Netlify and click "Add new site" → "Import from Git".
   - Connect your Git provider (choose GitHub and authorize Netlify if needed).
   - Select the repository and branch (`main`).
   - For "Build command" leave blank and set "Publish directory" to `.` (the repository root). If Netlify requires a value, use `.`.
   - Click "Deploy site". Netlify will provision and give you a live URL.

## Netlify forms (already included)
- The contact form in `index.html` uses Netlify Forms (it has `data-netlify="true"` and `form-name`).
- To see submissions go to Netlify dashboard → Site → Forms.

## Custom domain
- In Netlify dashboard: Domain settings → Add custom domain → follow instructions and configure DNS where your domain is registered.

## Troubleshooting
- If images do not show, make sure `assets/` is pushed and filenames match exactly (case-sensitive).
- If you use private repo, authorize Netlify to access it.
- If Netlify runs a build step you didn't expect, clear build command and set publish directory to `.`.

If you'd like, I can push these files for you after you create the repository on GitHub and tell me the repo URL.
