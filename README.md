<div align="center">

# ⚡ Who's That Pokémon? ⚡

### 🎮 A public CDN & API for *Who's That Pokémon?* image assets

[![Images](https://img.shields.io/badge/Pokémon-Images-red?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek0xMiAyMGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PC9zdmc+)](https://github.com/EvolutionX-10/whosthatpokemon/tree/main/images)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Built with Bun](https://img.shields.io/badge/Built%20with-Bun-f9f1e1?style=for-the-badge&logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)

</div>

---

## 🎯 Project Goal

A **free, public CDN** serving silhouette and revealed artwork images for all Pokémon — perfect for building your own *Who's That Pokémon?* games, bots, quizzes, or apps.

All images are accessible directly via raw GitHub URLs. No API key, no rate limits, no sign-up required.

---

## 🔗 URL Patterns

### 🕶️ Blank (Silhouette)

```
https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/blank/pokemon-{id}.png
```

### ✨ Revealed

```
https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/revealed/pokemon-{id}-reveal.png
```

> Replace `{id}` with the National Pokédex number (e.g. `1` for Bulbasaur, `25` for Pikachu).

---

## 🖼️ Preview

| # | Pokémon | Blank | Revealed |
|:-:|:-------:|:-----:|:--------:|
| 1 | Bulbasaur | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/blank/pokemon-1.png" height="100" alt="Bulbasaur blank" /> | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/revealed/pokemon-1-reveal.png" height="100" alt="Bulbasaur revealed" /> |
| 2 | Ivysaur | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/blank/pokemon-2.png" height="100" alt="Ivysaur blank" /> | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/revealed/pokemon-2-reveal.png" height="100" alt="Ivysaur revealed" /> |
| 3 | Venusaur | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/blank/pokemon-3.png" height="100" alt="Venusaur blank" /> | <img src="https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images/revealed/pokemon-3-reveal.png" height="100" alt="Venusaur revealed" /> |

---

## 🚀 Quick Start

### Installation

```bash
bun install
```

### Generate Images

```bash
bun run src/index.ts
```

---

## 🛠️ TypeScript Utility

A ready-to-use helper for fetching Pokémon image URLs is available at [`src/utils.ts`](src/utils.ts):

```typescript
import { getPokemonImageUrls } from "./utils";

const urls = getPokemonImageUrls(25);
console.log(urls.blank);    // silhouette URL for Pikachu
console.log(urls.revealed); // revealed URL for Pikachu
```

---

## 📦 Tech Stack

- **[Bun](https://bun.sh)** — Fast all-in-one JavaScript runtime & package manager
- **[Sharp](https://sharp.pixelplumbing.com)** — High-performance Node.js image processing
- **[PokéAPI](https://pokeapi.co)** — Free Pokémon data API used to source artwork
- **TypeScript** — Type-safe image generation scripts
