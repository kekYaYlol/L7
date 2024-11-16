function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    const selectTimeZona = document.getElementById('timeZona');
    timeZona = parseInt(selectTimeZona.value, 10); 
    // console.log(timeZona)
}

let timeZona = 0;

// selectTimeZona.addEventListener('change', updateClock)
setInterval(updateClock(timeZona), 1000)

// const different_time_UTC = new Date().getTimezoneOffset() / 60;
// const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZona;
// const timeZona2 = new Date().DateTimeFormat().resolvedOptions().timeZona;
// document.getElementById('clock2').textContent = timeZona;