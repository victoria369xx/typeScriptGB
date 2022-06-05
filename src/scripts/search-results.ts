import { renderBlock } from './lib.js'
import { getFavoritesAmount } from './user-data.js';

export let favoritesAmount = getFavoritesAmount('favorite');

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock(places) {
  let listOfPlacesHTML = ''
  const listOfPlaces = places;
  const favPlacesArr = JSON.parse(localStorage.getItem('favorite'));
  const getNotMarkedFav = listOfPlaces.filter(place => favPlacesArr.every(item => item.id !== place.id));
  
  if (Array.isArray(places) && places.length > 0) {
    places.forEach(place => {

      listOfPlacesHTML += ` <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active" id=${place.id}></div>
            <img class="result-img" src=${place.image} alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${place.name}</p>
              <p class="price">${place.price}</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${place.remoteness} км от вас</div>
            <div class="result-info--descr">${place.description}</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>`
    })

  }
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list ">
      ${listOfPlacesHTML}
    </ul>
    `
  )


  function toggleFavoriteItem(id, element) {
    const searchId = id;
    const favPlace = listOfPlaces.find(place => place.id == searchId);
    const favPlaceLS = { id: favPlace.id, name: favPlace.name, image: favPlace.image };
    
    if (!(element.classList.contains('active'))) {
      element.classList.add('active');
      favPlacesArr.push(favPlaceLS);
      localStorage.setItem('favorite', JSON.stringify(favPlacesArr));
    } else {
      element.classList.toggle('active');
      const filteredResult = favPlacesArr.filter(place => place.id !== favPlaceLS.id)
      localStorage.setItem('favorite', JSON.stringify(filteredResult))
    }
    favoritesAmount = getFavoritesAmount('favorite')
  }

  const ids = getNotMarkedFav.map(obj => obj.id)

  const favoritesEl = document.querySelectorAll('.favorites') as NodeListOf<HTMLDivElement>
  favoritesEl.forEach(elem => {
    if(ids.includes(Number(elem.id))){
      elem.classList.toggle('active')
    }
  })

  favoritesEl.forEach(elem => {
    elem.addEventListener('click', () => {
        toggleFavoriteItem(elem.id, elem)
    })
  })

}

