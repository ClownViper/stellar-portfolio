/* =====================================================================
   content.js — サイトの全文言・全データはこのファイルだけで管理します
   (Railsでいう config/locales/ja.yml + seeds.rb のイメージ)

   index.html は触らなくてOK。ここを編集して保存 → push するだけ。
   ===================================================================== */

const SITE = {
  // <title> タグ
  pageTitle: 'STELLAR PORTFOLIO — 観測デッキ',

  // ---- 上部バー ----
  topbar: {
    mark: 'S',                                  // 丸いロゴの中の1文字
    name: 'Stellar Portfolio',
    sub: 'RAILS ENGINEER // OBSERVATION DECK',
    meta: [
      // { k: ラベル, v: 値 } — v: 'CLOCK' にするとリアルタイム時計になる
      { k: 'LOCAL TIME', v: 'CLOCK', hideSm: true },
      { k: 'CORE SYSTEM', v: 'RAILS 8', hideSm: true },
      { k: 'CATALOGUED', v: '4 OBJECTS', hideSm: false }
    ]
  },

  // ---- ヒーロー ----
  hero: {
    eyebrow: 'Stellar Archive',
    title: '星図の間',
    titleEn: '— PLANETARIUM OF WORKS —',
    sub: 'これまでに作り上げたアプリケーションを、夜空の星座として記録しています。<br>星座を選ぶと、観測コンソールに詳細データが投影されます。'
  },

  // ---- 星図フレーム ----
  chart: {
    frameLabel: 'SKY CHART // EPOCH 2026.7',
    hint: '← → で星座を切替 / 星座か下のボタンをタップ'
  },

  // ---- 観測コンソールのセクション見出し ----
  console: {
    tagPrefix: 'OBSERVATION CONSOLE //',
    secLog: '観測記録 — Observation Log',
    secMag: '光度 — Magnitude',
    secSpectra: 'スペクトル — Tech Stack'
  },

  // ---- フッター ----
  footer: {
    links: [
      // href を実際のURLに差し替えてください
      { label: 'GitHub',      href: '#' },
      { label: 'BOOTH',       href: '#' },
      { label: 'Gumroad',     href: '#' },
      { label: 'X (Twitter)', href: '#' }
    ],
    copy: '© 2026 DAISUKE OBSERVATORY<br>ALL CONSTELLATIONS BUILT WITH RUBY ON RAILS'
  }
};

/* =====================================================================
   プロジェクト(星座)データ
   1件 = 1星座。追加・削除・並び替え自由。

   各項目:
   - code       : 表示用のカタログ番号(自由な文字列)
   - name       : アプリ名
   - nameEn     : ラテン語風の英名(雰囲気用、自由)
   - constLabel : 星座名(「◯◯座」)
   - tag        : 1〜2文の紹介文
   - icon       : 絵文字1つ
   - color      : この星座のテーマカラー(hex)
   - objClass   : ステータスバッジの文言
   - log        : 機能・特徴(観測記録として表示)
   - mags       : スキルバー [ラベル, 0-100]
   - spectra    : 技術スタックのタグ
   - links      : ボタン。href付き=リンク / disabled:true=グレー表示
   - stars      : 星の座標 [x, y, 大きさ] (星図は 1000x520)
   - edges      : 星をつなぐ線 [星のindex, 星のindex]
   - label      : 星座名を表示する位置 [x, y]
   ===================================================================== */

