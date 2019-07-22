const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const FluentValidator = require('./FluentValidator')

const testData = {
  booleanTrue: true,
  booleanFalse: false,
  null: null,
  undefined: undefined,
  integerNegativ: -1,
  integerZero: 0,
  integerPositive: 1,
  floatNegative: -0.1,
  floatPositive: 0.1,
  stringEmpty: '',
  stringAlpha: 'abc',
  stringNumeric: '123',
  stringAlphaNumeric: '123abc',
  object: {},
  arrayEmpty: [],
  arrayInteger: [1, 2, 3, 4],
  arrayString: ['a', 'b', 'c'],
  symbol: Symbol('test')
}

describe('FluentValidator', () => {
  it('should be defined', () => {
    expect(FluentValidator).to.be.a('function')
  })
  it('createError should set name to error message', () => {
    expect(new FluentValidator(undefined).createError('test').message).equals('test')
    expect(new FluentValidator(undefined, 'name').createError('test').message).equals('name: test')
  })
  it('isArray should throw Error', async () => {
    const notThrow = [
      'arrayEmpty',
      'arrayInteger',
      'arrayString'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isArray(), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('isBoolean should throw Error', async () => {
    const notThrow = [
      'booleanTrue',
      'booleanFalse'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isBoolean(), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('isString should throw Error', async () => {
    const notThrow = [
      'stringEmpty',
      'stringAlpha',
      'stringNumeric',
      'stringAlphaNumeric'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isString(), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('isString should throw Error', async () => {
    const notThrow = [
      'symbol'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isSymbol(), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('isNumber should throw Error', async () => {
    const notThrow = [
      'integerNegativ',
      'integerZero',
      'integerPositive',
      'floatNegative',
      'floatPositive'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isNumber(), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('isDefined should throw Error', async () => {
    const toThrow = [
      'undefined',
      'null'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isDefined(), key)
      if (toThrow.indexOf(key) >= 0) {
        e.to.throw(Error)
      } else {
        e.to.not.throw(Error)
      }
    }
  })
  it('isNotEmpty should throw Error', async () => {
    const toThrow = [
      'undefined',
      'stringEmpty'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).isNotEmpty(), key)
      if (toThrow.indexOf(key) >= 0) {
        e.to.throw(Error)
      } else {
        e.to.not.throw(Error)
      }
    }
  })
  it('hasMinimumLength should throw Error', async () => {
    const notThrow = [
      'stringAlpha',
      'stringNumeric',
      'stringAlphaNumeric',
      'arrayInteger',
      'arrayString'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).hasMinimumLength(2), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('hasMaximumLength should throw Error', async () => {
    const notThrow = [
      'stringEmpty',
      'stringAlpha',
      'stringNumeric',
      'arrayEmpty',
      'arrayString'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).hasMaximumLength(3), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
  it('hasLength should throw Error', async () => {
    const notThrow = [
      'stringAlpha',
      'stringNumeric',
      'arrayString'
    ]
    for (const key of Object.keys(testData)) {
      const e = expect(() => new FluentValidator(testData[key]).hasLength(3), key)
      if (notThrow.indexOf(key) >= 0) {
        e.to.not.throw(Error)
      } else {
        e.to.throw(Error)
      }
    }
  })
})
