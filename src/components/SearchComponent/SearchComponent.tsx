import {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hook/reduxHooks";

import {typePokemonActions} from "../../redux/slice/typePokemonSlice";
import {pokemonsAbylytyUrl, pokemonsTypeUrl} from "../../constants/urls";
import {abilitiPokemonActions} from "../../redux/slice/abilitiPokemonSlice";
import {PokemonsComponent} from "../PokemonsComponent/PokemonsComponent";


interface IProps extends PropsWithChildren {

}

const SearchComponent: FC<IProps> = () => {
    const [query] = useSearchParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();


    const searchWord = query.get('word');
    const searchType = query.get('type');

    useEffect(() => {
        if (searchType === 'name' && searchWord) {
            navigate(`/pokemon/${searchWord}`);
        }
    }, [searchType, searchWord, navigate]);

    useEffect(() => {
        if (searchType === 'type' && searchWord) {
            dispatch(typePokemonActions.getType({ url: `${pokemonsTypeUrl}${searchWord}` }));
        }
    }, [searchType, searchWord, dispatch]);

    useEffect(() => {
        if (searchType === 'ability' && searchWord) {
            dispatch(abilitiPokemonActions.getAbility({ url: `${pokemonsAbylytyUrl}${searchWord}` }));
        }
    }, [searchType, searchWord, dispatch]);

    return (
        <div>
            {<PokemonsComponent />}

        </div>
    );
};

export { SearchComponent };
