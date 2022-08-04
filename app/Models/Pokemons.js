 

 export class Pokemons { 
    constructor({name, url}){
        this.name = name
        this.url = url
    }
    
    get Template(){
        return `
        <div class="text-left m-3 row no-select selectable" onclick="app.pokemonsController.setActivePokemon('${this.url}')">
            <h4 class="col-5" >${this.name}</h4>
        </div>
        `
    }

 }