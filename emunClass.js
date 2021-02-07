/**
 * dev shiyaow
 * desc 通用枚举类
 * @param {Array} list 枚举数组  [{key:'SUCCESS,value:1,desc:'成功'}]
 * @param {Array} keyList 数组对象key的字符串数组 length=3 分别为 键 值  描述  [key,value,desc]
 */

class Emun {
  constructor (list, keyList = ['key', 'value', 'desc']) {
    this.list = list
    this.keyList = keyList
    const { valueObj = {}, descObj = {}, valueToDesc = {} } = this.getValueObj()
    this.keyToValue = valueObj
    this.keyToDesc = descObj
    this.valueToDesc = valueToDesc
  }

  getList () {
    return this.list
  }

  getValueByKey (key) {
    return this.keyToValue[key]
  }

  getDescByKey (key) {
    return this.keyToDesc[key]
  }

  getValueObj () {
    const valueObj = {}
    const descObj = {}
    const valueToDesc = {}
    this.list.forEach(item => {
      valueObj[item[this.keyList[0]]] = item[this.keyList[1]]
      descObj[item[this.keyList[0]]] = item[this.keyList[2]]
      valueToDesc[item[this.keyList[1]]] = item[this.keyList[2]]
    })
    return { valueObj, descObj, valueToDesc }
  }
}
export default Emun
