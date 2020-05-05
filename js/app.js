function getNewTime() {
    const date = new Date();
    const destination = new Date(2021, 6, 1);
    console.log(destination);
    let timeText = document.getElementById('time-text');
    const difference = destination.getTime() - date.getTime();
    
    let totalTime = difference;
    const days = Math.floor(totalTime / 1000 / 60 / 60 / 24);
    totalTime -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(totalTime / 1000 / 60 / 60);
    totalTime -= hours * 1000 * 60 * 60;

    const mins = Math.floor(totalTime / 1000 / 60);
    totalTime -= mins * 1000 * 60;

    const secs = Math.floor(totalTime / 1000);

    console.log(`${days}day ${hours}hours ${mins}mins ${secs}secs`);
    timeText.innerHTML = `距離2021年7月1日 還有${days}天${hours}時${mins}分${secs}秒`
}

setInterval(getNewTime, 500);