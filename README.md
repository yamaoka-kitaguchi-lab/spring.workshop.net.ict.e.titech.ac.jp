![](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/website/images/logo.png)

# .net Spring Workshop（通称：春ゼミ）
[![](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/workflows/GitHub%20CI/CD/badge.svg)](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/actions?query=workflow%3A%22GitHub+CI%2FCD%22) [![](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop.svg?branch=master)](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop) [![](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Fworkshop.net.ict.e.titech.ac.jp%2F)](https://workshop.net.ict.e.titech.ac.jp) [![](https://img.shields.io/github/issues/yamaoka-kitaguchi-lab/spring-workshop)](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/issues) [![](https://img.shields.io/github/issues-pr/yamaoka-kitaguchi-lab/spring-workshop)](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/pulls) [![GitHub Release Date](https://img.shields.io/github/release-date/yamaoka-kitaguchi-lab/spring-workshop)](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/releases)

春ゼミ開催案内のWebサイトを管理するリポジトリです．
過去の開催は [Releases](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/releases) を確認してください．

1. **master ブランチは保護されています．** 直接プッシュ `git push origin master` はできません
1. master ブランチへローカルの変更を反映するにはプルリクエストを提出してください．なお，リクエストを承認し master ブランチへマージできるのは [net-root](https://github.com/orgs/yamaoka-kitaguchi-lab/teams/net-root) チームメンバーのみであり，さらにこれは以下2条件をクリアした場合に限られます:
    - **プルリクエスト作成時に自動実行されるテストをすべて通過すること**
    - **net-root によるコードレビューを経ること**
1. master ブランチへのマージ後，自動でWebサイトがビルドされ成果物がデプロイされます

**コンテンツデプロイ先リポジトリ：[yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp](https://github.com/yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp)**

![春ゼミトップ・Safariスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/safari.png "春ゼミトップ・Safariスクリーンショット")

### development
[yarn](https://yarnpkg.com/en/) が必要です．
```
% yarn
% yarn run gulp build
% yarn run gulp
```
あるいは，ローカルに [NodeJS](https://nodejs.org/en/) 環境が整っていない場合は，[docker compose](https://docs.docker.com/compose/) でビルドすることもできます．
```
% docker compose up --force-recreate pug
% docker compose up --force-recreate web watch
```

## 年次更新の手順
年ごとに更新が必要な情報（開催案内やプログラムなど）はすべて [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/blob/master/spring-workshop/_config.pug) にまとまっています．  
ここでは2020年度春ゼミ開催案内を例に手順を説明します．

### 1. 設定ファイルの編集
設定ファイル [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/blob/master/spring-workshop/_config.pug) をエディタで開くか，[ブラウザで編集](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/edit/master/spring-workshop/_config.pug)します．

#### ページタイトル
```
- var page_title =  '.net Spring Workshop 2020 | 東京工業大学 山岡・北口研究室'
```

#### OGP
SNS投稿時に表示されるコンテンツの定義です．*title* だけ修正してください．
```
-
  var og = {
    type: 'website',
    title: '.net Spring Workshop 2020',
    description: '.net Spring Workshop（通称：春ゼミ）は、東京工業大学 山岡・北口研究室の主催する研究ワークショップです。',
    image: image_path + '/OGP.jpg',
    url: base_url
  }
```

#### 開催案内
- *year*: 開催年
- *date*: 開催年・月・日・曜日
- *datejs*: 2020年4月14日開催なら`20200414`
- *start*: 開始時刻
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

2020年春ゼミは，COVID-19に関する大学からの勧告に従い，以下のような遠隔開催になりました。
```
- 
  var workshop = {
    year: '2020',
    date: '2020年4月14日（火）',
    datejs: '20200414',
    start: '13:00',
    location: {
      text: 'Zoom会議室に参加してください（https://zoom.us/j/982658025）',
      url: 'https://zoom.us/j/982658025',
    },
    transport: '-',
    fee: {
      general: '-',
      student: '-'
    },
    paying: '本年度は懇親会の開催を見送ります',
    wifi: '-',
    afterparty: {
      text: '-',
      url: ''
    },
    contact: 'inquiry@workshop.net.ict.e.titech.ac.jp'
  }
```

参考までに，2019年春ゼミの開催案内はこのようになっています。
```
-
  var workshop = {
    year: '2019',
    date: '2019年4月10日（水）',
    datejs: '20190410',
    start: '14:00',
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
      text: '本年度は開催を見送ります',
      url: ''
    },
    contact: 'workshop-inquiry@net.ict.e.titech.ac.jp'
  }
```

#### プログラム
タイムスロットを，挨拶や休憩，懇親会などの *nonsession* と，研究発表を含む *session* に大別します．

- *nonsession* の定義
  - *type*: **nonsession**
  - *start*: 開始時刻
  - *end*: 終了時刻
  - *title*: タイムスロット名
  - *owner*: 講演者名など（休憩や懇親会のスロットでは空欄）

- *session* の定義
  - *type*: **session**
  - *start*: 開始時刻
  - *end*: 終了時刻
  - *title*: タイムスロット名
  - *owner*: 座長名
  - *session.start*: 発表開始時刻
  - *session.end*: 発表終了時刻
  - *session.title*: 発表タイトル
  - *session.presenter*: 発表者名

```
- 
  var program = [
    {
      type: 'nonsession',
      start: '12:00',
      end: '12:45',
      title: 'オンライン会議室開放',
      owner: ''
    },
    {
      type: 'nonsession',
      start: '12:45',
      end: '13:00',
      title: '接続テスト・自己紹介・全体連絡',
      owner: ''
    },
    {
      type: 'nonsession',
      start: '13:00',
      end: '13:20',
      title: '開式の辞',
      owner: '北口 善明'
    },
    {
      type: 'session',
      start: '13:20',
      end: '14:40',
      title: '前半セッション（新入生の発表）',
      owner: '座長: 宮 太地',
      session: [
        {
          start: '13:20',
          end: '13:40',
          title: '低電源電圧・高線型電圧バッファ回路の構成に関する研究',
          presenter: '石橋 拓也（新・修士1年）'
        },
        {
          start: '13:40',
          end: '14:00',
          title: '高パケットロス耐性を持つビデオストリーミングのためのQUICとHTTP/3の拡張',
          presenter: '小野 輝也（新・修士1年）'
        },
        {
          start: '14:00',
          end: '14:20',
          title: '無線ボディエリアネットワークにおけるpolar符号の性能評価',
          presenter: '内藤 碩治（新・修士1年）'
        },
        {
          start: '14:20',
          end: '14:40',
          title: '逆位相を用いた2チャネル一括OFDM変調における信号品質の測定',
          presenter: '廣 正博（新・修士1年）'
        }
      ]
    },
    {
      type: 'nonsession',
      start: '14:40',
      end: '14:50',
      title: '休憩',
      owner: ''
    },
    {
      type: 'session',
      start: '14:50',
      end: '15:50',
      title: '後半セッション',
      owner: '座長: 伊藤 佑樹',
      session: [
        {
          start: '14:50',
          end: '15:10',
          title: 'ネットワーク環境に応じたHTTPバージョン選択によるコンテンツロード時間削減',
          presenter: '大橋 滉也（代理: 北口 善明）'
        },
        {
          start: '15:10',
          end: '15:30',
          title: 'HBH最適ファイル配送スケジューリング2リンク拡張の適用領域検討',
          presenter: '湯田 孟（修士1年）'
        },
        {
          start: '15:30',
          end: '15:50',
          title: 'オリエンテーション：情報系の学生らしい研究の進め方',
          presenter: '宮 太地（博士1年）'
        }
      ]
    },
    {
      type: 'nonsession',
      start: '15:50',
      end: '16:10',
      title: '閉式の辞',
      owner: '山岡 克式'
    }
  ]
```

### 2. HTMLファイルの生成
ローカルでWebサイトをビルドしHTMLファイルを生成するには，[NodeJS](https://nodejs.org/en/) もしくは [Docker](https://www.docker.com/) が必要になります．  
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
[docker-compose](https://docs.docker.com/compose/) をインストールしてください．
```
% docker-compose up --force-recreate pug
```

### 3. デプロイ先リポジトリの公開
masterブランチへプッシュすると，[TravisCI](https://travis-ci.org/yamaoka-kitaguchi-lab/spring-workshop) により自動でビルドされ，[yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp](https://github.com/yamaoka-kitaguchi-lab/workshop.net.ict.e.titech.ac.jp) へ成果物が展開されます．

[Quick start: Setting up a custom domain](https://help.github.com/en/articles/quick-start-setting-up-a-custom-domain) の指示に従い，DNSコンテンツサーバに以下のRRを追加します．

```
workshop.net.ict.e.titech.ac.jp. 3600 IN CNAME	yamaoka-kitaguchi-lab.github.io.
```

最後に [Configuring a publishing source for GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) の指示に従い，リポジトリのmasterブランチをを公開領域として設定してください．  

これで [https://workshop.net.ict.e.titech.ac.jp/](https://workshop.net.ict.e.titech.ac.jp/) から春ゼミ開催案内へアクセスできるようになります．

## スクリーンショット
春ゼミ開催中はプログラムにインジケータが表示されます。

![サイト全体・Chromeスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/all.png "サイト全体・Chromeスクリーンショット")

