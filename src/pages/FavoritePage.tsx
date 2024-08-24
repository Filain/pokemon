import {FC, PropsWithChildren} from "react";
import {FavoriteComponent} from "../components/FavoriteComponent/FavoriteComponent";

interface IProps extends PropsWithChildren{

}

const FavoritePage: FC<IProps> = () => {
 return (
  <>
   <FavoriteComponent/>
  </>
 );
};

export {FavoritePage};
