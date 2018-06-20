if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  const rowsInput = data.substr(0, data.length - 2) // Remove newline end-of-file
                        .split("\n");
  const [numRows, numColumns, minIngredients, maxCells] = rowsInput[0].split(' ');
  const pizza = rowsInput
                      .filter((row, index) => index > 0)
                      .map((row, index) => [...row]);
  
  console.log(`${numRows} rows, ${numColumns} columns, min ${minIngredients} of each ingredient per slice, max ${maxCells} cells per slice.`);
  console.log(pizza);
});