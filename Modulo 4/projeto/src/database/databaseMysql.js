const { databaseConnection } = require('./connection')


const pokemons = []

async function salvarPokemons(pokemon){
 
    const queryInsertPokemon = `INSERT INTO pokemons('nome', 'tipo', 'fraqueza', 'resistencia', 'hp') VALUES('${pokemon.nome}', '${pokemon.tipo}', '${pokemon.fraqueza}', '${pokemon.resistencia}', '${pokemon.hp}')`

    const result = await databaseConnection.raw(queryInsertPokemon)
    if(result){
        return{
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            fraqueza: pokemon.fraqueza,
            resistencia: pokemon.resistencia,
            hp: pokemon.hp,
            id: result[0].insertId
        }
        }else{
            console.error('Deu erro!')
            return{
                error: 'Deu erro na inserção!'
                  }
             }
    
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

    if(pokemon1.hp != 0 && pokemon2 != 0){
        if(pokemon1.tipo == pokemon2.fraqueza){
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if(pokemon1.tipo == pokemon2.resistencia){
            pokemon2.hp = pokemon2.hp - naoEfetivo

        } else{
            pokemon2.hp = pokemon2.hp - efetivo
        }
    }
    
    if(pokemon1.hp != 0 && pokemon2 != 0){
        if(pokemon2.tipo == pokemon1.fraqueza){
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if(pokemon2.tipo == pokemon1.resistencia){
            pokemon1.hp = pokemon1.hp - naoEfetivo

        } else{
            pokemon1.hp = pokemon1.hp - efetivo
        }
    }

    if(pokemon1.hp < 0 ) pokemon1.hp = 0
    if(pokemon2.hp < 0 ) pokemon2.hp = 0

    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}` 

}

function curarPokemon(id){
    const pocao = 20
    const pokemon = pokemons[id]
    if(pokemon.hp != 100){
        pokemon.hp = pokemon.hp + pocao
     }

    if(pokemon.hp > 100) pokemon.hp = 100
    return  `após poção, o ${pokemon.nome} tem o hp de: ${pokemon.hp}`
}



module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons, atualizarPokemon, deletarPokemon, batalhaPokemon, curarPokemon}