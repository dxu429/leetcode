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
  createLevelLists() {
    if(!this.root)
      return []
    const res = []
    let current = []
    let parents = []
    current.push(this.root)
    while(current.length > 0) {
      res.push(current)
      parents = current
      current = []
      for(let parent of parents) {
        if(parent.left)
          current.push(parent.left)
        if(parent.right)
          current.push(parent.right)
      }
    }
    return res.map(arr => arr.map(i => i.val))
  }
}

let bst = new BST(new Node(5))
bst.insert(3)
bst.insert(8)
bst.insert(2)
bst.insert(4)
bst.insert(1)
bst.insert(7)
bst.insert(6)
bst.insert(9)
bst.insert(10)
bst.insert(11)
console.log(bst.createLevelLists())