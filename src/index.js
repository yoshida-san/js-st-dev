const ArgsUtil = require('./ArgsUtil')
const argsUtil = new ArgsUtil()

console.log(argsUtil.lengthCheck() ? argsUtil.getMode() : 'args error')
