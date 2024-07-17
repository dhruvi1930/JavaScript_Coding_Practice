const inputString = document.getElementById("input-string");
const container = document.querySelector(".container-1");

// Reverse String
const reverseBtn = document.getElementById("btn-reverse");
reverseBtn.addEventListener("click", () => {
  const variable = inputString.value;
  const newVariable = variable.split("").reverse().join("");
  const answerTag = document.createElement("p");
  answerTag.textContent = "Reverse: " + newVariable;
  container.append(answerTag);
  inputString.value = "";
});

// Palindrome String
const palindromeBtn = document.getElementById("btn-palindrome");
palindromeBtn.addEventListener("click", () => {
  const variable = inputString.value;
  const reverseVariable = variable.split("").reverse().join("");
  const answerTag = document.createElement("p");
  answerTag.textContent =
    variable === reverseVariable
      ? "Palindrome: String is a palindrome"
      : "Palindrome: String is not a palindrome";
  container.append(answerTag);
  inputString.value = "";
});
