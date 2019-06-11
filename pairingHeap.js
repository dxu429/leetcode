const util = require('util')

class PairingHeap {
  constructor(elem = null, subheaps = []) {
    this.elem = elem
    this.subheaps = subheaps
  }
}
function findMin(heap) {
  return heap.elem
}

/**
 * compare the two root elements, the smaller remains the root of the result, 
 * the larger element and its subtree is appended as a child of this root.
 */
function merge(heap1, heap2) {
  if(!heap1)
    return heap2
  else if(!heap2)
    return heap1
  else if(heap1.elem < heap2.elem)
    return new PairingHeap(heap1.elem, [...heap1.subheaps, heap2])
  else
    return new PairingHeap(heap2.elem, [...heap2.subheaps, heap1])
}

/**
 * create a new heap for the inserted element and merge into the original heap.
 */
function insert(key, heap) {
  return merge(new PairingHeap(key, []), heap)
}

/**
 * remove the root and merge its subtrees
 */
function deleteMin(heap) {
  return mergePairs(heap.subheaps)
}

function mergePairs(list) {
  if(list.length === 0)
    return null
  else if(list.length === 1)
    return list[0]
  else
    return merge(merge(list[0], list[1]), mergePairs(list.slice(2)))
}