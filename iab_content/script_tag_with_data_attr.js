var scripts = document.getElementsByTagName('script');
var script = scripts[scripts.length-1]

var param = script.getAttribute('data-my_var');
console.log(`script with param timer: ${param}`);
document.getElementById('countdown_script_with_param').innerHTML = `<p>${param}</p>`;
