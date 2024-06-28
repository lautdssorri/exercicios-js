//Criando a função Fetch do botao pesquisar

 async function fetchPokemom(){
    try {
        const pokemomID = document.getElementById('pokemomID').value
        if(pokemomID == ''){
            alert('Digite um ID válido');
            throw new Error ('ID inválido');
        }

        const pokemomNome = document.getElementById('pokemomNome');
        const pokemomType = document.getElementById('pokemomType');

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemomID}`);
        if(!resp.ok){
            throw new Error('Pokemom não encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
            const pokemomSprite = data.sprites.front_default;
            const imgElemento = document.getElementById('pokemomSprite');

            const pokemomNomeData = data.name.toUpperCase();
            const pokemomTypeData = data.types[0].type.name;

            //setando os elementos data no HTML
            imgElemento.src = pokemomSprite;
            imgElemento.style.display = 'block';

            pokemomNome.innerHTML = pokemomNomeData;
            pokemomType.innerHTML = pokemomTypeData;
        }

    } catch (error) {
        console.log(error);
    }
 }