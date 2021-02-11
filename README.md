# Slack Rss Reader
<img width="1154" alt="スクリーンショット 2020-12-11 16 42 06" src="https://user-images.githubusercontent.com/13917558/101876587-f800c080-3bcf-11eb-95d7-880beff43b1e.png">

# Slack Rss Readerとは？
- [Slack](https://slack.com/)と[SlackアプリのRSS](https://slack.com/apps/A0F81R7U7-rss)を連携させて、GoogleChromeの新規タブに記事を表示する拡張機能です。

# 使い方
## 事前に用意するもの
- RSSを配信するSlackのチャンネルID
  - チャンネルIDを確認する方法
    - https://app.slack.com/client/T01JCRTD5JR/C01J95JSG4E
    - Web版のSlackにアクセスし、対象チャンネルを開くとURLにのパスにチャンネルIDがあります
      - `https://app.slack.com/client/{ワークスペースのID}/{チャンネルID}`
  - RSS配信用のワークスペースを新たに作成するのがおすすめです
    - https://slack.com/get-started#/create
- SlackAPIのアクセストークン
  - チャンネル内のメッセージを取得する権限付きのトークンを取得してください
    - 取得方法
      - 1 https://api.slack.com/apps にアクセス
      - 2 `Create New App` ボタンをクリック
      - 3 `App Name` を入力（なんでもよい)
      - 4 `Development Slack Workspace` に先ほど作ったワークスペースを選択
      - 5 `Create App` で作成する
      - 6 https://api.slack.com/apps へアクセス
      - 7 `5`で作ったAppをクリック
      - 8 `Add features and functionality` -> `Permissions` -> `Scopes` -> `Bot Token Scopes` -> `Add an Oauth Scope` から `channels:history` を選択
      - 9 https://api.slack.com/apps へアクセス
      - 10 `5`で作ったAppをクリック
      - 11 `Basic Information` -> `Install your app` -> `Install to workspace` ボタンをクリック -> `Allow`で許可する
      - 12 https://api.slack.com/apps へアクセス
      - 13 `5`で作ったAppをクリック
      - 14 `Add features and functionality` -> `Permissions` -> `Bot User OAuth Access Token` をコピーする

## 手順
1. RSS APPを追加
    - https://{ワークスペース名}.slack.com/apps/A0F81R7U7-rss
    - `Add to Slack` で追加
    - `Add RSS integration` よりRSSを登録する
2. 配信したいチャンネルに`RSS APP`を連携(追加)する
    - Slackのチャンネル内から`アプリを連携させる`(slackの言語設定が日本語の場合) リンク より `事前に用意するもの`の`5`で作成したAppを連携(追加)する
- 下記URLでチャンネル内のメッセージ一覧が取得できたらOKです
  - `https://slack.com/api/conversations.history?token=SlackAPIのアクセストークン&channel=チャンネルID&pretty=1`
      
- 拡張機能の画面より`Token`, `Channel`を入力して接続する