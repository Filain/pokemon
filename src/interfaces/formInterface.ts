interface Language {
    name: string;
    url: string;
}

interface NameDetail {
    language: Language;
    name: string;
}

interface Pokemon {
    name: string;
    url: string;
}

interface Sprite {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

interface Type {
    name: string;
    url: string;
}

interface TypeDetail {
    slot: number;
    type: Type;
}

interface VersionGroup {
    name: string;
    url: string;
}

export interface IForm {
    form_name: string;
    form_names: NameDetail[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: NameDetail[];
    order: number;
    pokemon: Pokemon;
    sprites: Sprite;
    types: TypeDetail[];
    version_group: VersionGroup;
}