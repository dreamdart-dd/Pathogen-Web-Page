const languageButtons = [
  ["ko", "한국어"],
  ["en", "English"],
  ["ja", "日本語"],
  ["zh-CN", "简体中文"],
  ["zh-TW", "繁體中文"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["pt", "Português"],
  ["ru", "Русский"],
  ["es", "Español"],
];

const content = {
  en: {
    hero: {
      kicker: "Solo-developed deck-building roguelike",
      title: "Pathogen",
      copy: "Extract Essence from pathogens, build powerful synergies, and survive the Specter by reaching the target score within seven turns.",
      trailer: "Watch Trailer",
      features: "Explore Features",
    },
    facts: {
      genre: { label: "Genre", value: "Deck-building roguelike" },
      platform: { label: "Platform", value: "PC, Steam" },
      os: { label: "OS", value: "Windows" },
      release: { label: "Early Access", value: "Q4 2026" },
      developer: { label: "Developer", value: "DREAMDART" },
    },
    overview: {
      kicker: "About the game",
      title: "A deck-building roguelike about surviving seven turns.",
      body1: "Pathogen is a deck-building roguelike where you must reach the target score within seven turns to survive.",
      body2: "Each card loses Health at the end of the turn, so the order you play cards, how long you keep them on the board, and when you sacrifice them all become part of the strategy.",
    },
    trailerSection: {
      kicker: "Trailer",
      title: "Watch Pathogen in action",
      body: "Feel the thrill of standing on the edge between survival and death, escaping by the narrowest margin.",
    },
    story: {
      kicker: "Story",
      title: "A revenge story told through pathogens and Essence.",
      body1: "In a fictional imperialist nation, a secret military research program conducted illegal experiments on convicted criminals to develop supernatural military technologies such as teleportation, intangibility, and telekinesis.",
      body2: "Years later, one test subject returns as a vengeful Specter. Instead of killing the scientists responsible, it abducts the doctors, including you, and orders them to cultivate powerful pathogens and extract their Essence.",
      note: "After winning a run, you may witness the memories of the test subjects. Choice-based events reveal their pain, trauma, and emotions while gradually uncovering the truth behind the Specter.",
    },
    features: {
      kicker: "Game features",
      title: "Card order, gene tags, and sacrifice shape every run.",
      subtitle: "Pathogen combines easy-to-read cards with systems that reward planning several turns ahead.",
      items: [
        { title: "Card effect synergies", body: "Every card has its own ability. Combine effects such as Health recovery, Essence gain, and ally strengthening to build powerful chains." },
        { title: "A puzzle-like card order system", body: "Essence is gained at the end of each turn, but all cards lose 1 Health. Plan which cards should stay alive, which should fall, and when each effect matters most." },
        { title: "Gene tag bonuses", body: "Place enough cards with the same Gene Tag to activate bonuses that work together with card abilities and Artifacts." },
        { title: "Sacrifice Summoning", body: "Sacrifice cards to summon stronger ones, trigger rewards, free board space, and turn spent cards into part of your next play." },
      ],
    },
    difference: {
      kicker: "What makes Pathogen different",
      title: "Less hand matching, more deliberate deck control.",
      subtitle: "Luck still exists, but Pathogen gives players more ways to influence their build and recover from difficult draws.",
      items: [
        { title: "Strategy over luck", body: "Pathogen does not require poker-like hand matching. Careful planning and decision-making can greatly improve your chance of survival." },
        { title: "More ways to shape your deck", body: "Shop items can remove unwanted cards, and Conjugation Experiments can fuse cards into new pathogens through discovered or hidden recipes." },
        { title: "Choose the deck you want to build", body: "The demo includes two playable decks, while the full release is planned to include eight or more." },
        { title: "Huge combo turns", body: "Most cards produce modest Essence on their own, but strong synergies can grow a turn into tens or hundreds of thousands of points." },
        { title: "Cards matter even in your hand", body: "DNA Modification Packs can grant effects that remain active from your hand, while cards on the field can strengthen cards you have not played yet." },
      ],
    },
    gallery: {
      kicker: "Screenshots",
      title: "Board states, boss pressure, and reward choices.",
      hint: "Click a screenshot to enlarge it.",
      items: [
        "Plan the early board while each pathogen's Health counts down.",
        "Survive dangerous encounters and turn fragile cards into decisive Essence gains.",
        "Choose DNA modifications that can change the value of cards before they are played.",
      ],
    },
    cta: {
      kicker: "Can you survive?",
      title: "Extract Essence and outlast the Specter.",
      body: "Pathogen is currently in development. The full story, pacing, and narrative flow will be refined before release.",
      button: "Watch Trailer",
    },
    press: {
      kicker: "Press copy",
      title: "One-page game introduction",
      intro: "Copy the summary below for articles, store pages, or creator outreach.",
      button: "Copy summary",
      copied: "Copied",
      body: "Pathogen is a solo-developed deck-building roguelike for PC and Steam, planned for Early Access in Q4 2026. In each run, players cultivate pathogens, extract Essence, and try to reach the target score within seven turns. The premise is simple to understand, but every turn asks a sharp question: which card should live, which card should die, and how close to failure are you willing to play?\n\nUnlike card games built around matching a lucky hand, Pathogen focuses on planning, sequencing, and deck control. Every card loses Health at the end of the turn, which turns the board into a puzzle of timing and sacrifice. A card that looks weak by itself can become the start of a massive chain when combined with Health recovery, Essence gain, Gene Tag bonuses, Artifacts, Sacrifice Summoning, fusion recipes, and DNA manipulation.\n\nThe result is a game about building toward a powerful moment. Most cards create only a small amount of Essence on their own, but carefully prepared synergies can explode into tens or hundreds of thousands of points in a single turn. Players can remove unwanted cards, fuse cards through Conjugation Experiments, discover recipes in the Fusion Codex, and use DNA effects that can activate even while a card remains in hand. The goal is to let players feel that a difficult run can be overcome through their own build and decisions.\n\nPathogen's story takes place in a fictional imperialist nation where a secret military program performed illegal experiments on convicted criminals to create supernatural military technologies such as teleportation, intangibility, and telekinesis. Years later, one of the test subjects returns as a vengeful Specter. Instead of killing the doctors responsible, it abducts them, including the player, and forces them to cultivate powerful pathogens and extract Essence. No one knows why the Specter wants Essence, and surviving is the only immediate choice.\n\nAfter winning a run, players may witness memory events from the test subjects who were experimented on. These choice-based events force the Doctor to relive pain, trauma, and impossible moral dilemmas. Like a grim trolley problem, every choice leads to a cost, but also a reward. As the player continues, the fragmented memories gradually connect and reveal why the Specter kidnapped the doctors and what Essence truly means.\n\nThe demo includes two playable starting decks, while the full release is planned to include eight or more. Pathogen is developed by DREAMDART.",
    },
    modal: { close: "Close screenshot" },
    footer: "Pathogen - DREAMDART. Static multilingual game introduction page.",
  },
  ko: {
    hero: { kicker: "1인 개발 덱빌딩 로그라이크", title: "Pathogen", copy: "병원체에서 에센스를 추출하고 강력한 시너지를 만들며, 7턴 안에 목표 점수에 도달해 스펙터에게서 살아남으세요.", trailer: "트레일러 보기", features: "특징 보기" },
    facts: { genre: { label: "장르", value: "덱빌딩 로그라이크" }, platform: { label: "플랫폼", value: "PC, Steam" }, os: { label: "OS", value: "Windows" }, release: { label: "얼리 액세스", value: "2026년 4분기" }, developer: { label: "개발", value: "DREAMDART" } },
    overview: { kicker: "게임 소개", title: "7턴 안에 살아남아야 하는 덱빌딩 로그라이크.", body1: "Pathogen은 7턴 안에 목표 점수에 도달해야 살아남을 수 있는 덱빌딩 로그라이크입니다.", body2: "턴이 끝날 때마다 모든 카드의 체력이 줄어들기 때문에, 카드를 내는 순서와 보드에 남겨둘 시간, 희생할 타이밍이 모두 전략이 됩니다." },
    trailerSection: { kicker: "트레일러", title: "Pathogen의 플레이를 영상으로 확인하세요", body: "생존과 죽음의 경계에 서서 아슬아슬하게 살아남는 스릴을 느끼세요!" },
    story: { kicker: "스토리", title: "병원체와 에센스를 통해 펼쳐지는 복수의 이야기.", body1: "가상의 제국주의 국가에서 비밀 군사 연구 프로그램은 범죄자를 대상으로 순간이동, 비물질화, 염동력 같은 초자연적 군사 기술을 개발하기 위한 불법 실험을 진행했습니다.", body2: "수년 뒤, 한 실험체가 복수심에 불타는 스펙터가 되어 돌아옵니다. 그는 책임자들을 죽이는 대신 당신을 포함한 의사들을 납치하고, 강력한 병원체를 배양해 에센스를 추출하라고 명령합니다.", note: "런에서 승리하면 실험체들의 기억을 목격할 수 있습니다. 선택형 이벤트는 그들의 고통과 트라우마, 감정을 보여주며 스펙터의 진실을 조금씩 드러냅니다." },
    features: { kicker: "게임 특징", title: "카드 순서, 유전자 태그, 희생이 매 런을 바꿉니다.", subtitle: "Pathogen은 한눈에 읽히는 카드와 몇 턴 앞을 계획하게 만드는 시스템을 결합했습니다.", items: [{ title: "카드 효과 시너지", body: "각 카드는 고유한 능력을 가집니다. 체력 회복, 에센스 증가, 아군 강화 같은 효과를 조합해 강력한 연쇄 효과를 만드세요." }, { title: "카드 순서가 중요한 퍼즐식 전개", body: "턴 종료 시 에센스를 얻지만 모든 카드는 체력을 1 잃습니다. 어떤 카드를 살려둘지, 어떤 카드를 무덤으로 보낼지, 어느 타이밍에 효과를 활용할지 계획해야 합니다." }, { title: "유전자 태그 보너스", body: "같은 유전자 태그를 가진 카드를 충분히 배치하면 카드 능력과 아티팩트와 함께 작동하는 강력한 보너스가 발동합니다." }, { title: "희생 소환", body: "카드를 희생해 더 강한 카드를 소환하고, 보상을 발동시키고, 보드 공간을 비우며, 이미 역할을 끝낸 카드도 다음 전략의 일부로 활용하세요." }] },
    difference: { kicker: "Pathogen의 차별점", title: "패 맞추기보다 깊은 계획과 덱 통제.", subtitle: "운은 존재하지만, Pathogen은 플레이어가 빌드를 조정하고 어려운 드로우를 극복할 방법을 더 많이 제공합니다.", items: [{ title: "운보다 전략", body: "Pathogen은 포커처럼 특정 패를 맞추는 게임이 아닙니다. 치밀한 계획과 판단이 생존 확률을 크게 높입니다." }, { title: "덱을 조정하는 다양한 방법", body: "상점 아이템으로 원치 않는 카드를 제거하고, 접합 실험으로 발견한 레시피나 숨겨진 규칙에 따라 카드를 새로운 병원체로 융합할 수 있습니다." }, { title: "원하는 덱을 선택해 성장", body: "데모에는 2개의 플레이 가능한 덱이 있으며, 정식 출시 버전에는 8개 이상의 덱이 포함될 예정입니다." }, { title: "거대한 콤보 턴", body: "대부분의 카드는 단독으로는 적은 에센스를 만들지만, 강력한 시너지는 한 턴의 점수를 수만, 수십만까지 끌어올릴 수 있습니다." }, { title: "손패에서도 의미 있는 카드", body: "DNA 변형 팩은 손패에 있어도 유지되는 효과를 부여할 수 있고, 필드의 카드는 아직 내지 않은 카드를 강화할 수 있습니다." }] },
    gallery: { kicker: "스크린샷", title: "보드 상황, 보스의 압박, 보상 선택.", hint: "스크린샷을 클릭하면 크게 볼 수 있습니다.", items: ["각 병원체의 체력이 줄어드는 동안 초반 보드를 설계하세요.", "위험한 전투에서 살아남고 연약한 카드를 결정적인 에센스 획득으로 바꾸세요.", "카드를 내기 전부터 카드의 가치를 바꾸는 DNA 변형을 선택하세요."] },
    cta: { kicker: "살아남을 수 있을까요?", title: "에센스를 추출하고 스펙터에게서 살아남으세요.", body: "Pathogen은 현재 개발 중입니다. 전체 스토리, 전개 속도, 서사 흐름은 출시 전까지 계속 다듬어질 예정입니다.", button: "트레일러 보기" },
    press: { kicker: "보도자료용 문구", title: "한 페이지 게임 소개", intro: "기사, 블로그, SNS 등 복사하여 자유롭게 사용하세요.", button: "소개문 복사", copied: "복사 완료", body: "Pathogen은 1인 개발자 DREAMDART가 개발 중인 PC 및 Steam용 덱빌딩 로그라이크입니다. 2026년 4분기 얼리 액세스를 목표로 하며, 플레이어는 병원체를 배양하고 정수(Essence)를 추출해 7턴 안에 목표 점수에 도달해야 합니다. 규칙은 직관적이지만, 매 턴마다 어떤 카드를 살리고, 어떤 카드를 희생하며, 얼마나 위험한 선까지 밀어붙일지 선택해야 합니다.\n\nPathogen의 핵심은 운보다 전략이 강한 덱빌딩입니다. 포커처럼 특정 패를 맞추는 방식이 아니라, 카드의 순서와 수명, 희생 타이밍을 설계하는 게임입니다. 턴이 끝날 때마다 모든 카드의 체력이 줄어들기 때문에 보드는 매 턴 작은 퍼즐처럼 변합니다. 단독으로는 약해 보이는 카드도 체력 회복, 정수 증가, 유전자 태그 보너스, 아티팩트, 희생 소환, 융합 레시피, DNA 조작과 연결되면 폭발적인 연쇄 효과의 시작점이 됩니다.\n\n플레이어는 원하는 덱을 만들기 위해 원치 않는 카드를 제거하거나, 접합 실험으로 카드를 융합해 새로운 병원체를 만들 수 있습니다. 발견한 레시피를 따르면 특정 카드를 만들 수 있고, 아직 알 수 없는 조합은 숨겨진 규칙에 따라 예측하지 못한 결과를 낳습니다. 또한 DNA 조작을 통해 손패에 있는 카드도 강력한 효과를 발동하거나, 손패와 필드의 카드가 서로 연계되는 상황을 만들 수 있습니다.\n\n게임이 익숙해질수록 플레이어는 강력한 한방을 준비하게 됩니다. 대부분의 카드는 단독으로는 적은 정수만 만들어내지만, 제대로 준비된 시너지는 한 턴의 점수를 수만, 수십만까지 끌어올릴 수 있습니다. 아슬아슬하게 죽음의 경계에 서 있다가 마지막 순간에 계획한 콤보가 터지며 살아남는 경험이 Pathogen의 가장 큰 재미입니다.\n\n스토리는 가상의 제국주의 국가에서 벌어진 비밀 군사 실험을 배경으로 합니다. 국가는 범죄자를 대상으로 순간이동, 비물질화, 염동력 같은 초자연적 군사 기술을 개발하기 위한 불법 실험을 진행했습니다. 수년 뒤, 한 실험체가 복수심에 불타는 스펙터가 되어 돌아옵니다. 스펙터는 과학자들을 죽이는 대신 당신을 포함한 의사들을 납치하고, 강력한 병원체를 배양해 정수를 추출하라고 명령합니다. 스펙터가 왜 정수를 원하는지는 아무도 모릅니다. 살아남기 위해서는 명령을 따르는 수밖에 없습니다.\n\n런에서 승리하면 실험체들의 기억을 목격할 수 있습니다. 이 선택형 이벤트는 의사인 플레이어에게 그들의 고통, 트라우마, 감정을 다시 겪게 만들고, 도덕적으로 불가능한 선택을 강요합니다. 트롤리 문제처럼 어떤 선택도 완전히 옳지 않지만, 모든 선택은 보상으로 이어집니다. 플레이를 이어갈수록 흩어진 기억은 퍼즐처럼 연결되고, 스펙터가 왜 의사들을 납치했는지, 정수가 무엇을 의미하는지 조금씩 드러납니다.\n\n데모에는 다양한 빌드가 가능한 2개의 스타트 덱이 포함되며, 정식 버전에는 8개 이상의 덱이 포함될 예정입니다." },
    modal: { close: "스크린샷 닫기" },
    footer: "Pathogen - DREAMDART. 다국어 정적 게임 소개 페이지.",
  },
  ja: {
    hero: { kicker: "個人開発のデッキ構築ローグライク", title: "Pathogen", copy: "病原体からエッセンスを抽出し、強力なシナジーを組み上げ、7ターン以内に目標スコアへ到達してスペクターから生き延びましょう。", trailer: "トレーラーを見る", features: "特徴を見る" },
    facts: { genre: { label: "ジャンル", value: "デッキ構築ローグライク" }, platform: { label: "プラットフォーム", value: "PC, Steam" }, release: { label: "早期アクセス", value: "2026年第4四半期" }, developer: { label: "開発", value: "DREAMDART" } },
    overview: { kicker: "ゲーム紹介", title: "7ターンで生き残るデッキ構築ローグライク。", body1: "Pathogenは、7ターン以内に目標スコアへ到達しなければ生き残れないデッキ構築ローグライクです。", body2: "ターン終了時にすべてのカードの体力が減るため、カードを出す順番、盤面に残す時間、犠牲にするタイミングのすべてが戦略になります。" },
    trailerSection: { kicker: "トレーラー", title: "Pathogenのプレイを映像で見る", body: "病原体を召喚し、シナジーを重ね、ぎりぎりの生存スコアを目指すゲームの流れを確認できます。" },
    story: { kicker: "ストーリー", title: "病原体とエッセンスをめぐる復讐の物語。", body1: "架空の帝国主義国家で、秘密軍事研究計画は受刑者に違法な実験を行い、瞬間移動、非実体化、念動力などの超常的な軍事技術を開発しようとしていました。", body2: "数年後、被験者の一人が復讐に燃えるスペクターとして帰還します。彼は責任者を殺さず、あなたを含む医師たちを拉致し、強力な病原体を培養してエッセンスを抽出するよう命じます。", note: "ランに勝利すると、被験者たちの記憶を目撃することがあります。選択型イベントは彼らの苦痛、トラウマ、感情を描きながら、スペクターの真実を少しずつ明かしていきます。" },
    features: { kicker: "ゲームの特徴", title: "カード順、遺伝子タグ、犠牲がランを変える。", subtitle: "Pathogenは読みやすいカード表現と、数ターン先を計画したくなるシステムを組み合わせています。", items: [{ title: "カード効果のシナジー", body: "各カードには固有の能力があります。体力回復、エッセンス獲得、味方の強化などを組み合わせ、強力な連鎖を作りましょう。" }, { title: "カード順が鍵になるパズル性", body: "ターン終了時にエッセンスを得ますが、すべてのカードは体力を1失います。どのカードを生かし、どのカードを墓地へ送り、いつ効果を活かすかを計画します。" }, { title: "遺伝子タグボーナス", body: "同じ遺伝子タグを持つカードを十分に配置すると、カード能力やアーティファクトと連動する強力なボーナスが発動します。" }, { title: "犠牲召喚", body: "カードを犠牲にしてより強いカードを召喚し、報酬を発動させ、盤面を空け、役目を終えたカードも次の一手に変えます。" }] },
    difference: { kicker: "Pathogenの特徴", title: "役作りよりも、計画とデッキ制御。", subtitle: "運の要素はありますが、Pathogenではビルドを調整し、不利なドローから立て直す手段が多く用意されています。", items: [{ title: "運より戦略", body: "Pathogenはポーカーのように特定の役をそろえるゲームではありません。綿密な計画と判断が生存率を大きく高めます。" }, { title: "デッキを整える多彩な手段", body: "ショップアイテムで不要なカードを取り除き、接合実験で発見済みのレシピや隠れたルールに従って新しい病原体へ融合できます。" }, { title: "作りたいデッキを選べる", body: "デモには2種類のプレイ可能なデッキがあり、正式版では8種類以上のデッキを予定しています。" }, { title: "巨大なコンボターン", body: "多くのカードは単体では少量のエッセンスしか生みませんが、強力なシナジーは1ターンのスコアを数万、数十万へ押し上げます。" }, { title: "手札でも意味を持つカード", body: "DNA改造パックは手札にある間も有効な効果を付与でき、盤面のカードがまだ出していないカードを強化することもあります。" }] },
    gallery: { kicker: "スクリーンショット", title: "盤面、ボスの圧力、報酬選択。", hint: "スクリーンショットをクリックすると拡大できます。", items: ["病原体の体力が減っていく中で序盤の盤面を組み立てます。", "危険な戦闘を生き残り、脆いカードを決定的なエッセンス獲得へ変えます。", "カードを出す前から価値を変えるDNA改造を選びます。"] },
    cta: { kicker: "生き残れますか？", title: "エッセンスを抽出し、スペクターに抗え。", body: "Pathogenは現在開発中です。完全な物語、展開のテンポ、ナラティブの流れはリリースまでにさらに調整されます。", button: "トレーラーを見る" },
    press: { kicker: "プレス向けコピー", title: "1ページでわかるゲーム紹介", intro: "記事、ストアページ、クリエイター向け資料に使える概要をコピーできます。", button: "概要をコピー", copied: "コピーしました", body: "Pathogenは、DREAMDARTが個人開発しているPC / Steam向けデッキ構築ローグライクです。2026年第4四半期の早期アクセスを予定しています。プレイヤーは病原体を培養してエッセンスを抽出し、7ターン以内に目標スコアへ到達してスペクターから生き残らなければなりません。\n\n本作はポーカーのような役作りではなく、戦略的な計画に焦点を当てています。ターン終了時にカードの体力が減るため、カードを出す順番、盤面に残す時間、犠牲召喚のタイミングを慎重に判断する必要があります。カード能力、遺伝子タグボーナス、アーティファクト、融合レシピ、DNA改造パックが組み合わさることで、大きなコンボターンと能動的なデッキ調整が可能になります。\n\n物語の舞台は、架空の帝国主義国家で行われた秘密軍事実験です。受刑者を対象に超常的な軍事技術を開発しようとした違法実験の後、被験者の一人が復讐に燃えるスペクターとなって戻り、当時の医師たちに病原体の培養とエッセンス抽出を強要します。ランに勝利すると、選択型の記憶イベントを通じて被験者たちの苦痛とスペクターの真実が徐々に明かされます。\n\nデモには2種類のプレイ可能なデッキが収録され、正式版では8種類以上のデッキを予定しています。" },
    modal: { close: "スクリーンショットを閉じる" },
    footer: "Pathogen - DREAMDART。多言語対応の静的ゲーム紹介ページ。",
  },
};

content["zh-CN"] = {
  ...content.en,
  hero: { kicker: "单人开发的牌组构筑 Roguelike", title: "Pathogen", copy: "从病原体中提取精华，构建强力协同，并在七个回合内达到目标分数，从幽灵手中活下来。", trailer: "观看预告片", features: "查看特色" },
  facts: { genre: { label: "类型", value: "牌组构筑 Roguelike" }, platform: { label: "平台", value: "PC, Steam" }, release: { label: "抢先体验", value: "2026 年第四季度" }, developer: { label: "开发者", value: "DREAMDART" } },
  overview: { kicker: "游戏介绍", title: "必须在七个回合内活下来的牌组构筑 Roguelike。", body1: "Pathogen 是一款牌组构筑 Roguelike。玩家必须在七个回合内达到目标分数，才能生存下去。", body2: "每个回合结束时，所有卡牌都会失去生命值。因此，出牌顺序、卡牌在场上的停留时间，以及牺牲卡牌的时机，都会成为策略的一部分。" },
  trailerSection: { kicker: "预告片", title: "观看 Pathogen 的实际玩法", body: "了解召唤病原体、叠加协同效果，并冲击临界生存分数的核心循环。" },
  story: { kicker: "故事", title: "围绕病原体与精华展开的复仇故事。", body1: "在一个虚构的帝国主义国家中，秘密军事研究计划对被定罪的罪犯进行了非法实验，试图开发瞬间移动、虚化、念动力等超自然军事技术。", body2: "多年后，一名实验体化作复仇的幽灵归来。它没有杀死相关科学家，而是绑架了包括你在内的医生，命令他们培养强大的病原体并提取精华。", note: "赢得一局后，你可能会看到实验体的记忆。基于选择的事件会展现他们的痛苦、创伤与情感，并逐渐揭开幽灵背后的真相。" },
  features: { kicker: "游戏特色", title: "卡牌顺序、基因标签与牺牲改变每一局。", subtitle: "Pathogen 采用易于理解的卡牌表现，同时通过系统设计鼓励玩家提前规划数个回合。", items: [{ title: "卡牌效果协同", body: "每张卡牌都有独特能力。组合生命恢复、精华获取、友方强化等效果，打造强力连锁。" }, { title: "带有解谜感的卡牌顺序", body: "回合结束时获得精华，但所有卡牌都会失去 1 点生命。你需要规划哪些卡牌应当存活、哪些该进入墓地，以及每个效果最适合发挥的时机。" }, { title: "基因标签奖励", body: "放置足够多相同基因标签的卡牌后，会触发可与卡牌能力和神器联动的强力奖励。" }, { title: "牺牲召唤", body: "牺牲卡牌以召唤更强的卡牌、触发奖励、腾出场地空间，并让已经完成作用的卡牌参与下一步策略。" }] },
  difference: { kicker: "Pathogen 的不同之处", title: "少一些凑牌型，多一些有意识的牌组控制。", subtitle: "运气依然存在，但 Pathogen 给玩家更多影响构筑、应对不利抽牌的方式。", items: [{ title: "策略胜过运气", body: "Pathogen 不要求像扑克一样凑出特定牌型。细致的规划与判断能显著提高生存机会。" }, { title: "更多调整牌组的方式", body: "商店道具可以移除不想要的卡牌，接合实验则能根据已发现或隐藏的配方，把卡牌融合成新的病原体。" }, { title: "选择想构筑的牌组", body: "试玩版包含两个可玩牌组，完整版计划加入八个或更多牌组。" }, { title: "巨大的连击回合", body: "大多数卡牌单独产生的精华有限，但强力协同可以把单回合分数推到数万甚至数十万。" }, { title: "手牌中的卡牌也有意义", body: "DNA 改造包可以赋予在手牌中也保持生效的效果，而场上的卡牌也能强化尚未打出的卡牌。" }] },
  gallery: { kicker: "截图", title: "场面局势、Boss 压力与奖励选择。", hint: "点击截图可放大查看。", items: ["在每个病原体生命值倒计时的同时规划前期场面。", "从危险遭遇中存活下来，把脆弱卡牌转化为关键精华收益。", "选择能在打出前就改变卡牌价值的 DNA 改造。"] },
  cta: { kicker: "你能活下来吗？", title: "提取精华，熬过幽灵的追猎。", body: "Pathogen 目前仍在开发中。完整剧情、节奏与叙事流程将在发布前继续打磨。", button: "观看预告片" },
  press: { kicker: "媒体文案", title: "一页游戏介绍", intro: "可复制下方概要，用于报道、商店页面或创作者联络。", button: "复制概要", copied: "已复制", body: "Pathogen 是由 DREAMDART 单人开发的 PC 与 Steam 平台牌组构筑 Roguelike，计划于 2026 年第四季度开启抢先体验。玩家需要培养病原体并提取精华，在七个回合内达到目标分数，才能从幽灵手中生存下来。\n\n游戏强调战略规划，而不是扑克式的牌型匹配。每个回合结束时，卡牌生命值都会减少，因此玩家必须谨慎决定出牌顺序、卡牌在场上的停留时间，以及牺牲召唤的时机。卡牌能力、基因标签奖励、神器、融合配方和 DNA 改造包会相互结合，创造巨大的连击回合，并让玩家更主动地调整牌组。\n\n故事发生在一个虚构帝国主义国家的秘密军事实验之后。该计划曾对罪犯进行非法实验，试图开发超自然军事技术。多年后，一名实验体化作复仇的幽灵归来，强迫当年的医生培养病原体并提取精华。赢得一局后，玩家将通过选择型记忆事件逐渐了解实验体的痛苦与幽灵的真相。\n\n试玩版包含两个可玩牌组，完整版计划加入八个或更多牌组。" },
  modal: { close: "关闭截图" },
  footer: "Pathogen - DREAMDART。静态多语言游戏介绍页面。",
};

content["zh-TW"] = {
  ...content["zh-CN"],
  hero: { kicker: "單人開發的牌組構築 Roguelike", title: "Pathogen", copy: "從病原體中萃取精華，構築強力協同，並在七回合內達成目標分數，從幽靈手中活下來。", trailer: "觀看預告片", features: "查看特色" },
  facts: { genre: { label: "類型", value: "牌組構築 Roguelike" }, platform: { label: "平台", value: "PC, Steam" }, release: { label: "搶先體驗", value: "2026 年第 4 季" }, developer: { label: "開發者", value: "DREAMDART" } },
  overview: { kicker: "遊戲介紹", title: "必須在七回合內活下來的牌組構築 Roguelike。", body1: "Pathogen 是一款牌組構築 Roguelike。玩家必須在七回合內達成目標分數，才能生存下去。", body2: "每個回合結束時，所有卡牌都會失去生命值。因此，出牌順序、卡牌在場上的停留時間，以及犧牲卡牌的時機，都會成為策略的一部分。" },
  trailerSection: { kicker: "預告片", title: "觀看 Pathogen 的實際玩法", body: "了解召喚病原體、堆疊協同效果，並衝擊臨界生存分數的核心循環。" },
  story: { kicker: "故事", title: "圍繞病原體與精華展開的復仇故事。", body1: "在一個虛構的帝國主義國家中，秘密軍事研究計畫對被定罪的罪犯進行非法實驗，試圖開發瞬間移動、非實體化、念動力等超自然軍事技術。", body2: "多年後，一名實驗體化為復仇的幽靈歸來。它沒有殺死相關科學家，而是綁架了包括你在內的醫生，命令他們培養強大的病原體並萃取精華。", note: "贏得一局後，你可能會看見實驗體的記憶。選擇型事件會呈現他們的痛苦、創傷與情感，並逐漸揭開幽靈背後的真相。" },
  features: { kicker: "遊戲特色", title: "卡牌順序、基因標籤與犧牲改變每一局。", subtitle: "Pathogen 採用容易理解的卡牌表現，同時透過系統設計鼓勵玩家提前規劃數個回合。", items: [{ title: "卡牌效果協同", body: "每張卡牌都有獨特能力。組合生命恢復、精華獲取、友方強化等效果，打造強力連鎖。" }, { title: "帶有解謎感的卡牌順序", body: "回合結束時獲得精華，但所有卡牌都會失去 1 點生命。你需要規劃哪些卡牌應該存活、哪些該進入墓地，以及每個效果最適合發揮的時機。" }, { title: "基因標籤獎勵", body: "放置足夠多相同基因標籤的卡牌後，會觸發可與卡牌能力和神器聯動的強力獎勵。" }, { title: "犧牲召喚", body: "犧牲卡牌以召喚更強的卡牌、觸發獎勵、騰出場地空間，並讓已經完成作用的卡牌參與下一步策略。" }] },
  difference: { kicker: "Pathogen 的不同之處", title: "少一些湊牌型，多一些有意識的牌組掌控。", subtitle: "運氣依然存在，但 Pathogen 給玩家更多影響構築、應對不利抽牌的方式。", items: [{ title: "策略勝過運氣", body: "Pathogen 不要求像撲克一樣湊出特定牌型。細緻的規劃與判斷能顯著提高生存機會。" }, { title: "更多調整牌組的方式", body: "商店道具可以移除不想要的卡牌，接合實驗則能根據已發現或隱藏的配方，把卡牌融合成新的病原體。" }, { title: "選擇想構築的牌組", body: "試玩版包含兩個可玩牌組，完整版計畫加入八個或更多牌組。" }, { title: "巨大的連擊回合", body: "多數卡牌單獨產生的精華有限，但強力協同可以把單回合分數推到數萬甚至數十萬。" }, { title: "手牌中的卡牌也有意義", body: "DNA 改造包可以賦予在手牌中也保持生效的效果，而場上的卡牌也能強化尚未打出的卡牌。" }] },
  gallery: { kicker: "截圖", title: "場面局勢、Boss 壓力與獎勵選擇。", hint: "點擊截圖可放大查看。", items: ["在每個病原體生命值倒數的同時規劃前期場面。", "從危險遭遇中存活下來，把脆弱卡牌轉化為關鍵精華收益。", "選擇能在打出前就改變卡牌價值的 DNA 改造。"] },
  cta: { kicker: "你能活下來嗎？", title: "萃取精華，撐過幽靈的追獵。", body: "Pathogen 目前仍在開發中。完整劇情、節奏與敘事流程將在發布前繼續打磨。", button: "觀看預告片" },
  press: { kicker: "媒體文案", title: "一頁遊戲介紹", intro: "可複製下方概要，用於報導、商店頁面或創作者聯絡。", button: "複製概要", copied: "已複製", body: "Pathogen 是由 DREAMDART 單人開發的 PC 與 Steam 平台牌組構築 Roguelike，計畫於 2026 年第 4 季開啟搶先體驗。玩家需要培養病原體並萃取精華，在七回合內達成目標分數，才能從幽靈手中生存下來。\n\n遊戲強調策略規劃，而不是撲克式的牌型匹配。每個回合結束時，卡牌生命值都會減少，因此玩家必須謹慎決定出牌順序、卡牌在場上的停留時間，以及犧牲召喚的時機。卡牌能力、基因標籤獎勵、神器、融合配方和 DNA 改造包會相互結合，創造巨大的連擊回合，並讓玩家更主動地調整牌組。\n\n故事發生在一個虛構帝國主義國家的秘密軍事實驗之後。該計畫曾對罪犯進行非法實驗，試圖開發超自然軍事技術。多年後，一名實驗體化為復仇的幽靈歸來，強迫當年的醫生培養病原體並萃取精華。贏得一局後，玩家將透過選擇型記憶事件逐漸了解實驗體的痛苦與幽靈的真相。\n\n試玩版包含兩個可玩牌組，完整版計畫加入八個或更多牌組。" },
  modal: { close: "關閉截圖" },
  footer: "Pathogen - DREAMDART。靜態多語言遊戲介紹頁面。",
};

["fr", "de", "pt", "ru", "es"].forEach((lang) => {
  content[lang] = JSON.parse(JSON.stringify(content.en));
});

Object.assign(content.fr, {
  hero: { kicker: "Roguelike de deck-building développé en solo", title: "Pathogen", copy: "Extrayez de l'Essence à partir de pathogènes, créez de puissantes synergies et survivez au Spectre en atteignant le score cible en sept tours.", trailer: "Voir la bande-annonce", features: "Voir les fonctionnalités" },
  facts: { genre: { label: "Genre", value: "Deck-building roguelike" }, platform: { label: "Plateforme", value: "PC, Steam" }, release: { label: "Accès anticipé", value: "T4 2026" }, developer: { label: "Développeur", value: "DREAMDART" } },
  overview: { kicker: "Présentation du jeu", title: "Un roguelike de deck-building où il faut survivre en sept tours.", body1: "Pathogen est un roguelike de deck-building dans lequel vous devez atteindre le score cible en sept tours pour survivre.", body2: "À la fin de chaque tour, toutes les cartes perdent de la Santé. L'ordre de jeu, le temps passé sur le plateau et le moment du sacrifice deviennent donc des choix stratégiques." },
  trailerSection: { kicker: "Bande-annonce", title: "Découvrez Pathogen en action", body: "Observez la boucle de jeu principale : invoquer des pathogènes, accumuler des synergies et viser un score de survie obtenu de justesse." },
  story: { kicker: "Histoire", title: "Une histoire de vengeance portée par les pathogènes et l'Essence.", body1: "Dans une nation impérialiste fictive, un programme militaire secret a mené des expériences illégales sur des criminels condamnés afin de développer des technologies militaires surnaturelles comme la téléportation, l'intangibilité et la télékinésie.", body2: "Des années plus tard, l'un des sujets revient sous la forme d'un Spectre vengeur. Plutôt que de tuer les scientifiques responsables, il enlève les médecins, vous compris, et leur ordonne de cultiver de puissants pathogènes pour en extraire l'Essence.", note: "Après une victoire, vous pouvez découvrir les souvenirs des sujets d'expérience. Des événements à choix révèlent leur douleur, leurs traumatismes et leurs émotions, tout en dévoilant peu à peu la vérité sur le Spectre." },
  features: { kicker: "Fonctionnalités", title: "Ordre des cartes, tags génétiques et sacrifices façonnent chaque run.", subtitle: "Pathogen associe des cartes faciles à lire à des systèmes qui récompensent la planification sur plusieurs tours.", items: [{ title: "Synergies d'effets de cartes", body: "Chaque carte possède sa propre capacité. Combinez récupération de Santé, gain d'Essence et renforcement des alliés pour créer de puissantes chaînes." }, { title: "Un ordre de cartes proche du puzzle", body: "Vous gagnez de l'Essence à la fin du tour, mais toutes les cartes perdent 1 Santé. Planifiez quelles cartes garder en vie, lesquelles envoyer au Cimetière et quand chaque effet compte le plus." }, { title: "Bonus de tags génétiques", body: "Placez suffisamment de cartes avec le même tag génétique pour activer des bonus qui fonctionnent avec les capacités de cartes et les Artéfacts." }, { title: "Invocation par sacrifice", body: "Sacrifiez des cartes pour en invoquer de plus fortes, déclencher des récompenses, libérer de la place et transformer des cartes déjà utilisées en nouvelles opportunités." }] },
  difference: { kicker: "Ce qui distingue Pathogen", title: "Moins de combinaisons imposées, plus de contrôle réfléchi du deck.", subtitle: "La chance existe toujours, mais Pathogen offre davantage de moyens d'influencer son build et de se relever d'une mauvaise pioche.", items: [{ title: "La stratégie avant la chance", body: "Pathogen ne demande pas de former des mains comme au poker. Une planification précise et de bonnes décisions augmentent fortement vos chances de survie." }, { title: "Plus de façons de modeler le deck", body: "Les objets de boutique peuvent retirer des cartes indésirables, tandis que les expériences de conjugaison fusionnent des cartes en nouveaux pathogènes grâce à des recettes découvertes ou cachées." }, { title: "Choisissez le deck à développer", body: "La démo inclut deux decks jouables, et la version complète prévoit huit decks ou plus." }, { title: "Tours de combo gigantesques", body: "La plupart des cartes produisent peu d'Essence seules, mais de fortes synergies peuvent faire monter un tour à des dizaines ou centaines de milliers de points." }, { title: "Les cartes comptent même en main", body: "Les packs de modification ADN peuvent accorder des effets actifs depuis la main, tandis que les cartes en jeu renforcent celles que vous n'avez pas encore jouées." }] },
  gallery: { kicker: "Captures d'écran", title: "États du plateau, pression des boss et choix de récompenses.", hint: "Cliquez sur une capture pour l'agrandir.", items: ["Planifiez le début de partie pendant que la Santé de chaque pathogène diminue.", "Survivez à des affrontements dangereux et transformez des cartes fragiles en gains d'Essence décisifs.", "Choisissez des modifications ADN qui changent la valeur des cartes avant même qu'elles soient jouées."] },
  cta: { kicker: "Pouvez-vous survivre ?", title: "Extrayez l'Essence et survivez au Spectre.", body: "Pathogen est actuellement en développement. L'histoire complète, le rythme et le flux narratif seront affinés avant la sortie.", button: "Voir la bande-annonce" },
  press: { kicker: "Texte presse", title: "Présentation du jeu en une page", intro: "Copiez le résumé ci-dessous pour articles, pages de boutique ou prises de contact avec des créateurs.", button: "Copier le résumé", copied: "Copié", body: "Pathogen est un roguelike de deck-building pour PC et Steam, développé en solo par DREAMDART, avec un accès anticipé prévu au T4 2026. Les joueurs doivent cultiver des pathogènes, extraire de l'Essence et atteindre le score cible en sept tours pour survivre au Spectre.\n\nLe jeu met l'accent sur la planification stratégique plutôt que sur des combinaisons de cartes façon poker. Comme les cartes perdent de la Santé à la fin de chaque tour, les joueurs doivent choisir avec soin l'ordre de jeu, la durée de présence sur le plateau et le moment des invocations par sacrifice. Capacités de cartes, bonus de tags génétiques, Artéfacts, recettes de fusion et packs de modification ADN se combinent pour créer de grands tours de combo et offrir un meilleur contrôle du deck.\n\nL'histoire se déroule après des expériences militaires secrètes menées dans une nation impérialiste fictive. Le programme cherchait à développer des technologies militaires surnaturelles sur des criminels condamnés. Des années plus tard, l'un des sujets revient sous la forme d'un Spectre vengeur et force les médecins de l'époque à cultiver des pathogènes et à extraire de l'Essence. Après certaines victoires, des événements de mémoire à choix révèlent progressivement la souffrance des sujets et la vérité sur le Spectre.\n\nLa démo inclut deux decks jouables, tandis que la version complète prévoit huit decks ou plus." },
  modal: { close: "Fermer la capture" },
  footer: "Pathogen - DREAMDART. Page statique multilingue de présentation du jeu.",
});

Object.assign(content.de, {
  hero: { kicker: "Solo entwickeltes Deckbuilding-Roguelike", title: "Pathogen", copy: "Extrahiere Essenz aus Pathogenen, baue starke Synergien auf und überlebe den Specter, indem du in sieben Runden die Zielpunktzahl erreichst.", trailer: "Trailer ansehen", features: "Features ansehen" },
  facts: { genre: { label: "Genre", value: "Deckbuilding-Roguelike" }, platform: { label: "Plattform", value: "PC, Steam" }, release: { label: "Early Access", value: "Q4 2026" }, developer: { label: "Entwickler", value: "DREAMDART" } },
  overview: { kicker: "Über das Spiel", title: "Ein Deckbuilding-Roguelike, in dem du sieben Runden überleben musst.", body1: "Pathogen ist ein Deckbuilding-Roguelike, in dem du innerhalb von sieben Runden die Zielpunktzahl erreichen musst, um zu überleben.", body2: "Am Ende jeder Runde verlieren alle Karten Gesundheit. Dadurch werden Spielreihenfolge, Verweildauer auf dem Feld und Opferzeitpunkt zu zentralen strategischen Entscheidungen." },
  trailerSection: { kicker: "Trailer", title: "Pathogen in Aktion", body: "Sieh dir den Kernablauf an: Pathogene beschwören, Synergien stapeln und knapp die nötige Überlebenspunktzahl erreichen." },
  story: { kicker: "Geschichte", title: "Eine Rachegeschichte über Pathogene und Essenz.", body1: "In einer fiktiven imperialistischen Nation führte ein geheimes Militärprogramm illegale Experimente an verurteilten Kriminellen durch, um übernatürliche Militärtechnologien wie Teleportation, Unberührbarkeit und Telekinese zu entwickeln.", body2: "Jahre später kehrt eines der Testsubjekte als rachsüchtiger Specter zurück. Statt die verantwortlichen Wissenschaftler zu töten, entführt er die Ärzte, einschließlich dir, und zwingt sie, mächtige Pathogene zu kultivieren und Essenz zu extrahieren.", note: "Nach einem gewonnenen Run kannst du Erinnerungen der Testsubjekte erleben. Wahlbasierte Ereignisse zeigen Schmerz, Trauma und Emotionen und enthüllen nach und nach die Wahrheit über den Specter." },
  features: { kicker: "Features", title: "Kartenreihenfolge, Gen-Tags und Opfer formen jeden Run.", subtitle: "Pathogen verbindet leicht lesbare Karten mit Systemen, die Planung über mehrere Runden belohnen.", items: [{ title: "Synergien zwischen Karteneffekten", body: "Jede Karte hat eine eigene Fähigkeit. Kombiniere Heilung, Essenzgewinn und Verstärkungen, um starke Effektketten aufzubauen." }, { title: "Kartenreihenfolge wie ein Puzzle", body: "Am Rundenende erhältst du Essenz, aber alle Karten verlieren 1 Gesundheit. Plane, welche Karten am Leben bleiben, welche auf den Friedhof gehen und wann welcher Effekt am wichtigsten ist." }, { title: "Gen-Tag-Boni", body: "Lege genug Karten mit demselben Gen-Tag aus, um Boni zu aktivieren, die mit Kartenfähigkeiten und Artefakten zusammenarbeiten." }, { title: "Opferbeschwörung", body: "Opfere Karten, um stärkere Karten zu beschwören, Belohnungen auszulösen, Platz zu schaffen und verbrauchte Karten in den nächsten Spielzug einzubinden." }] },
  difference: { kicker: "Was Pathogen anders macht", title: "Weniger Handkombinationen, mehr bewusste Deckkontrolle.", subtitle: "Glück spielt weiterhin eine Rolle, doch Pathogen gibt dir mehr Möglichkeiten, deinen Build zu beeinflussen und schwierige Ziehphasen abzufangen.", items: [{ title: "Strategie vor Glück", body: "Pathogen verlangt keine pokerähnlichen Handkombinationen. Sorgfältige Planung und gute Entscheidungen erhöhen deine Überlebenschancen deutlich." }, { title: "Mehr Wege, dein Deck zu formen", body: "Shop-Gegenstände entfernen unerwünschte Karten, während Konjugationsexperimente Karten nach entdeckten oder versteckten Rezepten zu neuen Pathogenen verschmelzen." }, { title: "Wähle das Deck, das du entwickeln willst", body: "Die Demo enthält zwei spielbare Decks; für die Vollversion sind acht oder mehr Decks geplant." }, { title: "Riesige Komborunden", body: "Die meisten Karten erzeugen allein nur wenig Essenz, doch starke Synergien können eine Runde auf Zehn- oder Hunderttausende Punkte bringen." }, { title: "Karten zählen auch auf der Hand", body: "DNA-Modifikationspakete können Effekte verleihen, die auf der Hand aktiv bleiben, während Feldkarten noch nicht ausgespielte Karten stärken." }] },
  gallery: { kicker: "Screenshots", title: "Brettlagen, Bossdruck und Belohnungsentscheidungen.", hint: "Klicke auf einen Screenshot, um ihn zu vergrößern.", items: ["Plane dein frühes Brett, während die Gesundheit jedes Pathogens herunterzählt.", "Überlebe gefährliche Begegnungen und verwandle zerbrechliche Karten in entscheidende Essenzgewinne.", "Wähle DNA-Modifikationen, die den Wert von Karten schon vor dem Ausspielen verändern."] },
  cta: { kicker: "Kannst du überleben?", title: "Extrahiere Essenz und überlebe den Specter.", body: "Pathogen befindet sich derzeit in Entwicklung. Die vollständige Geschichte, das Tempo und der Erzählfluss werden bis zur Veröffentlichung weiter verfeinert.", button: "Trailer ansehen" },
  press: { kicker: "Pressetext", title: "Spielvorstellung auf einer Seite", intro: "Kopiere die Zusammenfassung unten für Artikel, Store-Seiten oder Creator-Outreach.", button: "Zusammenfassung kopieren", copied: "Kopiert", body: "Pathogen ist ein solo entwickeltes Deckbuilding-Roguelike für PC und Steam von DREAMDART, geplant für den Early Access in Q4 2026. Spieler müssen Pathogene kultivieren, Essenz extrahieren und innerhalb von sieben Runden die Zielpunktzahl erreichen, um den Specter zu überleben.\n\nDas Spiel konzentriert sich auf strategische Planung statt auf pokerähnliche Handkombinationen. Da Karten am Ende jeder Runde Gesundheit verlieren, müssen Spieler die Spielreihenfolge, die Verweildauer auf dem Feld und den Zeitpunkt von Opferbeschwörungen bewusst wählen. Kartenfähigkeiten, Gen-Tag-Boni, Artefakte, Fusionsrezepte und DNA-Modifikationspakete greifen ineinander, erzeugen große Komborunden und ermöglichen eine aktivere Kontrolle des Decks.\n\nDie Geschichte spielt nach geheimen Militärexperimenten in einer fiktiven imperialistischen Nation. Das Programm führte illegale Experimente an Kriminellen durch, um übernatürliche Militärtechnologien zu entwickeln. Jahre später kehrt eines der Testsubjekte als rachsüchtiger Specter zurück und zwingt die damaligen Ärzte, Pathogene zu kultivieren und Essenz zu extrahieren. Nach erfolgreichen Runs enthüllen wahlbasierte Erinnerungsereignisse nach und nach das Leid der Testsubjekte und die Wahrheit über den Specter.\n\nDie Demo enthält zwei spielbare Decks; für die Vollversion sind acht oder mehr Decks geplant." },
  modal: { close: "Screenshot schließen" },
  footer: "Pathogen - DREAMDART. Statische mehrsprachige Spielvorstellungsseite.",
});

Object.assign(content.pt, {
  hero: { kicker: "Roguelike de construção de baralho desenvolvido por uma pessoa", title: "Pathogen", copy: "Extraia Essência de patógenos, crie sinergias poderosas e sobreviva ao Espectro alcançando a pontuação alvo em sete turnos.", trailer: "Ver trailer", features: "Ver recursos" },
  facts: { genre: { label: "Gênero", value: "Deck-building roguelike" }, platform: { label: "Plataforma", value: "PC, Steam" }, release: { label: "Acesso antecipado", value: "4º trimestre de 2026" }, developer: { label: "Desenvolvedor", value: "DREAMDART" } },
  overview: { kicker: "Sobre o jogo", title: "Um roguelike de deck-building sobre sobreviver por sete turnos.", body1: "Pathogen é um roguelike de construção de baralho em que você precisa alcançar a pontuação alvo em sete turnos para sobreviver.", body2: "No fim de cada turno, todas as cartas perdem Vida. Por isso, a ordem de jogo, o tempo que cada carta fica no tabuleiro e o momento do sacrifício fazem parte da estratégia." },
  trailerSection: { kicker: "Trailer", title: "Veja Pathogen em ação", body: "Assista ao ciclo principal: invocar patógenos, acumular sinergias e buscar uma pontuação de sobrevivência no limite." },
  story: { kicker: "História", title: "Uma história de vingança contada por patógenos e Essência.", body1: "Em uma nação imperialista fictícia, um programa militar secreto realizou experimentos ilegais em criminosos condenados para desenvolver tecnologias militares sobrenaturais, como teletransporte, intangibilidade e telecinese.", body2: "Anos depois, uma das cobaias retorna como um Espectro vingativo. Em vez de matar os cientistas responsáveis, ele sequestra os médicos, incluindo você, e ordena que cultivem patógenos poderosos e extraiam sua Essência.", note: "Após vencer uma partida, você pode testemunhar as memórias das cobaias. Eventos baseados em escolhas revelam sua dor, seus traumas e emoções, enquanto mostram aos poucos a verdade sobre o Espectro." },
  features: { kicker: "Recursos do jogo", title: "Ordem das cartas, tags genéticas e sacrifícios moldam cada partida.", subtitle: "Pathogen combina cartas fáceis de entender com sistemas que recompensam planejamento para vários turnos.", items: [{ title: "Sinergias entre efeitos de cartas", body: "Cada carta tem uma habilidade própria. Combine recuperação de Vida, ganho de Essência e fortalecimento de aliados para criar cadeias poderosas." }, { title: "Ordem de cartas com sensação de quebra-cabeça", body: "Você ganha Essência no fim do turno, mas todas as cartas perdem 1 de Vida. Planeje quais cartas devem sobreviver, quais irão ao Cemitério e quando cada efeito será mais importante." }, { title: "Bônus de tags genéticas", body: "Coloque cartas suficientes com a mesma tag genética para ativar bônus que funcionam junto com habilidades de cartas e Artefatos." }, { title: "Invocação por sacrifício", body: "Sacrifique cartas para invocar outras mais fortes, ativar recompensas, liberar espaço no tabuleiro e transformar cartas já usadas em parte da próxima jogada." }] },
  difference: { kicker: "O que diferencia Pathogen", title: "Menos formar mãos, mais controle consciente do baralho.", subtitle: "A sorte ainda existe, mas Pathogen oferece mais formas de influenciar a construção e reagir a compras difíceis.", items: [{ title: "Estratégia acima da sorte", body: "Pathogen não exige formar mãos como no pôquer. Planejamento cuidadoso e boas decisões aumentam muito suas chances de sobrevivência." }, { title: "Mais formas de moldar o baralho", body: "Itens da loja removem cartas indesejadas, e Experimentos de Conjugação fundem cartas em novos patógenos por receitas descobertas ou ocultas." }, { title: "Escolha o baralho que deseja desenvolver", body: "A demo inclui dois baralhos jogáveis, enquanto a versão completa planeja oito ou mais." }, { title: "Turnos de combo enormes", body: "A maioria das cartas gera pouca Essência sozinha, mas sinergias fortes podem levar um turno a dezenas ou centenas de milhares de pontos." }, { title: "Cartas importam mesmo na mão", body: "Pacotes de Modificação de DNA podem conceder efeitos ativos na mão, enquanto cartas no campo fortalecem cartas que você ainda não jogou." }] },
  gallery: { kicker: "Capturas de tela", title: "Estados do tabuleiro, pressão de chefes e escolhas de recompensa.", hint: "Clique em uma captura para ampliar.", items: ["Planeje o início enquanto a Vida de cada patógeno diminui.", "Sobreviva a encontros perigosos e transforme cartas frágeis em ganhos decisivos de Essência.", "Escolha modificações de DNA que mudam o valor das cartas antes mesmo de serem jogadas."] },
  cta: { kicker: "Você consegue sobreviver?", title: "Extraia Essência e resista ao Espectro.", body: "Pathogen está em desenvolvimento. A história completa, o ritmo e o fluxo narrativo serão refinados antes do lançamento.", button: "Ver trailer" },
  press: { kicker: "Texto para imprensa", title: "Apresentação do jogo em uma página", intro: "Copie o resumo abaixo para artigos, páginas de loja ou contato com criadores.", button: "Copiar resumo", copied: "Copiado", body: "Pathogen é um roguelike de construção de baralho para PC e Steam, desenvolvido por uma pessoa sob o nome DREAMDART, com acesso antecipado planejado para o 4º trimestre de 2026. Os jogadores precisam cultivar patógenos, extrair Essência e alcançar a pontuação alvo em sete turnos para sobreviver ao Espectro.\n\nO jogo foca em planejamento estratégico em vez de combinações de mãos no estilo pôquer. Como as cartas perdem Vida ao fim de cada turno, os jogadores precisam decidir a ordem de jogo, quanto tempo cada carta fica no tabuleiro e o momento certo das invocações por sacrifício. Habilidades de cartas, bônus de tags genéticas, Artefatos, receitas de fusão e Pacotes de Modificação de DNA se combinam para criar grandes turnos de combo e dar mais controle sobre o baralho.\n\nA história acontece após experimentos militares secretos em uma nação imperialista fictícia. O programa realizou experiências ilegais em criminosos para desenvolver tecnologias militares sobrenaturais. Anos depois, uma das cobaias retorna como um Espectro vingativo e força os médicos envolvidos a cultivar patógenos e extrair Essência. Após vitórias, eventos de memória com escolhas revelam aos poucos o sofrimento das cobaias e a verdade sobre o Espectro.\n\nA demo inclui dois baralhos jogáveis, enquanto a versão completa planeja oito ou mais." },
  modal: { close: "Fechar captura" },
  footer: "Pathogen - DREAMDART. Página estática multilíngue de apresentação do jogo.",
});

Object.assign(content.ru, {
  hero: { kicker: "Коллекционный рогалик от соло-разработчика", title: "Pathogen", copy: "Извлекайте Эссенцию из патогенов, собирайте мощные синергии и переживите Призрака, набрав целевой счет за семь ходов.", trailer: "Смотреть трейлер", features: "Смотреть особенности" },
  facts: { genre: { label: "Жанр", value: "Коллекционный рогалик" }, platform: { label: "Платформа", value: "PC, Steam" }, release: { label: "Ранний доступ", value: "IV квартал 2026" }, developer: { label: "Разработчик", value: "DREAMDART" } },
  overview: { kicker: "Об игре", title: "Коллекционный рогалик, где нужно выжить за семь ходов.", body1: "Pathogen - это рогалик с построением колоды, где для выживания нужно набрать целевой счет за семь ходов.", body2: "В конце каждого хода все карты теряют здоровье, поэтому порядок розыгрыша, время на поле и момент жертвы становятся частью стратегии." },
  trailerSection: { kicker: "Трейлер", title: "Pathogen в действии", body: "Посмотрите основной цикл игры: призыв патогенов, наращивание синергий и борьбу за счет, которого едва хватает для выживания." },
  story: { kicker: "История", title: "История мести, рассказанная через патогены и Эссенцию.", body1: "В вымышленной империалистической стране секретная военная программа проводила незаконные эксперименты над осужденными преступниками, чтобы создать сверхъестественные военные технологии: телепортацию, неосязаемость и телекинез.", body2: "Годы спустя один из испытуемых возвращается как мстительный Призрак. Вместо того чтобы убить ответственных ученых, он похищает врачей, включая вас, и приказывает им выращивать мощные патогены и извлекать их Эссенцию.", note: "После победного забега вы можете увидеть воспоминания испытуемых. События с выбором раскрывают их боль, травмы и эмоции, постепенно показывая правду о Призраке." },
  features: { kicker: "Особенности игры", title: "Порядок карт, генные метки и жертвы меняют каждый забег.", subtitle: "Pathogen сочетает понятные карты с системами, которые вознаграждают планирование на несколько ходов вперед.", items: [{ title: "Синергии эффектов карт", body: "У каждой карты есть своя способность. Комбинируйте восстановление здоровья, получение Эссенции и усиление союзников, чтобы создавать мощные цепочки." }, { title: "Порядок карт как головоломка", body: "В конце хода вы получаете Эссенцию, но все карты теряют 1 здоровье. Планируйте, какие карты оставить в живых, какие отправить на Кладбище и когда важнее всего применить эффект." }, { title: "Бонусы генных меток", body: "Разместите достаточно карт с одной генной меткой, чтобы активировать бонусы, работающие вместе со способностями карт и Артефактами." }, { title: "Призыв через жертву", body: "Жертвуйте карты, чтобы призывать более сильные, получать награды, освобождать место на поле и превращать отработавшие карты в часть следующего хода." }] },
  difference: { kicker: "Чем отличается Pathogen", title: "Меньше сбора комбинаций, больше осознанного контроля колоды.", subtitle: "Удача все еще важна, но Pathogen дает больше способов влиять на билд и выходить из сложных розыгрышей.", items: [{ title: "Стратегия важнее удачи", body: "Pathogen не требует собирать комбинации как в покере. Точное планирование и решения значительно повышают шанс выжить." }, { title: "Больше способов менять колоду", body: "Предметы магазина убирают ненужные карты, а эксперименты конъюгации сливают карты в новые патогены по найденным или скрытым рецептам." }, { title: "Выберите колоду, которую хотите развивать", body: "В демо есть две игровые колоды, а в полной версии планируется восемь или больше." }, { title: "Огромные комбо-ходы", body: "Большинство карт сами по себе дают немного Эссенции, но сильные синергии могут поднять счет за ход до десятков или сотен тысяч." }, { title: "Карты важны даже в руке", body: "Пакеты модификации ДНК могут давать эффекты, активные из руки, а карты на поле усиливают еще не сыгранные карты." }] },
  gallery: { kicker: "Скриншоты", title: "Состояние поля, давление боссов и выбор наград.", hint: "Нажмите на скриншот, чтобы увеличить.", items: ["Планируйте раннее поле, пока здоровье каждого патогена убывает.", "Выживайте в опасных столкновениях и превращайте хрупкие карты в решающий прирост Эссенции.", "Выбирайте ДНК-модификации, меняющие ценность карт еще до розыгрыша."] },
  cta: { kicker: "Сможете выжить?", title: "Извлеките Эссенцию и переживите Призрака.", body: "Pathogen сейчас находится в разработке. Полная история, темп и повествование будут доработаны перед релизом.", button: "Смотреть трейлер" },
  press: { kicker: "Текст для прессы", title: "Описание игры на одной странице", intro: "Скопируйте краткое описание ниже для статей, страниц магазина или контакта с авторами контента.", button: "Скопировать описание", copied: "Скопировано", body: "Pathogen - это рогалик с построением колоды для PC и Steam от соло-разработчика DREAMDART. Ранний доступ запланирован на IV квартал 2026 года. Игрокам нужно выращивать патогены, извлекать Эссенцию и набрать целевой счет за семь ходов, чтобы пережить Призрака.\n\nИгра делает упор на стратегическое планирование, а не на покерный сбор комбинаций. В конце каждого хода карты теряют здоровье, поэтому игроки должны продумывать порядок розыгрыша, время пребывания карты на поле и момент призыва через жертву. Способности карт, бонусы генных меток, Артефакты, рецепты слияния и Пакеты модификации ДНК соединяются в большие комбо-ходы и дают больше контроля над колодой.\n\nИстория разворачивается после секретных военных экспериментов в вымышленной империалистической стране. Программа незаконно экспериментировала над преступниками, чтобы разработать сверхъестественные военные технологии. Годы спустя один из испытуемых возвращается как мстительный Призрак и заставляет причастных врачей выращивать патогены и извлекать Эссенцию. После победных забегов события воспоминаний с выбором постепенно раскрывают страдания испытуемых и правду о Призраке.\n\nВ демо входят две игровые колоды, а в полной версии планируется восемь или больше." },
  modal: { close: "Закрыть скриншот" },
  footer: "Pathogen - DREAMDART. Статическая многоязычная страница презентации игры.",
});

Object.assign(content.es, {
  hero: { kicker: "Roguelike de construcción de mazos desarrollado en solitario", title: "Pathogen", copy: "Extrae Esencia de los patógenos, crea poderosas sinergias y sobrevive al Espectro alcanzando la puntuación objetivo en siete turnos.", trailer: "Ver tráiler", features: "Ver características" },
  facts: { genre: { label: "Género", value: "Deck-building roguelike" }, platform: { label: "Plataforma", value: "PC, Steam" }, release: { label: "Acceso anticipado", value: "4.º trim. de 2026" }, developer: { label: "Desarrollador", value: "DREAMDART" } },
  overview: { kicker: "Acerca del juego", title: "Un roguelike de construcción de mazos sobre sobrevivir siete turnos.", body1: "Pathogen es un roguelike de construcción de mazos en el que debes alcanzar la puntuación objetivo en siete turnos para sobrevivir.", body2: "Al final de cada turno, todas las cartas pierden Salud. Por eso, el orden en que juegas las cartas, el tiempo que permanecen en el tablero y el momento de sacrificarlas forman parte de la estrategia." },
  trailerSection: { kicker: "Tráiler", title: "Mira Pathogen en acción", body: "Observa el ciclo principal: invocar patógenos, acumular sinergias y buscar una puntuación de supervivencia al límite." },
  story: { kicker: "Historia", title: "Una historia de venganza contada a través de patógenos y Esencia.", body1: "En una nación imperialista ficticia, un programa militar secreto realizó experimentos ilegales con criminales condenados para desarrollar tecnologías militares sobrenaturales como teletransportación, intangibilidad y telequinesis.", body2: "Años después, uno de los sujetos regresa como un Espectro vengativo. En lugar de matar a los científicos responsables, secuestra a los doctores, incluido tú, y les ordena cultivar patógenos poderosos y extraer su Esencia.", note: "Tras ganar una partida, puedes presenciar los recuerdos de los sujetos de prueba. Los eventos con decisiones revelan su dolor, trauma y emociones mientras descubren poco a poco la verdad sobre el Espectro." },
  features: { kicker: "Características", title: "El orden de las cartas, las etiquetas genéticas y los sacrificios dan forma a cada partida.", subtitle: "Pathogen combina cartas fáciles de leer con sistemas que recompensan planear varios turnos por adelantado.", items: [{ title: "Sinergias entre efectos de cartas", body: "Cada carta tiene su propia habilidad. Combina recuperación de Salud, ganancia de Esencia y refuerzos para crear cadenas poderosas." }, { title: "Un orden de cartas con lógica de puzle", body: "Ganas Esencia al final del turno, pero todas las cartas pierden 1 de Salud. Planea qué cartas deben seguir vivas, cuáles irán al Cementerio y cuándo importa más cada efecto." }, { title: "Bonificaciones de etiquetas genéticas", body: "Coloca suficientes cartas con la misma etiqueta genética para activar bonificaciones que funcionan junto con habilidades de cartas y Artefactos." }, { title: "Invocación por sacrificio", body: "Sacrifica cartas para invocar otras más fuertes, activar recompensas, liberar espacio en el tablero y convertir cartas ya usadas en parte de tu próxima jugada." }] },
  difference: { kicker: "Qué hace diferente a Pathogen", title: "Menos formar manos, más control deliberado del mazo.", subtitle: "La suerte sigue existiendo, pero Pathogen ofrece más formas de influir en tu construcción y recuperarte de robos difíciles.", items: [{ title: "Estrategia por encima de la suerte", body: "Pathogen no exige formar manos como en el póker. La planificación cuidadosa y las buenas decisiones aumentan mucho tus posibilidades de sobrevivir." }, { title: "Más formas de moldear el mazo", body: "Los objetos de la tienda eliminan cartas no deseadas, y los Experimentos de Conjugación fusionan cartas en nuevos patógenos mediante recetas descubiertas u ocultas." }, { title: "Elige el mazo que quieres desarrollar", body: "La demo incluye dos mazos jugables, mientras que la versión completa planea ocho o más." }, { title: "Turnos de combo enormes", body: "La mayoría de las cartas producen poca Esencia por sí solas, pero las sinergias fuertes pueden elevar un turno a decenas o cientos de miles de puntos." }, { title: "Las cartas importan incluso en la mano", body: "Los paquetes de Modificación de ADN pueden otorgar efectos activos desde la mano, mientras que las cartas en el campo fortalecen cartas que aún no has jugado." }] },
  gallery: { kicker: "Capturas", title: "Estados del tablero, presión de jefes y recompensas.", hint: "Haz clic en una captura para ampliarla.", items: ["Planea el tablero inicial mientras baja la Salud de cada patógeno.", "Sobrevive a encuentros peligrosos y convierte cartas frágiles en ganancias decisivas de Esencia.", "Elige modificaciones de ADN que cambian el valor de las cartas antes de jugarlas."] },
  cta: { kicker: "¿Puedes sobrevivir?", title: "Extrae Esencia y resiste al Espectro.", body: "Pathogen está actualmente en desarrollo. La historia completa, el ritmo y el flujo narrativo se refinarán antes del lanzamiento.", button: "Ver tráiler" },
  press: { kicker: "Texto para prensa", title: "Presentación del juego en una página", intro: "Copia el resumen de abajo para artículos, páginas de tienda o contacto con creadores.", button: "Copiar resumen", copied: "Copiado", body: "Pathogen es un roguelike de construcción de mazos para PC y Steam, desarrollado en solitario por DREAMDART, con acceso anticipado previsto para el 4.º trimestre de 2026. Los jugadores deben cultivar patógenos, extraer Esencia y alcanzar la puntuación objetivo en siete turnos para sobrevivir al Espectro.\n\nEl juego se centra en la planificación estratégica en lugar de formar manos al estilo póker. Como las cartas pierden Salud al final de cada turno, los jugadores deben decidir el orden de juego, cuánto tiempo permanece cada carta en el tablero y el momento adecuado para las invocaciones por sacrificio. Las habilidades de cartas, bonificaciones de etiquetas genéticas, Artefactos, recetas de fusión y paquetes de Modificación de ADN se combinan para crear grandes turnos de combo y dar más control sobre el mazo.\n\nLa historia transcurre tras experimentos militares secretos en una nación imperialista ficticia. El programa realizó experimentos ilegales con criminales para desarrollar tecnologías militares sobrenaturales. Años después, uno de los sujetos regresa como un Espectro vengativo y obliga a los doctores implicados a cultivar patógenos y extraer Esencia. Tras partidas exitosas, eventos de memoria con decisiones revelan poco a poco el sufrimiento de los sujetos y la verdad sobre el Espectro.\n\nLa demo incluye dos mazos jugables, mientras que la versión completa planea ocho o más." },
  modal: { close: "Cerrar captura" },
  footer: "Pathogen - DREAMDART. Página estática multilingüe de presentación del juego.",
});

const refinedSections = {
  ko: {
    difference: {
      title: "운보다 전략이 강한 덱빌딩 게임",
      subtitle: "Pathogen은 플레이어의 빌드와 전략으로 어려운 상황을 극복할 수 있습니다.",
      items: [
        { title: "도박이 아닌 전략", body: "Pathogen은 포커처럼 특정 패를 맞추는 게임이 아닙니다. 시너지 있는 덱 빌딩과 효율적인 카드 사용 순서가 생존 확률을 크게 높입니다." },
        { title: "카드 융합과 제거", body: "상점 아이템으로 원치 않는 카드를 제거하고, 혼합 실험으로 발견한 레시피나 숨겨진 규칙에 따라 카드를 새로운 병원균으로 융합할 수 있습니다. 플레이어가 원하는 덱을 더 쉽게 만들 수 있습니다." },
        { title: "다양한 빌드가 가능한 스타트 덱", body: "데모에는 2개의 플레이 가능한 덱이 있으며, 정식 출시 버전에는 8개 이상의 덱이 포함될 예정입니다." },
        { title: "강력한 한방", body: "대부분의 카드는 단독으로는 적은 에센스를 만들지만, 강력한 시너지는 한 턴의 점수를 수만, 수십만까지 끌어올릴 수 있습니다." },
        { title: "손패에서도 의미 있는 카드", body: "DNA 조작으로 손패에 있어도 발동되는 강력한 효과를 발동하거나, 손패에 있는 카드와 필드에 있는 카드가 서로 연계 효과를 낼 수 있습니다." },
      ],
    },
    gallery: {
      title: "실제 게임 화면",
      items: ["병원균을 배치해 정수를 추출하세요.", "7턴 안에 살아남으세요!", "카드에 효과를 부여해 강력한 카드를 만드세요!"],
    },
  },
  en: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "A familiar yet distinct deck-building roguelike",
    },
    difference: {
      title: "A deck-building game where strategy matters more than luck.",
      subtitle: "In Pathogen, your build and decisions can overcome difficult situations.",
      items: [
        { title: "Strategy, not gambling", body: "Pathogen is not about matching specific hands like poker. Synergistic deck-building and efficient card sequencing greatly increase your chance of survival." },
        { title: "Card fusion and removal", body: "Remove unwanted cards with Shop items, and use Mixing Experiments to fuse cards into new pathogens through discovered recipes or hidden rules. This makes it easier for players to build the deck they want." },
        { title: "Starting decks built for varied strategies", body: "The demo includes two playable starting decks, and the full release is planned to include eight or more." },
        { title: "A powerful finishing blow", body: "Most cards produce only a small amount of Essence on their own, but the right synergy can push a single turn into tens or hundreds of thousands of points." },
        { title: "Cards matter even in your hand", body: "DNA manipulation can give cards powerful effects that trigger from your hand, and cards in your hand and on the field can interact with each other." },
      ],
    },
    gallery: {
      title: "Actual gameplay screenshots",
      items: ["Place pathogens and extract Essence.", "Survive within seven turns!", "Add effects to cards and turn them into powerful options!"],
    },
  },
  ja: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "親しみやすく、それでいて独自性のあるデッキ構築ローグライク",
    },
    difference: {
      title: "運よりも戦略がものをいうデッキ構築ゲーム。",
      subtitle: "Pathogenでは、プレイヤーのビルドと判断によって苦しい状況を乗り越えられます。",
      items: [
        { title: "ギャンブルではなく戦略", body: "Pathogenはポーカーのように特定の役をそろえるゲームではありません。シナジーを意識したデッキ構築と効率的なカード使用順が、生存率を大きく高めます。" },
        { title: "カードの融合と除去", body: "ショップアイテムで不要なカードを取り除き、混合実験で発見したレシピや隠れたルールに従ってカードを新しい病原体へ融合できます。プレイヤーは理想のデッキをより作りやすくなります。" },
        { title: "多彩なビルドにつながる開始デッキ", body: "デモには2種類のプレイ可能な開始デッキがあり、正式版では8種類以上のデッキを予定しています。" },
        { title: "強力な一撃", body: "多くのカードは単体では少量のエッセンスしか生みませんが、強力なシナジーは1ターンのスコアを数万、数十万へ押し上げます。" },
        { title: "手札でも意味を持つカード", body: "DNA操作によって手札にあるだけで発動する強力な効果を得たり、手札のカードと場のカードが互いに連携したりします。" },
      ],
    },
    gallery: {
      title: "実際のゲーム画面",
      items: ["病原体を配置してエッセンスを抽出しましょう。", "7ターン以内に生き残りましょう！", "カードに効果を付与し、強力なカードへ育てましょう！"],
    },
  },
  "zh-CN": {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "熟悉但具有差异化的牌组构筑 Roguelike",
    },
    difference: {
      title: "一款策略比运气更重要的牌组构筑游戏。",
      subtitle: "在 Pathogen 中，玩家可以依靠自己的构筑与策略突破困境。",
      items: [
        { title: "不是赌博，而是策略", body: "Pathogen 不要求像扑克一样凑出特定牌型。具备协同的牌组构筑与高效的卡牌使用顺序，会大幅提高生存机会。" },
        { title: "卡牌融合与移除", body: "你可以用商店道具移除不想要的卡牌，也可以通过混合实验，根据已发现的配方或隐藏规则把卡牌融合成新的病原体。玩家能更容易打造自己想要的牌组。" },
        { title: "支持多种构筑的起始牌组", body: "试玩版包含两个可玩的起始牌组，完整版计划加入八个或更多牌组。" },
        { title: "强力爆发", body: "大多数卡牌单独产生的精华有限，但合适的协同可以把单回合分数推到数万甚至数十万。" },
        { title: "手牌中的卡牌也有意义", body: "通过 DNA 操作，卡牌即使在手牌中也能触发强力效果；手牌中的卡牌也可以与场上的卡牌产生联动。" },
      ],
    },
    gallery: {
      title: "实际游戏画面",
      items: ["放置病原体并提取精华。", "在七个回合内活下来！", "为卡牌赋予效果，打造强力卡牌！"],
    },
  },
  "zh-TW": {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "熟悉但具有差異化的牌組構築 Roguelike",
    },
    difference: {
      title: "一款策略比運氣更重要的牌組構築遊戲。",
      subtitle: "在 Pathogen 中，玩家可以依靠自己的構築與策略突破困境。",
      items: [
        { title: "不是賭博，而是策略", body: "Pathogen 不要求像撲克一樣湊出特定牌型。具備協同的牌組構築與高效的卡牌使用順序，會大幅提高生存機會。" },
        { title: "卡牌融合與移除", body: "你可以用商店道具移除不想要的卡牌，也可以透過混合實驗，根據已發現的配方或隱藏規則把卡牌融合成新的病原體。玩家能更容易打造自己想要的牌組。" },
        { title: "支援多種構築的起始牌組", body: "試玩版包含兩個可玩的起始牌組，完整版計畫加入八個或更多牌組。" },
        { title: "強力爆發", body: "多數卡牌單獨產生的精華有限，但合適的協同可以把單回合分數推到數萬甚至數十萬。" },
        { title: "手牌中的卡牌也有意義", body: "透過 DNA 操作，卡牌即使在手牌中也能觸發強力效果；手牌中的卡牌也可以與場上的卡牌產生聯動。" },
      ],
    },
    gallery: {
      title: "實際遊戲畫面",
      items: ["放置病原體並萃取精華。", "在七回合內活下來！", "為卡牌賦予效果，打造強力卡牌！"],
    },
  },
  fr: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "Un roguelike de deck-building familier, mais vraiment distinct",
    },
    difference: {
      title: "Un deck-building où la stratégie compte plus que la chance.",
      subtitle: "Dans Pathogen, vos choix de build et votre stratégie peuvent vous sortir des situations difficiles.",
      items: [
        { title: "Pas du hasard, mais de la stratégie", body: "Pathogen ne demande pas de former des mains comme au poker. Un deck construit autour de synergies et un ordre d'utilisation efficace des cartes augmentent fortement vos chances de survie." },
        { title: "Fusion et retrait de cartes", body: "Retirez les cartes indésirables avec les objets de boutique, puis utilisez les expériences de mélange pour fusionner des cartes en nouveaux pathogènes selon des recettes découvertes ou des règles cachées. Les joueurs peuvent ainsi construire plus facilement le deck qu'ils souhaitent." },
        { title: "Des decks de départ pour des builds variés", body: "La démo inclut deux decks de départ jouables, et la version complète prévoit huit decks ou plus." },
        { title: "Un coup décisif", body: "La plupart des cartes produisent peu d'Essence seules, mais la bonne synergie peut faire monter un tour à des dizaines ou centaines de milliers de points." },
        { title: "Les cartes comptent même en main", body: "La manipulation ADN peut donner des effets puissants qui se déclenchent depuis la main, et les cartes en main peuvent interagir avec celles du plateau." },
      ],
    },
    gallery: {
      title: "Images du jeu en situation réelle",
      items: ["Placez des pathogènes et extrayez de l'Essence.", "Survivez en sept tours !", "Ajoutez des effets aux cartes pour en faire de puissantes options !"],
    },
  },
  de: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "Ein vertrautes, aber klar eigenständiges Deckbuilding-Roguelike",
    },
    difference: {
      title: "Ein Deckbuilding-Spiel, in dem Strategie wichtiger ist als Glück.",
      subtitle: "In Pathogen kannst du schwierige Situationen mit deinem Build und deinen Entscheidungen überwinden.",
      items: [
        { title: "Strategie statt Glücksspiel", body: "Pathogen verlangt keine pokerähnlichen Handkombinationen. Ein synergiebasiertes Deck und eine effiziente Reihenfolge beim Ausspielen der Karten erhöhen deine Überlebenschancen deutlich." },
        { title: "Karten fusionieren und entfernen", body: "Entferne unerwünschte Karten mit Shop-Gegenständen und nutze Mischungsexperimente, um Karten nach entdeckten Rezepten oder versteckten Regeln zu neuen Pathogenen zu verschmelzen. So können Spieler leichter das Deck bauen, das sie wollen." },
        { title: "Startdecks für vielfältige Builds", body: "Die Demo enthält zwei spielbare Startdecks; für die Vollversion sind acht oder mehr Decks geplant." },
        { title: "Ein mächtiger Schlag", body: "Die meisten Karten erzeugen allein nur wenig Essenz, doch die richtige Synergie kann eine Runde auf Zehn- oder Hunderttausende Punkte bringen." },
        { title: "Karten zählen auch auf der Hand", body: "DNA-Manipulation kann Karten starke Effekte geben, die bereits auf der Hand auslösen, und Karten auf der Hand können mit Karten auf dem Feld zusammenspielen." },
      ],
    },
    gallery: {
      title: "Echte Spielszenen",
      items: ["Platziere Pathogene und extrahiere Essenz.", "Überlebe innerhalb von sieben Runden!", "Gib Karten Effekte und mache sie zu starken Optionen!"],
    },
  },
  pt: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "Um roguelike de deck-building familiar, mas diferenciado",
    },
    difference: {
      title: "Um deck-building em que estratégia pesa mais que sorte.",
      subtitle: "Em Pathogen, sua build e suas decisões podem superar situações difíceis.",
      items: [
        { title: "Estratégia, não aposta", body: "Pathogen não exige formar mãos específicas como no pôquer. Um baralho com sinergias e uma ordem eficiente de uso das cartas aumentam muito suas chances de sobrevivência." },
        { title: "Fusão e remoção de cartas", body: "Remova cartas indesejadas com itens da loja e use Experimentos de Mistura para fundir cartas em novos patógenos por receitas descobertas ou regras ocultas. Isso facilita a criação do baralho que o jogador deseja." },
        { title: "Baralhos iniciais para builds variadas", body: "A demo inclui dois baralhos iniciais jogáveis, enquanto a versão completa planeja oito ou mais." },
        { title: "Um golpe poderoso", body: "A maioria das cartas gera pouca Essência sozinha, mas a sinergia certa pode levar um turno a dezenas ou centenas de milhares de pontos." },
        { title: "Cartas importam mesmo na mão", body: "A manipulação de DNA pode dar efeitos poderosos que ativam na mão, e cartas na mão podem interagir com cartas no campo." },
      ],
    },
    gallery: {
      title: "Cenas reais de gameplay",
      items: ["Posicione patógenos e extraia Essência.", "Sobreviva em sete turnos!", "Aplique efeitos às cartas e transforme-as em opções poderosas!"],
    },
  },
  ru: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "Знакомый, но по-своему отличающийся рогалик с построением колоды",
    },
    difference: {
      title: "Колостроительная игра, где стратегия сильнее удачи.",
      subtitle: "В Pathogen сложные ситуации можно преодолеть за счет билда и решений игрока.",
      items: [
        { title: "Не азарт, а стратегия", body: "Pathogen не требует собирать конкретные комбинации как в покере. Синергичная сборка колоды и эффективный порядок использования карт значительно повышают шанс выжить." },
        { title: "Слияние и удаление карт", body: "Убирайте ненужные карты предметами магазина и используйте эксперименты смешивания, чтобы сливать карты в новые патогены по найденным рецептам или скрытым правилам. Так игроку легче собрать желаемую колоду." },
        { title: "Стартовые колоды для разных билдов", body: "В демо есть две игровые стартовые колоды, а в полной версии планируется восемь или больше." },
        { title: "Мощный удар", body: "Большинство карт сами по себе дают немного Эссенции, но правильная синергия может поднять счет за ход до десятков или сотен тысяч." },
        { title: "Карты важны даже в руке", body: "Манипуляции с ДНК могут давать мощные эффекты, которые срабатывают из руки, а карты в руке могут взаимодействовать с картами на поле." },
      ],
    },
    gallery: {
      title: "Реальные кадры игрового процесса",
      items: ["Размещайте патогены и извлекайте Эссенцию.", "Выживите за семь ходов!", "Добавляйте картам эффекты и делайте их мощнее!"],
    },
  },
  es: {
    features: {
      title: [
        { text: "Balatro", className: "mix-balatro" },
        { text: " + ", className: "mix-plus" },
        { text: "Slay the Spire", className: "mix-slay" },
        { text: " + ", className: "mix-plus" },
        { text: "Yu-Gi-Oh!", className: "mix-yugioh" },
      ],
      subtitle: "Un roguelike de deck-building familiar, pero diferenciado",
    },
    difference: {
      title: "Un deck-building donde la estrategia pesa más que la suerte.",
      subtitle: "En Pathogen, tu build y tus decisiones pueden superar situaciones difíciles.",
      items: [
        { title: "Estrategia, no azar", body: "Pathogen no exige formar manos específicas como en el póker. Un mazo con sinergias y un orden eficiente de uso de cartas aumentan mucho tus posibilidades de sobrevivir." },
        { title: "Fusión y eliminación de cartas", body: "Elimina cartas no deseadas con objetos de la tienda y usa Experimentos de Mezcla para fusionar cartas en nuevos patógenos mediante recetas descubiertas o reglas ocultas. Así es más fácil construir el mazo que quieres." },
        { title: "Mazos iniciales para builds variadas", body: "La demo incluye dos mazos iniciales jugables, mientras que la versión completa planea ocho o más." },
        { title: "Un golpe poderoso", body: "La mayoría de las cartas producen poca Esencia por sí solas, pero la sinergia adecuada puede elevar un turno a decenas o cientos de miles de puntos." },
        { title: "Las cartas importan incluso en la mano", body: "La manipulación de ADN puede dar efectos poderosos que se activan desde la mano, y las cartas en la mano pueden interactuar con las cartas del campo." },
      ],
    },
    gallery: {
      title: "Imágenes reales del juego",
      items: ["Coloca patógenos y extrae Esencia.", "¡Sobrevive en siete turnos!", "¡Añade efectos a las cartas y conviértelas en opciones poderosas!"],
    },
  },
};

