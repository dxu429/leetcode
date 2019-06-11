function eq(a, b) {
  if(a === b) return true
  if(a === null || b === null) return false
  if(a.length != b.length) return false
  
  for(let i = 0; i < a.length; ++i) {
      if(a[i] !== b[i]) return false
  }
  return true
}

var prisonAfterNDays = function(cells, N) {
  let nCells = new Array(cells.length)
  let fC = new Array(cells.length)
  nCells[0] = nCells[cells.length - 1] = 0
  for(let i = 0; N-- > 0; ++i) {
    for(let j = 1; j < cells.length - 1; j++) {
        nCells[j] = cells[j-1] === cells[j+1] ? 1 : 0
    }
    if(i === 0) fC = [...nCells]
    else if(eq(fC,nCells)) N %= i
    cells = nCells
  }
  return cells
};
prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)