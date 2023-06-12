var emojiElement = document.getElementById("emoji");
var grinningButton = document.getElementById("grinningButton");
var winkingButton = document.getElementById("winkingButton");
var partyingButton = document.getElementById("partyingButton");
var cryingButton = document.getElementById("cryingButton");

grinningButton.addEventListener("click", function () {
  emojiElement.textContent = "😀";
});

winkingButton.addEventListener("click", function () {
  emojiElement.textContent = "😉";
});

partyingButton.addEventListener("click", function () {
  emojiElement.textContent = "🥳";
});

cryingButton.addEventListener("click", function () {
  emojiElement.textContent = "😢";
});
