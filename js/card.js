$(document).ready(function () {
    const pokemonData = [
      { name: "Gengar", type: "Ghost", generation: 1, imageId: "gengar" },
      { name: "Charizard", type: "Fire", generation: 1, imageId: "charizard" },
      { name: "Mew", type: "Psychic", generation: 1, imageId: "mew" },
      { name: "Slowpoke", type: "Water", generation: 1, imageId: "slowpoke" },
      { name: "Psyduck", type: "Water", generation: 1, imageId: "psyduck" },
      { name: "Skitty", type: "Normal", generation: 3, imageId: "skitty" }
    ];
  
    let currentIndex = 0;
  
    function showOnlyCurrentImage() {
      $('.pokeImage').hide(); 
      const currentImgId = pokemonData[currentIndex].imageId;
      $('#' + currentImgId).show(); 
      $('#resultMessage').text('');
      $('#name').val('');
      $('#type').val('');
      $('#gen').val('');
    } 
  
    $('#submitGuess').click(function () {
      const nameInput = $('#name').val().trim().toLowerCase();
      const typeInput = $('#type').val().trim().toLowerCase();
      const genInput = parseInt($('#gen').val());
  
      const current = pokemonData[currentIndex];
  
      if (
        current.name.toLowerCase() === nameInput &&
        current.type.toLowerCase() === typeInput &&
        current.generation === genInput
      ) {
        $('#resultMessage').text("Correct!").css('color', 'darkgreen');
        currentIndex++;
  
        if (currentIndex < pokemonData.length) {
          setTimeout(showOnlyCurrentImage, 1000);
        } else {
          $('#resultMessage').text("You completed the challenge!").css('color', 'blue');
          $('#submitGuess').prop('disabled', true);
        }
      } else {
        $('#resultMessage').text("Incorrect. Try again!").css('color', 'red');
      }
    });
  
    showOnlyCurrentImage(); 
  });
  