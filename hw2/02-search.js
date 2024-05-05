// Add your code here
document.getElementById("searchButton").addEventListener("click", handleClick);

// Card class
function createCard(character, search) {
  const cardCol = document.createElement("div");
  cardCol.className = "col-4 bg-light mb-4";
  const card = document.createElement("div");
  card.className = "card p-4";

  // Create each element individually
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Handle highlighting
  const highlight = character.name.replace(
    new RegExp(search, "gi"),
    (match) => `<mark class="bg-warning">${match}</mark>`
  );

  const cardTitle = document.createElement("h2");
  cardTitle.className = "card-title";
  cardTitle.innerHTML = `${highlight}`;
  const cardPar = document.createElement("p");
  cardPar.className = "card-text";
  cardPar.innerText = `Birth Year: ${character.birth_year}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPar);
  card.appendChild(cardBody);
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
    const cardCol = document.createElement("div");
    cardCol.className = "col-4 bg-light mb-4 p-2";
    const errorTitle = document.createElement("h2");
    errorTitle.textContent = "No characters found";
    errorTitle.style.color = "red";
    cardCol.appendChild(errorTitle);
    result.appendChild(cardCol);
  } else {
    // New card for each item in array
    result.style.color = "";
    searchResult.forEach((character) =>
      result.appendChild(createCard(character, name))
    );
  }
}
