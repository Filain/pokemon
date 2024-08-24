import {FC, PropsWithChildren} from "react";
import {IPokemonResultList} from "../../../interfaces/pokemonListInterface";
import styles from './PokemonComponent.module.css'
import {useNavigate} from "react-router-dom";


interface IProps extends PropsWithChildren {
    pokemon: IPokemonResultList
}

const PokemonComponent: FC<IProps> = ({pokemon}) => {
    const navigate = useNavigate()

    const id = pokemon.url.split("/")[6]


    const pokmonInfo = () => {
        navigate(`/pokemon/${id}`)

    }

    return (

        <div className={styles.wrap} onClick={() => pokmonInfo()}>
            <p>{id} {pokemon.name}</p>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={pokemon.name}/>


        </div>
    );
};

export {PokemonComponent};
