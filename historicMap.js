class HistoricMap {
  constructor() {
    this.map = new Map()
  }
  set(key, val) {
    const list = this.map.get(key) || []
    list.unshift([Date.now(), val])
    this.map.set(key, list)
  }
  get(key, ts) {
    const list = this.map.get(key)
    return list ? (ts ? list.find(e => e[0] === ts) : list[0]) : undefined
  }
}
