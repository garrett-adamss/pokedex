import { ProxyState } from "../AppState.js"
import { Pokemons } from "../Models/Pokemons.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { pokemonsApi } from "./AxiosService.js"

class PokemonsService{
    async getPokemons(){
        let res = await pokemonsApi.get('/api/v2/pokemon')
        ProxyState.pokemons = res.data.results.map(p => new Pokemons(p))
    }

    async setActivePokemon(url){
        let res = await pokemonsApi.get(url)
        ProxyState.activePokemon = new ActivePokemon(res.data)
    }
}

export const pokemonsService = new PokemonsService()