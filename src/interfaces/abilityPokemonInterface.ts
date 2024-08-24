export interface IAbility {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: Generation;
    names: Name[];
    effect_entries: EffectEntry[];
    effect_changes: EffectChange[];
    flavor_text_entries: FlavorTextEntry[];
    pokemon: AbilityPokemon[];
}

interface Generation {
    name: string;
    url: string;
}

interface Name {
    name: string;
    language: Language;
}

interface Language {
    name: string;
    url: string;
}

interface EffectEntry {
    effect: string;
    short_effect: string;
    language: Language;
}

interface EffectChange {
    version_group: VersionGroup;
    effect_entries: EffectEntry[];
}

interface VersionGroup {
    name: string;
    url: string;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
    version_group: VersionGroup;
}

interface AbilityPokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: Pokemon;
}

interface Pokemon {
    name: string;
    url: string;
}