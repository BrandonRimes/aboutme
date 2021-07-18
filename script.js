const card = document.getElementById("card");
const cardStats = document.getElementById("stats");
const bio = document.getElementById("bio");

let cardTapped = false

card.addEventListener("click", function() {
  switch (cardTapped) {
    case false:
      cardTapped = true;
      card.style.transitionDuration = "0.25s";
      card.style.transform = "rotate(90deg)";
      document.body.style.backgroundColor = "slategray";
      bio.style.color = "antiquewhite";
      cardStatsMath();
      break;
    case true:
      cardTapped = false;
      card.style.transform = "rotate(0deg)";
      document.body.style.backgroundColor = "white";
      bio.style.color = "black";
      cardStatsMath();
      break;
  }
});

function cardStatsMath() {
  let stats = cardStats.innerHTML.split("/");
  stats[0]++;
  stats[1]++;
  cardStats.innerHTML = `${stats[0]}/${stats[1]}`;
}