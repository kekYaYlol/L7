function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = now.getMinutes().padStart(2, "0");
    const seconds = now.getSeconds().padStart(2, "0");
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000)