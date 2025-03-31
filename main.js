const URL = 'http://localhost:3000';

const KEYS = {
    'w': document.getElementById('wKey'),
    'a': document.getElementById('aKey'),
    's': document.getElementById('sKey'),
    'd': document.getElementById('dKey'),
    'i': document.getElementById('iKey'),
    'k': document.getElementById('kKey'),
    'j': document.getElementById('jKey'),
    'l': document.getElementById('lKey'),
};

document.addEventListener("keydown", (event) => {
    const keyPressed = event.key.toLowerCase();
    console.log(`Key Pressed: ${event.key}, Code: ${event.code}`)

    if(KEYS[keyPressed])
        KEYS[keyPressed].classList.add('key-active')

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "command":keyPressed,
            "action": "start"
        })
    });

})


document.addEventListener("keyup", (event) => {
    const keyPressed = event.key.toLowerCase();
    if(KEYS[keyPressed])
        KEYS[keyPressed].classList.remove('key-active')
    console.log(`Key Up: ${event.key}, Code: ${event.code}`)
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "command":keyPressed,
            "action": "stop"
        })
    });
})