//Realizando o Fetch no endpoint

//Percorrendo os 100 primeiros pokemons
const fetchPokemom = async() =>{
    for(let i = 1; i <= 100; i++){
        await pegaPokemom(i)
    }
}

//Exibindo os 100 primeiros pokemons
const pegaPokemom = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json()
   // console.log(data.name);
console.log(data.types[0].type.name)
}

fetchPokemom();