export interface IDatabaseItem {
    id: string,
    title: string,
    details: string,
    photos: string[],
    coordinates: number[],
    bookedDates: [],
    price: number
}

export interface ISearchParams {
    city : string,
    checkInDate : Date, 
    checkOutDate : Date, 
    priceLimit: number
}

export const database : IDatabaseItem []
   
export class FlatRentSdk {
   search(parameters: ISearchParams) : IDatabaseItem []
}