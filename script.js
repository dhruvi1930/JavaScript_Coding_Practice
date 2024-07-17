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

// Repeat Max character
const repeatBtn = document.getElementById("btn-repeat");
repeatBtn.addEventListener("click", () => {
  const variable = inputString.value;
  const charCount = new Map();
  for (const char of variable) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let maxChar = "";
  let maxCount = 0;
  for (const [char, count] of charCount) {
    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  }
  const answerTag = document.createElement("p");
  answerTag.textContent = `Repeated char is ${maxChar} and repeated ${maxCount} times`;
  container.append(answerTag);
  inputString.value = "";
});

//Unique string charcters
const uniqueBtn = document.getElementById("btn-unique-string");
uniqueBtn.addEventListener("click", () => {
  const varibale = inputString.value;
  const charCount = new Map();
  for (const char of varibale) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let isUnique = true;
  for (const [char, count] of charCount) {
    if (count > 1) {
      isUnique = false;
    }
  }

  const answerTag = document.createElement("p");
  answerTag.textContent = isUnique
    ? `${varibale} is unique`
    : `${varibale} is not unique`;
  container.append(answerTag);
  inputString.value = "";
});

// Reverse an integer
const reverseBtnInt = document.getElementById("btn-reverse-int");
reverseBtnInt.addEventListener("click", () => {
  const variable = inputString.value;
  const reversedNumber = parseInt(variable.split("").reverse().join(""));
  const answerTag = document.createElement("p");
  answerTag.textContent =
    parseInt(variable) < 0 ? "-" + reversedNumber : reversedNumber;
  container.append(answerTag);
  inputString.value = "";
});

/**write a program to print the screen numbers 1 to n .
 * For multiple of 3 print fizz,for multiple of 5 print buzz
 * and for both print fizzbuzz
 * */
const inputNumber = document.getElementById("input-number");
const container2 = document.querySelector(".container-2");
const generateBtn = document.getElementById("btn-fizzbuzz");
generateBtn.addEventListener("click", () => {
  const number = parseInt(inputNumber.value);
  for (let index = 1; index <= number; index++) {
    const answerTag = document.createElement("p");
    if (index % 3 === 0 && index % 5 === 0) {
      answerTag.textContent = "fizzbuzz";
    } else if (index % 5 === 0) {
      answerTag.textContent = "buzz";
    } else if (index % 3 === 0) {
      answerTag.textContent = "fizz";
    } else {
      answerTag.textContent = index;
    }
    container2.append(answerTag);
  }
  inputNumber.value = "";
});

/** write a function 'chunk(arr,n)'
 * that returns chunked array of size n at the least.
 * n is less than equal to length of array
 * example: [1,2,4,6,2,0,9], n= 2
 * answer: [[1,2],[4,6],[2,0],[9]]
 * */
const inputValue = document.getElementById("input-n");
const container3 = document.querySelector(".container-3");
const chunkedArray = [1, 7, 34, 67, 3, 7, 3, 8, 8, 3, 2];
document.getElementById("chunked-array").innerHTML = chunkedArray.join(", ");

const generateChunked = document.getElementById("btn-chunked");
generateChunked.addEventListener("click", () => {
  const chunkSize = parseInt(inputValue.value);
  if (chunkSize <= 0 || chunkSize > chunkedArray.length) {
    alert("Enter a valid chunk size (1 to " + chunkedArray.length + ")");
    return;
  }
  const chunks = chunkedFun(chunkedArray, chunkSize);
  const answerTag = document.createElement("p");
  answerTag.textContent = JSON.stringify(chunks);
  container3.append(answerTag);
  inputValue.value = "";
});

function chunkedFun(array, size) {
  let result = [];
  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size));
  }
  return result;
}
