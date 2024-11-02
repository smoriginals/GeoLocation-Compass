let arrow = document.querySelector(".compass-arrow");
let speed = document.getElementById('speed');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert("Please Allow The Location Permission");
});