// chessboard exercise

// for (var = 0; i < 8; i++) {

// var line = "";
//
//   for (var colum = 0; column < 8; column++) {
//
//     var total = row + column;
//
//     if (total % 2 === 0) {
//     line += " ";
//   } else {
//     line += "#";
//   }
// }
//
// console.log(line);
//
// }

//I don't understand the term "console logging" and how it's used

var odd = " # # # #\n";
var even = "# # # # \n";
var result = "";

for (var i = 0; i < 8; i++) {
  if (i % 2 ===0) {
    result += even;
  } else {
    result += odd;
  }
}

console.log(result);
