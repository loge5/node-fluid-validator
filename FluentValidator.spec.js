const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const FluentValidator = require('./FluentValidator')

describe('FluentValidator', () => {
  it('should be defined', () => {
    expect(FluentValidator).to.be.a('function')
  })
  it('isString should throw Error', async () => {
    expect(() => new FluentValidator(1).isString()).to.throw(Error)
    expect(() => new FluentValidator({}).isString()).to.throw(Error)
    expect(() => new FluentValidator(undefined).isString()).to.throw(Error)
    expect(() => new FluentValidator('').isString()).to.not.throw(Error)
    expect(() => new FluentValidator('123').isString()).to.not.throw(Error)
    expect(() => new FluentValidator('ABC').isString()).to.not.throw(Error)
  })
  it('isDefined should throw Error', async () => {
    expect(() => new FluentValidator(undefined).isDefined()).to.throw(Error)
    expect(() => new FluentValidator(null).isDefined()).to.throw(Error)
    expect(() => new FluentValidator(0).isDefined()).to.not.throw(Error)
    expect(() => new FluentValidator(1).isDefined()).to.not.throw(Error)
    expect(() => new FluentValidator('').isDefined()).to.not.throw(Error)
    expect(() => new FluentValidator('123').isDefined()).to.not.throw(Error)
    expect(() => new FluentValidator('ABC').isDefined()).to.not.throw(Error)
    expect(() => new FluentValidator({}).isDefined()).to.not.throw(Error)
  })
  it('isNotEmpty should throw Error', async () => {
    expect(() => new FluentValidator(undefined).isNotEmpty()).to.throw(Error)
    expect(() => new FluentValidator('').isNotEmpty()).to.throw(Error)
    expect(() => new FluentValidator('abc').isNotEmpty()).to.not.throw(Error)
    expect(() => new FluentValidator(123).isNotEmpty()).to.not.throw(Error)
    expect(() => new FluentValidator({}).isNotEmpty()).to.not.throw(Error)
  })
  it('hasMinimumLength should throw Error', async () => {
    expect(() => new FluentValidator('').hasMinimumLength(2)).to.throw(Error)
    expect(() => new FluentValidator('a').hasMinimumLength(2)).to.throw(Error)
    expect(() => new FluentValidator('aa').hasMinimumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([]).hasMinimumLength(2)).to.throw(Error)
    expect(() => new FluentValidator([1]).hasMinimumLength(2)).to.throw(Error)
    expect(() => new FluentValidator([1, 2]).hasMinimumLength(2)).to.not.throw(Error)
  })
  it('hasMaximumLength should throw Error', async () => {
    expect(() => new FluentValidator('abcd').hasMaximumLength(2)).to.throw(Error)
    expect(() => new FluentValidator('abc').hasMaximumLength(2)).to.throw(Error)
    expect(() => new FluentValidator('aa').hasMaximumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator('a').hasMaximumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator('').hasMaximumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([1, 2, 3]).hasMaximumLength(2)).to.throw(Error)
    expect(() => new FluentValidator([1, 2]).hasMaximumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([1]).hasMaximumLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([]).hasMaximumLength(2)).to.not.throw(Error)
  })
  it('hasLength should throw Error', async () => {
    expect(() => new FluentValidator('abc').hasLength(2)).to.throw(Error)
    expect(() => new FluentValidator('a').hasLength(2)).to.throw(Error)
    expect(() => new FluentValidator('aa').hasLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([1, 2, 3]).hasLength(2)).to.throw(Error)
    expect(() => new FluentValidator([1, 2]).hasLength(2)).to.not.throw(Error)
    expect(() => new FluentValidator([1]).hasLength(2)).to.throw(Error)
  })
})
