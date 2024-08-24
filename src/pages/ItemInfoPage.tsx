import {FC, PropsWithChildren} from "react";
import {ItemInfoComponent} from "../components/ItemInfoComponent/ItemInfoComponent";

interface IProps extends PropsWithChildren{

}

const ItemInfoPage: FC<IProps> = () => {
 return (
  <>
   <ItemInfoComponent/>
  </>
 );
};

export {ItemInfoPage};
