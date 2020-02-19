module.exports = class ArgsUtil {
  constructor(args) {
    this._args = args.slice(2, args.length)
  }
  length = () => this._args.length
  lengthCheck = () => this._args.length > 0
}
