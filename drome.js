const input = document.querySelector("#input");
const form = document.querySelector("#form");
const month = [31];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var date = input.value.split("-");
  var yyyy = date[0];
  var mm = date[1];
  var dd = date[2];

  formate1 = yyyy + mm + dd;
  formate2 = mm + dd + yyyy;
  formate3 = dd + mm + yyyy;

  // function of checking is it palindrome or not
  let palindrome = function (word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2));
    let end = word.substring(len - Math.floor(len / 2));
    let flip = end.split("").reverse().join("");
    if (flip === start) {
      return true;
      // console.log("its a palindrome")
    }
  };

  var x = document.getElementById("output");
  var y = "Whoa!!! Your birthdate is a Palindrome";

  if (palindrome(formate1) === true) {
    // console.log("its palindrome")
    x.innerHTML = y;
  }
  if (palindrome(formate2) === true) {
    // console.log("its palindrome")
    x.innerHTML = y;
  }
  if (palindrome(formate3) === true) {
    // console.log("it's palindrome")
    x.innerHTML = y;
  } else {
    x.innerHTML = "Awww! Your birthdate is not palindrome.";
  }
});

const scroll = document.querySelector("#scroll");
scroll.addEventListener("click", function () {
  let scrolls = document.getElementById("#main");
  main.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
});
