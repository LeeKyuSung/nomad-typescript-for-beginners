// @ts-check
/**
 * Initialize the package
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exit the package
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
