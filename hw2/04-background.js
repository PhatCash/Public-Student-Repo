// Add your code here
const interval = document.getElementById("interval");
const button = document.getElementById("change");
button.addEventListener("click", handleInput);
let holdID = null;

function randomColor() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;

  // Opacity at half
  return `rgba(${red}, ${green}, ${blue}, 0.5)`;
}

function changeInterval() {
  holdID = setInterval(() => {
    document.body.style.backgroundColor = randomColor();

    // This expects ms
  }, interval.value * 1000);
}

function colorChange() {
  if (holdID) {
    clearInterval(holdID);
    holdID = null;
    button.textContent = "Start";
    button.classList.replace("btn-danger", "btn-primary");
  } else {
    changeInterval();
    button.textContent = "Stop";
    button.classList.replace("btn-primary", "btn-danger");
  }
}

function handleInput() {
  colorChange();
}
