import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IType} from "../../interfaces/typePokemonInterface";
import {typePokemonService} from "../../services/typePokemonService";


interface IState {
    type: IType | null,
    isLoading: boolean
}

const initialState: IState = {
    type: null,
    isLoading: false
}

const getType = createAsyncThunk<IType, { url: string }>(
    'typePokemonSlice/getType',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await typePokemonService.getType(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const typePokemonSlice = createSlice({
    name: 'typePokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getType.fulfilled, (state, action) => {
                state.type = action.payload
            })
            .addMatcher(isFulfilled(), (state,) => {
                state.isLoading = false
            })
            .addMatcher(isPending(), state => {
                state.isLoading = true
            })
})

// Action creators are generated for each case reducer function
const {reducer: typePokemonReducer, actions} = typePokemonSlice;
const typePokemonActions = {
    ...actions,
    getType
}

export {
    typePokemonReducer,
    typePokemonActions
}