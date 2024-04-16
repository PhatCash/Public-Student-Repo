const elem = document.querySelector("#num");
elem.addEventListener("input", handleInput);

function checkPalindrome(number) {
  const num = String(number);
  const backNum = num.split("").reverse().join("");
  return num === backNum;
}

function checkNum(number) {
  // FIXME: Not updating green text
  const answer = document.querySelector(".result");

  // TODO: Not working with non numbers
  if (isNaN(number) || number < 0) {
    answer.textContent = "Please enter a positive number!";
    answer.classList.add("text-danger");
  } else {
    const valid = checkPalindrome(number);

    // Use ternary operator if ? then : else
    answer.textContent = valid
      ? "Yes. This is a palindrome!"
      : "No. Try again.";
    answer.classList.add(valid ? "text-success" : "text-danger");
  }
}

function handleInput() {
  checkNum(elem.value);
}
