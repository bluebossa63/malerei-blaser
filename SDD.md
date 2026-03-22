# SDD — Malerei Blaser Website

## 1. Purpose
Diese Software Design Description beschreibt die aktuelle technische Umsetzung und die nächsten produktionsrelevanten Schritte für die Website von **Atelier Martin Blaser, Spiez**.

Ziel ist eine schlanke, performante, mobilfreundliche Marketing-Website mit klaren Kontakt- und Offerten-CTAs.

---

## 2. Scope
Im aktuellen Stand umfasst das System eine statisch generierte Website mit einer Landingpage und folgenden Inhaltsblöcken:

- Hero / Value Proposition
- Leistungsübersicht
- Galerie / Referenzen
- Projektablauf
- Testimonials
- Kontaktsektion mit Formular und Direktkontakt

Nicht im aktuellen Scope enthalten:

- CMS / Redaktionsoberfläche
- Mehrsprachigkeit
- Backend-Applikation
- CRM-Integration
- Dynamische Referenzverwaltung
- Serverseitige Authentisierung

---

## 3. Business Goals
- Vertrauen in den Handwerksbetrieb schnell aufbauen
- Mobile Leads erzeugen
- Offertenanfragen vereinfachen
- Leistungen und Qualität klar kommunizieren
- Lokale Auffindbarkeit im Raum Spiez / Berner Oberland verbessern

---

## 4. Technical Summary
### Stack
- **Framework:** Astro 4
- **Runtime model:** Static site generation
- **Language:** Astro components + CSS
- **Deployment target:** statische Auslieferung

### Current site configuration
- `output: static`
- `site: https://bluebossa63.github.io/malerei-blaser`

Hinweis: Die konfigurierte `site`-URL verweist aktuell auf GitHub Pages unter einem persönlichen Namespace und muss vor produktivem Einsatz ggf. auf den finalen Zielhost angepasst werden.

---

## 5. Repository & Structure
### Repository
Aktueller Clone im Workspace:
- `/data/projects/malerei-blaser`

Aktueller Git-Remote:
- `origin = https://github.com/bluebossa63/malerei-blaser.git`

### Directory layout
```text
malerei-blaser/
├── astro.config.mjs
├── package.json
├── README.md
├── SDD.md
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.astro
│   │   ├── GalleryGrid.astro
│   │   ├── HeroCTA.astro
│   │   ├── ProcessSteps.astro
│   │   ├── ServiceCards.astro
│   │   └── Testimonials.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── dist/
```

---

## 6. System Architecture
### 6.1 Page composition
Die Startseite `src/pages/index.astro` ist als Komposition einzelner, klar getrennter UI-Komponenten aufgebaut:

1. `BaseLayout`
2. `HeroCTA`
3. `ServiceCards`
4. `GalleryGrid`
5. `ProcessSteps`
6. `Testimonials`
7. `ContactForm`

### 6.2 Layout responsibilities
`BaseLayout.astro` verantwortet:
- HTML-Grundstruktur
- `lang="de-CH"`
- Meta Title / Meta Description
- Header-Navigation
- Footer mit Kontaktlinks
- Einbindung globaler Styles

### 6.3 Styling approach
Die Gestaltung erfolgt über eine zentrale Datei `src/styles/global.css` mit:
- CSS Custom Properties für Farben, Abstände, Radien und Schatten
- komponentenorientierten Utility-/Section-Klassen
- responsive Breakpoints für Tablet und Mobile
- visueller Betonung auf Klarheit, Handwerk und Conversion

---

## 7. Component Design
### 7.1 HeroCTA
**Zweck:** Erste Wertvermittlung und schnelle Lead-Generierung.

**Enthält:**
- Positionierung des Betriebs
- primäre Aussage zur Qualität
- Telefon-, Offerten- und WhatsApp-CTA
- Vertrauens-/Reaktionszeit-Stats
- visuelles Hero-Bild

**Offen:**
- WhatsApp-Zielnummer verifizieren
- Hero-Bild durch echtes Referenzbild ersetzen

### 7.2 ServiceCards
**Zweck:** Kernleistungen einfach und mobil lesbar kommunizieren.

**Leistungen:**
- Fassaden
- Innenräume
- Spezialtechniken
- Reparaturen

### 7.3 GalleryGrid
**Zweck:** Referenzen visuell erlebbar machen.

**Aktueller Stand:**
- Beispielprojekte mit Platzhalterbildern von Unsplash

**Offen:**
- echte Projektbilder einsetzen
- Bildrechte / Nutzbarkeit sicherstellen

### 7.4 ProcessSteps
**Zweck:** Erwartungsmanagement und Vertrauensaufbau.

**Schritte:**
- Beratung
- Ausführung
- Abschluss

