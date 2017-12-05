function yearInput () {
    var dogAgeCalculations = document.getElementById('dogYear').value;
    if(dogAgeCalculations == 1){
	    var dogAgeCalculations = 15;
	    var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 2){
	    var dogAgeCalculations = 24;
	    var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 3) {
	    var dogAgeCalculations = 28;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 4) {
	    var dogAgeCalculations = 32;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 5) {
	    var dogAgeCalculations = 36;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 6) {
	    var dogAgeCalculations = 40;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 7) {
	    var dogAgeCalculations = 44;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 8) {
	    var dogAgeCalculations = 48;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 9) {
	    var dogAgeCalculations = 52;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 10) {
	    var dogAgeCalculations = 56;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 11) {
	    var dogAgeCalculations = 60;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 12) {
	    var dogAgeCalculations = 64;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 13) {
	    var dogAgeCalculations = 68;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 14) {
	    var dogAgeCalculations = 72;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 15) {
	    var dogAgeCalculations = 76;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else if (dogAgeCalculations == 16) {
	    var dogAgeCalculations = 80;
		var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Human Years Old';
    } else {
	    var display = document.getElementById('ageDisplay').innerHTML = 'The number you entered is invalid';
    } 
}

var userInput = document.getElementById('enterDogYear');
userInput.addEventListener('click', yearInput);
