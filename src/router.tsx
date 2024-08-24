import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {PokemonsPage} from "./pages/PokemonsPage";
import {FavoritePage} from "./pages/FavoritePage";
import {ItemInfoPage} from "./pages/ItemInfoPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([{
    path:'/', element: <MainLayout/>, children:[
        {index: true, element: <Navigate to={'/pokemon'}/>},
        {path: 'pokemon', element: <PokemonsPage/>},
        {path: 'favorite', element: <FavoritePage/>},
        {path: 'search', element: <SearchPage/>},
        {path: 'pokemon/:id', element: <ItemInfoPage/>},
    ]}
])

export {router}