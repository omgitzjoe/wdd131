const ditto = {
id: 132,
name: "ditto",
type: "normal",
abilities: ["limber", "imposter"],
base_experience: 101,
height: 3,
weight: 40,
stats: {
hp: 48,
attack: 48,
defense: 48,
special_attack: 48,
special_defense: 48,
speed: 48
},
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
transform: function(){
return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
}
};

function load(pokemon){
    document.querySelector('#name').textContent=pokemon.name;
    document.querySelector('#ability').textContent=pokemon.abilities[0];
    document.querySelector('#ditto').src=pokemon.sprite;
}
load(ditto);

document.querySelector('#ditto').addEventListener('click',function()
{document.querySelector("#ditto").src=ditto.transform()});

    