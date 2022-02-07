// 排除是0时 删除掉键值的情况
export const isFalsy = (value) => (value === 0 ? false : !value);
// 删除值为 '' null undefined的键值
export const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
