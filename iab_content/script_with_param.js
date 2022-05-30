var scripts = document.getElementsByTagName('script');
var jsFile = new URL("http://" + scripts[scripts.length-1].attributes.src.value);
/*get value from query parameters*/
console.log(jsFile.searchParams.get("param"));

console.log(`script with param timer: ${param}`);
document.getElementById('countdown_script_with_param').innerHTML = `<p>${param}</p>`;
