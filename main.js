const weekDay = new Date();
if (weekDay.getDay() % 6 === 0) {
    console.log('Weekend');
} else {
    console.log('Weekday');
}

var day1 = new Date();
var day2 = day1.getDay();
if (day2 == 6 || day2 == 0) {
    console.log("weekend");
} else {
    console.log("weekday");
}