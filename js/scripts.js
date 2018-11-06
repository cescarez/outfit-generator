function Outfit(top, bottom, weather, occasion) {
  this.top = 0;
  this.bottom = 0;
  this.weather = weather;
  this.occasion = occasion;
};

Outfit.prototype.options = function() {
  if (this.weather === "Sunny" && this.occasion === "Casual") {
    $("#col1row2").prepend('<img src = "img/yellow-plaid-skirt.jpg"/>')
    console.log("test test test")
  } else if (this.weather === "Sunny" && this.occasion === "Formal") {
    //show them these combo of clothes
  } else if (this.weather === "Rainy" && this.occasion === "Casual") {
    //show them these combo of clothes
  } else if (this.weather === "Rainy" && this.occasion === "Formal") {
    //show them these combo of clothes
  } else if (this.weather === "Windy" && this.occasion === "Casual") {
    //show them these combo of clothes
  } else if (this.weather === "Windy" && this.occasion === "Formal") {
    //show them these combo of clothes
  } else if (this.weather === "Snowy" && this.occasion === "Casual") {
    //show them these combo of clothes
  } else {
    //show them these combo of clothes
  }
};

Outfit.prototype.match = function() {
  if (this.top === this.bottom) {
    console.log("This is a match!")
  } else {
    console.log("No way! Try again.")
  }
};

// User Interface Logic

$(document).ready(function() {

  $("#survey").submit(function(event) {
    event.preventDefault();
    var weather = $("input:radio[name=weather]:checked").val();
    var occasion = $("input:radio[name=occasion]:checked").val();
    var newOutfit = new Outfit (0, 0, weather, occasion);
    console.log(newOutfit);
    newOutfit.options();
});


  $("#browse-btn").click(function(event) {
    event.preventDefault();
    var top = $("#tops").val();
    var bottom = $("#bottoms").val();
    newOutfit.top = top;
    newOutfit.bottom = bottom;
    newOutfit.match();
  });
});
