let hours = document.getElementById("hrs")
let mins = document.getElementById("mins")
let secs = document.getElementById("secs")

function collectTime() {
    let time = new Date();
    hours.innerHTML = (time.getHours() < 10 ? "0" : " ") + time.getHours();
    mins.innerHTML = (time.getMinutes() < 10 ? "0" : " ") + time.getMinutes();
    secs.innerHTML = (time.getSeconds() < 10 ? "0" : " ") + time.getSeconds();
}

setInterval(collectTime, 1000)