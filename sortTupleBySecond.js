function quickSort(tuple) {
    if(tuple.length === 1)
        return tuple
    
    let pivot = tuple[Math.random() * tuple.length | 0]
    let lt = []
    let eq = []
    let gt = []
    for(let i = 0; i < tuple.length; ++i) {
        let ord = cmp(tuple[i], pivot)
        if(ord < 0) {
            lt.push(tuple[i])
        } else if(ord > 0)
            gt.push(tuple[i])
        else
            eq.push(tuple[i])
    }
    return quickSort(lt).concat(eq, quickSort(gt))
}

const cmp = ([,a],[,b]) => {
  return a === b ? 0 : a - b
}