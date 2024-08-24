import {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import styles from "../PokemonsComponent/PokemonsComponent.module.css";


interface IProps extends PropsWithChildren {

}

const SearchComponent: FC<IProps> = () => {
    const [query] = useSearchParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.pokemon)

    const searchWord = query.get('word')
    let searchByName = false


    if (query.get('type') === 'type') {


    } else if (query.get('type') === 'ability') {
        // console.log(query.get('type'))
    } else {
        console.log(query.get('type'))
        searchByName = !searchByName
    }

    useEffect(() => {
        navigate(`/pokemon/${searchWord}`)
    }, [searchWord, navigate, searchByName]);

    return (
        <div className={styles.wrap}>
            search
        </div>
    );
};

export {SearchComponent};
