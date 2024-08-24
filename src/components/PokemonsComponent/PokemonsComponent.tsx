import {FC, PropsWithChildren, useEffect, useState} from "react";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {PokemonComponent} from "./PokemonComponent/PokemonComponent";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import {pokemonsListUrl} from "../../constants/urls";

import styles from './PokemonsComponent.module.css'
import {IPokemonResultList} from "../../interfaces/pokemonListInterface";
import {useLocation, useSearchParams} from "react-router-dom";
import {getFromLocalStorage} from "../../services/localStorageService";

interface IProps extends PropsWithChildren {


}

const PokemonsComponent: FC<IProps> = () => {
    const location = useLocation();
    const [query, setQuery] = useSearchParams()
    const dispatch = useAppDispatch();
    const {list} = useAppSelector(state => state.pokemon);
    const {type} = useAppSelector(state => state.typePokemon);
    const {ability} = useAppSelector(state => state.abilitiPokemon);

    const pokemonTypeList: IPokemonResultList[] = type?.pokemon?.map(item => item.pokemon) || [];
    const pokemonAbilitiList: IPokemonResultList[] = ability?.pokemon?.map(item => item.pokemon) || [];
    console.log(pokemonAbilitiList)


    const [pokemonList, setPokemonList] = useState<IPokemonResultList[]>([]);


    useEffect(() => {
        let newPokemonList: IPokemonResultList[] = [];

        if (location.pathname === '/search' && query.get('type') === 'type') {
            newPokemonList = pokemonTypeList;
        } else if (location.pathname === '/search' && query.get('type') === 'ability') {
            newPokemonList = pokemonAbilitiList;
            console.log('ability')
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

    }, [location.pathname, pokemonTypeList, list, pokemonList]);

    useEffect(() => {
        dispatch(pokemonActions.getList({nextU: pokemonsListUrl}));
    }, [dispatch]);

    return (
        <>
            <div className={styles.wrap}>
                {pokemonList?.map(pokemon => (
                    <PokemonComponent key={pokemon.url} pokemon={pokemon}/>
                ))}
            </div>
            <PaginationComponent/>
        </>
    );
};

export {PokemonsComponent};




