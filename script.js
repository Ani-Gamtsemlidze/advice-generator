const diceBtn = document.querySelector(".dice-box");
const dice = document.querySelector(".dice");

let quotes = document.querySelector(".quotes");

let adviceNumber = document.querySelector(".advice-number");

let randomAdvices = [
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "You will face many defeats in life, but never let yourself be defeated. ",
  "The only impossible journey is the one you never begin.",
  "Go confidently in the direction of your dreams! Live the life you've imagined",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Life is really simple, but we insist on making it complicated.",
  "May you live all the days of your life.",
  "Life is ours to be spent, not to be saved.",
  " Your time is limited, so don't waste it living someone else's life.",
  "The way to get started is to quit talking and begin doing.",
];

diceBtn.addEventListener("click", function () {
  let index = Math.trunc(Math.random() * randomAdvices.length - 1);
  quotes.textContent = randomAdvices[index];
  index++;
  adviceNumber.textContent = index;

  dice.classList.add("shake-anime");
  setTimeout(function () {
    dice.classList.remove("shake-anime");
  }, 1000);
});
