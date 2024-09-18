#!/usr/bin/env node
const process = require("node:process");

const arugments = process.argv.slice(2);

if (arugments.length === 0) {
  console.log("Please provide a command");
  process.exit(1);
} else {
  console.log("Command provided: ", arugments);
}
