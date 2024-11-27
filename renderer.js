const onlyTimeElement = document.getElementById('time');
const timerElement = document.getElementById('timer');
const dotenv = require('dotenv');
dotenv.config();

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
onlyTimeElement.style.display = 'none';

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
            fullTimeString: `${hours}:${minutes}:${seconds}`,
            timeString: `${hours}:${minutes}`,
            stopwatch: `${String(59 - Number(minutes)).padStart(2, '0')}:${String(59 - Number(seconds)).padStart(2, '0')}`,
            dayOfWeek,
            hours,
            minutes,
            seconds
        };

        // Default time
        onlyTimeElement.innerText = time.timeString;
        timerElement.innerText = time.timeString;
        timerElement.style.fontSize = '25rem';
        timerElement.className = 'white';

        if (process.env.IS_DEV == 'true') {
            process.env.DEV_TIME = (process.env.DEV_TIME == 'false') ? hours : process.env.DEV_TIME;
            //process.env.DEV_TIME = (Number(hours) - 1) // "descommit" para ver o tempo em excesso
            startThisTime(process.env.DEV_TIME);
        }

        if (dayOfWeek === 0) {
            // is Sunday
            startThisTime('19')
        }

        if (dayOfWeek === 2 || dayOfWeek === 4) {
            // is Tuesday or Wednesday
            startThisTime('20');
        }

        function startThisTime(timeDefaultToDay) {
            const thisHours = Number(hours);
            const thisMinutes = Number(minutes);
            const thisTimeDefaultToDay = Number(timeDefaultToDay);

            if (thisHours == thisTimeDefaultToDay && thisMinutes <= 29) {
                timerElement.innerText = time.timeString;
                timerElement.style.fontSize = '15rem';
                timerElement.className = 'white';
                onlyTimeElement.style.display = 'none';
            } else {
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 30) {
                    timerElement.innerText = time.stopwatch;
                    timerElement.style.fontSize = '15rem';
                    timerElement.className = 'white';
                    onlyTimeElement.style.display = 'block';
                }
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 55) {
                    timerElement.style.fontSize = '15rem';
                    timerElement.className = 'yellow';
                    onlyTimeElement.style.display = 'block';
                }
                if (thisHours == thisTimeDefaultToDay && thisMinutes >= 58) {
                    timerElement.style.fontSize = '15rem';
                    timerElement.className = 'red';
                    onlyTimeElement.style.display = 'block';
                } else if ((thisHours == (thisTimeDefaultToDay + 1) && thisMinutes >= 0)) {
                    timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                    timerElement.style.fontSize = '15rem'; // FULL TIME IS 25REM: timerElement.style.fontSize = '25rem';
                    timerElement.className = 'red blink'; // Pisca vermelho
                    onlyTimeElement.style.display = 'block';
                }
            }
        }

        return time;
    }, 1000);
}

newStartTimer();
