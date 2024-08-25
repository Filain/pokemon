import {IPokemonResultList} from "../interfaces/pokemonListInterface";

export default function addToLocalStorage(id: number, name: string): void {
    // Отримуємо список покемонів з localStorage або створюємо новий масив, якщо його немає
    const pokemonList: IPokemonResultList[] = JSON.parse(localStorage.getItem('pokemonList') || '[]');

    // Створюємо новий об'єкт покемона
    const pokemon: IPokemonResultList = { name, url: `https://pokeapi.co/api/v2/pokemon/${id.toString()}` };

    // Перевіряємо, чи існує вже покемон з таким же url
    const isExist = pokemonList.some(p => p.url === pokemon.url);

    // Додаємо новий об'єкт до масиву, якщо його ще немає
    if (!isExist) {
        pokemonList.push(pokemon);
    }

    // Зберігаємо оновлений масив назад у localStorage
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
}


export function removeFromLocalStorage(id: number): void {
    // Отримуємо список покемонів з localStorage
    const pokemonList: IPokemonResultList[] = JSON.parse(localStorage.getItem('pokemonList') || '[]');

    // Формуємо URL покемона на основі переданого id
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id.toString()}`;

    // Фільтруємо масив, видаляючи покемона з відповідним URL
    const updatedPokemonList = pokemonList.filter(pokemon => pokemon.url !== pokemonUrl);

    // Зберігаємо оновлений масив назад у localStorage
    localStorage.setItem('pokemonList', JSON.stringify(updatedPokemonList));
}

export function getFromLocalStorage(): IPokemonResultList[] {
    return JSON.parse(localStorage.getItem('pokemonList') || '[]') as IPokemonResultList[];
}