function mergeCopy(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      target[key] = mergeCopy(target[key] || {}, value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

for (const [lang, sections] of Object.entries(refinedSections)) {
  mergeCopy(content[lang], sections);
}

const sacrificeSummonCopy = {
  ko: "병원균을 제물로 바쳐 더 강력한 병원균을 소환하세요. 연속적인 제물 소환으로 매우 높은 정수를 추출할 수 있습니다.",
  en: "Sacrifice pathogens to summon even stronger pathogens. Chaining Sacrifice Summons can let you extract extremely high amounts of Essence.",
  ja: "病原体を犠牲にして、さらに強力な病原体を召喚しましょう。連続した犠牲召喚によって、非常に高い量のエッセンスを抽出できます。",
  "zh-CN": "牺牲病原体，召唤更强大的病原体。通过连续牺牲召唤，可以提取极高数量的精华。",
  "zh-TW": "犧牲病原體，召喚更強大的病原體。透過連續犧牲召喚，可以萃取極高數量的精華。",
  fr: "Sacrifiez des pathogènes pour en invoquer de plus puissants. En enchaînant les invocations par sacrifice, vous pouvez extraire une quantité d'Essence extrêmement élevée.",
  de: "Opfere Pathogene, um noch stärkere Pathogene zu beschwören. Durch aufeinanderfolgende Opferbeschwörungen kannst du extrem hohe Mengen Essenz extrahieren.",
  pt: "Sacrifique patógenos para invocar patógenos ainda mais fortes. Com invocações por sacrifício em sequência, você pode extrair quantidades extremamente altas de Essência.",
  ru: "Жертвуйте патогенами, чтобы призывать еще более сильных патогенов. Серия призывов через жертву позволяет извлекать очень большое количество Эссенции.",
  es: "Sacrifica patógenos para invocar patógenos aún más poderosos. Encadenar invocaciones por sacrificio te permite extraer cantidades extremadamente altas de Esencia.",
};

for (const [lang, body] of Object.entries(sacrificeSummonCopy)) {
  if (content[lang]?.features?.items?.[3]) {
    content[lang].features.items[3].body = body;
  }
}

const detailedPressCopy = {
  en: {
    trailerBody: "Feel the thrill of standing on the edge between survival and death, escaping by the narrowest margin.",
    pressBody: content.en.press.body,
  },
  ko: {
    trailerBody: "생존과 죽음의 경계에 서서 아슬아슬하게 살아남는 스릴을 느끼세요!",
    pressBody: content.ko.press.body,
  },
  ja: {
    trailerBody: "生と死の境界に立ち、紙一重で生き残るスリルを味わいましょう！",
    pressBody: "Pathogenは、DREAMDARTが個人開発しているPC / Steam向けデッキ構築ローグライクです。2026年第4四半期の早期アクセスを予定しており、プレイヤーは病原体を培養してエッセンスを抽出し、7ターン以内に目標スコアへ到達しなければなりません。ルールは直感的ですが、毎ターン「どのカードを生かすか」「どのカードを犠牲にするか」「どこまで危険を押し広げるか」を迫られます。\n\nPathogenの中心にあるのは、運よりも戦略がものをいうデッキ構築です。ポーカーのように役をそろえるのではなく、カードの順番、寿命、犠牲にするタイミングを設計します。ターン終了時にすべてのカードの体力が減るため、盤面は毎ターン小さなパズルのように変化します。単体では弱く見えるカードも、体力回復、エッセンス獲得、遺伝子タグボーナス、アーティファクト、犠牲召喚、融合レシピ、DNA操作と組み合わせることで強力な連鎖の起点になります。\n\nプレイヤーは不要なカードを取り除いたり、接合実験でカードを融合させたりして、理想のデッキを作れます。発見したレシピに従えば特定のカードを作れ、未知の組み合わせは隠れたルールに基づいて予想外の結果を生みます。さらにDNA操作によって、手札にあるカードが強力な効果を発動したり、手札と場のカードが互いに連携したりします。\n\n慣れてくるほど、プレイヤーは強力な一撃を準備するようになります。多くのカードは単体では少量のエッセンスしか生みませんが、準備されたシナジーは1ターンのスコアを数万、数十万へ押し上げます。死の一歩手前で踏みとどまり、最後の瞬間に計画していたコンボが決まって生き残る感覚こそ、Pathogenの大きな魅力です。\n\n物語は、架空の帝国主義国家で行われた秘密軍事実験を背景にしています。国家は受刑者を対象に、瞬間移動、非実体化、念動力などの超常的な軍事技術を開発しようとしていました。数年後、被験者の一人が復讐に燃えるスペクターとして帰還します。スペクターは科学者たちを殺さず、あなたを含む医師たちを拉致し、強力な病原体を培養してエッセンスを抽出するよう命じます。なぜスペクターがエッセンスを求めるのかは誰にもわかりません。\n\nランに勝利すると、実験体たちの記憶を目撃することがあります。選択型イベントは医師であるプレイヤーに彼らの苦痛、トラウマ、感情を追体験させ、道徳的に答えのない選択を迫ります。プレイを続けるほど断片的な記憶はパズルのようにつながり、スペクターの目的とエッセンスの意味が少しずつ明らかになります。\n\nデモには多彩なビルドにつながる2種類の開始デッキが収録され、正式版では8種類以上のデッキを予定しています。",
  },
  "zh-CN": {
    trailerBody: "站在生与死的边缘，体验惊险存活的刺激！",
    pressBody: "Pathogen 是由 DREAMDART 单人开发的 PC 与 Steam 平台牌组构筑 Roguelike，计划于 2026 年第四季度开启抢先体验。玩家需要培养病原体并提取精华，在七个回合内达到目标分数。规则直观易懂，但每一回合都要做出关键判断：保留哪张卡、牺牲哪张卡，以及愿意把风险推到多高。\n\nPathogen 的核心是策略比运气更重要的牌组构筑。它不是像扑克一样凑牌型，而是设计卡牌顺序、存活时间与牺牲时机。每个回合结束时，所有卡牌都会失去生命值，因此场面每回合都会变成一个新的小型谜题。单独看似弱小的卡牌，也可能通过生命恢复、精华获取、基因标签奖励、神器、牺牲召唤、融合配方与 DNA 操作，成为爆发连锁的起点。\n\n玩家可以移除不想要的卡牌，也可以通过接合实验把卡牌融合成新的病原体。按照已发现的配方可以制作特定卡牌，而未知组合则会根据隐藏规则产生意想不到的结果。DNA 操作还能让手牌中的卡牌触发强力效果，或让手牌与场上的卡牌产生联动。\n\n随着熟练度提升，玩家会开始为强力爆发做准备。大多数卡牌单独只能产生少量精华，但精心准备的协同可以把单回合分数推到数万甚至数十万。在死亡边缘坚持到最后一刻，再用计划好的连锁逆转生存，是 Pathogen 最有吸引力的体验之一。\n\n故事发生在一个虚构帝国主义国家的秘密军事实验之后。国家曾对罪犯进行非法实验，试图开发瞬间移动、虚化、念动力等超自然军事技术。多年后，一名实验体化作复仇的幽灵归来。它没有杀死科学家，而是绑架了包括玩家在内的医生，命令他们培养强大的病原体并提取精华。没有人知道幽灵为什么想要精华，想活下去就只能服从。\n\n赢得一局后，玩家可能会看到实验体的记忆。选择型事件会让作为医生的玩家重新经历他们的痛苦、创伤与情感，并面对没有正确答案的道德困境。随着游玩推进，破碎的记忆会像拼图一样连接起来，逐渐揭开幽灵绑架医生的原因，以及精华真正的意义。\n\n试玩版包含两个支持不同构筑的起始牌组，完整版计划加入八个或更多牌组。",
  },
  "zh-TW": {
    trailerBody: "站在生與死的邊緣，體驗驚險存活的刺激！",
    pressBody: "Pathogen 是由 DREAMDART 單人開發的 PC 與 Steam 平台牌組構築 Roguelike，計畫於 2026 年第 4 季開啟搶先體驗。玩家需要培養病原體並萃取精華，在七回合內達成目標分數。規則直觀易懂，但每一回合都要做出關鍵判斷：保留哪張卡、犧牲哪張卡，以及願意把風險推到多高。\n\nPathogen 的核心是策略比運氣更重要的牌組構築。它不是像撲克一樣湊牌型，而是設計卡牌順序、存活時間與犧牲時機。每個回合結束時，所有卡牌都會失去生命值，因此場面每回合都會變成一個新的小型謎題。單獨看似弱小的卡牌，也可能透過生命恢復、精華獲取、基因標籤獎勵、神器、犧牲召喚、融合配方與 DNA 操作，成為爆發連鎖的起點。\n\n玩家可以移除不想要的卡牌，也可以透過接合實驗把卡牌融合成新的病原體。按照已發現的配方可以製作特定卡牌，而未知組合則會根據隱藏規則產生意想不到的結果。DNA 操作還能讓手牌中的卡牌觸發強力效果，或讓手牌與場上的卡牌產生聯動。\n\n隨著熟練度提升，玩家會開始為強力爆發做準備。多數卡牌單獨只能產生少量精華，但精心準備的協同可以把單回合分數推到數萬甚至數十萬。在死亡邊緣撐到最後一刻，再用計畫好的連鎖逆轉生存，是 Pathogen 最有吸引力的體驗之一。\n\n故事發生在一個虛構帝國主義國家的秘密軍事實驗之後。國家曾對罪犯進行非法實驗，試圖開發瞬間移動、非實體化、念動力等超自然軍事技術。多年後，一名實驗體化為復仇的幽靈歸來。它沒有殺死科學家，而是綁架了包括玩家在內的醫生，命令他們培養強大的病原體並萃取精華。沒有人知道幽靈為什麼想要精華，想活下去就只能服從。\n\n贏得一局後，玩家可能會看見實驗體的記憶。選擇型事件會讓作為醫生的玩家重新經歷他們的痛苦、創傷與情感，並面對沒有正確答案的道德困境。隨著遊玩推進，破碎的記憶會像拼圖一樣連接起來，逐漸揭開幽靈綁架醫生的原因，以及精華真正的意義。\n\n試玩版包含兩個支援不同構築的起始牌組，完整版計畫加入八個或更多牌組。",
  },
  fr: {
    trailerBody: "Ressentez le frisson de survivre de justesse, à la frontière entre la vie et la mort !",
    pressBody: "Pathogen est un roguelike de deck-building pour PC et Steam, développé en solo par DREAMDART, avec un accès anticipé prévu au T4 2026. Les joueurs cultivent des pathogènes, extraient de l'Essence et doivent atteindre le score cible en sept tours. Les règles sont faciles à comprendre, mais chaque tour pose une vraie question : quelle carte doit survivre, laquelle doit être sacrifiée, et jusqu'où pouvez-vous pousser le risque ?\n\nLe coeur de Pathogen est un deck-building où la stratégie compte plus que la chance. Il ne s'agit pas de former une main comme au poker, mais de planifier l'ordre des cartes, leur durée de vie et le moment du sacrifice. Comme toutes les cartes perdent de la Santé à la fin du tour, le plateau devient un puzzle renouvelé à chaque manche. Une carte faible seule peut devenir le point de départ d'une chaîne explosive grâce aux soins, aux gains d'Essence, aux tags génétiques, aux Artéfacts, aux sacrifices, aux recettes de fusion et à la manipulation ADN.\n\nLes joueurs peuvent retirer les cartes indésirables ou fusionner des cartes en nouveaux pathogènes grâce aux expériences de conjugaison. Les recettes découvertes créent des cartes précises, tandis que les combinaisons inconnues suivent des règles cachées et peuvent produire des résultats surprenants. La manipulation ADN peut aussi déclencher des effets puissants depuis la main ou créer des interactions entre les cartes en main et celles sur le plateau.\n\nPlus vous maîtrisez le jeu, plus vous préparez un coup décisif. La plupart des cartes produisent peu d'Essence seules, mais une synergie bien préparée peut faire monter un tour à des dizaines ou centaines de milliers de points. Survivre à la limite de la mort avant de déclencher le combo prévu au dernier moment est l'une des sensations les plus fortes de Pathogen.\n\nL'histoire se déroule dans une nation impérialiste fictive où un programme militaire secret a mené des expériences illégales sur des criminels condamnés afin de développer la téléportation, l'intangibilité et la télékinésie. Des années plus tard, l'un des sujets revient sous la forme d'un Spectre vengeur. Au lieu de tuer les scientifiques, il enlève les médecins, dont le joueur, et leur ordonne de cultiver de puissants pathogènes pour en extraire l'Essence. Personne ne sait pourquoi le Spectre désire cette Essence.\n\nAprès une victoire, les joueurs peuvent découvrir les souvenirs des sujets d'expérience. Ces événements à choix font revivre au Docteur leur douleur, leurs traumatismes et des dilemmes moraux impossibles. À mesure que les fragments se rejoignent, la vérité sur l'enlèvement des médecins et la signification de l'Essence se révèle peu à peu.\n\nLa démo inclut deux decks de départ permettant des builds variés, et la version complète prévoit huit decks ou plus.",
  },
  de: {
    trailerBody: "Spüre den Nervenkitzel, an der Grenze zwischen Leben und Tod nur knapp zu überleben!",
    pressBody: "Pathogen ist ein solo entwickeltes Deckbuilding-Roguelike für PC und Steam von DREAMDART, geplant für den Early Access in Q4 2026. Spieler kultivieren Pathogene, extrahieren Essenz und müssen innerhalb von sieben Runden die Zielpunktzahl erreichen. Die Regeln sind leicht verständlich, doch jede Runde stellt eine harte Frage: Welche Karte soll leben, welche wird geopfert, und wie weit willst du das Risiko treiben?\n\nIm Kern ist Pathogen ein Deckbuilding-Spiel, in dem Strategie wichtiger ist als Glück. Es geht nicht darum, pokerähnliche Hände zu bilden, sondern Reihenfolge, Lebensdauer und Opferzeitpunkt der Karten zu planen. Da alle Karten am Ende der Runde Gesundheit verlieren, wird das Feld jede Runde zu einem neuen kleinen Puzzle. Eine schwache Karte kann durch Heilung, Essenzgewinn, Gen-Tag-Boni, Artefakte, Opferbeschwörung, Fusionsrezepte und DNA-Manipulation zum Startpunkt einer explosiven Kette werden.\n\nSpieler können unerwünschte Karten entfernen oder Karten durch Konjugationsexperimente zu neuen Pathogenen verschmelzen. Entdeckte Rezepte erzeugen bestimmte Karten, während unbekannte Kombinationen versteckten Regeln folgen und überraschende Ergebnisse bringen können. DNA-Manipulation kann außerdem starke Effekte aus der Hand auslösen oder Karten auf der Hand mit Karten auf dem Feld interagieren lassen.\n\nJe besser du das Spiel verstehst, desto mehr bereitest du einen mächtigen Schlag vor. Die meisten Karten erzeugen allein nur wenig Essenz, doch eine gut vorbereitete Synergie kann eine Runde auf Zehn- oder Hunderttausende Punkte bringen. Am Rand des Scheiterns zu stehen und im letzten Moment mit dem geplanten Kombozug zu überleben, ist einer der stärksten Reize von Pathogen.\n\nDie Geschichte spielt in einer fiktiven imperialistischen Nation, in der ein geheimes Militärprogramm illegale Experimente an verurteilten Kriminellen durchführte, um Teleportation, Unberührbarkeit und Telekinese zu entwickeln. Jahre später kehrt eines der Testsubjekte als rachsüchtiger Specter zurück. Statt die Wissenschaftler zu töten, entführt er die Ärzte, darunter den Spieler, und zwingt sie, mächtige Pathogene zu kultivieren und Essenz zu extrahieren. Niemand weiß, warum der Specter Essenz will.\n\nNach gewonnenen Runs können Spieler Erinnerungen der Testsubjekte erleben. Diese wahlbasierten Ereignisse lassen den Doktor Schmerz, Trauma und unmögliche moralische Dilemmas durchleben. Während sich die Fragmente verbinden, wird nach und nach sichtbar, warum der Specter die Ärzte entführt hat und was Essenz wirklich bedeutet.\n\nDie Demo enthält zwei Startdecks für verschiedene Builds; für die Vollversion sind acht oder mehr Decks geplant.",
  },
  pt: {
    trailerBody: "Sinta o suspense de sobreviver por pouco na fronteira entre a vida e a morte!",
    pressBody: "Pathogen é um roguelike de construção de baralho para PC e Steam, desenvolvido por uma pessoa sob o nome DREAMDART, com acesso antecipado planejado para o 4º trimestre de 2026. Os jogadores cultivam patógenos, extraem Essência e precisam alcançar a pontuação alvo em sete turnos. As regras são intuitivas, mas cada turno faz uma pergunta difícil: qual carta deve viver, qual deve ser sacrificada e até onde vale arriscar?\n\nO centro de Pathogen é um deck-building em que estratégia pesa mais que sorte. Não se trata de formar mãos como no pôquer, mas de planejar a ordem das cartas, sua duração no campo e o momento do sacrifício. Como todas as cartas perdem Vida ao fim do turno, o tabuleiro vira um pequeno quebra-cabeça a cada rodada. Uma carta fraca sozinha pode se tornar o início de uma cadeia explosiva com cura, ganho de Essência, bônus de tags genéticas, Artefatos, invocação por sacrifício, receitas de fusão e manipulação de DNA.\n\nOs jogadores podem remover cartas indesejadas ou fundir cartas em novos patógenos por Experimentos de Conjugação. Receitas descobertas criam cartas específicas, enquanto combinações desconhecidas seguem regras ocultas e podem gerar resultados inesperados. A manipulação de DNA também pode ativar efeitos poderosos a partir da mão ou criar interações entre cartas na mão e cartas no campo.\n\nQuanto mais o jogador domina o sistema, mais prepara um golpe poderoso. A maioria das cartas gera pouca Essência sozinha, mas uma sinergia bem preparada pode levar um turno a dezenas ou centenas de milhares de pontos. Ficar na beira da morte e sobreviver no último instante com o combo planejado é uma das maiores emoções de Pathogen.\n\nA história se passa em uma nação imperialista fictícia, onde um programa militar secreto realizou experimentos ilegais em criminosos condenados para desenvolver teletransporte, intangibilidade e telecinese. Anos depois, uma das cobaias retorna como um Espectro vingativo. Em vez de matar os cientistas, ele sequestra os médicos, incluindo o jogador, e os força a cultivar patógenos poderosos e extrair Essência. Ninguém sabe por que o Espectro deseja Essência.\n\nApós vencer uma partida, os jogadores podem testemunhar memórias das cobaias. Esses eventos com escolhas fazem o Doutor reviver dor, trauma e dilemas morais impossíveis. Conforme os fragmentos se conectam, a verdade sobre o sequestro dos médicos e o significado da Essência começa a aparecer.\n\nA demo inclui dois baralhos iniciais para builds variadas, enquanto a versão completa planeja oito ou mais.",
  },
  ru: {
    trailerBody: "Почувствуйте напряжение выживания на грани жизни и смерти!",
    pressBody: "Pathogen - это рогалик с построением колоды для PC и Steam от соло-разработчика DREAMDART. Ранний доступ запланирован на IV квартал 2026 года. Игроки выращивают патогены, извлекают Эссенцию и должны набрать целевой счет за семь ходов. Правила понятны, но каждый ход ставит острый вопрос: какую карту оставить в живых, какую пожертвовать и насколько далеко можно зайти в риске?\n\nОснова Pathogen - колостроительная игра, где стратегия сильнее удачи. Здесь важно не собирать покерные комбинации, а планировать порядок карт, срок их жизни и момент жертвы. В конце каждого хода все карты теряют здоровье, поэтому поле каждый раз превращается в новую небольшую головоломку. Даже слабая карта может стать началом мощной цепочки, если связать ее с лечением, получением Эссенции, генными метками, Артефактами, призывом через жертву, рецептами слияния и манипуляцией ДНК.\n\nИгроки могут удалять ненужные карты или сливать карты в новых патогенов через эксперименты конъюгации. Найденные рецепты создают конкретные карты, а неизвестные сочетания следуют скрытым правилам и могут давать неожиданные результаты. Манипуляции с ДНК также позволяют запускать сильные эффекты из руки или связывать карты в руке с картами на поле.\n\nЧем лучше игрок понимает систему, тем чаще он готовит мощный удар. Большинство карт сами по себе дают немного Эссенции, но правильно подготовленная синергия может поднять счет за ход до десятков или сотен тысяч. Стоять на грани смерти и выжить в последний момент благодаря заранее подготовленному комбо - одно из главных ощущений Pathogen.\n\nИстория разворачивается в вымышленной империалистической стране, где секретная военная программа проводила незаконные эксперименты над осужденными преступниками, чтобы разработать телепортацию, неосязаемость и телекинез. Годы спустя один из испытуемых возвращается как мстительный Призрак. Вместо того чтобы убить ученых, он похищает врачей, включая игрока, и заставляет их выращивать мощные патогены и извлекать Эссенцию. Никто не знает, зачем Призраку нужна Эссенция.\n\nПосле победных забегов игроки могут увидеть воспоминания испытуемых. Эти события с выбором заставляют Доктора пережить боль, травмы и невозможные моральные дилеммы. По мере того как фрагменты складываются, постепенно раскрывается, почему Призрак похитил врачей и что на самом деле означает Эссенция.\n\nВ демо входят две стартовые колоды для разных билдов, а в полной версии планируется восемь или больше.",
  },
  es: {
    trailerBody: "¡Siente la emoción de sobrevivir por muy poco en la frontera entre la vida y la muerte!",
    pressBody: "Pathogen es un roguelike de construcción de mazos para PC y Steam, desarrollado en solitario por DREAMDART, con acceso anticipado previsto para el 4.º trimestre de 2026. Los jugadores cultivan patógenos, extraen Esencia y deben alcanzar la puntuación objetivo en siete turnos. Las reglas son intuitivas, pero cada turno plantea una pregunta dura: qué carta debe vivir, cuál debe sacrificarse y cuánto riesgo merece la pena asumir.\n\nEl núcleo de Pathogen es un deck-building donde la estrategia pesa más que la suerte. No se trata de formar manos como en el póker, sino de planear el orden de las cartas, su tiempo en el campo y el momento del sacrificio. Como todas las cartas pierden Salud al final del turno, el tablero se convierte en un pequeño puzle nuevo a cada ronda. Una carta débil por sí sola puede convertirse en el inicio de una cadena explosiva con curación, ganancia de Esencia, etiquetas genéticas, Artefactos, invocación por sacrificio, recetas de fusión y manipulación de ADN.\n\nLos jugadores pueden eliminar cartas no deseadas o fusionar cartas en nuevos patógenos mediante Experimentos de Conjugación. Las recetas descubiertas crean cartas específicas, mientras que las combinaciones desconocidas siguen reglas ocultas y pueden producir resultados inesperados. La manipulación de ADN también puede activar efectos poderosos desde la mano o crear interacciones entre cartas en la mano y cartas en el campo.\n\nCuanto más se domina el sistema, más se prepara un golpe poderoso. La mayoría de las cartas producen poca Esencia por sí solas, pero una sinergia bien preparada puede elevar un turno a decenas o cientos de miles de puntos. Estar al borde de la muerte y sobrevivir en el último instante gracias al combo planeado es una de las sensaciones más fuertes de Pathogen.\n\nLa historia transcurre en una nación imperialista ficticia, donde un programa militar secreto realizó experimentos ilegales con criminales condenados para desarrollar teletransportación, intangibilidad y telequinesis. Años después, uno de los sujetos regresa como un Espectro vengativo. En lugar de matar a los científicos, secuestra a los doctores, incluido el jugador, y les ordena cultivar patógenos poderosos y extraer Esencia. Nadie sabe por qué el Espectro desea la Esencia.\n\nTras ganar una partida, los jugadores pueden presenciar recuerdos de los sujetos de prueba. Estos eventos con decisiones obligan al Doctor a revivir dolor, trauma y dilemas morales imposibles. A medida que los fragmentos se conectan, se revela poco a poco por qué el Espectro secuestró a los doctores y qué significa realmente la Esencia.\n\nLa demo incluye dos mazos iniciales para builds variadas, mientras que la versión completa planea ocho o más.",
  },
};

for (const [lang, copy] of Object.entries(detailedPressCopy)) {
  content[lang].trailerSection.body = copy.trailerBody;
  content[lang].press.body = copy.pressBody;
}

const pressIntroTranslations = {
  ko: "기사, 블로그, SNS 등 복사하여 자유롭게 사용하세요.",
  en: "Feel free to copy and use this for articles, blogs, social media, and more.",
  ja: "記事、ブログ、SNSなどに自由にコピーしてご利用ください。",
  "zh-CN": "可自由复制并用于报道、博客、社交媒体等内容。",
  "zh-TW": "可自由複製並用於報導、部落格、社群媒體等內容。",
  fr: "Copiez et utilisez librement ce texte pour des articles, blogs, réseaux sociaux, etc.",
  de: "Du kannst diesen Text frei für Artikel, Blogs, Social Media und mehr kopieren und verwenden.",
  pt: "Copie e use livremente este texto em artigos, blogs, redes sociais e outros materiais.",
  ru: "Свободно копируйте и используйте этот текст для статей, блогов, соцсетей и других материалов.",
  es: "Puedes copiar y usar libremente este texto para artículos, blogs, redes sociales y más.",
};

for (const [lang, intro] of Object.entries(pressIntroTranslations)) {
  content[lang].press.intro = intro;
}

for (const lang of Object.keys(content)) {
  content[lang].facts.os = content[lang].facts.os || { label: "OS", value: "Windows" };
}

const steamButtonLabels = {
  ko: "Steam 페이지 바로가기",
  en: "Visit Steam Page",
  ja: "Steamページへ",
  "zh-CN": "前往 Steam 页面",
  "zh-TW": "前往 Steam 頁面",
  fr: "Voir la page Steam",
  de: "Steam-Seite öffnen",
  pt: "Abrir página Steam",
  ru: "Открыть страницу Steam",
  es: "Abrir página de Steam",
};

for (const [lang, label] of Object.entries(steamButtonLabels)) {
  content[lang].hero.steam = label;
}

const coverageButtonLabels = {
  ko: "보도 자료",
  en: "Press Coverage",
  ja: "掲載記事",
  "zh-CN": "媒体报道",
  "zh-TW": "媒體報導",
  fr: "Articles de presse",
  de: "Presseberichte",
  pt: "Cobertura da imprensa",
  ru: "Публикации в прессе",
  es: "Cobertura de prensa",
};

for (const [lang, label] of Object.entries(coverageButtonLabels)) {
  content[lang].hero.coverage = label;
}

const coverageTranslations = {
  ko: {
    title: "보도 자료",
    items: [
      "“누워서라도 만들었다” 1인 개발 덱빌딩 로그라이크 ‘페소젠’",
      "침대에 누워 개발한 덱빌딩 게임 'Pathogen' 4분기 출시 예고",
      "4분기 출시 앞둔 1인 개발 게임 '페소젠' 데모 버전 출시",
    ],
  },
  en: {
    title: "Press Coverage",
    items: [
      "\"I made it even while lying down\" - solo-developed deck-building roguelike Pathogen",
      "Deck-building game Pathogen, developed from bed, planned for Q4 release",
      "Solo-developed game Pathogen releases demo ahead of Q4 launch",
    ],
  },
  ja: {
    title: "掲載記事",
    items: [
      "「寝転がってでも作った」個人開発デッキ構築ローグライク『Pathogen』",
      "ベッドで横になりながら開発されたデッキ構築ゲーム『Pathogen』、第4四半期発売予定",
      "第4四半期発売予定の個人開発ゲーム『Pathogen』デモ版を公開",
    ],
  },
  "zh-CN": {
    title: "媒体报道",
    items: [
      "“躺着也要做出来” 单人开发 Roguelike 卡牌构筑游戏《Pathogen》",
      "躺在床上开发的卡牌构筑游戏《Pathogen》预计第四季度推出",
      "第四季度发售前，单人开发游戏《Pathogen》推出试玩版",
    ],
  },
  "zh-TW": {
    title: "媒體報導",
    items: [
      "「躺著也要做出來」單人開發 Roguelike 卡牌構築遊戲《Pathogen》",
      "躺在床上開發的卡牌構築遊戲《Pathogen》預計第 4 季推出",
      "第 4 季上市前，單人開發遊戲《Pathogen》推出試玩版",
    ],
  },
  fr: {
    title: "Articles de presse",
    items: [
      "\"Je l'ai créé même allongé\" - Pathogen, roguelike de deck-building développé en solo",
      "Pathogen, jeu de deck-building développé depuis un lit, annoncé pour le T4",
      "Le jeu solo Pathogen publie sa démo avant sa sortie prévue au T4",
    ],
  },
  de: {
    title: "Presseberichte",
    items: [
      "\"Ich habe es sogar im Liegen entwickelt\" - Pathogen, ein solo entwickeltes Deckbuilding-Roguelike",
      "Im Bett entwickeltes Deckbuilding-Spiel Pathogen für Q4 angekündigt",
      "Solo entwickeltes Spiel Pathogen veröffentlicht Demo vor dem Q4-Release",
    ],
  },
  pt: {
    title: "Cobertura da imprensa",
    items: [
      "\"Criei mesmo deitado\" - Pathogen, roguelike de deck-building desenvolvido por uma pessoa",
      "Pathogen, jogo de deck-building desenvolvido na cama, tem lançamento previsto para o 4º trimestre",
      "Jogo solo Pathogen lança demo antes da estreia no 4º trimestre",
    ],
  },
  ru: {
    title: "Публикации в прессе",
    items: [
      "«Я делал ее даже лежа» - Pathogen, рогалик с построением колоды от соло-разработчика",
      "Pathogen, игра с построением колоды, разработанная прямо с кровати, готовится к релизу в IV квартале",
      "Соло-разработанная игра Pathogen выпустила демоверсию перед релизом в IV квартале",
    ],
  },
  es: {
    title: "Cobertura de prensa",
    items: [
      "\"Lo hice incluso acostado\" - Pathogen, roguelike de construcción de mazos desarrollado en solitario",
      "Pathogen, juego de construcción de mazos desarrollado desde la cama, previsto para el cuarto trimestre",
      "El juego en solitario Pathogen lanza demo antes de su estreno en el cuarto trimestre",
    ],
  },
};

for (const [lang, coverage] of Object.entries(coverageTranslations)) {
  content[lang].coverage = coverage;
}

mergeCopy(content.ko, {
  hero: {
    copy: "병원균에게 정수를 추출해 망령에게서 살아남으세요!",
  },
  story: {
    title: "실험체였던 망령의 복수 이야기",
    body2: "수년 뒤, 한 실험체가 복수심에 불타는 망령이 되어 돌아옵니다. 그는 자신에게 실험을 저질렀던 박사들을 죽이는 대신 납치하고, 강력한 병원체를 배양해 정수를 추출하라고 명령합니다.",
    note: "런에서 승리하면 실험체들의 기억을 목격할 수 있습니다. 선택형 이벤트는 그들의 고통과 트라우마, 감정을 보여주며 망령의 진실을 조금씩 드러냅니다.",
  },
  features: {
    title: [
      { text: "발라트로", className: "mix-balatro" },
      { text: " + ", className: "mix-plus" },
      { text: "슬레이 더 스파이어", className: "mix-slay" },
      { text: " + ", className: "mix-plus" },
      { text: "유희왕", className: "mix-yugioh" },
    ],
    subtitle: "익숙하지만 차별화된 덱빌딩 로그라이크",
    items: [
      { title: "카드 효과 연계", body: "연계되는 효과로 시너지를 내세요! 여러 카드의 콤보로 극한의 정수를 추출하세요!" },
      { title: "카드 순서가 중요한 퍼즐식 전개", body: "턴 종료 시 정수를 얻지만 모든 카드는 체력을 1 잃습니다. 어떤 카드를 살려둘지, 어떤 카드를 무덤으로 보낼지, 어느 타이밍에 효과를 활용할지 계획해야 합니다." },
      { title: "유전자 태그 보너스", body: "같은 유전자 태그를 가진 카드를 배치하면 강력한 태그 효과가 발동합니다." },
      { title: "제물 소환", body: "병원균을 제물로 바쳐 더 강력한 병원균을 소환하세요. 연속적인 제물 소환으로 매우 높은 정수를 추출할 수 있습니다." },
    ],
  },
  cta: {
    body: "Pathogen은 현재 개발 중입니다. 전체 스토리, 연출, 등은 출시 전까지 계속 다듬어질 예정입니다.",
  },
});

content.ko.press.body = "Pathogen은 1인 개발자 DREAMDART가 개발 중인 PC 및 Steam용 덱빌딩 로그라이크입니다. 2026년 4분기 얼리 액세스를 목표로 하며, 플레이어는 병원균에게 정수를 추출해 7턴 안에 목표 점수에 도달해야 합니다. 규칙은 직관적이지만, 매 턴마다 어떤 카드를 살리고, 어떤 카드를 제물로 바치며, 얼마나 위험한 선까지 밀어붙일지 선택해야 합니다.\n\nPathogen의 핵심은 도박이 아닌 전략입니다. 포커처럼 특정 패를 맞추는 방식이 아니라, 시너지 있는 덱 빌딩과 효율적인 카드 사용 순서가 생존 확률을 크게 높입니다. 턴이 끝날 때마다 모든 카드의 체력이 줄어들기 때문에 보드는 매 턴 작은 퍼즐처럼 변합니다. 단독으로는 약해 보이는 카드도 체력 회복, 정수 증가, 유전자 태그 보너스, 아티팩트, 제물 소환, 융합 레시피, DNA 조작과 연결되면 폭발적인 연계 효과의 시작점이 됩니다.\n\n플레이어는 원하는 덱을 만들기 위해 원치 않는 카드를 제거하거나, 혼합 실험으로 카드를 융합해 새로운 병원균을 만들 수 있습니다. 발견한 레시피를 따르면 특정 카드를 만들 수 있고, 아직 알 수 없는 조합은 숨겨진 규칙에 따라 예측하지 못한 결과를 낳습니다. 이 과정을 통해 플레이어가 원하는 덱을 더 쉽게 만들 수 있습니다. 또한 DNA 조작을 통해 손패에 있는 카드도 강력한 효과를 발동하거나, 손패와 필드의 카드가 서로 연계되는 상황을 만들 수 있습니다.\n\n게임이 익숙해질수록 플레이어는 강력한 한방을 준비하게 됩니다. 대부분의 카드는 단독으로는 적은 정수만 만들어내지만, 제대로 준비된 시너지는 한 턴의 점수를 수만, 수십만까지 끌어올릴 수 있습니다. 아슬아슬하게 죽음의 경계에 서 있다가 마지막 순간에 계획한 콤보가 터지며 살아남는 경험이 Pathogen의 가장 큰 재미입니다.\n\n스토리는 가상의 제국주의 국가에서 벌어진 비밀 군사 실험을 배경으로 합니다. 국가는 범죄자를 대상으로 순간이동, 비물질화, 염동력 같은 초자연적 군사 기술을 개발하기 위한 불법 실험을 진행했습니다. 수년 뒤, 한 실험체가 복수심에 불타는 망령이 되어 돌아옵니다. 망령은 자신에게 실험을 저질렀던 박사들을 죽이는 대신 납치하고, 강력한 병원균을 배양해 정수를 추출하라고 명령합니다. 망령이 왜 정수를 원하는지는 아무도 모릅니다. 살아남기 위해서는 명령을 따르는 수밖에 없습니다.\n\n런에서 승리하면 실험체들의 기억을 목격할 수 있습니다. 이 선택형 이벤트는 박사인 플레이어에게 그들의 고통, 트라우마, 감정을 다시 겪게 만들고, 도덕적으로 불가능한 선택을 강요합니다. 트롤리 문제처럼 어떤 선택도 완전히 옳지 않지만, 모든 선택은 보상으로 이어집니다. 플레이를 이어갈수록 흩어진 기억은 퍼즐처럼 연결되고, 망령이 왜 박사들을 납치했는지, 정수가 무엇을 의미하는지 조금씩 드러납니다.\n\n데모에는 다양한 빌드가 가능한 2개의 스타트 덱이 포함되며, 정식 버전에는 8개 이상의 덱이 포함될 예정입니다.";

for (const lang of Object.keys(content)) {
  const ctaBodies = {
    en: "Pathogen is currently in development. The full story, presentation, and other elements will continue to be refined before release.",
    ja: "Pathogenは現在開発中です。物語全体、演出などはリリースまでに引き続き調整されます。",
    "zh-CN": "Pathogen 目前仍在开发中。完整剧情、演出等内容将在发布前继续打磨。",
    "zh-TW": "Pathogen 目前仍在開發中。完整劇情、演出等內容將在發布前持續打磨。",
    fr: "Pathogen est actuellement en développement. L'histoire complète, la mise en scène et d'autres éléments continueront d'être affinés avant la sortie.",
    de: "Pathogen befindet sich derzeit in Entwicklung. Die vollständige Geschichte, Inszenierung und weitere Elemente werden bis zur Veröffentlichung weiter verfeinert.",
    pt: "Pathogen está atualmente em desenvolvimento. A história completa, a apresentação e outros elementos continuarão sendo refinados até o lançamento.",
    ru: "Pathogen сейчас находится в разработке. Полная история, постановка и другие элементы будут дорабатываться до релиза.",
    es: "Pathogen está actualmente en desarrollo. La historia completa, la presentación y otros elementos seguirán refinándose antes del lanzamiento.",
    ko: content.ko.cta.body,
  };
  content[lang].cta.body = ctaBodies[lang] || ctaBodies.en;
}

function replaceTextDeep(value, replacements) {
  if (typeof value === "string") {
    return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  }
  if (Array.isArray(value)) {
    return value.map((item) => replaceTextDeep(item, replacements));
  }
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      value[key] = replaceTextDeep(value[key], replacements);
    }
  }
  return value;
}

