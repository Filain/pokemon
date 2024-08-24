import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "../components/HeaderComponent/HeaderComponent";

interface IProps extends PropsWithChildren{

}

const MainLayout: FC<IProps> = () => {
 return (
  <div>
   <HeaderComponent/>
      <Outlet/>
  </div>
 );
};

export {MainLayout};
