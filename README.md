## quiz app
下記ライブラリの練習用

- react : フロントエンド用の
- react-redux : 状態遷移を一括で保持できる
- react-router : ページ遷移用(SPAを作ることができる)
- react-thunk : 非同期処理(API叩いたり)を行う

### フォルダ構成と役割
```
.
├── App.css     //アプリ全体のスタイルを整える
├── App.js      //アプリ本体。ページ遷移を担っている
├── actions     // * アプリ内で行うアクションについて定義
│   ├── modalActionCreator.js 
│   └── quizActionCreator.js // クイズデータを取ってくるので、react thunkを使っている 
├── components  // * 実際のアプリページを構成するパーツ
│   ├── Button 
│   │   ├── Button.css
│   │   └── Button.jsx
│   ├── Home
│   │   └── Home.jsx
│   └── Quiz    // * クイズページ。ここがメインなところ
│       ├── Quiz.css
│       └── Quiz.jsx   
├── index.js    
├── models
│   └── Quiz.js // クイズにどんな情報を乗っけるかを記述
├── reducers    // * actionsに従って、アプリ内のアクションを実行する
│   ├── index.js
│   ├── modalReducer.js
│   └── quizReducer.js
└── store       // * クイズ情報など、このアプリの情報を一括で保存するところ
    └── index.js
```


### 主要ライブラリと関連、参考リンク
#### React 
- Webサービスを作る用のjavascriptライブラリ。各部品ごとに分けて、組み合わせることで部品を作る感じ。
- 参考サイト
    - [React公式](https://ja.reactjs.org/) tutorialをすれば良いかも。
    - [Reactとvueどちらを選ぶか](https://qiita.com/yoichiwo7/items/236b6535695ea67b4fbe) 違いが書かれていて読み物として面白い
    - [Progateのreact](https://prog-8.com/languages/react)とかでコツを掴んでも良いかも
#### React-redux
- アプリケーション全体が持つ、状態を一括で管理する保管庫 
- これにより、Reactは状態を「表示」するだけに集中できる。状態の遷移は別のところで行うから。
- 参考サイト
    - [redux入門シリーズ](https://qiita.com/kitagawamac/items/b001839150ab04a6a427) actionsやreducer、storeがなんの役割かがわかる。
    - [たぶんこれが一番分かりやすいと思います React + Redux のフロー図解](https://qiita.com/mpyw/items/a816c6380219b1d5a3bf) Reactの持つ状態の流れがわかる

#### React-router
- アプリケーションのページ遷移を司る。
- SPA(Single Page Application)と言って、初回読み込みは遅いけど、それ以降は爆速。
- 実質アドレスと該当ページを対応付けているだけ。アプリ内ではApp.jsで使われている

```
import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import Home from "./components/Home/Home";
import "./App.css"
function App() {
  return (
    <div className="App">
      {/* ルーティング */}
      <Router>
        {/* exact :  完全一致のときにルーティングする*/}
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
      </Router>
    </div>
  );
}
export default App;
```
- 参考サイト
    - [SPA(Single Page Application)ってなに](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)

#### redux-thunk
- 非同期処理をする際に、storeに状態をうまく入れられるようにする(あんまわかっていない。。。)
- APIを叩いて、外部からデータを取得する/外部へデータを投げるときなどに使われる
- [redux-thunk入門、簡単まとめ](https://qiita.com/hiroya8649/items/c202742c99d2cc6159b8)

### 使い方
公式ドキュメント通り。npmやyarnが入っていると、そのまま動かせるのかな？
npmはjavascriptのライブラリパッケージ(pythonで言うpip)

[このあたり](https://qiita.com/taiponrock/items/9001ae194571feb63a5e)を参考に環境構築すればいいかな。


This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

`yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.