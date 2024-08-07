const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decodePair(pair) {
  if (pair === "10") {
    return ".";
  } else if (pair === "11") {
    return "-";
  } else {
    return "";
  }
}

function decodeBlock(block) {
  if (block === "**********") {
    return " ";
  }

  let morse = "";
  for (let i = 0; i < block.length; i += 2) {
    morse += decodePair(block.slice(i, i + 2));
  }

  return MORSE_TABLE[morse];
}

function decode(expr) {
  let decodeString = "";
  for (let i = 0; i < expr.length; i += 10) {
    decodeString += decodeBlock(expr.slice(i, i + 10));
  }

  return decodeString;
}

module.exports = {
  decode,
};
