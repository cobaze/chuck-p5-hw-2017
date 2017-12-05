function dogAgeFunction () {
    var displayYear = document.getElementById('dogYearSection');
    var displayAge = document.getElementById('dogAgeSection');

    if(yesRadio.checked == true) {
	    displayAge.style.display = 'none';
        displayYear.style.display = 'block';
    }else if(noRadio.checked == true) {
	    displayYear.style.display = 'none';
        displayAge.style.display = 'block';
    };
};

var yesRadio = document.getElementById('yes');
yesRadio.addEventListener('click', dogAgeFunction);

var noRadio = document.getElementById('no');
noRadio.addEventListener('click', dogAgeFunction);

function yearInput () {
    var ageNumber = document.getElementById('dogYear').value;
    var dogAgeCalculations = 2017 - parseInt(ageNumber);
    if(dogAgeCalculations > 15){
	    var result = dogAgeCalculations + 9;
	    var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + result + ' Dog Years Old';
    } else if (dogAgeCalculations == 15){
	    var dogAgeCalculations = 1;
	    var display = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + dogAgeCalculations + ' Dog Years Old';
    }

    if(dogAgeCalculations > 24){
	    var newResult = dogAgeCalculations + 4;
	    var newDisplay = document.getElementById('ageDisplay').innerHTML = 'Your Dog is: ' + newResult + ' Dog Years Old';
    } else if (dogAgeCalculations < 15){
	    var display = document.getElementById('ageDisplay')
.innerHTML =  'You Dog is Not Up to a Year yet. ';   }
//     var display = document.getElementById('ageDisplay').innerHTML = "In Human Years Your Dog is: " + dogAgeCalculations;

}

var userInput = document.getElementById('enterDogYear');
userInput.addEventListener('click', yearInput);


/*
function ageInput (){
	var ageInput - document.getElementById('dogAge').value;

}
*/
