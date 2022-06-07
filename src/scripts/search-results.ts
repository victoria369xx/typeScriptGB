import { renderBlock } from './lib.js'
import { getFavoritePlacesArray,getFavoritesAmount} from './getDataFromLS.js';

const favoritesAmount = getFavoritesAmount('amount');

export const favAmountParam = {
  amount: favoritesAmount, 

  set  current (value:number) {
       this.amount = value
       console.log(this.amount) // не перезаписывает значение в хэдере, но верно выводит в консоль
  }
}

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

 
  const favPlacesLiked = getFavoritePlacesArray();
  const getNotMarkedFav = listOfPlaces.filter(place => favPlacesLiked.every(item => item.id !== place.id)); 
  const ids = getNotMarkedFav.map(obj => obj.id); 
  

  function toggleFavoriteItem(elementId, element) {
    const favPlace = listOfPlaces.find(place => place.id == elementId);
    const favPlaceLS = { id: favPlace.id, name: favPlace.name, image: favPlace.image };
    const favPlacesArr = getFavoritePlacesArray();

    if (!(element.classList.contains('active'))) {
      element.classList.add('active');
      const favPlace = listOfPlaces.find(place => place.id == elementId);
      const favPlaceLS = { id: favPlace.id, name: favPlace.name, image: favPlace.image };
      favPlacesArr.push(favPlaceLS);
      localStorage.setItem('favorite', JSON.stringify(favPlacesArr));
      localStorage.setItem('amount', JSON.stringify(favPlacesArr.length));
      favAmountParam.current = favPlacesArr.length;
    } else {
      element.classList.toggle('active');
      const filteredResult = favPlacesArr.filter(place => place.id !== favPlaceLS.id);
      localStorage.setItem('favorite', JSON.stringify(filteredResult));
      localStorage.setItem('amount', JSON.stringify(filteredResult.length));
      favAmountParam.current = filteredResult.length;
    }
  }

  const favoritesEl = document.querySelectorAll('.favorites') as NodeListOf<HTMLDivElement>
  favoritesEl.forEach(elem => {
    if(ids.includes(Number(elem.id))){
      elem.classList.toggle('active')
    }
    elem.addEventListener('click', () => {
      toggleFavoriteItem(elem.id, elem)
  })
  })


}

