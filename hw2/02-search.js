// Add your code here
document.getElementById("searchButton").addEventListener("click", handleClick);

// Card class
function createCard(characters) {
  const cardCol = document.createElement("div");
  cardCol.className = "col-4 mb-4";
  const card = document.createElement("div");
  card.className = "card p-4";
  // Use variable directly
  card.innerHTML = `
  <div class="card-body">
    <h2 class="card-title">${characters.name}</h2>
    <p class="card-text">Birth Year: ${characters.birth_year}</p>
  </div>
  `;
  cardCol.appendChild(card);

  return cardCol;
}

function toSearch(name) {
  return characters.filter((character) =>
    character.name.toLowerCase().includes(name)
  );
}

function handleClick() {
  const name = document.getElementById("userInput").value.toLowerCase();
  const result = document.getElementById("results");
  result.innerHTML = "";

  const searchResult = toSearch(name);
  if (searchResult.length === 0) {
    result.textContent = "No characters found";
  } else {
    // New card for each item in array
    searchResult.forEach((character) =>
      result.appendChild(createCard(character))
    );
  }
}
