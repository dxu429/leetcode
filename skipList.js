class SkipNode {
  constructor(value, height) {
    this.value = value
    this.height = height
    this.forward = Array(height)
  }
}

class SkipList {
  // maxlevel should be chosen to be approx log1/p(capacity)
  constructor(maxLevel, p=0.5) {
    this.tail = new SkipNode(undefined, maxLevel)
    this.head = new SkipNode(undefined, maxLevel)
    this.head.forward.fill(this.tail)
    this.maxLevel = maxLevel
    this.p = p
    this.size = 0
  }
  find(value) {
    const pre = this.predecessors(value)[0].forward[0]
    if(pre && pre.value === value && pre !== this.tail)
      return pre
    return null
  }
  insert(value) {
    const preds = this.predecessors(value)
    const newNode = new SkipNode(value, this.randomLevel())
    for(let i = 0; i < newNode.height; i++) {
      newNode.forward[i] = preds[i].forward[i]
      preds[i].forward[i] = newNode
    }
    this.size++
  }
  remove(value) {
    const preds = this.predecessors(value)
    const node = preds[0].forward[0]
    if(node.value !== value || node === this.tail)
      return
    for(let i = 0; i < node.height; i++)
      preds[i].forward[i] = node.forward[i]
    this.size--
  }
  // Takes a number and finds the Node in the list after which the number would be inserted. 
  // Used as a helper function to implement the step "find where [X] would be" in each of the other operations.
  predecessors(value) {
    let curr = this.head
    const update = Array(this.maxLevel)
    for(let i = this.maxLevel; i >= 0; i--) {
      while(curr.forward[i] && curr.forward[i].value < value)
        curr = curr.forward[i]
      update[i] = curr
    }
    return update
  }
  randomLevel() {
    let i = 1
    while(Math.random() < this.p && i < this.maxLevel) i++
    return i
  }
  print() {
    let list = this.head.forward[0]
    let str = "{"
    let ll = 0
    while(list !== this.tail) {
      str += `value: ${list.value}, height: ${list.height}`
      list = list.forward[0]
      if(list !== this.tail)
        str += " : "
      if(++ll % 2 === 0) str += "\n"
    }
    str += "}"
    console.log(str)
  }
}
const sl = new SkipList(4)
sl.insert(5)
sl.print()
sl.insert(5)
sl.print()
sl.insert(26)
console.log(sl.find(5))
sl.insert(55)
sl.print()
sl.insert(33)
sl.remove(5)
sl.print()
sl.remove(76876)
sl.print()