module.exports = class ArgsUtil {
  /**
   * プライベートフィールドはTC39で提案されている実験的機能です。
   * thisへの追加によって後から作成することはできません。
   * プライベートフィールドをブラウザで利用する場合はBabel等でトランスパイルすることが必要になります。
   */
  #mode = ['add', 'edit', 'delete']
  #args = []

  constructor() {
    this.#args =
      process.argv.length > 2 ? process.argv.slice(2, process.argv.length) : []
  }

  getLength = () => this.#args.length

  getMode = () =>
    this.getLength() > 0
      ? this.#mode.indexOf(this.#args[0]) !== -1
        ? this.#args[0]
        : null
      : null

  lengthCheck = () => this.getLength() > 0
}
