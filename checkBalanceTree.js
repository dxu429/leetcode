class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class BST {
  constructor(node) {
    this.root = node
  }
  insert(val) {
    this.root = this._insertRec(this.root, val)
  }
  _insertRec(root, val) {
    if(!root) {
      return new Node(val)
    }
    if(val > root.val)
      root.right = this._insertRec(root.right, val)
    else
      root.left = this._insertRec(root.left, val)
    return root
  }
  checkBalance() {
    if(!this.root)
      return false
    return this._checkBalanceRec(this.root) !== Infinity
    
  }
  _checkBalanceRec(root) {
    if(!root) return 0
    let left = this._checkBalanceRec(root.left)
    let right = this._checkBalanceRec(root.right)
    
    if(Math.abs(left - right) > 1)
      return Infinity
    else
      return Math.max(left, right) + 1
  }
}

let bst = new BST(new Node(5))
console.log(bst.checkBalance())
bst.insert(3)
bst.insert(8)
bst.insert(1)
bst.insert(4)
console.log(bst.checkBalance())
bst = new BST(new Node(5))
bst.insert(3)
bst.insert(8)
bst.insert(9)
bst.insert(10)
console.log(bst.checkBalance())
bst = new BST(new Node(3))
bst.insert(2)
bst.insert(1)
bst.insert(5)
bst.insert(4)
bst.insert(6)
bst.insert(7)
console.log(bst.checkBalance())