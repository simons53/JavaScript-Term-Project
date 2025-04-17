document.getElementById("register").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the form from submitting until the data is saved
    

    sessionStorage.firstname = document.getElementById("given-name").value;
    sessionStorage.lastname = document.getElementById("family-name").value;
    sessionStorage.email = document.getElementById("email").value;
    sessionStorage.phone = document.getElementById("phone").value;
    
    window.location.assign("localConfirm.html");
});
