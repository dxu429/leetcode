function keysWithVal(dict, val) {
  const keys = [];
  for (let prop in dict) {
    let type = typeof dict[prop];
    let recurse = [];
    if (type === "string" && dict[prop] === val) {
      keys.push(prop);
    } else if (type === "object") {
      let r = keysWithVal(dict[prop], val);
      for(let k of r)
        keys.push([prop, k].join("."));
    }
  }
  return keys;
}

let obj = {
  a: "apple",
  b: "bobb",
  c: {
    d: "dog",
    f: {
      g: "dog"
    },
    h: 'lary'
  },
  e: "dog"
};
console.log(keysWithVal(obj, "dog"));
