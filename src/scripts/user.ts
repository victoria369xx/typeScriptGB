import { renderBlock } from './lib.js'

export function renderUserBlock (user, favoriteItemsAmount?) {
  const favoritesCaption = favoriteItemsAmount >= 1 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount >=1 ? true : false

  const userHtlm = `
  <div class="header-container">
    <img class="avatar" src=${user.avatarUrl} alt=${user.name} />
    <div class="info">
        <p class="name">${user.name}</p>
        <p class="fav">
          <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
        </p>
    </div>
  </div>
  `
  renderBlock(
    'user-block',
    userHtlm
  )
}
