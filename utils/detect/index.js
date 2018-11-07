/**
 * Created by sunzhiyong on 2018/11/7.
 */
/**
 *
 */
function isMobile() {
  return /mobile/i.test(navigator.userAgent) || /android/i.test(navigator.userAgent)
}

module.exports = {
  isMobile,
}
