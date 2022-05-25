function postMessage(){
    const message = document.getElementById('messageInput').value;
    if(!webkit.messageHandlers.cordova_iab) throw "Cordova IAB postMessage API not found!";
    webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({
        message: message
    }));
}

window.addEventListener("message", (event) => {
    // Do we trust the sender of this message?
    if (event.origin !== "http://localhost")
        return;

    // event.source is window.opener
    // event.data is "hello there!"

    // Assuming you've verified the origin of the received message (which
    // you must do in any case), a convenient idiom for replying to a
    // message is to call postMessage on event.source and provide
    // event.origin as the targetOrigin.
    event.source.postMessage("hi there yourself!  the secret response " +
        "is: rheeeeet!",
        event.origin);
}, false);
