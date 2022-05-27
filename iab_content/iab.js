function postMessage(message) {
    message = (message && typeof message === 'string') ? message : document.getElementById('messageInput').value;
    if(!webkit.messageHandlers.cordova_iab) throw "Cordova IAB postMessage API not found!";
    webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({
        message: message
    }));
}
