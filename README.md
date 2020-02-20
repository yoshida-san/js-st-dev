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

### テスト

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

### 実動

以下のコマンドを実行すると「2」と表示されるかと思います。

```
node ./src/index.js abc def
```

以下のコマンドを実行すると「args error」と表示されるかと思います。

```
node ./src/index.js
```

それでは JavaScript の学習を始めていきましょう！
