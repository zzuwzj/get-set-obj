'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 深copy对象
 * @param {Object} p 要copy的对象
 * @param {Object} c 返回对象的初始值
 */
const deepCopy = (p, c) => {
  const o = c || {};

  Object.keys((p || {})).forEach(i => {
    if (!!p[i] && typeof p[i] === "object") {
      o[i] = p[i].constructor === Array ? [] : {};
      o[i] = deepCopy(p[i], o[i]);
    } else {
      o[i] = p[i];
    }
  });

  return o
};

/**
 * 安全获取对象中指定路径下的值
 * @param {Object} obj 要取值的对象
 * @param {String} path 取值路径，例如path=a.b.c，则取值obj.a.b.c
 */
const safeGet = (obj, path) => `${path}`.split(".").reduce((ret, el) => (ret || {})[el], deepCopy(obj));

var index = {
  safeGet
};

exports.safeGet = safeGet;
exports.default = index;
