/** 版本比较 */
function compareVersion(v1:string, v2:string) {
    const v1Arr = v1.split('.')
    const v2Arr = v2.split('.')
    var len = Math.max(v1.length, v2.length)
  
    while (v1.length < len) {
      v1Arr.push('0')
    }
    while (v2.length < len) {
      v2Arr.push('0')
    }
  
    for (var i = 0; i < len; i++) {
      var num1 = parseInt(v1Arr[i])
      var num2 = parseInt(v2Arr[i])
  
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  }
  