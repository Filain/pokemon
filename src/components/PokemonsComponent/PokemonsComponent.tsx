import {FC, PropsWithChildren, useEffect} from "react";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {PokemonComponent} from "./PokemonComponent/PokemonComponent";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import {pokemonsListUrl} from "../../constants/urls";

import styles from './PokemonsComponent.module.css'
import {IPokemonResultList} from "../../interfaces/pokemonListInterface";
import {useLocation} from "react-router-dom";
import {getFromLocalStorage} from "../../services/localStorageService";

interface IProps extends PropsWithChildren {


}

const PokemonsComponent: FC<IProps> = () => {
    const location = useLocation()
    const dispatch = useAppDispatch();
    const {list} = useAppSelector(state => state.pokemon)
    const {type} = useAppSelector(state => state.typePokemon)




    // Логіка для визначення списку покемонів
    let pokemonList: IPokemonResultList[] | undefined;
    if (location.pathname === '/search') {
        pokemonList = type.pokemon.map(item => item.pokemon)
    }

    if (location.pathname === '/favorite') {
        pokemonList = getFromLocalStorage(); // Отримуємо список покемонів з localStorage
    // } else if (location.pathname === '/search') {
    //     pokemonList = props;
        // pokemonList = type.pokemon.map(item => item.pokemon);

    }

    else {
        pokemonList = list?.results; // Використовуємо список з Redux store
    }

    useEffect(() => {
        dispatch(pokemonActions.getList({nextU: pokemonsListUrl}))
    }, [dispatch]);
    return (
        <>
            <div className={styles.wrap}>
                {pokemonList?.map(pokemon => <PokemonComponent key={pokemon.url} pokemon={pokemon}/>)}</div>
            <PaginationComponent/>
        </>
    );
};

export {PokemonsComponent};




