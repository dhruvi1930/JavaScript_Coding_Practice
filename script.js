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
