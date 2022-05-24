interface ISearchFormData {
    checkInDate : string,
    checkOutDate: string,
    price: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPlace {
}

const place: IPlace = []

export function searchFormHandler (){
    const checkin : string = (document.querySelector('#check-in-date') as HTMLInputElement).value
    const checkout : string = (document.querySelector('#check-out-date') as HTMLInputElement).value
    const price : number  =  parseInt((document.querySelector('#max-price') as HTMLInputElement).value)
    
    const searchFormData : ISearchFormData = {
        checkInDate : checkin,
        checkOutDate : checkout, 
        price : price
    }

    search(searchFormData, () => showPlaces(place, "Ошибка!"))
}

function showPlaces (place : IPlace, error:string) : void{
    const random : number = Math.random()
    if (random < 0.5){
        console.log("Result: ", place)
    } else {
        console.error("Error: ", error)
    }
    
}

function search (searchFormData: ISearchFormData, callback) :void {
    console.log(`CheckIn: ${searchFormData.checkInDate}
    CheckOut: ${searchFormData.checkOutDate}
    Price: ${searchFormData.price}
    `)
    setTimeout(callback, 2000)
}