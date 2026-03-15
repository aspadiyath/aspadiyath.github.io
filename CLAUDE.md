# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Build to docs/ (static output for GitHub Pages)
npm run preview   # Preview the built site
```

There are no lint or test scripts configured.

## Architecture

This is a **SvelteKit static site** (personal academic website) using `adapter-static` with output to `docs/` for GitHub Pages hosting.

**Key config** (`svelte.config.js`):
- Both `.svelte` and `.md` extensions are registered; mdsvex processes `.md` files as full Svelte components
- Build output goes to `docs/` (not the default `build/`)
- `prerender = true` is set globally in `src/routes/+layout.js`

### Data layer

All content lives as JSON in `src/data/`:

| File | Purpose |
|------|---------|
| `pubs.json` | Publications; each entry has an `id`, `authors` (array of person IDs), `status`, `year`, `doi`, `award`, etc. |
| `projects.json` | Research projects; each has a `publications` array of pub IDs and a `status` field (`"current"` or `"past"`) |
| `people.json` | Collaborators; keyed by short IDs (e.g. `"aadarsh"`, `"tamaranf"`) referenced in pub author lists |
| `tools.json` | Research tools/instruments; each has a `papers` array of pub IDs for cross-referencing |
| `writing.json` | Writing index; entries with a `link` field open externally, entries with a `slug` field route to a local `.md` page |

### Cross-referencing pattern

The data files are connected by ID references:
- `projects.json` → `pubs.json` via `project.publications: ["pub_id"]`
- `tools.json` → `pubs.json` via `tool.papers: ["pub_id"]`
- `pubs.json` → `people.json` via `pub.authors: ["person_id"]`
- `Publication.svelte` looks up related tools by filtering `tools.json` for matching paper IDs

### Writing posts

Two types of writing entries exist:
1. **External link**: Add to `writing.json` with a `link` field pointing to the external URL
2. **Local essay**: Create `src/routes/writing/[slug]/+page.md` (mdsvex renders it) and add a matching entry to `writing.json` with a `slug` field (no `link`)

### Routes

- `/` — Research home; loads `projects.json` + `pubs.json`, sorts projects (current first, then by most recent pub year)
- `/publications` — All pubs grouped by year with milestone headers; separates "in progress" papers
- `/tools` — Lists tools from `tools.json`
- `/tools/critcon-index` — Dedicated page for the CritCon Index tool
- `/writing` — Index from `writing.json`, sorted by date descending
- `/funding` — Static funding acknowledgment page
