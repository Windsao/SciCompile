# SciCompile project website

**Public website:** https://windsao.github.io/SciCompile/

Project page for **SciCompile: Compiling Scientific Papers into Verifiable Experiences for Agent Learning**, by Shang Wu and Han Liu, Northwestern University.

This is a buildless HTML/CSS/JavaScript website. GitHub Pages publishes the repository root from `main`; pushing an update to that branch republishes the site.

## Update the page

- Edit content and tables in `index.html`, styles in `styles.css`, and interactions in `site.js`.
- Keep the `compiler-data` JSON in `index.html` consistent with the memory comparison table; it drives the interactive Precision/Recall/F1 chart.
- Replace `static/main.pdf` with the current compiled paper and update `static/paper-version.json` with its source revision, date, PDF SHA-256, and compiler results.
- Keep the title, abstract, citation, date, and result tables aligned with that same paper revision.

The paper's main-text result tables are the single source of truth. Table 3 compares direct compilation, A-MEM, MAGMA, and SciCompile-ACG. Its F1 values are 2PR/(P+R) from the displayed aggregate Precision and Recall, rounded to two decimals. Direct rows are descriptive workflow references. Keep the page tables, interactive chart, narrative, and `paper-version.json` aligned with the authors' current manuscript values.

The current page uses the 20 November 2026 paper, revision `76e8f6d4379ed9ff6f06b20177448bf2dac0781f`. The compiler table matches paper Table 3; the expandable tables match Tables 4 and 5, and the scientific-task table matches Table 6. The PDF and page describe complete six-component experiences, matched raw-paper and compiled practice within each downstream agent, explicit material compiler-to-agent contract assignments, and the separation between four terminal workflows and the supplementary GB1 exercise.

To preview locally, open `index.html` or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000. No package installation or build is required.

## Credits

Design refined with [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Fonts are Inter and Source Serif 4; their OFL licenses are included in `static/fonts/`. Scientific figures and example images come from the paper project.

Table 6 follows the authors' latest scientific-task results. In raw-paper / ordinary-compilation / ACG order, GPT-5.6-Sol's DNA scores are 0/4 / 0/4 / 4/4 and SEM PQ is 0.1357 / 0.1800 / 0.1905; coating stays at 3/8. GPT-6.1-Sol passes 4/4 DNA cases in every condition, scores 3/8 / 7/8 / 8/8 on coating, and has SEM PQ 0.1463 / 0.1808 / 0.2115. SEM PQ averages class-aware quality over two final images. The page and Appendix J describe the execution and scoring protocol.
