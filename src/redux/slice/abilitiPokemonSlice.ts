import {IAbility} from "../../interfaces/abilityPokemonInterface";
import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {abilitiPokemonService} from "../../services/abilitiPokemonService";


interface IState {
    ability: IAbility | null,
    isLoading: boolean
}

const initialState: IState = {
    ability: null,
    isLoading: false
}

const getAbility = createAsyncThunk<IAbility, { url: string }>(
    'abilitiPokemonSlice/getAbility',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await abilitiPokemonService.getAbiliti(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const abilitiPokemonSlice = createSlice({
    name: 'abilitiPokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAbility.fulfilled, (state, action) => {
                state.ability = action.payload
            })
            .addMatcher(isFulfilled(), (state,) => {
                state.isLoading = false
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true
            })
})

// Action creators are generated for each case reducer function
const {reducer: abilitiPokemonReducer, actions} = abilitiPokemonSlice;
const abilitiPokemonActions = {
    ...actions,
    getAbility
}

export {
    abilitiPokemonReducer,
    abilitiPokemonActions
}