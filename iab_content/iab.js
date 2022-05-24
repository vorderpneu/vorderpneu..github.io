function postMessage(){
    const input = document.getElementById('messageInput');
    if(!webkit.messageHandlers.cordova_iab) throw "Cordova IAB postMessage API not found!";
    webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({
        message: input
    }));
}
