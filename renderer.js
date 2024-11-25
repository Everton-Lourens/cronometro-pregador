<<<<<<< HEAD
const timerElement = document.getElementById('timer');




const logElement = document.createElement('div');
logElement.style.color = 'white';
logElement.style.position = 'absolute';
logElement.style.top = '0';
logElement.style.left = '0';
document.body.appendChild(logElement);

function logToDOM(message) {
    logElement.innerText += `${message}\n`;
}
// Use em vez de console.log:
//logToDOM("Meu log no DOM!");


let interval;
let countdownSeconds = 0;

// Deixa o timer apagado inicialmente
timerElement.style.display = 'none';

function newStartTimer() {

    clearInterval(interval);
    timerElement.style.display = 'block';
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const dayOfWeek = now.getDay();

        const time = {
            timeString: `${hours}:${minutes}:${seconds}`,
            stopwatch: `${String(59 - Number(minutes)).padStart(2, '0')}:${String(59 - Number(seconds)).padStart(2, '0')}`,
            dayOfWeek,
            hours,
            minutes,
            seconds
        };

        // Default time
        timerElement.innerText = time.timeString;
        timerElement.style.fontSize = '20rem';
        timerElement.className = 'white';

        if (dayOfWeek === 0) {
            // is Sunday
            startThisTime('19')
        }

        if (dayOfWeek === 2 || dayOfWeek === 4) {
            // is Tuesday or Wednesday
            startThisTime('20')
        }

        function startThisTime(timeDefaultToDay) {
            const thisHours = Number(hours);
            const thisMinutes = Number(minutes);
            const thisTimeDefaultToDay = Number(timeDefaultToDay);

            if (thisHours == thisTimeDefaultToDay && thisMinutes <= 29) {
                timerElement.innerText = time.timeString;
                timerElement.style.fontSize = '20rem';
                timerElement.className = 'white';
            } else {
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 30) {
                    timerElement.innerText = time.stopwatch;
                    timerElement.style.fontSize = '30rem';
                    timerElement.className = 'white';
                }
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 53) {
                    timerElement.style.fontSize = '30rem';
                    timerElement.className = 'yellow';
                }
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 58) {
                    timerElement.style.fontSize = '30rem';
                    timerElement.className = 'red';
                } else if (thisHours == (thisTimeDefaultToDay + 1) && thisMinutes >= 0) {
                    timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                    timerElement.style.fontSize = '25rem';
                    timerElement.className = 'red blink'; // Pisca vermelho
                }
            }
        }

        return time;
    }, 1000);
}


newStartTimer();






=======
const timerElement = document.getElementById('timer');




const logElement = document.createElement('div');
logElement.style.color = 'white';
logElement.style.position = 'absolute';
logElement.style.top = '0';
logElement.style.left = '0';
document.body.appendChild(logElement);

function logToDOM(message) {
    logElement.innerText += `${message}\n`;
}
// Use em vez de console.log:
//logToDOM("Meu log no DOM!");


let interval;
let countdownSeconds = 0;

// Deixa o timer apagado inicialmente
timerElement.style.display = 'none';

function newStartTimer() {

    clearInterval(interval);
    timerElement.style.display = 'block';
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const dayOfWeek = now.getDay();

        const time = {
            timeString: `${hours}:${minutes}:${seconds}`,
            stopwatch: `${String(59 - Number(minutes)).padStart(2, '0')}:${String(59 - Number(seconds)).padStart(2, '0')}`,
            dayOfWeek,
            hours,
            minutes,
            seconds
        };

        timerElement.innerText = time.timeString;

        if (dayOfWeek === 0) {
            if (hours === '19' && Number(minutes) >= 30) {
                timerElement.innerText = time.stopwatch;
                timerElement.className = ''; // Branco
            }
            if (hours === '19' && Number(minutes) >= 53) {
                timerElement.className = 'yellow';
            }
            if (hours === '19' && Number(minutes) >= 58) {
                timerElement.className = 'red';
            } else if (hours === '20' && Number(minutes) >= 0) {
                timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                timerElement.className = 'red blink'; // Pisca vermelho
            }
        }

        if (dayOfWeek === 2 || dayOfWeek === 4) {
            if (hours === '20' && Number(minutes) >= 30) {
                timerElement.innerText = time.stopwatch;
                timerElement.className = ''; // Branco
            }
            if (hours === '20' && Number(minutes) >= 53) {
                timerElement.className = 'yellow';
            }
            if (hours === '20' && Number(minutes) >= 58) {
                timerElement.className = 'red';
            } else if (hours === '21' && Number(minutes) >= 0) {
                timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                timerElement.className = 'red blink'; // Pisca vermelho
            }
        }

        return time;
    }, 1000);
}


newStartTimer();






>>>>>>> c554f831071bd15cc2c0f2cdfe39ca5eb1305d69
