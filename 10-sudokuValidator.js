function validSolution(board) {
  return validateLinearly(board) && validateSubgrids(board)
}

function validateLinearly(board) {
  // check rows
  for(let i = 0; i < board.length; i++) {
    if ((new Set(board[i]).size) !== 9) return false;
  }

  // check columns
  for(let i = 0; i < board.length; i++) {
    let col = [];
    for (let j = 0; j < board.length; j++) {
      col[j] = board[j][i];
    }
    if ((new Set(col)).size !== 9) return false;
  }

  return true
}

function validateSubgrids(board) {
  for(let i = 0; i < board.length; i++) {
    const grid = 
      board[Math.floor(i / 3) * 3].slice((i % 3) * 3, (i % 3) * 3 + 3)
      .concat(
        board[Math.floor(i / 3) * 3 + 1].slice((i % 3) * 3, (i % 3) * 3 + 3),
      )
      .concat(
        board[Math.floor(i / 3) * 3 + 2].slice((i % 3) * 3, (i % 3) * 3 + 3)
      )
    
    if ((new Set(grid).size !== 9)) return false
  }

  return true
}

const board = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]]

console.log(validSolution(board))