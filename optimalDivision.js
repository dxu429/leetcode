const util  = require('util')
/**
 * Input: [1000,100,10,2]
 * Output: "1000/(100/10/2)"
 * 
    The length of the input array is [1, 10].
    Elements in the given array will be in range [2, 1000].
    There is only one optimal division for each test case.
 */
var optimalDivision = function(nums) {
  if(nums.length < 3)
    return nums.join("/")
  
  // can create trie to test every case
  let t = createTrie(nums)
  let cases = dfs(t.root)
  return cases.reduce((acc, curr) => eval(curr) > eval(acc) ? curr : acc, 0)
}

// Last node doesn't need open paren or close (close should be handled by static amt?)
// don't close unless there is positive static open parent
class Trie {
  constructor(root) {
    this.root = root
  }

  get root() {
    return this._root
  }
  set root(value) {
    this._root = value
  }
}

class TrieNode {
  constructor(val, index, paren="") {
    this.val = val
    this.paren = paren
    this.numOpenParens = 0
    this.index = index
    this.children = []
  }

  get paren() {
    return this._paren
  }
  set paren(value) {
    this._paren = value
  }

  get numOpenParens() {
    return this._numOpenParens
  }

  set numOpenParens(value) {
    this._numOpenParens = value
  }

  get index() {
    return this._index
  }

  set index(value) {
    this._index = value
  }

  addChildren(...children) {
    this.children.push(...children)
  }

  get childs() {
    return this.children
  }
}

function createTrie(arr) {
  let t = new Trie(new TrieNode(arr[0], 0))
  let q = [t.root]
  
  while(q.length > 0) {
    let curr = q.pop()
    let nextIndex = curr.index + 1

    // reached the end
    if(nextIndex >= arr.length) continue

    // at the last index, add child and close all open parens
    if(nextIndex === arr.length - 1) {
      let child = new TrieNode(arr[nextIndex], nextIndex, Array(curr.numOpenParens).fill(")").join(''))
      curr.addChildren(child)
    } else {
      // inner nodes, choice of open, none, or close
      let children = []
      let open = new TrieNode(arr[nextIndex], nextIndex, "(")
      open.numOpenParens = curr.numOpenParens + 1
      children.push(open)

      let empty = new TrieNode(arr[nextIndex], nextIndex, "")
      empty.numOpenParens = curr.numOpenParens
      children.push(empty)

      if(curr.numOpenParens > 0) {
        let close = new TrieNode(arr[nextIndex], nextIndex, ")")
        close.numOpenParens = curr.numOpenParens - 1
        children.push(close)
      }

      curr.addChildren(...children)
      q.push(...children)
    }
  }
  return t
}

function dfs(root) {
  let strs = []
  if(root.childs.length > 0) {
    for(let i = 0; i < root.childs.length; ++i)
      strs.push(...dfs(root.childs[i]))
  } else {
    return [root.val + root.paren]
  }
  let str = null
  switch(root.paren) {
    case '(':
      str = `(${root.val}/`
      break
    case ')':
      str = `${root.val})/`
      break
    default:
      str = `${root.val}/`
  }
  return strs.map(s => str + s)
}

// let n = createTrie([1000, 100, 10, 2])
// console.log(util.inspect(n, {depth: null}))

// let cases = dfs(n.root)

// console.log(cases)
// console.log(cases.map(c => eval(c)))
// console.log(cases.reduce((acc, curr) => eval(curr) > eval(acc) ? curr : acc, 0))

