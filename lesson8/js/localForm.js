document.getElementById("register").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the form from submitting until the data is saved
    

    localStorage.firstname = document.getElementById("given-name").value;
    localStorage.lastname = document.getElementById("family-name").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.phone = document.getElementById("phone").value;

    window.location.assign("localConfirm.html");
});
