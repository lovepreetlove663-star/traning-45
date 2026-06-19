const time = document.getElementById("time");
const day = document.getElementById("day");
const month = document.getElementById("month");

function updateClock(){
    const today  = new Date();
    time.innerHTML = today.toLocaleTimeString();
        document.getElementById("date").innerHTML =
        today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
day.textContent=today.toLocaleDateString("en-US",{weekday:"long"});

month.textContent=today.toLocaleString("en-US",{month:"long"});
}

updateClock();
setInterval(updateClock,1000);

