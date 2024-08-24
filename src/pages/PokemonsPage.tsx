import {FC, PropsWithChildren} from "react";
import {PokemonsComponent} from "../components/PokemonsComponent/PokemonsComponent";

interface IProps extends PropsWithChildren {

}

const PokemonsPage: FC<IProps> = () => {


    return (
        <>
            <PokemonsComponent/>
        </>
    );
};

export {PokemonsPage};
