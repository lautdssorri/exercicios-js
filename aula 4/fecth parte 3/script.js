//Buscando elemento do objeto da requisição Fetch

//Criando a função assincrona
async function fetchPokemom(){
    try{
        const pokemomID = document.getElementById('pokemomID').value;
        const pokemomNome = document.getElementById('pokemomNome');
        const pokemomTipo = document.getElementById('pokemomType');

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemomID}`);

        if(!resp.ok){
            throw new Error('Pokemom não encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
            const imgElemento = document.getElementById('pokemomSprite');
            const pokemomSprite = data.sprites.front_default;
            const pokemomNomeData = data.name;
            const pokemomTipoData = data.types[0].type.name;

            imgElemento.src = pokemomSprite
            imgElemento.style.display = 'block'
            pokemomNome.innerHTML = pokemomNomeData;
            pokemomTipo.innerHTML = pokemomTipoData;
        }

    } catch (error){
        console.error(error);
    }
}