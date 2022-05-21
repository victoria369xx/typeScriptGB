function getUserData (key:string) {
    const user : unknown = JSON.parse(localStorage.getItem(key))
     if (typeof user == "object") {
        return user
     } else {
       console.error("User must be an object")
     }
  }
  
  function getFavouritesAmount (key:string) {
    const amount : unknown = JSON.parse(localStorage.getItem(key))
    if (typeof amount == "number") {
      return amount
    } else {
      console.error("FavouritesAmount must be a number")
    }
  }
  
 export const user = getUserData('user');
 export const favouritesAmount = getFavouritesAmount('favouritesAmount');