# Leon Muyambo – Portfolio

React + TypeScript + Vite site, deployed to GitHub Pages with GitHub Actions.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Edit content
Everything (bio, skills, projects, experience, education, certificate) is in `src/data/content.ts`.
- Add your LinkedIn URL to `profile.linkedin` and the button appears.
- Add `repo: 'https://github.com/MuyamboLeon/<repo>'` (and optionally `demo:`) to any project and its link appears.
- Replace `public/assets/Leon_Muyambo_CV.pdf` when your CV changes. Keep references off the public copy.

## Deploy to GitHub Pages
1. Create a repository named **MuyamboLeon.github.io** (this gives the URL `https://muyamboleon.github.io/`).
2. Push this project to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/MuyamboLeon/MuyamboLeon.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Each push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

**Using a normal project repo instead?** The URL becomes `https://muyamboleon.github.io/<repo>/`. In the repo go to *Settings → Secrets and variables → Actions → Variables* and add `VITE_BASE` = `/<repo>/`.
