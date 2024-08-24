import {FC, PropsWithChildren} from "react";
import {SearchComponent} from "../components/SearchComponent/SearchComponent";

interface IProps extends PropsWithChildren{

}

const SearchPage: FC<IProps> = () => {
 return (
  <div>
   <SearchComponent/>
  </div>
 );
};

export {SearchPage};
