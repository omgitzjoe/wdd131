const character = {
      name: "Snortleblat",
      class: "Swamp Beat Diplomat",
      level: 5,
      health: 100,
      image: "snortleblat-min.png",
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

function renderCharacter(characters){
    document.querySelector("#class").textContent=characters.class;
    document.querySelector("#health").textContent=characters.health;
    document.querySelector("#level").textContent=characters.level;
    document.querySelector(".image").src=characters.image;
    document.querySelector(".name").textContent=characters.name;
}
renderCharacter(character);

document.querySelector("#attacked").addEventListener("click",function(){
character.attacked();
renderCharacter(character)
});

document.querySelector("#levelup").addEventListener("click",function(){
character.levelUp();
renderCharacter(character)
});

