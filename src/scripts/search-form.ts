import { renderBlock } from './lib.js'
import {getDefaultCheckInDate, getDefaultCheckOutDate, getMinDate, getMaxDate} from './calc-dates.js'
import {searchFormHandler} from './search-form-handler.js'
import {baseURL} from './API/index.js'
import {renderSearchResultsBlock} from './search-results.js'

export function renderSearchFormBlock (checkInDate?:string, checkOutDate?:string) {

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate || getDefaultCheckInDate()}" min="${getMinDate()}" max="${getMaxDate()}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate || getDefaultCheckOutDate()}" min="${getMinDate()}" max="${getMaxDate()}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div id="search-btn"><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
  

  function fetchPlaces () {
    const coordinates = '59.9386,30.3141'
    const checkIn = new Date(`2022-06-01`).getTime()
    const checkOut = new Date (`2022-06-03`).getTime()
    try {
      fetch(baseURL + `/places/?coordinates=${coordinates}&checkInDate=${checkIn}&checkOutDate=${checkOut}&maxPrice=5000`)
      .then((response)=>{
          return response.json()
      })
      .then((data)=>{
        renderSearchResultsBlock(data)
      })
    } catch (error) {
        console.log('Не удалось получить данные API',error)
    }

  }

  const button = document.querySelector('#search-btn'); 
  if(button) {
    button.addEventListener('click', (event)=> {
      event.preventDefault()
      searchFormHandler()
      fetchPlaces()
    })
  }

}
