<<<<<<< HEAD

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
    return time;
}, 1000);


=======

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
    return time;
}, 1000);


>>>>>>> c554f831071bd15cc2c0f2cdfe39ca5eb1305d69
