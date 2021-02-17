# Slack Rss Reader
<img width="1154" alt="スクリーンショット 2020-12-11 16 42 06" src="https://user-images.githubusercontent.com/13917558/101876587-f800c080-3bcf-11eb-95d7-880beff43b1e.png">

# What is Slack Rss Reader?
- This is an extension that links [Slack](https://slack.com/) with the [Slack app's RSS](https://slack.com/apps/A0F81R7U7-rss) and displays the article in a new tab in Google Chrome.
  - [Slack RSS Reader](https://chrome.google.com/webstore/detail/slack-rss-reader/mmfkogkfphmlkeildihamlilfinbpdfo?hl=ja&authuser=0)

# Usage
## Advance Preparation
- Slack channel ID for RSS feeds
  - How to check your channel ID
    - https://app.slack.com/client/T01JCRTD5JR/C01J95JSG4E
    - Access the web version of Slack, open the target channel, and you will find the channel ID in the path of the URL.
      - `https://app.slack.com/client/{workspace_id}/{channel_id}`
  - It is recommended to create a new workspace for RSS distribution.
    - https://slack.com/get-started#/create
- Access token for SlackAPI
  - Get a token with permission to retrieve messages in the channel
    - Acquisition method
      - 1 Go to https://api.slack.com/apps
      - 2 Click the `Create New App` button.
      - 3 Enter the `App Name` (it can be anything)
      - 4 Select the workspace you just created as the `Development Slack Workspace`.
      - 5 Create it with `Create App`.
      - 6 Go to https://api.slack.com/apps
      - 7 Click on the App you created in `5`.
      - 8 Select `channels:history` from `Add features and functionality` -> `Permissions` -> `Scopes` -> `Bot Token Scopes` -> `Add an Oauth Scope`
      - 9 Go to https://api.slack.com/apps
      - 10 Click on the App you created in `5`.
      - 11 `Allow` from `Basic Information` -> `Install your app` -> `Install to workspace`
      - 12 Go to https://api.slack.com/apps
      - 13 Click on the App you created in `5`.
      - 14 Copy `Bot User OAuth Access Token` from `Add features and functionality` -> `Permissions`

## Procedure
1. Add RSS APP
    - https://{your_workspace_name}.slack.com/apps/A0F81R7U7-rss
    - Add it with `Add to Slack`
    - Subscribe to RSS from `Add RSS integration`.
2. Add an `RSS APP` to the channel you want to distribute.
    - Connect (add) the app created in `5` of `Advance Preparation` from the `Connect App` link in the Slack channel.
- If you can get the list of messages in the channel with the following URL, you have succeeded!
  - `https://slack.com/api/conversations.history?token={SLACK_API_ACCESS_TOKEN}&channel={YOUR_CHANNEL_ID}&pretty=1`
      
- Enter `Token` and `Channel` from the extension's screen to connect.