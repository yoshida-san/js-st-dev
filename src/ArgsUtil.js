module.exports = class ArgsUtil {
  _mode = ['add', 'edit', 'delete']
  constructor() {
    this._args =
      process.argv.length > 2 ? process.argv.slice(2, process.argv.length) : []
  }
  getLength = () => this._args.length

  getMode = () =>
    this.getLength() > 0
      ? this._mode.indexOf(this._args[0]) !== -1
        ? this._args[0]
        : null
      : null

  lengthCheck = () => this._args.length > 0
}
