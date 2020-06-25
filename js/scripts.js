var pokemonRepository = (function () {
  var pokemonList = [
{
  name: 'Bulbasaur',
  height: 0.7,
  types: ['grass', 'poison'],
},
{
  name: 'Charmander',
  height: 0.6,
  types: ['fire'],
},
{
  name: 'Charizard',
  height: 1.7,
  types: ['fire', 'flying'],
}
];

function add(pokemon) {
    pokemonList.push(pokemon);
  }

function getAll() {
    return pokemonList;
  }

function addListItem(pokemon) {
  var pokemonList = document.querySelector('ul');
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('pokemon-name');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  button.addEventListener('click', function (event) {showDetails(pokemon.name)
  });
}

function showDetails(pokemon) {
  console.log(pokemon)
}

return {
    add: add,
    getAll: getAll,
    addListItem : addListItem
  };
})();

pokemonRepository.add({
  name : 'Wartortle',
  height : 3.03,
  types: ['Water'],
});

pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  })
