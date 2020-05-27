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

function pokemonDetails(pokemon) {
  document.write('Name' + ': ' + pokemon.name + '<br>' + 'Height' + ': ' + pokemon.height + '<br>' + 'Types' + ': ' +pokemon.types + '<br>' + '<br>');
}
pokemonList.forEach(pokemonDetails);
