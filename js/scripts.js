var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
      repository.push(pokemon);
    }

  function getAll() {
      return repository;
    }

  function addListItem(pokemon) {
    var pokemonList = document.querySelector('ul');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function (event) {showDetails(pokemon)
    });
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function(response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
      }).catch(function (error) {
        console.error(error);
      });
    }

    function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
    }

    function showModal(item) {
        var $modalContainer = document.querySelector('#modal-container');

        $modalContainer.innerHTML = '';

        var modal = document.createElement('div');
        modal.classList.add('modal');

        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        var nameElement = document.createElement('h1');
        nameElement.innerText = item.name;

        var imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute('src', item.imageUrl);

        var heightElement = document.createElement('p');
        heightElement.innerText = 'height : ' + item.height + 'm';

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement);
        modal.appendChild(heightElement);

        $modalContainer.appendChild(modal);
        $modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }

return {
    add: add,
    getAll: getAll,
    addListItem : addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
