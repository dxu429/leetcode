const util = require('util')
/**
 * Initialize your data structure here.
 */
var Trie = function(val = null) {
  this.children = new Map()
  this.isWord = false
  this.value = val
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let currNode = this
  for(let c of word) {
      let childNode = currNode.children.get(c)
      if(childNode === undefined) {
          childNode = new Trie(c)
          currNode.children.set(c, childNode)
      }
      
      currNode = childNode
  }
  currNode.isWord = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let currNode = this
  for(let i = 0; i < word.length; ++i) {
      let c = word.charAt(i)
      if(currNode.children.has(c))
          currNode = currNode.children.get(c)
      else
          return false
  }
  console.log(util.inspect(currNode))
  return currNode.isWord
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let currNode = this
  for(let c of prefix) {
    if(currNode.children.has(c))
      currNode = currNode.children.get(c)
    else
      return false
  }
  return true
};

//* Your Trie object will be instantiated and called as such:
let word = "apple"
let prefix = "app"
var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
console.log(util.inspect(obj, {depth:null}), param_2, obj.search(prefix),  obj.startsWith(prefix))
obj.insert(prefix)
console.log(obj.search(prefix))
