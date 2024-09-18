#!/usr/bin/env node
const process = require("node:process");

let lengthValue = 8; // default value
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const arguments = process.argv.slice(2); // Corrected spelling

if (
  arguments.includes("help") ||
  arguments.includes("-h") ||
  arguments.includes("--help")
) {
  console.log(
    `Usage:
            --help, -h: Show help screen
            --length, -l: Length of the password (default 8)
    `
  );
} else if (arguments.includes("--length") || arguments.includes("-l")) {
  const indexOfLength =
    arguments.indexOf("--length") !== -1
      ? arguments.indexOf("--length")
      : arguments.indexOf("-l");

  const lengthArg = arguments[indexOfLength + 1];
  const parsedLength = parseInt(lengthArg, 10);

  if (!isNaN(parsedLength) && parsedLength > 0) {
    lengthValue = parsedLength;
  } else {
    console.log("Invalid length value. Using default length of 8.");
    process.exit(1);
  }

  console.log(`Password length to use: ${lengthValue}`);
}

let password = "";

for (let i = 0; i < lengthValue; i++) {
  const randomIndex = Math.floor(Math.random() * lowerCase.length);
  password += lowerCase[randomIndex];
}

console.log(`Generated password: ${password}`);
