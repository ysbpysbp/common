function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * sleep方法
 * @param func 沉睡之后执行的方法
 * @param args 参数数组
 * @param ms
 * @returns {Promise<void>}
 */
async function sleep(fyuanma unc, args, ms) {
  await timeout(ms);
  func(...args);
}

export default {
  sleep,
};

export {
  sleep,
};
