const time = (second) => {
    const hours = Math.floor(second / 3600);                     // Calculate whole hours
    const minutes = Math.floor((second % 3600) / 60);            // Remaining minutes after hours
    const remainingSeconds = Math.floor(second % 60);            // Remaining seconds

    return `${hours} hour(s) ${minutes} minute(s) ${remainingSeconds} second(s)`
}

console.log(time(18432))
