var findCircleNum = function(M) {
  let seen = Array(M.length)
  let count = 0
  for(let i = 0; i < M.length; ++i) {
      if(!seen[i]) {
          count++
          dfs(M, seen, i)
      }
  }
  return count
}
function dfs(M, seen, i) {
  for(let j = 0; j < M.length; ++j) {
      if(M[i][j] === 1 && seen[j] !== 1) {
          seen[j] = 1
          dfs(M, seen, j)
      }
  }
}