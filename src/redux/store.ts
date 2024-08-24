import { configureStore } from '@reduxjs/toolkit'
import {pokemonReducer} from "./slice/pokemonSlice";
import {abilitiPokemonReducer} from "./slice/abilitiPokemonSlice";
import {typePokemonReducer} from "./slice/typePokemonSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        abilitiPokemon: abilitiPokemonReducer,
        typePokemon: typePokemonReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch