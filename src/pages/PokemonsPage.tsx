import {FC, PropsWithChildren, useEffect} from "react";
import {PokemonsComponent} from "../components/PokemonsComponent/PokemonsComponent";
import {PaginationComponent} from "../components/PaginationComponent/PaginationComponent";
import {useAppDispatch, useAppSelector} from "../hook/reduxHooks";
import {pokemonActions} from "../redux/slice/pokemonSlice";

interface IProps extends PropsWithChildren {

}

const PokemonsPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {startUrl} = useAppSelector(state => state.pokemon);


    useEffect(() => {
        dispatch(pokemonActions.getList({nextU: startUrl}));
    }, [dispatch, startUrl]);

    return (
        <>
            <PokemonsComponent/>
            <PaginationComponent/>
        </>
    );
};

export {PokemonsPage};
