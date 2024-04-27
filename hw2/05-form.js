// Add your code here
document.getElementById("form").addEventListener("submit", handleInput);
const modal = document.getElementById("form-content");
const form = document.getElementById("form");

// Returns key : 'name' attribute
function getData(form) {
  return new FormData(form);
}

// Loop through and append to modal, create a div element
function addData(data) {
  modal.innerHTML = "";

  for (const [key, value] of data.entries()) {
    const newData = document.createElement("div");
    newData.textContent = `For ${key}, you have entered: ${value}`;
    modal.appendChild(newData);
  }
}

// The Bootstrap 5 supports js
function handleInput(event) {
  const toShow = new bootstrap.Modal(document.getElementById("show"));

  // Default is reloading the page, but we need to show modal
  event.preventDefault();
  const formData = getData(form);
  addData(formData);
  toShow.show();
}
