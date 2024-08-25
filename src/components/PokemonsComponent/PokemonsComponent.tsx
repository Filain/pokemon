import {FC, PropsWithChildren, useEffect, useMemo, useState} from "react";
import {useAppSelector} from "../../hook/reduxHooks";
import {PokemonComponent} from "./PokemonComponent/PokemonComponent";

import styles from './PokemonsComponent.module.css'
import {IPokemonResultList} from "../../interfaces/pokemonListInterface";
import {useLocation, useSearchParams} from "react-router-dom";
import {getFromLocalStorage} from "../../services/localStorageService";

interface IProps extends PropsWithChildren {


}

const PokemonsComponent: FC<IProps> = () => {
    const location = useLocation();
    const [query] = useSearchParams()
    const {list} = useAppSelector(state => state.pokemon);
    const {type} = useAppSelector(state => state.typePokemon);
    const {ability} = useAppSelector(state => state.abilitiPokemon);


    const pokemonTypeList = useMemo(() => type?.pokemon?.map(item => item.pokemon) || [], [type]);
    const pokemonAbilitiList: IPokemonResultList[] = useMemo(() => ability?.pokemon?.map(item => item.pokemon) || [], [ability]);


    const [pokemonList, setPokemonList] = useState<IPokemonResultList[]>([]);


    useEffect(() => {
        let newPokemonList: IPokemonResultList[];

        if (location.pathname === '/search' && query.get('type') === 'type') {
            newPokemonList = pokemonTypeList;
        } else if (location.pathname === '/search' && query.get('type') === 'ability') {
            newPokemonList = pokemonAbilitiList;
        } else if (location.pathname === '/favorite') {
            const favorites = getFromLocalStorage(); // Отримуємо список покемонів з localStorage
            newPokemonList = favorites || [];
        } else {
            newPokemonList = list?.results || []; // Використовуємо список з Redux store
        }

        // Перевірка на те, чи дійсно треба оновлювати стан
        if (JSON.stringify(newPokemonList) !== JSON.stringify(pokemonList)) {
            setPokemonList(newPokemonList);
        }

    }, [location.pathname, pokemonTypeList, list, pokemonList, pokemonAbilitiList, query]);


    // useEffect(() => {
    //     dispatch(pokemonActions.getList({nextU: startUrl}));
    // }, [dispatch, startUrl]);

    return (
        <>
            <div className={styles.wrap}>
                {pokemonList?.map(pokemon => (
                    pokemon.url ? (
                        <PokemonComponent key={pokemon.name} pokemon={pokemon}/>
                    ) : (
                        <div key={pokemon.name}>URL not found for {pokemon.name}</div>
                    )
                ))}
            </div>

        </>
    );
};

export {PokemonsComponent};