### 7.5 Testimonials
**Zweck:** Social Proof.

**Aktueller Stand:**
- Beispielzitate / Platzhalter

**Offen:**
- durch echte Referenzen oder alternative Vertrauenselemente ersetzen

### 7.6 ContactForm
**Zweck:** Conversion-Modul für Anfragen.

**Kanäle:**
- Formular
- Telefon
- E-Mail
- WhatsApp

**Aktueller Stand:**
- Formularpost auf `https://formspree.io/f/placeholder`

**Offen:**
- finales Formularziel definieren
- echte Kontaktdaten verifizieren
- Spam-/Missbrauchsschutz prüfen

---

## 8. Content & Data Model
Aktuell werden Inhalte direkt in den Komponenten als statische Datenstrukturen gepflegt.

### Beispiele
- Service-Liste als lokales Array in `ServiceCards.astro`
- Projektkarten als lokales Array in `GalleryGrid.astro`
- Testimonials als lokales Array in `Testimonials.astro`

### Konsequenzen
**Vorteile:**
- sehr einfache Auslieferung
- geringe Komplexität
- schneller Build

**Nachteile:**
- keine Redaktionsoberfläche
- inhaltliche Änderungen erfordern Code-Anpassungen
- höheres Risiko für Platzhalter im Live-System

---

## 9. SEO, Accessibility, Performance
### SEO
Bereits vorhanden:
- Seitentitel
- Meta Description
- semantische Abschnittsstruktur
- lokaler Sprachkontext (`de-CH`)

Noch offen:
- Open Graph / Social Meta Tags
- Canonical URL finalisieren
- strukturierte Daten (LocalBusiness)
- echte lokale NAP-Daten validieren

### Accessibility
Bereits vorhanden:
- semantische Links und Buttons
- Formularlabels vorhanden
- logische Inhaltsstruktur

Noch zu prüfen:
- Farbkontraste
- Fokuszustände
- Tastatur-Navigation
- sinnvolle Alt-Texte für alle finalen Bilder

### Performance
Bereits vorhanden:
- statische Auslieferung
- geringer JS-Footprint
- einfache Seitenstruktur

Noch offen:
- Bildoptimierung mit echten Assets
- Prüfung Lighthouse / Core Web Vitals

---

## 10. Security Considerations
- Externe Links und Formularziel müssen vor Go-live validiert werden
- Kein sensitiver Backend-Code im aktuellen Scope
- Kontaktformular benötigt sauberes Zielsystem und Basisschutz gegen Spam
- Platzhalter-Links dürfen nicht live bleiben

---

## 11. Deployment Assumptions
Aktuell spricht die Konfiguration für ein statisches Deployment, wahrscheinlich über GitHub Pages oder ein anderes Static Hosting.

Vor Go-live zu klären:
- finaler Hosting-Ort
- finale Domain
- DNS-Ziel
- gemeinsames Repo / Ziel-Remote
- Build-/Deploy-Pipeline

---

## 12. Known Gaps / Open Issues
1. `SDD.md` war im Clone nicht vorhanden und wurde neu erstellt
2. `README.md` ist noch minimal
3. Formularziel ist Platzhalter
4. WhatsApp-Link ist Platzhalter
5. Galerie nutzt externe Platzhalterbilder
6. Testimonials sind Platzhalter
7. Produktions-Kontaktdaten müssen verifiziert werden
8. Finales Shared-Repo / Hosting-Ziel ist noch nicht abschliessend bestätigt

---

## 13. Recommended Next Steps
### P1
- echte Kontaktdaten und CTA-Ziele verifizieren
- Formularziel produktionsfähig setzen
- Shared-Repo-Ziel bestätigen und Remote darauf ausrichten
- Hero-/Galeriebilder auf echte Assets umstellen

### P2
- Testimonials durch echte Referenzen oder neutrale Trust-Signale ersetzen
- README ergänzen
- SEO-Basis vervollständigen

### P3
- Deployment dokumentieren
- DNS-Cutover vorbereiten
- Review auf Accessibility / Security / Performance abschliessen

---

## 14. Decision Note: location vs shared repository
### Code location
**Ja, der lokale Ablageort ist richtig:**
- Projektcode gehört nach `/data/projects/malerei-blaser`
- Steuer- und Sprintdokumente gehören nach `/data/workspace`

### Git shared repository
**Noch nicht eindeutig bestätigt:**
- aktuell zeigt `origin` auf ein persönliches GitHub-Repo: `bluebossa63/malerei-blaser`
- falls das „gemeinsame Repo“ ein Team-/Org-Repo sein soll, muss der Remote noch umgestellt werden

---

## 15. Current Build Status
Letzter lokaler Check:
- `npm run build` erfolgreich
- statische Ausgabe in `dist/` erzeugt
