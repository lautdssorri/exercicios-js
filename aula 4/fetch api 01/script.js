//Fetch teste 01 estudando as Promises

 //const req = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
 //console.log(req);

 //Fetch teste 01 resolvendo a Promise
 //const resq = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
   // .then(resp => console.log(resq))
   // .catch(error => console.log(error));

// TEste 03 COnvertendo a resp em json()
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
 //   .then(resp => resp.json())
 //   .then(data => console.log(data))
  //  .catch(error => console.log(error));

//Teste 04 Acessando via ID uma pokemon
fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

//Teste 05 Usando Try Cat
async function fetchPokemon(){
    try { 
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');
            if(!resp.ok){
                const data = await resp.json();
                console.log(data);
            }
    } catch (error) {
        console.log(error);
    }
}