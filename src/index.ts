import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import type { Pokemon, PokemonData } from "./types";

const pokemons = (
	(await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")).json().catch(() => null)) as Record<
		string,
		PokemonData[]
	>
).results;

if (!pokemons || !pokemons.length) throw new Error("Could not fetch data");

const bg = readFileSync(join(process.cwd(), "assets", "pokemon_blank.jpg"));
const bgMetadata = await sharp(bg).metadata();

for (const { name, url } of pokemons) {
	const id = Number(
		url
			.slice(0, url.length - 1)
			.split("/")
			.pop(),
	);

	const fileName = (reveal = false) => `pokemon-${id}${reveal ? "-reveal" : ""}.png`;
	const artwork = ((await (await fetch(url)).json()) as Pokemon).sprites.other["official-artwork"].front_default;

	if (!artwork) {
		console.log("No artwork for " + name);
		continue;
	}

	const buffer = await (await fetch(artwork)).arrayBuffer();

	const pkmn = await sharp(buffer).resize(669).toBuffer();
	const image = await sharp(bg)
		.composite([
			{
				input: pkmn,
				top: bgMetadata.height / 4,
				left: bgMetadata.width - (bgMetadata.width * 7) / 8,
				blend: "dest-out",
			},
		])
		.toBuffer();

	const imageRevealed = await sharp(bg)
		.composite([
			{
				input: pkmn,
				top: bgMetadata.height / 4,
				left: bgMetadata.width - (bgMetadata.width * 7) / 8,
			},
		])
		.toBuffer();

	writeFileSync(join(process.cwd(), "images", "blank", fileName()), image);
	writeFileSync(join(process.cwd(), "images", "revealed", fileName(true)), imageRevealed);

	console.log(`Generated for ${name}`);
}

console.log("------------------------");
console.log(`Generated all images`);
console.log("------------------------");
