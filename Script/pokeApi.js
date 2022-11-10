



document.addEventListener("DOMContentLoaded", ()=>{
    const random = getRandomInt(1, 151)
    fetchdata(random);
});
const contenedorPOK = document.querySelector(".mostrarPokemon")



const getRandomInt = (min, max) =>{
    return Math.floor(Math.random() *(max - min)) + min;
}



const fetchdata = async (id)=>{
    try{
        let res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await res.json()       
        console.log(data)
        
           contenedorPOK.innerHTML =`
           <div class="contenedorPokemon">
           <p class="nombrePokemon">${data.name}</p>
           <img class="imagenPokemon" src="${data.sprites.front_default}">
           <img class="imagenPokemon"  src="${data.sprites.other.dream_world.front_default}">
           <div class="estadisticasPokemon">
           <p class="statsPokemon">PESO:${data.weight}kg</p>
           <p class="statsPokemon">ALTURA:${data.height}</p>
           <p class="statsPokemon">HABILIDADES: 1)${data.abilities[0].ability.name} 2) ${data.abilities[1].ability.name} 3) ${data.abilities[2].ability.name}</p>
           <p class="statsPokemon">${data.base_experience}EXP</p>
           <p class="statsPokemon">${data.stats[0].base_stat}HP</p>
           <p class="statsPokemon">${data.stats[1].base_stat}ATK</p>
           <p class="statsPokemon">${data.stats[2].base_stat}DEF</p>
           <p class="statsPokemon">${data.stats[5].base_stat}SPE</p>
           </div>
           </div>
           

            `;
        
        
        
        
    }catch (error){
        console.log(error)
    }
    
}