replaceTextDeep(content.ko, [
  ["스펙터", "망령"],
  ["에센스", "정수"],
  ["의사들을", "박사들을"],
  ["의사인", "박사인"],
  ["희생 소환", "제물 소환"],
  ["희생소환", "제물 소환"],
]);

replaceTextDeep(content.es, [
  ["incluido tú", "incluyéndote a ti"],
  ["recuperarte de robos difíciles", "recuperarte de malas manos"],
  ["Menos formar manos", "Menos dependencia de la mano"],
]);

replaceTextDeep(content.ru, [
  ["Коллекционный рогалик", "Рогалик с построением колоды"],
  ["коллекционный рогалик", "рогалик с построением колоды"],
  ["Specter", "Призрак"],
]);

replaceTextDeep(content.de, [
  ["Specter", "Geist"],
]);

replaceTextDeep(content.fr, [
  ["Fonctionnalités", "Points forts"],
  ["Ordre des cartes", "Ordre de jeu des cartes"],
  ["ordre des cartes", "ordre de jeu des cartes"],
  ["Un ordre de cartes", "Un ordre de jeu des cartes"],
]);

replaceTextDeep(content.pt, [
  ["Recursos do jogo", "Características do jogo"],
]);

replaceTextDeep(content["zh-CN"], [
  ["协同", "联动"],
  ["牌组构筑 Roguelike", "Roguelike 卡牌构筑游戏"],
]);

