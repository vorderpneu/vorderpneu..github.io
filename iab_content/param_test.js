var scripts = document.getElementsByTagName('script');
var jsFile = new URL("http://" + scripts[scripts.length-1].attributes.src.value);
/*get value from query parameters*/
console.log(jsFile.searchParams.get("param"));
