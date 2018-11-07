/**
 * Created by sunzhiyong on 2018/11/7.
 */
function getDate(time) {
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  if (m < 10) {
    m = '0' + m
  }
  let d = date.getDate()
  if (d < 10) {
    d = '0' + d
  }
  return `${y}.${m}.${d}`
}


module.exports = {
  getDate
}
