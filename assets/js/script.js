
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const countdown = setInterval(function() {

    // Ora corrente
    const now = new Date();

    // L'ora in cui finirà il countdown
    const end = new Date('Aug 24, 2023 10:30:00').getTime();

   //Differenza di tempo
    let distance = end - now;
    distance--;

    // Trovare giorni, ora, minuti e secondi leggibili 
    const readableDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const readableHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const readableMinutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const readableSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Riportare tutto nel DOM
    days.innerHTML = readableDays;
    hours.innerHTML = readableHours;
    minutes.innerHTML = readableMinutes;
    seconds.innerHTML = readableSeconds;

    //stoppare quando finice il countdown
    if(distance < 0) {
        clearInterval(countdown);
    }
    
}, 1000);


