<<<<<<< HEAD
const timerElement = {
    className: '',
    innerText: '00:00:00'
};


setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayOfWeek = now.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    const time = {
        timerString: `${hours}:${minutes}:${seconds}`,
        dayOfWeek,
        hours,
        minutes,
        seconds
    };
    timerElement.innerText = time.timerString;


}, 1000);


if (dayOfWeek === 0 && hours === '19' && Number(minutes) >= 30) {
    if (countdownSeconds > 420) {
        timerElement.className = ''; // Branco
    } else if (countdownSeconds > 240) {
        timerElement.className = 'yellow'; // Amarelo
    } else if (countdownSeconds > 90) {
        timerElement.className = 'red'; // Vermelho
    } else {
        timerElement.className = 'red blink'; // Pisca vermelho
    }
    console.log(JSON.stringify(timerElement, null, 2));
    console.log('JSON.stringify(timerElement, null, 2)');
}

=======
const timerElement = {
    className: '',
    innerText: '00:00:00'
};


setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayOfWeek = now.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    const time = {
        timerString: `${hours}:${minutes}:${seconds}`,
        dayOfWeek,
        hours,
        minutes,
        seconds
    };
    timerElement.innerText = time.timerString;


}, 1000);


if (dayOfWeek === 0 && hours === '19' && Number(minutes) >= 30) {
    if (countdownSeconds > 420) {
        timerElement.className = ''; // Branco
    } else if (countdownSeconds > 240) {
        timerElement.className = 'yellow'; // Amarelo
    } else if (countdownSeconds > 90) {
        timerElement.className = 'red'; // Vermelho
    } else {
        timerElement.className = 'red blink'; // Pisca vermelho
    }
    console.log(JSON.stringify(timerElement, null, 2));
    console.log('JSON.stringify(timerElement, null, 2)');
}

>>>>>>> c554f831071bd15cc2c0f2cdfe39ca5eb1305d69
