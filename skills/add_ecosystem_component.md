# Skill: Add Ecosystem Component

**Purpose:** Given a URL (or name) of a new AI ecosystem resource, fetch brief information from the URL and add a correctly formatted entry to `data/ecosystem_components_list.yml`.

---

## Instructions for the agent

### Step 1 — Fetch the URL

Visit the provided URL and read the homepage. Extract enough information to fill all required fields below. If any field is ambiguous, use your best judgement from the page content and flag it to the user.

### Step 2 — Determine all field values

| Field | How to determine |
|-------|-----------------|
| `id` | Lowercase, no spaces or hyphens, concatenate key words of the name. E.g. `"Ersilia Model Hub"` → `ersiliamodelhub`. Check the YAML for id collisions before confirming. |
| `name` | Full human-readable name as used by the resource itself. |
| `type` | Choose exactly one from the **valid types** list below. |
| `description` | 1–3 sentences describing what the resource does and why it matters. Keep under ~60 words. Write in third person. Use YAML `>-` block scalar. |
| `url` | The primary canonical homepage URL provided by the user (or discovered from the page). |
| `biotools-url` | Check if the resource has a record at `https://bio.tools/`. If found, use the full URL. If not found or unclear, use `''`. |
| `fairsharing-url` | Check if the resource has a record at `https://fairsharing.org/`. If found, use the full URL. If not found or unclear, use `''`. |
| `access-model` | `Open Source` / `Free` / `Commercial` / `Mixed` — infer from the page (pricing, license info). |
| `domain` | `life science` if the resource is focused on biology, medicine, or related fields; `domain-agnostic` otherwise. Use inline YAML comment `# reason` if helpful. |
| `osai-recommendation` | One or more OSAI recommendation codes (e.g. `R2` or `R2, R4`). See the mapping table below. Use `''` if none clearly apply. |
| `osai-explanation` | One sentence explaining the OSAI mapping. Use `''` if osai-recommendation is `''`. |

### Step 3 — Show the draft entry to the user

Before writing anything, display the complete YAML block and ask the user to confirm or correct it:

```yaml
- id: <generated-id>
  name: <name>
  type: <type>
  description: >-
    <description text>
  url: <url>
  biotools-url: '<biotools-url>'
  fairsharing-url: '<fairsharing-url>'
  access-model: <access-model>
  domain: <domain>
  osai-recommendation: <R codes or ''>
  osai-explanation: <explanation or ''>
```

### Step 4 — Append to the YAML file

Once the user confirms, append the new entry to the end of `data/ecosystem_components_list.yml` (after the last existing entry). Maintain consistent formatting — two blank lines between entries is fine; match the style of surrounding entries.

---

## Valid types

Choose exactly one:

- `AI/ML Library`
- `Analysis platform`
- `Benchmarking`
- `Best practice`
- `Code sharing`
- `LLM`
- `Metadata`
- `Organisation`
- `Paper`
- `Project`
- `Registry`
- `Reproducibility tool`
- `Tool`
- `Training`
- `Visualisation tool`
- `Other`

---

## OSAI Recommendation mapping guide

Map the component's primary purpose to one or more of these:

| Code | What it covers |
|------|---------------|
| R1 | AI-specific metadata — standards, schemas, ontologies, formats for describing models/datasets |
| R2 | Sharing & discovering AI models and datasets — registries, repositories, hubs |
| R3 | Training, education, best-practice guidance, community resources |
| R4 | Information disclosure — transparency, documentation, reporting of model/dataset details |
| R5 | Portable & reproducible code — environments, containers, notebooks, package managers |
| R6 | Benchmarking & standardised evaluation — challenges, leaderboards, evaluation datasets |
| R7 | Green AI / energy-efficient ML — compression, efficient training, energy-saving techniques |
| R8 | Environmental impact measurement & reporting — carbon footprint tools, energy monitoring |
| R9 | Hardware-specific optimisation — GPU/TPU/hardware-targeted efficiency improvements |

Multiple codes are comma-separated: `R2, R4`

---

## Formatting rules

- `id`: lowercase alphanumeric only, no spaces or hyphens (e.g. `openebench`, `huggingface`)
- `description` uses YAML folded block scalar `>-` on its own line, content indented 4 spaces
- `biotools-url` and `fairsharing-url` use `''` when empty — never omit the field
- Inline `# comments` after a value are acceptable for domain or type notes (see existing entries)
- The file has no `---` YAML separator — just append the new `- id:` block after the last entry
- Field order must be: `id`, `name`, `type`, `description`, `url`, `biotools-url`, `fairsharing-url`, `access-model`, `domain`, `osai-recommendation`, `osai-explanation`

---

## Example completed entry

```yaml
- id: ersiliamodelhub
  name: Ersilia Model Hub
  type: Registry
  description: >-
    Registry of pre-trained AI/ML models from the Ersilia Open Source Initiative,
    focused on drug discovery and infectious disease research.
  url: https://ersilia.io/model-hub
  biotools-url: ''
  fairsharing-url: ''
  access-model: Free
  domain: life science
  osai-recommendation: R2
  osai-explanation: A model sharing registry (R2).
```
