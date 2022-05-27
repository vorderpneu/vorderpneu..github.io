window.addEventListener('click', (event) => {
    postMessage('resetTimer')
});

window.addEventListener('keypress', (event) => {
    postMessage('resetTimer')
});

window.addEventListener('touchend', (event) => {
    postMessage('resetTimer')
});
