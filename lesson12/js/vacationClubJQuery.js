$(function() {
    $("form[name='registration']").validate({
      rules: {
      
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        season: "Please enter a season",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        
    
        email: "Please enter a valid email address"
      },
      acc: {
        required: "Please enter an accomodation",
        minlength: "Your accomodation must be at least 5 characters long"
      },
      submitHandler: function(form) {
          form.submit();
          window.location.assign("vacationConfirmation.html");
      }
    });
  });