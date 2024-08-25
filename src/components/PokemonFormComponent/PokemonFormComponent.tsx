import {FC, PropsWithChildren} from "react";
import {useAppSelector} from "../../hook/reduxHooks";

interface IProps extends PropsWithChildren{

}

const PokemonFormComponent: FC<IProps> = () => {
    const {forma} = useAppSelector(state => state.pokemon)
 return (
     <div>
         <div>
             <p>{forma?.form_name}</p>
             {forma?.sprites.front_default && <img src={forma?.sprites.front_default} alt="front_default"/>}
             {forma?.sprites.back_default && <img src={forma?.sprites.back_default} alt="back_default"/>}
             {forma?.sprites.front_shiny && <img src={forma?.sprites.front_shiny} alt="front_shiny"/>}
             {forma?.sprites.back_shiny && <img src={forma?.sprites.back_shiny} alt="front_default"/>}
             {/*<p>{forma?.pokemon.name}</p>*/}
             {/*<p>{forma?.version_group.name}</p>*/}
         </div>
     </div>
 );
};

export {PokemonFormComponent};
