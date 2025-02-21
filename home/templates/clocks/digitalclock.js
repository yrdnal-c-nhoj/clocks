// Digital Clock with Milliseconds
function updateDigitalClock() {
    const digitalClock = document.getElementById('digital-clock');
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0'); // Ensure 3 digits

    digitalClock.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Analog Clock
function updateAnalogClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 360/12 = 30 degrees per hour
    const minuteDeg = minutes * 6; // 360/60 = 6 degrees per minute
    const secondDeg = seconds * 6; // 360/60 = 6 degrees per second

    document.getElementById('hour-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDeg}deg)`;
    document.getElementById('second-hand').style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDeg}deg)`;
}

// Initial updates
updateDigitalClock();
updateAnalogClock();

// Update clocks every 10 milliseconds (for digital clock to show milliseconds)
setInterval(() => {
    updateDigitalClock();
    updateAnalogClock();
}



#clock.hand i {
    position: absolute;
    background- color: var(--color);
width: var(--width);
height: var(--height);
border - radius: 8px;
