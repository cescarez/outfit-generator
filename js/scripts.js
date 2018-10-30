function Outfit(top, bottom, weather, occasion) {
  this.top = 0;
  this.bottom = 0;
  this.weather = weather;
  this.occasion = occasion;
};

Outfit.prototype.options = function() {
  if (this.weather === "Sunny" && this.occasion === "Casual") {
    //show them these combo of clothes
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

$(document).ready(function() {

  $("#survey").submit(function(event) {
    event.preventDefault();
    var weather = $("input:radio[name=weather]:checked").val();
    var occasion = $("input:radio[name=occasion]:checked").val();
});


  $("form#outfits").click(function(event) {
    event.preventDefault();
    var top = $("#tops").val();
    var bottom = $("#bottoms").val();
    var newOutfit = new Outfit(top, bottom);
    newOutfit.match();
  });
});
