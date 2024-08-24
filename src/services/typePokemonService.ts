import axios, {AxiosResponse} from "axios";
import {IType} from "../interfaces/typePokemonInterface";


const typePokemonService ={
    getType:(url:string):Promise<AxiosResponse<IType>> => axios.get(url)
}

export {typePokemonService}