export default function() {
  const items = [...arguments].filter(item => Array.isArray(item))
  const maxLength = items.reduce((acc, {length}) => Math.max(acc, length), 0)
  const res = []
  for(let i = 0; i < maxLength; ++i) {
    const group = []
    for(let arr of items)
      group.push(i < arr.length ? arr[i] : undefined)
    res.push(group)
  }
  return res
}