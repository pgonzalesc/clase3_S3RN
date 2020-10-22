/*https://pokeapi.co/api/v2/pokemon/ditto

una funcion que haga un request y retorne la data utilizando async/await
una funcion que haga un request y retorne la data utilizando promesas*/

const getPokemon = async () => {
    try { 
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json();

        console.log(data.name)
    }catch(error) {
        // handle error in catch
        console.error(error)
    }
}

function getPokemon() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handle resolve & reject in the asynchronous
            
                resolve([
                    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
                                 console.log(response)
                                 return response.json()
                             }).then((data) => {
                                         console.log(data.name)
                                     })
                                     .catch((error) => {
                                         //console.log('error', error)
                                         reject('Failed to fetch data!')
                                     })
                ])
            
        } , 1000)
    })
}

getPokemon();