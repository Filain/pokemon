

// interface PokemonCries {
//     latest: string;
//     legacy: string;
// }



// interface Version {
//     name: string;
//     url: string;
// }
//
// interface GameIndex {
//     game_index: number;
//     version: Version;
// }
//
// interface Move {
//     name: string;
//     url: string;
// }
//
// interface MoveLearnMethod {
//     name: string;
//     url: string;
// }
//
// interface VersionGroup {
//     name: string;
//     url: string;
// }
//
// interface VersionGroupDetail {
//     level_learned_at: number;
//     move_learn_method: MoveLearnMethod;
//     version_group: VersionGroup;
// }
//
// interface PokemonMove {
//     move: Move;
//     version_group_details: VersionGroupDetail[];
// }
//
// interface PokemonSpecies {
//     name: string;
//     url: string;
// }
//
// interface Sprite {
//     front_default: string | null;
//     back_default: string | null;
//     front_shiny: string | null;
//     back_shiny: string | null;
//     front_female: string | null;
//     back_female: string | null;
//     front_shiny_female: string | null;
//     back_shiny_female: string | null;
// }
//
// interface OtherSprites {
//     dream_world: Sprite;
//     home: Sprite;
//     "official-artwork": Sprite;
//     showdown: Sprite;
// }

// interface GenerationSprites {
//     [generation: string]: {
//         [version: string]: Sprite;
//     };
// }

interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    // other: OtherSprites;
    // versions: GenerationSprites;
}

export interface IPokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    // cries: PokemonCries;
    forms: IForma[];
    // game_indices: GameIndex[];
    height: number;
    held_items: any[]; // Тип можна уточнити, якщо будуть дані
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    // moves: PokemonMove[];
    name: string;
    order: number;
    past_abilities: any[]; // Тип можна уточнити, якщо будуть дані
    past_types: any[]; // Тип можна уточнити, якщо будуть дані
    // species: PokemonSpecies;
    sprites: PokemonSprites;
    stats: StatDetail[]; // Тип можна уточнити, якщо будуть дані
    types: TypeDetail[];

}

interface IForma {
    name: string;
    url: string;
}

interface Stat {
    name: string;
    url: string;
}

interface StatDetail {
    base_stat: number;
    effort: number;
    stat: Stat;
}

interface Type {
    name: string;
    url: string;
}

interface TypeDetail {
    slot: number;
    type: Type;
}

interface Ability {
    name: string;
    url: string;
}

interface PokemonAbility {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}
