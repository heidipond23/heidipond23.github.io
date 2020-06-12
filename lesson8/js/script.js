const hambutton = document.querySelector('.ham');
const mainnav   = document.querySelector('.navigation')
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}



var dateObj = new Date();
var weekday = dateObj.toLocaleString('default', { weekday: 'long' });
var day     = dateObj.getUTCDate();
var month   = dateObj.toLocaleString('default', { month: 'long' });
var year    = dateObj.getUTCFullYear();

var newdate = weekday + ", " + day + " " + month  + " " + year;
document.getElementById("newdate").innerHTML = newdate;


const banner = document.getElementById("pancakes");
if (weekday == "Friday") {
    banner.style.display = "block";
}
else{
    banner.style.display = "none";
}