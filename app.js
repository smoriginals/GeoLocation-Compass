let arrow = document.querySelector(".compass-arrow");
let ring = document.querySelector(".compass-ring");
let speed = document.getElementById('speed');

navigator.geolocation.watchPosition((data) => {
    speed.textContent = `${data.coords.speed !== null ? data.coords.speed : 'N/A'} Km/h`;
    let heading = data.coords.heading !== null ? data.coords.heading : 0;
    arrow.style.transform = `rotate(${heading}deg)`;
    ring.style.transform = `rotate(${heading}deg)`;
}, (err) => {
    console.error(err);
    alert("Please Allow The Location Permission");
},
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    }
);