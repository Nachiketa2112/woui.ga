
var start = new Date("Feb 2, 2022 13:29:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var elapsed = now - start;

    var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
}, 1000);

// var start = new Date("Feb 2, 2022 13:29:00").getTime();
// var end = new Date("January 3, 2023 13:29:00").getTime();

// var elapsed = end - start;

// var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
// var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

// document.getElementById("days").innerHTML = days;
// document.getElementById("hrs").innerHTML = hours;
// document.getElementById("mins").innerHTML = minutes;
// document.getElementById("secs").innerHTML = seconds;
