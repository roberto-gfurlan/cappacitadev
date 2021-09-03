const {databaseConnection} = require ('./connection')

const pokemons = {}

async function salvarPokemons(pokemon){
    
    const insertPokemon = {
        nome: pokemon.nome,
        tipo: pokemon.tipo,
        local_origem: pokemon.origem
    }
    const result = await databaseConnection('pokemons').insert(insertPokemon)

    if(result){
        return{
            //nome: pokemon.nome,
            //tipo: pokemon.tipo,
            //origem:pokemon.origem,
            ...pokemon,
            id: result[0]
        }
    }else{
        console.error("Deu erro!")
        return{
            error: "Deu erro na inserção"
        }
    }
}

async function mostrarPokemon(id){

    //const result = await databaseConnection.where({id: id}).select('nome', 'tipo', 'id').from('pokemons')
    const result = await databaseConnection('pokemons').where({id})
    return result [0]
}

async function mostrarPokemons(){
    const result = await databaseConnection('pokemons')
    return result
}

module.exports = { salvarPokemons, mostrarPokemon, mostrarPokemons}