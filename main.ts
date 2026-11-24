const sentence = "The fridge light, after the door closes, keeps burning for a moment in the dark, as if something inside is still reading.";
const fs = require("fs");
if (!fs.existsSync("/output")) {
  fs.mkdirSync("/output", { recursive: true });
}
fs.writeFileSync("/output/entry.txt", sentence);
console.log("Wrote entry to /output/entry.txt");
