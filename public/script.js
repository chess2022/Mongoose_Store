/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// var options = {
//   valueNames: ["tags"],
// };

// var userList = new List("list", options);



// var listObj = new List("list", options);

// $("#redButton").on("keyup", function () {
//   var searchString = $(this).val("red");
//   listObj.search(searchString);
// });