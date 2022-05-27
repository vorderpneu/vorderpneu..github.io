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

const selectElement = document.getElementById('messageInput');

selectElement.addEventListener('change', (evt) => {
    console.log('input change event');
    postMessage('resetTimer');
});
