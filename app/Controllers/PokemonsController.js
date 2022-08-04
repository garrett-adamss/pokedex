import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
    let template = ''
    ProxyState.pokemons.forEach(p => template += p.Template)
    document.getElementById('pokemons').innerHTML = template
}


export class PokemonsController{

    constructor(){
        ProxyState.on('pokemons', _draw)
        this.getPokemons()
    }

    async getPokemons(){
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            console.log("[Getting Pokemons]", error)
            Pop.error(error)
        }
    }
    async setActivePokemon(url){
        try {
            await pokemonsService.setActivePokemon(url)
        } catch (error) {
            console.log('[Set Active Pokemon]', error)
            Pop.error(error)
        }
    }
}