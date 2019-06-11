class SkipNode {
  constructor(key, height) {
    this.key = key
    this.height = height
    this.forward = Array(height)
  }
}

class SkipList {
  constructor(maxLevel) {
    this.head = Array(maxLevel)
    this.maxLevel = maxLevel
    this.size = 0
  }
  search() {}
  insert() {}
  delete() {}
  generateLevel() {
    ffz(Math.random() & ((1 << this.maxLevel)) - 1)
  }
}