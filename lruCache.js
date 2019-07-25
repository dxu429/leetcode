/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.queue = new DblLinkedListQueue()
  this.cache = new Map()
}

class DblLinkedListQueue {
  constructor() {
      this.front = null
      this.tail = null
      this.size = 0
  }
  enqueue(key, value) {
      const node = {key, value, prev: null, next:null}
      if(!this.front && !this.tail) {
          this.front = this.tail = node
      } else {
          this.tail.next = node
          node.prev = this.tail
          this.tail = node
      }
      this.size++
      return node
  }
  dequeue(){
      if(!this.front || !this.tail || this.size < 1)
          return null
      const node = this.front
      if(this.size === 1)
          this.front = this.tail = null
      else {
          node.next.prev = null
          this.front = node.next
      }
      this.size--
      return node
  }
  use(node) {
      if(!node || this.tail === node)
          return node

      if(this.front === node) {
          node.next.prev = null
          this.front = node.next
      } else {
          node.prev.next = node.next
          node.next.prev = node.prev
      }
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      node.next = null
      return node
  }
}

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key)
  if(!node)
      return -1
  this.queue.use(node)
  return node.value
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // check cache for key
  const node = this.cache.get(key)
  const size = this.queue.size
  if(!node) {
      if(size === this.capacity) {
          const {key} = this.queue.dequeue()
          this.cache.delete(key)
      }
      const node = this.queue.enqueue(key, value)
      this.cache.set(key, node)
  } else {
      this.queue.use(node)
      node.value = value
  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/