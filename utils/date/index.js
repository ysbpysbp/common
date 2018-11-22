/**
 * Created by sunzhiyong on 2018/11/7.
 */
function getDate(time) {
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  if (m < 10) {
    m = '  ' + m
  }
  let d = date.getDate()
  if (d < 10) {
    d = '0' + d
  }
  return `${y}年${m}月${d}日`
}


module.exports = {
  getDate
}
