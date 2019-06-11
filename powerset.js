function* powerSet(s) {
  // s is a Set
  // power set of empty set is the set containing the empty set. eg P({}) = {{}}
  //  the power set of any other set is all the subsets of the set containing some specific element and all the subsets of the set not containing that specific element
  if(s === null)
    throw Error("Null parameter")
  if(s.size === 0) {
    let empty = new Set()
    empty.add(new Set())
    return empty
  }
  
  // P(s) = P(T) union f(e, P(T)) where f(e,T) = {X union e | X in T}
  for(let item of s) {
    let T = new Set(s)
    T.delete(item)
    console.log("Into pset(): " + Array.from(T) + " item: " + item)
    yield* powerSet(T)
    for(let ss of powerSet(T)) {
      console.log("Add: " + item + "  to set: " + ss)
      yield ss.add(item)
    }
  }
}

function* pSet(s) {
  yield* chain(range(s.size+1).map(l => combination(s, l)))
}

function* chain(iter) {
  for(let it of iter) {
    for(let i of it)
      yield i
  }
}
function range(start, stop=0, step=1) {
  if(stop === 0)
    [start, stop] = [stop, start]
  return [...new Array(Math.floor((stop-start)/step)).keys()].map(i=> i*step+start)
}
function* combination(iter, r) {
  let pool = Array.from(iter)
  let n = pool.length
  if(r > n)
    return
  let indices  = range(r)
  yield pool.slice(0,r)
  while(true) {
    let found = false
    for(var i of range(r).reverse()) {
      if(indices[i] != i + n - r) {
        found = true
        break
      }
    }
    if(!found)
      return
    indices[i] += 1
    for(let j of range(i+1, r)) {
      indices[j] = indices[j-1] + 1
    }
    yield indices.map(k => pool[k])
  }
}
