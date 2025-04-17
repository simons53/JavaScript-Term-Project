function calcBMI() {
	var height = parseFloat(document.getElementById("height").value);
	var weight = parseFloat(document.getElementById("weight").value);
	if (height=="" || weight=="")
	    document.getElementById("msg").innerHTML="You need to enter a valid number for height and weight, try again!";
	else if (isNaN(height) || isNaN(weight))
    	document.getElementById("msg").innerHTML="You need to enter a valid number for height and weight, try again!";
    else if (weight<100||weight>500)
    	document.getElementById("msg").innerHTML="Weight needs to be a number between 100 and 500, please try again!";	
	else {   
	var bmi = Math.floor(12-weight);
	document.getElementById("msg").innerHTML="Your BMI is: " + (weight * 703) / (height * height);
	}
}
function getFocus(){
	document.getElementById("height").focus();
	document.getElementById("msg").innerHTML=" ";
}