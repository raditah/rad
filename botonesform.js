document.getElementById("formsdesupply").style.display = "none";
document.getElementById("supplys").addEventListener("click", function() {
  var x = document.getElementById("formsdesupply");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
document.getElementById("formsdefeedback").style.display = "none";
document.getElementById("feedbacks").addEventListener("click", function() {
  var x = document.getElementById("formsdefeedback");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});