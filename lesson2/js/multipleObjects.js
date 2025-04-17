function Pokemon(name, type, price, discount) {
    this.name=name;
    this.type=type;
    this.price=price;
    this.discount=discount;
    this.cost=function(){
        var totalCost = parseInt(this.price) - parseInt(this.discount);
        return "$" + totalCost;
    }
    this.message = function(){
        var discountPercent = "You received a " + parseInt(this.discount)/parseInt(this.price) * 100 + "% discount!";
        return discountPercent;
    }
    
    };
    
    var n=prompt("Enter the Pokemon name: ");
    var t=prompt("Enter the Pokemon type (normal, ghost, fairy, etc.): ");
    var p=prompt("Enter the plush price: ");
    var d=prompt("Enter the discount: ");
    var firstPokemon=new Pokemon(n,t,p,d);
    
    var secondPokemon = new Pokemon("Snorlax", "Normal", 20, 5);
    
    var today = new Date();
    var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    document.getElementById("pokemonName1").innerHTML = firstPokemon.name;
    document.getElementById("pokemonType1").innerHTML = firstPokemon.type;
    document.getElementById("pokemonPrice1").innerHTML = firstPokemon.price;
    document.getElementById("pokemonDiscount1").innerHTML = firstPokemon.discount;
    document.getElementById("pokemonTotal1").innerHTML = firstPokemon.cost();
    document.getElementById("discount1").innerHTML = firstPokemon.message();
    
    document.getElementById("pokemonName2").innerHTML = secondPokemon.name;
    document.getElementById("pokemonType2").innerHTML = secondPokemon.type;
    document.getElementById("pokemonPrice2").innerHTML = secondPokemon.price;
    document.getElementById("pokemonDiscount2").innerHTML = secondPokemon.discount;
    document.getElementById("pokemonTotal2").innerHTML = secondPokemon.cost();
    document.getElementById("discount2").innerHTML = secondPokemon.message();
    
    document.getElementById("date").innerHTML = weekFromToday;