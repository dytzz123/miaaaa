const message = ["benerann beibb?", "Seriusann nii beibb?", "Jangan laaaa 😢", "ISHH BEIBBB", " ISHH PENCETTT IJOO AJAA"];
let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = message[messageIndex];
  messageIndex = (messageIndex + 1) % message.length;

  noButton.classList.remove("shake");
  void noButton.offsetWidth;
  noButton.classList.add("shake");

  yesButton.classList.remove("bounce");
  void yesButton.offsetWidth;
  yesButton.classList.add("bounce");
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}