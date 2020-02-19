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

### コーディング確認

プロジェクトルート直下に src フォルダを作成し、src フォルダに hoge.js を作成して以下のコードを貼り付けて見てください（保存はしないでください）。

```js
const hoge = () => {
  return 'hoge'
}
const hello = name => `Hello ${name}! & ${hoge()}!`
const hello2 = name => `Hello ${namae}!`
```

VSCode 上で赤波線が 5 箇所出ているでしょうか？問題なく表示されていれば ESLint は正常に動いています！  
続いて保存してみましょう。4 行目のセミコロンが消えて赤波線が 4 箇所になりましたか？そうなっていれば Prettir も正常に動いています！

### テスト動作確認

以下のコマンドでテストを動かしてみましょう。

```
npm run ut
```

```
 PASS  __tests__/ArgsUtil.test.js
  ✓ 引数有効判定テスト (2ms)
  ✓ 有効引数個数テスト (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.962s, estimated 1s
Ran all test suites.
```

こんな感じで表示されれば無事テストが動いています！

### 実際動かしてみる

以下のコマンドを実行すると「2」と表示されるかと思います。

```
node ./src/index.js abc def
```

以下のコマンドを実行すると「args error」と表示されるかと思います。

```
node ./src/index.js
```

それでは JavaScript の学習を始めていきましょう！
