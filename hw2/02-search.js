// Add your code here
document.getElementById("searchButton").addEventListener("click", handleClick);

// Card class
function createCard(character, search) {
  const cardCol = document.createElement("div");
  cardCol.className = "col-4 mb-4";
  const card = document.createElement("div");
  card.className = "card p-4";
  // Handle highlighting
  const highlight = character.name.replace(
    new RegExp(search, "gi"),
    (match) => `<mark>${match}</mark>`
  );
  // Use variable directly
  card.innerHTML = `
  <div class="card-body">
    <h2 class="card-title">${highlight}</h2>
    <p class="card-text">Birth Year: ${character.birth_year}</p>
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

  if (searchResult.length === 0 || name === "") {
    // Return error
    result.textContent = "No characters found";
    result.style.color = "red";
  } else {
    // New card for each item in array
    result.style.color = "";
    searchResult.forEach((character) =>
      result.appendChild(createCard(character, name))
    );
  }
}
