# .net Spring Workshop（通称：春ゼミ） [![Build Status](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop.svg?branch=master)](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop)

春ゼミ開催案内のWebサイトを管理するリポジトリです．
過去の開催は[Releases](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/releases)を確認してください．

1. masterブランチ・screenshotブランチは保護されており，強制プッシュはできません
1. masterブランチへローカルの変更を反映するには，プルリクエストを作成する必要があります
1. プルリクエスト作成時に自動でWebサイトがビルドされ，これが正常に終了した場合のみmasterブランチへのマージとデプロイが行われます
    - **デプロイ先リポジトリ：[yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp](https://github.com/yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp)**

![春ゼミトップ・Safariスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/safari.png "春ゼミトップ・Safariスクリーンショット")

### development
[yarn](https://yarnpkg.com/en/)が必要です．
```
% yarn
% yarn run gulp build
% yarn run gulp
```
あるいは，ローカルに[NodeJS](https://nodejs.org/en/)環境が整っていない場合は，[docker-compose](https://docs.docker.com/compose/)でビルドすることもできます．
```
% docker-compose up --force-recreate pug
% docker-compose up --force-recreate web watch
```

## 年次更新の手順
年ごとに更新が必要な情報（開催案内やプログラムなど）はすべて [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/blob/master/spring-workshop/_config.pug) にまとまっています．  
ここでは2019年度春ゼミ開催案内を例に手順を説明します．

### 1. 設定ファイルの編集
設定ファイル [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/blob/master/spring-workshop/_config.pug) をエディタで開くか，[ブラウザで編集](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/edit/master/spring-workshop/_config.pug)します．

#### ページタイトル
```
- var page_title =  '.net Spring Workshop 2019 | 東京工業大学 山岡・北口研究室'
```

#### OGP
SNS投稿時に表示されるコンテンツの定義です．*title* だけ修正してください．
```
-
  var og = {
    type: 'website',
    title: '.net Spring Workshop 2019',
    description: '.net Spring Workshop（通称：春ゼミ）は、東京工業大学 山岡・北口研究室の主催する研究ワークショップです。',
    image: image_path + '/OGP.jpg',
    url: base_url
  }
```

#### 開催案内
- *year*: 開催年
- *date*: 開催年・月・日・曜日
- *begin*: 開始時刻
- *location.text*: 開催場所
- *location.url*: 開催場所に貼り付けるリンクのURL
- *transport*: 最寄り交通機関
- *fee.general*: 一般の懇親会参加費
- *fee.student*: 新入生を除く学生の懇親会参加費
- *paying*: 参加費の支払い方法
- *wifi*: 会場のWi-Fi環境
- *afterparty.text*: 2次会会場
- *afterparty.url*: 2次会会場に貼り付けるリンクのURL
- *contact*: 運営事務局のメールアドレス（メールエイリアス発行はnet-rootに依頼してください）

```
-
  var workshop = {
    year: '2019',
    date: '2019年4月10日（水）',
    begin: '14:00',
    location: {
      text: '東京工業大学 大岡山キャンパス 南3号館3階300輪講室（山岡・北口研究室）',
      url: 'https://www.net.ict.e.titech.ac.jp/access/index.html',
    },
    transport: '東急大井町線・目黒線 大岡山駅より徒歩5分',
    fee: {
      general: '調整中',
      student: '調整中'
    },
    paying: '当日会場にて集金いたします（現金・Kyash・PayPay・PayPal）',
    wifi: 'eduroamとWi2が利用できます',
    afterparty: {
      text: '現在調整中',
      url: ''
    },
    contact: 'workshop-inquiry@net.ict.e.titech.ac.jp'
  }
```

#### プログラム
タイムスロットを，挨拶や休憩，懇親会などの *nonsession* と，研究発表を含む *session* に大別します．

- *nonsession* の定義
  - *type*: **nonsession**
  - *time*: 開始時刻と終了時刻
  - *title*: タイムスロット名
  - *owner*: 講演者名など（休憩や懇親会のスロットでは空欄）

- *session* の定義
  - *type*: **session**
  - *time*: 開始時刻と終了時刻
  - *title*: タイムスロット名
  - *owner*: 座長名
  - *session.time*: 発表開始時刻と発表終了時刻
  - *session.title*: 発表タイトル
  - *session.presenter*: 発表者名

```
-
  var program = [
    {
      type: 'nonsession',
      time: '14:00 ~ 14:20',
      title: '開式の辞',
      owner: '山岡 克式'
    },
    {
      type: 'session',
      time: '14:20 ~ 15:20',
      title: '前半セッション（新入生の発表）',
      owner: '座長: 宮 太地, 平井 和樹',
      session: [
        {
          time: '14:20 ~ 14:40',
          title: '発表タイトル未提出',
          presenter: '信州大（新・修士1年）'
        },
        {
          time: '14:40 ~ 15:00',
          title: '発表タイトル未提出',
          presenter: '理科大（新・修士1年）'
        },
        {
          time: '15:00 ~ 15:20',
          title: '発表タイトル未提出',
          presenter: '工学院大（新・博士1年）'
        }
      ]
    },
    {
      type: 'nonsession',
      time: '15:20 ~ 15:30',
      title: '休憩',
      owner: ''
    },
    {
      type: 'session',
      time: '15:30 ~ 16:30',
      title: '後半セッション',
      owner: '座長: 平井 和樹, 宮 太地',
      session: [
        {
          time: '15:30 ~ 15:50',
          title: 'コネクション集約とログ解析による高速なWebコンテンツ配信手法',
          presenter: '代理発表: 北口 善明'
        },
        {
          time: '15:50 ~ 16:10',
          title: '機械学習を用いたDNSクエリ/応答ログ解析による悪性端末検出',
          presenter: '代理発表: 北口 善明'
        },
        {
          time: '16:10 ~ 16:30',
          title: '発表タイトル未提出',
          presenter: 'Krittin Intharawijitr（博士3年）'
        }
      ]
    },
    {
      type: 'nonsession',
      time: '16:30 ~ 16:50',
      title: '閉式の辞',
      owner: '北口 善明'
    },
    {
      type: 'nonsession',
      time: '18:00 ~ 20:30',
      title: '懇親会（新入生歓迎会）',
      owner: ''
    },
    {
      type: 'nonsession',
      time: '21:00 ~',
      title: '2次会',
      owner: ''
    }
  ]
```

### 2. HTMLファイル群の生成
ローカルでHTMLファイル群を生成するには，[NodeJS](https://nodejs.org/en/)もしくは[Docker](https://www.docker.com/)が必要になります．  
なお，ブラウザで設定ファイルを編集した場合は，この手順はスキップできます．

以下コマンドを実行し，問題なくビルドが通ることを確認したら，masterブランチへプッシュしてください．

#### NodeJS環境
```
% npm install -g yarn
% yarn
% yarn run gulp build
% yarn run gulp
```

#### Docker環境
[docker-compose](https://docs.docker.com/compose/)をインストールしてください．
```
% docker-compose up --force-recreate pug
```

### 3. デプロイ先リポジトリの公開
masterブランチへプッシュすると，[TravisCI](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop)により自動でビルドされ，[yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp](https://github.com/yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp)へ成果物が展開されます．

[Quick start: Setting up a custom domain](https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain) の指示に従い，DNSコンテンツサーバに以下のRRを追加します．

```
workshop.net.ict.e.titech.ac.jp. 3600 IN CNAME	yamaoka-kitaguchi-lab.github.io.
```

最後に [Configuring a publishing source for GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) の指示に従い，リポジトリのmasterブランチをを公開領域として設定してください．  

これで [https://workshop.net.ict.e.titech.ac.jp/](https://workshop.net.ict.e.titech.ac.jp/) から春ゼミ開催案内へアクセスできるようになります．

## スクリーンショット
![サイト全体・Chromeスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/all.png "サイト全体・Chromeスクリーンショット")
