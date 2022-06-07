function getUserData (key:string) {
    const user : unknown = JSON.parse(localStorage.getItem(key))
     if (typeof user == "object" && 'name' in user && 'avatarUrl' in user) {
        return user
     } else {
       console.error("User must be an object")
     }
  }
  

  export function getFavoritesAmount (key: string): number {
      const amount = JSON.parse(localStorage.getItem(key))
      if(amount !== null) {
          return amount
      }
  }
  
 export const user = getUserData('user');


export function getFavoritePlacesArray () {
    return JSON.parse(localStorage.getItem('favorite'));
}