replaceTextDeep(content["zh-TW"], [
  ["協同", "聯動"],
  ["牌組構築 Roguelike", "Roguelike 卡牌構築遊戲"],
]);

replaceTextDeep(content.ja, [
  ["カード順", "カードを出す順番"],
]);

const params = new URLSearchParams(window.location.search);
const supportedLanguageCodes = languageButtons.map(([code]) => code);

function detectPreferredLanguage() {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of browserLanguages) {
    if (!language) continue;
    const normalized = language.toLowerCase();
    const exactMatch = supportedLanguageCodes.find((code) => code.toLowerCase() === normalized);
    if (exactMatch) return exactMatch;

    if (normalized.startsWith("zh")) {
      if (normalized.includes("tw") || normalized.includes("hk") || normalized.includes("mo") || normalized.includes("hant")) {
        return "zh-TW";
      }
      return "zh-CN";
    }

    const baseLanguage = normalized.split("-")[0];
    const baseMatch = supportedLanguageCodes.find((code) => code.toLowerCase().split("-")[0] === baseLanguage);
    if (baseMatch) return baseMatch;
  }
  return "en";
}

const requestedLang = params.get("lang");
const activeLang = content[requestedLang] ? requestedLang : detectPreferredLanguage();

function getValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], content[activeLang]);
}

