//pair programmed with @Leandrodeleon22

const transpose = function (matrix) {
  let matrix2 = [];
  matrix[0].map(x => matrix2.push([]));
  matrix.map((element, i) => 
              matrix[i].map((element, j) => 
              matrix2[j][i] = matrix[i][j]))
  return matrix2;
};
  
const horizontalJoin = (letters, word) => {
  const rows = letters.map((row) => row.join(""));
  for (l of rows) {
    if (l.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || !(typeof word === "string")) {
    return false;
  }
  if (horizontalJoin(letters, word)) {
    return true;
  }
  const transposedLetters = transpose(letters); // transpose the matrix of letters to transform columns into rows to work with the horizontalJoin function
  if (horizontalJoin(transposedLetters, word)) {
    return true;
  }
  return false; // did not find any match, return false
};

module.exports = wordSearch;
