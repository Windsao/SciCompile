# SciCompile project website

**Public website:** https://windsao.github.io/SciCompile/

Project page for **SciCompile: Compiling Scientific Papers into Verifiable Experiences for Agent Learning**, by Shang Wu and Han Liu, Northwestern University.

This is a buildless HTML/CSS/JavaScript website. GitHub Pages publishes the repository root from `main`; pushing an update to that branch republishes the site.

## Update the page

- Edit content and tables in `index.html`, styles in `styles.css`, and interactions in `site.js`.
- Keep the `compiler-data` JSON in `index.html` consistent with the memory comparison table; it drives the interactive Precision/Recall/F1 chart.
- Replace `static/main.pdf` with the current compiled paper and update `static/paper-version.json` with its source revision, date, PDF SHA-256, and compiler results.
- Keep the title, abstract, citation, date, and result tables aligned with that same paper revision.

The current page uses the 17 November 2026 paper, revision `0b7078588743b2cee994396b8860f99b33bec93f`. The compiler table matches paper Table 4; the expandable tables match Tables 3, 5, and 6. The PDF includes the shortened Memory Compilation Protocol.

To preview locally, open `index.html` or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000. No package installation or build is required.

## Credits

Design refined with [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Fonts are Inter and Source Serif 4; their OFL licenses are included in `static/fonts/`. Scientific figures and example images come from the paper project.
