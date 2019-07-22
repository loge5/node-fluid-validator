/**
 * Validator based on an fluent interface
 *
 * Example Usage:
 * let validString = new FluentValidator('test').isString().isNotEmpty().value
 */
class FluentValidator {
  /**
   * @param {*} value
   * @param {string} name for custom error messages
   */
  constructor (value, name) {
    this.value = value
    this.name = name
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isArray (value) {
    return Array.isArray(value)
  }

  /**
   * @returns {FluentValidator}
   */
  isArray () {
    if (!this.constructor.isArray(this.value)) {
      throw this.createError('should be a array')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isBoolean (value) {
    return typeof value === 'boolean'
  }

  /**
   * @returns {FluentValidator}
   */
  isBoolean () {
    if (!this.constructor.isBoolean(this.value)) {
      throw this.createError('should be a boolean')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isNumber (value) {
    return typeof value === 'number'
  }

  /**
   * @returns {FluentValidator}
   */
  isNumber () {
    if (!this.constructor.isNumber(this.value)) {
      throw this.createError('should be a number')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isNumeric (value) {
    return ['boolean', 'object'].indexOf(typeof value) < 0 &&
    (typeof value !== 'string' || value.length > 0) &&
    (typeof value === 'number' || !isNaN(value))
  }

  /**
   * @returns {FluentValidator}
   */
  isNumeric () {
    if (!this.constructor.isNumeric(this.value)) {
      throw this.createError('should be numeric')
    }
    return this
  }

  /**
   * @returns {integer}
   */
  toInteger () {
    this.isNumeric(this.value)
    return parseInt(this.value)
  }

  /**
   * @returns {integer}
   */
  toFloat () {
    this.isNumeric(this.value)
    return parseFloat(this.value)
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isString (value) {
    return typeof value === 'string'
  }

  /**
   * @returns {FluentValidator}
   */
  isString () {
    if (!this.constructor.isString(this.value)) {
      throw this.createError('should be a string')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isSymbol (value) {
    return typeof value === 'symbol'
  }

  /**
   * @returns {FluentValidator}
   */
  isSymbol () {
    if (!this.constructor.isSymbol(this.value)) {
      throw this.createError('should be a string')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isDefined (value) {
    return typeof value !== 'undefined' && (typeof value !== 'object' || value !== null)
  }

  /**
   * null counts as undefined
   * @returns {FluentValidator}
   */
  isDefined () {
    if (!this.constructor.isDefined(this.value)) {
      throw this.createError('should be defined')
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isNotEmpty (value) {
    if (typeof value === 'undefined') {
      return false
    }
    if (typeof value === 'string' && value.length === 0) {
      return false
    }
    if (Array.isArray(value) && value.length === 0) {
      return false
    }
    return true
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isEmpty (value) {
    return !this.isNotEmpty(value)
  }

  /**
   * objects and numbers are not checked
   * @returns {FluentValidator}
   */
  isNotEmpty () {
    if (this.constructor.isEmpty(this.value)) {
      throw this.createError('should not be empty')
    }
    return this
  }

  /**
   * @param {*} value
   * @param {number} minLength
   * @returns {boolean}
   */
  static hasMinimumLength (value, minLength) {
    return typeof value.length === 'number' && value.length >= minLength
  }

  /**
   * Throws also when .length is not a number
   * @param {number} minLength
   * @returns {FluentValidator}
   */
  hasMinimumLength (minLength) {
    if (!this.constructor.hasMinimumLength(this.value, minLength)) {
      throw this.createError('should have minumum length of ' + minLength)
    }
    return this
  }

  /**
   * @param {*} value
   * @param {number} maxLength
   * @returns {boolean}
   */
  static hasMaximumLength (value, maxLength) {
    return typeof value.length === 'number' && value.length <= maxLength
  }

  /**
   * Throws also when .length is not a number
   * @param {number} maxLength
   * @returns {FluentValidator}
   */
  hasMaximumLength (maxLength) {
    if (!this.constructor.hasMaximumLength(this.value, maxLength)) {
      throw this.createError('should have maximum length of ' + maxLength)
    }
    return this
  }

  /**
   * @param {*} value
   * @param {number} length
   * @returns {boolean}
   */
  static hasLength (value, length) {
    return typeof value.length === 'number' && value.length === length
  }

  /**
   * Throws also when .length is not a number
   * @param {number} length
   * @returns {FluentValidator}
   */
  hasLength (length) {
    if (!this.constructor.hasLength(this.value, length)) {
      throw this.createError('should have length of ' + length)
    }
    return this
  }

  /**
   * @param {*} value
   * @returns {boolean}
   */
  static isEmail (value) {
    return typeof value === 'string' &&
      value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }

  /**
   * @returns {FluentValidator}
   */
  isEmail () {
    if (!this.constructor.isEmail(this.value)) {
      throw this.createError('should be an email address')
    }
    return this
  }

  /**
   * @param {*} value
   * @param {array} acceptedValues
   */
  static isOneOf (value, acceptedValues) {
    return acceptedValues.indexOf(value) >= 0
  }

  /**
   * @param {array} acceptedValues
   * @returns {FluentValidator}
   */
  isOneOf (acceptedValues) {
    if (!this.constructor.isOneOf(this.value, acceptedValues)) {
      throw this.createError('should be an accepted value')
    }
    return this
  }

  /**
   * @param {string} msg
   */
  createError (msg) {
    let errorMessage = msg
    if (typeof this.name === 'string') {
      errorMessage = `${this.name}: ${msg}`
    }
    return new Error(errorMessage)
  }
}

module.exports = FluentValidator
