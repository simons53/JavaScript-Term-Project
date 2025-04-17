document.getElementById("remus").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();   
    xhr.onload = function () {
      if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        array = responseObject.marauder1;
        processItem(array, 'media/remus.jpg');
      }
    };
    xhr.open('GET', 'remus.json', true);        
    xhr.send(null);                             
  });

  document.getElementById("sirius").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();  
    xhr.onload = function () {
      if (xhr.status === 200) {      
        responseObject = JSON.parse(xhr.responseText);
        array = responseObject.marauder2;
        processItem(array, 'media/sirius.jpg');
      }
    };
    xhr.open('GET', 'sirius.json', true);     
    xhr.send(null);                          
  });

  document.getElementById("james").addEventListener("click", function () {
    var xhr = new XMLHttpRequest();  
    xhr.onload = function () {
      if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        array = responseObject.marauder3;
        processItem(array, 'media/james.jpg');
      }
    };
    xhr.open('GET', 'james.json', true);    
    xhr.send(null);                               
  });

  function processItem(array, imageUrl) {
    var newContent = '';
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Marauder';
    img.style.width = '200px';
    img.style.display = 'block';
    newContent += img.outerHTML;
    
    for (var i = 0; i < array.length; i++) { 
      newContent += '<p>Name: ' + array[i].Name + '<br>';
      newContent += 'Nickname: ' + array[i].Nickname + '<br>';
      newContent += 'Animal: ' + array[i].Animal + '</p>';
      newContent += '<hr>';
    }

    document.getElementById('content').innerHTML = newContent;
  }