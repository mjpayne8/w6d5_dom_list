document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
});

const makePlayer = function(first_name,last_name,age,position){
  const player = {
    first_name: first_name,
    last_name: last_name,
    age: age,
    position: position
  };
  return player;
};

const addPlayer = function(player){
  const listElement = document.createElement('li');
  const name = makeNewParagraph(`${player.first_name} ${player.last_name}`);
  const age = makeNewParagraph(`Age: ${player.age}`);
  const position = makeNewParagraph(`Position: ${player.position}`);
  listElement.appendChild(name);
  listElement.appendChild(age);
  listElement.appendChild(position);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(listElement);
};

const makeNewParagraph = function(text){
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
};
