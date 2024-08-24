import {createAsyncThunk, createSlice, isFulfilled, isPending} from '@reduxjs/toolkit'
import {pokemonService} from "../../services/pokemonService";
import {AxiosError} from "axios";
import {IPokemon} from "../../interfaces/pokemonInterface";
import {IPokemonResponse} from "../../interfaces/pokemonListInterface";
import {IForm} from "../../interfaces/formInterface";

interface IState {
    list: IPokemonResponse | null,
    items: IPokemon | null,
    isLoading: boolean
    forma: IForm | null
}

const initialState: IState = {
    list:null,
    items: null,
    isLoading: false,
    forma: null
}

const getList = createAsyncThunk<IPokemonResponse, {nextU:string} >(
    'pokemonSlice/getList',
    async ({nextU}, {rejectWithValue}) => {
        try {
            const {data} = await pokemonService.getList(nextU)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getItem = createAsyncThunk<IPokemon, { url: string }>(
    'pokemonSlice/getItem',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await pokemonService.getItem(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getForm = createAsyncThunk<IForm, { url: string }>(
    'pokemonSlice/getForm',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await pokemonService.getForm(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getList.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(getItem.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(getForm.fulfilled, (state, action) => {
                state.forma = action.payload
            })
            .addMatcher(isFulfilled(),(state, )=>{
                state.isLoading =false
            })
            .addMatcher(isPending(),state=>{
                state.isLoading =true
            })
})

// Action creators are generated for each case reducer function
const {reducer: pokemonReducer, actions} = pokemonSlice;
const pokemonActions = {
    ...actions,
    getItem,
    getList,
    getForm
}

export {
    pokemonReducer,
    pokemonActions
}