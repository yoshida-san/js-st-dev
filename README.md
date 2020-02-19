# js-st-dev

## 前提

- Node.js がインストールされていること
- VSCode を利用すること

## 開発環境のインストール

この README.md と同階層で以下のコマンドを実行

```
npm i
```

## VSCode で快適に開発する時に必要なこと

以下の VSCode プラグインをインストールすることで快適に開発ができるようになります。

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

プラグインインストール後は VSCode を再起動しておきましょう。

## 動作確認

プロジェクトルート直下に src フォルダを作成し、src フォルダに index.js を作成して以下のコードを貼り付けて見てください（保存はしないでください）。

```js
const hoge = () => {
  return 'hoge'
}
const hello = name => `Hello ${name}! & ${hoge()}!`;
const hello2 = name => `Hello ${namae}!`
```

VSCode 上で赤波線が 5 箇所出ているでしょうか？問題なく表示されていれば ESLint は正常に動いています！  
続いて保存してみましょう。4 行目のセミコロンが消えて赤波線が 4 箇所になりましたか？そうなっていれば Prettir も正常に動いています！

それでは JavaScript の学習を始めていきましょう！
