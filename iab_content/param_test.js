var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
            alert('Hello World! -' + _args[0]);
        },
        helloWorld : function() {
            alert('Hello World! -' + _args[0]);
        }
    };
}());
