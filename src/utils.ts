const BASE_URL = "https://raw.githubusercontent.com/EvolutionX-10/whosthatpokemon/main/images";

/**
 * Represents the pair of URLs for a single Pokémon's image assets.
 */
export interface PokemonImageUrls {
	/** URL for the silhouette (blank) image. */
	blank: string;
	/** URL for the fully-revealed image. */
	revealed: string;
}

/**
 * Returns the CDN URLs for the blank and revealed images of a Pokémon.
 *
 * @param id - The National Pokédex number of the Pokémon (e.g. `1` for Bulbasaur).
 * @returns An object containing the `blank` and `revealed` image URLs.
 *
 * @example
 * ```ts
 * const { blank, revealed } = getPokemonImageUrls(25);
 * console.log(blank);    // …/blank/pokemon-25.png
 * console.log(revealed); // …/revealed/pokemon-25-reveal.png
 * ```
 */
export function getPokemonImageUrls(id: number): PokemonImageUrls {
	return {
		blank: `${BASE_URL}/blank/pokemon-${id}.png`,
		revealed: `${BASE_URL}/revealed/pokemon-${id}-reveal.png`,
	};
}

/**
 * Generates image URL pairs for a range of Pokémon IDs (inclusive on both ends).
 *
 * @param from - The starting Pokédex ID.
 * @param to - The ending Pokédex ID.
 * @returns An array of objects, each containing the `id` and its `blank`/`revealed` URLs.
 *
 * @example
 * ```ts
 * const gen1 = getPokemonImageUrlsRange(1, 151);
 * gen1.forEach(({ id, blank, revealed }) => {
 *   console.log(`#${id} → ${blank}`);
 * });
 * ```
 */
export function getPokemonImageUrlsRange(
	from: number,
	to: number,
): Array<{ id: number } & PokemonImageUrls> {
	return Array.from({ length: to - from + 1 }, (_, i) => {
		const id = from + i;
		return { id, ...getPokemonImageUrls(id) };
	});
}

// ---------------------------------------------------------------------------
// Demo — run this file directly to see URLs for all Gen-1 Pokémon
// ---------------------------------------------------------------------------

if (import.meta.main) {
	const gen1Urls = getPokemonImageUrlsRange(1, 151);

	for (const { id, blank, revealed } of gen1Urls) {
		console.log(`#${String(id).padStart(3, "0")} | blank: ${blank}`);
		console.log(`      | revealed: ${revealed}`);
	}
}
