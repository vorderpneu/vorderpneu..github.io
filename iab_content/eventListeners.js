window.addEventListener('click', (event) => {
    postMessage('resetTimer')
});

window.addEventListener('keypress', (event) => {
    console.log('resetTimer');
});

window.addEventListener('touchend', (event) => {
    console.log('resetTimer');
});
