window.addEventListener('click', (event) => {
    console.log('click event');
    postMessage('resetTimer')
});

window.addEventListener('keypress', (event) => {
    console.log('keypress event');
    postMessage('resetTimer')
});

window.addEventListener('touchend', (event) => {
    console.log('touchend event');
    postMessage('resetTimer');
});

window.addEventListener('input', (evt) => {
    console.log('input event');
    postMessage('resetTimer');
});
