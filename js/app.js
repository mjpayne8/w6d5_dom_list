document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const form = document.querySelector('#registration-form');
  form.addEventListener('submit', addPlayerToList);
  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click',deleteAll);
});

const makePlayer = function(first_name,last_name,age,position,first_eleven){
  const player = {
    first_name: first_name,
    last_name: last_name,
    age: age,
    position: position,
    first_eleven: first_eleven
  };
  return player;
};

const addPlayer = function(player){
  const listElement = document.createElement('li');
  const name = makeNewParagraph(`${player.first_name} ${player.last_name}`);
  const age = makeNewParagraph(`Age: ${player.age}`);
  const position = makeNewParagraph(`Position: ${player.position}`);
  const firstTeam = makeNewParagraph(`First Team? ${player.first_eleven}`);
  listElement.appendChild(name);
  listElement.appendChild(age);
  listElement.appendChild(position);
  listElement.appendChild(firstTeam);
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
    event.target.position.value,
    event.target.first_eleven.value);
  addPlayer(player);
  event.target.reset()
};

const deleteAll = function(event){
  const playerList = document.querySelector('#player-list');
  while (playerList.firstChild){
    playerList.removeChild(playerList.firstChild);
  };
}
