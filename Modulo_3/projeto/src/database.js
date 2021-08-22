const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const pokemons = []

function salvarPokemons(pokemon){
    if(!pokemon.id) pokemon.id = sequence.id
    pokemons[pokemon.id] = pokemon
    return pokemon 
}

function mostrarPokemon(id){
    return pokemons[id] || { }
}

function mostrarPokemons(){
    return Object.values(pokemons)
}

function atualizarPokemon(id, pokemon){
    pokemons[id] = pokemon
    return pokemon

}

function deletarPokemon(id){
    sequence._id = sequence._id -1
    const pokemonDeletado = pokemons[id]
    pokemons.splice(id, 1)
    pokemons.forEach(pokemon =>{
        if(pokemon.id > id){
            pokemon.id = pokemon.id -1
        }
    })
    return pokemonDeletado
}

function batalhaPokemon(id1, id2){
    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    
}

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon}