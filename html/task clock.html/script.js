const time = document.getElementById("time");

function updateClock(){
    const today  = new Date();
    time.innerHTML = today.toLocaleTimeString();
        document.getElementById("date").innerHTML =
        today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

}
updateClock();
setInterval(updateClock,1000);

