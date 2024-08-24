import {FC, PropsWithChildren} from "react";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import {useLocation} from "react-router-dom";


interface IProps extends PropsWithChildren {

}

const PaginationComponent: FC<IProps> = () => {
    const {list} = useAppSelector(state => state.pokemon)
    const dispatch = useAppDispatch();
    const location = useLocation();
    const favorite = location.pathname === '/favorite'
    const search = location.pathname === '/search'
    let show = favorite || search




    const prev = () => {
        if (list?.previous) {
            dispatch(pokemonActions.getList({nextU: list.previous}));
        }
    };

    const next = () => {
        if (list?.next) {
            dispatch(pokemonActions.getList({nextU: list.next}));
        }
    };


    return (
        <>
            {show || (
                <div>
                    <button disabled={!list?.previous} onClick={prev}>Prev</button>
                    <button disabled={!list?.next} onClick={next}>Next</button>
                </div>
            )}
        </>
    );
    ;
};

export {PaginationComponent};
