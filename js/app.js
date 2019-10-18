document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  form = document.querySelector('#registration-form');
  form.addEventListener('submit', addPlayerToList);
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

const addPlayerToList = function(event){
  event.preventDefault();
  const player = makePlayer(event.target.first_name.value,
    event.target.last_name.value,
    event.target.age.value,
    event.target.position.value);
  addPlayer(player);
  event.target.reset()
};
