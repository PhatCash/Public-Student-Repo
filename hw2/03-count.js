// Add your code here
const input = document.getElementById("userInput");
const toDisplay = document.getElementById("text");
// innerHtml parses text, textContent doesn't
const originalText = toDisplay.textContent;
input.addEventListener("keydown", handleKeyDown);

function highlightWord(search) {
  if (!search) {
    toDisplay.innerHTML = originalText;
  } else {
    // Handle highlighting
    const highlight = originalText.replace(
      new RegExp(search, "gi"),
      (match) => `<mark class="bg-warning">${match}</mark>`
    );
    toDisplay.innerHTML = highlight;
  }
}

function handleKeyDown() {
  // Delay that fixes needing a space for a character
  setTimeout(() => {
    highlightWord(input.value);
  }, 0);
}
