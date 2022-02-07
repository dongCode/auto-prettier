import { useState, useEffect } from "react";
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

export const useMount = (callback, ...args) => {
  const [mounted, setMounted] = useState(false);
  const resetInit = () => setMounted(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback(...args);
    }
  }, [mounted, args, callback]);

  return [resetInit];
};
// input 双向绑定
export const useBind = (initVal) => {
  let [value, setValue] = useState(initVal);
  let onChange = function (event) {
    setValue(event.currentTarget.value);
  };
  return {
    value,
    onChange,
  };
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // setDebouncedValue触发组件更新
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
