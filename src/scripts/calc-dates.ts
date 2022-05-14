let year;
let month;
let day; 


// преобразование месяца и дня с добавлением нуля, если число < 10
function formatMonth (month) {
    month = month < 10 ? "0"+ month : month
    return month
}

function formatDay (day) {
    day = day < 10 ? "0"+ day : day
    return day
}
//Минимальная дата, которую можно выбрать - сегодня

function calcMinDate () {
    year = new Date().getFullYear();
    month = new Date().getMonth()+1;
    day = new Date().getDate();

    month = month < 10 ? "0"+ month : month
    day = day < 10 ? "0"+ day : day
    return  String(`${year}-${month}-${day}`) 
}

export const minDate = calcMinDate();
//console.log(minDate) на момент дз 2022/05/14

//Максимальная дата - последний день следующего месяца

function getLastDayOfMonth(year, month){
    day = new Date(year, month, 0);
    return day.getDate();
}

function calcMaxDate () {
    month = new Date().getMonth()+2;
    year = (month == 1) ? new Date().getFullYear() + 1 : new Date().getFullYear(); 
    day = getLastDayOfMonth(year, month) 

    month = month < 10 ? "0"+ month : month
    day = day < 10 ? "0"+ day : day
    return String(`${year}-${month}-${day}`)
}

export const maxDate = calcMaxDate();
//console.log(maxDate) на момент дз 2022/06/30

// посчитать дату заезда по умолчанию (сегодня + 1)

function calcDateFrom () {
    day = new Date().getDate() + 1;
    month = (day == 1) ? new Date().getMonth()+2 : new Date().getMonth()+1; 
    year = (month == 1) ? new Date().getFullYear() + 1 : new Date().getFullYear()

    
    month = formatMonth(month)
    day = formatDay(day)
    return String(`${year}-${month}-${day}`)
}

export const dateFrom = calcDateFrom()
//console.log(dateFrom) на момент дз 2022/05/15

// посчитать дату выезда по умолчанию (дата заезда + 2)

function calcDateTo () {
    day = new Date().getDate() + 3;
    month = (day == 1) ? new Date().getMonth()+2 : new Date().getMonth()+1; 
    year = (month == 1) ? new Date().getFullYear() + 1 : new Date().getFullYear()

    
    month = formatMonth(month)
    day = formatDay(day)
    return String(`${year}-${month}-${day}`)
}

export const dateTo = calcDateTo()
//console.log(dateTo) на момент дз 2022/05/17