/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function showRed() {
  var r = document.getElementById("products");
  if (r.style.display === "flex") {
    r.style.display = "none";
  } else {
    r.style.display = "flex";
  }
}

function showAll() {
  const x = document.getElementById("products");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

