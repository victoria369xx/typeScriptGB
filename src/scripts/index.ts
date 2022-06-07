import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {user} from './getDataFromLS.js'
import {favAmountParam} from './search-results.js'



window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(user, favAmountParam.amount)
  renderSearchFormBlock()
  renderSearchStubBlock()
   renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})


