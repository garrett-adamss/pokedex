 export class ActivePokemon{
    
    constructor(data){
        this.abilities = data.abilities,
        this.base_experience = data.base_experience
        this.form = data.form,
        this.game_indices = data.game_indices,
        this.height = data.height,
        this.held_items = data.held_items,
        this.id = data.id,
        this.is_default = data.is_default,
        this.location_area_encounters = data.location_area_encounters,
        this.moves = data.moves,
        this.name = data.name,
        this.order = data.order, 
        this.post_types = data.post_types,
        this.species = data.species,
        this.sprites = data.sprites,
        this.stats = data.stats,
        this.types = data.types,
        this.weight = data.weight
    }

    get ActivePokemonTemplate(){
        return `
        <div> ${this.name} is loaded type = ${this.type}</div>
        `
    }
 }
