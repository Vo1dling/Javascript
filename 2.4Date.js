function getDay() {
    let currentDate = new Date();
    let weekday = currentDate.getDay();
    let options = { weekday: 'long'};
    return (new Intl.DateTimeFormat('en-US', options).format(currentDate));
}
function getMonthDay() {
    let currentDate = new Date();
    let monthDay = currentDate.getDate();
    return (monthDay)
}
function getMonth() {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let options = { month: 'long'};
    return (new Intl.DateTimeFormat('en-US', options).format(currentDate));
}
function getYear() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return (year)
}

let year = getYear()
let day = getDay()
let month = getMonth()
let monthDay = getMonthDay()
let date = console.log (`Today is ${day} the ${monthDay} of ${month}, ${year}`)
