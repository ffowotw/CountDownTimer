let urlParams = new URLSearchParams(window.location.search);

let title = "UNTIL MONSTER HUNTER WILDS"
let time = "Feb 28, 2025 13:00:00";

if (urlParams.has("title"))
{
    title = urlParams.get("title")
}

if (urlParams.has("time"))
{
    time = urlParams.get("time")
}

const date = new Date(time).getTime();

function get_time() {
    let now = new Date().getTime();
    let delta = date - now;
    
    let days    = Math.floor((delta / (1000 * 60 * 60 * 24))).toString().padStart(2, "0");
    let hours   = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    let minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    let seconds = Math.floor((delta % (1000 * 60)) / 1000 + 1).toString().padStart(2, "0");

    return days + " Days Left, " + hours + ":" + minutes + ":" + seconds;
}

function raf(time) {
    
    document.getElementById("timer").innerHTML = get_time();

    requestAnimationFrame(raf);
}

document.getElementById("title").innerHTML = title;
requestAnimationFrame(raf);