var newOutfit = {};

function Outfit(top, bottom, weather, occasion) {
  this.top = 0;
  this.bottom = 0;
  this.weather = weather;
  this.occasion = occasion;
};

Outfit.prototype.options = function() {
  if (this.weather === "Sunny" && this.occasion === "Casual") {
    $("#col1row1").prepend('<img src = "img/SuCT3WCB3.jpg/>')
    $("#col1row2").prepend('<img src = "img/allCB.jpg"/>')
    $("#col2row1").prepend('<img src = "img/SuCT2.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allCB2.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SnCT3RCT1.jpg"/>')
    $("#col3row2").prepend('<img src = "img/SuCB2.jpg"/>')
  } else if (this.weather === "Sunny" && this.occasion === "Formal") {
    $("#col1row1").prepend('<img src = "img/allFT.jpg"/>')
    $("#col1row2").prepend('<img src = "img/allFB.jpg"/>')
    $("#col2row1").prepend('<img src = "img/WFT2SuFT1.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allFB2.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SuFT3RFT3.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allFB3.jpg"/>')
  } else if (this.weather === "Rainy" && this.occasion === "Casual") {
    $("#col1row1").prepend('<img src = "img/RCT2.jpg"/>')
    $("#col1row2").prepend('<img src = "img/RCB3SuCB3.jpg"/>')
    $("#col2row1").prepend('<img src = "img/RCT3.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allCB.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SnCT3RCT1.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allCB2.jpg"/>')
  } else if (this.weather === "Rainy" && this.occasion === "Formal") {
    $("#col1row1").prepend('<img src = "img/RFT2SnF3.jpg"/>')
    $("#col1row2").prepend('<img src = "img/allFB.jpg"/>')
    $("#col2row1").prepend('<img src = "img/allFT.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allFB2.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SuFT3RFT3.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allFB3.jpg"/>')
  } else if (this.weather === "Windy" && this.occasion === "Casual") {
    $("#col1row1").prepend('<img src = "img/WCT1SnCT1WCT1.jpg"/>')
    $("#col1row2").prepend('<img src = "img/RCB3SuCB3.jpg"/>')
    $("#col2row1").prepend('<img src = "img/WCT2SnCT2WCT2.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allCB.jpg"/>')
    $("#col3row1").prepend('<img src = "img/WCT3SuCT1.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allCB2.jpg"/>')
  } else if (this.weather === "Windy" && this.occasion === "Formal") {
    $("#col1row1").prepend('<img src = "img/WFT2SuFT1.jpg"/>')
    $("#col1row2").prepend('<img src = "img/allFB.jpg"/>')
    $("#col2row1").prepend('<img src = "img/SnT1WT1.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allFB2.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SnFT2WFT2.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allFB3.jpg"/>')
  } else if (this.weather === "Snowy" && this.occasion === "Casual") {
    $("#col1row1").prepend('<img src = "img/WCT1SnCT1WCT1.jpg"/>')
    $("#col1row2").prepend('<img src = "img/SnCB3.jpg"/>')
    $("#col2row1").prepend('<img src = "img/WCT2SnCT2WCT2.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allCB.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SnFT2WFT2.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allCB2.jpg"/>')
  } else {
    $("#col1row1").prepend('<img src = "img/SnFT2WFT2.jpg"/>')
    $("#col1row2").prepend('<img src = "img/allFB.jpg"/>')
    $("#col2row1").prepend('<img src = "img/SnT1WT1.jpg"/>')
    $("#col2row2").prepend('<img src = "img/allFB2.jpg"/>')
    $("#col3row1").prepend('<img src = "img/SuFT3RFT3.jpg"/>')
    $("#col3row2").prepend('<img src = "img/allFB3.jpg"/>')
  }
};

Outfit.prototype.match = function() {
  if (this.top === this.bottom) {
    alert("This is a match!")
  } else {
    alert("No way! Try again.")
  }
};

// User Interface Logic

$(document).ready(function() {

  $("#survey").submit(function(event) {
    event.preventDefault();
    var weather = $("input:radio[name=weather]:checked").val();
    var occasion = $("input:radio[name=occasion]:checked").val();
    newOutfit = new Outfit (0, 0, weather, occasion);
    console.log(newOutfit);
    newOutfit.options();
    $("#clothes").show();
    $("#input-section").hide();

});


  $("#browse-btn").click(function(event) {
    event.preventDefault();
    var top = $("input:radio[name=tops]:checked").val();
    var bottom = $("input:radio[name=bottoms]:checked").val();
    newOutfit.top = top;
    newOutfit.bottom = bottom;
    newOutfit.match();
    console.log(newOutfit);
  });
});
