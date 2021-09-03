const express = require('express')
const app = express()
const dataBase = require('./database/databaseKnex')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/pokemons', async (req, res)=>{
    res.send( await dataBase.mostrarPokemons())
})

app.get('/pokemons/:id', async (req, res)=>{
    res.send(await dataBase.mostrarPokemon(req.params.id))
})

app.post('/pokemons', async (req, res)=>{
    const pokemon = await dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        origem: req.body.origem

    })
    res.send(pokemon)
    
})



app.listen(3003)