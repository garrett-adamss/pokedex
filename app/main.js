import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";

class App {

  pokemonsController = new PokemonsController();

  activePokemon = new ActivePokemonController();
}

window["app"] = new App();
