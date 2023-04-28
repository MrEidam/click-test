var clicks = 0;
let clicking = false;

let seconds = document.querySelector('input');
let p = document.querySelector('h1');

btn.onclick = () => {
    var time = seconds.value*1000;
    if(!seconds){
        alert('Set seconds!');
        clicking = false;
        time = 0;
    }else if(!clicking){
        setTimeout(() => {
            p.innerHTML = `You've clicked ${clicks/seconds.value} c/s!`;
            clicks = 0;
            clicking = false;
            console.warn('Result');
        }, time)
    }else{

    }
    console.log(clicking, time, clicks);
    
    
    clicking = true;
    clicks++;
}