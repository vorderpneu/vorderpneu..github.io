var scripts = document.getElementsByTagName('script');
var script = scripts[scripts.length-1]

var param = script.getAtrribute('data-my_var');
console.log(`script with param timer: ${param}`);
document.getElementById('countdown_script_with_param').innerHTML = `<p>${param}</p>`;
