function postMessage(message) {
    message = (message && typeof message === 'string') ? message : document.getElementById('messageInput').value;
    if(!webkit.messageHandlers.cordova_iab) throw "Cordova IAB postMessage API not found!";
    webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({
        message: message
    }));
}

function closeIAM() {
            let message = {
                iabMessageType: 'receive-iab-message',
                value: 'reload'
            };
            window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));

    message = {
        iabMessageType: 'receive-iab-message',
        value: 'close',
        origin: window.location.href
    };
    window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(message));

}
