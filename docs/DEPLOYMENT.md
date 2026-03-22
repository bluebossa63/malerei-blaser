# Deployment Proposal — Malerei Blaser

## Recommended target
**Azure Static Web Apps (SWA)**

## Why this is the best fit
The current project is an **Astro static site**:
- `output: "static"`
- no backend runtime required
- no SSR
- no dynamic API layer in the repo
- current build output is generated into `dist/`

That makes **Azure Static Web Apps** the cleanest deployment target.

## Recommendation summary
Use:
- **Azure Static Web Apps** for hosting
- **GitHub Actions** for CI/CD
- **Custom domain** for the final production hostname
- Optional: keep forms external or move later to a lightweight serverless function / Formspree / Graph mail flow

Do **not** use App Service for v1.
Do **not** use Blob+CDN unless SWA is unavailable for policy/cost reasons.

## Option comparison

### 1. Azure Static Web Apps — recommended
**Pros**
- native fit for static Astro output
- easy GitHub integration
- built-in HTTPS
- straightforward custom domain binding
- simple deployment story for a small marketing site
- lower operational overhead than App Service

**Cons**
- if later a custom backend is needed, architecture expands

**Verdict**
Best default for the current repo and current scope.

### 2. Azure Blob Storage + CDN / Front Door
**Pros**
- very cheap for pure static assets
- highly scalable

**Cons**
- more infrastructure wiring
- more manual work for routing/headers/cache behavior
- less ergonomic than SWA for this project stage

**Verdict**
Only worth it if you want stricter infra control or already have a standard static-hosting pattern around Blob/CDN.

### 3. Azure App Service
**Pros**
- flexible if a Node runtime becomes necessary later

**Cons**
- overkill for a static Astro site
- more ops surface than needed
- higher cost / complexity for no current benefit

**Verdict**
Not recommended for v1.

## Deployment shape

### Build
```bash
npm ci
npm run build
```

### Output
- publish directory: `dist`

### Runtime
- none required (static hosting)

## Azure artifacts needed
To deploy immediately once Azure credentials arrive, one of these paths is needed:

### Preferred
1. `AZURE_SUBSCRIPTION_ID`
2. service principal with rights to create/manage a Static Web App
3. target resource group name
4. target SWA name
5. final hostname / domain

### Alternative
1. existing Static Web App already created
2. SWA deployment token
3. target hostname / domain details

## Required follow-up config
Before production go-live, confirm:
1. final domain
2. DNS ownership / cutover path
3. whether contact form remains disabled, uses external form provider, or routes to mail/serverless backend
4. whether placeholder images/references are replaced

## Suggested repo wiring
- keep Astro project as-is
- add `staticwebapp.config.json` for headers / fallback behavior
- add GitHub workflow for SWA deploy

## Current blocker to real production deploy
The site can be hosted now, but content is still not fully production-complete because these items remain operator-provided:
- final approved images
- final references / testimonials
- final contact workflow decision

## Fastest path when Azure credentials arrive
1. create or identify Azure Static Web App
2. connect GitHub repo
3. set app location to repo root
4. set output location to `dist`
5. push deploy workflow / token config
6. bind custom domain