function renderLanguageButtons() {
  const languageList = document.querySelector("#languageList");
  languageList.innerHTML = "";
  languageButtons.forEach(([code, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = code === activeLang ? "is-active" : "";
    button.addEventListener("click", () => {
      const nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("lang", code);
      window.location.href = nextUrl.toString();
    });
    languageList.append(button);
  });
}

function renderText() {
  document.documentElement.lang = activeLang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = getValue(node.dataset.i18n) ?? "";
  });
  document.querySelectorAll("[data-i18n-rich]").forEach((node) => {
    const value = getValue(node.dataset.i18nRich);
    node.textContent = "";
    if (Array.isArray(value)) {
      const wrapper = document.createElement("span");
      wrapper.className = "game-mix-title";
      value.forEach((part) => {
        const span = document.createElement("span");
        span.className = part.className || "";
        span.textContent = part.text;
        wrapper.append(span);
      });
      node.append(wrapper);
    } else {
      node.textContent = value ?? "";
    }
  });
}

function renderCards() {
  const featureGrid = document.querySelector("#featureGrid");
  featureGrid.innerHTML = "";
  content[activeLang].features.items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `<span class="number">${index + 1}</span><h3></h3><p></p>`;
    card.querySelector("h3").textContent = item.title;
    card.querySelector("p").textContent = item.body;
    featureGrid.append(card);
  });

  const differenceList = document.querySelector("#differenceList");
  differenceList.innerHTML = "";
  content[activeLang].difference.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "difference-item";
    card.innerHTML = "<h3></h3><p></p>";
    card.querySelector("h3").textContent = item.title;
    card.querySelector("p").textContent = item.body;
    differenceList.append(card);
  });
}

