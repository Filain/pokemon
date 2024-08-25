import {FC, PropsWithChildren} from "react";
import {PokemonsComponent} from "../components/PokemonsComponent/PokemonsComponent";

interface IProps extends PropsWithChildren{

}

const FavoritePage: FC<IProps> = () => {
 return (
  <>
      <PokemonsComponent />
  </>
 );
};

export {FavoritePage};
