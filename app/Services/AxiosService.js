
export const pokemonsApi = new axios.create({
    baseURL: 'https://pokeapi.co',
    timeout: 8000
})

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Garrett/pokemon',
    timeout: 8000
})