const PROJECTS = [
  {
    code: 'OBJ-2024-α',
    name: '積読マイニング',
    nameEn: 'BIBLIOTHECA',
    constLabel: 'としょ座',
    tag: '積読を「資産」に変える本棚管理RPG。バーコードでスキャンした本が、夜空の資産として積み上がる。',
    icon: '📚',
    color: '#f0c453',
    objClass: 'Template ★ On Sale',
    log: [
      'バーコードスキャンで秒速登録(html5-qrcode + OpenBD API)',
      '未読本を「資産」として可視化するダッシュボード',
      '読了チャレンジ機能で積読を消化',
      'PWA対応、オフラインでも本棚を閲覧可能'
    ],
    mags: [['RAILS', 90], ['UI/UX', 78], ['DATA MODEL', 68], ['AUTOMATION', 55]],
    spectra: ['Rails 8', 'Hotwire', 'html5-qrcode', 'OpenBD API', 'PWA'],
    links: [{ label: 'BOOTHで見る', href: '#' }],
    stars: [[120,160,3.2],[175,120,4],[235,150,3.4],[175,185,2.6],[290,115,3]],
    edges: [[0,1],[1,2],[2,3],[3,0],[2,4]],
    label: [200, 225]
  },
  {
    code: 'OBJ-2024-β',
    name: 'HideLedger',
    nameEn: 'FILUM',
    constLabel: 'いと座',
    tag: 'レザークラフト工房のための原価・在庫管理ツール。素材から製品へ、一本の糸が縫い上げる帳簿。',
    icon: '🧵',
    color: '#d99a6c',
    objClass: 'Template ★ On Sale',
    log: [
      '素材 → 商品の原価を自動計算・利益率を表示',
      '素材ごとの閾値で在庫アラート',
      'CSVエクスポートで会計ソフト連携',
      '多言語対応(i18n)で海外販売にも対応'
    ],
    mags: [['RAILS', 85], ['UI/UX', 65], ['DATA MODEL', 88], ['AUTOMATION', 50]],
    spectra: ['Rails 8', 'Devise', 'ActiveStorage', 'i18n', 'Kaminari'],
    links: [
      { label: 'BOOTHで見る', href: '#' },
      { label: 'Gumroadで見る', href: '#' }
    ],
    stars: [[690,110,2.8],[745,90,3.6],[800,120,3],[840,170,3.4],[795,205,2.6],[880,95,2.4]],
    edges: [[0,1],[1,2],[2,3],[3,4],[2,5]],
    label: [790, 245]
  },
  {
    code: 'OBJ-2025-γ',
    name: '農業帳簿-レシート管理',
    nameEn: 'GRANUM',
    constLabel: 'いなほ座',
    tag: 'レシート1枚から始まるAI記帳ツール。撮影した領収書が、実る稲穂のように帳簿へ積もる。',
    icon: '🌾',
    color: '#8fd49a',
    objClass: 'Test site is live',
    log: [
      'Gemini Flash-Lite OCRでレシートを自動仕訳',
      '日本の農業税務カテゴリに完全対応したいがまだです',
      'ベンダー(取引先)を自動識別・重複排除',
      'Stimulus + getUserMediaのカメラ撮影UI',
      'CSVとかちゃんと作ったら完成だけど、今はただのレシート管理'
    ],
    mags: [['RAILS', 82], ['UI/UX', 70], ['DATA MODEL', 90], ['AUTOMATION', 93]],
    spectra: ['Rails 8', 'Gemini Flash-Lite', 'Neon', 'Render', 'Stimulus', 'getUserMedia'],
    links: [
      { label: 'BOOTHで見る', href: '#' },
      { label: 'Gumroadで見る', href: '#' }
    ],
    links: [{ label: 'テストサイト', href: 'https://receipt-manager-pluk.onrender.com' }],
    stars: [[190,430,3],[220,380,2.6],[250,330,3.4],[280,285,3.8],[235,300,2.4],[315,300,2.6],[305,255,2.2]],
    edges: [[0,1],[1,2],[2,3],[3,4],[3,5],[3,6]],
    label: [255, 470]
  },
  {
    code: 'OBJ-2026-δ',
    name: 'Slackニュースbot',
    nameEn: 'AURORA MATUTINA',
    constLabel: 'あけぼの座',
    tag: '毎朝、Slackに"知りたい"を届ける配信bot。夜明けの光をテーマに、その日のニュースを照らす。',
    icon: '📰',
    color: '#ffab7e',
    objClass: 'Test site is live',
    log: [
      'Gemini Flash-Liteで日本語ニュースを要約',
      '「morning cafeteria」テーマのダッシュボードUI',
      'GitHub Actionsで毎朝の配信を完全自動化',
      'Render + Neonで低コスト運用',
      'スマホ対応はしてねぇです'
    ],
    mags: [['RAILS', 75], ['UI/UX', 80], ['DATA MODEL', 62], ['AUTOMATION', 92]],
    spectra: ['Rails 8', 'Gemini Flash-Lite', 'Neon', 'Render', 'GitHub Actions'],
    links: [
      { label: 'BOOTHで見る', href: '#' },
      { label: 'Gumroadで見る', href: '#' }
    ],
    links: [{ label: 'テストサイト', href: 'https://slack-news-bot-3q2x.onrender.com' }],
    stars: [[640,420,2.6],[720,395,3.8],[800,420,2.6],[690,350,2.8],[750,350,2.8],[720,310,3.2]],
    edges: [[0,1],[1,2],[1,3],[1,4],[3,5],[4,5]],
    label: [720, 465]
  }
];
