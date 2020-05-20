const hambutton = document.querySelector('.ham');
const mainnav   = document.querySelector('.navigation')
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

var dateObj = new Date();
var weekday = dateObj.toLocaleString('default', { weekday: 'long' });
var day     = dateObj.getUTCDate();
var month   = dateObj.toLocaleString('default', { month: 'long' });
var year    = dateObj.getUTCFullYear();

var newdate = weekday + ", " + day + " " + month  + " " + year;
document.getElementById("newdate").innerHTML = newdate;
