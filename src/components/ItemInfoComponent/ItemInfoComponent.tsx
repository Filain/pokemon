import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import addToLocalStorage, {removeFromLocalStorage} from "../../services/localStorageService";
import {useParams} from "react-router-dom";
import {pokemonsItemUrl} from "../../constants/urls";
import {PokemonFormComponent} from "../PokemonFormComponent/PokemonFormComponent";

import style from './ItemInfoComponent.module.css'

interface IProps extends PropsWithChildren {

}

const ItemInfoComponent: FC<IProps> = () => {
    const {items} = useAppSelector(state => state.pokemon)
    const dispatch = useAppDispatch();
    const [activeForm, setActiveForm] = useState<string | null>(null); // Зберігаємо активний URL форми
    const params = useParams()


    useEffect(() => {
        dispatch(pokemonActions.getItem({url: `${pokemonsItemUrl}${params.id}`}))
    }, [dispatch, params]);

    if (!items || items.name === null) {
        return <div>No data available</div>; // Або відображай повідомлення про відсутність даних
    }

    const pokeForms = (url: string) => {
        dispatch(pokemonActions.getForm({url: url}));
        setActiveForm(prevState => (prevState === url ? null : url)); // Перемикає активний URL
    }

    const addToFavorites = (id: number, name: string) => {
        addToLocalStorage(id, name);
    }


    return (
        <div className={style.wrap}>
            <p className={style.itemName}> {items?.name}</p>
            <img className={style.itemImg}
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${items.id}.png`}
                 alt={items?.name}/>

            <button className={style.button} onClick={() => addToFavorites(items?.id, items?.name)}>Add to favorites
            </button>
            <button className={style.button} onClick={() => removeFromLocalStorage(items?.id)}>Delete from favorites
            </button>
            <div className={style.row}>
                <div>
                    <h3>Abilities</h3>
                    {items.abilities?.map(abiliti => <p key={abiliti.ability.url}>{abiliti.ability.name}</p>)}
                </div>
                <div>
                    <h3>Stats</h3>
                    {items.stats?.map(stat => <p key={stat.stat.url}>{stat.stat.name}: {stat.base_stat}</p>)}
                </div>
                <div>
                    <h3>Types</h3>
                    {items.types?.map(type => <p key={type.type.url}>{type.type.name}</p>)}
                </div>
                <div>
                    <h3>Forms</h3>
                    <div className={style.forms}>
                        {items.forms?.map(form => (
                            <button
                                className={`${style.button} ${activeForm === form.url ? style.active : ''}`}
                                key={form.url}
                                onClick={() => pokeForms(form.url)}
                            >
                                {form.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {activeForm && <PokemonFormComponent/>}
        </div>
    )
};

export {ItemInfoComponent};
