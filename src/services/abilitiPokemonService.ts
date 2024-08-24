import axios, {AxiosResponse} from "axios";
import {IAbility} from "../interfaces/abilityPokemonInterface";


const abilitiPokemonService ={
    getAbiliti:(url:string):Promise<AxiosResponse<IAbility>> => axios.get(url)
}

export {abilitiPokemonService}