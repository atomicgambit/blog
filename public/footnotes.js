function myFunction() {
  var x = document.getElementById("footnotes");
  var button = document.querySelector(".footnotes");
  if (x.style.display === "none") {
    x.style.display = "block";
    button.classList.add("active");
  } else {
    x.style.display = "none";
    button.classList.remove("active");
  }
}
