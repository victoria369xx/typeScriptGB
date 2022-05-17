let year;
let month;
let day; 

const TO_CALENDAR_MONTH = 1; 

const FIRST_DAY_OF_MONTH = 1;
const FIRST_MONTH_OF_YEAR = 1;

const NEXT_YEAR = 1;
const NEXT_MONTH = 2;
const NEXT_DAY = 1;

const TWO_DAYS_STAY = 2; 

export function getMinDate () : string {
    year = (new Date().getFullYear()).toString();
    month = (new Date().getMonth()+ TO_CALENDAR_MONTH).toString().padStart(2,"0");
    day = (new Date().getDate()).toString().padStart(2,"0");

    return `${year}-${month}-${day}`
}

export function getMaxDate () : string {
    month = new Date().getMonth()+ NEXT_MONTH;
    year = (month == FIRST_DAY_OF_MONTH) ? new Date().getFullYear() + NEXT_YEAR : new Date().getFullYear(); 

    function getLastDayOfMonth(year, month){
        day = new Date(year, month, 0);
        return day.getDate();
    }

    day = getLastDayOfMonth(year, month) 

    year = year.toString();
    month = month.toString().padStart(2, "0"); 
    day = day.toString().padStart(2, "0");

    return `${year}-${month}-${day}`
}


export function getDefaultCheckInDate () :string {
    day = new Date().getDate() + NEXT_DAY;
    month = (day == FIRST_DAY_OF_MONTH) ? new Date().getMonth()+ NEXT_MONTH : new Date().getMonth()+ TO_CALENDAR_MONTH; 
    year = (month == FIRST_MONTH_OF_YEAR) ? new Date().getFullYear() + NEXT_YEAR : new Date().getFullYear()

    year = year.toString();
    month = month.toString().padStart(2, "0"); 
    day = day.toString().padStart(2, "0");

    return `${year}-${month}-${day}`
}



export function getDefaultCheckOutDate () : string {
    day = new Date().getDate() + NEXT_DAY + TWO_DAYS_STAY;
    month = (day == FIRST_DAY_OF_MONTH) ? new Date().getMonth()+ NEXT_MONTH : new Date().getMonth()+ TO_CALENDAR_MONTH; 
    year = (month == FIRST_MONTH_OF_YEAR) ? new Date().getFullYear() + NEXT_YEAR : new Date().getFullYear()

    year = year.toString();
    month = month.toString().padStart(2, "0"); 
    day = day.toString().padStart(2, "0");

    return `${year}-${month}-${day}`
}

