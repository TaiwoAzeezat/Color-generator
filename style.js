const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const hexadecimalNumberSystem = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let generate = document.getElementById("generate");
let revert = document.getElementById("revert");

let firstHexCode = document.getElementById("first-hex-code");
let firstColorBox = document.getElementById("first-color-box");
let secondColorBox = document.getElementById("second-color-box");
let secondHexCode = document.getElementById("second-hex-code");
let thirdColorBox = document.getElementById("third-color-box");
let thirdHexCode = document.getElementById("third-hex-code");
let fourthColorBox = document.getElementById("fourth-color-box");
let fourthHexCode = document.getElementById("fourth-hex-code");
let fifthColorBox = document.getElementById("fifth-color-box");
let fifthHexCode = document.getElementById("fifth-hex-code");
let sixthColorBox = document.getElementById("sixth-color-box");
let sixthHexCode = document.getElementById("sixth-hex-code");
let initialHexCodes = {
  first: firstHexCode.textContent,
  second: secondHexCode.textContent,
  third: thirdHexCode.textContent,
  fourth: fourthHexCode.textContent,
  fifth: fifthHexCode.textContent,
  sixth: sixthHexCode.textContent,
};

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length);
  return randomNumber;
}

generate.addEventListener("click", function () {
  let hexcodeForFirstBox = "#";
  for (let a = 0; a < 6; a++) {
    hexcodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  firstColorBox.style.backgroundColor = hexcodeForFirstBox;
  firstHexCode.textContent = hexcodeForFirstBox;

  let hexcodeForSecondBox = "#";
  for (let b = 0; b < 6; b++) {
    hexcodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  secondColorBox.style.backgroundColor = hexcodeForSecondBox;
  secondHexCode.textContent = hexcodeForSecondBox;

  let hexcodeForThirdBox = "#";
  for (let c = 0; c < 6; c++) {
    hexcodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  thirdColorBox.style.backgroundColor = hexcodeForThirdBox;
  thirdHexCode.textContent = hexcodeForThirdBox;

  let hexcodeForFourthBox = "#";
  for (let d = 0; d < 6; d++) {
    hexcodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  fourthColorBox.style.backgroundColor = hexcodeForFourthBox;
  fourthHexCode.textContent = hexcodeForFourthBox;

  let hexcodeForFifthBox = "#";
  for (let e = 0; e < 6; e++) {
    hexcodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  fifthColorBox.style.backgroundColor = hexcodeForFifthBox;
  fifthHexCode.textContent = hexcodeForFifthBox;

  let hexcodeForSixthBox = "#";
  for (let f = 0; f < 6; f++) {
    hexcodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()];
  }
  sixthColorBox.style.backgroundColor = hexcodeForSixthBox;
  sixthHexCode.textContent = hexcodeForSixthBox;
});

revert.addEventListener("click", function () {
  firstHexCode.textContent = initialHexCodes.first;
  firstColorBox.style.backgroundColor = initialHexCodes.first;

  secondHexCode.textContent = initialHexCodes.second;
  secondColorBox.style.backgroundColor = initialHexCodes.second;

  thirdHexCode.textContent = initialHexCodes.third;
  thirdColorBox.style.backgroundColor = initialHexCodes.third;

  fourthHexCode.textContent = initialHexCodes.fourth;
  fourthColorBox.style.backgroundColor = initialHexCodes.fourth;

  fifthHexCode.textContent = initialHexCodes.fifth;
  fifthColorBox.style.backgroundColor = initialHexCodes.fifth;

  sixthHexCode.textContent = initialHexCodes.sixth;
  sixthColorBox.style.backgroundColor = initialHexCodes.sixth;
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.src = "moon icon.svg";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "moon icon.svg";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.src = "icon.svg";
    localStorage.setItem("theme", "light");
  }
});

document.querySelectorAll("#copy-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    // Find the hex code in the same color box
    let hexCode = this.parentElement.querySelector("h1").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(hexCode).then(() => {
      // Change tooltip text to 'Copied!' when clicked
      this.setAttribute("data-tooltip", "Copied!");

      // Make the tooltip disappear after 1 second on mobile only
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          this.setAttribute("data-tooltip", ""); // Reset tooltip text after 1 second
        }, 1000); // Tooltip disappears after 1 second
      }
    });
  });
});
