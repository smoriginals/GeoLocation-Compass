//let arrow = document.querySelector(".compass-arrow");
//let speed = document.getElementById('speed');

//navigator.geolocation.watchPosition((data) => {
//    speed.textContent = `${data.coords.speed !== null ? data.coords.speed : 'N/A'} Km/h`;
//    let heading = data.coords.heading !== null ? data.coords.heading : 0;
//    arrow.style.transform = `rotate(${heading}deg)`;
//}, (err) => {
//    console.error(err);
//    alert("Please Allow The Location Permission");
//});

const arrow = document.querySelector(".compass-arrow");
const speedEl = document.getElementById('speed');

// GPS speed (mobile only)
navigator.geolocation.watchPosition(
    (pos) => {
        const speed = pos.coords.speed;
        speedEl.textContent = speed
            ? `${(speed * 3.6).toFixed(1)} km/h`
            : 'Speed: N/A';
    },
    (err) => console.error(err),
    { enableHighAccuracy: true }
);

// Compass (works on phones)
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationabsolute', (e) => {
        if (e.alpha !== null) {
            arrow.style.transform = `rotate(${360 - e.alpha}deg)`;
        }
    });
} else {
    speedEl.textContent = 'Compass not supported on this device';
}
