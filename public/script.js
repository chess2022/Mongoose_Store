/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const flower = require("../models/product");

function showReds() {
  var r = document.getElementById("mainContent");
  if (r.style.display === "flex") {
    r.style.display = "none";
  } else {
    r.style.display = "flex";
  }
}

function showOranges() {
  let orange = flower.tags
  orange = "orange"
  const o = document.getElementById("productBoxes");
  if (o.style.display === "flex") {
    o.style.display = "none";
  } else {
    o.style.display = "flex";
  }
}

