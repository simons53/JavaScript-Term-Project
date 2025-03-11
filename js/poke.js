function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "http://remote.tld/readme.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) {  
        if (file.status === 200) {  
          text = file.responseText;
          document.getElementById("div1").innerHTML = text;
        }
      }
    }
}

window.onLoad = load();
// Function to toggle visibility of descriptions when a nav button is clicked
function toggleDescription(event, id) {
  event.preventDefault(); // Prevent navigation to the new HTML page

  // Hide all descriptions
  var descriptions = document.querySelectorAll('.description');
  descriptions.forEach(function(description) {
      description.style.display = 'none';
  });
  
  // Show the selected description
  var description = document.getElementById(id);
  if (description) {
      description.style.display = 'block';  // Show the description
  }
}
