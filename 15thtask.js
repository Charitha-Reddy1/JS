const character = "*";
const count = 7;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return  character.repeat(2 * rowNumber )+   character.repeat(2 * rowNumber )+character.repeat(2 * rowNumber );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
     
    // rows.unshift(padRow(i, count));
    // rows.unshift(padRow(i, count));
    rows.push(padRow(i, count));
rows.unshift(padRow(i, count));
    
    
  } else {
    rows.unshift(padRow(i, count));
    rows.push(padRow(i, count));
    
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);