# Software Design Document — Malerei Blaser Website

**Project:** Malerei Blaser (Atelier Martin Blaser, Spiez)
**Author:** Meridian (Codex / nice'n'easy)
**Date:** 2026-03-22

---

## 1. Overview

### 1.1 Goal
Launch a modern static website for Malerei Blaser within 24h that showcases services (Fassaden, Innenräume, Spezialtechniken), references, and contact information, optimized for lead generation (Telefon/E-Mail/WhatsApp) and mobile-first experience.

### 1.2 Success Metrics
- Page load < 1s on 4G (Core Web Vitals green)
- Lighthouse ≥ 90 für Performance/Accessibility/Best Practices/SEO
- Conversion Targets: mindestens 3 sichtbare CTA-Punkte (Telefon, E-Mail, WhatsApp)
- Erweiterbarkeit: neue Projekte / Bilder können per Markdown/YAML ergänzt werden

### 1.3 Constraints
- Keine bestehenden hochauflösenden Bilder → Platzhalter/Stock + späterer Austausch
- Hosting auf GitHub Pages (oder Netlify) via static site
- Content in Deutsch (CH), optional später EN/FR

---

## 2. Personas & Flows
| Persona | Ziel | Flow |
|---------|------|------|
| Privatkunde (Hausbesitzer) | Inspiration & Angebot | Startseite → Leistungen → Galerie → Kontaktformular |
| Architekt/Bauleiter | Referenzen & Professionalität | Startseite → Projekte/Referenzen → Über uns → Kontakt |
| Stammkunde (Hotel/Gastro) | Schneller Ansprechpartner | Startseite → CTA oben → Telefon/WhatsApp |

Primary CTA: Telefon + Kontaktformular; Secondary CTA: WhatsApp, E-Mail.

---

## 3. Information Architecture

1. **Hero** — Claim, CTA (Anruf, Offerte)
2. **Leistungen** — 3-4 Kacheln (Fassaden, Innenräume, Spezialtechniken, Reparaturen)
3. **Projekte & Galerie** — Grid mit 6 Beispielen, Filter möglich
4. **Prozess** — 3 Schritte (Beratung → Ausführung → Abschluss)
5. **Testimonials / Vertrauen** — Kundenstimmen + Partnerlogos
6. **Über uns** — Teamfoto, Werte, Standortkarte
7. **Kontakt** — Formular + Kontaktinfos + Öffnungszeiten

Footer: Impressum, Datenschutz, Social Links.

---

## 4. Visual Design
- **Look & Feel:** Moderne Schweizer Handwerksästhetik — klare Typografie, gedeckte Naturfarben, Betonung auf Qualität.
- **Farben:**
  - Primär: #0F172A (Navy), #F97316 (Highlight), #F3F4F6 (Background)
  - Sekundär: #1E293B, #94A3B8
- **Fonts:** `"Inter", "Work Sans"` — display + body
- **Iconography:** Lucide Icons
- **Animation:** dezente Fade/Scale, Intersection Observer

---

## 5. Architecture & Stack
| Layer | Choice | Reason |
|-------|--------|--------|
| Static Site | Astro 4 + TailwindCSS | Blitzschnell, Komponenteneditor, Islands
| Data | Markdown/MDX + YAML | Einfache Pflege ohne CMS
| Deployment | GitHub Pages + Actions | Schnell + kostenlos
| Forms | Formspree / Netlify Forms | Kein Backend nötig
| Analytics | Plausible / Simple Analytics (Privacy-first)

Structure:
```
/
├─ src/
│  ├─ components/
│  ├─ layouts/
│  ├─ content/ (Markdown collections)
│  └─ pages/
├─ public/
└─ docs/SDD.md
```

---

## 6. Components

| Component | Purpose |
|-----------|---------|
| `HeroCTA` | Headline, Subheadline, CTA Buttons |
| `ServiceCards` | Leistungen mit Icons |
| `ProjectGrid` | 6 Projekte, responsive Masonry |
| `ProcessSteps` | Stepper UI |
| `TestimonialsCarousel` | 2-3 Kundenstimmen |
| `ContactPanel` | Formular + Kontaktbox |
| `Footer` | Navigation, Social, Rechtliches |

---

## 7. Content Plan
- **Texte:** Deutsch, professionell, klar — Markdown-Dateien (`/src/content/*.md`)
- **Bilder:** Platzhalter (Unsplash) mit Farbfiltern + später Austausch
- **Formular:** Felder (Name, E-Mail, Telefon, Projektbeschreibung)

---

## 8. Deployment & Ops
- GitHub Actions Workflow (`deploy.yml`) → Astro build → Pages Deploy
- Branch protection: main + PR review
- Preview via `npm run dev`

---

## 9. Risks & Mitigation
| Risk | Impact | Mitigation |
|------|--------|------------|
| Kein reales Bildmaterial | Mittel | Platzhalter + CTA "Portfolio anfordern" |
| Kurzfristige Scope-Änderungen | Hoch | Strikte IA, neue Wünsche → Backlog |
| SEO-Abnahme | Mittel | Lighthouse Checks + Structured Data |

---

## 10. Next Steps
1. Setup Astro + Tailwind Scaffold
2. Implement Komponenten + Content
3. Deploy via GitHub Pages
4. QA (Accessibility, Responsive, SEO)
