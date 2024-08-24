import axios, {AxiosResponse} from "axios";
import {IPokemonResponse} from "../interfaces/pokemonListInterface";
import {IPokemon} from "../interfaces/pokemonInterface";
import {IForm} from "../interfaces/formInterface";

const pokemonService ={
    getList:(nextUrl:string):Promise<AxiosResponse<IPokemonResponse>> => axios.get(nextUrl),
    getItem:(url:string):Promise<AxiosResponse<IPokemon>> => axios.get(url),
    getForm:(url:string):Promise<AxiosResponse<IForm>> => axios.get(url)
}

export {pokemonService}