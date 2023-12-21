     
function search() {

  var input, filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("card")
  titles = document.getElementsByClassName("card-title");

 
  for (i = 0; i < cards.length; i++) {
    a = titles[i];
    if (a.innerHTML.toUpperCase().split(" ").join("").indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }

}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}