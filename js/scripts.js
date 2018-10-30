function Outfit(top, bottom) {
  this.top = 0;
  this.bottom = 0;
};

Outfit.prototype.match = function() {
  if (this.top === this.bottom) {
    console.log("This is a match!")
  } else {
    console.log("No way! Try again.")
  }
};

$(document).ready(function() {

  // $("#selector form").submit(function(event) {
  //   event.preventDefault();
  //   var answer1 = parseInt($("input:radio[name=first-input]:checked").val());
  //   var answer2 = parseInt($("input:radio[name=second-input]:checked").val());
  //   var answer3 = parseInt($("input:radio[name=third-input]:checked").val());
  //   var answer4 = parseInt($("input:radio[name=fourth-input]:checked").val());
  //   var answer5 = parseInt($("input:radio[name=fifth-input]:checked").val());

  $("form#outfits").click(function(event) {
    event.preventDefault();
    var top = $("#tops").val();
    var bottom = $("#bottoms").val();
    var newOutfit = new Outfit(top, bottom);
    newOutfit.match();
});
