const ArgsUtil = require('./ArgsUtil')
const argsUtil = new ArgsUtil(process.argv)

console.log(argsUtil.lengthCheck() ? argsUtil.length() : 'args error')
