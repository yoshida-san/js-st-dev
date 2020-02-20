module.exports = class ArgsUtil {
  /**
   * プライベートフィールドはTC39で提案されている実験的機能です。
   * thisへの追加によって後から作成することはできません。
   * プライベートフィールドをブラウザで利用する場合はBabel等でトランスパイルすることが必要になります。
   *
   * 以下のコードではmodeはプライベートフィールド化し、_argsはインスタンスのプロパティとしてconstructor内で定義しています。
   * _args = []のように定義しておくことも可能です。
   */
  #mode = ['add', 'edit', 'delete'];

  constructor() {
    this._args =
      process.argv.length > 2 ? process.argv.slice(2, process.argv.length) : []
  }

  getLength = () => this._args.length;

  getMode = () =>
    this.getLength() > 0
      ? this.#mode.indexOf(this._args[0]) !== -1
        ? this._args[0]
        : null
      : null;

  lengthCheck = () => this.getLength() > 0;
}
