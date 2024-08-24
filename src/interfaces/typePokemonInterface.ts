export interface IType {
    id: number;
    name: string;
    damage_relations: DamageRelations;
    past_damage_relations: PastDamageRelations[];
    game_indices: GameIndex[];
    generation: Generation;
    move_damage_class: MoveDamageClass;
    names: Name[];
    pokemon: PokemonSlot[];
    moves: Move[];
}

interface DamageRelations {
    no_damage_to: DamageRelation[];
    half_damage_to: DamageRelation[];
    double_damage_to: DamageRelation[];
    no_damage_from: DamageRelation[];
    half_damage_from: DamageRelation[];
    double_damage_from: DamageRelation[];
}

interface PastDamageRelations {
    generation: Generation;
    damage_relations: DamageRelations;
}

interface GameIndex {
    game_index: number;
    generation: Generation;
}

interface Generation {
    name: string;
    url: string;
}

interface MoveDamageClass {
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

interface PokemonSlot {
    slot: number;
    pokemon: Pokemon;
}

interface Pokemon {
    name: string;
    url: string;
}

interface Move {
    name: string;
    url: string;
}

interface DamageRelation {
    name: string;
    url: string;
}