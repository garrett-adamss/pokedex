 

 export class Pokemons { 
    constructor({name, url}){
        this.name = name
        this.url = url
    }
    
    get Template(){
        return `
        <div class="text-left m-3 row no-select img-fluid selectable row" onclick="app.pokemonsController.setActivePokemon('${this.url}')">
        <!-- <img class="col-1" src="https://cdn-icons.flaticon.com/png/512/868/premium/868596.png?token=exp=1659626239~hmac=383306841b37c38834f215c2f35a9a30" alt=""> -->
            <h4 class="col-5" >${this.name}</h4>
        </div>
        `
    }

 }