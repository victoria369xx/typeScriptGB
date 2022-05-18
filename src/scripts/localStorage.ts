export interface IUser {
    name: string
    avatarUrl: string
} 

export function setUserData () {
    const user = {
        name: 'Wade Warren',
        avatarUrl: '../img/avatar.png'
    }
    localStorage.setItem('user', JSON.stringify(user));
}

export function setFavouritesAmount () {
    const favouritesAmount = 2;
    localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmount))
}

export function getUserData () : object {
    const user : unknown = JSON.parse(localStorage.getItem('user'))
    if (typeof user ==  "object") {
        return user
    }
}

export function getFavouritesAmount () : number {
    const favouritesAmount : unknown = JSON.parse(localStorage.getItem('favouritesAmount'))
    if (typeof favouritesAmount == "number") {
        return favouritesAmount 
    }
}