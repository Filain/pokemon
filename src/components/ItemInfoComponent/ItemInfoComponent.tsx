import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hook/reduxHooks";
import {pokemonActions} from "../../redux/slice/pokemonSlice";
import addToLocalStorage from "../../services/localStorageService";
import {useParams} from "react-router-dom";
import {pokemonsItemUrl} from "../../constants/urls";
import {PokemonFormComponent} from "../PokemonFormComponent/PokemonFormComponent";

interface IProps extends PropsWithChildren {

}

const ItemInfoComponent: FC<IProps> = () => {
    const {items} = useAppSelector(state => state.pokemon)
    const dispatch = useAppDispatch();
    const [showForm, setShowForm] = useState<boolean>(false);

    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        dispatch(pokemonActions.getItem({ url: `${pokemonsItemUrl}${params.id}` }))
        console.log(`${pokemonsItemUrl}${params.id}`)
    }, [dispatch,params]);

    if (!items || items.name === null) {
        return <div>No data available</div>; // Або відображай повідомлення про відсутність даних
    }

    const pokeForms = (url: string) => {
        dispatch(pokemonActions.getForm({url: url}));
        setShowForm(true);
    }

    const addToFavorites = (id: number, name: string) => {
        addToLocalStorage(id, name);
    }


    return (
        <div>
            <p>{items?.name}</p>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${items.id}.png`}
                alt={items?.name}/>

            <button onClick={()=>addToFavorites(items?.id, items?.name)}>Add to favorites</button>

            <h3>Abilities</h3>
            {items.abilities?.map(abiliti => <p key={abiliti.ability.url}>{abiliti.ability.name}</p>)}
            <h3>Stats</h3>
            {items.stats?.map(stat => <p key={stat.stat.url}>{stat.stat.name}: {stat.base_stat}</p>)}
            <h3>Types</h3>
            {items.types?.map(type => <p key={type.type.url}>{type.type.name}</p>)}
            <h3>Forms</h3>
            {items.forms?.map(form => <p key={form.url} onClick={() => pokeForms(form.url)}>{form.name}</p>)}
            {showForm && <PokemonFormComponent/>}
        </div>
    );
};

export {ItemInfoComponent};
