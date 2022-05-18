import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {setUserData, setFavouritesAmount,getUserData, getFavouritesAmount, IUser} from './localStorage.js'


window.addEventListener('DOMContentLoaded', () => {
  setUserData()
  setFavouritesAmount()
  const user: IUser =  getUserData() // тип проверить
  const favouritesAmount = getFavouritesAmount()
  renderUserBlock(user.name, user.avatarUrl, favouritesAmount)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

