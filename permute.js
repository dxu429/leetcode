function permute(str) {
  let perms = []
  if(str.length === 1)
    return [str]
  for(let i = 0; i < str.length; ++i) {
    let c = str.charAt(i)
    let innerPerms = permute(str.substring(0, i) + str.substring(i+1))
    for(let z of innerPerms)
      perms.push(c + z)
  }
  return perms
}
console.log(permute("abc"))