function setupGalleryModal() {
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#modalImage");
  const modalCaption = document.querySelector("#modalCaption");
  const closeButton = document.querySelector("#modalClose");

  document.querySelectorAll("[data-gallery-image]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      modalImage.src = button.dataset.galleryImage;
      modalImage.alt = image.alt;
      modalCaption.textContent = button.closest("figure").querySelector("figcaption").textContent;
      closeButton.setAttribute("aria-label", content[activeLang].modal.close);
      modal.classList.add("is-open");
      document.body.classList.add("modal-open");
      closeButton.focus();
    });
  });

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    modalImage.removeAttribute("src");
  }

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
}

function setupPressCopy() {
  const pressText = document.querySelector("#pressText");
  const copyButton = document.querySelector("#copyPress");
  const copyLabel = copyButton.querySelector("[data-copy-label]");
  pressText.value = content[activeLang].press.body;

  copyButton.addEventListener("click", async () => {
    pressText.select();
    pressText.setSelectionRange(0, pressText.value.length);
    try {
      await navigator.clipboard.writeText(pressText.value);
    } catch {
      document.execCommand("copy");
    }
    copyLabel.textContent = content[activeLang].press.copied;
    window.setTimeout(() => {
      copyLabel.textContent = content[activeLang].press.button;
    }, 1800);
  });
}

function setupTrailerVideo() {
  const iframe = document.querySelector("[data-youtube-id]");
  if (!iframe) return;
  const videoId = iframe.dataset.youtubeId;
  const origin = window.location.origin && window.location.origin !== "null" ? window.location.origin : "https://www.youtube.com";
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    origin,
  });
  iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

renderLanguageButtons();
renderText();
renderCards();
setupTrailerVideo();
setupGalleryModal();
setupPressCopy();
