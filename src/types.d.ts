export interface Pokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	types: Array<{
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}>;
	sprites: {
		front_default: string;
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
	stats: Array<{
		base_stat: number;
		stat: {
			name: string;
		};
	}>;
}

export interface PokemonData {
	name: string;
	url: string;
}
