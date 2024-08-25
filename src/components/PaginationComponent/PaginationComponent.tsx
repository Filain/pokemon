import {FC, PropsWithChildren} from "react";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import {useLocation} from "react-router-dom";

import styles from './PaginationComponent.module.css'


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
            dispatch(pokemonActions.changeStartUrl(list.previous));
        }
    };

    const next = () => {
        if (list?.next) {
            dispatch(pokemonActions.getList({nextU: list.next}));
            dispatch(pokemonActions.changeStartUrl(list.next));
        }
    };




    return (
        <div className={styles.wrap}>
            {show || (
                <div>
                    <button className={styles.button} disabled={!list?.previous} onClick={prev}>Prev</button>
                    <button className={styles.button} disabled={!list?.next} onClick={next}>Next</button>
                </div>
            )}
        </div>
    );

};

export {PaginationComponent};
