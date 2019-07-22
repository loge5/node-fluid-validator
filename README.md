[![npm version](https://badge.fury.io/js/fluent-validator.svg)](http://badge.fury.io/js/another-fluent-validator)
[![Dependencies](https://david-dm.org/loge5/node-fluent-validator.svg)](https://david-dm.org/loge5/node-fluent-validator) 
[![devDependencies Status](https://david-dm.org/loge5/node-fluent-validator/dev-status.svg)](https://david-dm.org/loge5/node-fluent-validator?type=dev)

# another fluent-validator

**Simple validator, but with an fluent interface**

# Installation

```
npm install another-fluent-validator
```
# Example


```javascript
const FluentValidator = require('another-fluent-validator')

// example object
const myDirtyObject = {
  code: 'ABC'
  name: ''
}

let code = new FluentValidator(myDirtyObject.code, 'my code')
  .isString()
  .isNotEmpty()
  .value
// -> wil set code to 'ABC'

let name  = new FluentValidator(myDirtyObject.name, 'my name')
  .isString()
  .isNotEmpty()
  .hasMinimumLength(3)
  .value
// -> will throw Error with message: "my name: should not be empty"
}
```
# Contributing & Development

## Style

[https://github.com/standard/standard](https://github.com/standard/standards)

## Testing

Run mocha tests:

`npm test`

Check code coverage (creates "./coverage/index.html"):

`npm run-script cover`
