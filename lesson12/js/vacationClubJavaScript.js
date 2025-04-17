document.getElementById("sub").addEventListener("click",function(e){
	e.preventDefault();
    document.getElementById("lastnameError").innerHTML="";
	document.getElementById("firstnameError").innerHTML="";
	document.getElementById("emailError").innerHTML="";
	document.getElementById("accomodationError").innerHTML="";
	var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
	var email =document.getElementById("email").value;
	var acc=document.getElementById("accomodation").value;
	var errorFlag='n';

    var star5 = document.getElementById("star5").checked;
    var rental = document.getElementById("rentalhouse").checked;
    var pool = document.getElementById("pool").checked;
    var fitness = document.getElementById("fitness").checked;
    var golf = document.getElementById("golf").checked;
    var beach = document.getElementById("beach").checked;
    var room = document.getElementById("roomammenities").checked;
    var dining = document.getElementById("dining").checked;

	if(fName==""){
		document.getElementById("firstnameError").innerHTML = "You must fill in the first name";
		errorFlag='y';
	} 
	if (lName=="") {
		document.getElementById("lastnameError").innerHTML = "You must fill in the last name";
		errorFlag='y';		
	} 
    if (acc=="") {
		document.getElementById("accomodationError").innerHTML = "You must select an accomodation";
		errorFlag='y';		
	} 

    if (!star5 && !rental && !pool && !fitness && !golf && !beach && !room && !dining) {
        document.getElementById("accomodationError").innerHTML = "Select at least one accomodation feature you prefer";
        errorFlag="y";
        }

    if (email=="") {
		document.getElementById("emailError").innerHTML = "You must fill in the email";
		errorFlag='y';		
	} 
	else {
		var atposition=email.indexOf("@");  
		var dotposition=email.lastIndexOf(".");  
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
	 	  document.getElementById("emailError").innerHTML="The email address you entered is invalid.";
	      errorFlag='y';		  
		}
  	} 
	if(errorFlag=='n'){
		localStorage.firstname = fName;
		localStorage.lastname = lName;
		localStorage.email = email;
		localStorage.acc=acc;
		window.location.assign("vacationConfirmation.html");
	}	
});