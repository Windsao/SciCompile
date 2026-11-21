# SciCompile project website

**Public website:** https://windsao.github.io/SciCompile/

Project page for **SciCompile: Compiling Scientific Papers into Verifiable Experiences for Agent Learning**, by Shang Wu and Han Liu, Northwestern University.

This is a buildless HTML/CSS/JavaScript website. GitHub Pages publishes the repository root from `main`; pushing an update to that branch republishes the site.

## Update the page

- Edit content and tables in `index.html`, styles in `styles.css`, and interactions in `site.js`.
- Keep the `compiler-data` JSON in `index.html` consistent with the memory comparison table; it drives the interactive Precision/Recall/F1 chart.
- Replace `static/main.pdf` with the current compiled paper and update `static/paper-version.json` with its source revision, date, PDF SHA-256, and compiler results.
- Keep the title, abstract, citation, date, and result tables aligned with that same paper revision.

The paper's main-text result tables are the single source of truth. P/R aggregates and downstream scores are the authors' experimental results. Every F1 in Tables 3 and 4 is now derived as 2PR/(P+R) from the displayed aggregate P and R, rounded to two decimals; it is not mean per-output F1. Table 3 and Table 4 represent separate experiments and output records. The Table 4 direct rows are descriptive references for that workflow comparison, not a common paired control shared by all memory methods. Derive improvements and rankings from those rows, and do not import alternate baselines from earlier experiment reports. Keep the page tables, interactive chart, narrative, and `paper-version.json` consistent with them.

The current page uses the 20 November 2026 paper, revision `20310cb0fcbdf0f4715bb3a9cc634d23b4f20691`. The compiler table matches paper Table 4; the expandable tables match Tables 3, 5, and 6, and the scientific-task table matches Table 7. The PDF and page describe complete six-component experiences, matched raw-paper and compiled practice within each downstream agent, explicit material compiler-to-agent contract assignments, and the separation between four terminal workflows and the supplementary GB1 exercise.

To preview locally, open `index.html` or run `python3 -m http.server 8000` in this directory and visit http://localhost:8000. No package installation or build is required.

## Credits

Design refined with [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Fonts are Inter and Source Serif 4; their OFL licenses are included in `static/fonts/`. Scientific figures and example images come from the paper project.

Table 7 retains the original single-run DNA/coating scores and GPT-5.6-Sol SEM protocol zeros. GPT-6.1-Sol SEM displays the best of three runs per arm under a shared checkpointing protocol, with task-bound ACG execution checks: 0.1463 / 0.1808 / 0.2115 for raw papers / ordinary compilation / ACG. The page and Appendix J distinguish these repeats from the original SEM protocol.
