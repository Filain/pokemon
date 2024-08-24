import {FC, PropsWithChildren} from "react";
import {PokemonsComponent} from "../PokemonsComponent/PokemonsComponent";

interface IProps extends PropsWithChildren{

}

const FavoriteComponent: FC<IProps> = () => {

    return (
  <div>
     <PokemonsComponent />
  </div>
 );
};

export {FavoriteComponent};
