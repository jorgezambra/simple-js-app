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
]
for ( var i = 0; i < pokemonList.length; i++) {
  document.write('<br>' + pokemonList[i].name + ' (Height ' + pokemonList[i].height+')')
if ( pokemonList[i].height >= 1.1) {
  document.write(' (WOW! That\'s Big!)')
  }
}
