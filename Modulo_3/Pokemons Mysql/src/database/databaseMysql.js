const {databaseConnection} = require ('./connection')

const pokemons = {}

async function salvarPokemons(pokemon){
    
    const queryInsertPokemon = `INSERT INTO banco_pokemon.tabela_pokemon (nome, tipo) VALUES ('${pokemon.nome}', '${pokemon.tipo}');`

    const result = await databaseConnection.raw(queryInsertPokemon)

    console.log(result)

    if(result){
        return{
            nome: pokemon.nome,
            tipo: pokemon.tipo,
            id: result[0].insertId

        }
    }else{
        console.error("Deu erro!")
        return{
            error: "Deu erro na inserção"
        }
    }
}

function mostrarPokemon(id){
    return pokemons[id] || { }
}

function mostrarPokemons(){
    return Object.values(pokemons)
}

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons}