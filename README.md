![](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/website/images/logo.png)

# .net Spring Workshop（通称：春ゼミ）

春ゼミ開催案内のWebサイトを管理するリポジトリです．
過去の開催は [Releases](https://github.com/yamaoka-kitaguchi-lab/spring-workshop/releases) を確認してください．

1. **main ブランチは保護されています．** 直接プッシュ `git push origin main` はできません
1. main ブランチへローカルの変更を反映するにはプルリクエストを提出してください．なお，リクエストを承認し main ブランチへマージできるのは [net-root](https://github.com/orgs/yamaoka-kitaguchi-lab/teams/net-root) チームメンバーのみであり，さらにこれは以下2条件をクリアした場合に限られます:
    - **プルリクエスト作成時に自動実行されるテストをすべて通過すること**
    - **net-root によるコードレビューを経ること**
1. main ブランチへのマージ後，自動でWebサイトがビルドされ成果物が`gh-pages`ブランチにデプロイされます

![春ゼミトップ・Safariスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/safari.png "春ゼミトップ・Safariスクリーンショット")

### development
[yarn](https://yarnpkg.com/en/) が必要です．
```
% yarn
% yarn build
```
あるいは，ローカルに [Node.js](https://nodejs.org/en/) 環境が整っていない場合は，[docker compose](https://docs.docker.com/compose/) でビルドすることもできます．
```
% docker compose up --force-recreate pug
% docker compose up --force-recreate web watch
```

## 年次更新の手順
年ごとに更新が必要な情報（開催案内やプログラムなど）はすべて [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring.workshop.net.ict.e.titech.ac.jp/blob/main/spring-workshop/_config.pug) にまとまっています．

### 1. 設定ファイルの編集
設定ファイル [spring-workshop/_config.pug](https://github.com/yamaoka-kitaguchi-lab/spring.workshop.net.ict.e.titech.ac.jp/blob/main/spring-workshop/_config.pug) をエディタで開いて編集してください.

#### ページタイトル
```
- let page_title =  '.net Spring Workshop 2023 | 東京工業大学 山岡研究室'
```

#### OGP
SNS投稿時に表示されるコンテンツの定義です．*title* だけ修正してください．

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

### 2. HTMLファイルの生成
ローカルでWebサイトをビルドしHTMLファイルを生成するには，[Node.js](https://nodejs.org/en/) もしくは [Docker](https://www.docker.com/) が必要になります．  

以下コマンドを実行し，問題なくビルドが通ることを確認したら，mainブランチへプッシュしてください．

#### Node.js環境
```
% npm install -g yarn
% yarn
% yarn run build
```

#### Docker環境
[Docker Compose](https://docs.docker.com/compose/) をインストールしてください．
```
% docker compose up --force-recreate pug
```

### 3. デプロイ先リポジトリの公開
mainブランチへプッシュすると，GitHub Actionsにより自動でビルドされ，同リポジトリ内の`gh-pages`ブランチに成果物が展開されます.

GitHub Pagesにより, `gh-pages`ブランチの`/(root)`以下が, https://spring.workshop.net.ict.e.titech.ac.jp に公開されます.

## スクリーンショット
春ゼミ開催中はプログラムにインジケータが表示されます。

![サイト全体・Chromeスクリーンショット](https://raw.githubusercontent.com/yamaoka-kitaguchi-lab/spring-workshop/screenshot/all.png "サイト全体・Chromeスクリーンショット")

