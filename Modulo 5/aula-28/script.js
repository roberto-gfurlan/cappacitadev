const listarPokemons = async function(){

    let pokemons = document.getElementById('pokemons')
    pokemons.innerHTML = ''

    let urls = []
    for (let i = 0; i < 100; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
        }
  
    let promises = []
    urls.forEach((url)=>{
        promises.push(
            fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'default'})
         .then((res)=> res.json())
         .then((data)=> data)       
        )
    })

    const responses = await Promise.all(promises)

    responses.forEach((pokemon)=>{
        let nodeId = pokemon.id

        let img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        img.className = 'img-fluid img-thumbnail'

        let xicon = document.createElement('i')
        xicon.className = 'bi bi-x-square'
        xicon.onclick = function(){
            pokemons.removeChild(document.getElementById(nodeId))
        }

        let id = document.createElement('p')
        id.innerHTML = `ID: ${pokemon.id}<br>Nome: ${pokemon.name}`

        let div = document.createElement('div')
        div.className = 'col card bg-light'
        div.id = nodeId

        div.appendChild(id)
        div.appendChild(img)
        div.appendChild(xicon)
        pokemons.appendChild(div)

     })
}