const ROSTER30=[
  {
    "key": "gold_guest",
    "name": "金董",
    "tag": "銀樓老闆",
    "hint": "可以顧金子，不能啃金子。",
    "pref": {
      "guard": 2,
      "calm": 2,
      "affection": 1,
      "steal": -3
    },
    "notice": "金董把戒指收好：「先來握個爪。」",
    "ending": "gold_home",
    "title": "銀樓四腳保全",
    "punch": "我不看金價，我看誰拿肉乾。",
    "story": "金董替你準備軟墊，你每天陪他開店。金子鎖進保險箱，你睡在他腳邊。",
    "scene": "gold",
    "place": "金光閃閃的銀樓",
    "icon": "◈"
  },
  {
    "key": "dogking_guest",
    "name": "狗王",
    "tag": "路邊街友",
    "hint": "我地方不大，靠過來坐吧。",
    "pref": {
      "affection": 3,
      "calm": 2,
      "shy": 1,
      "funny": 1,
      "mess": -0.3
    },
    "notice": "狗王拍了拍旁邊：「這個位置留給你。」",
    "ending": "dogking_home",
    "title": "狗王的家人",
    "punch": "房子是紙的，家是真的。",
    "story": "你和狗王在路邊紙箱小窩拍了第一張合照。志工協助你們取得食物和醫療；狗王把厚毯子鋪平，讓你靠著他睡。",
    "scene": "dogking",
    "place": "路邊紙箱小窩",
    "icon": "♡"
  },
  {
    "key": "nightmarket_guest",
    "name": "阿炸姐",
    "tag": "鹽酥雞攤主",
    "hint": "會迎客就好，不准偷雞排。",
    "pref": {
      "affection": 2,
      "funny": 2,
      "loud": 0.5,
      "steal": -3,
      "calm": 1
    },
    "notice": "她笑著說：「你的薪水是狗零食。」",
    "ending": "nightmarket_home",
    "title": "夜市試吃部長",
    "punch": "雞排不加辣，摸狗不用錢。",
    "story": "你陪阿炸姐擺攤，在遠離油鍋的休息區看人來人往。客人先點餐，再排隊跟你打招呼。",
    "scene": "nightmarket",
    "place": "夜市鹽酥雞攤",
    "icon": "✦"
  },
  {
    "key": "temple_guest",
    "name": "福伯",
    "tag": "廟公",
    "hint": "香客很多，慢慢走，別嚇到人。",
    "pref": {
      "calm": 3,
      "affection": 1.5,
      "shy": 1,
      "loud": -2
    },
    "notice": "福伯搖搖扇子：「你倒是很有定力。」",
    "ending": "temple_home",
    "title": "廟口編制外神獸",
    "punch": "我保佑有帶肉乾的人。",
    "story": "福伯帶你回廟邊的家。你有自己的床，白天在廟埕陪他掃地；香客都說今天的神獸又在睡。",
    "scene": "temple",
    "place": "紅燈籠下的廟埕",
    "icon": "☀"
  },
  {
    "key": "captain_guest",
    "name": "海哥",
    "tag": "漁船船長",
    "hint": "先跟我熟，出海的事慢慢學。",
    "pref": {
      "curious": 2,
      "guard": 1,
      "affection": 2,
      "calm": 1
    },
    "notice": "海哥伸手：「靠過來，讓我看看你。」",
    "ending": "captain_home",
    "title": "四腳大副",
    "punch": "船長掌舵，我掌握午餐。",
    "story": "海哥先帶你熟悉陸上的家，再教你穿救生衣。這張合照拍在停泊的船上，你已經佔領最舒服的座位。",
    "scene": "captain",
    "place": "漁港裡的船甲板",
    "icon": "⚓"
  },
  {
    "key": "tattoo_guest",
    "name": "阿墨",
    "tag": "刺青師",
    "hint": "你翻肚，我只摸，不上色。",
    "pref": {
      "cute": 2.5,
      "calm": 2,
      "affection": 1.5,
      "loud": -1.5
    },
    "notice": "阿墨蹲下來：「這個花色，原廠就很好看。」",
    "ending": "tattoo_home",
    "title": "刺青店原廠花色模特",
    "punch": "我的花色，出生就全額付清。",
    "story": "阿墨讓你在工作區外的休息角落當模特。客人想刺你的花色，你只想翻肚換摸摸。",
    "scene": "tattoo",
    "place": "刺青工作室",
    "icon": "✧"
  },
  {
    "key": "opera_guest",
    "name": "月娘",
    "tag": "歌仔戲團長",
    "hint": "有聲音很好，記得等我唱完。",
    "pref": {
      "loud": 1.8,
      "funny": 2,
      "cute": 1.5,
      "affection": 1,
      "destroy": -2
    },
    "notice": "月娘清清喉嚨：「換你接一句？」",
    "ending": "opera_home",
    "title": "戲班壓軸汪角",
    "punch": "我一開口，全台都知道收工。",
    "story": "你跟月娘回家，也陪她到戲班後台休息。每次卸妝，你都認真聞一遍：原來還是同一個人。",
    "scene": "opera",
    "place": "歌仔戲後台",
    "icon": "♫"
  },
  {
    "key": "taxi_guest",
    "name": "運將陳",
    "tag": "計程車司機",
    "hint": "會安靜陪我等客就很棒。",
    "pref": {
      "calm": 2.5,
      "affection": 2,
      "curious": 1,
      "loud": -2,
      "mess": -2
    },
    "notice": "運將陳摸摸座椅墊：「這裡是你的專座。」",
    "ending": "taxi_home",
    "title": "小黃副駕長",
    "punch": "跳表的是車，跳上車的是我。",
    "story": "運將陳帶你回家，休假時用安全座椅載你兜風。停車合照時，你比司機更像車主。",
    "scene": "taxi",
    "place": "小黃休息站",
    "icon": "↗"
  },
  {
    "key": "recycle_guest",
    "name": "阿惜嬤",
    "tag": "資源回收阿嬤",
    "hint": "東西可以舊，感情不能丟。",
    "pref": {
      "affection": 3,
      "curious": 1.5,
      "calm": 1.5,
      "destroy": -0.5
    },
    "notice": "阿嬤笑著說：「你不是回收的，你是寶貝。」",
    "ending": "recycle_home",
    "title": "阿嬤撿到的寶",
    "punch": "她什麼都撿，唯獨沒挑我的毛病。",
    "story": "你陪阿惜嬤回家。她替你整理了乾淨軟窩，出門時讓你待在安全處；收工後一起慢慢散步。",
    "scene": "recycle",
    "place": "整理好的紙箱回收站",
    "icon": "♻"
  },
  {
    "key": "astronomer_guest",
    "name": "星仔",
    "tag": "天文館研究員",
    "hint": "可以好奇，不要對月亮一直吠。",
    "pref": {
      "curious": 3,
      "calm": 2,
      "shy": 0.5,
      "loud": -2
    },
    "notice": "星仔指著窗外：「那不是你丟出去的球。」",
    "ending": "astronomer_home",
    "title": "宇宙觀測汪",
    "punch": "宇宙很大，我只關心飯盆。",
    "story": "你在星仔家有了自己的床。晴朗夜晚，他帶你到天文台外散步；他找星座，你找草叢裡的味道。",
    "scene": "astronomer",
    "place": "山頂天文台",
    "icon": "✩"
  },
  {
    "key": "baker_guest",
    "name": "包師傅",
    "tag": "包子店老闆",
    "hint": "躺得像包子也不能上蒸籠喔。",
    "pref": {
      "calm": 2,
      "cute": 2,
      "affection": 2,
      "steal": -3
    },
    "notice": "包師傅擦擦手：「來，摸一下不算加料。」",
    "ending": "baker_home",
    "title": "包子店鎮店小籠包",
    "punch": "別蒸我，我只是長得很澎。",
    "story": "包師傅在店外設好休息角落。你每天陪他收店回家，熟客都知道這顆小籠包不能外帶。",
    "scene": "baker",
    "place": "熱騰騰的包子店",
    "icon": "○"
  },
  {
    "key": "courier_guest",
    "name": "小飛",
    "tag": "外送員",
    "hint": "送東西給我？你很懂同行喔。",
    "pref": {
      "affection": 2,
      "curious": 2,
      "funny": 1.5,
      "steal": -1
    },
    "notice": "小飛伸出手：「這單我簽收了。」",
    "ending": "courier_home",
    "title": "最後一公尺外送員",
    "punch": "餐點不一定到，我一定先到。",
    "story": "小飛把你帶回家，下班第一件事就是帶你散步。休息日的合照拍在包裹站，你負責把玩具送到腳邊。",
    "scene": "courier",
    "place": "包裹站的休息區",
    "icon": "➜"
  },
  {
    "key": "books_guest",
    "name": "書音",
    "tag": "獨立書店主",
    "hint": "安靜陪我看書，就算有讀完。",
    "pref": {
      "calm": 3,
      "shy": 1.5,
      "affection": 1.5,
      "destroy": -3,
      "loud": -2
    },
    "notice": "書音翻了一頁：「你可以不用裝懂。」",
    "ending": "books_home",
    "title": "書店睡讀生",
    "punch": "我沒讀過，但我都睡過。",
    "story": "書音帶你回家，也在書店替你留一張軟墊。你陪讀者坐著，成為店裡最常被翻肚的一本書。",
    "scene": "books",
    "place": "暖燈下的獨立書店",
    "icon": "▤"
  },
  {
    "key": "scrap_guest",
    "name": "鐵雄",
    "tag": "廢鐵機械師",
    "hint": "玩具壞掉拿給我，別咬電線。",
    "pref": {
      "curious": 2.5,
      "funny": 2,
      "affection": 1,
      "destroy": 0.2,
      "bite": -5
    },
    "notice": "鐵雄拿起工具：「這個還有救，你先放嘴。」",
    "ending": "scrap_home",
    "title": "廢鐵王國小總裁",
    "punch": "看起來都破的，只有我被寵壞。",
    "story": "鐵雄清出安全的休息室，帶你每天一起上下班。你們在廢鐵機器人旁合照，他說最值錢的是你。",
    "scene": "scrap",
    "place": "廢鐵機器人工作坊",
    "icon": "⚙"
  },
  {
    "key": "tea_guest",
    "name": "春姨",
    "tag": "山上茶農",
    "hint": "鼻子借我聞茶，不是叫你吃茶。",
    "pref": {
      "curious": 2,
      "calm": 2.5,
      "affection": 1,
      "mess": -1
    },
    "notice": "春姨點點頭：「聞得很認真，比客人懂。」",
    "ending": "tea_home",
    "title": "茶園聞香師",
    "punch": "人家回甘，我只會回汪。",
    "story": "春姨帶你回山上的家。早晨一起走安全的田埂，午睡一起聽雨；你最喜歡她泡茶時留下的腳邊位置。",
    "scene": "tea",
    "place": "山腰茶園農舍",
    "icon": "♧"
  },
  {
    "key": "magic_guest",
    "name": "阿奇",
    "tag": "街頭魔術師",
    "hint": "把東西交給我，看它會不會消失。",
    "pref": {
      "funny": 3,
      "curious": 2,
      "cute": 1,
      "steal": 0.5,
      "affection": 1
    },
    "notice": "阿奇張開雙手：「雞腿呢？你是不是搶先表演了？」",
    "ending": "magic_home",
    "title": "街頭魔術助理",
    "punch": "我負責消失，主人負責買單。",
    "story": "阿奇帶你回家，用安全的玩具和你玩找找看。街頭表演休息時，你一翻肚，掌聲比他的魔術還大。",
    "scene": "magic",
    "place": "紫色布幕的小舞台",
    "icon": "♠"
  },
  {
    "key": "surf_guest",
    "name": "海娜",
    "tag": "衝浪教練",
    "hint": "先在岸上玩，海浪不用急著追。",
    "pref": {
      "curious": 2,
      "funny": 2,
      "affection": 2,
      "calm": 0.5
    },
    "notice": "海娜指著球：「今天先練沙灘撿球。」",
    "ending": "surf_home",
    "title": "沙灘浪浪教練",
    "punch": "以前是浪浪，現在研究浪。",
    "story": "海娜帶你住進海邊的家。你們避開烈日慢慢散步，她練衝浪，你在安全的岸邊和照顧者練躺平。",
    "scene": "surf",
    "place": "海邊衝浪小屋",
    "icon": "≈"
  },
  {
    "key": "farewell_guest",
    "name": "靜姐",
    "tag": "禮儀師",
    "hint": "不用做什麼，陪人坐著就好。",
    "pref": {
      "calm": 3,
      "affection": 2,
      "shy": 1,
      "loud": -2.5
    },
    "notice": "靜姐輕輕伸手：「今天有你陪，很好。」",
    "ending": "farewell_home",
    "title": "溫柔送行的小夥伴",
    "punch": "我不懂告別，但我會陪著。",
    "story": "靜姐帶你回家。你在花房的休息角落陪她整理花束，也學會在別人難過時安靜靠近。",
    "scene": "farewell",
    "place": "白百合花房",
    "icon": "❁"
  },
  {
    "key": "fish_guest",
    "name": "阿鮮",
    "tag": "魚市場攤主",
    "hint": "鼻子很靈喔，魚不能自己拿。",
    "pref": {
      "curious": 2.5,
      "affection": 2,
      "guard": 1,
      "loud": 0.5,
      "steal": -3
    },
    "notice": "阿鮮把圍裙擦乾：「摸狗的手先洗乾淨。」",
    "ending": "fish_home",
    "title": "魚市場海味總監",
    "punch": "魚我不賣，人我很會收買。",
    "story": "阿鮮帶你回家，收攤後總會陪你繞港邊散步。市場合照裡，你站在乾燥的休息區，表情像在查貨。",
    "scene": "fish",
    "place": "魚市場的收攤時刻",
    "icon": "◇"
  },
  {
    "key": "vet_guest",
    "name": "小棠",
    "tag": "獸醫師",
    "hint": "慢慢靠近，今天沒有打針。",
    "pref": {
      "calm": 2,
      "affection": 2,
      "shy": 1
    },
    "notice": "小棠把手放低，等你自己靠近。",
    "ending": "vet_home",
    "title": "診所下班小跟班",
    "punch": "別人怕看醫生，我跟醫生回家。",
    "story": "你住進小棠家。診所再忙，她都記得下班後陪你散步；你第一次知道，白袍也可以是熟悉的味道。",
    "scene": "vet",
    "place": "暖暖的動物診所",
    "icon": "✦"
  },
  {
    "key": "grandpa_guest",
    "name": "林伯",
    "tag": "獨居爺爺",
    "hint": "陪我坐一下，好嗎？",
    "pref": {
      "calm": 3,
      "affection": 2,
      "shy": 1,
      "loud": -2
    },
    "notice": "林伯挪了一點位置：「這裡不會擠。」",
    "ending": "grandpa_home",
    "title": "兩個人的晚餐",
    "punch": "他等我吃飯，我等他回家。",
    "story": "林伯開始每天準時出門散步，也記得吃晚餐。你有自己的碗，他有了每天想說話的對象。",
    "scene": "grandpa",
    "place": "爺爺家的兩張椅子",
    "icon": "♡"
  },
  {
    "key": "ranger_guest",
    "name": "山姐",
    "tag": "山林巡守員",
    "hint": "先聞聞這個包，不用急著吠。",
    "pref": {
      "curious": 3,
      "calm": 1.5,
      "affection": 1,
      "guard": 1
    },
    "notice": "山姐蹲下來，讓你慢慢聞。",
    "ending": "ranger_home",
    "title": "山屋四腳管理員",
    "punch": "這座山的訊號，沒有我的鼻子好。",
    "story": "你和山姐住在山腳下。休假沿安全步道散步，回到山屋就把門口的軟墊睡得暖暖的。",
    "scene": "ranger",
    "place": "松林裡的巡守山屋",
    "icon": "✦"
  },
  {
    "key": "bread_guest",
    "name": "阿麥",
    "tag": "麵包師",
    "hint": "你是狗狗，不是會走路的可頌。",
    "pref": {
      "cute": 2,
      "calm": 2,
      "affection": 2,
      "steal": -3
    },
    "notice": "阿麥笑著看你翻肚：「發酵得很好。」",
    "ending": "bread_home",
    "title": "麵包店會呼吸的可頌",
    "punch": "我的肚子，不用再發酵了。",
    "story": "阿麥帶你回家，也在店外留了安全休息區。每天收店，你比鬧鐘更準時提醒他回家。",
    "scene": "bread",
    "place": "木香麵包坊",
    "icon": "✦"
  },
  {
    "key": "laundry_guest",
    "name": "泡泡姨",
    "tag": "洗衣店老闆",
    "hint": "可以玩，衣服不要叼走喔。",
    "pref": {
      "funny": 2,
      "affection": 2,
      "calm": 1,
      "steal": -2
    },
    "notice": "泡泡姨拍拍空籃：「這不是你的交通工具。」",
    "ending": "laundry_home",
    "title": "洗衣店毛毛總監",
    "punch": "洗得掉污漬，洗不掉我的毛。",
    "story": "你陪泡泡姨一起上下班。你的床鋪總是乾淨柔軟，客人卻說自從有了你，衣服更有家的味道。",
    "scene": "laundry",
    "place": "轉個不停的洗衣店",
    "icon": "✦"
  },
  {
    "key": "moto_guest",
    "name": "阿扳",
    "tag": "機車行技師",
    "hint": "工具給我，玩具給你。",
    "pref": {
      "curious": 2,
      "affection": 2,
      "guard": 1,
      "calm": 1
    },
    "notice": "阿扳伸手：「叼來這邊，我幫你修。」",
    "ending": "moto_home",
    "title": "機車行四腳督工",
    "punch": "引擎我不懂，誰下班我很懂。",
    "story": "阿扳把工作區隔開，讓你在乾淨安全的辦公室休息。最後一台車修好，你已經叼著牽繩等她了。",
    "scene": "moto",
    "place": "巷口機車行",
    "icon": "✦"
  },
  {
    "key": "gamer_guest",
    "name": "阿宅",
    "tag": "電競玩家",
    "hint": "我打排位，你可以躺旁邊。",
    "pref": {
      "calm": 3,
      "cute": 1,
      "affection": 1.5,
      "loud": -2
    },
    "notice": "阿宅拿下耳機：「這局結束就摸你。」",
    "ending": "gamer_home",
    "title": "電競隊唯一不嘴砲的",
    "punch": "他上不了分，我上得了床。",
    "story": "你讓阿宅學會準時離開電腦。遊戲可以再開一局，你的散步時間不能跳過。",
    "scene": "gamer",
    "place": "霓虹電競房",
    "icon": "✦"
  },
  {
    "key": "teacher_guest",
    "name": "陳老師",
    "tag": "退休老師",
    "hint": "不用考第一名，願意靠近就很好。",
    "pref": {
      "calm": 2.5,
      "affection": 2,
      "cute": 1,
      "destroy": -2
    },
    "notice": "老師放下書：「下課了，過來玩。」",
    "ending": "teacher_home",
    "title": "永遠不用補考的學生",
    "punch": "我只會坐下，她就說我很棒。",
    "story": "陳老師每天陪你慢慢學。做錯了不會挨打，做對了會被稱讚；你終於敢在家裡安心翻肚。",
    "scene": "teacher",
    "place": "老師的陽光書房",
    "icon": "♡"
  },
  {
    "key": "photo_guest",
    "name": "阿光",
    "tag": "生態攝影師",
    "hint": "看鏡頭，或者做你自己都好。",
    "pref": {
      "curious": 2,
      "cute": 2,
      "funny": 1.5,
      "affection": 1
    },
    "notice": "阿光放下相機：「先讓你聞過再拍。」",
    "ending": "photo_home",
    "title": "鏡頭蓋失蹤嫌疑犬",
    "punch": "照片都有我，鏡頭蓋都找不到。",
    "story": "你成了阿光最常拍的家人。他不逼你擺姿勢，你一歪頭，照片就比他等一整天的鳥還受歡迎。",
    "scene": "photo",
    "place": "自然攝影工作室",
    "icon": "✦"
  },
  {
    "key": "farm_guest",
    "name": "田哥",
    "tag": "小農",
    "hint": "可以聞田邊，不要追小動物。",
    "pref": {
      "curious": 2,
      "affection": 2,
      "calm": 1.5,
      "guard": 0.5
    },
    "notice": "田哥指著陰涼處：「熱了就來這邊。」",
    "ending": "farm_home",
    "title": "菜園巡田小隊長",
    "punch": "菜是他種的，地是我巡的。",
    "story": "田哥帶你住進紅磚老家。你們避開農機與施作區，一起走田邊的安全小路，傍晚再回家吃飯。",
    "scene": "farm",
    "place": "紅磚農舍前",
    "icon": "✦"
  },
  {
    "key": "music_guest",
    "name": "小弦",
    "tag": "音樂老師",
    "hint": "等我拉完，你再接一句。",
    "pref": {
      "calm": 2,
      "loud": 0.7,
      "funny": 2,
      "affection": 1.5
    },
    "notice": "小弦笑了：「這個音高，我沒教過。」",
    "ending": "music_home",
    "title": "音樂教室走音助教",
    "punch": "學生走音，我負責附和。",
    "story": "小弦替你準備安靜休息區。你陪他下課回家，偶爾在琴聲停下後補一聲汪，全班都笑了。",
    "scene": "music",
    "place": "音樂教室的小舞台",
    "icon": "✦"
  },
  {
    "key": "inn_guest",
    "name": "海月姨",
    "tag": "海邊民宿主人",
    "hint": "客人很多，累了就回自己的房間。",
    "pref": {
      "affection": 2.5,
      "calm": 2,
      "cute": 1,
      "loud": -1.5
    },
    "notice": "海月姨伸手：「歡迎入住，沒有退房日。」",
    "ending": "inn_home",
    "title": "沒有退房日的房客",
    "punch": "別人住兩晚，我住一輩子。",
    "story": "海月姨把你帶回海邊的家。客人來來去去，只有你的床位永遠不會被訂走。",
    "scene": "inn",
    "place": "藍門海邊民宿",
    "icon": "♡"
  },
  {
    "key": "guard_guest",
    "name": "阿守",
    "tag": "夜班保全",
    "hint": "陪我巡一圈，累了就休息。",
    "pref": {
      "guard": 2,
      "calm": 2,
      "affection": 1.5,
      "loud": 0.5
    },
    "notice": "阿守把手電筒關掉：「別照到你的眼睛。」",
    "ending": "guard_home",
    "title": "夜班唯一醒著的主管",
    "punch": "他顧大樓，我顧他的便當。",
    "story": "你跟阿守住在一起。休息日拍的這張合照裡，他站得筆直，你在值班亭旁邊打了個大哈欠。",
    "scene": "guard",
    "place": "夜裡亮著燈的值班亭",
    "icon": "✦"
  },
  {
    "key": "pottery_guest",
    "name": "小陶",
    "tag": "陶藝師",
    "hint": "尾巴先慢一點，架上都還沒燒。",
    "pref": {
      "calm": 3,
      "cute": 1.5,
      "affection": 1.5,
      "destroy": -3
    },
    "notice": "小陶護住杯子，又忍不住摸你。",
    "ending": "pottery_home",
    "title": "陶藝工作室碎碎平安",
    "punch": "我只甩尾，作品自己想退休。",
    "story": "小陶把作品架加上防護，替你留一個專屬角落。你陪她揉土，她替你做了一只歪歪的名字飯碗。",
    "scene": "pottery",
    "place": "陶藝工作室",
    "icon": "✦"
  },
  {
    "key": "bike_guest",
    "name": "輪伯",
    "tag": "單車店老闆",
    "hint": "慢慢走，不用跟輪子比快。",
    "pref": {
      "curious": 2,
      "affection": 2,
      "calm": 1.5
    },
    "notice": "輪伯放下輪框：「今天先陪你走路。」",
    "ending": "bike_home",
    "title": "單車店步行大使",
    "punch": "全店都有輪子，我最堅持用走的。",
    "story": "輪伯收店後不急著騎車，先帶你慢慢走一圈。你們在老店門口拍照，像認識了很久的老朋友。",
    "scene": "bike",
    "place": "老單車行",
    "icon": "✦"
  },
  {
    "key": "dumpling_guest",
    "name": "阿餃嬤",
    "tag": "水餃攤阿嬤",
    "hint": "翻肚可以，餃子皮不能當被子。",
    "pref": {
      "cute": 2,
      "affection": 3,
      "calm": 1,
      "steal": -2
    },
    "notice": "阿嬤摸摸你：「包得不漂亮也一樣疼。」",
    "ending": "dumpling_home",
    "title": "水餃攤漏餡小寶貝",
    "punch": "我一翻肚，全家都說漏餡了。",
    "story": "阿餃嬤帶你回家，飯碗和床鋪都準備好了。家人說她又多養了一個孫，你聽不懂，只知道每次叫你都很溫柔。",
    "scene": "dumpling",
    "place": "水餃攤收工時",
    "icon": "✦"
  },
  {
    "key": "puppet_guest",
    "name": "阿布",
    "tag": "布袋戲師傅",
    "hint": "戲偶不是玩具，這顆球才是你的。",
    "pref": {
      "funny": 2.5,
      "curious": 2,
      "cute": 1,
      "destroy": -2
    },
    "notice": "阿布讓戲偶點點頭：「大俠，請留步。」",
    "ending": "puppet_home",
    "title": "布袋戲江湖汪俠",
    "punch": "江湖人稱：一掌沒出，先翻肚。",
    "story": "阿布帶你回家，後台也有你的安全小窩。每次謝幕，你走出來伸懶腰，觀眾都以為真正主角終於登場。",
    "scene": "puppet",
    "place": "掌中戲後台",
    "icon": "✦"
  },
  {
    "key": "ferry_guest",
    "name": "阿渡",
    "tag": "渡輪船員",
    "hint": "船停好了再拍照，安全第一。",
    "pref": {
      "calm": 2.5,
      "affection": 2,
      "curious": 1
    },
    "notice": "阿渡指著岸邊：「我們先在陸地上散步。」",
    "ending": "ferry_home",
    "title": "碼頭接班小水手",
    "punch": "船有時刻表，我有吃飯表。",
    "story": "阿渡每次下班，你都在家門邊等他。這天他帶你到碼頭拍照，海風吹過耳朵，回家的路就在身旁。",
    "scene": "ferry",
    "place": "港邊渡輪碼頭",
    "icon": "✦"
  },
  {
    "key": "remote_guest",
    "name": "小雲",
    "tag": "在家工作者",
    "hint": "我開會時，你可以幫我躺平。",
    "pref": {
      "calm": 2.5,
      "cute": 2,
      "affection": 2,
      "loud": -1.5
    },
    "notice": "小雲把筆電闔上：「現在輪到你了。」",
    "ending": "remote_home",
    "title": "遠端會議固定班底",
    "punch": "我沒領薪水，但每場會都到。",
    "story": "小雲把散步排進行事曆。你常在視訊會議後面睡覺，同事最關心的不是進度，而是今天你有沒有入鏡。",
    "scene": "remote",
    "place": "在家工作的客廳",
    "icon": "✦"
  },
  {
    "key": "rescue_guest",
    "name": "阿暖",
    "tag": "中途志工",
    "hint": "不用急著表現，我會慢慢等你。",
    "pref": {
      "affection": 2.5,
      "shy": 2,
      "calm": 2,
      "funny": 1
    },
    "notice": "阿暖沒有伸手抓你，只把位置留好。",
    "ending": "rescue_home",
    "title": "中途變成永久",
    "punch": "她說暫住，卻一直沒收我的床。",
    "story": "阿暖原本只打算照顧你到找到家。後來申請表上的認養人，寫下了她自己的名字。",
    "scene": "rescue",
    "place": "中途志工的家",
    "icon": "♡"
  }
];
let BODY=null,PAUSED=false,LIFE={},LAST_OUTCOME=null;
const NEW_SPRITES={"idle":{"file":"idle.png","frames":4,"fps":4,"loop":true,"head":[[359,189,42,0],[352,193,42,0],[353,194,42,0],[352,190,42,0]],"mouth":[[406,210],[397,214],[398,215],[397,211]]},"walk":{"file":"walk.png","frames":6,"fps":8,"loop":true,"head":[[360,214,42,0],[362,218,42,0],[367,220,42,0],[362,219,42,0],[361,207,42,0],[362,212,42,0]],"mouth":[[409,239],[411,243],[419,245],[412,244],[410,233],[412,238]]},"nudge":{"file":"nudge.png","frames":2,"fps":3,"loop":false,"head":[[367,222,42,0],[353,213,42,0]],"mouth":[[423,219],[402,210]]},"bark_angry":{"file":"bark_angry.png","frames":4,"fps":7,"loop":true,"head":[[360,189,42,0],[356,200,42,0],[354,232,42,0],[351,190,42,0]],"mouth":[[412,224],[406,233],[404,262],[398,225]]},"pee":{"file":"pee.png","frames":4,"fps":3,"loop":false,"head":[[362,192,42,0],[366,189,42,0],[347,189,42,0],[360,193,42,0]],"mouth":[[405,213],[410,210],[384,210],[401,214]]},"bite_tug":{"file":"bite_tug.png","frames":4,"fps":4,"loop":false,"head":[[362,209,42,0],[367,222,42,0],[367,225,42,0],[362,190,42,0]],"mouth":[[411,245],[418,256],[386,216],[411,228]]},"rub":{"file":"rub.png","frames":4,"fps":4,"loop":true,"head":[[350,189,42,0],[349,192,42,0],[348,193,42,0],[345,192,42,0]],"mouth":[[400,157],[398,161],[397,162],[393,161]]},"belly_up":{"file":"belly_up.png","frames":4,"fps":4,"loop":true,"head":[[377,279,42,0],[369,277,42,0],[372,266,42,0],[369,272,42,0]],"mouth":[[425,294],[415,291],[418,282],[415,287]]},"sploot":{"file":"sploot.png","frames":3,"fps":2,"loop":false,"head":[[376,354,42,0],[377,353,42,0],[377,353,42,0]],"mouth":[[436,436],[437,435],[437,435]]},"snap":{"file":"snap.png","frames":1,"fps":0,"loop":false,"head":[[367,254,42,0]],"mouth":[[411,270]]},"sit":{"file":"sit.png","frames":1,"fps":0,"loop":false,"head":[[351,189,42,0]],"mouth":[[389,210]]},"head_tilt":{"file":"head_tilt.png","frames":1,"fps":0,"loop":false,"head":[[339,189,42,0]],"mouth":[[372,210]]},"sad":{"file":"sad.png","frames":1,"fps":0,"loop":false,"head":[[367,316,42,0]],"mouth":[[411,328]]},"scared":{"file":"scared.png","frames":1,"fps":0,"loop":false,"head":[[367,296,42,0]],"mouth":[[411,309]]},"sleep":{"file":"sleep.png","frames":2,"fps":1,"loop":true,"head":[[365,290,42,0],[367,290,42,0]],"mouth":[[409,303],[411,303]]},"lie_flat":{"file":"lie_flat.png","frames":1,"fps":0,"loop":false,"head":[[377,390,42,0]],"mouth":[[425,396]]},"look_up":{"file":"look_up.png","frames":1,"fps":0,"loop":false,"head":[[355,189,42,0]],"mouth":[[395,210]]},"car_window":{"file":"car_window.png","frames":1,"fps":0,"loop":false,"head":[[367,243,42,0]],"mouth":[[411,260]]},"portrait":{"file":"portrait.png","frames":1,"fps":0,"loop":false,"head":[[350,189,42,0]],"mouth":[[387,210]]},"portrait_side":{"file":"portrait_side.png","frames":1,"fps":0,"loop":false,"head":[[367,189,42,0]],"mouth":[[411,210]]},"sniff":{"file":"sniff.png","frames":1,"fps":0,"loop":false,"head":[[377,243,42,0]],"mouth":[[425,260]]},"run":{"file":"walk.png","frames":6,"fps":12,"loop":true,"head":[[360,214,42,0],[362,218,42,0],[367,220,42,0],[362,219,42,0],[361,207,42,0],[362,212,42,0]],"mouth":[[409,239],[411,243],[419,245],[412,244],[410,233],[412,238]],"alias":"walk"},"carry_walk":{"file":"walk.png","frames":6,"fps":8,"loop":true,"head":[[360,214,42,0],[362,218,42,0],[367,220,42,0],[362,219,42,0],[361,207,42,0],[362,212,42,0]],"mouth":[[409,239],[411,243],[419,245],[412,244],[410,233],[412,238]],"alias":"walk"},"wag":{"file":"idle.png","frames":4,"fps":4,"loop":true,"head":[[359,189,42,0],[352,193,42,0],[353,194,42,0],[352,190,42,0]],"mouth":[[406,210],[397,214],[398,215],[397,211]],"alias":"idle"},"bark":{"file":"bark_angry.png","frames":4,"fps":7,"loop":true,"head":[[360,189,42,0],[356,200,42,0],[354,232,42,0],[351,190,42,0]],"mouth":[[412,224],[406,233],[404,262],[398,225]],"alias":"bark_angry"},"eat":{"file":"sniff.png","frames":1,"fps":0,"loop":false,"head":[[377,243,42,0]],"mouth":[[425,260]],"alias":"sniff"},"roll":{"file":"belly_up.png","frames":4,"fps":4,"loop":true,"head":[[377,279,42,0],[369,277,42,0],[372,266,42,0],[369,272,42,0]],"mouth":[[425,294],[415,291],[418,282],[415,287]],"alias":"belly_up"},"paw":{"file":"idle.png","frames":4,"fps":4,"loop":true,"head":[[359,189,42,0],[352,193,42,0],[353,194,42,0],[352,190,42,0]],"mouth":[[406,210],[397,214],[398,215],[397,211]],"alias":"idle"},"lie":{"file":"sploot.png","frames":3,"fps":2,"loop":false,"head":[[376,354,42,0],[377,353,42,0],[377,353,42,0]],"mouth":[[436,436],[437,435],[437,435]],"alias":"sploot"},"excited":{"file":"idle.png","frames":4,"fps":4,"loop":true,"head":[[359,189,42,0],[352,193,42,0],[353,194,42,0],[352,190,42,0]],"mouth":[[406,210],[397,214],[398,215],[397,211]],"alias":"idle"},"sofa":{"file":"sit.png","frames":1,"fps":0,"loop":false,"head":[[351,189,42,0]],"mouth":[[389,210]],"alias":"sit"},"lean":{"file":"rub.png","frames":4,"fps":4,"loop":true,"head":[[350,189,42,0],[349,192,42,0],[348,193,42,0],[345,192,42,0]],"mouth":[[400,157],[398,161],[397,162],[393,161]],"alias":"rub"}};
let PET='dog';try{PET=localStorage.getItem('adopt_species')==='cat'?'cat':'dog'}catch(e){}
function petPhotoKey(){return PET==='cat'?'adopt_whole_cat_v1':'adopt_whole_dog_v1'}
function petDefaultName(){if(PET==='dog')return '阿聰';try{return localStorage.getItem('adopt_cat_name')||'阿麥'}catch(e){return '阿麥'}}
function petText(s){
 if(PET!=='cat')return String(s);
 return String(s).replace(/狗王/g,'__KING__').replace(/緝毒犬見習生/g,'訓練中心的零食偵探').replace(/警犬見習生/g,'警局值班貓').replace(/搜救犬培訓生/g,'消防隊陪伴貓').replace(/陪伴犬實習生/g,'陪伴貓實習生').replace(/工作犬/g,'工作夥伴').replace(/警犬/g,'警局夥伴').replace(/犬/g,'貓').replace(/狗/g,'貓').replace(/吠/g,'喵').replace(/汪/g,'喵').replace(/潔牙骨/g,'貓零食').replace(/__KING__/g,'狗王');
}
const CAT_POSES=['idle','walk1','walk2','walk3','sit','lie','sleep','roll','meow','sniff','scared','rub','pounce','paw','pee','carry'];
function petEnding(id){
 const base=FATE[id];if(PET!=='cat')return base;
 const changes={
 police:{n:'警局值班貓',t:['警員帶你回家，也替你在值班室準備休息角落。你不出勤抓壞人，只負責坐在報表上，提醒大家該休息了。'],punch:'報案先排隊，摸我不用。'},
 narcotics:{n:'訓練中心的零食偵探',t:['訓練員領養了你。工作犬在場上訓練，你待在安全的辦公室陪大家。你的專長，是找出同事藏在哪個抽屜的貓零食。'],punch:'我查的不是毒，是誰偷吃。'},
 fire:{n:'消防隊陪伴貓',t:['消防員替你準備了安全的家和隊上的休息角落。你不進火場，只在大家平安回來時，伸個懶腰迎接他們。'],punch:'你們救世界，我陪你們。'},
 therapy:{n:'陪伴貓實習生',t:['照顧者尊重你的個性，讓你慢慢熟悉新家。你願意靠過來的時候，就是一家人最放鬆的時間。'],punch:'摸摸可以，抱抱要預約。'}
 };
 const f={...base,...changes[id]};return {...f,n:petText(f.n),t:f.t.map(petText),punch:petText(f.punch||'')};
}

/* New artwork is isolated from game rules. No scores, preferences or endings changed. */
const ASSET_URLS={};
function assetUrl(k){return ASSET_URLS[k]||`assets/${k}.webp`}
const ART={}, ART_KEYS=[...CAT_POSES.map(p=>'cat_'+p),'room','eng','mom','kid','inf','sofa','plant','slipper','bag','ball','tissue','police_guest','nose_guest','fire_guest','factory_guest','shop_guest','cafe_guest','flower_guest','sport_guest',...['balcony','roadside','chainyard','darkroom','shelter','recovery','garden','baby','rescuegarden','storeroom','birthday'].map(k=>'life_'+k),...ROSTER30.flatMap(v=>[v.key,'scene_'+v.scene]),...['home','family','studio','police','training','fire','factory','shop','cafe','flowers','park','art'].map(k=>'scene_'+k)];
let artLoaded=0,assetError=false;
for(const k of ART_KEYS){const im=new Image();ART[k]=im;im.onload=()=>{artLoaded++;assetProgress()};im.onerror=()=>{assetError=true;assetProgress()};im.src=assetUrl(k==='sofa'?'furnishing_sofa':k)}
function assetProgress(){
 const b=document.querySelector('#bNew');if(!b)return;
 if(assetError){b.disabled=false;b.textContent='圖片未載入，點此重試';b.onclick=()=>location.reload();return}
 const ready=typeof LOADED!=='undefined'&&LOADED>=NA&&artLoaded>=ART_KEYS.length;
 b.disabled=!ready;b.textContent=ready?'走進認養會 →':`佈置認養會中… ${Math.round((artLoaded+(typeof LOADED!=='undefined'?LOADED:0))/(ART_KEYS.length+(typeof NA!=='undefined'?NA:22))*100)}%`;
}
function escapeText(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}


const $=s=>document.querySelector(s),R=Math.random,pick=a=>a[Math.floor(R()*a.length)],cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const SPR={"idle":"assets/idle.webp","walk":"assets/walk.webp","run":"assets/run.webp","sniff":"assets/sniff.webp","bark":"assets/bark.webp","eat":"assets/eat.webp","roll":"assets/roll.webp","nudge":"assets/nudge.webp","paw":"assets/paw.webp","lie":"assets/lie.webp","lie_flat":"assets/lie_flat.webp","excited":"assets/excited.webp","wag":"assets/wag.webp","sad":"assets/sad.webp","scared":"assets/scared.webp","sleep":"assets/sleep.webp","sofa":"assets/sofa.webp","car_window":"assets/car_window.webp","head_tilt":"assets/head_tilt.webp","look_up":"assets/look_up.webp","lean":"assets/lean.webp","sit":"assets/sit.webp","bark_angry":"assets/bark_angry.webp","pee":"assets/pee.webp","bite_tug":"assets/bite_tug.webp","rub":"assets/rub.webp","belly_up":"assets/belly_up.webp","sploot":"assets/sploot.webp","snap":"assets/snap.webp","portrait":"assets/portrait.webp","portrait_side":"assets/portrait_side.webp","carry_walk":"assets/carry_walk.webp"};
const ANCH={"idle": [[171.6, 104.4, 32.4, 0], [172.3, 103.4, 32.8, 0], [172.0, 106.3, 32.0, 0], [171.2, 103.5, 32.8, 0]], "walk": [[183.0, 121.8, 28.4, 0], [180.6, 121.4, 28.4, 0], [183.9, 121.1, 28.6, 0], [182.3, 121.5, 28.4, 0], [179.5, 122.6, 28.2, 0], [179.1, 121.7, 28.4, 0]], "run": [[175.0, 136.5, 26.4, 0], [178.5, 131.7, 27.6, 0], [177.8, 130.2, 27.8, 0], [175.7, 148.0, 23.0, 0], [177.8, 132.9, 26.8, 0], [174.9, 133.2, 26.8, 0]], "sniff": [[166, 198, 28, 0.6], [186, 205, 28, 0.6], [179, 198, 28, 0.6], [179, 198, 28, 0.6]], "bark": [[193.5, 103.1, 32.6, 0], [190.6, 105.6, 32.0, 0], [184.3, 104.9, 32.2, 0]], "eat": [[186, 186, 27, 0.6], [186, 186, 27, 0.6], [179, 179, 27, 0.6], [186, 186, 27, 0.6]], "roll": [[185.7, 145.0, 23.4, 3.0]], "nudge": [[187.9, 102.5, 32.8, 0], [184.1, 107.6, 31.2, 0]], "paw": [[171.7, 102.8, 32.8, 0]], "lie": [[165.9, 147.1, 21.4, 0]], "lie_flat": [[198, 205, 24, 0.3]], "excited": [[174.0, 136.5, 25.8, 0], [164.4, 102.0, 33.0, 0], [170.2, 72.8, 30.8, 0], [170.7, 124.5, 28.6, 0]], "wag": [[181.3, 110.3, 31.2, 0], [174.8, 107.8, 32.6, 0], [180.9, 110.4, 31.2, 0], [174.5, 109.0, 32.2, 0]], "sad": [[192, 198, 26, 0.2]], "scared": [[170.6, 127.9, 26.4, 0]], "sleep": [[179, 186, 24, 0.4], [179, 186, 24, 0.4]], "sofa": [[160.4, 97.2, 33.8, 0]], "car_window": [[141, 77, 45, 0]], "head_tilt": [[190.3, 103.9, 32.8, 0]], "look_up": [[189.4, 85.9, 34.0, 0]], "lean": [[182.6, 96.4, 34.0, 0]], "sit": [[172.2, 98.1, 33.8, 0]]};
/* ---------------- audio ---------------- */
const ANIMAL_AUDIO={"dog-bark":"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gmR4K8npipg0WKGaKaayUlh65PHJ+pVQrhcv3FTQGliX0ZXKZxNxd0yYLJoFEXNqAkdAKSrxccFRKqJb2/t1XRtS5MNAlH29PElfLTq0kjRwmbZak8hd//Yzva8ACQAAkqpYdxQ6mICj4DllvCM8OYQOb9hTCXIS6vLRYpUAQSXwMjHiGfKVl7gCMJJNcfWXoNJXN3WMvGIrKf5Pqg3HX2h9lLiwZK4+//uUZCYA9i5wRUMsH0IAAAlQAAABGqXBFKykfwgAACUAAAAEmDNMxiE63NlsC5v7Ics1KeR6sEKL2xJJrghKxxAkXYmSS6WRKPkpi5GysPxJLOJUR0uVklTsJjMVl11rvV6AnNutLuaMoXWnru671bbWls36QrWF0K60PNLj7GchkIKqwm5GXQLATonfXPzU97S10ppwkkwVQgxCSD0MBEqspqHTgAMqGIpG8eBphAAIXioGCkEN09kG3yY+uxyUARULBAQQcHwA5YMQJASoCJABUQUHVSUsaeuRJV3EgVlJXhQEmKdyKPbAJexQcHEKFr9RzToCA1xtWXhAmUMQzLs8sn9b6BINiUzyaemDKfUUkkhVRpOhqsj7SwKjDRKU1AbMkSGsNEOnp6jz1RKz0smxsE+6sgRoDboMmi9biyFWJE5AqPqDIVB4SgUBkNCUeEJKpLWWjH8WjDdM82hT29vK/q7/tPfMNsV5HJ1Ohz5bBh8AGAAAgB0kxn7Zy7qi//tkZAaP9UVuxEsGHxIOYBkwAAABAAABJgAAQCAAACVAAAAExjEXGAKC0KAF2EAym0DSmW8qvqsKoCyVW5pzpMSf2WwU42TKmJLmTGgWGo0/0+uVgtSVQzerNKXc152mHO87Lkzsql0qjVr/pI1Hz/3mZx4JNrHV/JEuSwCivwKArszdY7cyzh7G2fnwCFH5hmOMzMq8DCrGWAQEBGzNsxtxqzATbGJU6XpnH+f2MhUQFGBApQiBRlJASiQajQff/////////////////xf/////////////////91H/////////////////6tT///////sUZBEP8AAASgAAAAgAAAlQAAABAdwBIgAAACA8AGTAAAAE///////////9+j/////////////////1VQ///////////////+j/////////////////2dAIf//////+//sUZCAP8HIAyIAAAAgAAAlAAAABAbwBJAAAACAAACUAAAAEn/////////////////+xKv////////////////+m/////////////////9YoAX////////////i9TEFN//sUZC+O8AAASYAAAAgAAAlAAAABAaADKCAAAAAAACVAAAAERTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZEcP8HcAyYAAAAgHoAlRAAABgAABJgAAACA7gGSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZFIP8AAASoAAAAgAAAlAAAABAAABJgAAACA3AGTAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sURGkP8AAASQAAAAgAAAlQAAABAAABIgAAACAAACQAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZIcP8HcAuAAAAAgLwAaxAAAAgAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV","cat-meow":"//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAA9AACUywAHDAwRFxceHiMoKCwsMDU1ODg8QEBESEhMTFBUVFhYXGBgZGRobGxwdXV5eXyBgYWFiY2NkZGVmZmdnaGlpamtrbGxtLm5vLzAxMTIyMzR0dTY2N3d4OXl6ent8fH29vr///8AAAA5TEFNRTMuOThyAroAAAAALnoAADTAJAYvTQAAwAAAlMvbDd5RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vgRAAABFAqypVhIAJ84pnipgwAbJYfJ7nuAA1WQ2S3PcABAAFjakIG3ICENCjYozCLsNMrSzGJu2ztd7E2vgABAEAQBAEAQBAMBsVk7e1DPCCBAgQMZNAgQQhCH//hn9KI0aNGjRtznCEIQhCCBGjRow8fmP8AAA8PDw9bAAAHeHh7/+AAAAeHh4eGAAAAAAeHh4/////oeHhgAAAAAHh4eHpAAAADP//////nAAVgAwrRlQGgEAOCITCeZma9evXr14AAAAAiIAAAGBi3d3DgYAAAAAIAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAAAAPDw8PDAAAABAeHh4ekAAAAEB4eHh4YAAAAAB4eHh4YAAAAAB/A4HA4HA4HA4HAYAIABh1PvHSTC2YgQjRhSgZGBsRGDQdTDdEhMZokABAHmCwDeYBQNJgNgWmb4DiYX4CwIAXQrBIORgWATGzFydfuIMApMWjAYfMcBA67DzLbuMgQYxCAyUVCERGGgeDiiAgwZEFYXDhmtLmIi2yciB6YIOBgNAJAAguAR4EGAgmBgmPMgz2EDI4MZGBAEmMnyuR001gwJuFAhoZnGcT+YjChg4AKfIQcCQSzB2GDwBOggBqYrlZbkz4YCwslwaJjCIqBRrCpEFQfQQiFQmXRq0zKq/7cG3eCXSt1GENRYfMyVu1aGvgi9Lsb+fbvNSatrGrR4X89a1fu45ZU0pxsZ1LOr+6165Uz/5NZ7zs1aob1vDveb/LL+x/V/VDcyyztbz3/0lfKYuz+v7Ta3j9aZo8ss7+F61W+rj//////////ujx1hrDDL8df//////////uT5ax/so5u5B4GA4HA4HA4GAoCAAAAPiU8Q5gSqTGBCQMOQAkw7A2zCUBhMgMLUzChnDAgBAMEACEwKgXzA1AYMZgKcwlhJwUASgCMAkDAQAJG51CdrFYCJYKIxg8HloTp5iMuHEyW8Q4JmDAY6hfiFoem3jeHGc0CYTEwiHgCVQOk63UhAJeBrTERkiGUiuPQAGCIx2AUj0kkFFdQW1FRdx3fXOZjBxVA6AwwMExUFGHwpbpZuzGo+ppWlN2vSEwbfIEAtuSaBIAGnUE/As53DkZk1ucu084/sda5SRqVx2/HpZSX7ueedNXmMpVbqXsq291qtrdBj2U0+Gu7xxs8peWM+XM7/bFzuNTUSq/Ea09DVLZfW5WgKZpcrXdb1dy5rncdd3zHXN8193WOVrT+x6NPtKZa+tNLoalMOv7//////////+X28sMbOss95f/////////5a7X1h37uqwAB4w+Q+BE6vgwTcQBjNhEHzQgzEgi66dSE8w4QKiyYCieqokCiBEhlAQ0LPDGB//vARBeMxjpoS5dqQACijJmz7TAAVXWjOG0xMQMSsyTJtI+QwW8PhFmDPDSGwIqPwnYRwKDFwh6YuQipsICCgB1CMyOFfEFxWwyAyQhxAByCbFkkSIqqK4ISBsQ7ERbB1CxD4PmZibkoSJsZkygRpUUo5SICOArE0Wz9aBPnqDmzKOtW5jYxPnSv5gio+luk7nSX0nq90SaNVqNnuivW6kiLHkNGmpT1JJPS/po0NfVq2XWyRePdEpFAqjrABcu2OJBAXEGjgaPQdUtXMwdOpr7itPmkN3Id16GAjmCxSAUPqCt8sic7Q9QVx6RHmh5bdXqIWW3aS8oLixl1Y/HLi9w5igWO1Ni2/jP81/5bzr6K8eXKa5157WOsya0OXZ/ZnTC5Z54zXYvj2/xu362zOShWs79rvXinrdlbXr9uZdrRvOctkNYthmntVxu12prs3p9+s1fXvtN46UZJhJicAAmbcusZTARWgAHMeAFB6ma0G/UuWdAiQKhSnb+NglT3M9ciDAbhQTSMBMpthokwpCanHFGenPE00xKYVKp0wKHi2WKthZdkk4SBQTBlIjo8QGGn6cbxdqZF18ThFFJ2tv39PZNsp7gOOyu1LlzQ2xnnwOMMN0eizHIIQQ/lOk0e1POVZ+xh/6jcqkyvnq8b9U0rNzozNebULjG8m+6jjEb0q0qzCPgmlJj94ALUeMPmcThpY6ECZtD0HCQXN0rzGiAODjCgAxAERYBwepSMBbNiUCDA4FAqSLOxIHBgAgEAwOsdubZmUO+oem8yt0VqLLYA1t631cB+4bRulr0P1SOlEWjyh/nXTEppW28vWBlcHU09LnLEwaS4+0ck/V13AzSQl3FEfvLhs22bQAZRSueTSSeK2PhgknamKShwajlVIsgcxK3LpguECI8HkFeFoMUosUz2UeI7rDJpjKTQjKxSfhxTDAcXZ5OLLJh3Wm0AAlS9Mw4aQQRSyJj/+9BEBgzlrWhNG09L8MgtqTJpJuRX2aMwbbE6gr60ZY2mIniiiJYBNJzxkRAEhEXVUQUBZStNPtCNLrBnOY50mfsUuLWqxyzxyTLoqRyzqpHRkqalFS1Q24vA5jccFwjbSn+wUnldx4LBJGVZqQW2EzddQtsMWVOvsViy3InJIbTcnKbGS7Db1ma9xrlyNNP+8WPJk2v49WOmBMbX9+/5UXB1uONz9793LjPMyPFF3kpDJtWEkEmW1nvjFgmg9NDJaZtXFUMrZ8GsXHXfWAA3H3CH9IGq7mMShMAzZ0yoYwJcyAcUMFxVBnlEQ0xgsvOiuLDi8CcBa5W4x4uqwN2xYTEV8oJ2ZqKrYhiPNoymVQC98Mr3h115ZF4FrODRPDTuO8aYyLriSW/IF0qCxWpLlhm6hoVsnVJOhPXJwRCiJNPNAuvm31084OETT4vs60ph6U6pvF1qq9CLfTGaPU3aSeFTB+g6EaeVSbe2hHOFP9Z6KozEsmLaTcz78+G1jXUtH1mnL+SyKtr/O3R37/clNLLxqfCQAAAyYAmxhhIcCkgamLUAwqbwSA1isIfRa6ewGIV7pItuggKwNPpjikEfqJradbPVirUbBelLtvDm379Q5HYS7b6+8EdtzUOrTponLoF5HDQHB/O0pJMB8OV44gTBR8wN18wPxlt/B4p6yfSh/V+DcxnkKfX0xFhPJNZUsVILW+fsspiNrHtSvwRwiMujr4RlyjB+H3e35WdVrIbcNKAzlzvEY+amfR02taVL/F23X1YzioySlIoe1CjqMkZ93uSch6xZq0p8ZZt0JnyQMUJeLAFlxgI4EURCGg8vEIVdSaCZ5aJDxvXigq6quCZXFY/ADgbJ49FC4SBGD5WMoBLWAXOEtmDs1Wkk1HoaBFHE6VILZEOAatPhEqe53L9a+3ypi/E3MJUmO8zqe241bUkH0JH02CH7V+eb90QJhEH3heqSXeb5Ti5QdVQNOUtbqzySR2pOPMOkaQUTvKVPsjSXnkcfR7bNyuWnPYz7/2b3qgAAE5RGQm3D5rnMaSzCxcYuXtoYoKgUKIAEUAA4TVjZ+15RpFNYcI8UZJgTaXHWHOOgrVkyDVUxjOSoIyhp//vQRB8O5jVozBtvW/DIbRlCbeiaWDmjLm29cYMFM2SJtiORUAbEPOxFFA3uawe5bhuEIMOOe6EJMxTCfJyVdaL/IcT9Hnyl4LO4KSM2n3HXLvKnjpH/TG8nlKFt3MU9FQdhqwk3Z9stogx/WIWvUNJ3MZUU83SSZoRiOXNdbjcFnsVnq4bnN2kZdqmA16UXJSP8Qakm2OdnZ3OT/pzliALF5llvcrSpUPlHX2gAV5rYOb4mm/bhpKAHT5kpGABEISUDBCNkwkncpgTCqpE9B42TeAgAPARMHEIGrGqVw1BDsijNHSh6SNMXMn5+TKdcrhBm8TEnKkSqQY2E8EGry4jkSosx2l/Z1AXItq+3Mzwv5hsDhi7xrrHzC7+pyFPOENf/JtYlxxQjHQF1seMMGIMWFGj9ZF1QwQBw/WwBFdR9Y7xAJD0P/ihvEyco52mhgxpOWHSTbmWS2/+2PJqxluUpUHsyUcb2MJ1tjPX3ZftXfwvGRwTGgGORAzggoxhjMIRjBgweDjBwtwgELlohIHBRINBaW5ZxLROFAA1xmSYoTRbwqLBxsCpGGUpvEsb0cahNCohLLMSI8pjbLcjSPHeuoQ/zgJOyzK1QPUwmyVq2KZqKJib8NsjqWIkWaZ67woHOOpRHsahvHS6n8l62kwFTkK6dy9uQB/N55gd7/rhvkxGPY/KSEnrkbjugvEulp0wh1GBk6rzN77jQLqup3zTp42uh51jlpJaykTUy9nDgT0/bnk+sEj12wzm5M6ETRVMyJKDCUGBACN0QSoVhAUlcJEqxRCLqvYMukqgJdRrqHq/m0FgS6FwGgsrDWn+dbNg3HelzaOLArfPBL4HqQG0FkTcLPu+vtOlEMqgT7Q3AyuHIWLQvTbigzBvW8VDu85uDXVesS3/SXNKz/1Z9ggRxfiLjyZ99JFr6DtWP5xsQeeOlmsA6NfEK6iBAtbfsjLt8apMQvbs7PLY2bUyydk1uXbtEyRw7WyRUnS53P1u6QR2j1M+nDgAB8eEjTqw9QxN7PRpxYaIQFDYdBAuALBtgXaXAQMaEVQRXpogW1cIWaQn5hEHIGXOCOhDjSNAykMPo5SoQk6n7ch8aMn6PHEkyMP/74EQlgAXaaMyVbeAAuE0Js608ACgqGyY53IANDcRkAzmQAMY7VSW45VTVwxKooU7jU+WRyjMCYcXrif6u3BaVHAdwIsZOYep35+Lvb0+FNbGcV1//ee8jBqBq0e+/8b+PjNKME79+msav+rFaQtV/7x4/zT63B1m8Nsp9/2j/7x/7/X+P9fO3ny91n4r//6N77/uABcsuNSjMykB5ESlgpQia/iN7dlcN3Z48kgeyTPtHSCmOeJ7oY1rpzj3SUVgmgVhwGuksVgtNB3lgruDDzWZXQk83skBmZ5rUkjMzk8hOppPFteEnZE41wHBiVDc5skWEu02yRVHHG+XNrThdFa7foxRx1Y+ep9nTjKzw5rRX8ClquOvvv3BWUvl5neb2yy73eFqXOIWnmabpf/0xrv94vnOKYzfG7X3vXp9UgLGNf7xefV72zmD+oAAMxmKU3eEw5IkMEG6cDMQbmj4YDiuYxg+YmAQYNAwQiiYCBACglMZwnFh2IQiAwepigHIaYChRfAauEQxhjAAkTnUwLKAQQDFESJhsiABS8C7BwQUiC3ZqqkRZ1ZgMo2iQMUkQDEBQ0SAC4IiAM0lgSnaIyqY6KZA68XIWOtgeBUAtproTS/qzoajKdUOhYtlLSFhCYlZJEA4rqQByISRPN0Wuw63R5CENryuYo7q2H1cOnkdK6kvkke3EL1Bk6KQsedKWT89RVqBShrTReT1VjDQJy26U9hbzleDxKW0kigqdywrxvGGFoSCLpF0U1Y7S0tFhhvd7WONFreMerQjDtfmFWpYkGF36ePTue/3uvu5IbGeeE5jjrK5hlvLDv//////////auGNrPed7u+///////////Nz9vvLuFLtYNP0wk/stzNM1NSq08JWjb7+CqSAwBIk8l+YYRxl8BmMQwabG5iYKmDgOWBaFQGddy6RxlIkxSAELJDVTElxY4YKM6ISXFgEJ6aBiljBggLQAGjaZZ6OJW4WpU5L0JrFoFgEBrdxQstuXnSvXS8BVFUxT8bGlHHUy20VjV5Sr3QHvGyhsysKpXvrtIT+Y0purInsnMzaFEwbbpYITU1E4W4ABRIx5C8DYH8AA0SbGh7D61Y+/blPsOiokAYx41TdiU5PhVJACbJ4OIJg1lKRbC7EulEDsykcupKXGvy9ffyOQfF5zLtLjK5lYzSJHNfM4XM5HUzv3P5bxz1Rfu3aps71Xszczsyqz2tWimHKKvbsU+solhrLC7fpbtjKc5d33Vf//////////e/12hvYV8OVP//////////x5qlrxO7rCzqnu1QACUVwCYb5x0CJCiz7bBcEDBsUHAkJqWRbQAjl2ksGlusuFUiGh+lWdqe3Ow0RcxdD9Btsh6H4aR4N4FQGgLmbgtP/7wEQhDOVUYNAfZeACtiwZ4+y8AFXpozZMsVlSsjLnTZeaeSIRmNP29kZFfEZ/Jfwrwa6gWh3tFrNh/LvVZIh/Xg0tPWDev3fHc6MmYc/zrX/+pI/gQ4ufvVd/4jx/4GvtrYXULVW9V7qxl1UX1//r///X/+///u2s5xrMFxcPbf/rvEJ6D6FSGgXAIAAAG89GFRmcEudFd+0/0129HBHJbO6iu25Pu67qIyp8HK4HilkMLeuUOSpOygVor7Jay80P0QdCeQxG5Y4GncXcCHEf7xuHb3+2BkhPIvjSPI7i0OaiPFrN1+3KtFqlmOpGo9rcGqNBdQDMVxGHh4CYIIXNGl8RaHpeMqaqTL+SI9k3DriMxu4c9PiasHTZbWd7+teVmh19JI7P8/Ot/f37a1r1rTW7af9j/tfe/n4jZrnBtUlYAAMZ7xlIhfM2aBNUCOCzAKEYUiC3ooWIoVRDIoJGWM+S+U6WRqiQGTr3vZF2WxPFubX11Q+nA2RzVBX4zHQlghwkzCU+QWbA6ZiGOgtFhLIwlmJpftODZWmH5bHFQ2brlOiflLWsbveLfrDFPQ0ZPYFs582m8z9IqWq0XezXZgjmYFJtb3+nzkGSuGpyYj9gqJBDgNGE9h8vr/+89Wac5cLoN3rvSUVD6K91MR7kCACc9DRUEAjhdoMBEACaTuRRmcVelRWC14vo/DPpa/rAYu8snrxBtc4ucOTMxLDdAUK6nmam2sDEa9aZi6k8+q77JWLd8Xpcqxff+bbgfrWswWpPKKI9ngL6SlVR2MmXJejJ6POdorxLh6msSVDUIC+FyYlKkixNrx+wsmoaKMw22JY7d/x0qOfM13f+SJSWG7qXd//3/zr7bF1P7oWG3mbL1cMSLli3OzJNqgSKAAKbvQHgViLqBoyKCRGFBQoIAJrIv0Zd4mRKnGRhc9+XcjUpdkKgDFjQEALrwfJXUgjjM4u017nDkDg0//vARB4MxT5nT5tGRiKfbPnDZSasVXWfOGyxGMJdrueNlJqpU3JWtOi5DW5UDokhaIUYXYg1J2xqOKQgMLg5/rXTLlIwWFk1OLCWhMiygwWKH44X6mPpzR455Dl5hUGN4kHHLYr80NMuYF5UVFAdCIRW6JWP5rnviZ/iyx/VOpgBQgabXh4c49Jp1ekp5IrIAAAK4DdDKYe4Ywal7PYGVVQeSPiawzB5ekIiVDMZXVFGaLBBB6BJPtelxujsUr4lgwEydhwpLFRcUkh9NiP3a+GvlxvFflsqQWWXkmqkGCMkJ0OxU2VW1hkEC4rTaTlWCSDTJwQLFEh6iJZuoUr9nCvX2pInaXv1lGy/rx1+IDoiaJOpDuZ5z63ds+62bu1tsAqnmO35js3bX8Y1v+UBAAAlXK7NHoPxf9yCzAhpaciWOhhdI2YAM4u0DAIDlxOg/RdhaijCNQO6SneahapRxBuLQ3NavSPG/Mph5w2jvKDhIDgglFnjo6KSkDqCdutG+9AwzKOiwo8w5k41LXY8SlZ+ZWhVs+VqwX/m2adFi13pXpRPGMvxCHRPjA890+ZHip/IgvBQRh2GxfjMeZXUdBP8XKJzEBRnO4PD4Q+nhzakZFvXGbcMMqA+JAJID/D6hkxIRUq3FlJFzSFTd0+mJOi36pHfn5S8zGKCBU9VAmxtq3d4J3sdExKTIEHmRL+AsukHqk0zPESh6ZakMoJe4polmkWrRwoI1ALAIJ0NJTuCGxsh1rx9+9kimWWpzdaqTyjfv5DcPwtylPxX99btnMz/aqiNpjzTTCNPtzHt7bHzvm33xLKhmhgs5QA/AZhpTMbVAAISvb9DoABU6XgbGIA2Vq3skamwppBS2LKIKJiRiUMAAAJhigIMteje0p9VN3+SEabDcQjLhw0u97snxWg0iG3nm4cmGCRN37VLQTDrqMG8ggy5lE5eCSdW+82GJlNBQcEbfQLon2v/+7BENAzE+GfRGykusphMmhNhJdhVXSVIbOExwsAu6E2MKni/Z7OpEh65+/mTmpi9Jb7ONOggKcTdG4fEnSVI0Ag6CC2zviDOwhr58swiazUI9Ksmb232XEXoACAM3IgxBP9fL9TTWXcgdkkjhVQuslwtRyI5jACMqD6D8KbCucClS/f5djyu3cnY3afeekkzEJRNuXF6tNYiLO4H+1r71ARvZbdHU5e2/kGD3UMwpdYkLmyNZxYGDDcLrJ1fueJGIMdyxi6RtyRuTE6UHavvrMvLX6dTrz+fGi5occyIjVu19/vr3mohQ+B3sSSjHqL0Ln8AACLXaS2IrsTWrw7NLZaygjL2MyQnrxCFVaIJljlJblwUjiZyCFPgDKkrcmpCJocEYAgLUfTQaoX0Y9DrawEnWlwVrHhoNgq/GgqdLDkgXCjCjjHm9nrtSpqtc3NOA/kY/H99l25qnqPZYYYDKDyQMBzjIBrRuE1pRlbLF2J0cAPZnPgntOeZf/v2C9UpzZUaKnLPduc7TbrpEEdn6b+Lzf9f1pHrlo7+EYsAAAE6RhRmDatehiXuopSwVYF2G5QbQMtaQ5SX6nTXYDchWtpJgCMkBSwhzfjCUIUJiJ6h7VHohxxvUYmIvGWEM4nmAMmXmXwQXarPVa+MxF5mwud+9SOTUDEJRH5PleuU07IFKhoLrBz4eeaHhoorAIKhcOtHYCjUkDRAtYgMeyny1/cd73KpTAVLC4y7S9WrtJbtIHcoZOGIXQzKDdTrm+kz17ZiI30////6yF9e9CoAAAGSOPETMblDDhyyIAWKOLpGBAOoiC58oEgUbD6FhMKX0v/7sEQRjnTfSdQbDzaglUu6g2HlnhKFPVpsPRjCKZ4q1YeOqOmWtTkTrKwMkQRFyYyhWy9Dmmo4rttKSNMpR56IoK4Fxq+Q3Ws0GMMqedGceYJghiahQVEr0k/Z35l3Z3cG/dNisZJ1xRuQ0H+izTFyIaqWNJpBSHtiPCdv95BB5TTN3/X76+2xgskY3yL3W3eym///amQ2EEH2f9QAAAV7vxBoLSKCH6R8QSNoMcWEe124PgZmLN3LhqPwO+EMszV2cY8zIZSRE9ek3UZhox7DbFCh7tFsqHhaRDzKEnYlFHpPDY8RoretMLm/lS13eN6qzbRaDL0UJXtR5CQmy4BxgSheRdR4ljGAcLK4QdUxie+pHmvqun0Z42KZos32CAmamsr//9Jqv8Td/1f//8g3yIL33EZ2U1LFxrQEgnSydD0ugoiuRcUbaFHoy0lLZo7sMyj4kNyC+o6Q0lSce1yHkqxx3alV3ihBcBaxpOJOEGFmWiZE7E3FWTU+WA0WOSWRbU1IrkoIkeTU8J63VXMeRR2EqXM5SXqYgCds86YUzhHRdqCeD5GZFt9cUOdcaPNLLCOvdYIHCj39/6fKf/PEeS//zvrInJThL7X9iAUIwWTvDAj9SF/mpIyP1JoZU6d+Mzw6Eem0hCSksBjieLKEKiZggtszShpmgZwXwuatEdLUmASsy1XaJhwa4zeuYClZqrSw9vBvFb4CnMQxTLEnLY1CTKUjR1hIx6xKGWV5oifhmrSoTnxwBEB3Fk/Tyis2jjW1qXkLKTt21/Pf00dVAAACvj7uw5jfv5wCBRKzP1jNhaU2rvJyIiTDgRmNQhnU//uwRBCGdBxBV5ssLqCEqTrqPeKOEOEFXuwweoH+pSuBh47gDoC1fXiFEcIgll7mo1s2WqzOjszTEC1wkcacAcEFwIesOMpBibO0BrnOShRtRHzheUsdR9DP2oaMV0lOtVPz0eCZCuqpMTYbY6zQ+g+jpuyf2o1ZwI9aLGB0BE+2l+r/hjnggAAAAAD3Jayurq61tgVp12hT9qY2IQgCdkVllpWqZVgL4EU2gJkGQrzyTRD02jWOFqEoE8cZ7JKVcKYO4W0pzjWLW1HnotK9hVVnCI7T8e89X9mxrFsL2eRkJ5Xvl0aR8mCrCjLor1/MNQy/EyGVy0//UnpaLU0l5/7BGLxdPBt3+X2WUAnatYiecjsTfAU2kXTTqxv0lspY5ZEF/p+BeZM0WWtKKPs5BahGRqSzAY9laW6PzR43Jy8iDa8lLkbUr24v4rlk7swavF3XgPy7SIdlTbDCsT2jJMPDTl7kiA62EugkNAYHHxlA0Lw7rSu312WUwyV0NCH+ZlsIPIhWz/KGYUDHZ11HdtHIKfpJuvbxxyLw6iN2X3IKl4jJBE1Vx3lEX/DmLkdqAE0GqOEvwLHeducWRandlsb1AiFcrmIthGxRGSzxdy4mV9EstvrudUjqk0WfcRIkngykNJofhkl/TjVsz2tmL2PS4MkDcS2OiCCNbFPP/n/D+eTowN3NEsyn8ei7P6f+c6kgAAAAX9SFU0Wzzxeoe3FYlbrvzOF7gItzcp+tTRJTI37ZjIfjTImdM5EGyLzjPG/WFqkQRCZTEdFGPXYrRJuk0ouy5g1+DJE8aNk873qapfHG83mhZfpSaLjyrxYRfv3/+6BEMAZkL0JXuw8uoIboOsdl5dQQjWdcbLz6gh6u6w2Xn1CvbbFZVSYntbe8SCZH1x37na1HULHEQz2hr9I+NrVORraeQlDnOggAAABuUlIsZ6rfqzZFNIblubpazYjLJc+VQfGsqCeDF2awXKoeWUy6iHIRJ5m0F38IJpH+Uiy1/Zy9MrmUrMIJ4m+tau6fDg6mfahR9jAcbWU1tsyRL2p45KkerH47hwn7tvJyfqyCSDuJEomWbXwOSxUOoSb8YTvqKN0jQa/DAVJZD//+RAP92GZbWk2dZZYQdJpNP1LEv0DnpPVpKl2YkYCcTyqYVadlDP2dka8Ir26ClzKggda3OerqYQzKlsgKiWzsMsvoXJwDVTXxb6cSdnhP8Z1GTOoMXN4qpN8PcHxodE4+LnPjfrTAg3rjz+8dLfuD12RFY4cPa3VGyzPo6a9p3t9bNyanywC3eSM0tal5WUXUyqSHPDecfJFsOSbCvUjZgMs3llivPOA3NTMrdime7md2DF+171PIZPGFDDoDlFrmrlch1zZwyYg1OM1I/zTcNSE7aIjM4rSHJges0kkzvbNi4AWY8Bx9vgVEzFmHMpb7IqPzUCE4wyhpw6c3Nf8qjGX85lM6b3/b/5TPKFWAAAAAAAf7leLdluOcRDlM7Ocp1uIlnX7xt4bxphG45mOPMYmzh3hOeVyqzcr/+7BEFoZkGUvX0y8uMIsLyspjJ5wQqWtfTLz6gf+na3WXl1D2bgQXN8bkqFdovIO1KqiKnpIytJSyVvFthtOUWBwtLFhZgqmPPXwFMbocJD33ivtwE6vRPnFuYcfpRH/t9w8DlRqHGIOt6mw+94y0HC9ue5mBASGytUAAAAAAA7i0YxKrkrt350fJP0v2fwiJY/96RY/ZkRVUiXfs1aWG3ysDbc3W/W8IZi96llMzqVJvGaMnxRXKt3nGAvdhlbluMRdlZm9ZfyVQEos1yM3mvQC5MBJ7J1yPsen3FfVMYMLp/w3v3CBp+1X/JD7c5x4kx2joj3/7zZr9ZrkE/t+n9nx/WTTEAAt69r5u3+1UC+NPLucuVWegUaRZyzLuNKDikoLeckpHcTqIORseQ09Nnd0IxX0ZbKoHgqxLm6CzvZuU01Hq4+2FlxPrwDuRry8W+ax1c7ja08nPgiHzjGl2zZN9W11b6wI6HO2qL+pf3UeBaLSt6lppDxww1mjjto+p1On/7Jow3JGNpEAIBvpI1Yzz5VWwo7K57m8c6hjJSHcm7qvKBxxrk9bmr0YWkK8hz97PudDpkdmW2K2r8Qa0KnwLjz+bhHbDUsG3h0KpWWjS/Ho3qhRxUe3xW0ZQ8l1BUC6bUaViuruv+xMQMt1mHfjTGXWYIiK+WnqhPZBrfsPFxv6riHKH94jViAAAAAAC9mjc5Fdy7YbsGI4OnsN4WoNMMJn6ef5laiIUfpFz2NO9UTYmBB51Qq34xWh/K6IhoQYXpAs3DepavoIFz1SfhrKIzlwVcz/ecRI4ViohxoNrqVR216PoRIidq+1I0KdubP/7oEQzhmQ8WtdTTy6gi+sK2mXn1BDxI1htPRiCHTCrDaefUJ7/+vDrfjDt9RjL8Bg4R+h2ZfduIumjcsv/f616nFielEMAAAACv06IDrUtJfwlxNXIKacy5lEAq7D92LZ6zlAFNRgt51IMlbzgREF/s3nPp8c2Qtcikzna1bjZlkOpzuO74E6cJp5nK8RVCAPL639FU2nnO4MeJT1GK9jtW32VOIcnIl9f8sLCBujnDUh8dFp77YRGGH+5if/RSJrmeaYTPf557+ho3PVi/nFAGZ9oZb7eOdZqpKUwnbG62ceECRvtzcqs3YaIF4Qyv8f2cfhmDZDbVl6Qq/HnlqqGiAuNBWwU5kGnOohl5eo6lmBqN4TKNrdsWaBdSsgsGp8yGi4TYzHkYJQbBwKJN1YKmpPqyh79/z/f6MdxfKh0AmMnnmQd6tPhqQWfI3pLdPLQIketCf86AbnnsQNbs1pU+IACX53vMsJcWcJgcFx2tvG+IiIZAszksqRiIJOHAeLMkdeUSbOOv/AuVPVrWGshAEoK45fr7ZhVxoPmvMyHwPCsTebORlAny9ouIqIemwp0fNjSvn6TdQM/9xUOqldB3foKiCO9Y8E5RO069P1d8eP6Y8S/Uz+YNm/TVfJVKgAAAp0z4GcCNSPlOhwMuI2bz9SV0s3IDD0IvRADwX5inigFTR6RsVoBa//7sGQVBiVPYNSbeEXAZ+ka52HlthQxY1VN4XbBmaWr6TaWcC/LimIHxj9KVikrh9nC47UgKEpjPnDGWUlj65USZNuiu7sv4GNdy9vt2UN3BPw4uFjmuTKBcckVmdsY3I27rgv7S18e38cbP/3sD2ZraMtaSJfIQmVMzlBMMAwKirjnFMiYu0GCiILXOlHfUe5M3/y3/OhqZBztjFi4q/xWVkM8QAAAAK2BN2v7rW3Mv8y7v6VWNvblz/7gKxItW+0OOMy6BF2d7t5/yEJ6G3bfaqSMpteaDWmlf/84zzBvmuPVuGQD9Sto8F6QBwHDweexGYYLb9S/m/025zMWuIEElboRotrpUKf/7KkQwD+v9scMWolMUrNiaSikGUOVeYbmDU1mtZ7rFeVNlMNhwhJltSRNNhxI0w0TPRJkzpVGKeGaAdGdzTkl3LcKR4TKtjs7a7nheTchP6zw3TRgW5S4Xa1y9L0yZnHeGeUigA0mpTjVEdg+un+Xnb/reS218V5+/YzYB1kL3FGgJB//qCQfqy5zrDwAqxvasnDhOi/+Ki/nz8rDFm88oUpku3IFAAl+I9Kk3J55YJlN6GkGMTylvQJsJTChjRArRUPoPAEmZOzO41gTxodmaajYLyMpHux0j/Y6O56lKQMQ1jJd1osTxjmzorZ0jctZ/i7e7EN+Qv5BxvkCBf0PmdSKKPTS7U7jEU1AAAAAHtyVVs7ONQlAlqvkN25d1NiEhP14rjfooHNczDo8IiDY3cciGDDDSO3N2JThJdEgcDZHs2tB62X0s2qS3T3ZPKpm6qlUucpP78WJgt7dipZzYWhBGb/5Y1hd//ugRC8GZEZO1btNR6CHaWqzaafwEH03V028uMIZJSspp6NIA9i+X3N2PySdatUxe3rb+bP+O5LrsXiz1JnC18URWC4szY54HL6PSOa7qAAAIffS1ep8sbhUBhYBckPcPz80Ch7Kzu4ZzDYyH2Bh+celbgOQ/hhGZzwdL+PJXXfFCy9L5TLZRG4WAmtXO72ipqR7oRMYTkxal6qxEA7Xz79FLCs216UYSmLWR8Cdpz5Ik6Zifoub+ac5zGJNEqjJsNnr4qOf1EBn6P0zBk7nv8Y/wp1DyowAI41KIrHKevTMhJjSmncr1+VsYMIBYcsRufsRMQARiUoiND9+7PvHARjxABoZ/cZFAWdAFggzABhhwm3UpxMS6N/LCiHyhetY9bQ+vNF7eIWPGAxRn15keC1WIUe1l8nAsM33Nj5rWuv/lt06/7fkEW9zgOC15A4LcIslyPUaDB7yKBAgk+3lSEyi/j2HBqLLqW5ZtXYbNCnqe83eUJUAHGeDxqOx6SxeC3aCEAHBUu781KZpYBEnG4+0lfluLPxp1fq8u2togcLpifPI9kmFeQ2ls3s5DLA0kdtKLlxbAA4sHQNg/Fno8xmOj9lzZXGz9x6SvtxkE1dcuHYWXj9Eb/lxc73f7Pu6lQAAAX2kuy6kpb15YDEBgacAuU0Op224gVLzjShK9w3MhMeckwUaPh10//uwZBSOZVBiU5tvVxJrpbraai+UE4GXUG4ovgHLlqro/b2wnGJxNsAkFu2Ig88f4XNH5NO2Iw3EysXEjFk9ZoMH5z4GAAcHUV3tbXWESiWWZu9nFRGKtLfWWA+iKAzxAGOWz67EQMIarIUR3LqVTTYzrX9lr1LHbaFTfVgqOcqHoeIEBqjXi4jMO8QYyPOTUVBCsy//zsnNVTyJvR27HZEkgEfkgAAAAAFid9pJf3rWmxr81Z1u5QlgEYEbGMJHP2KckCHCMtApmhXeAbSpUtsUkPJu5UjvtEPcfm29ZME88/5+Fwjrf2kmRAL1khPNeCUZfXG0OtLSJ2cSJWGblBZb7P4iZkeDY3Fn/6KWdltwRfnIDazHJXrMUIBb2INX39OzwRlUxkDH1+TNAe5api9YnCTkTApcjgKxqCjoEMLC44MRwUMZPYkNqONFDCLAOoaj8ppVMw4NQvVPO5y+giFF27SXpSlQNBifsWK96apUOb887VwpIdTLEM5ILh+pQMWuvzvfmWmr5J8giW6lKJgEYzNSarcPjt0ScNb//ypdctP30dWmio4YQVdWAAZOOJTXvNXpEDzJW0WzamOHVUnryXtZqoqGAcHZNJbtFb0KgJbqHb2e9XYDVXyvz0MymLLACQxd79i7UZBZEtv/2U5jqr/OmrQJsWmaC+mfn8LjbflxqCrt2SSVoDKBJpFqc8QW4OluJuV/939D1lh5ZQAAE56F8O2YXrAlMIQRCRcywlZDTFk8UuSXchYOabOV72S38sINgU6RReWYx1NfK14u1J7+TgUkCiEC9D2VeGpZHEV215+7UogtE+WX7taIy+L/+6BEKQYkFElVG1kc0Ijsitdp59JQlTdU7by2wg0xqs2nn0iGGK1KzQTsblE28TvKIFo6WGa5GvtLMcv////l2GcJZOuVBCjMrKhhRs0W/1cNo172IAAAOb4yTlifnKYkIP9SUf4XKoXMiVmk5AW5QzMV+jodgkjv0lHFDHjiJJPc1/+4cM/u5S2YfCgNPrWt1NxEGRb0y+eM4K9NYvJBs9QtXPpXzgpzcJTBVCo8QEswlNRXZ9VRZv6o+qMUc2hZCwRjYocacacVVk8x2Y60ZDLOtaf////6r0MLqqQJP8J+9BtHleEYATBkQtfyxIgMSlCFFKBsPILIAAzTsBoxBtypJ4OgoyxJEgGkm9WW4zTeVTIrJ4J6jmDBewYDa4N5f1RS+8vlyTAeXjzWenYFKE1ekqcX4h/z8cYRRyt039RU4AOyFvp2Seqx7DBdzFOZBmrHQ4cMZx3OAtxayzb+Z+kFXxqC52A7udwlQKQmJ7uMw0cZwlmY5Un8oynseykYME/s9Rz0tbsZSOhTaocr1zNQSeys2r9MxEBDmhTM9zOVKJAFLrD/L5TgVBfVvF8WAJ+/3WAn2yOEAQqd5hJS5znOtzfSi/2+6F65zCAk9bSrt6maO8wbiKa7rX//9f//9B89iJUAAKT+adjKbntWRUCkwtfStdubYUVTwEA6M7swy4wMCpwWRmP/+7BEEgbkPUxTm49FsIjMepNth+AQhTlO7HENwjyx6c3MnnBgq+E7vG0sYxGRk+pNPdsY6dL7EO5seNatA/N88GDLVhBWxL7z9C6HZW73Okk5hNLt1AiMVmJyoIkXjQ8v5toG/U171U13/9skjMbdkyQEA6bRoIP3vRyuRBTnoYwbS7q/Lp9YAABM770lHHYEuXguGERJHJ7LOWP2Y4Mkys6lI8cpkaGJ4oQYoA33V5T4OsYSbMS+e/DeDX69a/ljYa0Ah2DpHuvctMYFieT2LXK+BIEJ8UudmuNBqfbXX0sQdNr3RDkB8EhtFynvOd/z39R8bKtFOCAAxlblXb/XWYQY1///9E/tt9ecNS5OofAnf70l3E4TfujuyKM1LMa020gRkwMLD/xtuFacV8c2FRWUWoxunpImjKFwegb3n5zEMJ4b7qvL4ywoWDMupq/yyWQavf8dazmKZmtje6QOBOBM4s8wyhYNqI7XjRYE+f2rq/vS/+//i+htK0vVmitJKnnFb26XY4/fnFgjSqHJXo///oAD7gOzqNsVzqLDlYobpWlMajKlRhBBBhKcWmemJ0BKBTbkJEi+8Ujn5NDaHEtGPE0dntupQLFrYSStcjaLoDuWbamewl61kGUlhYrXJe8DMgwGkr3eXsbVru8LdrtCpZa5hhyURhiuOr+sua5/F1Pf9XfSoV3VVGwPSLdK/+qIpIHZ3///81/RUT/xs5CsesAAAAABcvCwHGpZMNAuVxk1cO3OZXqZTEz9TCFmLYwE3SMEgkfHqI6O/GJZRylnhlgPav6pKtNGl14TNpncUchiwsdyLe6k3BCjpwX3Av/7sEQnBuR7S1PTb0aQkKlqg28lmhI5bUxt5PbCNqYpjbyi2BvKids2I8FmbVEPW4xXzKtTWYp5HGteEh3HzNf02xU388f8xJAUKEQgRW6EQYlmy8D/rMxJDsZzhwOan+pOsr/9IAABTyIcByamYrVoQuTjxTMSy7SSVWwwWaDixy5W5EFS0VGDN9wFIz+4zsug12DqZs5fLLNNNoVU3ZmNx2yxEH2stjUzMS6qKFAZF8pyIUsMbHQVnan6GLTM1CoTvC1Z7ZfVkvGEnYPAcVOUjzH7O8lUSsY5LIwmBBIEEgUQOAA5KLULLfT5Z3BK//Diu/6LrSVvFmguBATaagsLHokjunKaj/uAIQkzLdAT2rh+Fb1fpuCEJOS8VCYYq/r3HHqp3tWsLOKs5NtJ8Y5DTvP6Qvjf89yDZTLHFJS1CO/TVpiXlQ1XmVyXVqj/jiLE3/f6LX8voOdcufcb/obmTGQ3/8yeLDD5hzBR0d3c061TlOI2KK7CMI5KaUNW39f7/ceMy/+kgzNecV4F5PpdbqVFtwewLNTL/ITTXZsOYWLULhM6aJPmK07dJ6rWn6rjAaiX9etVMc3hQsx/GJ0s8SJD5td/X1hmcdcq3NQv0kj7MSsqzuhamIGppqXkJ8N09al5Z1AOFyk7UFikqRy7V9+z//yOr6jAeabLwPwVH/3qn/+v7QSA4H0NS9n+ks5u33vyVQAAlL4i2Nd8BVZZD5ggKPJ604jUtS0VBDhGQOOpy44LKaZDMxVsFhN8rfatpVU0IMeSm5lnmxkaDJm5ncwlYqEtKpLFe7ckjNle2sc97rAoBTBo6W3SXmYGHBTb//ugZC4OZM9bVBtrP6CJ61qHberSEXkvVG1g80IapapNvKJoRui7j/LW/UWvQuKPPib/99KO/rytvPymA9aTNiJodAuT3xEtYqy3bJJ5DHm2YxALDezIyf/5/1uOn6/GsySAAAA0522g+Ww26tS4KDiZ1W3XlDxkAQYRwFqHDh97IpJ27mlkkP2da59hgkEWM+b0nenRXwrxiw8YFRRZCkf95NwwISs84F6Z3YXaemPi7AEkm7yst7MvuTEtQXyAnUsc7KXrP1Zu0YO6ZxABeYk0xSoX3z+uZVHWY55GSu63n//6/RzyF1Z3pFSHeli4UsZfLpZWCjQWLR+V5SiPiIAdnQGUJOzt/qkvgk3EdUdfedePqzGjcime4U8boSiH083jRyAcTGbszDb/uu/Y4VvOcoYbYmusG8RHynIxHKBuBzHZmoPh+V39cz2arRUTmuzIY///9Y+Nh8RxvQwgD4xtI48xLWGT3u5wWCcuEwVApz8Z1P2ekpT0bsQdV7alA6RMEmOWr1ZfpuMGEHLU6V0n+qumaERwux/NbiS0fs/+6d4R5C9Tx99XHXYANxsN89b21uGy8IdPFrefMMX/pv7+8noGQa+ou/7S2vtfn8OGDjMDQWGD4iKg//F3v/5SpvuBQOBhHdO4hq9/cxWnFaX1H0IKmqgH+jpPf7n0qgAgAAADN9k7+wzN//uwRAWGZH9PVtNsXxCM6drKZeu2ENk5WG2I3kIWpSqNrBX4YUtQZGkzJimwmYkqmYVIlv2sVILgd3ZeYacN9f7yvZgMBCz3526tembg2XVLm0FYOHxCGsktyyZlju2npW93C7UlsricDarzBbBIEjAUheeA/ZAfWZDUgRn1l7LHvuTenZt9f////tJ7QOLse42J5su2DlMtv2565yD3HpoWTmMOSfq/1ADAAAAApe68O0NBlZmCoo17G/fsxZyTzlDrXvZe9VBLY0CAo1j+FerAYOKhe86u4VEtuWzfh8DMQqCdkVkX1QQcCy0NMNRKBXpZHQGNsVZpPjlUqvmaokeZtrGPNzsoJJwhDv/bDfj5lylIwrDGiLYZWSHwbGKi9Wcmqj/3HZhj7OlJOSX6peP6ur/PpBv8/SP5ep7M6iOTCL0TVLMZCoIahQA4ennklTasBQQGRF6bE/ewoYw6ZMM2e4WqkPMoSa3Ud6Mq4RRMBIVeyaVTc6xJW1AI328qWxK3IUpu7rU0biimaQTk8cWrDcIv8370cj+tfZP/9jBBKKOYDQPSZ5InG3+7s+S7Y//3SnKZ0r/r2pV+gBP/DDsTurEYC4xKCOTWGdIyY52NWpr0DOu6b6zAVTKcd6mZyJk4J3dimqS6Mz+NeakTZZUCMPJIrUOy14ofHVwJ8pvRB62UICYnVjkWd9+GHrGgG9S4RCVyitPWRapQHFRzmUyn92/e1dTFDgBOOM4qHg4LXKV1O31t3YXYbUS/2du32udVAABCXcKjctr1ukeMLmNBWVS6Wy6q/Bw0kqxTnIqu6BUvzZ4FIgXB1PQ2JwQhjeP/+7BkF47kn05Tm5lU0IXpuoNtbdQSMTlObeUTQgenKcm3r0pnlPufukrT7Z/nKHaa+JKKw7s3nRdxNMmSbbHun6dsQOF4oRav0MMtOGkYBiUCT0GwzLqfd30WLx1Hozljj9v/Ln7NEYUHqZLGhMIDyaxziwu9UeclkKmtNohGb/K4rEue5EtH0AAAFzy21YkUKpo+CBdr83Q7xqvEbbrpEKDRmMKSoSqHAqLeedtc1nMyvH/3rxkCiG9U8C0bVTOB6QSr+zL+Icxo1LW1bICkTzDNpQEM2WPCKgTgTKSna0giyai7mK/h1/5Yhu6ZiFkaJPc3JEtZLudsmlWZLT6SZUXk1oPmBn+2pjzsr86glTQO9L9ujBz8P2YsDixm1t4edsNNP2cFMdR+AlbaQgQxlUbvMV85iLCJMjgzwllzUaQFrdv0FFAEeV0Sgxe9KKR+GRQ6LFRPdypFWkCFBisTle7bipyAUZ9YAf2H3buxaDJnuUTqUN/U0Wv/bm0/vDhbuogSCoiHCHsMoKS03DLX3/v1HIqMLqKQkwe67/Sr+sG5JG6X6bj7BQcdarS2u4zBtH8mbIrc0nDRJHmRh0vsZ95djzQ94f380EbQa2qVnUrQHGFpKxqtL+6YUCy3Z7RrxI6RM1HTQN0jVFymZnCE9QpHotg3KgxQ8qpDdkIx/7v//N4qnTm4SMaP7c2L1JuWcf/MHu/bBKN2XPbHHHf+n/UqAABc/eNsFJLbEdgAdSmITFnKilTKT1+l35HyVJXO2XxCRAmAJ+9r66qI8YYfjjclI4FtvhXjLDWQNaMEMI1Jr9WW0EIL5X8Mu5zS2p6tnP/7oEQnjuRgUNQbah+Qjanac2nt0hGdOUxuZXNKKSUpTbyt+Lcbz9putFbNca9Ko3cjtq/t5RzDuenpqh6/NTdFIwJBWdTqAVNuyAwBC44UYHlVHgYOHETDmKs8MM8M+6gAAAJdsKZV6QxaG4MADQiBROM9ls1bPz8g6RX7bLImvQ6wFfk/Zudp0PSihhqlxrUrC+XK3X+pWumHRu7PQTRTLoNaHmKyzp1lTqHBTIFuczlmWDTMFJqltpBsqUs6+S8ozPF2mii6Dt7KOv1XJdnWyzBILNB2SRNy4QWWp0ESak7v3XU+amtG3P/9v/yCM4pIyw+3LJFJg4dkQ8bo6WrcrS2OfRoaAzTpf6ELYxQgAUqsEm6Tlv2ViYP3dcsQUXQTipa+TjOkp2d9ssv3q9WCYkNQY5a/CkGAnvo8/ysw+WB0Bzf1JTalMzGu97Sq59pyXU6m7+qh8f/8f/jwATdG1J0QB9U/WYWnsz2+TaGOvPJHVaZPB9Q602HQEat+IMvnKSG24GGoQsQPpJNU8vSWOsvUgYQ81K870lRw56XKq54267IxenWFTeVxYWe5nnDtJUOSZt4EsWd0YjFLbxye/C3AogSsRanyrWHzKgbzQqOWaOG5twbM5UzpqaF1W2o3z/X1fxW0fX3P2GYJCzI1XkQhZZDrUOXXXO2q/mS56If///+6AACV/v/7sEQCDmRqTVObmUTQkWnaU28tmhHpoUxuaU/CIKdptbyp+F0ofqT1Yk2Mqllued+lryFs5xWIobU0o6klCRoBGkwE1KQT+etMBHrN9zsVYKEKECU+E0ymHY6aGmMuzxo5dEAgG/z9Y2EyobvW8KCt4iSYvTymdlVHPRfu/J/JSa5qf+Vm+7/5nioJDoAGIo8OUSBCDljkujhg/b5gcMp5GbXkpWNGvkmqY32kAAAClqFRKXOU6lO2Mws9Ih19IlKbcVYcdTSDwxG36tMUliK5uos687bu9yQmkcm+42MZpVKjz3x3r8vNeWmf2bpY1DaXoulAHYtdf3AdMdmERukgqNVEnFPzNNFYxyOwBOdqueQcvIJOYspX6Jg9nWpZDUndaYwoGIbHZ9OeHR0HrQSb6nV1rWXjz9Z0//3f/0Ev6N0silMtj8XKCCPD9ub4zU5aSNOeTiDoVCeBgWABR+VVSwsele+SpbZE4tWMdVqgGDrhtbnmdPckca2Cr6U7+7Gl5hiOLbyxzqlgJPUt/7krfILlisFR8oozFJdc53JSG5+mntqu3p2qJIHjTGNRyKUbNceIZZJpc5Hu15h5xUnOOedbLz8z/3+hb///LCAAAJ952vTtI+r/NjMGNxIHfeN3rOS+TmoVBVrlS+yeSEDZyINNppvPkeXmRoZd3rlRl0Jy1k/tyHTYkZzKMs7PSQAuY7NJ/IjeLCT23qfK5H5MQiPLdxsUUZsvrZx7eQkhrKacb/p/FBtuGRCac+cPhMLm5qEaJ6NrRzRYU5dRiXT+5w6AxWoAAJz+GGsxilbaXtkKhYbFSRmXVY1ETh8Xgm1j//uwRA4O5HxoU5uTLrCQCVpDb01+EQ05UG5lb8I5ramNvKn46G0+q0ijq3Ivhr+uCRDzWeGWU2Igu8+q9xuM1SmDiFl+eV2vGC0Rd1IrDBwgGdPpMogACZgpQZNZMEwa7VJm6CklKW1b+tOipvY6/rKIaoJdFB50UXHosoQEiy3Mw5aRPRCCyjRNzMhb6Sa6/3p0P///UVAAABPUsbRqzou1L25GIIQ8RS+CZqxTOAd/lF2H2lz+JgStHg+A91IvZsZ7UpIxHM7ne10CMHX88GVS3Ez8GVVqKNSuou4HbZVuknr14VLJjyWFzW9QYosNJHnj2E5P6eCg/zqpiOU+yk01KN/1tfRWUj3WkTgX6daCaiCpfUdT/SV6pXVKnP7xpiOCUXpRoqFv/ZE2a3LsJQGCImDjcIK79MKAA4g1ku8rk+mbBoxMbLLsY65nhDQsz9fDl6JKtaFhnqD4wIQTvjX5U1vCbccmZnabHXayRikt2+dpVKzB7XC+mG7du1Kef8dS3///96L4v+pjqNkh8AqXHJbUqE5NsQi1JlfxbJZfV3DHNqkzNt+meqYns/8mi56GUrNpIClz0GCmyZj0RC/lPigMdBKjwq/dNKnPgEdKO8eGqXPmdhjQeD+OHLF9ePeb3DtK0g5EGL28rF+ohzJk7khu6zgwGJIVbkeGdKzMxz0DZy1rLUfb/mWlMQYCKc1TGPKnWnqp7fj1lWeogw1mGWNEFQ90NRLf25GPx4P3MZB+XFlv///kVgg+qqoAAFb+ZeltbEYoHpHDt96fK7DTqiEUOv2Q4OeWUQShdOCEMIpOBqXveTZCNcMvmLtebjz/+7BEGY7kZ05Um3g80JHrWoNvB5oRDQ1MbmlPwj0naY28tfhhBIaaOwO1hCgLNOcoJd+tGLDhs4KE26THOnjiQ0gxl1mnni9oV9E4s1OHJ2hgqF91iWW1jF0X9n/17zi5BhLdzCoaLHIg45EiZahCaW0us4yg6Q7qOV+3/yYAARk8OxNzZTDlyPgkbW7WmKWmkLNjiQYiAlwvxE5iTP+LO0n+996bFWokz8or09e4ubGpXmJp/1UC6sFNmdeMWIuMDKwww0uDJx925FynkpXehFPL2ugYEsWwrc9k3TvrU+xLxHLlAfDBgpDyDxs1epn5V9bHiKaTOHbQwYhhyPMv6NrlRwyYe0qjf///lZYzrCdr+MrdipGaCmMMAYmF7C3pmn9bkIwiZK0RdlrsXpiIq1gGjTthmn0meeHSAu9tuxKLGT6ih9/6aSPwulWRCaLxWIXoTEJh6nKJlPLmGqWq0dQitutRO4v0wFFIt0bW4Gl888366PGMtMQ5v0ob/b2MIQLCVkVFQbmrqxrlcKH9F6w1up6f//SC538lcCQrOOQWYEQjwO2ONzmpuAjwgR6FMrMNOjDA6eaIU3YxzsdIH2O50lSzavLblusp2IT74Bp0NyOw/ExH03RrOD5fYiFJISqCUCVojQU0UdwyTXdkT633vlcfcz+1Xdbm6TmabLW36/0TdmppumGc1Y0UgdGMkp2U6km/XfWsyPKZexNPd/+kqASntRUAAFTZ71PsufSTwyooFTkio/kkjb7SaLjn7atDucsHkblCA6cg47s9X7YzJCrQKXHW+5FxCgFS36jhJvPAB0cQlNrLbtLbTnrY5f/7sEQlDMSOU1Kbmlvwikm6Y28KmhDxN05uaK/CO6VpDbweaFsqZu6JMx2zddBUxkjhMygCSTUumIte13jVnQ91R8z/8zXX/xH7XIAGm1pXcLE5Y2SleErSup2vYv9T1zbeD/8RP+hxJ/3fpAAATnn2ps6sSOrBgINESo7M4ZTqq564aryU400epkjRJckNv94Zli7FMan2vuspkeOqaN2Z0N7K5ZQ3scl8IBrtqM0tiLEoyINBdhmWxB5wBVj72QxD0DTO43+VUfEzKNjj2dtvp6tUXO95CFUJRGWHySglKXSqOVPb53nmjInU3nD//9ZZQrzH6iAAXP28ZIxSai0gdkw6GSgGwRDUodsvIYHNpt+WAonqwPoyMmCPxDhwBM73PHdtBmdsUEsxxj4KBRb9w/JodKgUIYXanLGEyXnVi/+/ugYDFeZ0+E28YClRqbu3dyp2L//rU2iGr+xVT6UZCKPAweMjMrjxsVKogQYiaM9C5vVs4llNuIIh+ZYABDfBAAXoEghpEBTsQMZHhoIbpJKCum0Ii89wmR7bFSxd5ZYIhIBOMhp88/kYiy4sIkj8TdFQrul3M79aRDgglUWq37GUMDjk+Z2pIM82iGIrJcKte5BIjGdZMXyf958Zp6413WjEUx7OcYgt37/oYb9AWi15iyhMxWXZ+1NkS0bDaYiX/+QLgI1bnEVRygAAXNlqqSY+2VmzuOGYhCaJA226qb7LCmAIDGGwmnSgPAYgVXwCspPR2TBrxJRA1nLP8CEBCfz/VxYEaMS3t+kn3lMHnDBruY48rWh5rJ9/v6qjihWt41vekQGFY908un6rMJ6///ugRDKMxII/Upu6K/CPKbozbwh+EjmjUG48ukJFsejNvB35n3EaUTOzY04q9przehbWkGjmM8HKWwooJCACGCJ9QX0rAcHt9WXfNeU/5qAAEuYEhsLXMr9d0ArBgRTeGXSKM4SICGR+wA/Sm7zu43K+DSFMIG1T8+8VUNvLHegKAIg8KZmNf6W9QiN0Jp7spsZM+YbEZ/K1lYIVQPR9prWMfMhE15BWh6R7fyRY/llDHiI+xzwbTDV+bT43Pa4rlgjZV1QMEHUXF8U8fs/z+HUQOlStZL//uAq29D1dCABcv7zPKsJWuWYMMClRxJ1lkbdxGcwMyjsBRAQcUvf9xF3POFBOpbzL+fdXPZwprud2DCYEcy3NSmImIgEuN8rfctNEYPbjZt+YSO19YxQWdJub3GpmN7D/qgqAhGONIQxa7RIru7Ti6Jx4DhgmVMrOFMIGIg9g8Ljsuw1mma2dFEBcpEZRHy3bWI/b////UEOAAAXeTEcdSQgB25O8Rhh440+0Hc4z8GUB0wGXEf+Vwc/0TKuRsO8MbupstXC6ut4YwYUAvV8NVqcQnW/J7F/60wRLhyva/6qDTkXsOVtVFrvjSS239iAoxY/uj1Co/N1Qu31Mf1Iqc6Oo4Gh1Syj5hw4ejHZk5DNE0ehVjCwiuY7my6N//Q9v0JNR0XX5QJadWgAAntG7ugzZ//uwRAQO5D1N1BuYK/COicpDaEbyEOFfUG2suoIxMejNvJX42cIeh0CklPl2H+pXCTlMGoo4y3TJYDdyYZGv6NKKluFYMday6/AKGtem/8YMICw1et9lEBgXhzehuy/LHcuS2gCWYc/CgkUU1zusILXg9btxTP512a3M85JkdtH/Jd001Wp1IU2cBZA4JhwjkGugI0hUuq0VvcsYRBBXbnv//MgAAmSqAwYupKloDNn0AxciINYgi7KnjCtw8I0vCv933ga5PigEaAO5Od5lQrgARtS+e3vGCmqrsfi7jnKZSYIUtRnEUz3lHVMUx2b1v3KKN1Jikr6xbutRCWpmyzlyz2BZflgIQ4Y5kItO9PpaHOjMQkUMEmsgBoC6Jp+0pLLz7vzf+rSAeP9a0N/29f8RKX+JMOZDBT5Yz4weoSJQ02WOO+gGAzFzQ68BlVEvNWHBsIyACQrSb3/b6SoYBUut3cpW00oALnJZcgBxy6oECns3u7YwUHu6iH8kk/pE9gJRcAqu1RVv6xWz2tRiaibuJZ8mTXKHQ8yB0Yo0iiguDmbOwcMbOayO6DcUfdyL4j/9Ir3a/+oNEq6MtXWFglqrv5lRLAT4wx8qs9ZEIYWOs3w+emnLqN7g+qqxkg545fbf4qghcKlw3Xwr3UibVSVU8y2ILmHCjG/3x2aZuJKM8mOGO49LWcyf78u7Mp6l54rytLtd3dGDxoo6jBYUc2/X0EgJiK0CQC4xXcSE1ViPuWvl/QOEAVTXIKA5////tR//6C7VAACduo39bsiYzZvnABj08ABfSraN0nLBhMR+Th0FzxdLlqEWgVpADBtnpbH/+7BEFg7kfVDSm0wWwJBMekNx57oRYR1MbaH6gk0xqM2nl5GOs4BNQDpt8xv09QDAoEysvtqAWShVOzW3jjcv+eEaZ56t9G8K45SFtw5PuXXmesiceq5Rli/dbvtP7vztspWcan6g6/sGOFxbsLOvM9Q4dhZh7+/G/v8iXv872WG7tb6+r/zQAALs7vr5dJlEaa1ZCgZEmAwJ1att+GhmEAWNggaBjAI87M1Va+YNAVbHl+k5HTBAF1nvdvMEKifeoqaYwTgq9bllzMd42rfFa5fILNm+Ink6OVkzv6tmqrvB1/nUtf/vX9bU/+lH953vcINpCK7lsNiIUJDRB4d2HxsUd2VD3P8oE5NL5wNJ//+vqn+v/YnQZtphpTqSF94zD66CLxXdd3XexDmYcRiY6uB/L8RygpNUxQaoq976WvHDCxRflvC9jvhKHxm1Zq4W3/FA9Ju9rLPpoDgZ5hthoBsqDhFFCwp2OfYecN5p5Wdo/+FmJnWsPrWpD+bQyuvRviQ42IUqv1a9u2TRK4pJaFvc4qIgNrBZwKukdYm2s9Tv1KOcOJOWx2HZPCYuFjgD2rDRemm49HQBQNFzWCkA0CU/e7RAJjap886fUqBJh5O653tlYNzbeGFPdkgjDJR81zX224jwTncqvPzca7uaFLRSmp93999EOEXGvmy4xn4//1Pi2t6MFcaVk02oJ3ByvmtwcVmBxZRpMyHbqT86hMGAIjZBMWf//8mQSdbN3vbSLvPc/ioAAAy1FxKZQVgz/tIbiIJxwmrrp9OxPteJR5kwBu5rlS1DaHpS3JYpp0a3a9ial2TkkrMeC012kr0MuP/7sEQdjuSHV1GbSW8QjWnaM2zN4hGhXUptLFzCOzJojbeq4ICbXqkNung3SJIuoPY0+5fer5w9/a93PDq6ZcWcTj2sttNyl5WVZjd3DzduV/uIur6tb3LoVpLnJ82SUgajyRRWxeKzdTU1Mt127t+5Nakv/155trvUAACpeDgB+aF0GtyxhYhNAaQ32TXqOjUUcc61CS7dtTStboIYMNDHkod6qdjIjB0sd95n9InazT+4zN7tARCeW7uG99VVtY5577tnN8pMeOHAFNb5EvooZZ101VD4/3+hqzET10+gYAUxBTrLUlGKS0EXnVrdXfW2yzAcBfQbUTyRP/5xA8my+odusGi6ipuhPagu1sbWHFjAhPH/CqCtClLoNgZSJXTENOZtrUvvs0Iywtb9jl38rBAfYP3drKmlA4BSgrRSYfKHZ94CsVIcc6bPWqHuOON7HNTqcTHdpl50dZOOd9PeZNtscXNc+34fV+37q/UEMTn6acc+B7W3dQeP03UfVexuYlQmi5x6/ro0xB2raK9KvtIlUUuY0BqWqliawmK/WnCZ+mC/z60EtXcvsPNUmIgqjLbkPP+MEcT3jy1WwLA66NrHWMbI2B4eVbbM0U2QJzWs6xFfh9PL7rLBfhQKP2LSnbz/LnGi/GI3cozXLLWHA72mPvH3Wmji4bWrGYPEhZHdzR+JjGs9SpyP/+oyRm90//8ZulTyE9UvX2VKSlSRLowAAJS5lKdTAl50TpsgApqcmaJMp0Pu3WVEIASFpiSS6tRk0/dtMCEKU8E3apc85UMC48V4UOfJLVbgNJjmS/GAH6ppQBgef5T46ZJVcJWy//ugRCeO9JVXUZtrLsCKSvozagW6EUldSm0tukI3MqiBtCuYEQSgYm2FBLH42IZJeo4UIM7J3ao/UXfVRd9S33VGVda9gSIKSofMYKFlK6ascPOzVX658blBNUupM/001i3B7endf0gAAqXsnYO1p73Ajb0CNma1Q1FcM9ZvNLLhHvGz1ZkXd/DQIAKfzrVbeVwgFrPudzRRMy4DI8k6ClmwEFO7IpGgocqslZFEcoZBGfJkvkWJ8+6Sd8ySZJFTzJS0rfX1qJM9TpF0wFHPnVSDRwBso81Z2f9fOMEADKLrQFcO/+veEJaLuv5wTmyqGxpl/dxGSSvUsdyGrhQ+e40w5dM/GYchRRjMiijWcVqfSSwiHFYan5NXKXyqFKCWOvqXq5UAJP4V56S51KBCRUw3N1TzXVxNw8eAtD0lJRUYm1rLUmiS+yJvTfzFZgml2UybPJhqBR0Sx5gdQIhdSXpPWms2M3ZqsfT9za6lLcyT2t11u+s14l/M28iu9TJw1yMDWYx8AA50AEkEu2s8PHBTUNkHJXgyGc3egALijXKHDeOrhKFqF3tZ2cK7PmR2sdXPsykQg1/m8L9S0rLL8/zv74vhq1PAgCUFpdm6zXCqi9KxaVf/D6fSh2MqqSChgItyc94ckoQ/vil//ApU7kJCRgQkZBlSBzDm/097InjrG7dZ7cXF5NpV//uwRAAOhGVLUhtvLiCITHpDZeeOURk/SG29GIISMejpt534AAAc3gZQNWyYae3BsoELjlB9EYu2rOqOwVANHYxYbeeURulj81Mihe3Wrhcnql9BCPCe61LPzcCK3DxepJ93ZFgRxGxpBVucGyfw12r6yQXmV4uYpE7i2GfDTopx/qK/36iJC6E6fq5yN3p2EnAADAg5Ro1gtRjLEHo+MRn8IPYUV5cg9OUmfo/UtPCgABak7IlF3Kguu/D7iCY8H2hK/mYXhKIEP02LZQ1f3WYIGbUt5I2KBaR51xLP3q6ETjWrD0iGcFTevtHfKkZUXU8OkNsQQxFdFiFjXI7w+AjbuesmYdlS7vDhVrI+vbGd/VrLx8WkjHVDouJk5j1Ho8cfmGr+jP4/DyRvMc7//1a2rEf+6+I7sJT5HhThuLYFh5VFASMHBmrXEATXWlO6tkmHTCQhj0dei3XisnFAseJ8Zyboq9M3VWbG5YuztWCTAAqXQ1DLUh0Z8jkHWWkKXeb2x3tcn6W29n0auE8J9Je31Qu6Il3HSTRv8qW3V/18/xsEpuIcSq0n41Mq/tJ4nxe+Fk69YnkXFkz62M+ns9FYBBABF7pIKwMTbdadxnANAjmQtPhnVWUSGaXeJLDH1enZrzQwfKAlePlizciRbIu92WYli+ObIw3e7hCzILG5u9eyM9sVg+CfpKd2kbU7IcxBnP+27FxU9Zsw+5n3eurxLWisxURMybLu07/6HOnKngaJAlvn1Sn6v9dWmISfQ9dJvUj0qgAAXd11KDKYQw8q6XEFUJpdiuEkWHOLuyMjAilWRyl1dsvoQDI5U+MllN//+7BEFYpEelBRm1hacI5K6gNt65YQ9VdG7eFpwioxqJ21t2DOIBEYpTb7H6ebC4EWbE2Qo1pKmYmtG2SodbJ5J7uRQXaSbYfWFjWSynoOuW6T6Yv9fLuLY7z/Ncah4YDwtY7CfUFTXHOEHnlF95PiSTZtW2/P5ZVlFR5ydEPFzAS49ylOTFeFwAAS7gwtHhOBmTstVy/gwUmVRToIis6g6abuoMZOQK8lVBjjJsSQDUIZ70h7hIYASup8Q7x8CdNk1Z5NNxMh1wc2qn0GVuiqmyAH5BWUD9iIIONhzmkpmHoazH8fw1brlF8joi+kzZWy6j+rLKVfXDYS//i7+VWnECWDV70lp74//qf9Taqk3g4gEluvSeCTPkZyEHYMqJPlw1KwsCHYG4KC468luWQCncMRVZco6lBSRARxGnY1pTFLeEYIlUdj+28o6Q5TVlFlA+0oF7nQbHmww36VZbIFzTvJ154RAbq7YgjSnDJXfzf+078N/jr/hc2SrPNMGw9zfffn+Z3Ouq9d8OUK6lKu8+TOulGumqUpxfXbs84CEAEr+jQi+hczKo/jWxEHHEJIQDtbhztN1sooKq5tSuzMayaKljS85RY36FDaXfc1h2dbZ7co/+F37jHu/+czA7WW+I3h85k8w4s8TWnFvzpJb3b9GV/j72076hw5+KY60zOXQyy6SUjW5VCDn/8fTURxFMngjC5NYlUPe/3N9a+qjvWpat+udStdAACcvdV14goyslrq/QCHHYmaNCDz+0dJJ4dHQF55mXVrlfY4OrOnb07DtSvxAyc7R3q07NoSWn2IavCYlIeXJafv7DdY6OXpc//7oEQkjoQuV9GbbD4gjiq6F20N2BAtiUhtIFmCKaboqaet6LO+iaus9nAzpfcku46agtIDioed84w84l1uf0F41LE+cWNMZ6qeykqs95QnM1aH9uw/rjO097lbPqzCNjwAgABK/JZShOJOpu7KWrGCgB6YqNBCdTs01JAEIIgVj8di0qwpbqfqWEtrY0t67iTAks3Vwz5VZjN73zC1+2r9wy4d2CWrGQyhYdlDFogQxGnmhmoNh62ow5WHVzUyM6nrdAIVzFTh2+OSSXNcWbxDmTaj+G55UbkUkQmQGahZOaoVtvuqmYo+ESjd72MUpPzCDi+EIZi5EHt0KqMZsJyKEwPGKaWNNEYa/dm7FimyIB8DRnKrYrV5pffPyt1bsoJBUPW7JY8k0OxRTSppplynkdeINIhUuUWCV3fqSYtvV50EX/ipqnmx9xFR4xtTueuje5ijpl/r64O2r5LOuJ59xCdUsbD+y58j/n/8HoSJQDCYLevHAwCIOdI3qlMNFhGa642RbsDSGSR+NBctLIjhelsokVh/x3qIbobUHXnXtfWycI5+wwbv3o7w9QIT+HvaQk9/vEU1ONQa1opnpm5qFDqz3JHmtPmrI69Sf9zEzdbqtWB0rPYodXGosMXXyqw7Vyz3KOVu5JewVX6d5/1RYm5ksA2Uabi0wgAAHPxgdcZmqE1JNLwsAP/7sEQHjoRjYtEbbD4giomqA23rehCNiUZtMLiCIycoqbeheIEDD6ikSBm61KF3X/YOmZSXMpu1qByEbX/WnKf71dso8FT8zlXmrkqAoLHo9G4m7rA1O0ldabyLO+azPg5sKHsWpDAo2ft+GsRoSN7o/j0uh6ZaNfKDgQg8zDdTrjjuWVRnXVOVspjOtjVyIPS9C9u1o0ZSb0Wml+3HnoZiwBAalwWNy5UQVzLlyIJwIXHsKJMBw3FYYlsHs1MBKY+6VzjPFfhJyGz6gau/KsH9DzqNNW4830W08HU6ElrE9YDJIBWn72KQCA9BVdRjRDL1nMvWBAYbk2b0TJjJmvh137JhVK+dp48XHbbFlNmTUb9j/74+L+ssTUB2Z8KjYeb49qo+5oeSttYp0pT9MZSlmDT1gGsRIGuD00VyojSB/6eLziV9ixldwkcTT1IgchqU/6tNVcKl1ct51qMQAr2s3c10xN46xUr9KZ0XfdgfNp0NdQgmU/S8yIHPQo04xosf3UjeVUrqkVec7OjK74uyks+u1eMCJHYxBF4kHnRUGgYc9ExrKKU9NSUJ3HQnagAwyQ5f6ZlMip2sRd4QKOHOmrQWJS1Bua8jwAAgqwZMqtzEhWG2A1u67Pc0HH3c9uqFwjyvoVLWNhV61NWZDo9umHh+eAqLQ7ecA6tqWpB5YhSc0gIHeZ9hRI9DHGiKj3IueMF2lHuzlPr+5r7/xnFcCOQIYDhEtRqCoREVtUWD1BvuScnzVUSIACAAUreXKd1PktQXAZw3AGlp4qYRADBIy+1uAGmtdmPfWrKabGWkwlO9m6tNehkoBKvL+m7TiBni//uwRByIhIFiUTtvPbKNCcoaaYu2UWmLRG28s0IlKmipt6H4MyKV+lPpgYpm9ziWn+Ik2JM6fIcro7NH0z8V9KxLVr0Yg09yxVr21ZTZ+g0WiZQ0RnzFkxsRU4xxsLGU2TO//JeyPVzq4LXTpGyT07sh6UZb7jZHzv8iAAAECCXLuniWQQSLkRMfxCYOuzx5F6JQfy1AUwHBmaVqtnG/eTf7jK7VLa1pVv5acad83ganP3SF1qbE7eA29+U8ntwHPXaS57BaWfbr3Ojw5SXHj6Bmf3qT+Sqv7eWLrrsWfxPMRLJh5JdXNU5zDn+pT/hqZJDMy+SxtDC8FnvyXs9A/5r4ZPTu/+PHgABOzphqLhQFQcUIWFYUWE06oqUOHgGHoFbZ630LcQmxDl2il+woFLefvYcdw2UAld31TdcjogxXvVvmamddH4xtjJAvPvuttdzfcXt4G772RN4X+og8c6qY5REzFbqdBB00D6mKbdxQQWZiGDrjXFlGi7KyBAd0/qX6fpgM/yis9Vybz+o+rDib8wBIIAVv5EFvOIAFrk0zmaBgOJtisTXX6h2XTb/FsZBVtevY7eSVLvYPvAofB9WziL4ukZNCnr9ZY22EuHCd5iBjeY2N7ScHWdfcBSFLrfx+LhZlHjUizB8tc/BkP1VC2zWOWhwsRjlr1pp/lFmRd+eJXq8xAOE/wK0NsbP/1nVPNakULja3bW1QjQAAW9ogFQmma8sCrY75gxEfoGlymXw1LZBEGwDILVtP1EYj90OBoObWLyX0/NXGay7WmMvMWdusyW2gYEB8aWrPoV74WsQYyou6Ul26Nsc6o+cZzUj/+6BEKo6EBmFRG28s0IpqihdpZppP2YNGbbDzSiUrqI2mIfhxzRR2KRVf6HfnFph6DHKElK/ZxrpWQVo0R/1vZ6Z0a98kO/Xt7n8niAtRqACCAHN+bkSxOOUig6vFgwRaP8zauhfGKfmEWAQ6G56RZ0uHUtrhje08guHKc01XXNAZtrbprUlZcTppYk9mJNu1wRbqHwxxuEI9kQB1CUGEUURKT7Df+Fd/yn+o5nk0aaVBrXwHBGa/MAmnkitft36vgsaNx9OtCOz+f+/UebLznO25sU05327zU5d3SPFgguW7aETEY2YNCGcDq8kWqj707dGvobPPTXaKnoYgXRlsNLoLbAarL1vWtw7JrR6zddAwocTOsUVsIb1Jj9ug7Lk3WZbSAFrn1m+IdWzNbb6sdxobUxmoxTqchg86KOIg9RjR5aN//mDjW5tHejXZb+vVPgp4gfa01yhIAd/5rQaSzO4Edp8qIlrHLBx1IKVyPKCM1EKZTVmHWRS67WkftA+if+H4UpsWWnYt72641DlGjxVH9Oe+T5r++6GAIAKp3Zn+DkR+1LR6gd3EfMbUiuKHQllsQJBBUdj4hxQUs7qH4Q4PSUrt5isQ1AqHjGCxsLCytTHB3vQzemWUQomAgWFahyogEy78qAKr2Ho+pItdiAUvEVyyD/RCxC3/JQF3bcdXVvoPpBbZbs7/+7BEE4zkYGDRm28r8IopugNt6H4RIYNGbaS4ghOmJ823ofjmz8jzzVbPTw4h5T0h0hQmNWx6/EBvc4kSnxF1Ajy6jTzzH4Ur6eHHd4tcLAIMIJCo4xhxxjCrYcYONsHgSpwFVjGDz0EJXHrHGJcVRzHSc//I2MDBId7i2IPZGxJP/r5hQ3TZmwAApPjGwZNZvl6s5n2sCKAGvJJBiUMTFLDcYXTI4K4gbVMotUNt+IjfGLV/Zjr4J8x7w7y4h1d5aq7kwfj19fe9bVi25emtSkBH7M/y/f5xexi25Zx7mrSy3291EsJVs0ZSiIySh3xS9cV4+8Zie/6/qEEcoIVq7FguVDrByDqDLVouOCwSpv3Pi4AAT26Kjtqxq2swoWQGUyhoAYkRFWsqC1XXYbL4EmLsrtQKsNDFivS3qt6UV5bdvWo9gzaXP9KqaXENAyeualyOVF11mnbhLWJE5IBoUl2dv3DxchGsSOpe8SRa4Ci+NKZmGjHSaIlDrNELiLI6kVyv3878YKnb0aMDrdisHfvVG48kgW1ylrqKpTUUAnLUrUkoBSOUF7QlEpmTN7JZa0dWWHKSA3ObmoCeP3rfBZmlxLs7upWVTN0Zgcp31s0u0xpLvssJvJZyc4k9W0951FF1SMqyAiNNuaT7vVx6CxD1KwhW8X/lP8TDdj61pWIrbMGHHDPqUkfaJ/x/KB1QZQYHgsBm3iRdhoWt01a7rgAAnfy1UGMuWy3rpNENDJF/iQilEda9KH0FTSfFlcqza4qA8uUlX8NxiKeFe0SBAekMi4boUGV9M8vuWl6vfS+Im22S26S6wRiNSS88PVd+Bf/7oEQojARXXtEbT0PwiwyaKmXlfhBRe0ZtvK/CISroDaYh+dzTmm5HRT3xmd9cZvA2Hqyj2E31O3EvwHnFTIk+v8b8Pa4kFHG7beMxgv1/cHXU/9svyErhYzva+tIAIJIkKX/gqRYZlTuvzB7dDD2DZH8psaedlcBbiksRnkZYy61LJM4NhfXTW7vAhN0HTfbx7Q943rNJGJ3HxrFarmmfr3SY3DHRqtnriRjxw4JHHqIGDrnIz05BFuIkI4iZzDioDiMJxzuh22FREohKyugwwsllMFCoIC50zUptX00q39lpppSgqmkkQAVJe0VVV54XH2kXzBcEwQPibpOHOPo9BiY/LYFdNzuQ9xamPs8W7DDm94uXzCGGyxGrEHKnWm7WJKzxbzXvavb7WtmLBaDHVcB0xqhcPY+LxY7EblQq6VQa6MlHFR6DhYqCojIWRteRkB6cI7emnmZ1f1E6C3yMiEbXpnGPBhtm80QAE98BuK5WSoryiOOiaWiEQYYUqic9STwKJx6ErmF8BDiMVjbF05UHa8ChXcunzmbab5V11mWuffaXS7yEtlq974OIyJROZbPIrxd9WV0viZGkdxf542vS5a4fx81xY4eJvqL+rEoyaa38Y5VTQeYPCMw1d06rn7v2qRj/de6D+a+zththMkldAADc/bqoautHRq7QyEIOCZg4DcZL2f/7sEQLDIQVZ9GbbC4whGpp82knqBDhg0RtvK/CIqcn6aYluLlMGBUXBIFC7c7BMtdCKw1apaW1qMWKtfHf1Wjz1nOPYTNOaQVxpyzeOU2b2tj39CyV1lIbsvrwrxqfmjkDkG1tvMz1d+T/jRR1GWmRCtP76NFIzjOn39lY5BZfELhvWMIwTX6/3OuleZJ2HVgAAuenCBioWJOEmEuqBDuF053+bvEXZcQAmRI1FpfTx9+aBucSlkzM6s0TQid0Ls6C7EWYIE0y0H5kJ0QoqufTmiRYpMUjwRMeMbEYSYXhOjLnkkVjBy35FV0KH0m2GiEh4vSu9fUi3XsJOJ1UcHwdF1SWIIxzKOupUPIDqLZHW2rjxhUgAJ3da6BokFNAa8wNSo7lPVe5CKz7NLg8RHpEJ1IHeqBveDbV926JVwki1noscv4xr00wxIMGLWZ/VyvvWazeN4dt13MeubRcQNPzeR0n/0FiQmysc5T/w4qM2QhxSxFHGaeK1OdJBIEqxmonRsv8aKuMH+4nKIUatodN8T11sg14oNL0A2ggAQA5vSIowSB0wVhldv8csRJ25PpFrsRBtsJweAGQviwfjtexFfBEPirezXHZK6C69E+7Ot/FNauZnbdbTN/pFYpfCM4pgghin95RddAixWmmm8q4e+t4Zq7LqdZZ6iayFC/JYxdvuL/c4tZKfyWzgl+ZyM4ntveOHgAUJoBUWJuTuPZCh1wrQgAAnP2al7w4aLpwBFoqcgvLDOMLBOV6VCIBKDa7lQ352Nv9L5ZdrVLjtztBZmccWqwYsgtQ6JT62PtRw0eZbpedhr8w3Q1XO9bFgHaU//ugRCaOxBZgURtsPbCG6coDaYh+EPGBRG0wr8ooJeeNl6HZtPecpsrORH/g7ZW5Q41j2uPmmzOVduVLGl6c59fu2s0SJQ7RpZ0GNW9k1sWu7Pq4nU1diSJQAgS/5PZgaCyfamjPWIBlhGhuTszUbcMUglB+WytyN2FEvJGc5ccmnX6reQ1MN/27/LVtrXgf+6eb32O0xUs+Q3Kx1zzgKa9k/gRAKEirpAqkXcQJoi+vqhpSM0RQsoiCoX3IWaMlB95EURDUnuipAyLEARw+9cND6iIBJC6aiamusmbEVRVil3KoYdELTmyYIvElMGT8syd9EZvoq2QwUoePUssVpzEewgfHsrP54+9h8uPmhBbmYkKjKWGrrzjN7QrqZF2/TbwwmV7di3jo0ff/L8w0WdrjxAlfUAGEX6hFhEYUaKEFnRauNIbYRKgpRpzm23e40D6jCUbpM136iJqI6CGHmm042VyzWb+ZAAAz7GaUzRI1kBflrKHho5s0ib/OE7q/g7QPObjCYcriq1E/U7E1vqlnAiMT/M8R0ehYouLKWxKQjFM4s9y0jx0OBx5FDnFgFgqUnFwaqLLKZjH+P6i07mDKUa6PhwIQji/Ikl4GqQcfZKGtmzHPAoVRcxairsL3q9u1hyqfHhVf01CZ77b2WxILVQAAnfxoVLJl91FUUV4A0dODVAwDeFMx//uwRAuIlBRb0RtsK8KHqonnaMi2EcGDQu2lEYoNJ2eFlJn4prz2jFxwWCH/kJ1ShwNkGT9PrhHvZc4zcUX60NjSGMoguLlD7FiZ8TcVRQmhyhodGnOIIxJoq5XMo+i4r6TfY6CuNVFVYyNBW3GK2NoRObV1GhYcfR7MjMxp1v0EiquYrOHcJ9pJhW+d90mwEAABT+nYLmVFl0S6SRrVAUHBU5PJThzH9lb1CGosqUxmnrQw7Enic3F7ty2zaNzV+5YuxB7XhXXJFBN46ezaK8MmSVFmi0UvJyyyi59trjrMH5LEy5Vf/0NnRCXpuowzbX+RFIeba8sWbLu9RVoXqIZ0jFKWmz9ISvdKU4ED8xH5MyIvdtF2IABLlvRHWOi5BoFAcCqSnPChflKx/l2NjUGMURWtxKW1YffVudjwmIhWyuTwMR2sOnz6JdmCBF3OtBHyNOaXxJZfq2pmw2IjcwmkrqsaaFUofU2eXfB1/1AULH/B/AjjixaT9ky6JMHtFOgiRo2TfXPP8jw1/9z//3xdX5pHtUD7gQr1W6ftREKTf+Jmowg1YSbQahSA+6KmnEY5K0Iea0xN4zN1Vhf6qqPWLjTxMTFWhGDPCik9pWV6+01dIVW2I1CD5LLMI5o+WkoSs63b0yREgSXWgGNJ2ZlGSSxCH7v/h0/6WHWf6yLBBBJHL4qWlFQv/yikZrQ3n5DuZbbjWStlcSidx0IiIfqKhO+ZtOyVagAAlp27iwEXKSfXEm+BAczedHg5pKPSxZ4RCxho0Bj+XQoTgu8IgBF0hAvJpoFJBVQolcCNVEj9ajN4vb5Rmitt0u7ISUmXpVn/+6BEJI7ERmDQm2k78opqmfNpJbZQMYVEbTCvQgugJ42mGdi0KqFgZRQg6I6RFbvMNJ2xjMLOTv2qOzD9HNpjpBUQ0TCLNd1JWWOP0cwY//o+/ueajtcy05zyKUoGbP2D25thAkJ/4TLgYOm8VAIoDSdTYMe5DCq1XSYbI60hFi8y80tq6lspzhNmnmY3Fn8iSy30i0qr0igv4Rhc61HCG4m/WWkk0pyu3sSqhGitUupsD/BRbcOqpVV6kxik5AQar3SZR6jHF2Zx7QmKGmM7KRLqzUMa41Xo7jiMtnrZxp3IMPVak3U6f8vfT3+KGTdmZhAxboSEKnSqTdP8EGn7I0XY4uZcyToKEP/F1J1EyDVGrXLXDpc+EipXNzk9V/YuSnMOw+ZqzBdHVHNlRikIpykMKiaAQDOJpUSIX0+K7jWCiA/Rg5HizPZxepxNFosQDzZ7aujdHKC+6X+ZO64oOo9RipbQSR3UYB0ol2GxAAAC7qGki4hiwAGIjIEVACg01T8ILsOeNokAMqTvDCkgZ0+VFRNJsBOH2xi8XALA0VKk1dxSCZHeAcss67mSlJe8QNMIqfokpQ5YnCKGim2jVXe1cJRs99/a4f3qXrHxuxyUn73bJ7lhnmTiiTUKCATFxVRE08VSPYD+ux+CYytab9bKAABV/TuLnGAAqgkHMZXqb3FF0JciZFH/+7BEC4zELGFQm2wr4InsGeNpiHRRVYNCbaTzyh4nZ42XoTCGtLTADiGU3GztMZCKlgJLJ4W1AMVjDMLsjTFLXymZeZavHOurHuyZ7U0TSy1ElFQYa6CJxZNWJqwzsp9jqKobxgm7sb0lMAATJ1Ehz49H1FF9zIK6I8QSwxTB1WnZWcPkdyceXqo1Ws4NKPFsDoAIDv+L7O0Fgs8nW4b+A28htKl+RBvazyjSnOgTQy2HrrOL1B8dFUFhsutiUflMTFDCEGkuijXsanTxI+DlSTtD8aI5pjjJMsRCLeRtXX8eIZ8NMURK/9EUWAqbbkmB0YxTiaHGSOKmFjRLcbUrIyKHGFGHzUcylJUUu9M19PUb/xdzKHfLd9bDFAAQXH+FAhfAQFiSumA3UqBhzTqNCsPN+77rOqk0vuXaxsWK9umoIim4QEEVSCkjqEgYm1NdEoJmZ0jtqNy8/vi+0a0KckwhJcxSCud9GJ7iSd7Hbtlr1IsVPrR/+LGnPlGGdhn2BQXfH1U+/28w2URG6BAQyB6jZlU56xTZWqrJR6pdXE78Z3ylptQEgK70WkCwoZGGXJcIpphHMeRMVHZc1EhIG4LZ0TVnepxjX04xIfBfLKmV0B6wSNsQo1BRbIgUHuYqDXgoYbU1czcVdsNPFM8zhRcQlB8kPxkd3Uf8+JRziPjopTCP6LHC1HV9EqZY+uITDu04/5ISakuD6unPgMBk6FnOe+kCxFYl7BjbnXlqAAKe/BQMDAjcGDRNFcqpBVYdFBG3RlE80eC0xX6sP6bxQDUyqZOxayuaSNiSvtU/sypXRM3myVtluOde1uk7ntxTB//7oEQhhERQZdCbTFPyg8l5wmUjjJHFoULtsQ2CJidnqbSaOSyiZ+9X6rGc+YLEKkNDSBLo6c9kC8MfSVMNLmsfm0RgXhqaOaFULDp+Y+y8r33VYSzUU8You3tV2Vdey2appV1Ne7JIhGlyAAbjjFDOw9g8mi/6CwXAAoCv3feale+WvyhTG3NooKfhngsUEYjFIyRhtQwdskmJ8mKLEiPTSajEJsRmjRFE72pqqJrJJW22XUMIWC5eTZnABABOoS6//0qPyN1dvsULfh/9IvtBGVuh60lpjBwiHMU4XeFTohN3C5VNi4xL41h5a/+sIAANz9M0VDDnXYwQNBw0wdCcprKIBftrbNIu8RdCqMmVLAcFoc1qDdx9llYVkSDjRgSWSYsPiQwkTv2gyl2pKG08IpjSKjbHiMhSZw4ffajYS2karpwdXZrlB+j/CyeLXDRxPPU3D/Atow1Ov75fJH9Xc17g0EengZf79fx29kJKM8f/VUNue/rWwd+htgEAElz/BceQmHAvwGK0aiIHn1bYEqTblv7DzYX9xeaMU8mfQ00MEarnllaRFWiy/V2SmU5iViXUvBinkt+SeyLVtpsFmUDfUj9vUIqkFXeo4tmx/9/90thyPUc6vtnmJkNaban8q8hN4EJ98x2R0rLx0jRpXqRjCUTykiRX/GpGm+/42v5/P67q9QAS7f/7sEQBjMRoZdAbKTzyjOwZw2UoflHBiz5sMQ2KNyrnDYSacd1bgcQfBZjCiSTSGnE1azpM1B+YPn4LfeczvxTCSP/FLMngVDIzYkNCppImPj0zuliNrDptEPbScYsTfvOS3VFJm7Quq9hJLfVDV0xl9tNhvpMfwG4CFJBv8Zoc1LKqsnBJRipk1IlHEwqWXskqiFN3o3A5Nkc7f+w4o3ZJRzl7IqqMlmM1tKciFgAAnvT2IMgcByhCoCEbCX2AQSdiXjEZS9L1S2LzrFl0AgYBclLg4uSlRTw+9EP8lfzc4JSaeR5iFrYahZTNbXfV7ij0kaNQ7OUoe9wCYpadTeXR/t+4SBpLKrKWnjhHQRtpkZBd0OqxifLevXRRmbRj6VOt2Oiaa1HmKaNqZ4uIaePdnqeR1VV+2lmZigAAt/pJlFgwok8HMc1mSpFA2os5giXP0xQUg6GY0DsldGVzwk+lJhGOlsFykySFSkrHQ89CoMFrN3ETm++WN6mMP31Eg0RbFRoy2LYd+Nip1gnofuO93MEJn+UkQkty74r/GS8/4gyw2u//msfHM97dOGi3Fq5abuoufi0EU65Srxu1DKxwjVUFnSUiMoIAJU+pwSXTXekUTNTuiSSbiqDOrXbaD2IQLccrTKpmGYao3Eko7hCNE4HoREgTxu0MS8Frqooklp3hYrFmL83dRKNpxRKH6NNoXKsKRHSOUJYr/L1/H76WRmBOO/0xv05DBLpEmu+IDhLuKRTILRbW2fy7n3tI/fr6/ppSXL1m80DvbmnHbmMqxktbmVEqAALm/LYgW4ZU0kCi28XmwJr7gw63NaEg9DiB//uwRA2MBENY0BsMQvKNTQnTYMisERFjQGylD0o2tGfplKH8cm1J5y+I6EV0x7U/Wlb3oK0OlK4xgXw1YXN9jqQ69Yf7TXBjE1AwgolTDeWGTyhuT8odJp1hx1kgsUkZ9/utjRb5pPgYDwNDr/CWxkr36pK/UrVW3zAgjnE7WpFQp/dSv9HbSIu6C3M71v/k7kiAXf8CzhcagoFUmStRN9NxYNKtxLbdH0iUAxF3YZmYfmn7hiH4xM50k7IAYkHTkGOgAklD7Td5yGosnO2bWzJ2VWucakFlHO0PGtiQ1mdtx5/L+vyqKfEst6WTXuGcgy7tIooF5wm1B2GGSNVuTeqZp5NiB1EmTbXLJd1Sqk/prcft1Kb/t3Nq8aRxR6AABu/l5jKqRZFgCYld7pTzA4Fd9/FWMppXEdhhlkQJpopiRbVBkfQGm42oiIA2lhd0BGcJVTRCnixTRk9XBdmKwwaKEn0cxcT/Yj3OlkiRTaQW/KEh7CvN/r3Aiy819Vg7aSKVA0Sp+ZVfXW192rVUSG4hq7F1kt15QrI8w2W3loXbyAXuW3EIgBgCAEUradAgoQ/bVl+tMh2JvwvuV4yGo+79XIqiOMIWrHHRTZNNQaQUvIYbLryk/wXTmuzK4Iz7Beqi9tSCaNClMhPohWk0rLOwIWLvjhZI3+r50FAp3H+phHzayltGxIrFjHEIPrpQ+SljXGiKtrZ1pOIfA2+iGX0OmpZm5vdnTm2ZIufikRIuedn1LgAS7d18mO5wYnahi2V41YGKwRAToRdh8Va3Esp+D4i1+W43pS9c7yzMIA0IyWsNMzXO5DmIZiTTtljew///+7BEHozEX2DQGwltUowtGeNlhk4RjZlAbCURyhoq5022GaAnY/ra2caX5hrS2wyBodls71e4XeH4/hZn0Ct02U9ndRTWfJ63ego0QqHPqN2Xr6msvqra1ZKqVVYwXMaq0FoFF1E9de9D0Gnh0LYgGdRUCUpv+M2rBoOKVjocvfxYB5KAOAoVOtqCAqLJ8PZmTW0FhumLXDxpDo6d8U0j2v2rqFIW2FLgPSNNSCyVNZdsJJETWXhaMSkBFfDrv50OUczsRJHk43ef7NKQyzwFmXkJY8s2wJ+axhnz16b5rZr3ff1s7eeWzqyvObEvmPEyUWzNr4+ItWG09zvaNPgAFOb+AUea5QcLnZy/FivJIBldM5UquVpJPU89KxZGdJjDTK+Akkgi9szJDEuTeZBCUv3FyVEwbW+66fonsU6UQLNqqtztb0gI3Qy8L2x56kl0xQeWI4+a/65guqi8UDygeJxIAJfPU9XfApxPMWsIj9JD985PAqZUN8P4paTxG8WNRa51jRboaC8+lCACVN6TxSlRfISAi55dlCFRhrzSHabk20tW0UlhHKI5nIXk3yCfna04RnQ9Ew4XsNg4cetKf1CjXGuxxZ6ReI7eO/qn1NHeB3vydQG4hmOr/Yf7/Nyjk52947Wru4RmE9Z2LrJeSuHfl72vMaqdjTi161a3a2nDMpoepUKPTrCqWqWiw5NOLwAEXbwBci0IJ6A2JwvZdJB9K2VPKgy3FRHVs7Kzl5dRlEjV5lE9C0ZFBVEd664vZK0deILNGSzqMzz+0YrjONzFIOJIWkE0Z31c3OZ1tp535bPjpcgOj/nmeNsKU/MCMv/7oEQwCNR6Zk+Z6VzQi2nZ02TIrE85mUbsGPHCCaPnibMmaaS09xNty9KXajy3yfPxdfmC8//9x3cjU342fTF3y6J/Zbba2q/a6uKCJcBRdn/6iATb/jhwT3CCm0DBUp1tqXtcVWeKlaRPuNBD9xacdi/Zex+Z6fk83TTkoEEiI0Dq2izjLRSNiCJ5EylIk9XUE065uQyLLg4an7q8FhRAMrg248UxcvS2SDVXzYk00TnfJ6IQSwkFvWLl8xIKZ3MuHH8w6jTZnkWusUBAUP2rBRmOC5FLJN7pTdy0ReFCKc33E0Cj3YRlbC6L1RZosXi7i9kU7QUuM1IdX4FyNLskRQuFl2ITSRJktXPp0zz0ULJnVU/GJRyr0FTAugYJo5/XZU/Ifl/5VT2B+QEwQvzWMP5pEeIDSPC1UKMVuPhOpQ2hxKooS21pQX//XDL+hifr6p26emAMwDg8EBRCw5GtBVy5ImEstt6jOY+5TOcndiDpO78P1IjLZBsCHIGwyJZBMGyyn6Bhz1N5TRJdb1y3Nws40i+8gQjPJ6JKXLD+YhrcLldUd9brxqqj1qS1OrnNZmhE60sppiFyp85VHcYh2MOUFJXWh7Fj9LBadc94tF2RL7moE7eW8ZEAEuXdG8GeV+y4DIcigTBZlOQ3OQPDzXHhgfEg1NJglQTLyQJHCja8CoUCiOGRbf/7sEQXiIRWZtAbCVvyjqt512UmjlIFlz7sMQnCOyzoaaSiPQym8rFTJTIYpy9wmsq9SlFHDE4rSNzTf/a7jdF7YHRrHdq0dmDmEz+aypC+szijLg7C6MzOYl16Wmxb0b/ZFVwXXEcXHH8uJ3H2xsRzMt7i7hjPrqencN5Fa2doAIASl/x2ImloGTpkKMMpf5hsKftrbQVh4w7DiuE7lSVQHAABGhUJbQXC1ctqpklYldselb2zt71UCNDU8Y1hy8cRnVlssdnV6hsgFRrfd5chCPXJXMHGH49Lj+VHb7LthEgpMwCObT3/xPQNSLZDt6XJc2VX1s3HVvK9L/f6+7/2vtOYnKQXNrJbwfZDG4EAAyTcIUARigFUhGleC8V/wBMGaQDcaEBYiBaYDsQDiygkpz5ITC6PRVwtID9V7qxxDXtLkUVsPkdzSGl3qDVgmCBcpD8WQcix6h4CQQj8sQD1EQ2iH9w9sFVz428t9z8RIGzN2yEe2JbnJ5SfEL/rLiHO5j+1762BSnflv8vt/0mrctd3MzEY9ggNOAv/+fAIpNSW4DlUr2IKkV+sBAKr38lsqrwvOSRKQ0MtfqpNTHZsozY6XWVQzEmqoxOJBfFkUlXElbcE5s3AjZpAmktJd8IIFzSInQKZHtWq9iVKPvrqH/AmpQR0EoUbM77oVFJdw+nPOdLeFGrJhCKVIiJ999IHLzZqRVQnzbPdJU3tC76xBffg9xA6HGo3Z1yQlQACpPy2ZxCBrl/BZiXjyMkpGxUODKF2sbay6FaLO3Mt0C7AgDoNkA2FlAuaVQpj6AnaXWbVUuYYFRF5O8Y+d/5Vzt0E//uwRCIMBG53z5sJFHCRTNnTYShoUdmZPmwkr8InrSddoyHpSr2pSUlLPyMyChBu3I/beW37/ADBlJ3szRBdR+5w9LqoQIiWJr7Mz7Jdle5K3BHEoh4NzKRrFOkrHApFIQy6LsYCyIM3/+v/8ZwAC5vwVEnUiM3BMWXJxLtf2HmbSxtKFgY6ILLE4LlAuQA5YjJGgWPCEu0ZjfiGpnlIHxCuNciDzdOJIWLeFOLVhcXMuBrXYskD6Na66H4zqjKUKVY3qZUQhdR30YPyejtaZ8+nNEEDSEqrOV1JQOB9ayOofNEl+tj0n6mLiVTCFB2PYgVayZe+JJLOgdJ8j67EABJl/IDIwlmC4iEqFuLJ18sYqQPViMEw1K3uDJscDQKoVQRDaANBUVgLgZVem/isy9uSrhw2uVl5zajt3Cyjt/T5oy3rBxS0t+qDgsFqoqSlTPoBR8SXRFEOLjHoinFI4a6GegApsdfekqDQ+gohGlQktiSiYYzKpxbnd0di3MAJlOh0srlcVc4dvPf1/lgRAkp3fHxAocCgixxJxMpTR9+MKbeVWX6j+OLZyIwpFJMtYGFogaJ5ZMLMPcmFqh0DW+HDDbphBDMbB9stNkkIhB6F7ihHB7OqGDO4HXx6nZwesh14wkeWHrHq7i/BblCv8TkwsjQFhXbg6xphFjM0ebognfiKii4q4kuI3n1FoWGUUvS7e1f5ZOoAAp38aUCHhD5W7D6tNdNvX2iqo22T6ZFL3r3LIXLs2bS+IVFw+RvEShoooZJBTBJxKPoVDXKo2lnMTql2PlyZ93WYjNMQSR9Z+3NmLjo+4ql7+BH0EAU6/Dv/+6BELQyEbFzPmwlE0I/rSdNpJp5R1Xk+bCUPwjqx5520oj0RMaPx/+q5xp3HWLBYds6/0/wiSHQ8357r2SbS1H8SuPt5n5xeIJS8LF4DNEQSGm2f/2HSQnd9jrngcZAoFN1tWWpEtovlE63DzQog2SGoNztO1YgJtqkeh58g41Jceiy6iyqmoUNu81bl5+UU0BtrxrKQrz0hdqBMVI4zyloGWDzNaw7tId6cabELFmvNtqlrksINhYg5VkZrMAsgrWba2XL376o9080C8777J9/G7iO6/jJxm+XyM8goomkCO7sVKG9gAlS/lVoGUNPSKL0Mqf1OCA1owc+kTZJGsIq6ANBVZsC3JxcCshZ40RjBU6jRYqtGPtQVEBu25yybEd+LVjkOHIYxh3eyf7/TJokFqmkIRYk+/kOnskV+JwGi6Lekf32NA4y3ismPLNaqr63m6CGA1xEVCVMz1BkVogoPE3V3VOclCSTsSgXBkitzRzv/6QgkFtunECQYFXktmDL0iygLvtjag3F0pa/zTYjDs5LZFkPcVrF0M0KJVGk+BQ8KNgQS8LUJ23JWylHx18HTVlaHyETLdHnNoulr8R2TXqBvpSImM7WODDCVNCCJ9QnLycswQsRISJuxlN+o+DjNoWvM4aoaa86J19BH2ir+COD5oW56Rftmvs6poqHHnAS9ABKc2GD/+7BEAozEgVjPGwldUI9MudNtJoRRUWU+bDELwkIz502konkgBCu1H3LLorihQhAtuLL6S8TBazKaaHHvgSVN1xgZwIlS5yPbrmJEyNodbQ7ErMUs0jkhWJaEV032vmxft6w5E7bfJTU5eiKIrWPfMGyjWvp+ZzV7DZ37OWyrdPVhux6qALz1cyxFu1tf8VDXfcOZqXF3E9xTh31zyk5tUSBaQBckrSfY0YA1s//2kApzfnmKIqHDAaWSQuJgRDIlA0hFy0LkQA3Fw4PdiTT7Vok9aMjMKtkETYaHDSyeKIskbziQXglFXpRVsLfLY8wyvK8UW7lwfnL0Dwh5jeDd8Ziv/tpYWz3L9nLI7ThiL+8fNvAJOM3ljeYT+tv947Fq2pPeGaOXfkptO+fL7X9eXaoPnw776JtTfxdQpGAgAFS7l/yyQnpVVFedWGhSscBT7phGcqjIjFZCeKw6mUR2dCmFYOEDzUR5Zbq6OF+PTZGoWMKdt6juWvuVaWUags8XLfWii4iCGOmzxljl5Pt8TxQyeJZIKmrlluoIhTQBLWKjEMuKS4++aqJ7uB/tfHp1pAiXHzpdwLmgMVNjHhgsPgy2UAIAb//UASbdufuOZsEuJI9urmRu/LpC/d+Jt/Asja9GMIbygHksjTsEJOeJUCCJIhR47DSNdO1idFNb+krucE4Ys21lMSpLU4zbTS+c7wsQDRTYqu30aDd34Ialvku/NxZEW2MrHq2XrLLoYCbtNLuaPv3itpq6pKtFmeIlVEWleL0WngdfdLEnD5priUZOeFp70dDyagAWpvy2pgIJSEzFllSJ/patDdWlaVFVJf/7sEQMDISYaE+bCUPwkW0Z120mWhFxoz5sJQ9CHavnDZYZORygomzoxKkCpg2CIMKgpb0akLQDSBHIeJoJSgeSJ7MSV6yhTMlB9RxpZYnSAho5ErZlePabZGWjYkQa6UT+pjGhS+udmhj5QZ8CVNQ6EeS4G0IDqstLTzCRx/DTTPT9eVUoF4a6QMyasku1TccWPtO+pThp50rZRjv/6wAgJG7/nOuQNBENxYfRATUkKjbtw00KKAW8BAMABI7KkhVUncIDsDLcyaQ1STA1rJEcMxA4r9kC4vSPLUHQ6RxKsBuWbB8v9kvTQQ07dnGY8P41sWTb80ZxUaabRirJAu5GVzDSRNI7x0E8NNmKp9MvYYS7O1/zW+HhcX3Lh/ipqGovdbvbtExfxlNuUZVxW/lAAFXfmFgPIDpl2DEVXzWlLmPyJ7Y/PP5JXQf2HgSCgbwKhK6XNFmGjDBRAo63MuOJoKkqcSKtfdVDn+MiJXaSBSWsaTFXxDPVML8EVOWef4msPjSkNgUMgbcRmtNuG9GJOx0DMuLWjK9F+7poZWq5eTNbqXiwrtvIqPjQiL0m0+qmJH/dWkVrqtDLHABGXbGtGPgsjRYIBUoF1ID0iWFGISLKl0HUEjD8VF6wvnT6Yu1Qli6UMxXPvkr9UQW5mdSSu/Mst8mT2Nrox0E3NHbg/cydOlL/F957EvevMP3ccjbfWeUzw25m6k9mERcX466kPGfvjnfn4VdNUFeqjcaYvs15862ywBiwmO+4UOQiQTHBB2oAJALU36E8FOE/CRFxLVac5XYy+M+mK6rM4IlbcDgVmq6ARYDbZZtdGOtFT7KB//uwRBcIhKxnT7sJW/CQLLnaYSaOUnWfPGwlEcI2MucNliExYskK1GWGkc9bVq7WulUpuqXnEUGCIGAaV5x5dEvunXKNrVsuuo6av5Oy499IAho39Obs/LHECcEYtQ+aXqe1rj//m5uqrnJU1Nzv8jme2tS7YwUXyym257N9yrcsmIZsh8TBaNO//qAAIAhMy/8P8DnNPft7F04uS2eFxiDYrH3xgaGJRSY0lCHFiqJWM0RdASnydEo1Hd8ESmHnM4waJ0kGGXrWhChG/b9LNVXndbK957jO+bN5ZZq8P+VDT9btb6zgPLGfEfpZ1/uotGNd6N4TPvgU+lJR7k0vwt/P+3VtB7MbyruN1/vpDboIbRF9F7msyy7KTqAAlOfBToU9FAUImeoOmLAqKyVMpWMyZtlyMGdt1XKg2q+hh5CwCJQFAQERCJDArIllBT5KusqhRy1oiwxqTJbTiaBSfXpic3GIeiakM98u2vLl2z1X2FXH/whorrgYHDv1uVxSZ2Bg4H3g2Irqvfj+PobKGZcUPICiKUPkybkVE99o9Y6QHVtTb1ELTrHKcXHUfj5AJTu2E6FuEwC4ysEuCWlTBRWUpEEcg3QgkOlYxJzhJKhMaTMF08OjAuElRip6gorkHuws9hGO3PF6Fxp7Q5hw+Mm+0Mk4ag60OXF8Orr7vJMlBE93JOqXRLIDgFOgfor/Yids80qzbIRV8NY34hx2KI0xtVSOo6/uHp7WNNbH9I3TIbDDbn9ISZbGKogGACAE29/AIooWMARJmOTEHPb1ubKWhwCqaMW5BOyS1WzWNnSIB0CNOSopQqmJnCBNcnaRLKP/+7BEGojEoWLQOwlEco3MGfNkyJtSUYc+bCURykYu502UmjFzhiGGWqoUWzKTeqVe0KwPSJ3NUZxuc2XNnGjU+tUtWXNwP3wbc/+Jp/6n6rDnA5RSxIHnA81MVkTRHwXypKQeeP8iABh1XDvugy7SJl5HqII6rqG26ZNZhuTuqMQhshBSjkxr3mCIXJSaeJurWFEWbRd8WlSvB2Gz0UGcgqk3Ko7ObAxRqcnhlwQNwp5NPlMkSPCCkTosulMjZL1K99pi4J0N1dg9osDzjWJsQJNWGgofKKPG3HVsNNUPmPHc15QfzqOEDjRoYH1WOO7tPbA6Wp5ruo9atNqVaq6mlWWrHkxAtA05ZLAkqYRvTDAABSm6Bh9Yh4yhFZfzUlYE+2eNbQlyqCqruMQZ29rTIFggExcgOCkLDQufcgOHZkCuIxsbUHMPIokYnYICBRpAUr5t11vKyUgdbEK2r/tyBQzhIy2vlowu5qHJ609Ap8e7c/jMJnPrCHk8/2z7/4qT3FrEY9uRAMFBEvRKqZJ7WZIgmBgLIieanf63nxhJyYs2YoAE5b+F7gVuZiC1EOhZ8eLb1Vz/vOwlnEQgNpjuMTsPxHWtA+KwEDx4saLFA/bxlZCuagsgSzI4kSwYgpDZoPCcW0e1/e8Ro1zMl11NygDknl0XBW1/pjIGUbeppPUESBFl1BWe+ln8HXn/eCHXH3//qXmDw0vLGRW+VNOtpdmPnZjlMi0V317TYAjs6U1YovhjABRV3H4hhDpcYIADJJJ6DWrERFcTR2uNcizKou2VhK8HIc2Wiqni9tmIHEUx+aPGUBVgCgkNBVtT/YIIDv/7sEQejMTAZ9AbSVxykm0Z02GITBKJn0BtsQ+KSK7nTYSh+RwViVIT7DZ8hZjAscErmZnsZ+/FchKWRjGd3F1baHvvkd5N7m8md83A9h4HqA/Nudo2hv9cT18rS7eicu35FkXmTOz/xUfcNb7Eh3o7aiO5hz+2zU9Ml0fejYkABK781VSZRAV4jIl07b7p7pngbHEOwPvCA0rEgSAaQ2EnjkqHZnc6PlbT1ULFZNYP2hCmFpUswocsFeXNP44VFDwdLLQ5+TR7WOGR9OJf+Z2FUJHYwcmQNU5wiEG+oyQWDoQQlgdfOMGwsT/dU0Wqk00z3Vwg+/pXHUMHcSIJ147QclUWHVMo2lcjZ2MdPGoKUWAC0nuYzEmNg7cFtgYJi7mKRLvFAc0l+murKhTOpctIfB/qExa06ZKbUV3oWCi9d54vSW0hyFJUQSs3MuMTsCU5bP4Sl22q67B5FB0o1YOhIkaayIce5raXuJyiex/4NYhCLYXpPHyNCsODtonhgQK/X/4rveBXsgUDpxKOIHZ19VP70XcbhMPif427734i4+fqMYzRBDd3xz2jGhasdposdSsvyNQfBQ9SpoKikBrwqrGJRcySk5khIUYJJnSNEGWhEiKU5dhlAUPH3IShthuCn8kXpTx3zkqsgIEZQ+mnasdpzhs+ZAcf33CinJtE3NMNHUGUD6DWdhACo6EYPTLm/kPqlKSZtoVssf6Ej3o1hutiJDmfVtXsicUjXTWGtn8fw6Hxh3EABEncwmcMfBSIHTHTsU3SxRiEQC3Nh7ewY12dW9CVMn7a3OO64V2JSJ+dQ9bymbctymYjOzfLNh0r//uwRB0MxJJa0BtpXiKQzLnjZSh+UgFjQGylU8pJMudNlK55iz4HRIVxI92Fh6rQzRw8qjh9UuxOk2ZoT6/rOowaml1zw93GvqrOfSS/Mbz3Uw7i4hzqvqF/////6POtoExwsZGYNljuNv3ULHvVYfeqz7q53P1+M9MoV0AJ2/89SkXGQhwaWSTQ0A+b5pXNfdymcVo7byFsQrsFxYLOFx8IPaeSJrpoEMNTrJEZRG5p6P+rgzbCWyFa0shXTVes2celt0xBIRuhbxPV8Ra6B+zDas71GksggiL7qkABhalqDBg/r2EHkRx3QzQbU1YClI2rsujO/v63aPjX4Jaue5gR9UUpWI3ZkuDSM4kAEpzc8kQZCEptlYk2zapdCpbtMndKH3fj7E51QF/H9e2PPt2HYSDDJLI6Sj4mC4fMEvUHl5BBNgAgwWYVzmZwmVxtnXsSnSHorXz7As075Is3NJPreVe6WjM11EpMYo18nZC3UfB3KlkIxWIEJLGiafT+no5lgGWH56MUW1s3vFxxkwcIF7qr8nKRL/fcOHogpy34zIBC6Bv0zVVgKA5KOyQZeJezEH2GhnTb1yHhfiKwRJ4alMMwKZTKkqKlYEs2Tqu7BdEOJ6NoLbxdzdkhOenCpZP52NXdAmSQ4jysYrns7v4XlJVYaZxT9n1qrfaNnmIbaKIvd9UjL/j42En5pkQfhrxrOPZeZQ1yzXxXUzfxNV9yydsfsdHMPn3v/U08aVUAApPY44YUCk1tjxdlPVAYHBQaFT0aEvluTClsMfirLTvEjRpvlRSdVryjN5hcU+rO3xXFmUjcxJs5FwPpCFtXsav/+8BEIQAEnUzPnWngAozMueOtLABaJdsgOcoACv61pQs3QABdx4WqarV5Bz6/dt7xRvj7vFlb6WvjT/UsXWv//qJvGZs5xv69/bHbbfGM/wrYn1Tdc6rjev/////9yX+4UexFaWn379e30eMs6Wz8nS/bkmTAALm35G0UqEgxcySt1AwBnqOaOcubnEHEVUgiOp2h7AXEpwKDpsRVifZPRVWeTlkFDpuu5dcqY08TmHZexrCo2fK7fdVUpSrSaixdVCLSWvT/b/9zoqQldwtcpOc02O3TOWjxP8fe7iE5cl/PzdVY7ZiO7jb234mqnqvax+32tdEubLauPp9xMOPOnH0gAQHjxybCihjI6mXgHvzBwfNEA4xuXAKFP8sG8eHgCEzx/4HOtgIfha8HR4GcJAhKhCABtqM6GWeEYQXxAwkADbuRLhzQ/YafihQMqoACFhfILQyZIKyRj8LYCXCAYDxQ4xGqBkmXTE0/E+CiDJjmkYH9IgQIpG0ycx/k8MaK2GXIoNkujsI2smTE1KUyL3/GAKTcjy+ThJlgWYaEEMj5doorRMqX/y+TBNkuZk8YH1FxIlkzRkkkjGiitFVSSkv/+T6JfOldRgbEh///XWYrNqAAs84AP0pRwPMFIgw2/zOU008gMGGUQf8aKzSBUt6xr/AwBcAKSYlLEBQtUOaMsogXFjC5kZsCosrE0VxHPgsGFKEwQ8bA6SIpGLfIQfBUIONkQnJpReNjJP8XIOWLiGUHocAxgrU6RU8UTw5X8WYQguMZAVuOMZsrkEOEWNikfICsumv/IUgA4CYIgSo0CDjNkeSZieMpkXjI2MaP/1G5w0Uenln1mai+cRWyqklOutFaP//NGNEjy02N//YIiKpMQU1FMy45OC40qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQjj/AAAGkHAAAIAAANIOAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"};
/* Local CC0 animal recordings and synthesized cartoon foley; gesture-unlocked. */
const SND=(()=>{
 let ac=null,out=null,mute=false,epoch=0;const live=new Set(),samples={};let loading=false,voice=null;
 try{mute=localStorage.getItem('aima_mute')==='1'}catch(e){}
 function init(){try{if(!ac){ac=new(window.AudioContext||window.webkitAudioContext)();out=ac.createGain();out.gain.value=mute?0:.7;const comp=ac.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=4;out.connect(comp);comp.connect(ac.destination)}if(ac.state==='suspended')ac.resume().catch(()=>{});loadAnimals()}catch(e){}}
 function loadAnimals(){if(loading||!ac)return;loading=true;for(const [key,b64] of Object.entries(ANIMAL_AUDIO)){const bytes=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));ac.decodeAudioData(bytes.buffer).then(b=>{samples[key]=b}).catch(()=>{})}}
 function animal(key){
  if(!ac||mute)return true;
  const b=samples[key];if(!b)return false;
  if(voice){try{voice.stop()}catch(e){}}
  const src=ac.createBufferSource(),g=ac.createGain();src.buffer=b;g.gain.value=key==='dog-bark'?.75:.9;
  src.connect(g);g.connect(out);live.add(src);voice=src;
  src.onended=()=>{live.delete(src);if(voice===src)voice=null;src.disconnect();g.disconnect()};
  BGM.duck(b.duration+.15);src.start();return true;
 }
 function later(fn,ms){const e=epoch;setTimeout(()=>{if(!mute&&e===epoch)fn()},ms)}
 function track(src,gain,d){src.connect(gain);gain.connect(out);live.add(src);src.onended=()=>{live.delete(src);src.disconnect();gain.disconnect()};src.start();src.stop(ac.currentTime+d+.03)}
 function tone(f,d,v=.12,type='sine',f2){if(!ac||mute)return;const t=ac.currentTime,o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);track(o,g,d)}
 function noise(d,v=.18,f=1400,fall=1){if(!ac||mute)return;const n=Math.floor(ac.sampleRate*d),b=ac.createBuffer(1,n,ac.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++){const p=i/n;x[i]=(Math.random()*2-1)*Math.min(1,p*40)*Math.pow(1-p,fall)}const src=ac.createBufferSource(),filter=ac.createBiquadFilter(),g=ac.createGain();src.buffer=b;filter.type='bandpass';filter.frequency.value=f;filter.Q.value=.8;g.gain.value=v;src.connect(filter);filter.connect(g);g.connect(out);live.add(src);src.onended=()=>{live.delete(src);src.disconnect();filter.disconnect();g.disconnect()};src.start();}
 function woof(){tone(230,.14,.21,'sawtooth',85);tone(540,.10,.07,'triangle',160);noise(.13,.24,650)}
 return {init,get ac(){return ac},get mute(){return mute},toggle(){mute=!mute;epoch++;if(out)out.gain.setValueAtTime(mute?0:.7,ac.currentTime);if(mute)for(const src of live){try{src.stop()}catch(e){}}try{localStorage.setItem('aima_mute',mute?'1':'0')}catch(e){}},
 bark(){if(typeof PET!=='undefined'&&PET==='cat'){this.meow();return}if(!animal('dog-bark')){woof();later(woof,180)}},pee(){noise(.85,.19,2300,.3);[80,180,290,420,560,720,880].forEach((ms,i)=>later(()=>tone(1250+i%3*220,.05,.055,'sine',570),ms))},
 bite(){[0,50,110].forEach((ms,i)=>later(()=>{noise(.075,.24,900+i*500);tone(180,.045,.06,'triangle',95)},ms))},
 tear(){[0,90,180].forEach(ms=>later(()=>noise(.16,.2,2300),ms))},throw(){noise(.19,.12,1500);tone(340,.2,.07,'sine',110)},
 bounce(){tone(260,.18,.14,'sine',650)},grow(){[523,659,784,1046].forEach((f,i)=>later(()=>tone(f,.14,.08,'triangle'),i*70))},
 roll(){tone(320,.19,.13,'sine',740);later(()=>tone(480,.2,.08,'sine',160),150)},lie(){noise(.2,.15,500);tone(160,.18,.08,'sine',65)},
 scoop(){noise(.12,.18,1200)},pickup(){tone(680,.09,.08,'sine',1100)},meow(){if(animal('cat-meow'))return;tone(540,.13,.12,'triangle',960);later(()=>tone(960,.30,.10,'triangle',440),110);later(()=>tone(450,.15,.04,'sine',330),300)},
 coin(){tone(988,.08,.09,'triangle');later(()=>tone(1319,.15,.09,'triangle'),70)},kibble(){for(let i=0;i<6;i++)later(()=>tone(1400+Math.random()*500,.03,.04,'triangle'),i*35)},
 shutter(){noise(.06,.2,3500);later(()=>noise(.05,.16,3000),70)},pop(){tone(600,.08,.1,'sine',900)},ding(){[784,988,1319].forEach((f,i)=>later(()=>tone(f,.3,.08),i*80))},sad(){[523,494,440].forEach((f,i)=>later(()=>tone(f,.3,.065,'triangle'),i*180))},
 heart(){tone(880,.12,.07);later(()=>tone(1175,.18,.07),100)},phone(){[0,1].forEach(i=>later(()=>{tone(1320,.08,.06);later(()=>tone(1046,.08,.06),90)},i*260))}
 }
})();

/* Original playful 124 BPM C-major loop: plucked strings, whistle, bass and taps. */
const BGM=(()=>{
 let started=false,master=null,next=0,step=0,duckUntil=0;
 const SP=60/124/2,CHORDS=[[60,64,67],[65,69,72],[60,64,69],[55,59,62]];
 const MELODY=[76,79,81,79,76,null,74,72,77,81,84,81,79,null,77,76,76,79,81,84,81,79,76,null,74,76,79,74,72,null,72,null];
 const hz=m=>440*2**((m-69)/12);
 function note(ac,m,t,d,v,type='triangle'){
  const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=hz(m);
  if(type==='sine'){o.frequency.setValueAtTime(hz(m)*.985,t);o.frequency.linearRampToValueAtTime(hz(m),t+.035)}
  g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);
  o.connect(g);g.connect(master);o.onended=()=>{o.disconnect();g.disconnect()};o.start(t);o.stop(t+d+.02);
 }
 function tap(ac,t,backbeat){
  const b=ac.createBuffer(1,Math.ceil(ac.sampleRate*.045),ac.sampleRate),x=b.getChannelData(0);
  for(let i=0;i<x.length;i++)x[i]=(Math.random()*2-1)*(1-i/x.length)**3;
  const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=backbeat?1800:4200;g.gain.value=backbeat?.055:.018;
  s.connect(f);f.connect(g);g.connect(master);s.onended=()=>{s.disconnect();f.disconnect();g.disconnect()};s.start(t);
 }
 function tick(){
  const ac=SND.ac;if(!ac||!master)return;
  const quiet=SND.mute||document.hidden||(typeof PAUSED!=='undefined'&&PAUSED);
  master.gain.setTargetAtTime(quiet?0:(ac.currentTime<duckUntil?.17:.42),ac.currentTime,.025);
  if(quiet||ac.state!=='running'){next=ac.currentTime+.06;return}
  if(next<ac.currentTime-.1)next=ac.currentTime+.04;
  while(next<ac.currentTime+.12){
   const c=CHORDS[Math.floor(step/8)%4],i=step%8,t=next+(i%2?.018:0);
   if(i%2===1)c.forEach((m,j)=>note(ac,m,t+j*.012,.16,.035));
   if(i===0||i===4)note(ac,c[0]-24+(i===4?7:0),t,.22,.10,'sine');
   const m=MELODY[step%32];if(m!==null)note(ac,m,t,.16,i%2?.052:.066,'sine');
   tap(ac,t,i===2||i===6);next+=SP;step++;
  }
 }
 return {duck(seconds=1.5){if(SND.ac)duckUntil=Math.max(duckUntil,SND.ac.currentTime+seconds)},theme(){if(!master||SND.mute)return;const ac=SND.ac;[72,76,79,84].forEach((m,i)=>note(ac,m,ac.currentTime+i*.12,.25,.07))},start(){if(!SND.ac||started)return;started=true;master=SND.ac.createGain();master.gain.value=0;master.connect(SND.ac.destination);next=SND.ac.currentTime+.05;setInterval(tick,40)}};
})();


function drawPerson(q,x,y,s,o={}){const t=o.t||0,walk=o.walk?Math.sin(t*9):0,sit=o.sit;q.save();q.translate(x,y);q.scale(s*(o.face||1),s);
  q.fillStyle="#0002";q.beginPath();q.ellipse(0,2,26,7,0,0,7);q.fill();
  q.fillStyle=o.pants||"#3f4f63";if(sit){q.beginPath();q.roundRect(-16,-30,32,14,6);q.fill();q.fillRect(10,-24,10,26)}else{q.save();q.translate(-7,-44);q.rotate(walk*.35);q.fillRect(-5,0,10,44);q.restore();q.save();q.translate(7,-44);q.rotate(-walk*.35);q.fillRect(-5,0,10,44);q.restore()}
  const by=sit?-30:-44;q.fillStyle=o.shirt||"#e9e2d2";q.beginPath();q.roundRect(-18,by-46,36,50,12);q.fill();q.fillStyle=o.apron||"#d2533c";q.beginPath();q.roundRect(-13,by-36,26,40,6);q.fill();
  q.fillStyle="#f6d5b8";const arm=o.arm||0;q.save();q.translate(-17,by-40);q.rotate(.25+arm);q.fillRect(-4,0,8,34);q.restore();q.save();q.translate(17,by-40);q.rotate(-.25-arm);q.fillRect(-4,0,8,34);q.restore();
  if(o.tool==="shovel"){q.save();q.translate(20,by-10);q.rotate(.5+Math.sin(t*6)*.15);q.fillStyle="#8a5a35";q.fillRect(-2,0,4,44);q.fillStyle="#9aa3a8";q.fillRect(-8,44,16,10);q.restore()}
  if(o.tool==="bag"){q.fillStyle="#c8a46a";q.beginPath();q.roundRect(-20,by-50,40,30,5);q.fill()}
  if(o.tool==="phone"){q.fillStyle="#1d1d22";q.fillRect(-6,by-22,12,18);q.fillStyle="#bfe3ff";q.fillRect(-4,by-20,8,13)}
  q.restore();if(o.face0!==false)drawMom(q,x,y+(by-58)*s,s*.42,{sleep:o.sleep??6,heart:o.heart??70,day:o.day??1});
  if(o.cry){q.fillStyle="#6fb6e8";q.beginPath();q.arc(x-7*s,y+(by-52)*s,2.2*s,0,7);q.fill()}}
function drawMom(q,x,y,s,o={}){const sl=o.sleep??6,ht=o.heart??70,dy=o.day??1;const mess=cl((6.5-sl)/4+dy*.06,0,1),sad=ht<30?2:ht<55?1:0;
  q.save();q.translate(x,y);q.scale(s,s);
  q.fillStyle="#3a2a22";q.beginPath();q.arc(0,-6,44,Math.PI*.95,Math.PI*2.05);q.fill();q.beginPath();q.arc(0,-46,15,0,7);q.fill();
  q.strokeStyle="#3a2a22";q.lineWidth=2.5;q.lineCap="round";for(let i=0;i<Math.round(mess*9);i++){const a=-2.6+i*.6;q.beginPath();q.moveTo(Math.cos(a)*40,Math.sin(a)*40-6);q.quadraticCurveTo(Math.cos(a)*54,Math.sin(a)*54-12+(i%2?6:-6),Math.cos(a+.2)*58,Math.sin(a+.2)*58-6);q.stroke()}
  q.fillStyle="#f6d5b8";q.beginPath();q.ellipse(0,4,36,38,0,0,7);q.fill();
  q.fillStyle="#3a2a22";q.beginPath();q.moveTo(-36,-6);q.quadraticCurveTo(-10,-30,10,-22);q.quadraticCurveTo(26,-30,36,-6);q.quadraticCurveTo(30,-36,0,-38);q.quadraticCurveTo(-30,-36,-36,-6);q.fill();
  if(sl<5.5){q.fillStyle=`rgba(110,70,120,${cl((5.5-sl)/3.5,0,.75)})`;q.beginPath();q.ellipse(-14,12,9,5,0,0,7);q.ellipse(14,12,9,5,0,0,7);q.fill()}
  q.fillStyle="#2b1d16";if(sl<4){q.fillRect(-20,3,12,3);q.fillRect(8,3,12,3)}else{q.beginPath();q.ellipse(-14,4,4,5,0,0,7);q.ellipse(14,4,4,5,0,0,7);q.fill();q.fillStyle="#fff";q.beginPath();q.arc(-13,2,1.5,0,7);q.arc(15,2,1.5,0,7);q.fill()}
  q.strokeStyle="#2b1d16";q.lineWidth=2.6;q.beginPath();if(sad===0)q.arc(0,18,9,.2,Math.PI-.2);else if(sad===1){q.moveTo(-7,24);q.lineTo(7,24)}else q.arc(0,30,8,Math.PI+.3,-.3);q.stroke();
  q.fillStyle="#f2a0a0aa";q.beginPath();q.ellipse(-24,16,6,3.5,0,0,7);q.ellipse(24,16,6,3.5,0,0,7);q.fill();
  if(sad===2){q.fillStyle="#6fb6e8";q.beginPath();q.moveTo(-18,12);q.quadraticCurveTo(-22,24,-18,28);q.quadraticCurveTo(-14,24,-18,12);q.fill();q.beginPath();q.moveTo(18,12);q.quadraticCurveTo(14,24,18,28);q.quadraticCurveTo(22,24,18,12);q.fill()}
  if(sl<5){q.fillStyle="#9fd3f2";q.beginPath();q.moveTo(36,-16);q.quadraticCurveTo(28,-4,36,0);q.quadraticCurveTo(44,-4,36,-16);q.fill()}
  q.restore()}
function drawKid(q,x,y,s,o){drawPerson(q,x,y,s,Object.assign({shirt:"#f2c14e",apron:"#f2c14e",pants:"#4f7fb0",face0:false},o));const by=-44;q.save();q.translate(x,y+(by-58)*s);q.scale(s*.42,s*.42);q.fillStyle="#f6d5b8";q.beginPath();q.ellipse(0,4,34,36,0,0,7);q.fill();q.fillStyle=o.hair||"#2b1d16";q.beginPath();q.arc(0,-6,38,Math.PI,0);q.fill();q.fillStyle="#2b1d16";q.beginPath();q.ellipse(-13,4,4,5,0,0,7);q.ellipse(13,4,4,5,0,0,7);q.fill();q.strokeStyle="#2b1d16";q.lineWidth=2.6;q.beginPath();q.arc(0,16,9,.2,Math.PI-.2);q.stroke();q.restore()}

async function shareImg(url,text){const full=`${text}\n#領養日 #認養代替購買\n${location.href.split("#")[0]}`;
  try{const blob=await (await fetch(url)).blob();const file=new File([blob],"領養日.jpg",{type:"image/jpeg"});if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],text:full});return}}catch(e){if(e&&e.name==="AbortError")return}
  try{await navigator.clipboard.writeText(full)}catch(e){}const a=document.createElement("a");a.href=url;a.download="領養日.jpg";document.body.appendChild(a);a.click();a.remove();toast("圖片已下載，文案已複製，貼到 Threads 就好")}

/* ---- real adoptable animals (農業部 動物認領養 開放資料) ---- */
const AREA=[["2","臺北市"],["3","新北市"],["4","基隆市"],["5","宜蘭縣"],["6","桃園市"],["7","新竹縣"],["8","新竹市"],["9","苗栗縣"],["10","臺中市"],["11","彰化縣"],["12","南投縣"],["13","雲林縣"],["14","嘉義縣"],["15","嘉義市"],["16","臺南市"],["17","高雄市"],["18","屏東縣"],["19","花蓮縣"],["20","臺東縣"],["21","澎湖縣"],["22","金門縣"],["23","連江縣"]];
const PETGOV="https://www.pet.gov.tw/AnimalApp/AnnounceMent_Announce.aspx";
const TWMAP={"W":600,"H":873,"C":[{"n":"台東縣","d":"M450.1,528.8L449.1,530.3L449.9,532.2L448.6,533.5L447.5,534.9L447.2,536.8L446.9,538.7L445.9,540.3L445.7,542.1L445.1,543.7L443.5,543.7L442.2,545.0L441.2,546.5L441.4,548.3L442.0,549.8L442.5,551.4L442.2,553.1L441.6,554.7L441.9,556.4L442.0,558.5L441.5,560.3L439.7,561.2L438.0,561.1L436.3,561.5L434.3,562.0L432.8,563.1L431.4,564.0L429.6,563.5L428.9,562.0L429.0,560.4L427.8,559.2L426.9,557.8L425.5,556.4L423.8,556.8L422.1,556.3L421.0,554.7L419.1,553.8L417.5,553.1L415.7,551.7L416.2,550.0L415.3,548.4L414.1,546.4L413.1,544.9L413.0,543.2L412.8,541.4L411.7,539.9L411.1,537.9L409.5,537.2L407.5,535.8L406.1,536.6L404.2,536.8L402.9,538.4L401.2,538.8L399.4,538.2L398.6,536.4L397.3,534.5L396.7,532.6L394.6,532.0L392.9,532.1L391.1,532.3L389.3,531.3L388.2,530.0L386.5,529.8L384.8,530.1L384.3,528.5L383.5,527.1L382.5,525.7L382.1,524.1L381.2,522.4L380.7,520.7L380.4,518.9L380.2,517.1L379.3,515.3L377.8,514.5L376.2,513.8L374.7,512.9L373.2,513.5L371.7,514.5L370.1,514.7L368.4,514.8L366.6,515.9L365.0,516.6L363.2,517.8L361.6,517.6L359.9,517.5L358.5,518.6L357.5,520.0L356.3,521.2L355.4,522.6L354.1,524.2L352.6,525.1L351.6,526.5L350.0,527.6L348.3,527.5L346.7,528.3L345.9,530.1L345.4,532.0L345.4,534.1L345.3,535.9L344.1,537.1L344.0,539.0L345.1,540.5L345.2,542.2L344.2,543.5L342.6,544.3L341.6,545.8L341.3,547.8L340.3,549.1L338.6,550.4L337.0,550.9L338.1,552.2L339.4,553.6L339.5,555.4L339.3,557.4L339.0,559.0L339.4,560.6L340.0,562.3L340.0,564.0L339.1,566.0L338.5,567.9L337.6,569.5L337.0,571.0L336.4,572.6L335.6,574.0L335.8,575.7L337.1,577.0L338.1,578.4L337.8,580.5L336.1,580.9L334.5,581.4L333.2,582.6L333.5,584.5L333.4,586.3L332.7,588.4L331.0,588.4L330.9,590.2L329.6,591.7L328.8,593.6L327.4,594.4L326.2,595.9L325.5,597.8L324.1,598.8L324.3,600.9L324.4,602.7L324.1,604.3L324.1,605.9L324.9,607.7L325.7,609.4L326.6,611.8L325.6,614.0L326.8,615.4L327.2,617.2L328.1,619.3L330.2,620.6L331.9,620.8L333.6,621.7L334.4,623.1L333.0,624.5L335.1,626.0L335.0,627.8L334.2,629.4L334.1,631.3L333.7,633.4L334.4,635.0L335.1,636.7L337.1,637.6L338.7,637.5L340.4,638.0L342.3,639.8L343.4,641.4L343.1,643.2L343.4,644.9L343.3,646.7L342.6,648.8L341.0,649.5L341.2,651.4L341.1,653.4L341.2,657.0L340.5,659.1L339.5,660.9L338.4,662.3L336.7,662.2L334.7,662.3L332.7,663.1L330.4,662.2L329.3,663.9L328.2,665.6L327.5,667.3L325.6,667.2L323.5,667.7L321.5,668.6L318.3,669.4L316.3,668.3L316.3,670.0L316.8,671.6L315.9,673.3L315.6,675.9L314.8,677.6L313.4,679.4L312.4,680.9L311.4,682.4L310.3,683.7L309.6,685.6L308.1,687.8L307.9,690.0L308.1,691.8L306.7,693.7L306.0,695.2L306.4,696.8L306.8,698.4L305.6,700.0L304.6,701.4L304.4,704.1L305.4,706.4L306.5,707.9L306.9,710.3L307.3,712.2L307.8,714.5L308.9,715.9L309.9,717.5L310.3,719.3L309.4,720.8L308.7,722.5L307.1,723.2L308.0,724.9L307.3,726.9L307.3,728.5L309.1,728.8L310.6,729.9L313.0,730.5L312.8,732.1L313.7,733.6L314.7,734.9L315.6,737.0L316.0,738.6L315.1,740.2L313.7,741.1L311.8,741.7L310.0,741.6L308.4,742.2L308.7,743.9L307.4,745.0L308.4,746.4L307.0,747.5L306.7,749.7L305.7,751.1L306.3,752.6L307.8,753.6L309.5,753.6L310.0,755.3L310.9,756.8L312.6,756.6L314.2,757.2L315.5,758.3L316.8,759.8L316.9,761.8L317.6,763.4L317.4,765.3L316.1,766.4L314.4,766.8L313.3,768.1L313.6,769.9L315.3,770.6L316.6,772.0L318.2,772.9L319.8,773.2L320.4,774.7L318.7,774.9L317.9,776.6L318.6,778.1L318.2,779.9L319.9,779.5L321.7,778.8L323.4,779.4L324.8,780.2L326.2,781.9L327.4,783.2L329.2,783.7L330.8,783.5L332.6,784.3L333.8,785.6L334.4,787.1L335.8,786.2L337.5,785.7L338.6,784.3L340.1,783.5L341.5,782.5L341.4,780.4L341.3,778.7L340.7,776.9L340.5,774.9L340.5,773.2L340.5,771.3L340.4,769.6L340.5,767.5L340.6,765.5L340.7,763.7L341.0,761.4L341.4,759.7L342.1,757.9L342.8,756.3L343.6,754.9L344.6,753.3L345.2,750.6L345.6,748.8L346.4,746.3L347.3,744.8L348.0,742.4L348.6,740.6L349.3,739.1L350.3,737.5L350.9,735.6L351.7,733.4L352.3,731.5L353.3,729.3L354.1,726.4L354.6,723.9L355.4,721.6L355.7,719.7L356.3,717.9L356.6,716.2L357.7,713.6L358.3,711.8L359.3,708.8L359.7,707.2L360.4,705.2L361.6,701.8L362.7,700.1L364.9,698.4L366.4,697.1L367.8,695.8L368.5,693.3L368.8,690.9L368.9,688.7L369.4,686.3L370.2,683.1L371.3,680.1L372.2,677.9L374.2,675.2L376.9,673.6L379.2,672.7L380.7,671.6L382.9,669.5L385.4,667.1L388.1,665.6L390.0,665.3L392.0,664.2L393.9,663.0L395.4,662.4L397.2,660.7L400.4,657.8L401.6,656.2L403.2,654.4L407.9,651.2L408.7,648.3L408.8,646.2L410.0,643.8L411.6,643.5L413.1,642.2L413.3,640.2L412.7,638.4L412.0,636.4L411.6,634.4L410.1,632.5L410.7,630.9L410.8,629.1L412.4,627.2L414.4,625.6L415.9,624.8L417.5,624.3L419.4,623.7L420.9,624.5L421.6,622.7L422.3,621.1L424.1,620.2L425.4,618.9L426.1,617.4L427.3,615.7L427.9,614.1L429.5,612.4L430.5,610.7L431.0,608.9L431.9,607.2L432.1,605.6L432.6,603.7L433.6,602.4L434.9,601.1L436.7,600.0L438.6,597.4L440.1,595.6L441.2,593.6L442.5,591.2L442.0,589.6L443.1,588.2L443.6,585.7L445.0,584.9L445.5,583.2L445.9,581.5L446.5,579.3L447.2,577.7L447.7,576.1L447.8,574.5L448.4,572.5L449.6,571.3L449.8,569.4L450.4,567.7L451.3,566.1L452.7,564.9L454.5,564.9L456.4,565.1L457.2,563.4L458.4,561.8L459.8,560.2L462.0,559.9L463.1,558.5L464.7,558.1L466.2,557.4L464.6,557.0L463.0,557.8L461.3,557.0L460.5,555.5L460.6,553.2L460.2,551.5L461.4,550.3L462.0,548.4L462.1,546.8L461.0,545.5L461.2,543.8L459.9,542.0L459.7,540.2L459.4,538.5L459.8,536.3L461.0,535.2L462.6,534.9L463.5,533.5L464.8,531.9L463.8,530.6L464.0,529.0L464.4,527.4L465.2,525.5L465.2,523.7L465.8,522.2L466.8,520.9L466.9,519.0L467.2,517.4L468.0,515.7L469.2,514.2L470.0,512.7L471.2,511.4L472.2,509.7L473.8,509.1L475.3,507.6L475.8,505.5L476.2,503.8L476.1,502.0L476.2,500.4L477.1,499.0L477.0,497.3L477.3,495.4L477.5,492.6L477.8,490.9L478.3,488.7L479.4,487.5L479.8,485.8L480.1,483.8L480.8,482.3L481.5,480.5L482.4,478.9L480.6,478.4L479.0,479.1L478.0,477.7L476.7,476.6L475.1,476.9L473.6,476.2L471.4,476.0L470.1,477.5L468.8,478.6L467.3,479.2L466.1,480.3L465.0,481.7L464.5,483.5L463.8,485.0L463.1,486.5L462.3,487.9L461.2,489.4L460.2,490.9L460.8,492.4L461.1,494.5L462.0,496.1L463.7,496.8L465.5,497.3L465.0,498.9L463.8,500.2L462.4,501.2L461.6,502.7L460.6,504.3L460.1,505.9L458.4,507.1L457.6,509.0L456.8,510.4L455.6,511.6L455.0,513.2L454.9,514.9L454.8,516.9L455.1,518.5L455.0,520.2L453.6,521.2L452.8,522.7L451.5,523.8L450.6,525.3L451.1,527.0L450.3,528.5L450.1,528.8ZM482.3,672.2L479.6,673.0L477.9,672.8L476.2,672.5L476.7,674.4L478.0,676.4L478.3,678.6L479.1,680.2L481.0,680.7L482.3,681.7L483.1,683.5L484.9,683.2L484.9,681.4L484.7,679.1L486.4,678.2L486.4,676.6L486.8,674.9L486.5,673.3L484.9,672.4L483.3,672.6L482.3,672.2ZM511.6,860.3L512.6,859.0L512.3,857.2L510.4,857.8L510.5,859.9L511.6,860.3ZM486.0,824.0L484.8,825.1L486.5,827.1L487.5,829.3L486.6,831.1L487.4,832.7L489.0,834.0L489.9,835.6L491.3,836.7L492.5,838.0L493.7,839.1L495.3,839.1L497.1,839.4L498.5,840.2L499.8,841.3L500.9,842.9L501.6,844.7L503.2,845.0L504.8,845.2L506.6,845.6L508.0,843.6L509.2,841.8L508.9,840.1L507.5,839.2L505.9,838.4L504.4,837.7L502.3,836.3L501.1,835.2L500.4,833.5L500.1,831.9L501.5,830.6L501.7,828.8L501.2,827.2L501.4,825.4L499.9,824.5L497.8,824.6L495.8,824.6L493.7,824.9L492.1,825.0L490.1,825.1L488.1,825.2L486.6,824.3L486.0,824.0Z"},{"n":"屏東縣","d":"M250.1,740.3L251.8,740.4L253.4,742.0L255.6,743.2L257.2,744.0L259.4,745.3L261.9,746.9L263.9,748.2L265.2,749.5L266.6,750.5L268.8,752.0L270.0,753.7L271.3,755.4L272.5,758.1L273.8,759.8L275.3,760.9L277.3,762.9L278.5,764.1L279.9,765.7L280.6,767.2L281.4,768.6L281.5,770.5L281.7,772.2L282.5,773.8L283.2,776.0L283.6,777.8L283.0,779.7L283.2,781.4L285.0,782.6L286.2,784.4L287.6,785.5L288.5,786.9L288.7,788.5L289.8,789.9L291.0,791.3L291.6,793.5L291.1,795.1L291.6,796.8L292.6,798.4L292.9,800.2L293.5,801.7L293.9,803.3L294.0,805.0L294.5,806.9L294.7,808.7L294.5,810.5L295.4,812.1L296.3,813.5L297.2,815.3L297.8,816.9L298.5,818.7L298.6,820.6L298.3,822.7L296.7,823.4L294.8,824.4L295.7,825.9L296.1,827.6L296.2,829.3L296.1,831.0L294.6,831.6L293.7,833.0L293.6,834.8L292.9,836.3L291.8,837.5L291.3,839.4L292.2,841.9L293.0,843.5L293.4,845.3L295.0,847.0L296.3,848.4L297.5,850.1L298.3,852.0L297.7,854.9L297.6,856.7L297.5,858.3L297.3,860.4L297.2,862.0L298.8,862.7L299.3,864.3L300.4,866.1L302.5,866.7L304.2,866.6L304.3,864.9L305.4,863.6L305.7,862.0L306.5,860.5L306.3,858.9L307.7,858.0L309.2,856.9L311.1,857.4L312.1,858.7L313.6,859.4L315.2,860.4L317.3,860.6L318.4,862.0L320.1,861.8L321.7,863.0L323.5,862.7L325.6,864.9L326.6,866.2L328.5,867.8L329.5,869.1L329.9,871.4L331.3,872.8L333.0,872.6L334.5,871.5L333.3,869.3L333.5,867.4L332.5,865.8L331.7,864.3L330.2,863.0L329.6,861.4L328.9,859.8L328.8,857.7L328.8,855.3L329.3,853.6L329.4,852.0L329.3,850.4L330.1,849.0L331.9,848.8L333.8,847.9L335.4,847.0L337.1,845.6L337.4,843.8L338.5,842.6L339.3,840.8L340.3,839.0L342.4,837.6L342.3,836.0L341.4,834.6L340.9,832.9L340.9,830.2L340.7,828.6L340.8,826.8L340.9,824.6L341.3,822.9L342.0,821.3L342.4,819.5L341.0,818.1L340.1,816.7L339.6,815.1L339.3,813.5L339.5,811.8L341.0,810.7L341.7,809.1L340.6,807.5L340.9,805.3L340.9,802.8L340.9,801.0L340.5,798.8L340.3,796.8L340.9,795.3L341.6,793.8L341.3,791.6L341.0,789.9L341.3,788.2L342.1,786.8L342.0,785.0L341.7,783.4L340.1,783.5L338.6,784.3L337.9,785.8L336.2,786.1L334.7,787.0L333.8,785.6L332.7,784.4L331.2,783.8L329.5,783.7L327.7,783.4L326.3,782.4L325.5,781.0L324.1,779.9L322.6,778.7L320.9,779.2L318.6,780.1L318.4,778.4L317.8,776.8L318.2,775.2L319.9,775.0L320.1,773.2L318.5,772.8L316.9,772.4L316.3,770.9L314.3,770.5L313.3,768.8L313.5,766.9L315.5,766.7L317.0,765.9L318.0,764.4L317.2,763.0L316.9,761.2L316.4,759.6L315.4,758.1L313.8,756.8L312.0,756.6L310.4,756.1L309.9,754.5L308.2,753.6L306.3,752.6L305.5,751.2L306.7,750.0L307.0,747.5L308.4,746.6L307.4,745.3L308.7,743.9L308.0,742.4L310.0,741.6L311.8,741.7L313.4,741.2L314.8,740.2L316.1,739.0L315.6,737.0L314.7,734.9L313.7,733.6L312.8,732.1L313.0,730.5L311.3,730.0L309.1,728.8L307.3,728.5L307.3,726.9L308.0,725.1L307.4,723.5L308.7,722.5L309.0,720.8L310.3,719.3L309.9,717.5L308.9,715.9L307.8,714.5L307.5,712.8L307.0,710.5L306.6,708.5L305.5,706.8L304.8,705.3L304.6,702.9L304.9,700.8L306.2,699.7L306.8,697.7L306.1,695.8L306.7,693.7L308.0,692.1L307.9,690.0L308.1,687.8L309.0,686.1L309.7,684.6L311.2,682.9L312.4,680.9L313.4,679.4L314.8,677.6L315.6,675.9L315.6,673.7L316.8,671.9L316.3,670.0L315.7,668.4L317.6,668.9L320.2,669.4L322.7,668.7L325.0,667.6L327.1,667.5L328.2,665.6L328.9,664.0L330.4,662.2L332.3,662.8L334.7,662.3L336.7,662.2L338.4,662.3L339.5,660.9L340.5,659.1L341.2,657.0L341.4,654.2L341.4,652.3L341.3,650.6L342.6,648.8L343.3,646.7L343.4,644.9L343.1,643.2L343.4,641.4L342.7,639.9L341.2,638.8L339.6,637.7L338.0,637.2L335.8,637.2L334.7,635.9L334.0,634.4L334.1,632.7L334.0,630.9L333.6,629.0L332.3,627.4L330.4,627.3L328.6,626.3L327.7,624.5L325.6,624.1L323.6,624.8L322.1,625.8L320.6,626.9L319.1,627.9L317.3,627.6L317.0,629.4L315.5,630.7L314.1,631.9L312.5,630.4L310.8,628.5L310.1,626.9L309.1,625.3L307.6,624.4L306.2,623.2L305.0,622.0L303.1,621.6L301.7,620.7L300.1,619.9L298.5,620.2L296.6,620.1L295.2,621.7L293.4,623.4L292.0,624.3L290.4,624.8L289.3,626.4L287.4,625.8L285.7,625.0L285.8,623.0L285.4,620.8L283.7,621.1L282.7,619.4L280.4,619.8L278.9,620.4L277.0,621.3L275.2,621.2L273.0,622.1L271.2,623.7L269.3,625.5L267.9,626.6L265.7,628.5L264.5,629.8L263.0,631.8L261.6,632.6L259.4,633.5L256.6,633.3L255.1,632.7L252.8,632.5L251.2,632.9L249.3,632.7L247.5,632.7L246.3,631.2L244.6,631.7L242.8,631.1L241.5,632.1L240.7,634.4L240.3,636.8L239.8,638.8L239.5,640.7L238.9,642.2L237.9,644.5L237.5,647.1L237.2,649.9L237.2,654.2L237.3,656.5L237.5,660.5L237.3,662.8L236.8,665.3L236.2,667.4L235.6,669.1L234.3,670.4L233.6,671.9L233.2,674.8L232.7,677.6L232.8,679.7L232.6,681.7L232.7,683.9L232.2,685.7L232.2,687.5L232.9,689.7L234.3,691.1L235.2,693.4L235.3,695.5L234.9,697.3L234.8,698.9L234.2,701.7L233.4,703.5L232.8,705.4L231.4,706.5L230.6,708.8L230.0,710.3L229.5,712.9L229.5,714.8L229.9,717.2L230.0,719.1L229.8,721.8L229.8,725.6L231.9,725.7L232.6,728.0L234.6,729.9L235.7,731.1L236.9,732.2L238.7,733.7L241.2,735.3L243.1,736.4L245.0,737.4L246.6,738.2L249.0,739.6L250.1,740.3ZM219.1,754.5L217.3,755.2L215.8,755.8L214.7,757.0L214.8,758.9L214.0,760.4L212.8,761.5L213.6,763.0L215.2,762.8L216.6,761.5L218.1,760.2L219.4,759.0L220.8,758.1L221.3,756.2L219.7,755.1L219.1,754.5Z"},{"n":"雲林縣","d":"M202.5,378.8L200.5,378.2L197.3,377.3L194.3,376.4L191.4,375.5L187.8,372.8L185.1,369.8L183.5,367.5L183.1,369.3L182.2,370.7L179.8,371.9L180.5,373.5L180.0,375.5L178.6,377.4L176.9,379.3L175.2,380.1L174.1,381.7L172.7,382.7L171.4,384.7L169.1,387.6L169.8,389.4L169.9,391.6L171.2,394.7L170.4,399.1L169.5,401.4L168.0,404.8L167.3,406.5L165.9,408.1L165.7,409.7L165.8,411.4L164.5,413.0L163.5,416.4L163.1,418.2L162.4,419.8L161.3,422.0L160.8,423.7L159.1,425.3L158.2,427.0L159.1,428.6L160.3,429.8L161.9,429.5L162.8,427.3L163.5,429.1L162.5,431.4L164.2,432.0L164.2,433.7L164.0,435.5L165.2,436.9L164.4,438.8L164.3,441.0L164.4,442.6L164.6,444.6L164.2,446.4L164.0,448.3L165.1,450.7L166.2,452.4L165.3,454.3L166.1,456.2L168.3,457.0L170.0,456.7L171.6,457.3L173.4,458.5L175.1,458.4L177.0,457.9L178.8,458.3L180.4,458.6L181.8,459.4L183.4,460.0L185.4,459.8L187.3,459.2L188.6,458.2L188.8,455.2L188.6,453.6L188.0,451.3L188.6,449.8L190.8,449.3L192.1,450.6L193.0,452.6L194.7,453.5L195.5,452.1L196.0,450.2L197.6,449.4L199.3,448.5L199.1,446.5L199.9,444.8L203.0,445.1L203.6,443.4L204.5,442.0L206.5,442.7L209.1,441.4L209.6,438.0L211.3,437.7L214.0,437.4L215.9,436.7L217.0,435.3L217.3,433.7L219.5,433.2L221.3,432.5L222.1,430.3L223.6,429.5L225.8,428.8L226.3,427.0L226.8,429.3L228.5,429.8L230.1,429.4L230.9,431.0L232.5,430.9L234.0,430.0L235.2,428.4L237.1,428.2L238.9,428.7L240.7,428.0L242.6,427.8L244.6,427.5L246.1,426.6L247.9,427.0L249.5,426.8L250.5,428.1L250.5,429.9L251.6,431.2L252.6,432.6L254.1,434.0L255.3,435.1L256.3,436.4L257.8,437.3L259.8,437.4L261.9,437.7L263.2,438.7L264.8,438.9L266.3,439.8L267.8,440.4L269.4,439.8L271.2,439.8L273.1,440.1L275.0,440.1L276.6,439.9L277.6,438.5L279.3,438.5L281.5,437.8L283.3,437.6L283.2,439.5L283.0,441.2L283.8,442.7L285.8,442.9L287.2,441.8L288.8,441.4L289.7,443.3L291.6,443.0L293.3,442.2L295.4,442.0L297.3,442.3L298.6,443.3L300.2,443.7L301.8,443.3L303.5,443.4L303.2,441.8L303.6,440.1L303.1,438.3L303.3,436.7L301.4,435.0L302.4,433.7L302.8,431.7L301.6,430.3L300.4,429.2L298.8,428.7L298.9,430.5L297.3,431.1L295.5,431.1L293.9,430.8L292.4,431.5L291.8,433.1L289.8,433.3L288.1,433.5L286.5,433.2L284.7,431.9L284.6,430.3L284.8,428.5L283.1,428.0L281.7,429.3L280.5,430.8L279.3,429.7L278.9,428.1L279.3,426.4L280.5,424.8L280.4,423.2L280.9,421.3L281.7,419.4L282.8,417.5L283.5,415.1L282.9,413.6L282.9,411.5L282.8,409.8L281.7,408.5L281.7,406.9L282.0,404.6L281.7,402.4L282.7,400.9L285.0,401.5L285.0,398.1L285.4,396.5L284.8,394.7L283.8,392.0L282.5,389.7L281.7,388.2L280.1,387.5L275.8,386.9L270.8,386.9L269.2,386.7L267.1,385.8L263.0,385.1L261.0,384.3L258.4,384.3L255.4,384.8L253.8,384.6L252.0,384.6L248.5,383.6L244.9,382.9L243.0,382.2L239.0,380.4L237.3,379.7L235.6,378.7L233.2,376.8L231.5,376.7L229.7,377.6L227.8,377.7L221.4,377.1L219.6,377.1L216.1,378.5L213.8,378.7L209.7,378.7L205.8,379.3L203.9,379.2L202.5,378.8ZM150.2,454.8L148.7,455.6L147.3,456.4L145.9,457.3L144.7,458.5L143.3,459.5L141.3,460.7L140.0,461.7L138.3,462.6L137.0,463.7L135.3,464.7L134.0,465.9L132.0,467.5L130.7,469.0L131.8,470.7L132.9,473.2L134.0,474.5L134.7,476.3L135.2,474.7L134.4,473.0L133.5,471.6L133.3,469.9L134.8,468.7L134.5,470.5L135.8,471.5L136.8,470.1L136.4,468.3L137.5,467.0L139.1,466.3L140.8,465.7L141.6,464.3L141.7,462.6L141.8,465.0L141.0,466.6L142.6,466.9L143.4,465.1L144.8,466.3L145.9,465.0L145.1,463.6L146.2,462.4L148.0,462.5L146.5,461.9L148.2,461.6L147.5,460.0L149.1,460.4L149.7,458.7L151.2,457.9L152.8,458.1L153.1,456.4L151.7,455.4L150.2,454.8ZM154.5,450.3L153.5,451.7L152.7,453.4L153.5,454.8L154.6,453.4L156.2,453.8L156.3,452.2L155.2,450.7L154.5,450.3ZM162.3,449.1L160.8,449.9L160.9,451.6L161.1,453.3L162.3,451.8L163.1,450.3L162.3,449.1ZM162.3,444.8L160.7,444.8L160.0,446.3L158.3,446.5L156.4,448.0L155.5,449.8L157.2,450.3L158.2,449.0L159.6,447.6L160.7,446.0L161.5,447.4L161.9,445.7L162.3,444.8ZM161.8,443.3L162.4,441.8L161.7,443.3L161.8,443.3Z"},{"n":"彰化縣","d":"M183.4,367.3L185.1,369.8L187.8,372.8L190.1,374.7L194.3,376.4L197.3,377.3L200.5,378.2L202.5,378.8L205.8,379.3L209.7,378.7L213.8,378.7L216.1,378.5L218.5,377.1L221.4,377.1L226.8,377.6L229.7,377.6L231.5,376.7L233.2,376.8L234.7,377.6L236.5,379.2L238.4,380.3L241.8,381.7L244.9,382.9L248.5,383.6L251.2,384.5L253.8,384.6L255.4,384.8L258.4,384.3L261.0,384.3L263.0,385.1L266.0,385.5L268.4,386.3L270.8,386.9L275.8,386.9L279.4,387.3L281.7,388.2L284.5,387.5L286.9,386.8L288.6,385.7L289.9,384.7L291.9,384.3L290.6,381.1L289.8,379.5L288.1,380.4L286.0,380.9L284.2,381.4L282.7,380.2L281.2,378.6L280.8,376.7L278.7,376.6L279.4,375.1L277.9,374.5L276.1,374.5L277.3,373.2L278.1,371.6L278.8,369.9L277.5,368.4L277.4,366.8L278.4,365.4L278.7,363.5L279.2,361.8L280.4,360.7L280.2,358.9L279.9,357.3L280.1,355.6L280.2,354.0L280.8,352.4L279.3,351.5L280.0,349.9L279.4,348.0L279.2,346.3L278.9,344.7L280.6,345.4L282.4,344.1L283.4,342.8L283.4,341.0L283.8,338.6L283.5,336.6L282.0,335.4L280.9,333.8L281.3,331.5L283.3,331.1L285.4,331.3L287.9,331.4L289.7,331.4L290.8,329.8L287.6,327.5L286.3,326.4L284.6,326.1L283.3,324.7L283.2,326.6L281.5,326.3L279.8,325.7L278.1,325.3L279.0,323.6L278.5,321.4L278.0,319.7L278.4,318.1L278.4,316.0L277.1,314.7L276.4,313.0L276.0,311.4L275.9,309.8L275.4,308.0L273.2,307.0L271.3,306.5L269.4,306.0L267.4,305.3L264.4,305.2L262.7,304.5L260.7,304.2L259.4,303.1L258.5,301.6L256.9,301.0L255.9,299.4L254.7,297.6L255.1,295.9L254.9,294.3L254.0,292.7L253.2,291.0L252.5,289.1L251.8,287.0L251.1,285.4L248.7,283.8L245.9,282.7L239.0,280.2L237.6,282.6L236.6,283.9L235.2,285.5L233.4,285.4L231.7,286.2L231.6,287.8L230.1,288.7L229.5,290.7L229.3,292.7L227.7,293.3L228.5,295.0L227.8,296.7L226.4,297.7L225.7,299.5L225.6,301.3L225.0,303.1L223.9,304.8L222.3,307.1L221.0,308.8L222.1,310.4L220.7,311.5L219.0,312.2L217.1,312.5L216.1,314.2L214.5,314.7L212.9,316.1L212.1,317.8L212.2,319.4L212.0,321.2L211.9,323.0L211.3,324.7L210.7,328.6L209.2,330.2L207.4,331.8L206.0,333.3L205.0,335.8L204.1,337.4L204.1,339.1L202.9,341.0L200.9,342.5L199.9,343.8L198.4,344.4L197.5,346.3L197.3,349.8L194.9,350.9L193.9,352.6L192.9,354.0L192.4,355.9L191.7,357.8L191.9,359.5L190.9,360.8L188.2,361.8L186.5,362.8L184.9,364.4L184.3,366.3L183.4,367.3Z"},{"n":"苗栗縣","d":"M367.9,168.4L368.0,166.5L366.8,165.3L365.1,165.5L363.8,164.3L362.7,163.1L361.7,161.5L360.5,160.4L360.5,158.4L358.3,158.1L358.2,156.4L359.4,155.0L359.5,153.3L360.4,151.7L358.7,151.3L356.9,151.7L355.5,153.0L354.5,151.6L352.5,152.2L351.0,150.9L349.4,150.2L347.6,149.9L345.9,149.6L345.9,147.9L345.5,145.8L344.8,144.0L343.1,144.8L341.2,145.8L339.2,145.7L336.8,144.3L335.8,145.6L334.5,147.1L333.7,148.6L333.2,150.4L332.9,152.4L331.4,154.2L328.8,157.2L327.0,158.6L325.9,160.0L324.3,161.1L322.7,161.3L321.0,161.6L318.9,162.2L316.8,162.5L315.3,163.2L313.9,164.1L312.7,165.5L311.6,167.0L310.3,168.7L309.4,170.4L308.7,172.0L307.5,173.1L306.1,174.3L304.3,175.2L303.1,176.9L301.2,178.1L299.8,179.4L299.2,181.0L298.2,182.5L298.0,184.2L297.3,185.9L296.6,187.6L296.4,189.3L295.4,191.0L294.7,192.5L294.1,194.9L293.3,196.8L292.6,199.4L291.6,200.7L290.1,202.9L289.4,204.8L288.5,206.2L288.0,207.9L287.2,209.5L286.4,211.1L285.0,212.8L283.3,214.4L282.0,215.5L280.9,217.5L279.2,219.2L278.0,220.4L279.4,221.2L280.5,222.8L282.0,223.8L282.8,225.3L282.8,227.0L284.0,228.1L285.6,229.0L287.2,230.0L288.4,231.5L289.0,233.0L290.6,234.1L292.7,236.3L293.7,237.7L294.2,239.3L296.0,240.4L297.6,240.7L298.6,242.0L300.3,242.3L302.4,243.0L304.0,244.3L305.3,245.3L306.8,246.8L308.2,247.8L309.6,249.3L311.3,250.1L313.0,251.0L314.7,251.5L316.5,251.9L318.4,252.4L320.6,252.5L322.1,253.6L323.4,254.7L324.7,256.7L325.9,257.9L327.2,259.1L329.0,259.4L330.9,259.5L332.7,259.4L334.7,258.5L336.8,257.9L339.1,258.1L341.6,258.3L343.4,258.6L345.0,258.2L346.4,257.1L347.7,256.1L347.5,254.4L347.4,252.7L347.3,250.4L346.6,248.2L347.7,247.0L349.4,246.5L351.0,245.6L352.6,246.6L354.3,246.6L356.5,247.2L358.1,248.0L359.9,247.9L361.8,247.4L362.9,248.6L364.7,248.9L366.6,248.2L367.7,249.4L368.9,250.9L369.9,252.6L370.7,254.3L372.2,254.9L373.4,256.1L374.9,257.5L376.6,257.8L378.2,256.9L378.6,255.2L379.5,253.7L381.0,252.7L382.6,252.3L383.6,250.8L385.3,250.8L386.3,252.1L388.1,251.5L389.9,250.3L391.3,248.8L392.9,249.3L394.4,248.7L394.7,246.8L396.1,245.7L396.7,244.2L397.9,243.0L398.7,241.6L400.7,241.8L402.3,241.5L403.9,241.1L405.5,240.8L406.4,239.1L407.2,237.2L408.6,236.0L410.2,235.7L411.5,233.8L412.0,231.8L413.7,231.5L415.2,232.1L415.3,233.9L415.8,235.5L417.9,235.6L419.5,235.2L420.8,233.2L421.0,231.3L422.1,230.0L422.8,228.2L422.8,226.3L424.2,224.8L425.8,224.5L426.4,221.2L427.0,219.6L426.8,217.8L426.2,216.2L426.0,214.6L424.1,214.0L423.0,212.6L422.5,210.8L420.9,209.6L419.8,208.3L418.5,207.0L417.0,205.8L417.8,204.0L416.7,202.8L415.0,202.3L413.4,202.1L411.8,203.4L410.1,203.7L408.0,203.3L406.2,204.2L404.3,204.4L402.6,203.8L400.3,203.1L398.6,203.2L396.3,203.6L394.9,202.8L393.1,203.3L391.8,204.6L390.4,205.4L389.0,206.2L387.1,205.9L385.6,205.1L383.6,205.5L382.4,203.8L382.0,202.2L381.8,200.4L382.8,198.6L384.3,198.0L384.5,196.2L384.3,194.4L383.4,193.0L381.5,191.7L379.7,190.7L381.8,189.5L382.8,188.0L383.3,186.0L384.1,184.3L384.9,182.7L385.3,181.1L384.6,179.3L383.6,178.0L383.1,176.3L381.6,175.6L380.6,174.2L378.9,175.1L377.3,174.7L376.3,173.0L374.6,172.1L373.1,171.4L371.9,170.1L370.3,169.3L368.4,168.5L367.9,168.4Z"},{"n":"新竹縣","d":"M360.7,160.9L362.1,161.9L362.9,163.4L364.8,164.5L366.1,165.7L368.4,165.4L368.1,167.6L369.4,169.3L371.3,169.0L372.0,170.5L373.8,171.5L375.5,172.8L376.8,173.8L378.1,175.3L379.6,174.6L381.4,175.1L382.7,176.2L383.7,177.5L384.6,179.3L385.2,180.9L384.9,182.7L384.1,184.3L383.3,186.0L382.8,188.0L382.0,189.4L380.7,190.6L382.3,192.4L383.7,194.1L384.7,195.4L384.4,197.0L382.8,198.6L381.6,200.0L382.0,202.2L382.4,203.8L382.8,205.8L384.4,205.6L386.0,205.0L387.6,206.0L389.3,205.9L391.2,205.2L392.4,203.7L394.2,203.2L396.3,203.6L398.0,203.6L399.5,202.6L401.1,203.8L402.8,204.0L404.8,204.5L406.7,204.1L408.7,203.3L410.3,203.6L412.2,203.1L413.8,202.2L415.9,201.5L416.8,202.9L417.7,204.4L417.3,206.0L419.3,207.2L420.5,208.5L421.6,210.1L422.9,211.6L423.5,213.3L425.0,214.4L426.2,215.6L427.3,216.8L427.0,218.6L426.6,220.3L426.7,222.1L427.7,223.6L429.3,223.8L431.1,223.4L432.8,223.1L434.4,222.9L436.7,222.5L438.4,221.6L439.8,220.7L440.7,218.6L441.4,216.8L442.6,215.0L444.2,213.8L444.7,212.1L445.7,210.4L447.0,209.1L449.2,208.8L450.4,207.7L451.7,206.1L452.9,204.7L453.1,202.7L455.1,202.7L455.8,200.9L456.9,199.7L458.5,198.9L459.7,197.7L458.9,196.1L458.6,194.5L459.0,192.9L458.0,191.0L459.1,189.6L460.0,187.9L461.4,186.9L461.8,185.3L460.6,183.2L459.9,181.7L458.2,182.4L456.3,183.1L453.8,181.6L452.7,180.4L451.3,179.6L450.8,177.6L449.8,176.1L450.3,174.3L451.0,172.8L450.1,171.0L449.1,169.5L448.1,168.1L448.0,166.1L448.4,164.5L448.2,162.9L446.5,162.6L445.0,161.9L445.0,160.2L444.2,158.2L442.7,156.2L441.2,155.2L439.3,154.5L437.4,155.5L435.8,155.3L436.4,153.5L436.6,151.9L437.4,150.1L437.2,147.9L436.0,146.4L435.9,144.4L436.4,142.8L437.0,141.2L436.9,139.5L435.9,137.7L434.2,137.3L432.2,136.0L430.6,135.9L429.1,134.9L427.6,133.2L426.1,132.3L426.4,130.0L424.7,130.0L423.4,127.2L417.4,127.6L417.1,125.4L413.6,126.6L412.7,123.9L409.9,122.8L408.5,122.0L406.4,121.4L405.4,119.6L403.1,118.6L401.9,117.2L402.3,115.1L403.5,113.2L403.2,111.4L402.3,109.4L402.2,107.8L399.8,107.8L397.8,107.7L396.2,108.1L394.4,107.9L392.7,107.3L391.3,106.5L391.6,103.9L389.5,104.1L387.5,104.5L386.1,103.7L383.9,103.2L382.3,102.3L380.5,101.7L379.5,100.2L379.9,98.6L380.1,96.6L379.4,95.0L379.6,93.4L378.0,93.0L376.7,92.0L375.1,91.4L373.3,91.5L372.0,92.5L370.1,92.1L368.2,91.5L366.7,92.5L364.6,92.8L361.8,92.6L360.1,94.3L358.9,95.6L358.2,97.3L357.2,100.2L356.4,102.1L355.0,104.0L353.8,107.0L352.9,109.3L351.9,111.3L350.5,112.7L349.0,114.3L351.0,115.1L352.8,116.6L353.8,118.3L356.0,119.9L358.4,120.1L360.1,120.8L361.7,120.5L363.1,121.9L366.1,122.8L367.9,124.3L370.2,126.6L372.0,128.7L370.8,130.1L371.8,132.1L372.1,133.9L373.1,135.6L373.7,137.5L372.6,139.2L370.7,139.6L370.3,137.8L369.2,135.9L366.9,134.7L365.1,133.6L363.3,134.3L363.0,136.1L361.2,137.9L359.0,137.4L358.4,139.6L356.9,141.1L355.3,143.0L353.5,142.5L352.8,144.1L352.0,145.8L351.9,147.6L351.6,149.4L351.0,150.9L352.5,152.2L353.9,151.3L355.1,152.6L356.9,151.7L358.7,151.3L360.4,151.7L359.5,153.3L359.8,155.0L358.5,156.2L358.0,158.0L359.9,157.8L360.6,159.4L360.7,160.9Z"},{"n":"嘉義縣","d":"M247.3,488.8L248.3,490.2L246.9,491.2L245.0,492.1L244.5,493.9L246.1,494.4L247.8,495.0L249.6,495.0L250.8,496.2L251.3,497.8L250.3,499.2L249.5,500.8L251.3,501.4L253.1,502.0L254.8,502.6L256.2,503.4L257.4,504.8L256.9,506.5L255.8,508.1L254.1,509.3L254.0,510.9L254.2,512.6L254.5,514.3L253.6,515.8L253.7,517.5L253.6,519.3L254.1,520.9L255.1,522.4L255.6,524.0L255.6,525.7L254.4,527.2L252.9,528.2L253.9,529.6L255.7,530.2L257.1,531.0L258.7,531.5L260.1,532.9L261.4,533.9L263.4,533.2L265.1,533.7L266.7,534.4L267.9,532.9L269.0,531.4L269.6,529.7L270.3,528.2L271.1,529.9L272.0,531.3L273.8,532.0L275.5,532.4L277.1,531.6L278.5,530.8L280.3,531.1L282.0,531.8L283.8,532.1L283.7,530.3L283.9,528.7L283.3,527.0L282.9,525.3L281.8,523.8L281.6,522.0L281.1,520.3L282.1,518.9L282.2,516.8L282.0,514.9L283.0,513.4L283.9,514.9L285.5,514.0L287.3,514.5L288.7,515.4L290.4,515.6L292.1,516.1L294.0,516.8L295.8,516.5L296.2,514.9L296.3,512.8L297.7,511.2L299.3,510.9L301.6,511.1L302.7,509.7L304.0,508.7L305.1,507.4L306.8,507.2L307.9,506.0L308.8,504.4L309.0,502.7L310.5,502.1L312.2,501.9L313.8,501.7L315.5,501.3L316.3,499.5L317.2,498.1L318.8,497.2L320.1,495.6L321.6,495.0L323.2,494.6L325.0,494.5L326.0,493.0L326.0,491.3L327.1,490.1L328.2,488.6L328.7,487.0L329.6,485.5L330.6,484.2L330.6,482.2L332.3,481.6L334.2,481.1L335.6,480.0L336.8,478.8L338.5,478.4L339.9,477.2L340.6,475.6L341.7,474.3L343.1,473.4L344.9,472.4L347.3,472.2L348.9,472.9L350.6,472.4L351.2,470.9L353.0,471.0L354.8,470.4L356.1,469.4L354.1,469.9L352.3,469.3L350.7,468.5L348.8,468.5L347.1,468.1L345.2,467.7L343.0,467.7L341.3,467.9L339.5,467.9L338.4,469.3L336.3,469.7L334.7,468.7L332.7,468.6L330.8,468.7L329.1,468.4L327.5,468.6L326.5,467.3L325.4,465.9L325.0,464.2L324.9,462.5L324.7,460.5L324.5,458.8L323.7,457.1L323.1,455.1L322.0,453.3L321.0,451.5L321.2,449.8L322.5,448.3L323.0,446.6L323.8,445.1L324.2,443.4L323.8,441.7L324.7,440.0L323.8,438.4L323.1,436.9L321.8,435.9L320.1,436.6L318.2,436.7L316.2,435.6L314.3,435.5L312.8,434.5L311.5,433.5L309.3,432.8L307.7,432.2L306.1,432.7L304.5,433.5L302.9,433.2L301.6,434.8L303.3,436.6L303.1,438.3L303.6,439.9L303.2,441.8L304.1,443.5L302.2,443.6L300.2,443.7L298.6,443.3L297.3,442.3L295.4,442.0L293.6,442.0L291.9,442.7L290.0,443.4L289.2,442.0L287.5,441.6L285.8,442.7L284.1,443.0L282.5,442.2L283.5,440.6L283.2,439.0L281.5,437.8L279.3,438.5L277.6,438.5L276.6,439.9L275.0,440.1L273.4,440.1L271.5,439.8L269.8,439.5L268.2,440.3L266.6,439.9L265.3,438.9L263.5,438.5L261.9,437.7L260.1,437.4L257.8,437.3L256.3,436.4L255.3,435.1L254.1,434.0L252.8,433.0L251.7,431.5L250.5,429.9L250.5,428.1L249.5,426.8L247.9,427.0L246.1,426.6L244.6,427.5L243.1,428.2L241.3,428.0L239.5,428.2L237.9,429.0L236.2,428.1L234.9,429.1L233.6,430.1L232.2,431.0L230.4,430.8L228.5,430.0L226.8,429.3L226.7,427.4L225.8,428.8L224.3,429.4L222.1,430.3L221.1,432.1L219.5,433.2L217.7,433.8L217.0,435.3L215.9,436.7L214.0,437.4L211.9,437.7L210.0,437.5L209.5,440.2L208.0,442.3L205.9,442.7L204.2,442.0L204.1,444.0L201.1,444.7L199.3,445.3L199.2,447.2L198.5,449.0L196.6,449.7L195.6,451.5L195.2,453.1L193.3,452.8L192.1,450.6L190.8,449.3L188.6,449.8L188.0,451.3L188.6,453.6L188.8,455.2L189.2,457.0L188.2,458.6L186.8,459.4L184.5,459.9L182.7,459.7L180.9,458.9L179.3,458.1L177.7,457.9L175.7,458.5L174.1,458.6L171.6,457.3L170.0,456.7L168.3,457.0L166.4,456.3L164.6,456.3L162.4,456.2L160.6,455.8L159.2,456.6L159.1,461.5L159.6,463.1L161.0,464.1L163.1,463.9L166.9,462.7L168.9,462.9L170.7,463.1L168.6,463.2L167.7,465.1L166.3,466.5L165.3,468.2L165.6,470.0L163.8,471.8L162.3,473.4L163.9,473.7L165.4,473.1L167.0,474.3L166.2,476.0L165.4,478.0L166.0,479.6L167.6,479.4L166.2,480.7L166.0,482.7L166.1,484.4L166.4,486.4L168.5,485.1L168.8,486.8L169.4,488.4L167.8,489.3L168.0,491.0L166.7,489.8L164.6,490.4L161.9,490.6L161.9,492.7L161.3,494.7L160.8,496.3L160.0,497.8L159.4,499.3L158.7,500.8L160.8,503.7L162.9,505.1L164.6,506.3L165.8,507.4L166.1,509.0L167.7,509.8L169.4,509.9L171.0,511.2L172.1,513.8L173.5,514.7L175.2,514.9L174.5,513.4L175.7,512.2L177.2,513.4L178.8,514.4L180.6,514.3L182.3,513.6L183.9,511.6L184.4,510.0L185.2,508.2L186.2,506.5L187.5,505.5L189.4,505.0L191.1,504.5L192.7,503.0L193.7,501.5L192.3,500.7L193.3,499.1L195.3,499.0L197.0,500.1L198.2,499.0L197.6,497.4L198.1,495.3L199.5,493.5L201.3,493.2L203.3,493.3L203.9,491.5L204.9,490.0L206.3,490.8L208.2,490.5L210.3,489.4L211.3,488.1L212.4,486.8L214.0,486.6L217.9,486.2L220.5,486.1L222.6,485.5L224.3,485.0L226.1,484.3L228.0,484.3L229.3,485.4L231.1,485.2L232.5,484.3L234.0,483.6L236.1,484.5L237.7,485.4L239.3,485.8L240.7,486.9L242.2,487.5L242.7,489.2L244.4,489.7L246.0,489.0L247.3,488.8ZM223.7,470.9L224.6,468.9L224.7,467.3L223.7,465.9L223.7,464.2L222.6,462.9L223.1,461.3L224.9,461.7L226.0,460.4L227.1,461.8L228.7,460.4L230.8,459.8L232.5,459.1L233.1,457.3L234.6,458.3L234.6,456.7L236.4,456.7L238.3,457.3L238.7,459.1L239.7,460.6L240.9,461.7L242.1,460.1L243.8,460.3L245.0,461.7L245.6,463.3L247.2,463.9L248.9,464.0L249.3,465.7L250.2,467.3L250.1,468.9L248.8,470.1L248.4,471.7L247.5,473.3L245.3,472.9L244.0,471.7L242.0,471.2L240.5,471.9L239.2,473.1L237.9,474.1L237.2,475.7L234.8,476.7L233.5,475.7L233.1,474.0L231.9,471.4L230.2,471.4L228.6,471.5L227.4,470.4L225.5,470.7L223.7,470.9ZM166.6,488.5L165.0,485.7L164.4,484.0L164.8,485.9L166.1,488.9L166.6,488.5Z"},{"n":"高雄市","d":"M233.8,702.9L234.4,700.4L234.9,697.3L235.3,695.5L235.2,693.4L234.8,691.8L233.4,690.5L232.4,688.6L232.1,686.6L232.5,684.6L232.6,681.7L232.8,679.7L232.7,677.6L232.9,675.3L233.7,673.3L234.3,670.4L235.6,669.1L236.2,667.4L236.8,665.3L237.3,662.8L237.5,660.5L237.3,656.5L237.2,654.2L237.0,650.6L237.1,648.6L237.6,645.8L238.9,642.2L239.5,640.7L239.8,638.8L240.3,636.8L240.4,635.0L240.6,632.9L241.9,631.3L243.7,631.2L245.3,631.6L247.2,632.5L248.8,632.7L250.4,633.5L252.7,632.8L254.5,632.6L256.1,633.0L258.4,633.2L260.4,633.6L262.6,632.2L263.8,631.0L264.7,629.5L267.0,627.4L269.3,625.5L271.2,623.7L273.0,622.1L274.7,621.4L276.5,621.5L278.4,620.6L280.4,619.8L282.3,619.1L283.0,620.9L284.6,620.0L285.5,621.8L285.5,624.0L286.0,625.6L287.9,625.9L289.8,626.2L291.5,624.6L293.4,623.6L294.8,622.2L295.9,620.6L297.6,620.1L299.3,620.2L301.1,620.2L302.6,621.4L305.0,622.0L306.2,623.2L307.6,624.4L309.1,625.3L310.1,626.9L310.8,628.5L312.2,630.2L313.9,631.9L315.5,630.7L317.2,630.4L316.9,628.6L318.4,627.7L320.1,627.3L321.7,626.3L323.4,625.0L325.1,624.0L327.1,624.4L328.7,625.9L330.0,627.7L331.2,626.6L333.0,627.8L333.9,629.7L335.0,628.0L335.3,626.1L333.4,625.2L334.4,623.1L333.6,621.7L331.9,620.8L330.2,620.6L328.3,619.8L327.9,617.9L327.0,616.3L326.1,614.9L326.0,612.9L326.3,610.3L325.5,608.8L324.7,607.3L324.0,605.4L324.1,603.8L324.7,602.1L323.8,599.7L324.8,598.3L325.8,596.8L326.5,594.8L328.1,594.2L328.7,592.3L330.2,591.3L331.2,589.7L332.7,588.4L333.4,586.3L333.5,584.5L333.2,582.6L334.5,581.4L336.1,580.9L337.7,580.8L338.1,579.0L337.5,577.2L336.3,576.0L335.3,574.4L336.2,572.8L337.0,571.0L337.6,569.5L338.5,567.9L339.1,566.0L339.9,564.3L339.8,562.7L339.9,561.1L339.1,559.6L339.7,558.1L339.2,556.5L339.7,554.8L339.2,553.2L337.9,551.9L338.6,550.4L340.3,549.1L341.3,547.8L341.6,545.8L342.6,544.3L344.2,543.5L345.2,542.2L345.1,540.5L344.0,539.0L344.1,537.1L345.3,535.9L345.4,534.1L345.4,532.0L345.9,530.1L346.7,528.3L348.3,527.5L350.0,527.6L351.5,527.0L352.3,525.2L353.8,524.4L354.9,523.0L356.2,521.7L356.8,520.2L358.1,518.9L359.2,517.7L361.1,517.4L362.8,517.9L364.5,516.9L366.3,516.2L367.7,515.1L369.4,514.7L371.2,514.3L372.8,513.6L373.6,512.2L375.1,511.6L376.8,510.8L377.4,509.1L377.4,507.3L376.8,505.8L375.3,505.2L373.8,504.2L372.4,503.2L371.6,501.7L370.9,500.2L368.8,501.1L367.9,499.5L366.1,498.4L364.3,498.2L362.9,496.6L363.2,494.9L364.5,493.7L365.5,492.4L367.3,491.5L366.8,489.8L367.6,488.1L369.5,488.1L370.6,486.9L372.2,486.5L372.5,484.7L372.6,483.1L373.0,481.5L371.4,480.9L370.5,479.5L369.4,477.5L368.5,476.1L369.5,474.6L369.2,473.0L368.2,471.5L366.4,471.2L364.7,470.9L362.9,470.2L361.2,469.5L359.5,469.5L357.9,469.1L356.1,469.4L354.8,470.4L353.0,471.0L351.2,470.9L350.6,472.4L348.9,472.9L347.3,472.2L345.6,472.2L344.1,473.2L342.3,474.1L341.4,475.5L340.2,476.7L339.5,478.2L337.8,478.9L336.3,479.6L334.6,480.5L333.1,481.1L331.5,481.6L330.6,483.0L330.3,484.6L329.4,486.2L328.1,487.7L327.4,489.8L326.1,491.2L326.0,493.0L325.0,494.5L323.2,494.6L321.6,495.0L319.9,494.9L319.2,496.6L318.2,498.3L316.5,499.2L316.1,501.0L314.4,502.0L312.8,502.1L311.1,501.9L309.5,501.5L309.1,503.1L308.4,504.7L307.5,506.1L306.4,507.3L304.9,508.3L303.1,509.3L302.7,511.4L300.7,510.7L298.5,510.6L297.1,511.6L296.2,513.4L296.1,515.1L295.4,516.8L293.5,516.6L291.7,516.1L290.1,515.9L288.5,515.2L287.0,514.4L285.1,514.6L283.5,514.5L281.9,514.4L281.8,516.0L282.2,517.6L281.8,519.3L281.0,520.8L281.8,522.5L282.0,524.1L283.1,525.6L283.4,527.2L283.8,528.9L283.6,530.6L284.5,532.1L285.1,533.9L284.4,535.4L283.0,536.5L282.0,537.8L281.2,539.6L280.8,541.5L280.9,543.1L280.4,544.8L278.7,545.0L278.2,546.6L276.9,547.9L275.4,548.8L274.8,550.3L273.6,551.6L272.1,552.7L271.3,554.1L270.6,555.8L269.4,557.3L269.2,558.9L268.9,560.6L267.9,561.9L266.9,563.5L266.1,565.1L265.5,566.6L264.5,568.0L263.2,569.1L262.1,570.3L261.1,571.8L259.6,572.7L258.0,573.6L256.8,574.7L254.8,575.7L253.6,576.9L252.7,578.3L251.5,579.6L250.2,580.6L249.1,582.2L247.6,583.4L246.0,584.2L244.4,585.2L243.8,586.7L243.3,588.3L241.5,588.8L239.5,588.6L238.8,590.2L239.0,591.9L237.4,592.3L237.5,594.0L236.3,595.3L234.6,595.3L234.2,596.9L233.6,598.5L232.8,600.0L232.2,601.6L231.5,603.5L230.7,605.0L230.4,606.6L229.5,608.4L228.7,610.1L227.0,611.4L225.3,610.4L224.0,609.4L222.3,609.5L220.5,610.0L219.1,610.8L217.8,611.8L217.8,613.4L216.4,614.2L214.8,615.0L214.3,616.6L213.2,617.8L211.5,617.7L209.1,617.7L207.6,616.4L206.7,614.9L205.6,616.3L204.1,615.0L201.7,614.9L200.1,614.5L197.9,613.9L196.1,613.7L196.0,615.4L194.4,616.1L193.0,615.3L191.6,614.5L191.1,616.1L189.0,615.8L187.4,614.0L185.8,613.6L184.7,611.8L182.6,612.0L180.7,612.2L179.2,611.0L176.3,609.8L174.7,609.5L173.2,610.5L171.8,611.7L171.9,613.7L172.6,616.0L173.2,617.5L174.0,619.3L174.9,621.7L175.4,623.3L174.8,624.9L175.9,626.9L176.4,629.0L177.5,630.6L178.0,632.8L178.9,634.6L174.9,636.6L175.6,638.6L180.1,638.6L181.7,641.9L182.5,643.9L183.2,645.6L184.0,647.4L184.7,649.1L185.3,650.8L186.4,653.0L187.2,654.9L188.1,657.2L188.9,659.3L190.0,661.2L190.4,663.0L191.7,666.6L190.7,668.9L191.9,670.3L192.2,672.5L191.0,674.1L189.5,675.1L188.8,677.3L189.0,679.2L189.6,681.1L190.9,683.1L191.7,684.6L190.3,686.4L191.6,688.2L192.5,689.6L191.8,691.5L193.1,692.7L195.4,695.8L196.8,697.5L201.1,702.7L200.6,704.3L201.2,705.8L205.6,710.4L202.2,708.4L199.7,707.0L197.8,706.2L198.8,707.7L201.2,710.8L203.4,713.7L206.2,711.7L206.4,709.8L207.9,709.1L206.4,710.0L208.3,710.1L208.4,712.0L209.7,713.1L211.4,714.4L213.4,716.0L214.3,717.4L217.3,719.4L218.7,720.4L220.5,721.5L222.6,722.9L223.9,723.9L225.4,724.6L227.3,725.2L229.0,725.7L229.7,722.7L230.0,719.9L230.2,718.1L229.7,715.9L229.5,713.8L229.8,711.7L230.2,709.9L231.0,707.7L231.9,705.9L233.1,704.3L233.8,702.9Z"},{"n":"宜蘭縣","d":"M552.8,222.4L553.8,220.8L555.2,219.8L556.3,218.1L557.3,216.6L557.4,214.7L558.9,213.7L560.4,213.0L561.6,211.7L563.4,210.7L565.0,209.8L566.9,209.9L564.8,208.9L564.3,207.2L563.7,205.6L561.9,205.3L561.5,203.1L561.8,200.5L563.0,199.2L564.6,198.9L566.3,198.1L568.1,197.6L569.4,196.3L569.4,194.7L569.8,193.1L569.1,191.3L569.0,189.0L568.8,187.0L568.7,185.2L570.3,184.5L569.6,183.0L570.9,181.4L569.5,180.0L571.6,179.4L571.2,177.6L569.5,176.8L567.8,176.6L566.6,175.4L565.6,174.0L564.8,172.4L564.1,170.9L563.2,168.6L562.6,166.8L562.0,164.7L561.7,163.0L561.2,160.5L561.3,158.2L561.1,156.3L561.0,153.9L560.7,151.4L561.4,149.7L559.9,148.4L558.8,146.3L557.7,143.5L557.1,141.3L556.6,138.5L556.5,136.9L556.4,135.0L556.6,128.4L556.8,126.0L557.2,123.3L557.6,121.2L558.2,118.6L558.4,117.0L559.2,115.0L559.9,113.2L560.6,111.6L561.3,109.9L561.9,108.4L563.2,106.2L564.5,104.3L566.0,103.6L567.3,101.7L568.7,100.9L570.1,99.5L571.3,98.0L571.8,96.2L572.3,94.1L573.6,92.1L575.4,91.9L576.2,90.5L577.5,89.4L579.3,88.5L580.2,86.5L581.0,84.5L582.4,83.7L584.0,83.2L585.4,82.4L587.0,81.8L588.6,80.9L590.4,80.8L589.3,79.4L587.5,79.4L585.8,79.8L584.2,80.5L582.6,81.3L580.7,81.8L579.1,81.9L577.6,82.5L576.0,83.0L575.0,84.4L573.2,85.5L571.6,85.7L570.0,86.1L568.1,86.6L566.1,85.9L564.5,86.5L562.8,86.8L561.5,88.4L561.3,90.0L561.4,91.7L562.8,92.5L563.4,94.3L564.5,95.6L562.5,97.3L561.1,99.0L560.0,100.5L558.2,101.1L556.6,101.5L555.1,100.9L553.4,101.6L551.7,102.1L550.1,102.4L549.7,104.0L548.3,104.8L547.8,106.8L548.6,108.9L547.2,109.7L546.3,111.3L544.4,111.3L543.1,112.6L541.2,113.6L539.4,114.5L537.7,113.8L535.9,113.9L534.6,115.1L533.1,116.3L530.9,117.7L529.2,119.3L526.9,121.1L526.1,123.9L524.4,123.6L522.7,124.4L520.6,124.4L517.9,125.2L516.2,125.6L514.6,125.4L511.6,125.9L511.5,129.4L507.8,129.8L505.3,131.3L503.7,131.4L504.6,134.3L504.6,136.0L503.4,138.2L503.3,140.5L504.8,141.4L503.8,142.7L504.3,144.9L505.2,146.3L504.0,147.5L502.7,148.7L500.9,148.1L500.4,150.0L499.3,151.2L497.7,150.8L496.0,151.0L494.3,152.3L492.5,152.4L491.4,153.7L491.2,155.4L490.2,156.8L488.7,157.6L486.6,158.2L484.8,158.2L483.5,159.2L481.8,160.0L480.0,160.5L478.2,160.5L476.3,160.8L473.4,160.9L472.0,162.2L470.7,163.6L470.3,165.4L470.8,167.1L469.7,168.6L469.4,170.3L468.0,171.8L467.3,173.3L466.9,175.1L466.2,176.7L465.6,178.2L463.9,179.2L462.3,178.7L461.2,179.9L460.1,181.4L460.6,183.2L461.7,185.0L461.9,186.6L460.2,187.5L459.6,189.2L458.4,190.5L458.6,192.2L458.6,194.5L458.9,196.1L459.7,197.7L458.5,198.9L456.9,199.7L455.8,200.9L455.5,202.6L453.7,202.7L452.9,204.7L451.7,206.1L450.6,207.3L449.4,208.7L447.6,209.3L446.0,209.8L445.3,211.7L444.4,213.3L443.0,214.4L441.8,215.9L441.1,217.7L440.6,219.4L441.6,221.2L442.7,222.6L442.6,224.4L442.5,226.2L442.3,228.0L442.0,229.7L442.5,231.3L443.9,232.2L445.0,233.4L447.8,232.7L449.5,233.0L451.2,233.7L452.3,235.3L452.1,237.1L453.2,239.0L455.0,239.4L456.6,238.5L457.6,237.2L459.3,236.2L460.9,236.5L462.7,236.1L464.4,235.8L466.2,235.2L468.0,235.2L469.1,237.1L470.7,237.8L471.4,239.5L472.6,240.6L474.2,241.8L475.9,242.7L477.8,243.1L479.4,244.0L480.6,245.1L482.1,246.2L483.6,245.5L485.7,245.9L487.3,245.7L489.2,246.3L491.0,246.8L492.7,246.9L494.3,247.2L495.9,248.4L496.5,250.2L498.3,251.4L500.0,251.4L501.6,251.8L503.2,252.2L505.5,252.1L506.9,252.9L506.6,251.3L505.9,249.8L505.1,248.2L506.8,248.8L507.9,247.3L509.5,247.6L510.0,245.9L512.0,246.1L512.8,247.6L513.8,246.0L514.5,244.4L512.9,243.6L511.7,242.0L511.5,240.3L511.9,238.7L513.5,238.3L514.2,239.8L515.5,241.0L516.3,242.5L517.5,243.6L517.6,242.0L519.2,242.6L520.9,242.7L521.9,244.5L523.4,245.1L524.1,246.6L525.7,245.8L526.5,247.3L528.3,247.3L530.1,248.3L531.6,248.9L534.4,249.5L536.0,249.5L537.7,250.2L539.9,250.3L541.5,251.3L542.9,252.2L544.8,252.7L546.5,252.6L546.6,250.4L546.1,248.7L546.1,246.9L546.6,244.9L547.3,243.4L547.8,241.7L548.6,240.3L549.2,238.7L549.8,236.9L549.9,235.2L550.1,233.5L550.2,231.1L550.5,229.3L551.3,226.3L551.9,224.7L552.8,222.4ZM589.2,116.2L588.4,114.7L586.8,114.4L585.4,116.3L583.7,115.7L584.7,117.8L586.5,118.7L588.6,118.3L590.5,117.7L589.2,116.2Z"},{"n":"連江縣","d":"M15.9,110.8L15.5,112.4L15.9,110.8ZM3.1,109.0L3.1,110.9L2.4,112.6L2.4,114.2L1.6,115.6L2.2,117.2L4.0,117.5L5.5,118.1L6.9,117.0L8.8,117.2L9.9,115.8L11.2,114.6L12.8,113.6L13.6,112.0L12.0,111.0L9.8,111.5L8.4,112.4L7.4,114.4L6.0,113.1L4.6,112.0L5.1,110.4L3.8,109.1L3.1,109.0ZM18.6,161.5L17.1,162.4L15.5,162.4L15.1,164.1L13.9,165.3L13.0,166.8L14.6,166.4L16.2,165.9L17.1,164.5L18.6,163.6L19.4,162.1L18.6,161.5ZM9.3,158.5L7.6,158.6L5.7,158.7L5.4,160.6L6.7,161.6L8.2,160.6L9.8,159.9L9.3,158.5ZM21.4,93.0L20.2,94.4L18.8,95.7L16.6,96.7L14.9,97.4L15.2,99.2L14.7,100.9L14.3,102.9L16.0,104.1L15.9,102.3L15.9,100.3L16.6,98.8L18.2,98.3L19.8,98.3L21.5,98.1L22.8,97.0L24.3,98.0L25.5,96.7L24.3,95.5L23.3,96.8L23.7,95.2L22.5,94.0L21.4,93.0ZM23.2,89.7L21.6,90.6L23.3,90.7L23.2,89.7ZM19.8,81.7L18.0,82.6L17.4,84.1L17.9,85.7L19.7,85.1L20.4,83.6L20.0,81.9L19.8,81.7ZM74.8,65.6L73.4,66.4L72.3,67.7L73.7,66.9L74.8,65.6ZM132.3,55.8L131.0,56.9L130.0,58.5L131.1,57.3L131.9,59.1L133.5,59.2L133.3,60.8L133.4,62.4L135.0,62.2L136.7,61.2L137.3,59.5L138.8,60.3L138.6,58.4L136.9,58.5L136.4,56.9L135.2,58.0L133.9,59.1L133.0,57.5L132.4,56.0L132.3,55.8Z"},{"n":"金門縣","d":"M69.4,265.9L67.3,266.6L65.2,266.0L63.1,265.5L61.4,264.5L60.2,263.2L59.4,261.8L57.7,260.6L55.8,260.2L54.0,260.7L52.4,261.7L51.5,263.2L50.8,265.0L51.6,266.6L52.9,268.5L53.1,270.4L54.3,272.3L54.8,274.1L54.4,275.7L53.7,277.2L52.7,278.7L51.3,280.1L49.6,280.4L49.7,282.0L51.1,283.1L52.4,284.4L53.4,285.8L55.2,285.8L56.2,287.3L57.8,287.5L59.3,288.4L60.8,287.7L62.3,286.3L62.8,284.3L63.5,282.8L64.8,281.4L65.6,279.8L67.4,278.4L69.1,277.5L71.1,276.6L72.8,276.1L74.4,275.7L76.3,275.6L78.0,275.8L79.4,276.6L80.6,277.8L82.5,278.1L84.5,279.4L84.6,281.5L83.7,282.9L85.4,282.8L86.8,282.0L88.2,281.1L89.8,280.8L90.7,279.0L92.0,277.8L92.3,276.2L92.0,274.6L93.7,274.5L94.7,272.9L95.2,271.1L93.7,270.4L92.7,268.7L92.3,267.1L92.2,265.5L93.5,264.1L92.1,263.2L90.9,262.0L90.4,260.2L89.2,258.9L89.1,257.1L87.7,256.1L85.7,255.4L84.8,253.5L83.9,252.0L81.9,251.3L80.3,251.5L79.1,250.4L78.7,252.1L76.9,251.9L77.6,253.4L76.1,255.0L75.0,256.5L73.6,258.4L74.0,260.3L72.8,262.3L71.6,263.8L70.3,264.9L69.4,265.9ZM144.4,250.9L142.7,251.7L143.8,253.0L145.2,252.2L144.4,250.9ZM140.7,250.1L139.5,248.3L137.8,247.5L138.0,249.5L139.4,250.6L140.7,250.1ZM21.5,290.2L20.1,288.9L20.7,290.5L21.5,290.2ZM22.0,286.0L21.9,287.9L23.5,288.8L23.6,287.2L22.4,286.1L22.0,286.0ZM42.2,270.3L40.4,270.4L38.8,270.9L37.1,272.5L36.4,274.5L35.7,276.4L34.6,278.0L34.6,279.8L34.4,281.5L36.1,282.6L37.8,282.4L39.0,281.1L40.6,281.8L41.8,280.6L42.6,279.0L44.1,278.2L45.5,279.0L46.2,277.5L46.2,275.9L46.8,274.1L45.9,272.6L44.8,271.2L43.1,270.5L42.2,270.3ZM48.9,271.0L47.7,269.9L46.8,271.3L48.7,271.3L48.9,271.0Z"},{"n":"台中市","d":"M468.0,235.2L466.2,235.2L464.4,235.8L462.7,236.1L460.9,236.5L459.3,236.2L457.8,237.2L456.6,238.5L455.2,239.3L453.6,239.0L452.2,237.9L451.7,236.2L451.9,234.5L450.5,233.6L448.9,232.6L446.3,232.7L444.7,232.8L443.6,231.4L442.1,230.6L441.9,228.9L442.4,226.9L442.6,224.8L442.5,223.1L441.8,221.5L440.1,220.3L439.0,221.5L437.5,222.4L435.5,222.4L433.8,223.0L431.6,223.3L429.7,223.4L428.1,223.7L426.5,223.0L426.4,221.2L426.4,223.8L425.0,224.6L423.3,225.2L422.7,227.2L422.8,228.9L421.6,230.6L420.8,232.0L420.1,234.1L419.0,235.3L416.9,235.8L415.5,234.3L415.2,232.6L413.7,231.5L412.0,231.8L411.6,233.5L410.6,235.1L409.1,235.7L407.7,236.6L406.5,237.9L406.3,239.5L405.2,241.0L403.2,241.0L401.3,241.6L399.7,241.7L398.2,242.4L396.8,243.9L396.1,245.7L394.7,246.8L394.5,248.4L392.9,249.3L391.4,248.7L390.1,250.0L388.5,250.8L387.1,251.8L385.5,251.2L383.9,250.8L382.8,252.3L381.0,252.7L379.5,253.7L378.6,255.2L378.2,256.9L376.6,257.8L374.9,257.5L373.6,256.5L372.5,255.1L370.7,254.3L369.9,252.6L368.9,250.9L367.7,249.4L366.6,248.2L365.1,248.9L362.9,248.6L361.8,247.4L359.9,247.9L358.1,248.0L356.5,247.2L354.9,246.6L353.2,246.4L351.5,245.9L349.4,246.5L347.7,247.0L346.6,248.2L347.3,250.4L347.5,252.0L347.4,253.8L347.9,255.4L346.6,256.9L345.4,258.2L343.8,258.6L341.6,258.3L339.9,258.1L337.4,257.9L335.4,258.3L333.5,259.0L331.4,259.5L329.6,259.5L327.8,259.3L326.2,258.2L324.7,256.7L323.7,255.2L322.5,254.0L321.1,252.7L319.1,252.5L317.5,252.1L315.5,251.9L313.7,251.3L312.0,250.3L310.3,249.6L308.5,248.3L306.8,246.8L305.3,245.3L304.0,244.3L302.6,243.0L300.8,242.4L298.6,242.0L297.6,240.7L296.0,240.4L294.5,239.5L293.8,238.0L292.7,236.3L291.3,235.4L290.0,233.6L288.8,232.3L288.0,230.9L286.5,229.5L284.8,228.8L283.4,227.8L282.7,226.2L282.1,224.7L281.2,223.3L279.9,222.0L277.8,220.6L277.0,222.1L276.1,223.5L275.1,224.9L273.3,226.9L272.4,228.9L270.7,230.7L269.9,232.2L268.8,233.5L267.8,235.0L266.8,236.3L265.7,238.8L264.6,240.2L263.7,241.6L263.1,243.1L261.4,245.4L260.0,247.5L258.4,248.3L257.4,249.9L256.6,251.4L254.8,252.4L253.7,254.8L253.4,256.4L252.5,257.8L251.5,259.5L249.3,264.7L247.6,265.1L246.7,267.6L246.2,269.8L245.2,272.5L243.7,275.8L241.9,278.3L240.3,277.9L239.3,279.7L245.9,282.7L248.7,283.8L251.1,285.4L251.8,287.0L252.5,289.1L253.2,291.0L254.0,292.7L254.9,294.3L255.1,295.9L254.7,297.6L255.6,299.0L256.7,300.8L258.2,301.5L259.4,303.1L260.7,304.2L262.7,304.5L264.4,305.2L266.1,305.6L268.2,305.3L269.8,306.2L272.5,306.4L274.4,307.1L275.6,308.3L276.0,310.3L276.2,312.3L276.8,314.2L278.2,315.3L278.5,317.5L278.3,319.1L278.2,320.8L278.5,322.7L278.2,324.7L279.8,325.7L281.5,326.3L283.2,326.6L282.9,324.8L284.5,326.1L286.3,326.4L287.6,327.5L290.8,329.8L292.6,330.7L294.6,331.6L297.3,332.1L300.3,331.0L303.3,331.1L304.8,332.1L306.5,333.7L307.8,332.7L309.4,331.9L311.2,331.4L312.4,330.3L313.4,328.7L314.9,327.7L315.9,326.4L317.3,325.6L317.7,323.9L318.5,322.3L319.6,320.5L320.3,318.8L321.0,317.3L322.2,316.1L324.1,315.6L326.1,315.2L325.9,313.5L325.8,311.2L325.9,309.3L326.9,308.0L327.2,306.2L327.3,304.5L328.3,303.0L329.7,301.7L331.6,301.6L332.6,303.4L334.2,303.8L336.0,303.6L337.2,305.1L338.0,306.5L337.7,308.4L337.2,310.1L337.5,311.7L338.7,310.3L339.6,308.9L340.6,307.2L341.2,305.7L340.4,304.2L342.3,303.9L344.3,304.7L345.7,305.6L347.3,306.0L349.0,304.9L350.8,304.0L352.3,302.7L354.0,301.5L355.6,301.4L357.0,302.7L358.6,302.7L360.2,303.2L362.2,303.0L364.1,302.5L365.1,301.1L366.2,299.6L367.1,298.2L367.8,296.7L368.5,294.9L369.7,293.5L371.5,293.0L373.1,293.8L373.9,295.4L374.9,293.0L376.9,292.5L378.1,293.6L379.5,292.8L380.8,291.7L382.1,290.7L383.5,289.9L384.9,288.7L386.4,287.9L387.4,286.4L388.0,284.9L389.4,283.8L390.9,282.9L392.5,283.0L394.1,283.0L395.8,283.1L397.7,283.2L399.1,282.3L399.5,280.7L400.6,278.9L402.6,278.4L404.2,277.3L405.2,275.7L406.6,277.0L407.8,278.6L410.1,278.4L411.3,276.9L413.1,276.7L414.7,276.6L416.2,275.8L417.4,274.7L418.9,275.6L420.4,276.5L422.1,276.8L423.3,275.6L424.2,273.9L425.2,271.7L426.5,270.6L428.1,270.7L428.9,272.5L430.7,273.1L431.5,274.5L433.1,274.6L434.8,274.6L435.9,273.0L437.5,273.5L439.4,273.2L441.0,274.0L443.2,274.2L444.8,275.0L446.1,276.0L447.4,274.5L448.5,272.8L448.4,271.1L450.3,270.9L451.4,269.7L452.8,268.5L454.4,268.6L456.0,268.0L456.0,266.2L455.5,264.3L455.3,262.6L455.6,261.0L457.0,259.7L458.7,259.4L459.8,257.7L460.5,255.9L460.7,254.3L462.4,254.5L464.2,254.5L465.5,252.9L466.5,251.6L467.5,250.2L467.0,248.5L467.4,246.6L467.9,244.9L468.2,243.1L469.1,241.6L470.6,240.7L471.2,239.0L470.6,237.3L468.9,236.5L468.0,235.2Z"},{"n":"澎湖縣","d":"M75.3,708.8L76.6,707.4L78.1,706.4L80.2,706.3L81.8,706.5L83.5,707.4L85.0,706.6L84.8,708.2L86.4,708.2L88.0,707.9L89.7,708.1L89.1,706.6L87.5,706.0L86.7,703.9L86.1,702.2L86.6,700.4L85.4,698.8L84.5,697.4L83.4,695.8L83.2,697.5L82.1,698.7L80.6,696.8L80.5,694.8L79.2,693.8L78.5,695.6L77.4,697.4L77.6,699.0L76.0,698.5L76.6,696.9L74.9,697.5L75.1,699.1L74.2,700.9L72.8,699.7L73.0,698.1L73.1,696.2L74.4,695.0L72.9,694.2L72.1,695.7L70.3,695.8L69.5,693.6L70.3,692.2L69.1,690.8L67.7,689.0L69.4,687.9L67.6,687.6L66.5,686.1L67.3,684.7L68.6,683.7L70.1,682.8L68.8,681.6L67.8,679.8L67.3,678.2L65.7,678.0L64.1,677.2L62.2,676.8L60.4,678.0L58.0,678.2L56.3,679.3L55.9,680.9L55.4,682.7L54.2,684.4L53.1,685.9L50.9,686.2L49.2,685.2L49.0,683.6L49.3,682.0L47.0,682.0L48.3,683.6L46.6,683.8L46.0,685.4L45.4,687.0L44.2,688.4L44.6,690.2L43.9,691.8L45.4,692.4L44.8,694.5L44.4,696.2L43.2,697.3L42.3,695.8L42.2,697.4L43.7,698.3L44.8,699.9L44.5,701.6L43.4,702.9L41.8,704.0L40.1,703.1L38.5,704.2L37.0,705.1L37.1,706.7L38.7,706.1L40.5,705.7L42.2,704.6L43.8,704.8L45.6,705.2L47.2,705.5L46.8,703.8L46.8,702.1L47.5,700.5L46.8,698.7L48.2,697.7L48.9,696.2L48.8,694.6L48.8,692.6L48.6,691.0L47.8,689.4L49.2,688.3L50.8,688.6L52.3,687.7L53.5,686.6L54.3,684.4L55.5,682.8L56.8,681.8L58.4,682.9L59.4,681.1L60.8,680.2L62.4,680.6L63.2,682.1L64.1,684.1L65.7,685.6L66.2,687.4L65.0,688.7L64.5,690.5L66.3,690.1L68.0,690.1L67.8,691.8L67.9,693.5L69.9,694.4L68.5,695.6L68.3,697.3L68.9,699.0L67.8,700.2L66.9,701.7L66.6,703.5L65.1,702.8L64.6,701.2L63.1,700.6L63.7,699.1L62.1,699.4L60.4,700.2L58.7,699.9L59.3,702.0L58.4,703.5L57.8,705.4L59.4,705.9L61.1,704.5L62.4,705.7L60.7,705.7L61.9,706.9L60.8,708.1L59.2,707.6L58.3,709.1L60.0,708.8L61.6,709.8L63.4,709.5L65.1,708.5L66.8,709.1L67.3,710.8L66.0,712.1L67.1,713.9L65.9,715.1L64.7,714.0L63.1,713.5L62.8,715.2L61.5,716.5L61.2,714.8L59.7,713.9L58.0,714.0L57.0,712.6L55.7,711.5L55.6,709.7L55.2,708.1L54.6,709.6L53.4,710.9L54.0,712.4L55.5,713.3L56.3,714.7L57.9,715.8L59.5,715.3L60.8,716.5L60.6,718.1L60.6,719.7L62.3,719.5L63.9,719.2L65.8,718.7L67.6,719.5L69.0,718.6L69.9,717.1L68.4,715.8L69.0,714.3L70.1,712.9L71.4,711.9L72.7,710.7L74.1,709.7L75.3,708.8ZM53.3,722.9L51.7,723.0L50.1,723.4L48.5,724.0L47.6,725.4L46.6,724.1L45.8,725.6L47.7,725.6L49.5,725.3L51.7,724.4L53.4,723.7L53.3,722.9ZM48.5,718.1L47.2,719.1L48.8,719.4L48.5,718.1ZM75.2,683.1L74.4,684.8L75.8,683.3L75.2,683.1ZM82.2,678.5L81.3,680.2L82.8,681.0L82.6,679.1L82.2,678.5ZM82.8,675.0L82.8,676.7L82.8,675.0ZM55.9,665.3L56.8,667.1L57.1,665.4L55.9,665.3ZM70.0,656.3L68.2,658.6L66.5,659.9L67.2,661.8L67.5,664.0L68.3,662.3L69.5,660.7L71.6,660.1L72.5,658.4L71.0,657.4L70.0,656.3ZM68.6,651.3L67.1,652.8L66.5,654.4L68.2,653.0L68.6,651.3ZM71.0,785.0L69.3,785.6L70.0,787.1L71.6,787.3L72.1,785.7L71.0,785.0ZM85.4,782.4L83.8,782.7L82.6,783.8L82.7,785.5L83.6,786.9L84.4,785.5L85.6,784.3L85.9,782.6L85.4,782.4ZM48.3,782.2L47.0,783.5L48.7,783.1L48.3,782.2ZM45.3,780.2L45.9,781.8L46.0,780.2L45.3,780.2ZM52.4,753.9L50.8,754.8L49.6,756.1L48.0,756.8L49.4,757.7L50.6,756.6L52.5,756.4L53.4,754.9L52.4,753.9ZM42.2,748.3L42.1,750.0L42.3,751.6L42.2,753.2L42.4,754.8L42.4,756.4L41.3,757.6L41.1,759.2L42.9,759.2L44.5,758.9L46.2,759.5L45.6,758.0L46.0,756.2L47.4,755.2L45.7,755.0L46.7,753.6L45.7,752.1L45.4,750.4L44.7,748.9L43.9,750.3L42.9,748.9L42.2,748.3ZM1.3,744.5L0.7,746.0L0.1,747.6L1.8,747.8L3.1,746.8L2.3,745.3L1.3,744.5ZM29.6,793.3L27.9,793.5L26.3,793.9L24.4,794.2L22.9,795.1L23.8,796.5L25.0,797.9L24.6,799.5L25.2,801.0L27.0,801.7L27.0,800.0L28.3,798.8L29.9,798.5L30.2,796.8L30.4,795.1L31.4,793.7L29.6,793.3Z"},{"n":"南投縣","d":"M278.1,364.9L277.9,367.0L277.8,368.8L278.4,370.4L277.7,371.9L276.6,373.3L277.4,374.7L279.4,375.1L278.1,376.5L280.1,376.2L281.5,377.6L281.8,379.2L283.2,380.2L285.3,381.4L286.9,380.7L288.7,379.9L290.8,380.5L290.8,383.2L289.9,384.7L288.6,385.7L286.9,386.8L284.5,387.5L282.2,388.3L283.3,390.9L284.3,393.4L285.4,396.5L285.0,398.1L285.0,400.1L283.1,401.2L281.7,402.4L282.0,404.6L281.7,406.4L281.5,408.0L282.9,409.5L282.9,411.5L282.9,413.6L283.5,415.1L283.0,416.7L282.6,418.4L281.6,420.3L280.6,422.3L280.3,424.2L279.6,426.0L279.2,427.7L279.2,429.4L280.0,431.0L281.3,429.6L282.8,428.0L284.6,428.3L284.5,430.1L284.2,431.8L285.9,432.4L287.9,433.3L289.5,433.3L291.8,433.1L292.4,431.5L293.9,430.8L295.5,431.1L297.3,431.1L298.9,430.5L298.7,428.8L300.3,428.7L301.2,430.3L302.9,431.3L303.0,432.9L304.5,433.5L306.1,432.7L307.7,432.2L309.3,432.8L311.3,433.5L312.8,434.5L314.3,435.5L316.2,435.6L317.7,436.4L319.4,436.8L321.4,436.3L323.2,436.1L323.6,437.9L324.7,439.3L324.1,440.8L323.7,442.4L324.1,444.1L323.6,446.1L322.4,447.2L321.7,448.9L321.0,450.8L321.4,452.5L322.4,454.0L323.3,455.6L323.7,457.6L324.4,459.3L324.6,461.3L325.1,462.9L325.2,464.5L325.7,466.2L326.6,467.8L328.2,469.0L330.0,468.5L332.3,468.4L334.0,468.4L335.8,469.4L338.1,469.9L338.9,468.2L340.6,467.8L342.5,467.9L344.1,467.7L346.0,468.1L348.1,468.4L349.8,469.1L351.5,468.5L352.9,469.7L354.6,469.9L356.4,469.4L358.3,468.9L359.8,469.5L361.5,469.5L363.7,470.6L365.3,471.0L367.0,471.1L368.5,472.0L369.6,473.3L368.9,475.0L368.6,476.7L369.7,478.2L371.2,477.3L372.8,476.6L374.3,475.4L376.4,474.7L378.2,474.2L378.8,472.7L379.9,471.4L378.2,470.8L376.9,469.5L375.5,468.5L376.6,466.6L377.8,465.4L378.7,464.0L379.5,462.6L380.9,461.2L381.6,459.6L382.2,457.8L383.7,457.1L385.2,457.7L386.8,458.0L388.2,456.8L389.8,456.2L391.8,456.7L393.5,456.1L395.8,457.2L397.3,457.8L398.6,456.3L400.0,455.0L401.6,454.6L400.6,452.9L401.1,451.3L401.2,449.0L400.4,447.5L401.6,446.2L403.2,445.2L403.0,443.5L401.7,441.9L401.9,440.0L403.5,439.5L405.2,439.3L406.7,440.0L408.3,439.2L409.2,437.7L410.6,436.9L411.8,435.8L413.1,436.9L414.9,436.4L416.3,435.3L416.9,433.6L417.7,431.6L418.6,429.9L418.8,428.1L418.7,425.9L419.5,424.4L420.3,422.8L420.5,421.1L421.5,419.4L421.1,417.0L421.0,415.2L422.2,413.7L422.2,411.7L422.5,409.6L422.6,408.0L422.3,406.4L422.2,404.1L420.8,402.6L419.6,401.0L419.7,399.0L420.6,397.3L418.9,397.0L417.3,395.9L415.5,394.7L414.6,391.1L417.5,389.4L419.3,388.7L420.1,387.2L419.2,385.7L419.1,383.6L420.1,382.1L421.1,380.0L421.5,378.2L421.8,376.4L422.1,374.4L423.2,372.5L424.4,371.3L424.6,369.5L425.3,367.9L426.5,366.1L428.2,366.0L427.7,364.3L428.9,362.9L428.3,361.3L428.2,359.7L427.2,358.4L428.4,357.2L430.4,357.1L430.6,355.3L430.7,353.5L430.1,351.7L430.2,349.8L430.1,347.8L430.4,345.9L430.5,344.1L431.1,342.3L430.5,340.6L428.1,339.7L427.3,338.2L427.1,336.3L427.4,334.5L428.4,332.9L429.1,331.4L429.9,329.9L430.7,328.3L431.3,326.5L432.1,324.6L432.9,323.2L432.7,321.4L432.3,319.5L433.8,318.3L435.2,317.1L436.8,316.4L437.8,315.1L439.0,314.0L440.5,312.9L441.6,311.6L440.9,310.0L441.4,307.9L442.4,306.2L442.8,304.0L441.2,303.6L439.6,303.2L438.3,302.2L436.5,300.7L435.2,299.5L433.0,299.0L432.0,297.6L432.5,296.0L432.6,294.3L431.6,293.0L433.3,293.1L433.4,291.2L433.3,289.2L434.5,288.0L436.2,287.3L437.9,287.1L439.5,286.1L440.8,284.5L442.1,283.2L444.1,282.6L445.7,282.5L447.5,282.3L447.4,280.3L447.2,278.6L446.5,277.1L445.7,275.6L443.8,274.5L442.3,273.8L440.7,274.0L439.0,273.2L437.0,273.5L435.4,273.7L433.8,274.6L432.1,274.2L430.8,273.2L429.2,272.7L428.3,271.3L426.5,270.6L425.2,271.7L424.4,273.3L423.8,275.0L422.7,276.6L420.5,276.5L419.1,275.6L417.6,274.8L416.2,275.8L414.7,276.6L413.1,276.7L411.3,276.9L410.1,278.4L408.5,279.1L407.3,278.0L405.8,276.2L404.3,277.2L403.1,278.5L401.5,278.8L400.2,279.9L399.4,281.8L398.2,283.0L396.6,283.1L395.0,283.2L393.3,282.9L391.6,282.7L389.9,283.3L388.5,284.3L387.7,285.8L386.8,287.2L385.6,288.5L384.2,289.4L382.4,290.3L381.1,291.7L379.5,292.8L378.1,293.6L376.9,292.5L374.9,293.0L374.4,294.8L373.1,293.8L371.5,293.0L369.7,293.5L368.7,294.8L367.9,296.2L367.4,297.9L366.7,299.4L365.7,301.0L364.1,301.7L362.8,302.7L361.2,303.2L359.2,302.7L357.6,302.8L356.2,301.9L354.8,300.9L353.1,302.0L351.8,303.3L350.4,304.4L348.6,305.2L347.2,306.0L345.3,305.6L343.8,304.2L341.8,303.7L341.2,305.5L340.6,307.2L339.8,308.9L338.7,310.3L337.7,311.7L337.2,310.1L337.7,308.4L338.0,306.7L337.2,305.1L336.2,303.5L334.6,303.9L332.9,303.7L332.2,302.1L330.2,301.7L328.7,302.7L327.6,304.2L327.3,305.9L326.3,307.3L326.3,309.2L325.9,310.8L325.9,313.2L326.1,315.0L324.5,315.6L322.9,315.8L321.4,316.5L320.5,318.1L320.1,319.8L319.1,321.5L318.4,323.1L317.3,324.4L316.3,325.7L315.6,327.3L314.0,328.5L312.7,329.7L311.9,331.1L310.5,331.9L308.9,332.6L307.2,333.2L304.8,332.1L303.3,331.1L301.2,331.0L297.3,332.1L295.6,331.8L293.2,331.1L290.9,329.8L289.5,330.8L287.9,331.4L285.4,331.3L283.5,331.3L281.9,331.8L280.9,333.8L282.0,335.4L283.5,336.6L283.8,338.6L283.2,340.3L283.4,341.9L282.4,343.8L281.4,345.1L279.8,344.8L279.2,346.3L280.5,347.8L281.0,349.5L279.6,350.8L280.4,352.2L280.9,353.9L280.5,355.7L280.2,357.4L280.6,359.4L279.9,361.1L279.1,362.7L278.6,364.3L278.1,364.9Z"},{"n":"花蓮縣","d":"M440.5,561.5L442.0,559.6L442.2,557.9L442.0,556.0L441.6,554.3L442.4,552.9L442.9,551.0L442.0,549.4L441.2,548.0L441.7,546.4L442.4,544.8L443.7,543.4L445.4,542.8L445.8,541.0L446.7,539.5L446.9,537.8L447.8,536.0L447.6,534.4L448.9,533.2L449.5,531.6L449.3,529.8L450.3,528.5L451.1,527.0L450.6,525.3L451.5,523.8L452.8,522.7L453.6,521.2L455.0,520.2L455.1,518.5L454.8,516.9L454.9,514.9L454.9,513.3L455.6,511.6L456.8,510.4L457.6,509.0L457.9,507.4L459.7,507.1L460.4,505.4L460.8,503.8L461.8,502.4L462.5,500.9L464.1,500.0L465.4,498.6L464.4,497.2L462.8,496.2L461.2,495.4L461.0,493.6L460.4,491.5L460.9,489.9L461.9,488.5L462.7,487.1L463.4,485.5L464.3,484.0L464.7,482.1L466.0,480.9L466.9,479.5L468.2,478.5L469.8,478.3L470.5,476.8L472.1,476.0L474.3,476.4L476.5,476.7L478.0,477.7L479.0,479.1L480.6,478.4L482.2,478.1L482.9,476.5L483.3,474.2L483.6,472.6L484.1,471.0L484.9,469.0L485.7,467.1L486.6,465.1L486.3,463.4L485.1,461.9L485.0,460.0L484.7,458.3L484.4,456.5L484.8,454.2L485.2,452.6L485.5,450.8L485.9,449.2L486.7,447.2L487.9,445.1L488.7,443.6L489.7,441.8L489.6,440.2L490.3,437.6L490.6,435.3L490.5,433.4L490.7,431.0L490.8,429.0L491.2,427.2L491.7,424.9L492.2,423.3L493.5,422.2L493.0,420.2L494.0,418.2L494.2,416.4L494.8,414.4L495.2,412.7L495.9,410.5L495.1,408.7L494.9,407.1L495.5,404.9L496.6,403.7L497.7,401.5L498.4,400.0L499.2,398.6L500.3,395.6L500.0,393.1L499.9,389.0L500.0,387.4L500.2,385.0L500.6,383.4L501.2,381.7L502.3,380.3L503.0,378.4L503.8,376.4L504.8,374.0L505.5,372.0L506.0,370.4L506.6,368.1L506.8,366.2L507.2,364.4L507.6,362.0L507.8,360.4L507.7,357.7L507.8,356.0L508.3,353.7L508.8,351.5L509.1,349.0L508.7,347.1L508.2,345.3L508.4,343.4L509.4,341.7L510.2,340.0L511.7,338.8L513.1,341.0L514.7,338.3L515.8,334.3L516.8,332.7L517.6,331.3L517.3,329.5L516.3,327.9L514.3,326.2L513.1,324.6L512.0,322.4L511.3,320.8L510.7,318.8L510.2,316.8L510.1,315.0L510.2,313.0L510.7,311.1L511.3,309.2L512.3,307.8L513.5,306.3L515.4,304.9L516.9,304.0L518.3,303.0L519.6,301.3L520.4,299.9L521.4,297.9L521.5,296.3L521.3,293.3L520.4,291.5L520.0,289.7L520.0,287.2L520.4,285.3L521.0,283.8L522.1,282.1L523.1,280.4L524.5,279.5L526.1,278.7L527.3,277.6L528.7,276.5L530.3,275.7L531.5,274.1L532.2,272.6L533.2,271.1L534.9,270.6L536.6,269.5L537.8,268.3L539.0,266.9L540.0,265.1L540.3,263.5L540.6,261.9L541.3,260.3L543.5,257.5L545.0,256.1L546.1,254.7L546.7,252.9L544.8,252.7L542.9,252.2L541.5,251.3L539.9,250.3L538.0,250.2L536.4,249.7L534.4,249.5L532.8,249.3L531.0,248.7L529.4,247.8L527.5,247.4L526.4,246.2L524.4,246.5L523.4,245.1L521.9,244.5L520.9,243.2L519.3,242.6L518.2,241.4L517.9,243.2L516.3,242.5L515.5,241.0L514.3,239.9L513.5,238.5L511.9,238.7L510.8,240.1L511.3,241.8L512.4,243.2L514.3,243.9L513.5,245.5L513.9,247.1L512.3,247.1L511.2,245.6L510.0,246.8L508.3,247.2L507.5,248.7L506.0,247.7L505.8,249.5L506.4,251.0L507.7,252.8L506.0,252.4L504.4,252.3L502.5,252.0L500.9,251.5L499.0,251.7L497.6,250.6L496.1,249.3L494.6,247.6L493.2,246.7L491.3,246.9L489.7,246.4L487.9,245.4L486.0,245.9L484.4,245.3L482.7,246.3L480.9,245.6L479.6,244.3L477.8,243.1L475.9,242.7L474.2,241.8L472.8,240.8L471.0,240.2L469.8,241.3L468.6,242.6L467.7,244.2L468.1,245.8L467.3,247.2L467.0,248.9L467.6,250.7L466.1,252.0L464.9,254.4L463.1,254.3L461.1,254.4L460.5,255.9L460.1,257.5L459.0,258.7L457.3,259.1L456.1,260.7L455.2,262.2L455.5,263.8L456.1,265.7L456.1,267.6L454.4,268.6L452.8,268.5L451.4,269.7L450.3,270.9L448.4,270.9L448.5,272.8L447.4,274.5L446.2,276.1L447.0,277.9L447.7,279.4L447.6,281.0L446.4,282.3L444.5,282.4L442.9,283.0L441.5,284.2L440.2,285.2L438.7,286.4L436.9,287.3L435.3,287.7L433.4,287.9L433.4,290.0L433.4,292.0L432.0,292.9L432.6,294.5L432.4,296.7L431.9,298.4L434.0,299.2L435.8,300.0L437.0,301.5L438.9,302.6L440.8,303.5L442.5,304.0L442.4,305.6L442.1,307.3L440.7,309.0L441.2,310.6L441.1,312.3L439.6,313.5L438.1,314.6L436.8,316.4L435.4,317.3L433.8,318.3L432.4,319.3L432.7,321.1L432.8,322.7L432.3,324.3L431.3,326.5L430.7,328.3L429.9,329.9L429.1,331.4L428.4,332.9L427.4,334.5L427.1,336.3L427.2,337.9L427.9,339.5L430.0,339.7L430.6,341.5L430.5,343.6L430.5,345.3L429.7,346.7L430.2,348.3L430.2,350.3L430.4,352.2L430.6,353.9L430.6,356.0L429.4,357.4L427.6,357.9L428.5,359.5L428.3,361.3L428.9,362.9L427.7,364.3L428.2,366.0L426.5,366.1L425.3,367.3L425.1,369.0L424.4,370.9L423.2,372.5L422.2,374.2L421.8,376.4L421.5,378.2L421.1,380.0L421.0,381.6L419.4,382.6L418.9,385.1L419.3,386.9L419.3,388.7L417.5,389.4L414.6,391.1L414.5,394.3L416.1,395.6L418.0,396.8L419.8,396.9L419.7,399.0L419.6,401.0L419.9,402.6L421.5,404.1L422.2,405.9L422.2,407.5L422.5,409.6L422.2,411.7L422.2,413.7L421.0,415.2L421.1,417.0L421.5,419.4L420.5,421.1L420.3,422.8L419.5,424.4L418.7,425.9L418.7,427.5L418.8,429.1L417.9,431.0L417.0,432.7L416.5,434.5L415.9,436.1L414.5,437.0L412.6,436.5L410.9,436.5L409.7,437.6L408.3,438.5L408.1,440.3L406.4,440.0L404.7,439.2L402.8,439.4L401.8,440.8L401.7,442.7L403.2,443.7L403.1,446.0L401.5,446.5L400.4,447.7L401.5,449.9L400.9,451.5L400.9,453.2L401.5,454.8L399.7,455.4L398.1,457.2L396.3,456.8L394.4,456.2L391.8,456.7L390.1,456.6L388.2,456.8L386.8,458.0L385.2,457.7L383.7,457.1L382.2,457.8L381.6,459.6L380.9,461.2L379.6,462.4L378.7,464.0L377.8,465.4L376.6,466.6L375.2,468.2L376.5,469.3L377.9,470.4L379.6,471.2L378.8,472.7L378.2,474.2L376.4,474.7L374.9,475.3L373.5,476.4L372.0,477.2L370.4,478.0L369.4,479.3L371.0,479.7L372.2,481.0L372.8,482.5L372.4,484.2L372.5,485.9L371.4,487.2L369.7,488.0L368.1,488.4L366.3,489.4L367.7,490.5L366.1,491.8L364.9,493.1L364.0,494.6L363.0,496.0L363.0,497.8L364.8,498.4L366.8,498.8L368.0,499.9L369.7,501.0L371.3,500.5L371.8,502.3L373.1,503.3L374.7,504.3L375.9,505.7L377.6,506.4L377.3,508.5L377.0,510.2L375.6,511.3L373.6,511.9L372.8,513.6L374.3,512.9L375.9,513.5L377.4,514.2L379.0,515.1L380.1,516.4L380.7,518.1L380.4,519.8L380.8,521.4L381.4,523.3L382.6,525.1L383.0,526.7L384.1,528.2L384.5,529.9L386.2,529.9L387.9,529.8L389.1,531.0L390.6,531.7L392.5,532.2L394.2,532.2L395.9,532.2L397.0,533.4L397.7,535.3L398.7,537.1L400.0,538.4L402.2,538.7L403.5,537.5L405.0,536.6L406.6,536.3L408.3,536.2L410.0,537.2L411.2,538.4L411.9,540.4L412.7,542.0L413.0,543.7L413.4,545.3L414.6,547.0L415.6,548.7L416.0,550.3L416.1,552.5L418.0,553.3L420.1,553.9L421.2,555.2L422.3,556.7L424.2,556.5L426.0,556.8L427.1,558.0L428.3,559.4L429.2,560.9L428.7,562.5L430.0,563.8L431.8,563.7L433.1,562.3L434.8,561.6L436.5,561.6L438.9,561.1L440.5,561.5Z"},{"n":"基隆市","d":"M535.1,62.7L536.9,62.9L538.5,63.3L540.0,62.5L541.7,61.6L543.4,62.0L544.8,60.4L546.1,58.7L545.1,57.2L543.3,56.6L542.2,55.1L542.2,53.2L542.2,51.3L541.7,49.7L540.1,48.8L541.7,48.5L543.1,47.6L544.8,46.8L546.6,46.5L548.2,46.4L549.2,47.7L550.9,47.5L551.0,45.6L552.5,44.9L552.8,43.3L552.4,41.7L552.5,40.0L553.2,38.4L551.5,38.9L549.6,38.7L548.0,38.0L546.3,37.8L546.2,36.2L544.7,35.6L543.1,34.7L541.8,35.8L539.6,36.7L537.6,35.9L536.0,35.3L534.4,34.6L532.7,34.3L531.0,34.5L530.4,32.8L528.7,32.9L527.4,34.1L525.8,34.8L524.4,35.9L522.9,37.0L521.3,37.2L519.7,37.7L518.1,38.6L516.7,39.7L515.0,39.7L513.4,40.1L511.5,41.0L512.1,42.6L513.6,43.4L515.2,44.1L515.7,45.7L515.9,47.3L516.9,48.8L517.2,50.4L517.7,52.2L518.8,53.4L520.3,54.1L522.1,55.3L523.5,54.5L523.8,56.3L524.8,57.6L526.2,58.4L528.0,59.1L529.7,59.6L531.4,59.3L532.6,60.4L533.7,61.7L535.1,62.7ZM548.8,26.5L547.3,27.8L549.0,27.5L548.8,26.5Z"},{"n":"台北市","d":"M489.5,74.8L489.5,76.7L489.5,78.7L490.7,79.9L492.3,80.0L493.5,81.1L494.7,82.9L495.8,85.0L497.1,86.0L499.1,86.1L500.9,85.8L502.6,86.2L504.2,86.8L505.9,86.9L507.4,86.3L508.9,85.6L508.7,83.7L506.6,83.5L505.2,82.4L505.4,80.7L505.2,79.0L505.5,77.3L504.9,75.8L504.5,73.9L506.0,73.0L507.3,71.9L509.1,71.8L510.6,72.4L512.1,71.8L512.9,70.3L514.7,70.8L516.3,71.3L517.8,70.6L519.5,70.9L520.5,69.5L518.8,69.4L517.0,69.8L515.1,68.9L513.4,67.9L511.8,67.4L510.4,66.6L509.1,64.6L510.2,63.1L510.3,61.4L509.3,60.0L510.2,58.5L511.0,57.0L511.8,55.5L511.3,53.7L511.2,52.1L509.4,51.0L507.7,50.0L505.7,49.1L504.2,47.8L504.9,46.3L505.6,44.6L507.0,43.8L506.4,42.2L504.8,41.0L504.1,39.4L502.8,37.9L503.0,35.8L501.6,34.7L499.9,34.1L500.9,32.4L501.0,30.8L501.0,29.0L501.1,27.4L499.4,26.8L497.9,26.1L496.9,24.5L495.8,23.1L494.5,24.1L494.1,26.0L492.6,26.6L491.9,28.5L490.3,29.1L488.8,30.1L487.3,30.9L486.9,32.8L485.2,33.2L483.6,33.1L482.1,33.8L481.0,35.3L479.6,37.0L478.3,38.4L476.8,40.0L475.7,41.2L474.7,42.6L473.8,44.1L473.0,45.5L473.0,47.3L472.2,48.8L473.1,50.4L475.8,51.0L477.6,51.2L479.5,52.2L480.8,53.4L482.1,54.8L483.0,56.5L483.5,58.3L483.7,60.4L483.4,62.1L483.4,63.7L482.4,65.2L480.8,66.0L478.7,67.0L478.6,69.0L479.5,71.0L479.5,73.0L480.4,74.6L482.2,73.9L483.6,72.1L485.4,71.5L487.0,72.4L488.1,73.9L489.5,74.8Z"},{"n":"新北市","d":"M502.7,148.7L504.0,147.5L505.2,146.3L504.3,144.9L504.4,143.3L504.8,141.4L503.3,140.5L503.5,138.7L504.1,137.2L505.1,135.2L504.0,132.6L505.3,131.3L506.9,131.0L511.1,129.6L511.6,125.9L514.2,125.7L516.2,125.6L517.9,125.2L519.7,125.3L521.6,123.8L523.5,124.5L525.6,123.6L526.0,121.8L528.0,120.3L530.6,118.1L532.1,117.3L533.9,115.3L535.9,113.9L537.7,113.8L539.4,114.5L541.3,113.9L543.0,113.5L544.1,112.0L546.3,111.3L547.2,109.7L548.6,108.9L547.8,106.8L547.7,105.0L549.2,104.2L550.1,102.4L551.7,102.1L553.4,101.6L554.7,100.6L556.2,101.6L558.0,100.9L559.7,100.5L561.1,99.0L562.4,97.8L563.6,96.5L564.4,95.1L563.0,93.5L561.8,92.2L561.0,90.4L561.5,88.8L562.5,87.1L564.1,87.0L565.5,86.0L568.0,86.5L569.6,86.4L571.6,85.7L573.2,85.5L575.0,84.4L576.0,83.0L577.6,82.5L579.1,81.9L580.7,81.8L582.6,81.3L584.1,80.4L585.5,79.5L587.4,79.5L589.0,79.4L590.4,80.8L591.9,80.2L593.1,79.0L595.0,78.4L596.6,77.1L598.7,75.9L599.6,74.4L599.5,72.7L598.2,71.7L596.7,72.7L596.0,71.0L594.3,70.0L592.6,69.6L591.0,70.2L589.1,70.5L587.1,70.8L585.4,70.7L584.1,69.4L583.0,68.2L582.1,66.6L582.0,64.8L582.0,62.9L582.1,61.1L581.9,59.5L581.1,58.1L579.5,56.9L578.7,55.4L578.3,53.5L579.4,52.2L579.3,50.6L580.8,49.3L580.2,47.5L578.6,47.3L579.7,45.9L580.7,44.1L579.1,43.8L577.6,44.7L575.9,44.7L574.4,45.7L572.8,45.9L571.2,44.9L569.6,44.5L568.0,44.7L566.2,44.7L564.2,44.4L562.6,44.0L560.8,43.8L559.0,43.9L558.1,45.3L556.5,45.3L556.1,43.7L557.6,42.1L555.9,42.2L554.0,42.5L552.4,41.8L552.9,43.6L552.4,45.3L550.9,44.5L551.4,46.1L550.4,47.8L548.7,47.0L547.1,46.5L545.5,45.9L544.6,47.3L542.9,47.8L541.4,48.4L541.8,50.0L542.2,51.7L542.4,53.6L542.4,56.0L544.1,56.5L545.2,57.7L545.8,59.2L544.2,60.9L543.0,62.1L541.4,61.8L539.7,62.6L537.8,63.2L536.1,63.1L534.6,61.9L532.9,61.0L531.4,59.3L529.7,59.6L528.0,59.1L526.2,58.4L524.8,57.6L523.6,56.5L524.2,54.5L522.7,55.4L521.0,54.9L519.6,53.9L518.2,52.9L517.1,51.7L517.4,50.0L516.6,48.4L515.9,46.5L515.5,44.8L514.0,43.3L512.2,42.6L511.4,41.1L512.9,40.1L514.4,39.5L516.7,39.7L518.1,38.6L519.7,37.7L521.3,37.2L522.9,37.0L524.3,36.0L525.8,34.8L527.4,34.1L528.6,33.0L530.4,31.9L529.2,30.7L527.5,30.0L525.9,29.9L525.1,28.2L525.9,26.8L527.1,25.6L526.6,23.8L528.1,22.3L526.7,23.1L525.4,24.2L523.5,24.8L521.9,25.0L520.5,24.0L518.8,22.9L517.5,21.4L516.8,19.8L517.6,18.1L516.2,17.3L514.6,17.3L513.2,15.9L513.1,14.3L513.2,11.1L512.6,9.5L511.2,7.6L509.9,6.2L507.2,4.9L506.0,3.5L504.5,2.6L502.9,2.1L501.0,1.0L499.5,0.3L497.9,0.4L497.1,1.8L495.1,2.0L493.5,2.2L491.4,1.5L490.6,0.0L489.6,1.4L488.9,3.1L487.2,3.4L485.3,3.7L484.6,2.2L484.0,3.8L482.7,4.9L481.0,5.7L479.3,6.8L477.8,7.5L476.6,8.8L476.0,10.5L474.9,11.7L473.2,12.4L471.1,12.3L470.0,13.5L469.4,15.1L469.0,16.7L468.2,18.5L467.4,20.7L465.9,21.7L464.9,23.3L463.3,25.7L462.9,27.4L461.6,28.4L459.9,28.4L459.8,30.2L461.5,30.6L463.1,31.6L462.0,33.2L460.9,34.8L459.7,36.2L457.8,34.9L456.0,38.1L455.6,39.7L454.0,40.4L452.3,40.7L450.7,41.2L449.5,42.6L448.0,43.4L446.1,44.2L443.9,44.8L441.8,45.3L440.0,45.4L438.0,45.4L435.7,45.1L434.4,46.2L432.7,46.9L431.9,48.4L432.8,49.8L434.0,50.9L435.6,50.6L436.3,52.3L438.0,52.4L439.6,53.0L441.4,53.4L442.6,54.5L444.1,55.3L445.7,55.6L447.3,56.2L445.5,56.6L445.2,58.3L446.8,58.2L447.6,59.7L449.2,60.5L451.3,60.4L452.9,60.2L454.7,60.6L456.5,61.3L455.9,62.9L457.6,63.5L458.7,64.8L457.6,66.0L458.7,67.4L458.6,69.0L459.4,70.5L460.9,71.7L459.6,72.8L458.0,73.2L457.8,74.8L459.1,76.2L458.4,77.7L457.1,78.7L455.5,78.2L455.1,80.0L454.0,81.4L452.5,82.2L450.8,82.6L449.1,82.8L447.3,82.3L445.6,81.7L444.0,82.3L442.3,82.7L441.2,84.1L442.1,85.6L442.5,87.2L442.2,90.2L441.1,91.8L439.4,92.9L440.5,94.1L441.5,95.4L443.5,95.1L442.1,96.5L440.7,97.6L440.4,99.3L441.8,100.4L440.8,101.9L441.7,103.5L443.2,102.8L443.2,104.4L445.2,104.7L445.9,106.2L446.4,107.9L447.9,108.7L447.5,110.4L446.8,112.5L448.2,113.4L449.2,114.8L447.4,115.7L445.5,115.9L444.1,116.9L446.6,116.6L448.5,117.1L449.7,118.6L452.7,119.4L454.6,119.0L456.3,117.5L458.4,117.1L461.1,117.9L462.7,119.2L462.8,121.0L464.5,121.8L466.6,124.9L467.7,126.3L467.7,128.8L469.7,130.8L469.8,133.0L467.9,134.7L466.4,135.5L465.2,136.6L464.6,138.1L465.3,139.6L465.9,141.1L466.2,142.8L466.8,144.5L467.1,146.2L468.7,147.3L469.6,150.2L470.6,151.7L472.3,153.1L474.0,153.7L475.3,154.9L476.2,156.6L476.7,158.2L477.6,160.2L479.4,160.3L481.0,160.7L482.3,159.5L484.2,158.4L485.9,158.2L488.0,158.2L488.8,156.8L490.9,156.9L491.5,155.2L491.9,153.3L493.5,152.2L495.1,151.7L496.8,150.6L498.6,150.6L500.4,150.0L500.5,148.2L502.7,148.7ZM489.4,78.2L489.9,76.3L489.3,74.5L487.6,73.2L486.1,71.7L484.4,71.4L483.1,72.8L481.5,74.4L479.9,73.7L479.4,71.6L479.2,70.0L478.4,68.3L479.5,66.1L481.1,66.0L482.6,64.9L483.5,63.3L483.4,61.4L483.7,59.1L483.2,57.0L482.1,54.8L480.8,53.4L479.5,52.2L477.6,51.2L475.8,51.0L474.2,51.0L472.3,49.8L472.5,48.2L472.8,46.5L473.9,45.2L474.0,43.3L475.2,42.0L476.3,40.6L477.5,39.4L478.9,38.4L480.0,36.3L481.4,35.0L482.4,33.6L484.4,33.6L486.1,33.4L487.2,32.2L487.9,30.1L489.7,29.9L491.1,29.0L492.0,27.3L493.3,26.2L494.3,24.6L495.5,23.2L496.9,24.5L497.8,26.0L499.4,26.8L501.2,27.0L501.2,28.6L500.7,30.3L501.2,31.9L499.9,33.4L501.1,34.5L502.8,35.0L503.2,36.7L503.6,38.3L504.3,39.8L505.4,41.2L506.3,42.6L506.6,44.2L505.4,45.7L504.3,47.6L505.2,49.1L506.8,49.5L508.5,50.1L510.0,51.6L511.1,52.9L511.9,54.7L510.9,56.4L510.1,58.1L509.4,59.7L510.1,61.2L510.9,62.6L509.5,63.5L509.7,65.7L511.0,67.0L513.0,67.7L514.6,68.7L516.2,69.7L517.9,69.7L519.4,69.0L520.5,70.2L518.9,70.8L516.9,70.7L515.3,70.6L513.6,70.9L512.1,71.8L510.6,72.4L509.1,71.8L507.5,71.5L506.1,72.6L504.8,73.6L504.4,75.4L505.5,76.7L504.9,78.3L505.8,80.0L505.5,82.0L506.6,83.5L508.5,83.7L510.0,84.8L508.2,85.8L506.6,86.4L505.0,86.8L503.5,86.2L501.8,86.0L500.1,85.5L498.4,86.1L496.4,86.0L495.5,84.1L494.5,82.3L494.6,80.7L492.6,81.1L491.0,80.1L490.6,78.5L489.4,78.2Z"},{"n":"台南市","d":"M256.4,503.4L254.9,502.8L253.3,501.9L251.7,501.4L250.0,501.4L249.3,499.6L251.0,498.8L251.3,497.2L250.1,495.8L248.6,495.2L247.0,494.7L245.4,494.5L244.7,492.6L246.2,491.4L248.0,490.8L247.5,488.8L245.8,488.7L244.4,489.7L242.8,489.4L242.4,487.7L241.0,486.9L239.4,486.2L238.0,485.3L236.5,484.6L235.1,483.8L233.5,483.7L232.4,485.0L230.5,485.3L228.8,484.3L227.2,483.8L225.7,484.5L223.4,485.3L221.3,485.9L219.2,486.1L215.5,486.3L213.1,486.6L211.6,487.4L210.7,488.8L209.6,490.3L207.1,490.9L205.7,489.9L204.1,490.4L203.9,492.4L202.4,493.1L199.8,493.2L198.4,494.8L197.6,496.6L198.0,498.4L197.3,500.0L195.7,499.9L194.5,498.7L193.0,499.5L192.2,501.0L193.8,501.0L192.7,503.0L191.4,504.3L189.4,505.0L187.5,505.5L186.2,506.5L185.4,508.0L184.5,509.6L183.9,511.6L182.7,513.4L181.2,514.3L179.2,514.6L177.6,513.7L175.9,512.3L174.5,513.1L175.3,514.7L173.5,514.7L172.1,513.8L171.5,512.2L170.6,510.8L169.0,509.8L167.4,509.6L165.7,508.6L165.4,506.9L162.9,505.1L160.8,503.7L158.6,502.0L157.2,503.5L157.3,505.8L157.3,507.5L156.8,509.6L155.6,511.0L154.1,512.1L153.0,513.3L153.1,515.2L153.1,517.3L152.9,519.1L152.7,521.1L152.4,522.7L151.8,524.6L151.1,526.2L149.8,527.8L149.7,529.7L149.9,531.3L149.7,533.6L149.4,535.5L149.0,537.2L147.8,539.5L147.2,541.1L146.7,542.7L145.8,544.7L145.0,546.5L144.4,548.4L144.0,550.9L143.7,553.6L142.9,555.3L143.4,556.9L141.7,557.6L140.6,558.8L139.6,560.7L138.7,562.7L138.4,564.3L137.9,566.5L137.4,568.2L136.9,570.0L136.7,571.6L138.4,571.7L140.2,572.4L141.2,574.0L142.1,575.7L143.1,577.0L144.7,577.9L146.3,578.6L148.2,579.3L149.7,580.1L152.5,581.7L154.8,583.3L156.3,584.3L158.0,585.8L159.5,587.1L160.7,588.2L162.0,589.3L163.5,590.2L164.6,591.9L165.6,593.2L167.2,595.1L167.9,596.6L166.8,598.0L168.5,598.2L169.6,599.8L170.7,602.1L171.1,603.7L171.3,605.4L171.4,607.1L171.2,608.9L171.1,610.8L173.2,610.5L174.7,609.5L176.3,609.8L177.7,610.8L179.9,611.7L181.6,612.4L183.4,610.9L184.7,612.7L186.7,613.8L188.5,615.4L190.0,616.4L190.7,614.9L192.3,615.0L193.7,615.8L195.3,616.1L195.6,614.0L197.2,613.8L199.3,614.2L201.7,614.9L204.1,615.0L205.4,616.3L206.5,614.9L207.6,616.4L208.5,617.8L210.6,617.8L212.4,617.4L213.9,616.6L215.3,615.6L216.4,614.2L217.8,613.4L217.8,611.8L219.1,610.8L220.5,610.0L222.3,609.5L224.0,609.4L225.3,610.4L226.5,611.9L228.1,611.1L229.0,609.5L229.7,608.0L230.3,606.5L231.2,604.7L231.8,602.7L232.3,600.8L233.2,599.3L233.8,597.7L234.5,596.2L235.8,595.1L237.5,594.5L237.2,592.8L239.0,591.9L238.8,590.2L238.8,588.6L240.7,588.9L242.3,588.7L243.6,587.6L244.0,585.8L245.5,584.5L247.0,583.6L248.4,582.7L249.6,581.5L251.1,580.0L252.7,578.3L253.6,576.9L254.8,575.7L256.5,574.9L257.6,573.7L259.2,572.8L260.7,572.2L261.9,571.0L262.8,569.6L264.3,568.1L265.5,566.6L266.1,565.1L266.9,563.5L267.9,561.9L268.9,560.6L269.2,558.9L269.4,557.3L270.6,555.8L271.3,554.1L272.1,552.7L273.6,551.6L274.8,550.3L275.4,548.8L276.9,547.9L278.2,546.6L278.7,545.0L280.4,544.8L280.9,543.1L280.8,541.5L281.2,539.6L282.0,538.1L282.8,536.6L284.4,535.4L285.1,533.9L284.7,532.2L283.2,531.6L281.4,531.5L279.9,530.9L278.1,531.1L276.5,531.8L274.9,532.2L273.3,531.7L271.6,531.2L271.1,529.4L269.6,530.0L268.9,531.7L267.7,533.2L266.8,534.6L265.4,533.8L263.7,533.0L262.0,534.0L260.2,533.0L258.7,531.5L257.1,531.0L255.7,530.2L254.1,529.8L253.0,528.6L254.4,527.2L255.6,525.7L255.6,524.0L255.1,522.4L254.1,520.9L253.6,519.3L253.7,517.5L253.6,515.9L254.5,514.3L254.3,512.7L253.9,511.1L253.9,509.4L255.4,508.4L256.4,507.1L257.9,505.6L257.1,504.2L256.4,503.4Z"},{"n":"桃園市","d":"M459.9,181.7L460.8,180.3L462.1,179.2L463.9,179.2L465.3,178.3L466.2,176.7L466.9,175.1L467.3,173.3L468.0,171.8L469.4,170.3L469.7,168.6L470.8,167.1L470.3,165.4L470.7,163.6L472.0,162.2L473.0,160.8L474.8,161.0L477.1,160.6L476.7,158.8L476.2,156.6L476.4,154.9L474.7,154.5L473.2,153.3L471.3,152.6L470.5,150.8L468.8,148.0L467.6,146.6L466.8,144.5L466.2,142.8L465.9,141.1L465.3,139.6L464.6,138.1L465.2,136.6L466.4,135.5L467.9,134.7L469.8,133.0L470.8,130.6L468.0,129.5L467.7,126.3L466.6,124.9L464.9,123.2L463.0,121.8L462.3,120.1L461.4,118.4L459.7,117.2L457.6,117.1L455.6,117.9L453.9,119.5L450.7,118.6L448.5,117.1L446.6,116.6L445.0,117.3L446.6,115.5L448.2,115.4L448.2,113.4L446.8,112.5L446.4,110.9L448.1,110.2L447.5,108.2L446.3,107.0L445.3,105.6L443.5,104.9L443.5,103.0L441.9,103.8L440.5,102.7L441.7,101.2L440.7,99.4L440.7,97.6L442.1,96.5L443.7,96.4L445.0,95.4L442.9,95.2L440.8,95.6L440.0,93.9L441.1,91.8L442.8,91.3L442.2,88.5L442.4,86.3L442.3,84.6L442.0,82.9L443.6,82.6L445.5,82.0L447.3,82.3L449.1,82.8L450.8,82.6L452.5,82.2L454.0,81.4L455.6,80.5L455.1,78.9L456.7,78.8L458.2,77.8L459.6,76.9L458.8,75.3L457.1,74.3L458.2,73.0L459.9,72.7L461.5,72.5L460.2,71.1L459.1,69.6L458.8,67.9L457.6,66.8L459.0,66.0L457.9,64.6L456.8,63.4L455.6,62.2L454.7,60.6L452.9,60.2L451.3,60.4L449.2,60.5L447.8,59.5L447.2,57.9L445.4,58.5L446.1,57.0L445.3,55.6L443.4,54.9L442.1,53.8L440.1,53.3L438.2,52.5L436.6,52.4L435.6,50.9L434.0,50.9L432.8,49.8L431.9,48.4L430.9,47.0L428.9,46.5L427.2,45.9L425.5,46.0L423.9,46.4L422.1,46.5L419.7,47.6L417.8,48.2L415.7,48.8L413.9,49.8L412.3,50.3L410.8,51.1L409.4,52.3L406.5,53.2L405.0,54.2L403.3,55.3L401.1,56.0L399.4,56.5L396.8,57.2L395.0,57.5L393.5,58.2L391.4,59.0L389.4,59.8L388.1,60.9L386.4,61.9L385.1,63.2L382.7,64.4L380.9,64.7L379.0,65.4L377.3,66.8L376.2,68.4L374.4,69.9L373.2,71.4L371.9,73.5L370.9,74.8L370.2,76.3L369.8,78.4L368.4,79.6L368.6,81.3L368.3,83.6L366.8,85.5L365.6,87.9L364.1,89.1L362.8,90.5L362.1,92.4L363.7,93.6L365.2,92.7L367.0,91.8L368.8,91.4L370.5,92.5L372.1,92.1L374.0,91.4L375.8,91.5L377.2,92.6L378.9,93.6L379.6,95.2L380.1,97.3L379.5,99.3L379.7,101.0L381.8,102.0L383.7,103.0L385.4,103.1L386.8,104.0L389.5,104.1L391.4,103.4L391.8,105.2L392.1,107.0L394.4,107.9L396.2,108.1L397.8,107.7L399.6,107.9L401.4,107.9L402.8,109.2L403.2,111.4L403.5,113.2L402.3,114.7L401.5,116.6L403.1,118.6L404.6,119.3L406.4,119.9L407.1,121.5L409.9,122.8L411.7,123.9L413.8,125.1L416.0,125.4L417.4,127.6L422.6,126.2L423.5,129.1L426.4,130.0L426.1,132.3L427.6,133.2L429.1,134.1L430.6,135.9L432.2,136.0L434.1,136.7L435.5,137.9L436.9,139.5L437.0,141.2L436.4,142.8L435.9,144.4L435.5,146.2L437.1,147.3L437.6,148.9L437.3,150.7L436.6,152.6L435.9,154.4L436.8,155.8L438.9,154.6L440.8,155.2L442.7,156.2L443.8,157.6L444.8,159.1L445.1,160.9L445.0,162.5L447.1,162.3L448.3,163.5L448.2,165.2L448.2,167.1L448.4,168.9L449.3,170.7L451.2,171.5L450.8,173.3L449.9,174.9L450.2,176.6L450.9,178.1L451.6,179.9L452.9,181.2L455.3,182.3L457.2,183.1L458.6,182.3L459.9,181.7Z"},{"n":"嘉義市","d":"M227.2,459.7L225.3,460.9L223.1,461.3L222.6,462.9L223.7,464.2L223.5,465.8L224.9,466.9L224.9,468.8L223.7,470.0L225.1,470.8L227.0,470.5L228.6,471.5L230.2,471.3L231.9,471.4L232.1,473.6L233.4,474.6L233.9,476.3L235.7,476.1L237.5,475.5L238.4,473.7L239.9,472.9L241.2,471.2L242.8,471.1L244.2,472.2L246.1,473.6L247.6,473.0L248.7,471.5L249.0,469.9L250.3,468.7L249.7,466.9L249.4,465.3L248.6,463.8L246.7,463.6L244.8,462.5L244.9,460.8L243.0,459.9L241.7,460.9L240.1,461.6L239.2,459.6L238.3,458.1L236.7,457.0L235.1,456.8L234.3,458.2L233.0,457.0L233.0,458.9L231.3,459.1L229.7,459.9L228.2,460.7L227.2,459.7Z"},{"n":"新竹市","d":"M372.1,139.3L373.5,138.3L372.8,136.4L372.9,134.3L371.4,132.3L370.8,130.1L372.0,128.7L370.2,126.6L368.6,125.2L367.0,123.6L363.9,122.3L362.6,121.0L360.8,120.9L358.4,120.1L356.0,119.9L353.8,118.3L352.8,116.6L351.0,115.1L348.6,114.4L346.6,115.0L346.4,116.7L345.6,119.3L344.1,121.2L342.6,124.3L342.0,126.6L341.8,128.3L340.9,130.6L341.1,133.9L341.0,136.4L342.2,137.5L340.8,139.1L339.3,141.1L338.3,142.4L336.8,144.3L338.3,145.6L340.6,146.0L343.1,144.8L344.5,143.6L345.5,145.8L345.9,147.9L345.9,149.6L347.6,149.9L349.3,150.1L351.0,150.9L351.6,149.4L351.7,147.7L352.6,146.3L352.5,144.6L352.9,142.9L354.6,142.7L356.2,142.4L357.5,139.9L359.0,137.4L360.7,138.0L361.9,136.8L362.9,135.3L364.4,133.5L366.9,134.7L369.2,135.9L370.0,137.5L370.7,139.6L372.1,139.3Z"}],"comp":"M-15.3,634.2L-15.3,825.0L116.8,825.0L116.8,634.2L-15.3,634.2M-15.3,24.9L-15.3,201.1L160.8,201.1L160.8,24.9L-15.3,24.9M160.8,274.5L160.8,230.5L116.8,230.5L-15.3,230.5L-15.3,318.5L160.8,318.5L160.8,274.5L116.8,274.5L116.8,230.5","S":[{"c":"基隆市","t":"七堵區","n":"基隆市寵物銀行","a":"基隆市七堵區大華三路45-12號","p":"02-2456-0148","x":524.9,"y":49},{"c":"臺北市","t":"內湖區","n":"臺北市動物之家","a":"臺北市內湖區潭美街852號","p":"02-8791-3254","x":503.6,"y":54.6},{"c":"新北市","t":"板橋區","n":"新北市板橋區公立動物之家","a":"新北市板橋區板城路28-1號","p":"02-8966-2158","x":471.3,"y":76.5},{"c":"新北市","t":"新店區","n":"新北市新店區公立動物之家","a":"新北市新店區安泰路235號","p":"02-2215-9462","x":489.9,"y":93.7},{"c":"新北市","t":"中和區","n":"新北市中和區公立動物之家","a":"新北市中和區興南路三段100號","p":"02-8668-5547","x":481.5,"y":79.3},{"c":"新北市","t":"淡水區","n":"新北市淡水區公立動物之家","a":"新北市淡水區下圭柔山91-3號","p":"02-2626-7558","x":475.2,"y":27.8},{"c":"新北市","t":"瑞芳區","n":"新北市瑞芳區公立動物之家","a":"新北市瑞芳區八分寮路","p":"02-2406-3481","x":559.2,"y":49.8},{"c":"新北市","t":"五股區","n":"新北市五股區公立動物之家","a":"新北市五股區外寮路9-9號","p":"02-8292-5265","x":465.6,"y":53.1},{"c":"新北市","t":"八里區","n":"新北市八里區公立動物之家","a":"新北市八里區長坑道路36號","p":"02-2619-4428","x":460.4,"y":47},{"c":"新北市","t":"三芝區","n":"新北市三芝區公立動物之家","a":"新北市三芝區青山路","p":"02-2636-5436","x":484.7,"y":16.7},{"c":"桃園市","t":"新屋區","n":"桃園市動物保護教育園區","a":"桃園市新屋區永興里","p":"03-486-1760","x":383,"y":84.7},{"c":"新竹市","t":"北區","n":"新竹市動物保護教育園區","a":"新竹市北區海濱路250號","p":"03-536-8329","x":354.4,"y":122.4},{"c":"新竹縣","t":"竹北市","n":"新竹縣動物保護教育園區","a":"新竹縣竹北市","p":"03-551-9548","x":364.3,"y":117.4},{"c":"苗栗縣","t":"銅鑼鄉","n":"苗栗縣生態保育教育中心","a":"苗栗縣銅鑼鄉朝陽村朝北55-1號","p":"037-558-228","x":319.3,"y":216.5},{"c":"臺中市","t":"南屯區","n":"臺中市動物之家南屯園區","a":"臺中市南屯區中台路601號","p":"04-2385-0976","x":275.9,"y":296.4},{"c":"臺中市","t":"后里區","n":"臺中市動物之家后里園區","a":"臺中市后里區堤防路370號","p":"04-2558-8024","x":300.8,"y":252.6},{"c":"彰化縣","t":"員林市","n":"彰化縣流浪狗中途之家","a":"彰化縣員林市大峰里阿寶巷426號","p":"04-859-0638","x":272.1,"y":343.7},{"c":"南投縣","t":"南投市","n":"南投縣公立動物收容所","a":"南投縣南投市嶺興路36-1號","p":"049-222-5440","x":289.8,"y":352.7},{"c":"雲林縣","t":"斗六市","n":"雲林縣流浪動物收容所","a":"雲林縣斗六市雲林路二段517號","p":"05-552-3300","x":265.5,"y":411.7},{"c":"嘉義縣","t":"民雄鄉","n":"嘉義縣流浪犬中途之家","a":"嘉義縣民雄鄉松山村後山仔37-1號","p":"05-272-4721","x":237.1,"y":451.4},{"c":"嘉義市","t":"東區","n":"嘉義市動物保護教育園區","a":"嘉義市東區彌陀路","p":"05-216-8661","x":241.9,"y":465.8},{"c":"臺南市","t":"南區","n":"臺南市動物之家灣裡站","a":"臺南市南區萬年路580巷92號","p":"06-296-4439","x":174.4,"y":602.9},{"c":"臺南市","t":"善化區","n":"臺南市動物之家善化站","a":"臺南市善化區東昌里東勢寮1-19號","p":"06-583-2399","x":199.2,"y":556.3},{"c":"高雄市","t":"鼓山區","n":"高雄市壽山動物保護教育園區","a":"高雄市鼓山區萬壽路350號","p":"07-551-9059","x":195,"y":679.9},{"c":"高雄市","t":"燕巢區","n":"高雄市燕巢動物保護關愛園區","a":"高雄市燕巢區師大路98號","p":"07-605-1002","x":216.5,"y":642.5},{"c":"屏東縣","t":"內埔鄉","n":"屏東縣動物之家","a":"屏東縣內埔鄉學府路1號","p":"08-774-0588","x":268.9,"y":682.8},{"c":"宜蘭縣","t":"五結鄉","n":"宜蘭縣流浪動物中途之家","a":"宜蘭縣五結鄉利寶路60號","p":"03-960-2350","x":552.2,"y":157.3},{"c":"花蓮縣","t":"吉安鄉","n":"花蓮縣流浪犬中途之家","a":"花蓮縣吉安鄉南濱路一段599號","p":"03-842-1452","x":498,"y":342.5},{"c":"臺東縣","t":"臺東市","n":"臺東縣動物收容中心","a":"臺東縣臺東市中華路四段","p":"089-362-011","x":395.4,"y":648.6},{"c":"澎湖縣","t":"馬公市","n":"澎湖縣流浪動物收容中心","a":"澎湖縣馬公市烏崁里260號","p":"06-921-3559","x":61.4,"y":711.7},{"c":"金門縣","t":"金湖鎮","n":"金門縣動物收容中心","a":"金門縣金湖鎮裕民農莊20號","p":"082-336-625","x":83.2,"y":275.4},{"c":"連江縣","t":"南竿鄉","n":"連江縣流浪犬收容中心","a":"連江縣南竿鄉復興村","p":"0836-25003","x":7.3,"y":113.2}]};
const ncty=x=>x.replace(/臺/g,"台");
function realAdopt(back){let cty="台中市";try{cty=localStorage.getItem("aima_cty")||"台中市"}catch(e){}
  const M=TWMAP;const svg=`<svg id="twsvg" viewBox="0 0 ${M.W} ${M.H}" style="width:100%;display:block;border-radius:16px;background:#d6e8f0;touch-action:manipulation">${M.C.map(c=>`<path data-c="${c.n}" d="${c.d}" fill="#f3ead6" stroke="#b9a98d" stroke-width="1.2"/>`).join("")}<path d="${M.comp}" fill="none" stroke="#8aa" stroke-dasharray="5 4"/>${M.S.map((p,i)=>`<g data-i="${i}" style="cursor:pointer"><circle cx="${p.x}" cy="${p.y}" r="16" fill="transparent"/><circle cx="${p.x}" cy="${p.y}" r="7" fill="#d2533c" stroke="#fff" stroke-width="2.5"/></g>`).join("")}</svg>`;
  show(`<h2>全台公立收容所</h2><p class="sub">遊戲是假的，但牠們是真的。全台 ${M.S.length} 間公立收容所，每一間都有孩子在等一個家。點地圖上的縣市看看。</p>${svg}<div id="shl" style="display:grid;gap:8px;text-align:left"></div><div id="real" class="real"></div>
   <a class="big alt" href="${PETGOV}" target="_blank" rel="noopener" style="text-decoration:none">全國動物收容管理系統</a>
   <p class="sub" style="font-size:12px">收容所資料整理自公開資訊，地圖位置為所在鄉鎮的大概位置；地址、電話與開放時間可能異動，前往前請先致電確認。</p>
   <button class="big" type="button" id="rb">${back?"回到狗園":"關閉"}</button>`,e=>{if(e.target.id==="rb"){if(back)back();else hide();return}
     const g2=e.target.closest("[data-i]");if(g2){const p=M.S[+g2.dataset.i];sel(ncty(p.c),+g2.dataset.i);return}const pc=e.target.closest("[data-c]");if(pc)sel(pc.dataset.c)});
  function sel(c,hi){cty=c;try{localStorage.setItem("aima_cty",c)}catch(x){}
    document.querySelectorAll("#twsvg path[data-c]").forEach(p=>p.setAttribute("fill",p.dataset.c===c?"#f6c97a":"#f3ead6"));
    const L=M.S.map((p,i)=>[p,i]).filter(([p])=>ncty(p.c)===c);
    $("#shl").innerHTML=`<h3 style="margin:4px 0 0;color:var(--ink)">${c}・${L.length} 間</h3>`+(L.length?L.map(([p,i])=>`<div class="ra" style="padding:10px;${i===hi?"border-color:#d2533c;box-shadow:0 0 0 2px #d2533c33":""}"><b style="font-size:15px">${p.n}</b><small>${p.a}</small><div style="display:flex;gap:12px;flex-wrap:wrap"><a href="tel:${p.p.replace(/[^0-9]/g,"")}">📞 ${p.p}</a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n)}" target="_blank" rel="noopener">📍 Google 地圖</a></div></div>`).join(""):`<p class="sub">這個縣市沒有登錄的公立收容所。</p>`);
    const code=(AREA.find(([k,n])=>ncty(n)===c)||[])[0];const el=$("#real");el.innerHTML="";if(!code)return;
    const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),8000);
    fetch(`https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&animal_area_pkid=${code}&animal_status=OPEN&$top=40`,{signal:ctl.signal}).then(r=>r.json()).then(d=>{clearTimeout(to);if(cty!==c)return;const A=(Array.isArray(d)?d:[]).filter(x=>x.album_file).sort(()=>R()-.5).slice(0,8);const el2=$("#real");if(!el2||!A.length)return;
      el2.innerHTML=`<h3 style="grid-column:1/3;margin:6px 0 0;color:var(--ink);text-align:left">現在在${c}等家的孩子</h3>`+A.map(x=>`<div class="ra"><img src="${String(x.album_file).replace(/^http:/,"https:")}" alt="" loading="lazy" onerror="this.parentNode.remove()"><b>${x.animal_kind==="貓"?"🐱":"🐶"} ${x.animal_sex==="M"?"男生":x.animal_sex==="F"?"女生":""}${x.animal_colour?"・"+x.animal_colour:""}</b><small>${x.shelter_name||""}</small></div>`).join("")}).catch(()=>clearTimeout(to))}
  sel(cty)}

/* ---------- 我家的狗：大頭 + 毛色 ---------- */
let FACE=null,TINT=null,DOGN="阿聰";const TINTED={};
function setTint(c){TINT=c;for(const k in TINTED)delete TINTED[k]}
function tinted(anim){if(!TINT)return IMG[anim];if(TINTED[anim])return TINTED[anim];const im=IMG[anim];if(!im.complete||!im.width)return im;const c=document.createElement("canvas");c.width=im.width;c.height=im.height;const q=c.getContext("2d");q.drawImage(im,0,0);q.globalCompositeOperation="multiply";q.fillStyle=TINT;q.fillRect(0,0,c.width,c.height);q.globalCompositeOperation="destination-in";q.drawImage(im,0,0);TINTED[anim]=c;return c}
function faceOn(q,anim,f,S,flip){const a=(ANCH[anim]||[])[f];if(!a||!FACE)return;const k=S/256,r=a[2]*k*1.35;q.save();q.translate((a[0]-128)*k,(a[1]-256*472/512)*k);if(a[3])q.rotate(a[3]);if(flip)q.scale(-1,1);
  q.fillStyle="#fff";q.beginPath();q.arc(0,0,r+Math.max(1.5,r*.06),0,7);q.fill();q.beginPath();q.arc(0,0,r,0,7);q.clip();q.drawImage(FACE,-r,-r,2*r,2*r);q.restore()}
function loadSaved(){try{const s=JSON.parse(localStorage.getItem("adopt_mydog")||"null");if(s&&s.face){const im=new Image();im.onload=()=>{FACE=im;DOGN=s.name||"我家的狗";setTint(s.tint||null);markMy()};im.src=s.face}}catch(e){}}
function markMy(){const tp=$("#title p");if(tp)tp.innerHTML=`你是一隻狗，叫${escapeText(DOGN)}。<br>今天是認養會，3 組人類會來給你打分數。<br>乖巧、兇猛、還是尿在拖鞋上——你決定。`;const b=$("#bMy");if(b)b.innerHTML=FACE?`🐶 用「${escapeText(DOGN)}」玩（點這裡換）`:"📷 用我家的狗玩"}
function clearMy(){FACE=null;DOGN="阿聰";setTint(null);try{localStorage.removeItem("adopt_mydog")}catch(e){}markMy()}
function myDog(done){let img=null,sx=0,sy=0,zs=1,tint="auto",auto="#d9b38c";const P=280,RR=112;
  show(`<h2>用我家的狗玩</h2><p class="sub">上傳一張狗狗正面的照片，把臉移到圓圈裡。<br>照片只在你的手機裡處理，不會上傳。</p>
   <label class="big alt" style="cursor:pointer">📷 選照片<input id="fi" type="file" accept="image/*" hidden></label>
   <canvas id="fc" width="${P*2}" height="${P*2}" style="width:${P}px;height:${P}px;justify-self:center;border-radius:16px;background:#eee;touch-action:none"></canvas>
   <input id="zm" type="range" min="0.2" max="4" step="0.01" value="1" style="width:100%">
   <div class="chips" id="tc"><span>身體毛色</span>${[["auto","自動"],["none","原色"],["#3a3330","黑"],["#e0b16e","黃"],["#a0683c","棕"],["#a8a8a8","灰"]].map(([v,n])=>`<button type="button" data-t="${v}" class="${v==="auto"?"on":""}">${n}</button>`).join("")}</div>
   <input id="dn" maxlength="8" placeholder="狗狗名字" value="${DOGN==="阿聰"?"":escapeText(DOGN)}" style="font:700 17px var(--sans);padding:12px;border-radius:12px;border:1px solid var(--line);text-align:center">
   <canvas id="pv" width="300" height="200" style="width:210px;justify-self:center"></canvas>
   <button class="big" id="ok" type="button" disabled>就是牠了</button>${FACE?`<button class="big alt" id="rs" type="button">改回阿聰</button>`:""}<button class="big alt" id="cx" type="button">取消</button>`,e=>{
     if(e.target.id==="cx"){hide();done&&done(false)}if(e.target.id==="rs"){clearMy();hide();done&&done(false)}
     const tb=e.target.closest("[data-t]");if(tb){tint=tb.dataset.t;document.querySelectorAll("#tc button").forEach(b=>b.classList.toggle("on",b===tb));build()}
     if(e.target.id==="ok"){build();const nm=($("#dn").value||"").trim()||"我家的狗";DOGN=nm;const url=FACE.toDataURL("image/jpeg",.85);const im=new Image();im.src=url;FACE=im;try{localStorage.setItem("adopt_mydog",JSON.stringify({face:url,name:nm,tint:TINT}))}catch(x){}markMy();hide();done&&done(true)}});
  const fc=$("#fc"),q=fc.getContext("2d");let stop=false;
  function draw(){q.clearRect(0,0,P*2,P*2);if(img){q.save();q.translate(P+sx*2,P+sy*2);q.scale(zs*2,zs*2);q.drawImage(img,-img.width/2,-img.height/2);q.restore()}
    q.fillStyle="#0008";q.beginPath();q.rect(0,0,P*2,P*2);q.moveTo(P+RR*2,P);q.arc(P,P,RR*2,0,Math.PI*2,true);q.fill();q.strokeStyle="#fff";q.lineWidth=4;q.setLineDash([12,8]);q.beginPath();q.arc(P,P,RR*2,0,7);q.stroke();q.setLineDash([]);
    if(!img){q.fillStyle="#666";q.font="700 28px sans-serif";q.textAlign="center";q.fillText("先選一張照片",P,P+10)}}
  function build(){if(!img)return;const c=document.createElement("canvas");c.width=c.height=200;const x=c.getContext("2d");x.beginPath();x.arc(100,100,100,0,7);x.clip();const k=100/RR;x.translate(100+sx*k,100+sy*k);x.scale(zs*k,zs*k);x.drawImage(img,-img.width/2,-img.height/2);
    // 自動毛色：取外圈平均
    const d=x.getImageData(0,0,200,200).data;const px=[];for(let yy=0;yy<200;yy+=3)for(let xx=0;xx<200;xx+=3){if(Math.hypot(xx-100,yy-100)<70){const i=(yy*200+xx)*4;px.push([d[i],d[i+1],d[i+2],d[i]+d[i+1]+d[i+2]])}}
    if(px.length){px.sort((a,b)=>a[3]-b[3]);const m=px.slice(Math.floor(px.length*.35),Math.floor(px.length*.9));const L=j=>Math.round(m.reduce((s,p)=>s+p[j],0)/m.length*.8+255*.2);auto=`rgb(${L(0)},${L(1)},${L(2)})`}
    FACE=c;setTint(tint==="none"?null:tint==="auto"?auto:tint);$("#ok").disabled=false}
  $("#fi").onchange=ev=>{const f=ev.target.files[0];if(!f)return;const u=URL.createObjectURL(f);const im=new Image();im.onload=()=>{img=im;zs=(RR*2.2)/Math.min(im.width,im.height);sx=sy=0;$("#zm").min=zs*.3;$("#zm").max=zs*5;$("#zm").value=zs;draw();build()};im.src=u};
  $("#zm").oninput=e=>{zs=+e.target.value;draw();build()};
  let pts=new Map(),pd0=0,z0=1;fc.addEventListener("pointerdown",e=>{fc.setPointerCapture(e.pointerId);pts.set(e.pointerId,[e.clientX,e.clientY]);if(pts.size===2){const[a,b]=[...pts.values()];pd0=Math.hypot(a[0]-b[0],a[1]-b[1]);z0=zs}});
  fc.addEventListener("pointermove",e=>{if(!pts.has(e.pointerId)||!img)return;const p=pts.get(e.pointerId);if(pts.size===1){const gain=P/fc.getBoundingClientRect().width;sx+=(e.clientX-p[0])*gain;sy+=(e.clientY-p[1])*gain}pts.set(e.pointerId,[e.clientX,e.clientY]);if(pts.size===2){const[a,b]=[...pts.values()];zs=z0*Math.hypot(a[0]-b[0],a[1]-b[1])/pd0;$("#zm").value=zs}draw()});
  const up=e=>{pts.delete(e.pointerId);if(img)build()};fc.addEventListener("pointerup",up);fc.addEventListener("pointercancel",up);
  fc.addEventListener("wheel",e=>{e.preventDefault();zs*=e.deltaY<0?1.06:.94;$("#zm").value=zs;draw();build()},{passive:false});
  draw();const pv=$("#pv").getContext("2d");let t=0;const seq=["wag","bark","roll","sniff"];(function f(){if(!$("#pv"))return;t+=1/60;pv.clearRect(0,0,300,200);dog(pv,seq[Math.floor(t/1.5)%4],150,190,190,t);requestAnimationFrame(f)})()}

/* ================= 領養日 ================= */
const ANIM={idle:[4,3],walk:[6,8],run:[6,11],sniff:[4,5],bark:[3,5],eat:[4,5],roll:[1,0],nudge:[2,5],paw:[1,0],lie:[1,0],lie_flat:[1,0],excited:[4,6],wag:[4,6],sad:[1,0],scared:[1,0],sleep:[2,1],sofa:[1,0],car_window:[1,0],head_tilt:[1,0],look_up:[1,0],lean:[1,0],sit:[1,0]};
Object.assign(ANIM,{"idle":[4,4,true],"walk":[6,8,true],"nudge":[2,3,false],"bark_angry":[4,7,true],"pee":[4,3,false],"bite_tug":[4,4,false],"rub":[4,4,true],"belly_up":[4,4,true],"sploot":[3,2,false],"snap":[1,0,false],"sit":[1,0,false],"head_tilt":[1,0,false],"sad":[1,0,false],"scared":[1,0,false],"sleep":[2,1,true],"lie_flat":[1,0,false],"look_up":[1,0,false],"car_window":[1,0,false],"portrait":[1,0,false],"portrait_side":[1,0,false],"sniff":[1,0,false],"run":[6,12,true],"carry_walk":[6,8,true],"wag":[4,4,true],"bark":[4,7,true],"eat":[1,0,false],"roll":[4,4,true],"paw":[4,4,true],"lie":[3,2,false],"excited":[4,4,true],"sofa":[1,0,false],"lean":[4,4,true]});Object.assign(ANCH,{"idle":[[179.5,94.5,21,0],[176,96.5,21,0],[176.5,97,21,0],[176,95,21,0]],"walk":[[180,107,21,0],[181,109,21,0],[183.5,110,21,0],[181,109.5,21,0],[180.5,103.5,21,0],[181,106,21,0]],"nudge":[[183.5,111,21,0],[176.5,106.5,21,0]],"bark_angry":[[180,94.5,21,0],[178,100,21,0],[177,116,21,0],[175.5,95,21,0]],"pee":[[181,96,21,0],[183,94.5,21,0],[173.5,94.5,21,0],[180,96.5,21,0]],"bite_tug":[[181,104.5,21,0],[183.5,111,21,0],[183.5,112.5,21,0],[181,95,21,0]],"rub":[[175,94.5,21,0],[174.5,96,21,0],[174,96.5,21,0],[172.5,96,21,0]],"belly_up":[[188.5,139.5,21,0],[184.5,138.5,21,0],[186,133,21,0],[184.5,136,21,0]],"sploot":[[188,177,21,0],[188.5,176.5,21,0],[188.5,176.5,21,0]],"snap":[[183.5,127,21,0]],"sit":[[175.5,94.5,21,0]],"head_tilt":[[169.5,94.5,21,0]],"sad":[[183.5,158,21,0]],"scared":[[183.5,148,21,0]],"sleep":[[182.5,145,21,0],[183.5,145,21,0]],"lie_flat":[[188.5,195,21,0]],"look_up":[[177.5,94.5,21,0]],"car_window":[[183.5,121.5,21,0]],"portrait":[[175,94.5,21,0]],"portrait_side":[[183.5,94.5,21,0]],"sniff":[[188.5,121.5,21,0]],"run":[[180,107,21,0],[181,109,21,0],[183.5,110,21,0],[181,109.5,21,0],[180.5,103.5,21,0],[181,106,21,0]],"carry_walk":[[180,107,21,0],[181,109,21,0],[183.5,110,21,0],[181,109.5,21,0],[180.5,103.5,21,0],[181,106,21,0]],"wag":[[179.5,94.5,21,0],[176,96.5,21,0],[176.5,97,21,0],[176,95,21,0]],"bark":[[180,94.5,21,0],[178,100,21,0],[177,116,21,0],[175.5,95,21,0]],"eat":[[188.5,121.5,21,0]],"roll":[[188.5,139.5,21,0],[184.5,138.5,21,0],[186,133,21,0],[184.5,136,21,0]],"paw":[[179.5,94.5,21,0],[176,96.5,21,0],[176.5,97,21,0],[176,95,21,0]],"lie":[[188,177,21,0],[188.5,176.5,21,0],[188.5,176.5,21,0]],"excited":[[179.5,94.5,21,0],[176,96.5,21,0],[176.5,97,21,0],[176,95,21,0]],"sofa":[[175.5,94.5,21,0]],"lean":[[175,94.5,21,0],[174.5,96,21,0],[174,96.5,21,0],[172.5,96,21,0]]});
const IMG={};let LOADED=0;const NA=Object.keys(ANIM).length;for(const k in ANIM){const im=new Image();im.onload=()=>{++LOADED;assetProgress()};im.onerror=()=>{assetError=true;assetProgress()};im.src=SPR[k];IMG[k]=im}
function dog(q,anim,x,y,S,t,o={}){const im=IMG[anim];if(!im||!im.complete)return;const[n,fps]=ANIM[anim];const f=fps?Math.floor(t*fps)%n:0;q.save();q.translate(x,y);if(o.flip)q.scale(-1,1);if(o.rot)q.rotate(o.rot);if(o.alpha!=null)q.globalAlpha=o.alpha;q.drawImage(tinted(anim),f*256,0,256,256,-S/2,-S*472/512,S,S);if(FACE)faceOn(q,anim,f,S,o.flip);q.restore()}
/* ---------- groups ---------- */
const GROUPS={
 eng:{n:"阿凱",tag:"工程師・住套房",hint:"他戴著降噪耳機，一進來就說：「我想要安靜一點的。」",ppl:[{id:"eng",n:"阿凱",x:290,shirt:"#4a5568",pants:"#2d3748",apron:"#4a5568",hair:"short",glasses:1,phones:1}],
  pref:{calm:2,curious:1,cute:1,affection:1.5,loud:-2.5,mess:-2.5,destroy:-2,bite:-4,funny:0,shy:1,guard:-1,steal:-1.5,cutecrime:0,tsundere:1.5,offender:-1},
  ev:{t:10,txt:"阿凱蹲下來，慢慢伸出手。（撒嬌加倍 5 秒）",k:"crouch"}},
 fam:{n:"林家",tag:"媽媽＋五歲弟弟",hint:"弟弟手上拿著一隻雞腿。媽媽說：「要跟小孩處得來喔。」",ppl:[{id:"mom",n:"媽媽",x:320,shirt:"#e9a0a0",pants:"#6b5a7a",apron:"#e9a0a0",hair:"bob"},{id:"kid",n:"弟弟",x:245,kid:1,shirt:"#f2c14e",pants:"#4f7fb0",apron:"#f2c14e",hair:"kid",holds:"🍗"}],
  pref:{calm:0,curious:.5,cute:2,affection:2,loud:-1,mess:-1.2,destroy:-1.2,bite:-5,funny:1,shy:-1,guard:.5,steal:1,cutecrime:1.5,tsundere:1,offender:-1},
  ev:{t:9,txt:"弟弟的雞腿掉到地上了！",k:"drop"}},
 inf:{n:"Mia",tag:"網紅・粉絲 8 萬",hint:"她一進門就舉起手機：「寶貝們，今天來認養會！」",ppl:[{id:"inf",n:"Mia",x:300,shirt:"#f5c6d6",pants:"#f3f0ea",apron:"#f5c6d6",hair:"long",phone:1}],
  pref:{calm:-2,curious:-.5,cute:2,affection:1,loud:0,mess:1,destroy:1,bite:-2,funny:2.5,shy:-2,guard:0,steal:2,cutecrime:3,tsundere:2,offender:3},
  ev:{t:8,txt:"Mia 開直播了！（5 秒內加倍）",k:"live"}}};
const LN={loud:{eng:"一直吠，我耳機開到最大都聽得到",fam:"叫好大聲，弟弟嚇到",inf:"吠得很有氣勢，可惜收音爆掉"},
 mess:{eng:"在我面前尿尿，我住套房耶",fam:"尿在地上，我臉都綠了",inf:"現場尿尿，觀看數直接衝"},
 destroy:{eng:"咬爛拖鞋，房東會殺了我",fam:"一直咬東西，怕牠咬到小孩",inf:"拆家畫面好療癒"},
 bite:{eng:"牠咬我",fam:"牠咬人。不行，絕對不行",inf:"牠咬我，但我有拍到"},
 cute:{eng:"翻肚的時候我心軟了一秒",fam:"翻肚好可愛，弟弟一直笑",inf:"翻肚這段可以剪成 Reels"},
 affection:{eng:"牠靠過來的時候很安靜，我喜歡",fam:"一直蹭弟弟，好黏",inf:"很親人，跟粉絲互動 OK"},
 calm:{eng:"整場很安靜，理想室友",fam:"太安靜了，弟弟覺得無聊",inf:"一直躺著，完全沒素材"},
 funny:{eng:"……我不懂牠在幹嘛",fam:"好好笑，全家都笑了",inf:"這隻有喜感，有流量"},
 steal:{eng:"搶小孩東西，品行有問題",fam:"搶走弟弟的雞腿，弟弟哭完又笑了",inf:"搶雞腿那段我笑死"},
 shy:{eng:"躲在沙發下面，跟我一樣怕生",fam:"一直躲起來，不親人",inf:"躲在沙發下，鏡頭拍不到"},
 guard:{eng:"很兇，不適合套房",fam:"會對陌生人吠，好像能看家",inf:"有點兇，難駕馭"},
 curious:{eng:"會到處聞，滿聰明的",fam:"到處聞，很好奇",inf:"一直在聞東西，沒看點"},
 cutecrime:{eng:"做錯事馬上翻肚，心機",fam:"做錯事就翻肚，誰捨得罵",inf:"犯錯秒翻肚，這隻懂流量"},
 tsundere:{eng:"先兇我再舔我，傲嬌",fam:"先吠再撒嬌，好難懂",inf:"傲嬌系，粉絲最愛"},
 offender:{eng:"偷完就躲，慣犯",fam:"偷完東西就躲起來，好壞",inf:"偷完就躲，這劇本我給滿分"}};
const SHORT={loud:["好吵","哇大聲"],mess:["好臭！","哈哈尿了"],destroy:["我的拖鞋！","哈哈哈"],bite:["啊！","痛！"],cute:["好可愛","欸～"],affection:["好乖","乖～"],calm:["好安靜","……"],steal:["我的雞腿！","搶走了"],shy:["牠躲起來了","出來啦"],guard:["好兇","好兇喔"],curious:["在聞什麼","嗯？"],funny:["哈哈","？"]};
const ADJ={loud:"大嗓門",mess:"隨地型",destroy:"拆家",bite:"暴走",cute:"翻肚型",affection:"黏人精",calm:"佛系",funny:"諧星",steal:"小偷",shy:"社恐",guard:"看門",curious:"好奇寶寶"};
const NOUN={loud:"傳令兵",mess:"污染源",destroy:"拆除大隊",bite:"鯊魚",cute:"心機王",affection:"抱枕",calm:"室友",funny:"喜劇演員",steal:"慣竊",shy:"沙發精靈",guard:"門神",curious:"偵探"};
const END={inf:{n:"網紅狗",t:"你被 Mia 帶回家。三個月後，你的粉絲比她還多。",an:"excited"},
 eng:{n:"安靜室友",t:"阿凱把你帶回套房。你們一起熬夜，誰也不吵誰。",an:"sofa"},
 fam:{n:"弟弟的哥哥",t:"你被林家帶回家。弟弟每天放學第一件事，是找你。",an:"car_window"},
 ret:{n:"三天退養",t:"帶回家第三天，你又被送回來了。籠子上多了一張紙：「會咬人」。",an:"sad"},
 mill:{n:"繁殖場",t:"沒人要你。一個說自己「很愛狗」的老闆把你買走了。後來，你住在一排疊起來的籠子裡，負責配種。",note:"認養代替購買。寵物店的每一隻，背後可能都有一排這樣的籠子。",an:"lie_flat"},
 shelter:{n:"收容所老面孔",t:"三組人都走了。你回到籠子，等下一場認養會。",an:"lie"}};
const ENDS=["inf","eng","fam","ret","mill","shelter"];
/* ---------- state ---------- */
const cv=$("#cv"),g=cv.getContext("2d");let DPR=1,SC=1,CH=700,lastSize="";
function resize(){const r=$("#app").getBoundingClientRect();const k=r.width+"x"+r.height;if(k===lastSize)return;lastSize=k;DPR=Math.min(2.5,window.devicePixelRatio||1);cv.width=Math.round(r.width*DPR);cv.height=Math.round(r.height*DPR);SC=r.width/400;CH=r.height/SC}
const FT=()=>Math.max(210,CH*.37),FB=()=>CH-Math.max(170,170/SC);
function show(html,onClick){$("#card").innerHTML=petText(html.replace(/阿聰/g,escapeText(DOGN)));$("#ov").hidden=false;$("#card").scrollTop=0;$("#card").onclick=onClick||null}
function hide(){$("#ov").hidden=true}
function toast(t,big){const d=document.createElement("div");d.className="toast"+(big?" big":"");d.textContent=petText(t.replace(/阿聰/g,DOGN));$("#app").appendChild(d);setTimeout(()=>d.remove(),2400)}
let ORDER=[],VI=0,V=null,RUN=false,last=performance.now(),HIST=[];
const TOT={};const RES=[];
function newGameLegacy(){GH.length=0;for(const k in ACT)delete ACT[k];ORDER=["eng","fam","inf"].sort(()=>R()-.5);VI=0;for(const k in TOT)delete TOT[k];RES.length=0;HIST=[]}
function startVisit(){const k=ORDER[VI],G=GROUPS[k];hide();const b=$("#banner");b.innerHTML=`<div class="no">第 ${VI+1} 組・共 3 組</div><div class="lv">${G.n}</div><span class="tg">${G.tag}</span><span>${G.hint}</span>${VI===0?`<em>點地板移動・點東西或人走過去<br>下面的按鈕：吠、尿、咬、撒嬌、翻肚、躺平<br>每個人喜歡的不一樣，看反應猜</em>`:""}<small>點一下開始（15 秒）</small>`;b.hidden=false;
  let go=false;const s=()=>{if(go)return;go=true;b.hidden=true;setup(k)};b.onclick=s}
function setup(k){const G=GROUPS[k],ft=FT(),fb=FB(),fh=fb-ft;
  const E=[{id:"sofa",kind:"obj",x:330,y:ft+fh*.18,w:120,emo:null},{id:"plant",kind:"obj",x:36,y:ft+fh*.12,emo:"🪴",sz:44},{id:"slipper",kind:"obj",x:170,y:ft+fh*.8,emo:"🩴",sz:28},{id:"bag",kind:"obj",x:372,y:ft+fh*.62,emo:"👜",sz:32}];
  G.ppl.forEach((p,i)=>E.push(Object.assign({kind:"person",y:ft+fh*(.5+i*.1),mood:0,bub:"",bubT:0},p)));
  V={k,G,E,t:0,T:15,score:0,cnt:{},contrib:{},mult:1,multT:0,evDone:false,decals:[],
     d:{x:90,y:ft+fh*.6,tx:90,ty:ft+fh*.6,act:null,actT:0,flip:false,carry:null,hide:false,pend:null}};
  HIST=[];RUN=true;$("#tray").hidden=false;$("#tbar").hidden=false;$("#who").textContent=`${G.n}｜${G.tag}`}
/* ---------- actions ---------- */
function near(r=78){const d=V.d;let best=null,bd=r;for(const e of V.E){if(e.gone)continue;const dd=Math.hypot(e.x-d.x,(e.y-d.y)*1.4);if(dd<bd){bd=dd;best=e}}return best}
function doAct(a){if(!RUN||V.d.act)return;SND.init();const d=V.d,tg=near();d.hide=false;let tags=[],anim="idle",dur=1;
  const P=tg&&tg.kind==="person"?tg:null,O=tg&&tg.kind==="obj"?tg:null;
  if(tg)d.flip=tg.x<d.x;
  switch(a){
   case"bark":anim=IMG.bark_angry?"bark_angry":"bark";tags=P?["loud","guard"]:["loud"];SND.bark();break;
   case"pee":anim=IMG.pee?"pee":"sniff";dur=1.4;tags=O&&O.id==="sofa"?["mess","mess"]:O&&O.id!=="plant"?["mess","funny"]:P?["mess","funny"]:["mess"];V.decals.push({x:d.x+(d.flip?-20:20),y:d.y+2,r:0,on:O||P});SND.pop();if(O&&O.id==="plant")tags=["curious"];break;
   case"bite":anim=IMG.bite_tug?"bite_tug":"nudge";if(P&&P.holds){tags=["steal","funny"];d.carry=P.holds;P.holds=null;P.cry=3;SND.bark()}else if(O&&O.id==="chick"){tags=["steal"];d.carry="🍗";O.gone=1}else if(P){anim=IMG.snap?"snap":"bark";tags=["bite"];SND.sad();V.shake=.3}else if(O&&O.id!=="plant"){tags=O.id==="sofa"?["destroy"]:["destroy","funny"];O.chewed=1;SND.scoop()}else if(O){tags=["curious","funny"]}else tags=[];break;
   case"love":anim=P?(IMG.rub?"rub":"nudge"):"sniff";tags=P?["affection"]:O?["curious"]:["curious"];if(P)SND.heart();break;
   case"roll":anim=IMG.belly_up?"belly_up":"roll";dur=1.4;tags=["cute"];if(V.k==="inf")tags.push("funny");SND.pop();break;
   case"lie":anim=O&&O.id==="sofa"?"lie_flat":(IMG.sploot?"sploot":"lie");dur=1.6;if(O&&O.id==="sofa"){tags=["shy"];d.hide=true}else tags=["calm"];break}
  if(d.carry&&a!=="bite"&&a!=="love"&&a!=="lie"){V.E.push({id:"chick",kind:"obj",x:d.x+10,y:d.y+4,emo:d.carry,sz:26});d.carry=null}
  d.act=anim;d.actT=dur;d.actStart=V.t;d.action=a;if(d.hide)d.act="lie_flat";
  event(tags,P,a,descOf(a,P,O,tags))}
function event(tags,P,a,desc){ACT[a]=(ACT[a]||0)+1;if(!tags.length)return;const now=V.t;
  // combos
  const rec=HIST.filter(h=>now-h.t<5);if(a==="roll"&&rec.some(h=>h.tags.includes("mess")||h.tags.includes("destroy")||h.tags.includes("steal")))tags.push("cutecrime");
  if(a==="love"&&P&&rec.some(h=>h.a==="bark"&&h.P===P))tags.push("tsundere");
  if(tags.includes("shy")&&rec.some(h=>h.tags.includes("steal")||h.tags.includes("destroy")))tags.push("offender");
  HIST.push({t:now,tags:tags.slice(),P,a});
  const pref=V.G.pref;let delta=0,main=null,mainV=0;
  for(const tg of tags){V.cnt[tg]=(V.cnt[tg]||0)+1;TOT[tg]=(TOT[tg]||0)+1;let m=(V.mult||1);if(V.k==="eng"&&V.multT>0&&tg==="affection")m=2;const v=(pref[tg]||0)*Math.pow(.62,V.cnt[tg]-1)*(V.k==="eng"?1:m);delta+=v;V.contrib[tg]=(V.contrib[tg]||0)+v;if(Math.abs(v)>=Math.abs(mainV)){mainV=v;main=tg}}
  V.score+=delta;GH.push({k:V.k,desc,delta,live:V.k==="inf"&&V.multT>0,tags:tags.slice()});
  const combo=tags.find(t=>t==="cutecrime"||t==="tsundere"||t==="offender");if(combo){toast({cutecrime:"組合技：犯錯秒翻肚",tsundere:"組合技：傲嬌",offender:"組合技：慣犯"}[combo],1);SND.coin()}
  const who=P||V.E.find(e=>e.kind==="person"&&!e.kid)||V.E.find(e=>e.kind==="person");
  const sh=SHORT[main]||["嗯","嗯"];who.bub=(delta>.2?"❤️ ":delta<-.2?"💢 ":"")+(delta>=0?sh[1]:sh[0]);who.bubT=1.8;who.mood=delta>.2?1:delta<-.2?-1:0;
  if(Math.abs(delta)>.2)V.fx=(V.fx||[]).concat([{x:who.x,y:who.y-130,e:delta>0?"❤️":"💢",t:0}])}
/* ---------- update/draw ---------- */
function updateLegacy(dt){const d=V.d;V.t+=dt;V.multT=Math.max(0,V.multT-dt);if(V.multT<=0)V.mult=1;V.shake=Math.max(0,(V.shake||0)-dt);
  if(!V.evDone&&V.t>V.G.ev.t*V.T/25){V.evDone=true;toast(V.G.ev.txt,1);if(V.G.ev.k==="live"){V.mult=2;V.multT=5;SND.shutter()}if(V.G.ev.k==="crouch"){V.multT=5;const p=V.E.find(e=>e.id==="eng");p.crouch=5}if(V.G.ev.k==="drop"){const kid=V.E.find(e=>e.id==="kid");if(kid&&kid.holds){V.E.push({id:"chick",kind:"obj",x:kid.x-30,y:kid.y+6,emo:kid.holds,sz:26});kid.holds=null;kid.cry=2}}}
  if(d.act){d.actT-=dt;if(d.actT<=0&&!d.hide)d.act=null;if(d.actT<=0&&d.hide&&Math.hypot(d.tx-d.x,d.ty-d.y)>8)d.act=null,d.hide=false}
  else{const dx=d.tx-d.x,dy=d.ty-d.y,dd=Math.hypot(dx,dy);if(dd>4){const sp=Math.min(dd,170*dt);d.x+=dx/dd*sp;d.y+=dy/dd*sp;if(Math.abs(dx)>3)d.flip=dx<0}else if(d.pend){const a=d.pend;d.pend=null;doAct(a)}}
  for(const e of V.E){if(e.bubT)e.bubT=Math.max(0,e.bubT-dt);if(e.cry)e.cry=Math.max(0,e.cry-dt);if(e.crouch)e.crouch=Math.max(0,e.crouch-dt);if(!e.bubT&&e.kind==="person")e.mood*=.98}
  for(const dc of V.decals)dc.r=Math.min(18,dc.r+40*dt);
  if(V.fx)V.fx=V.fx.filter(f=>(f.t+=dt)<1.2);
  if(V.t>=V.T){RUN=false;$("#tray").hidden=true;$("#tbar").hidden=true;setTimeout(review,500)}}
function head(q,x,y,s,p,t){q.save();q.translate(x,y);q.scale(s,s);
  const hair=p.hair,hc=p.id==="inf"?"#6b3f2a":"#2b1d16";if(hair==="long"){q.fillStyle=hc;q.beginPath();q.roundRect(-38,-30,76,86,26);q.fill()}if(hair==="bob"){q.fillStyle=hc;q.beginPath();q.roundRect(-40,-34,80,70,28);q.fill()}
  q.fillStyle="#f6d5b8";q.beginPath();q.ellipse(0,4,33,36,0,0,7);q.fill();q.fillStyle=hc;q.beginPath();q.arc(0,-6,37,Math.PI,0);q.fill();if(hair==="kid"){q.beginPath();q.arc(-8,-38,8,0,7);q.fill()}
  q.fillStyle="#2b1d16";const m=p.mood||0,cry=p.cry>0;
  if(m<0||cry){q.strokeStyle="#2b1d16";q.lineWidth=3.5;q.beginPath();q.moveTo(-19,-4);q.lineTo(-7,0);q.moveTo(19,-4);q.lineTo(7,0);q.stroke()}
  if(m>0){q.strokeStyle="#2b1d16";q.lineWidth=3.5;q.beginPath();q.arc(-13,6,5,Math.PI,0);q.arc(13,6,5,Math.PI,0);q.stroke()}else{q.beginPath();q.ellipse(-13,6,4,5,0,0,7);q.ellipse(13,6,4,5,0,0,7);q.fill()}
  q.strokeStyle="#2b1d16";q.lineWidth=3;q.beginPath();if(m>0)q.arc(0,16,10,.15,Math.PI-.15);else if(m<0||cry)q.arc(0,26,8,Math.PI+.3,-.3);else{q.moveTo(-6,20);q.lineTo(6,20)}q.stroke();
  if(cry){q.fillStyle="#6fb6e8";q.beginPath();q.ellipse(-16,16+((t*40)%14),3,5,0,0,7);q.ellipse(16,16+((t*40+7)%14),3,5,0,0,7);q.fill()}
  if(m>0){q.fillStyle="#f29b9b88";q.beginPath();q.ellipse(-22,16,7,4,0,0,7);q.ellipse(22,16,7,4,0,0,7);q.fill()}
  if(p.glasses){q.strokeStyle="#222";q.lineWidth=2.5;q.strokeRect(-23,-2,18,14);q.strokeRect(5,-2,18,14);q.beginPath();q.moveTo(-5,4);q.lineTo(5,4);q.stroke()}
  if(p.phones){q.strokeStyle="#333";q.lineWidth=6;q.beginPath();q.arc(0,-2,40,Math.PI*1.05,-.05*Math.PI);q.stroke();q.fillStyle="#333";q.beginPath();q.roundRect(-46,-8,14,24,5);q.roundRect(32,-8,14,24,5);q.fill()}
  q.restore()}
function drawPersonE(p,t){const s=p.kid?.68:.95,cr=p.crouch>0;
  drawPerson(g,p.x,p.y,s,{face:-1,t,shirt:p.shirt,pants:p.pants,apron:p.apron,face0:false,sit:cr,arm:p.phone?-1.4:cr?-1:p.holds?-.9:0,tool:p.phone?"phone":null});
  const by=cr?-30:-44;head(g,p.x,p.y+(by-58)*s,s*.42,p,t);
  if(p.holds){g.font="22px sans-serif";g.textAlign="center";g.fillText(p.holds,p.x-20*s,p.y-70*s)}
  if(p.phone&&V.multT>0&&V.k==="inf"){g.fillStyle="#e53935";g.beginPath();g.roundRect(p.x-24,p.y-176,48,16,4);g.fill();g.fillStyle="#fff";g.font="900 10px sans-serif";g.textAlign="center";g.fillText("● LIVE",p.x,p.y-164)}
  if(p.bubT>0){g.save();g.globalAlpha=Math.min(1,p.bubT*2);g.font="700 13px sans-serif";const w=g.measureText(p.bub).width+18;const bx=cl(p.x-w/2,4,396-w),by2=p.y-(p.kid?118:158);g.fillStyle="#fff";g.beginPath();g.roundRect(bx,by2-22,w,26,10);g.fill();g.fillStyle="#263c32";g.textAlign="left";g.fillText(p.bub,bx+9,by2-4);g.restore()}}
function drawRoom(t){const ft=FT(),fb=FB();g.fillStyle="#efe3cf";g.fillRect(0,0,400,ft);g.fillStyle="#e3d2b6";g.fillRect(0,ft-14,400,14);
  g.fillStyle="#bfe0f2";g.fillRect(150,ft*.22,100,ft*.46);g.strokeStyle="#fff";g.lineWidth=6;g.strokeRect(150,ft*.22,100,ft*.46);g.beginPath();g.moveTo(200,ft*.22);g.lineTo(200,ft*.68);g.stroke();
  g.fillStyle="#d2533c";g.beginPath();g.roundRect(14,ft*.18,110,34,6);g.fill();g.fillStyle="#fff";g.font="900 15px sans-serif";g.textAlign="center";g.fillText("認養會 ♥",69,ft*.18+23);
  g.fillStyle="#d9c3a0";g.fillRect(0,ft,400,fb-ft+200);g.strokeStyle="#c9b18c";g.lineWidth=1;for(let i=0;i<8;i++){const y=ft+(fb-ft)*i/7;g.beginPath();g.moveTo(0,y);g.lineTo(400,y);g.stroke()}
  for(const dc of V.decals){g.fillStyle="#f2d34a99";g.beginPath();g.ellipse(dc.x,dc.y,dc.r*1.4,dc.r*.45,0,0,7);g.fill()}}
function drawObj(e,t){if(e.gone)return;if(e.id==="sofa"){g.fillStyle="#7a8f6a";g.beginPath();g.roundRect(e.x-60,e.y-62,120,40,14);g.fill();g.fillStyle="#8fa67d";g.beginPath();g.roundRect(e.x-66,e.y-30,132,26,10);g.fill();g.fillStyle="#5b6b4f";g.fillRect(e.x-58,e.y-4,8,8);g.fillRect(e.x+50,e.y-4,8,8);if(e.chewed){g.fillStyle="#fff";for(let i=0;i<5;i++){g.beginPath();g.arc(e.x-30+i*14,e.y-28+(i%2)*6,3,0,7);g.fill()}}return}
  g.save();g.font=`${e.sz||28}px sans-serif`;g.textAlign="center";if(e.chewed){g.translate(e.x,e.y);g.rotate(.5);g.fillText(e.emo,0,0);g.fillStyle="#fff";g.fillRect(4,-10,4,4);g.fillRect(-8,-4,3,3)}else g.fillText(e.emo,e.x,e.y);g.restore()}
function drawDog(t){const d=V.d;const ft=FT(),fb=FB();const S=96+48*cl((d.y-ft)/(fb-ft));const moving=!d.act&&Math.hypot(d.tx-d.x,d.ty-d.y)>4;const an=d.act||(moving?"walk":"idle");
  g.fillStyle="#0002";g.beginPath();g.ellipse(d.x,d.y+2,S*.24,S*.05,0,0,7);g.fill();dog(g,an,d.x,d.y,S,t,{flip:d.flip,alpha:d.hide?.55:1});
  if(d.carry){g.font="22px sans-serif";g.textAlign="center";g.fillText(d.carry,d.x+(d.flip?-S*.33:S*.33),d.y-S*.42)}}
function loop(now){const dt=Math.min(.04,(now-last)/1000);last=now;resize();g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,cv.width,cv.height);const sh=V&&V.shake?Math.sin(now/20)*4:0;g.setTransform(DPR*SC,0,0,DPR*SC,sh*DPR,0);const t=now/1000;
  if(V){if(RUN)update(dt);drawRoom(t);const L=[...V.E.map(e=>({y:e.y,f:()=>e.kind==="person"?drawPersonE(e,t):drawObj(e,t)})),{y:V.d.hide?V.E[0].y-1:V.d.y,f:()=>drawDog(t)}].sort((a,b)=>a.y-b.y);L.forEach(o=>o.f());
    if(V.fx)for(const f of V.fx){g.globalAlpha=1-f.t/1.2;g.font="22px sans-serif";g.textAlign="center";g.fillText(f.e,f.x,f.y-f.t*40);g.globalAlpha=1}
    if(V.mult>1||V.multT>0){g.strokeStyle=`rgba(229,57,53,${.4+.3*Math.sin(t*8)})`;g.lineWidth=6;g.strokeRect(3,3,394,CH-6)}
    $("#tb").style.width=cl(1-V.t/V.T)*100+"%"}
  requestAnimationFrame(loop)}
/* ---------- input ---------- */
cv.addEventListener("pointerdown",moveDogToPointer);
document.querySelectorAll("#tray button").forEach(b=>b.addEventListener("click",e=>{e.preventDefault();doAct(b.dataset.a)}));
/* ---------- review / endings ---------- */
const STAR=n=>"★".repeat(Math.floor(n))+"☆".repeat(5-Math.floor(n))+`<small> ${n.toFixed(1)}</small>`;
function review(){const G=V.G,k=V.k;const stars=cl(Math.round((2.5+V.score*.32)*2)/2,.5,5);const C=Object.entries(V.contrib);
  const pos=C.filter(c=>c[1]>.1).sort((a,b)=>b[1]-a[1])[0],neg=C.filter(c=>c[1]<-.1).sort((a,b)=>a[1]-b[1])[0];
  let txt=!C.length?"牠全程發呆，我不知道牠是什麼個性。":stars>=3?[pos&&LN[pos[0]][k],neg&&"但"+LN[neg[0]][k]].filter(Boolean).join("，"):[neg&&LN[neg[0]][k],pos&&"不過"+LN[pos[0]][k]].filter(Boolean).join("，");if(!txt)txt="還好，沒什麼特別的感覺。";
  const adopt=stars>=4;const bit=(V.cnt.bite||0)>0;RES.push({k,n:G.n,stars,txt});SND[adopt?"ding":"sad"]();
  show(`<div class="no">${G.n}｜${G.tag}</div><div class="stars">${STAR(stars)}</div><p class="rv">「${txt}。」</p><p class="sub">${adopt?`<b style="color:#355a4d">${G.n}決定帶你回家。</b>`:VI<2?"他們走了。下一組人要進來了。":"他們也走了。"}</p><button class="big" id="go" type="button">${adopt?"跟他們走":VI<2?"下一組":"……"}</button>`,e=>{if(e.target.id!=="go")return;
    if(adopt)ending(bit?"ret":k);else if(VI<2){VI++;startVisit()}else ending((TOT.cute||0)+(TOT.affection||0)>=2&&(TOT.bite||0)===0?"mill":"shelter")})}
function persona(){const C=Object.entries(TOT).filter(([k,v])=>ADJ[k]&&v>0).sort((a,b)=>b[1]-a[1]);if(!C.length)return"發呆的"+DOGN;return (C[1]?ADJ[C[1][0]]:ADJ[C[0][0]])+NOUN[C[0][0]]}
function unlocked(id){let u=[];try{u=JSON.parse(localStorage.getItem("adopt_end")||"[]")}catch(e){}if(id&&!u.includes(id)){u.push(id);try{localStorage.setItem("adopt_end",JSON.stringify(u))}catch(e){}}return u}
function ending(id){const E=END[id],u=unlocked(id),ps=persona();const url=card(id,ps,u.length);SND[["ret","mill","shelter"].includes(id)?"sad":"heart"]();
  show(`<div class="no">結局 ${ENDS.indexOf(id)+1}／6</div><h2>${E.n}</h2><img class="full" src="${url}" alt=""><p class="sub">已解鎖 ${u.length}／6 個結局：${ENDS.map(x=>u.includes(x)?END[x].n:"？？？").join("・")}</p>
   <div class="cta"><b>你是：${ps}</b><small>分享你的狗格，看朋友是什麼狗</small><button class="big" id="sh" type="button">分享到 Threads／IG／LINE</button></div>
   <button class="big alt" id="re" type="button">再參加一次認養會</button><button class="big alt" id="map" type="button">🗺️ 真的在等家的孩子</button>`,e=>{if(e.target.id==="sh")shareImg(url,FACE?`領養日｜我家${DOGN}是「${ps}」，結局：${E.n}。你家的狗會被誰帶走？`:`領養日｜我是「${ps}」，結局：${E.n}。你家的狗會是哪一種？`);if(e.target.id==="re"){newGame();startVisit()}if(e.target.id==="map")realAdopt(()=>ending(id))})}
function card(id,ps,n){const E=END[id],W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;const q=c.getContext("2d");const bad=["ret","mill","shelter"].includes(id);
  q.fillStyle=bad?"#26282e":"#f6efe1";q.fillRect(0,0,W,H);q.fillStyle=bad?"#ffffff14":"#e8dcc4";q.beginPath();q.arc(W/2,560,330,0,7);q.fill();
  if(id==="mill"){q.strokeStyle="#888";q.lineWidth=8;for(let x=230;x<=850;x+=60){q.beginPath();q.moveTo(x,300);q.lineTo(x,780);q.stroke()}}
  q.save();if(bad)q.filter="grayscale(.85)";dog(q,E.an,W/2,780,560,0);q.restore();
  const ink=bad?"#fff":"#263c32",sub=bad?"#bfc5cc":"#7c6b55";q.textAlign="center";q.fillStyle=sub;q.font=`700 34px "Noto Sans TC",sans-serif`;q.fillText(`領養日｜${DOGN}的結局 `+(ENDS.indexOf(id)+1)+"/6",W/2,110);
  q.fillStyle=ink;q.font=`900 84px "Noto Serif TC",serif`;q.fillText(E.n,W/2,210);
  q.fillStyle=bad?"#ff9a8a":"#d2533c";q.font=`900 52px "Noto Serif TC",serif`;q.fillText("狗格：「"+ps+"」",W/2,880);
  q.fillStyle=ink;q.font=`500 40px "Noto Sans TC",sans-serif`;wrap(q,E.t,W/2,970,900,56);
  let y=1135;for(const r of RES.slice(-3)){q.fillStyle=sub;q.font=`700 34px "Noto Sans TC",sans-serif`;q.fillText(`${r.n} ${"★".repeat(Math.round(r.stars))}${"☆".repeat(5-Math.round(r.stars))}`,W/2,y);y+=46}
  q.fillStyle="#f2b632";q.font=`700 30px "Noto Sans TC",sans-serif`;q.fillText(E.note?"#認養代替購買　#領養日":"#領養日　#認養代替購買",W/2,1300);return c.toDataURL("image/jpeg",.9)}
function wrap(q,t,x,y,w,lh){let line="";for(const ch of t){if(q.measureText(line+ch).width>w){q.fillText(line,x,y);y+=lh;line=ch}else line+=ch}q.fillText(line,x,y)}
/* ---------- title ---------- */
function titleArt(){const c=$("#tcv"),q=c.getContext("2d");let t=0;const seq=["sit","head_tilt","wag","roll","bark"];(function f(){if($("#title").hidden)return;t+=1/60;q.clearRect(0,0,840,420);if(LOADED>=NA)dog(q,seq[Math.floor(t/1.6)%seq.length],420,400,360,t);requestAnimationFrame(f)})()}
$("#bMy").onclick=()=>{SND.init();myDog()};
loadSaved();
$("#bNew").onclick=()=>{SND.init();BGM.start();$("#title").hidden=true;resize();newGame();
  show(`<h2>今天是認養會</h2><canvas id="ic" width="300" height="200" style="width:200px;justify-self:center"></canvas><p>你是阿聰。今天會有 <b>3 組人</b>來看你。</p><p class="sub">每組 15 秒。你想怎麼表現都可以——<br>乖一點、兇一點、尿在拖鞋上也行。<br>只有 4 顆星以上，他們才會帶你走。</p><button class="big" id="go" type="button">開門</button>`,e=>{if(e.target.id==="go")startVisit()});
  const c=$("#ic").getContext("2d");let t=0;(function f2(){if(!$("#ic"))return;t+=1/60;c.clearRect(0,0,300,200);dog(c,"wag",150,190,190,t);requestAnimationFrame(f2)})()};
$("#bNew").disabled=true;$("#bNew").textContent="正在準備…";titleArt();requestAnimationFrame(loop);

/* ================= 組合結局 ================= */
const GH=[],ACT={};
const OBJN={sofa:"沙發",plant:"盆栽",slipper:"拖鞋",bag:"包包",chick:"雞腿"};
function descOf(a,P,O,tags){const on=O?OBJN[O.id]:"";switch(a){
  case"bark":return P?`對${P.n}狂吠`:"對空氣狂吠";
  case"pee":return P?`尿在${P.n}腳上`:O?`尿在${on}上`:"尿在地板上";
  case"bite":return tags.includes("steal")?(P?`搶走${P.n}的雞腿`:"叼走地上的雞腿"):P?`咬了${P.n}一口`:O?`咬爛${on}`:"咬空氣";
  case"love":return P?`去蹭${P.n}`:O?`聞${on}`:"到處聞";
  case"roll":return "當場翻肚";
  case"lie":return O&&O.id==="sofa"?"躲進沙發底下":"直接躺平"}return""}
const HAB={loud:"對每個人狂吠",mess:"到處尿尿",destroy:"咬爛所有拖鞋",bite:"見人就咬",cute:"一被罵就翻肚",affection:"黏著人不放",calm:"整天躺平",funny:"做一些沒人看得懂的事",steal:"偷吃東西",shy:"躲在沙發底下",guard:"守著門口",curious:"到處聞來聞去"};
const NICK={loud:"大聲",mess:"尿尿",destroy:"拆家",bite:"鯊魚",cute:"翻肚",affection:"黏黏",calm:"躺平",funny:"諧星",steal:"小偷",shy:"躲躲",guard:"門神",curious:"偵探"};
const FATE={
 inf_good:{n:"網紅狗",an:"excited",bg:"#ffe3ec",t:["你被 Mia 帶回家。靠著{habit}，三個月粉絲破十萬，大家叫你「{nick}」。","Mia 幫你開了帳號「{nick}日記」。你{habit}的影片，被轉了兩萬次。","你成了 Mia 的流量密碼。業配排到明年，你只負責{habit}。"]},
 inf_ret:{n:"拍完就退養",bad:1,an:"sad",t:["Mia 帶你回家拍了三天。你只會{habit}，沒有素材，第七天你回到了認養會。","Mia 的影片點閱太低。她說：「牠不夠有梗。」你被送回來了。"],note:"寵物不是道具。拍完就送回來，對牠來說是再被丟一次。"},
 eng_good:{n:"安靜室友",an:"sofa",bg:"#e3ecf6",t:["阿凱把你帶回套房。你負責{habit}，他負責寫 code，誰也不吵誰。","阿凱在公司群組放你的照片，同事都叫你「{nick}」。","你們一起熬夜。他 debug，你{habit}。這是你第一次有自己的枕頭。"]},
 eng_ret:{n:"被房東趕出去",bad:1,an:"sad",t:["阿凱帶你回套房。你{habit}，第五天房東就上門了。","鄰居檢舉了三次。阿凱紅著眼把你送回來：「不是你的錯，是套房太小。」"],note:"認養前，先確認住的地方能不能養。"},
 fam_good:{n:"弟弟的哥哥",an:"car_window",bg:"#fff1d6",t:["林家帶你回家。弟弟每天放學第一件事，是看你{habit}。","弟弟幫你取名「{nick}」。你每天{habit}，他每天笑。","你搬進林家。從此，弟弟的雞腿都會分你一半。"]},
 bite_ret:{n:"三天退養",bad:1,an:"sad",t:["帶回家第三天，你又被送回來了。籠子上多了一張紙：「會咬人」。","{who}很喜歡你，直到你咬了人。第三天，你回到原本的籠子。"],note:"會咬人的狗，多半是害怕。牠需要的是時間和訓練，不是退養。"},
 star:{n:"萬人迷",an:"excited",bg:"#fff6c8",t:["三組人都想帶你走，在門口吵了起來。最後你自己選了{who}。","工作人員說，這是認養會第一次三組人搶一隻狗。你選了{who}。"]},
 mill:{n:"繁殖場",bad:1,an:"lie_flat",cage:1,t:["沒人要你。一個說自己「很愛狗」的老闆把你買走了。後來，你住在一排疊起來的籠子裡，負責配種。","你太可愛了，可愛到被一個繁殖業者看上。你再也沒有離開過那個籠子。"],note:"認養代替購買。寵物店的每一隻，背後可能都有一排這樣的籠子。"},
 danger:{n:"危險犬隻",bad:1,an:"scared",cage:1,t:["你被標上「具攻擊性」，關進最裡面的籠子。下一場認養會，你不能參加了。"],note:"咬人通常是因為害怕。收容所裡，很多狗只是需要一點時間。"},
 factory:{n:"工廠看門狗",bad:1,an:"sit",chain:1,t:["一個工廠老闆說：「這隻很兇，剛好顧門。」你被一條兩公尺的鐵鍊綁在鐵皮屋外。","你被帶去工廠顧門。每天{habit}，但沒有人摸你的頭。"],note:"鍊養不是養。狗需要散步、陪伴，和一個遮風避雨的地方。"},
 legend:{n:"收容所傳奇",an:"wag",bg:"#e6f2df",t:["沒人帶你走。但志工都愛死你了，你成了收容所的吉祥物「{nick}」。","你在收容所{habit}，被志工拍成影片。下一場認養會，門口排了三十組人。"]},
 oldface:{n:"收容所老面孔",bad:1,an:"lie",cage:1,t:["三組人都走了。你回到籠子，等下一場認養會。","工作人員幫你換了一張大頭照。下個月，你還會在這裡。"]},
 zero:{n:"史上最低分",bad:1,an:"sad",t:["三組人都給你一顆星。工作人員默默把你的介紹卡改成：「個性獨特」。"]},
 blank:{n:"發呆到結束",an:"head_tilt",bg:"#eeeeee",t:["你整場都在發呆。三組人都問：「牠是不是不舒服？」"]}};
const FATES=Object.keys(FATE);
const BADGE=[[()=>(ACT.pee||0)>=4,"🚽 膀胱戰神"],[()=>GH.filter(h=>h.tags.some(t=>t==="cutecrime"||t==="tsundere"||t==="offender")).length>=3,"🎯 組合技大師"],[()=>["cutecrime","tsundere","offender"].every(c=>TOT[c]),"👑 三冠王"],[()=>(TOT.steal||0)>0,"🍗 雞腿大盜"],[()=>RES.reduce((s,r)=>s+r.stars,0)>=12,"🏆 認養會 MVP"],[()=>(ACT.lie||0)>=3,"🛌 躺平主義"],[()=>(ACT.bark||0)>=5,"📢 社區廣播"],[()=>(TOT.bite||0)>=2,"🦈 鯊魚"],[()=>!TOT.mess&&!TOT.bite&&!TOT.destroy&&GH.length>=5,"😇 模範生"],[()=>(ACT.roll||0)>=4,"🙃 翻肚專家"],[()=>GH.some(h=>h.live&&h.tags.includes("mess")),"🔴 直播放送事故"],[()=>GH.length>=25,"⚡ 過動兒"]];
function topTags(){return Object.entries(TOT).filter(([k,v])=>HAB[k]&&v>0).sort((a,b)=>b[1]-a[1]).map(x=>x[0])}
const sum=(...k)=>k.reduce((s,x)=>s+(TOT[x]||0),0);
function decideLegacy(){const ok=RES.filter(r=>r.stars>=4).sort((a,b)=>b.stars-a.stars);const best=ok[0];
  if(!GH.length)return["blank",null];
  if(ok.length===3)return["star",best];
  if(best&&(TOT.bite||0)>0)return["bite_ret",best];
  if(best){if(best.k==="inf")return[sum("calm","shy")>=2?"inf_ret":"inf_good",best];if(best.k==="eng")return[sum("loud","mess","destroy")>=3?"eng_ret":"eng_good",best];return["fam_good",best]}
  if((TOT.bite||0)>0)return["danger",null];
  if(RES.every(r=>r.stars<=1.5))return["zero",null];
  const sc={factory:sum("loud","guard")>=3?sum("loud","guard"):0,legend:sum("funny","mess","destroy","steal")>=3?sum("funny","mess","destroy","steal")*.8:0,mill:sum("cute","affection")>=2?sum("cute","affection"):0};
  const k=Object.entries(sc).sort((a,b)=>b[1]-a[1])[0];return[k[1]>0?k[0]:"oldface",null]}
function highlight(){const ev=GH.slice().sort((a,b)=>(b.tags.length>2?3:0)+Math.abs(b.delta)-((a.tags.length>2?3:0)+Math.abs(a.delta)))[0];if(!ev)return"什麼都沒做";const G=GROUPS[ev.k];return `${ev.live?"Mia 直播中，":`在${G.n}面前，`}${ev.desc}`}
function store(key,v){if(PET==="cat")key+="_cat";let u=[];try{u=JSON.parse(localStorage.getItem(key)||"[]")}catch(e){}if(v&&!u.includes(v)){u.push(v);try{localStorage.setItem(key,JSON.stringify(u))}catch(e){}}return u}
function review(){const G=V.G,k=V.k;const stars=cl(Math.round((2.5+V.score*.32)*2)/2,.5,5);const C=Object.entries(V.contrib);
  const pos=C.filter(c=>c[1]>.1).sort((a,b)=>b[1]-a[1])[0],neg=C.filter(c=>c[1]<-.1).sort((a,b)=>a[1]-b[1])[0];
  let txt=!C.length?"牠全程發呆，我不知道牠是什麼個性":stars>=3?[pos&&LN[pos[0]][k],neg&&"但"+LN[neg[0]][k]].filter(Boolean).join("，"):[neg&&LN[neg[0]][k],pos&&"不過"+LN[pos[0]][k]].filter(Boolean).join("，");if(!txt)txt="還好，沒什麼特別的感覺";
  const want=stars>=4;RES.push({k,n:G.n,stars,txt});SND[want?"ding":"sad"]();
  show(`<div class="no">${G.n}｜${G.tag}</div><div class="stars">${STAR(stars)}</div><p class="rv">「${txt}。」</p><p class="sub">${want?`<b style="color:#355a4d">${G.n}填了認養單。</b>`:"他們沒有填認養單。"}${VI<2?"下一組人要進來了。":"認養會結束了。"}</p><button class="big" id="go" type="button">${VI<2?"下一組":"看結果"}</button>`,e=>{if(e.target.id!=="go")return;if(VI<2){VI++;startVisit()}else ending()})}
function ending(){const[id,best]=decide();const F=FATE[id],tt=topTags(),t1=tt[0]||"calm";
  const who=best?best.n:"";const nick=NICK[t1]+DOGN.slice(-1);const line=pick(F.t).replace(/{habit}/g,HAB[t1]).replace(/{nick}/g,nick).replace(/{who}/g,who);
  const ps=persona(),hl=highlight(),bd=BADGE.filter(b=>b[0]()).map(b=>b[1]).slice(0,3);
  const uf=store("adopt_fate",id),up=store("adopt_persona",ps);const D={id,F,line,nick,ps,hl,bd,who};const url=card(D);SND[F.bad?"sad":"heart"]();
  const html=`<div class="no">結局 ${FATES.indexOf(id)+1}／${FATES.length}</div><h2>${F.n}</h2><img class="full" src="${url}" alt="">
   <p class="sub">結局圖鑑 ${uf.length}／${FATES.length}・狗格圖鑑 ${up.length}／144</p>
   <div class="cta"><b>你是：${ps}</b><small>每個人的結局都不一樣，分享出去比比看</small><button class="big" id="sh" type="button">分享到 Threads／IG／LINE</button></div>
   <button class="big alt" id="re" type="button">再參加一次認養會</button><button class="big alt" id="map" type="button">🗺️ 真的在等家的孩子</button>`;const fn=e=>{
     if(e.target.id==="sh")shareImg(url,`領養日｜${FACE?`我家${DOGN}`:"我"}的結局：${F.n}。狗格「${ps}」，名場面：${hl}。你家的狗會怎樣？`);if(e.target.id==="re"){newGame();startVisit()}if(e.target.id==="map")realAdopt(()=>show(html,fn))};show(html,fn)}
function card(D){const{F}=D,W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;const q=c.getContext("2d");const bad=!!F.bad;
  q.fillStyle=bad?"#24262c":(F.bg||"#f6efe1");q.fillRect(0,0,W,H);q.fillStyle=bad?"#ffffff12":"#ffffff99";q.beginPath();q.arc(W/2,500,270,0,7);q.fill();
  const ink=bad?"#fff":"#263c32",sub=bad?"#aab1b9":"#7c6b55",acc=bad?"#ff9a8a":"#d2533c";q.textAlign="center";
  q.fillStyle=sub;q.font=`700 32px "Noto Sans TC",sans-serif`;q.fillText(`領養日｜${DOGN}的結局`,W/2,90);
  q.fillStyle=ink;q.font=`900 92px "Noto Serif TC",serif`;q.fillText(F.n,W/2,195);
  if(F.cage){q.strokeStyle="#777";q.lineWidth=8;for(let x=300;x<=780;x+=48){q.beginPath();q.moveTo(x,260);q.lineTo(x,700);q.stroke()}}
  q.save();if(bad)q.filter="grayscale(.8)";dog(q,F.an,W/2,700,480,0);q.restore();
  if(F.chain){q.strokeStyle="#999";q.lineWidth=6;q.setLineDash([16,8]);q.beginPath();q.moveTo(W/2-60,560);q.quadraticCurveTo(300,720,160,640);q.stroke();q.setLineDash([])}
  q.fillStyle=acc;q.font=`900 50px "Noto Serif TC",serif`;q.fillText(`狗格「${D.ps}」`,W/2,790);
  q.fillStyle=sub;q.font=`700 32px "Noto Sans TC",sans-serif`;q.fillText(`外號：${D.nick}`,W/2,842);
  q.fillStyle=ink;q.font=`500 38px "Noto Sans TC",sans-serif`;let y=wrap(q,D.line,W/2,910,900,52);
  y+=58;q.fillStyle=bad?"#ffffff14":"#ffffffcc";q.beginPath();q.roundRect(90,y-40,W-180,66,18);q.fill();q.fillStyle=ink;q.font=`700 32px "Noto Sans TC",sans-serif`;q.fillText(`🎬 名場面：${D.hl}`.slice(0,30),W/2,y+5);
  y+=70;if(D.bd.length){q.font=`700 30px "Noto Sans TC",sans-serif`;q.fillStyle=acc;q.fillText(D.bd.join("　"),W/2,y);y+=50}
  q.font=`500 26px "Noto Sans TC",sans-serif`;q.fillStyle=sub;q.fillText(RES.map(r=>`${r.n} ${"★".repeat(Math.round(r.stars))}${"☆".repeat(5-Math.round(r.stars))}`).join("　"),W/2,Math.max(y,1240));
  q.fillStyle="#f2b632";q.font=`700 28px "Noto Sans TC",sans-serif`;q.fillText(F.note?F.note.slice(0,30):"#領養日　#認養代替購買",W/2,1305);return c.toDataURL("image/jpeg",.9)}
function wrap(q,t,x,y,w,lh){let line="";for(const ch of t){if(q.measureText(line+ch).width>w){q.fillText(line,x,y);y+=lh;line=ch}else line+=ch}q.fillText(line,x,y);return y}


/* Presentation layer: assets, movement feedback, cards, and responsive controls. */
function dog(q,anim,x,y,S,t,o={}){
 if(BODY){drawWholeDog(q,anim,x,y,S,t,o);return}
 if(PET==='cat'){drawCat(q,anim,x,y,S,t,o);return}
 const im=IMG[anim];if(!im||!im.complete||!im.naturalWidth)return;
 const [n,fps,looping=true]=ANIM[anim],f=fps?(looping?Math.floor(Math.max(0,t)*fps)%n:Math.min(n-1,Math.floor(Math.max(0,t)*fps))):0;
 const fw=im.naturalWidth/n,fh=im.naturalHeight;
 q.save();q.translate(x,y);if(o.flip)q.scale(-1,1);if(o.rot)q.rotate(o.rot);if(o.alpha!==undefined)q.globalAlpha=o.alpha;
 q.imageSmoothingEnabled=true;q.imageSmoothingQuality='high';
 q.drawImage(tinted(anim),f*fw,0,fw,fh,-S/2,-S*472/512,S,S);if(FACE)faceOn(q,anim,f,S,o.flip);q.restore();
}
function drawRoom(t){
 const ft=FT(),im=ART.room;
 if(im.complete&&im.naturalWidth){const split=Math.round(im.naturalHeight*.475);g.drawImage(im,0,0,im.naturalWidth,split,0,0,400,ft);g.drawImage(im,0,split,im.naturalWidth,im.naturalHeight-split,0,ft,400,CH-ft)}
 else{g.fillStyle='#f1e7d0';g.fillRect(0,0,400,CH)}
 // A quiet sign, rendered as real text so it stays crisp at every size.
 g.save();g.translate(59,ft*.56);g.rotate(-.025);g.fillStyle='#fff9e9ed';g.strokeStyle='#a5aa89';g.lineWidth=.6;g.beginPath();g.roundRect(-40,-17,80,34,3);g.fill();g.stroke();g.fillStyle='#5b6f4f';g.font='600 11px serif';g.textAlign='center';g.fillText(petText('今日面試：當狗。'),0,3);g.restore();
 if(!V)return;
 drawFloorEffects(t);
 const d=V.d,dist=Math.hypot(d.tx-d.x,d.ty-d.y);
 if(RUN&&dist>10){g.save();g.globalAlpha=.35;g.strokeStyle='#536d45';g.lineWidth=1.4;g.setLineDash([3,4]);g.beginPath();g.ellipse(d.tx,d.ty,12+Math.sin(t*5),5,0,0,7);g.stroke();g.restore()}
}
function drawPersonE(p,t){
 const im=ART[p.art||p.id];if(!im||!im.complete||!im.naturalWidth)return;
 const H=p.kid?115:178, W=H*im.naturalWidth/im.naturalHeight;
 const breathe=Math.sin(t*1.8+(p.kid?1:0))*.65,cr=p.crouch>0;
 g.save();g.translate(p.x,p.y);g.fillStyle='#56432617';g.beginPath();g.ellipse(0,2,W*.3,4,0,0,7);g.fill();
 if(p.mood>.1){g.fillStyle='#e6f0cc33';g.beginPath();g.ellipse(0,-H*.48,W*.65,H*.49,0,0,7);g.fill()}
 // Keep the illustrated anatomy intact; leaning is a whole-body gesture.
 if(cr)g.rotate(-.06);if(p.bubT>0)g.rotate(Math.sin(t*15)*.025*(p.mood<0?2:1));g.drawImage(im,-W/2,-H+breathe,W,H-breathe);g.restore();
 if(p.holds){g.font='19px sans-serif';g.textAlign='center';g.fillText(p.holds,p.x-24,p.y-H*.55)}
 if(p.phone&&V.multT>0&&V.k==='inf'){g.fillStyle='#b8674f';g.beginPath();g.roundRect(p.x-22,p.y-H-14,44,15,4);g.fill();g.fillStyle='#fff8ef';g.font='700 8px sans-serif';g.textAlign='center';g.fillText('● LIVE',p.x,p.y-H-3)}
 if(p.bubT>0){
  g.save();g.globalAlpha=Math.min(1,p.bubT*2);g.font='600 11px sans-serif';const txt=p.bub.replace('❤️ ','').replace('💢 ',''),w=Math.min(220,g.measureText(txt).width+26),bx=cl(p.x-w/2,8,392-w),by=p.y-H-15;
  g.shadowColor='#493e2020';g.shadowBlur=7;g.shadowOffsetY=2;g.fillStyle=p.mood<0?'#fff2e6':'#fffdf2';g.strokeStyle=p.mood<0?'#d4ac8c':'#bbc6a3';g.lineWidth=.7;g.beginPath();g.roundRect(bx,by-22,w,29,8);g.fill();g.stroke();g.shadowColor='transparent';g.beginPath();g.moveTo(p.x-4,by+6);g.lineTo(p.x,by+12);g.lineTo(p.x+5,by+6);g.fill();g.fillStyle=p.mood<0?'#916749':'#576c49';g.textAlign='center';g.fillText(txt,bx+w/2,by-3,w-14);g.restore();
 }
}
function drawObj(e,t){
 drawPlayObject(e,t);
}
function drawDog(t){
 const d=V.d,ft=FT(),fb=FB(),S=99+38*cl((d.y-ft)/(fb-ft)),moving=!d.act&&Math.hypot(d.tx-d.x,d.ty-d.y)>4;
 const an=d.act||(moving?(d.carry&&IMG.carry_walk?'carry_walk':'walk'):'idle'),at=d.act?Math.max(0,V.t-(d.actStart||0)):t;
 g.fillStyle='#51412621';g.beginPath();g.ellipse(d.x,d.y+1,S*.24,S*.035,0,0,7);g.fill();
 dog(g,an,d.x,d.y-(d.perch?42:0),S,at,{flip:d.flip,alpha:d.hide?.7:1});
 if(d.carry){
  const spec=NEW_SPRITES[an],fps=ANIM[an][1],n=ANIM[an][0],f=fps?Math.floor(at*fps)%n:0,m=spec?.mouth?.[f];
  const mx=BODY?(BODY.nose[0]/512-.5)*S:m?(m[0]/512-.5)*S:S*.33,my=BODY?(BODY.nose[1]/512-472/512)*S:m?(m[1]/512-472/512)*S:-S*.42;
  drawCarried(d.carry,d.x+(d.flip?-mx:mx),d.y+my-(d.perch?42:0),d.flip,t);
 }
}
function updatePresentation(){
 updateSkillUI();
 if(!V)return;
 $('#visit-label').textContent=V.practice?'自由練習 · 不計分、不限時':`認養會 · 第 ${VI+1} / 3 組`;
 $('#time-left').innerHTML=V.practice?'∞':`${Math.max(0,Math.ceil(V.T-V.t))}<small>秒</small>`;
 document.querySelector('.visitor-icon').style.backgroundImage=`url('${assetUrl(V.G.art||(V.k==='fam'?'mom':V.k))}')`;
 const target=near(),hint=target?(target.kind==='person'?`靠近了${target.n}，試試不同互動`:`在${OBJN[target.id]}旁邊，會發生什麼？`):'點地板移動，靠近人或物品再互動';
 $('#context-hint').textContent=interactionHint(target);
 $('#action-status').textContent=V.d.hide?'點地板出來':V.d.act?'動作中…':'自由活動';
 document.querySelectorAll('#tray button[data-a]').forEach(b=>{b.classList.toggle('acting',!!V.d.act&&b.dataset.a===V.d.action);b.disabled=!!V.d.act;if(b.dataset.a==='bite'){const text=V.d.carry?'放下':'咬／叼';b.querySelector('b').textContent=text;b.setAttribute('aria-label',text);}});
}
function loop(now){
 const dt=Math.min(.04,(now-last)/1000);last=now;resize();g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,cv.width,cv.height);const sh=V&&V.shake?Math.sin(now/20)*3:0;g.setTransform(DPR*SC,0,0,DPR*SC,sh*DPR,0);const t=now/1000;
 if(V&&RUN&&!PAUSED)update(dt);drawRoom(t);
 if(V){
  const L=[...V.E.map(e=>({y:e.y,f:()=>e.kind==='person'?drawPersonE(e,t):drawObj(e,t)})),{y:V.d.hide?V.E[0].y-1:V.d.y,f:()=>drawDog(t)}].sort((a,b)=>a.y-b.y);L.forEach(o=>o.f());
  if(V.fx)for(const f of V.fx){g.globalAlpha=(1-f.t/1.2)*.8;g.fillStyle=f.e==='❤️'?'#c68a69':'#b37357';g.font='18px serif';g.textAlign='center';g.fillText(f.e==='❤️'?'♡':'!',f.x+30,f.y-f.t*30);g.globalAlpha=1}
  for(const n of V.notes||[]){g.save();g.globalAlpha=Math.min(1,(1.8-n.t)*2);g.font='700 11px sans-serif';g.textAlign='center';const w=g.measureText(n.text).width+16,x=cl(n.x,w/2+4,396-w/2),y=n.y-n.t*12;g.fillStyle='#fffef4ee';g.beginPath();g.roundRect(x-w/2,y-15,w,22,6);g.fill();g.fillStyle=n.color;g.fillText(n.text,x,y);g.restore()}
  drawComicBursts();
  if(V.mult>1||V.multT>0){g.strokeStyle=`rgba(165,121,66,${.25+.1*Math.sin(t*5)})`;g.lineWidth=3;g.strokeRect(3,3,394,CH-6)}
  $('#tb').style.width=cl(1-V.t/V.T)*100+'%';updatePresentation();
 }
 requestAnimationFrame(loop);
}
function startVisit(){
 prepareSkillVisit();
 const k=ORDER[VI],G=GROUPS[k];hide();const b=$('#banner');
 b.innerHTML=`<div class="no">第 ${VI+1} 組訪客 · 共 3 組</div><img class="guest-portrait" src="${assetUrl(G.art||(k==='fam'?'mom':k))}" alt="${G.n}"><div class="lv">${G.n}</div><span class="tg">${hiddenVisitLabel(k)}</span><span>${skillHint(k)}</span>${VI===0?'<em>點地板走動，靠近後選動作。</em>':''}<small>開始相處 · 15 秒 →</small>`;b.hidden=false;b.classList.add('in');
 let go=false;b.onclick=()=>{if(go)return;go=true;b.hidden=true;setup(k)};
}
function titleArt(){
 const c=$('#tcv'),q=c.getContext('2d');let t=0;
 (function f(){if($('#title').hidden)return;t+=1/60;q.clearRect(0,0,c.width,c.height);if(LOADED>=NA){q.fillStyle='#ab916022';q.beginPath();q.ellipse(420,385,170,13,0,0,7);q.fill();dog(q,'wag',420,389,545,t)}requestAnimationFrame(f)})();
}
function fitText(q,text,maxWidth,size,min=20){while(size>min&&q.measureText(text).width>maxWidth){size-=2;q.font=q.font.replace(/\d+px/,size+'px')}return size}
function card(D){
 const {F}=D,W=1080,H=1440,c=document.createElement('canvas');c.width=W;c.height=H;const q=c.getContext('2d'),bad=!!F.bad;
 const bg=bad?'#263f37':(F.bg||'#f6f0e3'),ink=bad?'#f3edda':'#344d3c',sub=bad?'#b8c4ae':'#85866d',accent=bad?'#d0af82':'#a7794d';
 q.fillStyle=bg;q.fillRect(0,0,W,H);q.strokeStyle=bad?'#6b7e63':'#c6cbb2';q.lineWidth=2;q.strokeRect(34,34,W-68,H-68);q.strokeRect(46,46,W-92,H-92);
 q.textAlign='center';q.fillStyle=sub;q.font='500 25px sans-serif';q.fillText(`領 養 日   /   ${DOGN}的人生小卡`,540,107);
 q.fillStyle=ink;q.font='700 78px serif';fitText(q,F.n,900,78);q.fillText(F.n,540,218);
 q.save();q.beginPath();q.roundRect(140,268,800,480,[200,200,12,12]);q.clip();
 if(ART.room.complete){q.globalAlpha=bad?.22:.4;q.drawImage(ART.room,0,0,ART.room.naturalWidth,ART.room.naturalHeight,140,180,800,850);q.globalAlpha=1}
 q.fillStyle=bad?'#26403555':'#fff7df55';q.fillRect(140,268,800,480);q.restore();
 if(F.icon){q.fillStyle='#fff9e9';q.strokeStyle='#5b7056';q.lineWidth=3;q.beginPath();q.arc(855,372,78,0,7);q.fill();q.stroke();q.fillStyle=ink;q.font='900 66px sans-serif';q.fillText(F.icon,855,392);q.font='700 19px sans-serif';q.fillText(F.job,540,300,690)}
 q.save();if(bad)q.filter='saturate(.45)';dog(q,F.an,540,725,490,0);q.restore();
 if(F.cage){q.strokeStyle='#8c9a8470';q.lineWidth=5;for(let x=285;x<820;x+=70){q.beginPath();q.moveTo(x,300);q.lineTo(x,736);q.stroke()}}
 if(F.chain){q.strokeStyle='#9ca692';q.lineWidth=5;q.setLineDash([12,8]);q.beginPath();q.moveTo(510,590);q.quadraticCurveTo(320,710,185,700);q.stroke();q.setLineDash([])}
 q.fillStyle=accent;q.font='700 42px serif';fitText(q,D.ps,860,42);q.fillText(`「${F.punch||D.ps}」`,540,820,900);
 q.fillStyle=sub;q.font='500 25px sans-serif';q.fillText(`大家叫我 ${D.nick}`,540,870);
 q.fillStyle=ink;q.font='400 32px sans-serif';let y=wrap(q,D.line,540,944,880,49);
 const boxY=Math.max(1095,y+45);q.fillStyle=bad?'#385045':'#e9eadb';q.beginPath();q.roundRect(90,boxY,900,86,10);q.fill();q.fillStyle=sub;q.font='600 17px sans-serif';q.textAlign='left';q.fillText('我的名場面',116,boxY+29);q.fillStyle=ink;q.font='500 25px sans-serif';fitText(q,D.hl,848,25,18);q.fillText(D.hl,116,boxY+64,848);q.textAlign='center';
 if(D.bd.length){q.fillStyle=accent;q.font='500 23px sans-serif';q.fillText(D.bd.join(' · '),540,boxY+128,900)}
 q.fillStyle=sub;q.font='500 22px sans-serif';q.fillText(RES.map(r=>`${r.n} ${r.stars.toFixed(1)} ★`).join('     /     '),540,1303,890);
 q.strokeStyle=bad?'#718268':'#c8ccb7';q.beginPath();q.moveTo(90,1330);q.lineTo(990,1330);q.stroke();q.fillStyle=accent;q.font='500 22px sans-serif';q.fillText(F.note||'#領養日   #認養代替購買',540,1372,890);
 return c.toDataURL('image/jpeg',.92);
}
// Small UI icons stay vector-sharp; all characters and props use painted artwork.
const ICON_PATHS={bark:'<path d="m4 9 5-4v14l-5-4H2V9Zm10-1a7 7 0 0 1 0 8m4-12a12 12 0 0 1 0 16"/>',pee:'<path d="M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',bite:'<path d="M12 5C4-2 1 8 5 13c2 3 1 8 3 8s2-7 4-7 2 7 4 7 1-5 3-8c4-5 1-15-7-8Z"/>',love:'<path d="M12 21S2 14 2 8a5 5 0 0 1 10-2A5 5 0 0 1 22 8c0 6-10 13-10 13Z"/>',roll:'<path d="M20 10a8 8 0 0 0-14-5L3 8m0-5v5h5M4 14a8 8 0 0 0 14 5l3-3m0 5v-5h-5"/>',lie:'<path d="M20 14A9 9 0 0 1 10 3a9 9 0 1 0 10 11Z"/><path d="m16 3 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z"/>'};
document.querySelectorAll('#tray button[data-a]').forEach(b=>{const label={bark:'吠一下',pee:'尿尿',bite:'咬一口',love:'撒嬌',roll:'翻肚',lie:'躺平'}[b.dataset.a];b.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[b.dataset.a]}</svg><b>${label}</b>`;b.setAttribute('aria-label',label)});
const muteButton=document.createElement('button');muteButton.id='mute';muteButton.type='button';muteButton.setAttribute('aria-label','切換音效');const syncMute=()=>{muteButton.textContent=SND.mute?'♪̸':'♪';muteButton.setAttribute('aria-pressed',String(SND.mute))};syncMute();muteButton.onclick=()=>{SND.init();SND.toggle();syncMute();if(!SND.mute)SND.pop()};$('#app').appendChild(muteButton);
assetProgress();

/* Physical prop state is shared by drawing, pickup, dropping and scoring. */
function setup(k){
 const G=GROUPS[k],ft=FT(),fb=FB(),fh=fb-ft;
 const E=[{id:'sofa',kind:'obj',x:323,y:ft+fh*.16},{id:'plant',kind:'obj',x:42,y:ft+fh*.12,water:0,growth:1},{id:'slipper',kind:'obj',x:160,y:ft+fh*.79},{id:'bag',kind:'obj',x:365,y:ft+fh*.64},{id:'ball',kind:'obj',x:185,y:ft+fh*.38},{id:'tissue',kind:'obj',x:51,y:ft+fh*.84,pulls:0}];
 G.ppl.forEach((p,i)=>E.push(Object.assign({kind:'person',y:ft+fh*(.5+i*.1),mood:0,bub:'',bubT:0},p)));
 V={k,G,E,t:0,T:15,score:0,cnt:{},contrib:{},mult:1,multT:0,evDone:false,decals:[],paper:[],footprints:[],notes:[],bursts:[],d:{x:92,y:ft+fh*.58,tx:92,ty:ft+fh*.58,act:null,actT:0,flip:false,carry:null,hide:false,pend:null,target:null,perch:false}};
 HIST=[];RUN=true;$('#tray').hidden=false;$('#tbar').hidden=false;$('#who').textContent=`${G.n}｜${hiddenVisitLabel(k)}`;
}
function near(r=78){
 const d=V.d,dist=e=>Math.hypot(e.x-d.x,(e.y-d.y)*1.4);
 if(d.target&&!d.target.gone&&dist(d.target)<r)return d.target;
 let best=null,bd=r;for(const e of V.E){if(e.gone)continue;const dd=dist(e);if(dd<bd){bd=dd;best=e}}return best;
}
function moveDogToPointer(ev){
 if(!RUN||PAUSED)return;SND.init();const r=cv.getBoundingClientRect(),x=(ev.clientX-r.left)/SC,y=(ev.clientY-r.top)/SC,d=V.d;
 let hit=null;for(const en of V.E.slice().sort((a,b)=>a.y-b.y)){if(en.gone)continue;const hh=en.kind==='person'?(en.kid?115:180):en.id==='sofa'?85:en.id==='plant'?82*(en.growth||1):45,ww=en.kind==='person'?38:en.id==='sofa'?72:en.id==='plant'?37*(en.growth||1):25;if(x>en.x-ww&&x<en.x+ww&&y>en.y-hh&&y<en.y+13)hit=en}
 d.target=hit;d.perch=false;d.hide=false;d.act=null;d.pend=null;
 if(hit){const side=hit.x>d.x?-1:1;d.tx=cl(hit.x+side*(hit.id==='sofa'?0:36),20,380);d.ty=cl(hit.y+7,FT()+8,FB())}else{d.tx=cl(x,20,380);d.ty=cl(y,FT()+8,FB())}
}
function noteAt(text,x,y,color='#5d754e'){V.notes.push({text,x,y,t:0,color})}
function propName(o){return {slipper:'拖鞋',ball:'球',tissue:'衛生紙盒',bag:'提袋',chick:'雞腿',sofa:'沙發',plant:'盆栽'}[o?.id]||'東西'}
function pickUp(o){o.gone=true;o.vx=o.vy=0;V.d.carry=o;V.d.target=null;SND.pickup();noteAt('叼起'+propName(o),V.d.x,V.d.y-80);toast('叼著走！再按「咬」放下，按「吠」甩出去。')}
function dropHeld(throwIt=false){
 if(throwIt)SND.throw();
 const d=V.d,o=d.carry;if(!o)return;d.carry=null;o.gone=false;o.x=cl(d.x+(d.flip?-28:28),22,378);o.y=cl(d.y+2,FT()+10,FB());if(!V.E.includes(o))V.E.push(o);o.vx=throwIt?(d.flip?-230:230):0;o.vy=throwIt?-55:0;o.lift=throwIt?18:0;o.spin=0;d.target=o;noteAt((throwIt?'甩飛':'放下')+propName(o),o.x,o.y-32);return o;
}
function kickBall(o,strong=false){o.vx=(o.x<V.d.x?-1:1)*(strong?250:170);o.vy=-35;o.lift=strong?15:3;SND.bounce();noteAt('滾走了！',o.x,o.y-28)}
function tearPaper(o,count=7){o.pulls=(o.pulls||0)+1;for(let i=0;i<count;i++)V.paper.push({x:o.x,y:o.y-15,vx:(R()-.5)*140,vy:-65-R()*55,life:0,angle:R()*6,size:7+R()*6});SND.tear();noteAt('衛生紙雪花！',o.x,o.y-48)}
function doAct(a){
 if(!RUN||PAUSED||V.d.act)return;SND.init();const d=V.d,tg=near(),P=tg?.kind==='person'?tg:null,O=tg?.kind==='obj'?tg:null;
 // A selected destination is honored before the action, instead of biting thin air.
 if(d.target&&!d.target.gone&&Math.hypot(d.target.x-d.x,(d.target.y-d.y)*1.4)>=78&&Math.hypot(d.tx-d.x,d.ty-d.y)>8){d.pend=a;noteAt('走過去'+({bite:'叼',pee:'尿',love:'蹭'}[a]||'互動'),d.x,d.y-65);return}
 const beforeCarry=d.carry;d.hide=false;let tags=[],anim='idle',dur=1,desc='';if(tg)d.flip=tg.x<d.x;
 switch(a){
  case 'bark':
   anim='bark_angry';tags=P?['loud','guard']:['loud'];SND.bark();if(d.carry){const o=dropHeld(true);tags.push('funny');desc='把'+propName(o)+'甩飛了'}
   else if(O?.id==='ball'){kickBall(O,true);tags.push('funny');desc='對著球吠到它滾走'}break;
  case 'pee':{
   anim='pee';dur=1.4;tags=O?.id==='plant'?['curious','funny']:['mess',...(O||P?['funny']:[])];
   const px=d.x+(d.flip?22:-22),py=d.y+4;V.decals.push({x:px,y:py,r:0,born:V.t,on:O||P});d.peeSplash={x:px,y:py,sourceX:d.x+(d.flip?17:-17),sourceY:d.y-20,start:V.t};SND.pee();
   if(O?.id==='plant'){O.water=Math.min(3,(O.water||0)+1);O.growTarget=1+O.water*.38;O.waterFlash=1.8;SND.grow();noteAt(O.water===3?'開花了！':'盆栽長大了！',O.x+30,O.y-70);desc=O.water===3?'把盆栽尿到開花':'給盆栽施肥，樹變大了';}
   else{noteAt('尿尿！',px,py-28,'#a2790c');if(O){O.wet=true;desc='尿濕了'+propName(O)}}break;}
  case 'bite':
   SND.bite();anim='bite_tug';if(d.carry){const o=dropHeld();tags=['curious'];desc='把'+propName(o)+'放回地上';break}
   if(P?.holds){P.holds=null;P.cry=3;pickUp({id:'chick',kind:'obj',x:d.x,y:d.y});tags=['steal','funny'];desc='搶走弟弟手上的雞腿'}
   else if(O&&['slipper','ball','chick'].includes(O.id)){pickUp(O);tags=O.id==='chick'?['steal']:['funny','curious'];desc='叼起'+propName(O)+'到處走';}
   else if(O?.id==='tissue'){tearPaper(O);tags=['destroy','funny'];desc='把衛生紙扯得到處都是'}
   else if(O?.id==='bag'){O.chewed=true;O.wobble=1;if(!O.open){O.open=true;V.E.push({id:'ball',kind:'obj',x:O.x-28,y:O.y+8,vx:-110,vy:-20,lift:10});toast('袋子裡掉出一顆球！')}tags=['destroy','funny'];desc='翻開提袋，咬出裡面的球'}
   else if(O?.id==='sofa'){O.chewed=true;tearPaper(O,4);tags=['destroy'];desc='咬開沙發，棉花飛出來'}
   else if(P){anim='snap';tags=['bite'];SND.sad();V.shake=.3;}
   else if(O?.id==='plant'){O.wobble=1.4;tags=['curious','funny'];desc='咬住盆栽，葉子抖個不停'}break;
  case 'love':
   anim=P?'rub':'nudge';SND.heart();tags=P?['affection']:['curious'];if(P){if(d.carry){const o=dropHeld();o.x=P.x-22;o.y=P.y+8;tags.push('cute');desc='把'+propName(o)+'送給'+P.n;noteAt('送你！',P.x,P.y-110)}}
   else if(O?.id==='ball'){kickBall(O);tags.push('funny');desc='用鼻子把球頂走'}
   else if(O?.id==='slipper'){O.vx=d.flip?-100:100;O.vy=8;desc='用鼻子推著拖鞋跑'}
   else if(O?.id==='sofa'){d.x=O.x;d.y=O.y+3;d.tx=d.x;d.ty=d.y;d.perch=true;anim='sofa';tags=['cute','calm'];desc='跳上沙發霸佔位子';noteAt('這是我的位子',d.x,d.y-90)}
   else if(O?.id==='plant'){O.wobble=1;desc='聞聞剛剛施肥的盆栽'}
   else if(O?.id==='bag'){O.wobble=.7;desc='用鼻子檢查提袋的味道';noteAt(O.open?'找到球的味道！':'裡面有什麼？',O.x-20,O.y-60)}break;
  case 'roll':anim='belly_up';dur=1.4;tags=['cute'];if(V.k==='inf')tags.push('funny');if(d.carry)dropHeld();SND.roll();break;
  case 'lie':SND.lie();anim=O?.id==='sofa'?'lie_flat':'sploot';dur=1.6;if(O?.id==='sofa'){tags=['shy'];d.hide=true;d.perch=false;d.x=O.x;d.y=O.y+5;d.tx=d.x;d.ty=d.y;noteAt('躲好！',d.x,d.y-45)}else tags=['calm'];break;
 }
 comicBurst(a,d);d.act=anim;d.actT=dur;d.actStart=V.t;d.action=a;
 event(tags,P,a,desc||descOf(a,P,O,tags));recordLife(a,P,O,beforeCarry);queueSkillAction(a);
}
function update(dt){
 tickSkillAction(dt);
 const follow=V.d;if(follow.pend&&follow.target&&!follow.target.gone){follow.tx=cl(follow.target.x+(follow.target.x>follow.x?-36:36),20,380);follow.ty=cl(follow.target.y+7,FT()+8,FB())}
 updateLegacy(dt);const d=V.d;
 for(const e of V.E){if(e.gone)continue;if(e.growTarget)e.growth+=(e.growTarget-(e.growth||1))*Math.min(1,dt*4);if(e.waterFlash)e.waterFlash=Math.max(0,e.waterFlash-dt);if(e.wobble)e.wobble=Math.max(0,e.wobble-dt);
  if(Math.abs(e.vx||0)+Math.abs(e.vy||0)>1){e.x+=(e.vx||0)*dt;e.y+=(e.vy||0)*dt;e.spin=(e.spin||0)+(e.vx||0)*dt/13;e.vx*=Math.exp(-dt*2.1);e.vy*=Math.exp(-dt*2.1);if(e.x<20||e.x>380){e.x=cl(e.x,20,380);e.vx*=-.65}if(e.y<FT()+10||e.y>FB()){e.y=cl(e.y,FT()+10,FB());e.vy*=-.65}e.lift=Math.max(0,(e.lift||0)-dt*26)}
 }
 for(const p of V.paper){p.life+=dt;if(p.life<1){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=200*dt;p.angle+=dt*2}else p.y=cl(p.y,FT()+20,FB());}
 if(V.paper.length>70)V.paper.splice(0,V.paper.length-70);
 V.notes=V.notes.filter(n=>(n.t+=dt)<1.8);V.bursts=V.bursts.filter(n=>(n.t+=dt)<.8);
 const moving=!d.act&&Math.hypot(d.tx-d.x,d.ty-d.y)>4;
 if(moving){if(V.decals.some(p=>p.r>8&&Math.hypot(d.x-p.x,(d.y-p.y)*2)<p.r*1.2))d.wetFeet=2.7;
  if(d.wetFeet>0){d.wetFeet-=dt;d.stepTime=(d.stepTime||0)+dt;if(d.stepTime>.16){d.stepTime=0;d.stepSide=!(d.stepSide);V.footprints.push({x:d.x+(d.stepSide?4:-4),y:d.y-2,t:0})}}
  for(const e of V.E)if(e.id==='ball'&&!e.gone&&Math.hypot(d.x-e.x,(d.y-e.y)*1.4)<23){e.vx=d.flip?-100:100;e.vy=(e.y-d.y)*3}
 }
 V.footprints=V.footprints.filter(p=>(p.t+=dt)<12).slice(-40);
}
function interactionHint(e){if(V.d.carry)return `叼著${propName(V.d.carry)}：咬＝放下 · 吠＝甩飛 · 撒嬌＝送人`;if(!e)return '點物品走近：拖鞋、球、盆栽都能玩';if(e.kind==='person')return '靠近'+e.n+'了，試試撒嬌或送禮';return {plant:'尿尿＝施肥長大 · 咬＝搖葉子',slipper:'咬＝叼起拖鞋 · 撒嬌＝鼻子推',ball:'咬＝叼球 · 撒嬌＝頂球 · 走過去也能推',tissue:'咬一口，扯出衛生紙雪花',bag:'咬開提袋，找找裡面藏了什麼',sofa:'撒嬌＝上沙發 · 躺平＝躲底下 · 咬＝拆家',chick:'咬＝叼走雞腿'}[e.id]||'試試不同互動'}
function drawFloorEffects(t){
 for(const dc of V.decals){const r=dc.r;g.save();g.translate(dc.x,dc.y);g.fillStyle='#ebca39d9';g.strokeStyle='#b69a30';g.lineWidth=.8;g.beginPath();g.ellipse(0,0,r*1.45,r*.55,-.06,0,7);g.fill();g.stroke();g.fillStyle='#f9e477';g.beginPath();g.ellipse(-r*.35,-r*.1,r*.6,r*.22,-.1,0,7);g.fill();g.strokeStyle='#fff9c9';g.lineWidth=1.4;g.beginPath();g.ellipse(r*.28,-r*.18,r*.45,r*.12,-.2,Math.PI,Math.PI*1.8);g.stroke();for(let i=0;i<3;i++){g.fillStyle='#d3b129aa';g.beginPath();g.ellipse(r*(1.6+i*.18)*(i%2?-1:1),i*2-3,1.5,1,0,0,7);g.fill()}g.restore();}
 const sp=V.d.peeSplash;if(sp){const age=V.t-sp.start;if(age>.2&&age<1.25){g.save();g.strokeStyle='#e1b91bd9';g.lineWidth=1.6;g.setLineDash([2,3]);g.lineDashOffset=-t*25;g.beginPath();g.moveTo(sp.sourceX,sp.sourceY);g.quadraticCurveTo(sp.x-10,sp.sourceY+3,sp.x,sp.y);g.stroke();g.setLineDash([]);g.strokeStyle='#c8a128';g.beginPath();g.ellipse(sp.x,sp.y,4+((age*20)%8),2+((age*8)%3),0,0,7);g.stroke();g.restore()}}
 for(const p of V.footprints){g.save();g.globalAlpha=(1-p.t/12)*.6;g.fillStyle='#bca22e';g.beginPath();g.ellipse(p.x,p.y,2.8,2,0,0,7);for(let i=0;i<3;i++){g.moveTo(p.x-3+i*3,p.y-3);g.ellipse(p.x-3+i*3,p.y-3,1,1.2,0,0,7)}g.fill();g.restore()}
 for(const p of V.paper){g.save();g.translate(p.x,p.y);g.rotate(p.angle);g.fillStyle='#ffffff';g.strokeStyle='#b9c8c3';g.lineWidth=.6;g.beginPath();g.moveTo(-p.size/2,-p.size/3);g.lineTo(p.size/2,-p.size/4);g.lineTo(p.size/3,p.size/3);g.lineTo(-p.size/3,p.size/2);g.closePath();g.fill();g.stroke();g.restore()}
}
function drawPlayObject(e,t){
 if(e.gone)return;const im=ART[e.id];if(!im?.complete||!im.naturalWidth){if(e.id==='chick'){g.font='23px sans-serif';g.textAlign='center';g.fillText('🍗',e.x,e.y)}return}
 const growth=e.id==='plant'?(e.growth||1):1,W=({sofa:142,plant:66,slipper:34,bag:46,ball:24,tissue:46}[e.id]||32)*growth,H=W*im.naturalHeight/im.naturalWidth;
 const target=RUN&&near()===e;
 if(target){g.save();g.strokeStyle='#536e6599';g.setLineDash([3,4]);g.beginPath();g.ellipse(e.x,e.y+3,W*.48,Math.max(5,W*.08),0,0,7);g.stroke();g.restore()}
 g.save();g.translate(e.x,e.y-(e.lift||0));if(e.wobble)g.rotate(Math.sin(t*15)*.06*e.wobble);
 if(e.id==='ball'){g.translate(0,-H/2);g.rotate(e.spin||0);g.drawImage(im,-W/2,-H/2,W,H)}else{if(e.chewed&&e.id!=='sofa')g.rotate(.12);g.drawImage(im,-W/2,-H,W,H)}g.restore();
 if(e.wet){g.fillStyle='#d7bb2b99';g.beginPath();g.ellipse(e.x,e.y-3,W*.32,4,0,0,7);g.fill()}
 if(e.id==='plant'&&e.water>=3){for(const [dx,dy]of [[-.25,.76],[.22,.57],[.12,.9]]){const x=e.x+dx*W,y=e.y-H*dy;g.fillStyle='#d892b0';for(let j=0;j<5;j++){g.beginPath();g.ellipse(x+Math.cos(j*1.256)*3,y+Math.sin(j*1.256)*3,3,2,j*1.256,0,7);g.fill()}g.fillStyle='#f0cf75';g.beginPath();g.arc(x,y,2,0,7);g.fill()}}
 if(target){g.font='500 9px sans-serif';g.textAlign='center';g.fillStyle='#45635a';g.fillText(propName(e),e.x,e.y+16)}
}
function drawCarried(o,x,y,flip,t){const im=ART[o.id];g.save();g.translate(x,y+5);g.rotate((flip?-.5:.5)+Math.sin(t*7)*.05);if(im?.complete&&im.naturalWidth){const w=o.id==='ball'?19:29,h=w*im.naturalHeight/im.naturalWidth;g.drawImage(im,-w/2,-h*.25,w,h)}else{g.font='20px sans-serif';g.textAlign='center';g.fillText('🍗',0,8)}g.restore()}
function comicBurst(action,d){
 const map={bark:[petText('汪！！'),'#ffc85a'],pee:['噓——','#f8df53'],bite:['喀！','#ffbd92'],love:['蹭～','#ffc6d7'],roll:['看我肚肚','#c8ddfa'],lie:['躺了。','#d4e5ca']},[text,color]=map[action]||['！','#fff'];
 V.bursts.push({x:cl(d.x+(d.flip?-28:30),50,350),y:Math.max(130,d.y-95),t:0,text,color});
}
function drawComicBursts(){for(const b of V.bursts||[]){g.save();g.translate(b.x,b.y-b.t*16);g.rotate(-.08);const scale=Math.min(1.06,.65+b.t*7);g.scale(scale,scale);g.globalAlpha=Math.min(1,(.8-b.t)*4);g.font='900 19px sans-serif';const w=g.measureText(b.text).width+28,h=31;g.fillStyle=b.color;g.strokeStyle='#493c30';g.lineWidth=1.8;g.beginPath();for(let i=0;i<20;i++){const a=i*Math.PI/10,r=i%2?.79:1,x=Math.cos(a)*w*.6*r,y=Math.sin(a)*h*.65*r;i?g.lineTo(x,y):g.moveTo(x,y)}g.closePath();g.fill();g.stroke();g.fillStyle='#45372c';g.textAlign='center';g.fillText(b.text,0,6);g.restore()}}

/* User photos stay on-device. This is a whole-body cutout, not generated pose synthesis. */
function loadSaved(){
 try{const selected=PET,s=JSON.parse(localStorage.getItem(petPhotoKey())||'null');if(!s?.data)return;const im=new Image();im.onload=()=>{if(PET!==selected)return;BODY={image:im,nose:s.nose||[410,260]};FACE=null;TINT=null;DOGN=s.name||petDefaultName();markMy()};im.src=s.data}catch(e){}
}
function markMy(){
 const p=$('#title p');if(p){p.textContent='';const lines=[`今天換${DOGN}當主角。`,'50 組飼主，這次誰帶你回家？'];lines.forEach((s,i)=>{if(i)p.appendChild(document.createElement('br'));p.appendChild(document.createTextNode(s))})}
 const b=$('#bMy');if(b)b.textContent=BODY?`換「${DOGN}」的全身照片`:petText('換成我家的狗');
}
function clearMy(){BODY=null;FACE=null;DOGN=petDefaultName();setTint(null);try{localStorage.removeItem(petPhotoKey());localStorage.removeItem('adopt_mydog')}catch(e){}markMy()}
function drawWholeDog(q,anim,x,y,S,t,o={}){
 const im=BODY?.image;if(!im?.complete||!im.naturalWidth)return;
 q.save();q.translate(x,y);if(o.flip)q.scale(-1,1);if(o.alpha!==undefined)q.globalAlpha=o.alpha;
 let dy=0,rot=0,sx=1,sy=1;
 if(['walk','run','carry_walk'].includes(anim)){dy=-Math.abs(Math.sin(t*9))*S*.022;rot=Math.sin(t*9)*.025}
 else if(['bark_angry','bark','snap'].includes(anim)){sx=1+Math.sin(t*22)*.025;rot=-Math.sin(t*18)*.025}
 else if(['rub','nudge','lean'].includes(anim)){rot=-.06+Math.sin(t*5)*.045}
 else if(['belly_up','roll','lie_flat'].includes(anim)){rot=-.18+Math.sin(t*7)*.04;sy=.9}
 else if(['sploot','lie','sleep'].includes(anim)){sy=.86;rot=.03}
 else if(anim==='excited'){dy=-Math.abs(Math.sin(t*7))*S*.08;rot=Math.sin(t*7)*.04}
 else sy=1+Math.sin(t*3)*.006;
 q.translate(0,dy);q.rotate(rot);q.scale(sx,sy);q.drawImage(im,-S/2,-S*472/512,S,S);q.restore();
}
function myDog(done){
 let im=null,points=[],mode='outline',mirror=false,cut=null,nose=[410,260],step='outline',busy=false,session=0;
 const SIZE=512;let photoFit=null;
 show(`<div class="photo-header"><button type="button" id="whole-back" aria-label="返回首頁">← 返回</button><h2>換成我家的狗</h2></div><p class="sub">選一張側面全身照。</p>
 <label class="big alt">選照片<input id="whole-file" type="file" accept="image/*" hidden></label>
 <div class="photo-steps" id="photo-step">選照片 → 圈出狗狗 → 點嘴巴</div>
 <canvas id="whole-editor" width="512" height="512" aria-label="全身照片編輯區"></canvas>
 <p class="sub photo-help" id="photo-help">透明背景 PNG 可直接使用；一般照片請沿狗狗外緣點一圈。</p>
 <div class="photo-tools"><button type="button" id="photo-undo">退一步</button><button type="button" id="photo-clear">重圈</button><button type="button" id="photo-flip">左右翻轉</button></div>
 <button class="big alt" type="button" id="photo-cut" disabled>完成輪廓，去掉背景</button>
 <div class="photo-brush" hidden><span>修邊</span><button type="button" id="photo-erase">擦除</button><button type="button" id="photo-restore">還原</button><input aria-label="筆刷大小" id="photo-brush-size" type="range" min="3" max="30" value="12"></div>
 <input id="whole-name" maxlength="8" placeholder="狗狗名字" value="${BODY?escapeText(DOGN):''}">
 <p class="photo-limit">照片會移動、晃動；不會生成新的動作姿勢。</p>
 <button class="big" id="whole-save" type="button" disabled>套用</button>${BODY?'<button class="big alt" id="whole-reset" type="button">改回阿聰</button>':''}<button class="big alt" id="whole-cancel" type="button">取消</button>`,ev=>{
  const id=ev.target.closest('button')?.id;if(id==='whole-cancel'||id==='whole-back'){session++;hide();done?.(false)}
  if(id==='whole-reset'){session++;clearMy();hide();done?.(true)}
  if(id==='photo-undo'&&step==='outline'){points.pop();render();}
  if(id==='photo-clear'){points=[];cut=null;step='outline';mode='outline';$('#photo-cut').textContent='完成輪廓，去掉背景';$('#photo-step').textContent='② 沿狗狗外緣圈出整隻狗';$('#whole-save').disabled=true;$('#photo-cut').hidden=false;$('.photo-brush').hidden=true;$('#photo-help').textContent='沿著狗狗的外緣點一圈，至少 3 點；點得越密，輪廓越細。';render()}
  if(id==='photo-flip'){mirror=!mirror;if(cut){const c=document.createElement('canvas');c.width=c.height=SIZE;const z=c.getContext('2d');z.translate(SIZE,0);z.scale(-1,1);z.drawImage(cut,0,0);cut=c;nose=[SIZE-nose[0],nose[1]];originalCut=cloneCanvas(cut);render()}else{points=[];render()}}
  if(id==='photo-cut'){if(cut){mode='nose';$('#photo-cut').hidden=true;$('#photo-help').textContent='請點狗狗嘴巴的位置。';}else if(im&&points.length>=3)makeCut();}
  if(id==='photo-erase'||id==='photo-restore'){mode=id==='photo-erase'?'erase':'restore';$('#photo-help').textContent='在圖片上塗抹修邊。完成後按「點嘴巴」設定叼物位置。';$('#photo-cut').hidden=false;$('#photo-cut').disabled=false;$('#photo-cut').textContent='修好了，點嘴巴位置';}
  if(id==='whole-save')save();
 });
 const canvas=$('#whole-editor'),q=canvas.getContext('2d');let originalCut=null,painting=false;
 function cloneCanvas(c){const out=document.createElement('canvas');out.width=out.height=SIZE;out.getContext('2d').drawImage(c,0,0);return out}
 function drawCheck(){q.fillStyle='#e4ebe6';q.fillRect(0,0,SIZE,SIZE);q.fillStyle='#f4f7f2';for(let y=0;y<SIZE;y+=32)for(let x=0;x<SIZE;x+=32)if((x+y)%64===0)q.fillRect(x,y,32,32)}
 function render(){
  if(!$('#whole-editor'))return;drawCheck();
  if(cut){q.drawImage(cut,0,0);q.strokeStyle='#bd7554';q.lineWidth=2;q.setLineDash([5,5]);q.beginPath();q.moveTo(0,472);q.lineTo(SIZE,472);q.stroke();q.setLineDash([]);if(step==='ready'){q.fillStyle='#bd7554';q.beginPath();q.arc(nose[0],nose[1],5,0,7);q.fill();q.font='17px sans-serif';q.fillText('嘴巴',Math.min(450,nose[0]+12),nose[1]-8)}return}
  if(im){const k=Math.min(472/im.naturalWidth,472/im.naturalHeight);photoFit={x:(SIZE-im.naturalWidth*k)/2,y:(SIZE-im.naturalHeight*k)/2,w:im.naturalWidth*k,h:im.naturalHeight*k};q.save();if(mirror){q.translate(SIZE,0);q.scale(-1,1)}q.drawImage(im,photoFit.x,photoFit.y,photoFit.w,photoFit.h);q.restore();if(points.length){q.strokeStyle='#357868';q.fillStyle='#71b3a92a';q.lineWidth=3;q.beginPath();points.forEach((p,i)=>i?q.lineTo(...p):q.moveTo(...p));q.closePath();q.fill();q.stroke();q.fillStyle='#fff';for(const p of points){q.beginPath();q.arc(...p,4,0,7);q.fill()}}}else{q.fillStyle='#7f958b';q.font='24px sans-serif';q.textAlign='center';q.fillText('先選一張全身照片',256,260);q.textAlign='left'}
  $('#photo-cut').disabled=points.length<3;
 }
 function normalize(source){
  const c=cloneCanvas(source),z=c.getContext('2d'),d=z.getImageData(0,0,SIZE,SIZE).data;let x0=SIZE,y0=SIZE,x1=0,y1=0,count=0;
  for(let y=0;y<SIZE;y++)for(let x=0;x<SIZE;x++)if(d[(y*SIZE+x)*4+3]>32){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);count++}
  if(count<50)throw Error('輪廓太小，請重新圈選整隻狗');
  const w=x1-x0+1,h=y1-y0+1,k=Math.min(385/w,370/h),dw=w*k,dh=h*k,out=document.createElement('canvas');out.width=out.height=SIZE;out.getContext('2d').drawImage(c,x0,y0,w,h,(SIZE-dw)/2,472-dh,dw,dh);return out;
 }
 function makeCut(){
  const c=document.createElement('canvas');c.width=c.height=SIZE;const z=c.getContext('2d');z.beginPath();points.forEach((p,i)=>i?z.lineTo(...p):z.moveTo(...p));z.closePath();z.clip();if(mirror){z.translate(SIZE,0);z.scale(-1,1)}z.drawImage(im,photoFit.x,photoFit.y,photoFit.w,photoFit.h);try{finishCut(normalize(c))}catch(e){$('#photo-help').textContent=e.message}
 }
 function finishCut(c){cut=c;originalCut=cloneCanvas(c);step='nose';mode='nose';$('#photo-step').textContent='③ 點一下嘴巴的位置，叼拖鞋才會對準';$('#photo-help').textContent='先讓狗狗朝右（可按左右翻轉），再點嘴巴。需要時可用擦除／還原修邊。';$('#photo-cut').hidden=true;$('.photo-brush').hidden=false;$('#whole-save').disabled=true;render()}
 function position(e){const r=canvas.getBoundingClientRect();return [cl((e.clientX-r.left)/r.width,0,1)*SIZE,cl((e.clientY-r.top)/r.height,0,1)*SIZE]}
 function paint(p){const z=cut.getContext('2d'),radius=Number($('#photo-brush-size').value);z.save();z.beginPath();z.arc(p[0],p[1],radius,0,7);if(mode==='erase'){z.globalCompositeOperation='destination-out';z.fill()}else{z.clip();z.drawImage(originalCut,0,0)}z.restore();render()}
 canvas.onpointerdown=e=>{if(!im)return;const p=position(e);if(cut&&(mode==='erase'||mode==='restore')){painting=true;canvas.setPointerCapture(e.pointerId);paint(p)}else if(cut){nose=p;step='ready';$('#whole-save').disabled=false;$('#photo-step').textContent='完成！全身照片會取代整隻阿聰';$('#photo-help').textContent='紅點是叼物位置。點其他地方可重新定位。';render()}else{points.push(p);render()}};
 canvas.onpointermove=e=>{if(painting)paint(position(e))};canvas.onpointerup=canvas.onpointercancel=()=>{painting=false};
 $('#whole-file').onchange=e=>{const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f),n=new Image(),token=++session;$('#photo-help').textContent='讀取照片中…';n.onload=()=>{URL.revokeObjectURL(url);if(token!==session||!$('#whole-editor'))return;im=n;points=[];mirror=false;cut=null;step='outline';mode='outline';$('#photo-cut').textContent='完成輪廓，去掉背景';$('#photo-step').textContent='② 沿狗狗外緣圈出整隻狗';render();
   const c=document.createElement('canvas');c.width=c.height=SIZE;const z=c.getContext('2d');z.drawImage(im,photoFit.x,photoFit.y,photoFit.w,photoFit.h);const dx=Math.max(0,Math.floor(photoFit.x)),dy=Math.max(0,Math.floor(photoFit.y)),dw=Math.max(1,Math.floor(photoFit.w)),dh=Math.max(1,Math.floor(photoFit.h)),data=z.getImageData(dx,dy,dw,dh).data;let alpha=0;for(let i=3;i<data.length;i+=4)if(data[i]<32)alpha++;if(alpha>dw*dh*.02){try{finishCut(normalize(c))}catch(err){$('#photo-help').textContent=err.message;return;};$('#photo-help').textContent='已辨識透明背景。讓狗狗朝右，並點一下嘴巴的位置。'}else{$('#photo-help').textContent='沿狗狗外緣點一圈，頭、耳朵、尾巴、四腳都要圈進去。';$('#photo-cut').hidden=false;$('.photo-brush').hidden=true;$('#whole-save').disabled=true;}
  };n.onerror=()=>{URL.revokeObjectURL(url);$('#photo-help').textContent='這張照片讀取失敗，請改用 JPG 或 PNG。'};n.src=url;};
 function save(){if(!cut||step!=='ready'||busy)return;busy=true;const name=($('#whole-name').value.trim()||'我家的狗').replace(/[<>]/g,''),data=cut.toDataURL('image/png'),newIm=new Image();newIm.onload=()=>{BODY={image:newIm,nose:nose.slice()};FACE=null;setTint(null);DOGN=name;let saved=true;try{localStorage.setItem(petPhotoKey(),JSON.stringify({name,data,nose}))}catch(e){saved=false}markMy();hide();done?.(true);toast(saved?'整隻狗已加入，下次也會保留。':'已套用；儲存空間不足，重開後需再選照片。')};newIm.src=data;}
 render();
}
markMy();

/* Optional untimed playground and pause controls. Competitive visitor scores stay unchanged. */
function returnToTitle(){RUN=false;PAUSED=false;V=null;hide();$('#banner').hidden=true;$('#tray').hidden=true;$('#tbar').hidden=true;$('#title').hidden=false;titleArt();markMy()}
function pauseGame(){if(!RUN||PAUSED)return;PAUSED=true;show(`<h2>先休息一下</h2><p class="sub">人類的面試，可以等一下。<br>遊戲時間已暫停。</p><button class="big" id="resume-game">繼續玩</button><button class="big alt" id="quit-game">回首頁</button>`,e=>{const id=e.target.closest('button')?.id;if(id==='resume-game'){hide();PAUSED=false;SND.init()}if(id==='quit-game')returnToTitle()})}
const pauseButton=document.createElement('button');pauseButton.id='pause-game';pauseButton.type='button';pauseButton.textContent='Ⅱ';pauseButton.setAttribute('aria-label','暫停遊戲');pauseButton.onclick=pauseGame;$('#app').append(pauseButton);
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseGame()});document.addEventListener('keydown',e=>{if(e.key==='Escape')pauseGame()});

/* Sample three distinct groups from the full visitor roster each game. */
const EXTRA_VISITORS=[
 ['police_guest','陳警員','警犬訓練員','我喜歡有警覺、也能冷靜下來的狗。','eng','police',{guard:2,loud:.3,calm:1.8,curious:1.5,affection:1,mess:-2,destroy:-2},'他觀察你是不是叫完還能安靜待著。'],
 ['nose_guest','小周','工作犬訓練員','先別急著討摸摸。你有聞到袋子裡的味道嗎？','eng','narcotics',{curious:2.5,calm:1.5,affection:.5,loud:-1,mess:-2,destroy:-.2},'訓練員看向提袋：「鼻子很靈，值得再評估。」'],
 ['fire_guest','小夏','消防隊員','我想認識喜歡找東西、願意跟人合作的狗。','eng','fire',{curious:2,affection:2,guard:1,funny:.5,loud:0,mess:-1.5,destroy:-1},'他把手掌攤開：「找到東西，可以交給我。」'],
 ['factory_guest','洪老闆','工廠老闆','顧門不是拴在門口。下班要跟我一起回家。','eng','factory_boss',{guard:2,affection:2,calm:1,curious:1,loud:.5,mess:-1,destroy:-2},'老闆笑了：「我們員工很會寵狗，你也得跟人處得來。」'],
 ['shop_guest','美玲姐','雜貨店老闆','店裡很多客人。親人一點，大家才敢進門。','mom','shop',{affection:2.5,cute:1.5,calm:1,funny:.5,loud:-1.5,mess:-2,destroy:-2},'她蹲下來：「願意把玩具拿給我嗎？」'],
 ['cafe_guest','小安','咖啡店店主','我們有安靜休息區，你不用整天招呼客人。','inf','cafe',{calm:2.5,affection:1.5,shy:1,cute:1,loud:-2,mess:-2.5,destroy:-2},'店主小聲說：「陪我安靜坐一下也很好。」'],
 ['flower_guest','阿惠','花店老闆','先聞聞看，不要把整盆吃掉就好。','mom','gardener',{curious:2,funny:1.5,affection:1,cute:1,loud:-.5,mess:-1,destroy:-2},'她發現盆栽變了：「這間認養會的植物也太神奇！」'],
 ['sport_guest','阿杰','喜歡慢跑的飼主','散步、玩球、回家吃飯。你想加入嗎？','eng','athlete',{curious:2,funny:1.5,affection:1.5,cute:1,calm:-.5,loud:0,mess:-1,destroy:-1},'他指著球：「你喜歡用鼻子頂，還是叼回來？」']
];
for(const v of ROSTER30){
 EXTRA_VISITORS.push([v.key,v.name,v.tag,v.hint,v.key,v.ending,v.pref,v.notice]);
 FATE[v.ending]={n:v.title,an:'sit',bg:'#f5e8c4',icon:v.icon,job:v.tag,hint:'遇到'+v.name+'，用牠喜歡的方式相處。',rule:'讓'+v.name+'給出至少 4 星，並選擇這份認養緣分；全場沒有咬人。',t:[v.story],punch:v.punch};
 if(!FATES.includes(v.ending))FATES.push(v.ending);
}
for(const [key,n,tag,hint,art,baseFate,pref,notice] of EXTRA_VISITORS){
 GROUPS[key]={n,tag,hint,art:key,baseFate,ppl:[{id:key,n,x:292,art:key}],pref:{calm:0,curious:0,cute:.5,affection:1,loud:-1,mess:-1.5,destroy:-2,bite:-5,funny:0,shy:0,guard:0,steal:-1,cutecrime:.3,tsundere:.3,offender:-1,...pref},ev:{t:10,txt:notice,k:'notice'}};
 const positive={calm:'能安靜待著，讓我很放心',curious:'會主動探索，鼻子很忙',cute:'翻肚時很放鬆，願意相信人',affection:'會主動靠近人，讓我想多陪牠一下',loud:'很有精神，聲音也很有存在感',guard:'有警覺性，值得慢慢引導',funny:'互動很有趣，我忍不住笑了',shy:'比較慢熟，我願意給牠空間'};
 const negative={mess:'地板濕了，回家需要慢慢教',destroy:'咬壞東西了，需要合適的玩具和引導',bite:'牠咬了人，現在先保持距離',loud:'聲音太大，我的環境不太適合',steal:'拿走了別人的東西，要練習交換',calm:'我想找更喜歡活動的夥伴',shy:'牠還沒準備好靠近我'};
 for(const [tg,lines]of Object.entries(LN))lines[key]=(GROUPS[key].pref[tg]||0)<0?(negative[tg]||'這種互動不太適合我的生活'):(positive[tg]||'牠的個性很鮮明，讓我留下了印象');
}
function sampleVisitors(rng=Math.random){const pool=Object.keys(GROUPS);for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}return pool.slice(0,3)}
function visitorOutcome(){const result=decideLegacy(),[id,best]=result;if(best&&GROUPS[best.k]?.baseFate&&!TOT.bite&&id!=='star')return[GROUPS[best.k].baseFate,best];return result}

/* Future chapters are chance events, never a punishment for a dog's actions. */
const LIFE_ENDINGS={
 balcony:{n:'陽台上的四季',an:'sad',bad:1,scene:'balcony',place:'很近的家，很遠的人',punch:'我聽得見家裡的笑聲。',t:['起初你能進客廳，後來卻長期被留在陽台。碗常空著，門總關著；你等的不是更大的地方，是有人記得你。這不是你的錯。']},
 roadside:{n:'車尾燈消失以後',an:'scared',bad:1,scene:'roadside',place:'雨裡的公車亭',punch:'他說等一下，我就一直等。',t:['搬家那天，你被留在路邊。車子轉過彎，再也沒有回來。你守著那條帶有熟悉味道的毯子，直到有人停下來查看你的狀況。被遺棄不是你的錯。']},
 short_chain:{n:'兩公尺的世界',an:'sit',bad:1,scene:'chainyard',chain:1,place:'鐵皮屋後的角落',punch:'我認識整面牆，卻沒走過那條街。',t:['你被轉交給另一個人，從此長期拴在院角。雨來時沒有遮蔽，散步變成遙遠的事。你仍會抬頭看腳步聲，但這樣的對待不是家。']},
 flinch:{n:'不敢再靠近的手',an:'scared',bad:1,scene:'darkroom',place:'關著門的房間',punch:'我以前以為，伸手就是要摸我。',t:['照顧者開始用打罵和關禁閉對待你。你學會縮到角落，連伸來的手都會怕。錯的是傷害你的方式，不是你；窗外的鄰居終於留意到異狀，開始求助。']},
 waiting_return:{n:'名字又被寫回籠牌',an:'sad',bad:1,scene:'shelter',place:'再一次等待',punch:'床墊還有我的味道，我卻回不去了。',t:['家庭沒有做好長期照顧的準備，你又被送回收容所。熟悉的志工把床墊鋪好，陪你重新適應。這次等待很難，但你仍值得一個不再離開的家。']},
 recovery:{n:'拆掉繃帶的那一天',an:'lie',scene:'recovery',place:'有人陪的復原路',punch:'這次醒來，身邊有人。',t:['你在外走失後受了傷，被人送到動物醫院。家人找到你，陪著治療、復健。回家那天走得很慢，他們也一步一步等你。']},
 goodbye:{n:'最後一次一起看夕陽',an:'sleep',scene:'garden',place:'被好好愛過的一生',punch:'這一生，我不是誰不要的狗。',t:['很多年過去，你的步子慢了，家人就把散步變短，把陪伴變長。最後的日子有照顧、有止痛，也有熟悉的人守著。你安穩走完了一生，留下滿屋子的回憶。']},
 newbaby:{n:'從毛小孩變成大姊姊',an:'sit',scene:'baby',place:'家裡又多了一個人',punch:'小的哭，大的汪，爸媽沒得睡。',t:['家裡迎來寶寶，你的位置沒有被拿走。大人慢慢安排安全相處，仍然陪你散步。多年後，孩子學會的第一個名字，是你的。']},
 secondchance:{n:'有人替我解開了繩子',an:'look_up',scene:'rescuegarden',place:'第二次，才是真的家',punch:'原來出門，不一定是被丟掉。',t:['你曾在不當照顧下長期受困。通報後，救援人員帶你離開，安排醫療與中途照顧。新家沒有催你親近；很久以後，你第一次主動靠在人腿邊睡著。']},
 hoarding:{n:'被愛的名義塞滿',an:'sad',bad:1,scene:'storeroom',place:'照顧跟不上的房間',punch:'這裡好多名字，卻沒有人叫到我。',t:['對方不斷接回動物，空間與照顧能力卻沒有跟上。你長期缺少清潔、活動和醫療。直到外界介入協助安置，你才重新得到乾淨的床和個別照顧。']},
 birthday:{n:'第一個有蛋糕的生日',an:'excited',scene:'birthday',place:'全家都記得的那一天',punch:'我不知道生日是什麼，但大家都在。',t:['家人不知道你的生日，就把相遇那天記了下來。每年有適合狗狗的點心、一張歪掉的合照，還有那句你聽不懂卻很喜歡的：幸好遇見你。']}
};
for(const [key,f]of Object.entries(LIFE_ENDINGS)){f.icon=f.bad?'…':'♡';FATE[key]=f;FATES.push(key)}
function isHomeEnding(id){return ['eng_good','fam_good','inf_good',...Object.values(GROUPS).map(g=>g.baseFate)].includes(id)}
function futureChapter(id,rng=Math.random){
 if(!isHomeEnding(id))return id;
 if(!LIFE.futureRoll)LIFE.futureRoll=[rng(),rng()];
 if(LIFE.futureRoll[0]>=.22)return id;
 const keys=Object.keys(LIFE_ENDINGS);return keys[Math.min(keys.length-1,Math.floor(LIFE.futureRoll[1]*keys.length))];
}

/* Career offers are earned by actual play. No random rarity or made-up player percentages. */
const CAREERS={
 police:{n:'警員的好搭檔',an:'sit',bg:'#d9e8f5',icon:'★',job:'警犬見習生',hint:'會提醒人，又懂得冷靜下來。',rule:'對人吠至少 2 次，再躺平或送一份禮物；全場沒有咬人。',check:m=>(m.alert||0)>=2&&((m.gifts||0)>=1||(ACT.lie||0)>=1)&&!TOT.bite,t:['警犬訓練員看上你的警覺。通過後續評估與訓練，你成了巡邏搭檔。第一個任務：找出誰偷吃了便當。'],punch:'我有編制，你有嗎？'},
 narcotics:{n:'緝毒犬見習生',an:'sniff',bg:'#e1e8d3',icon:'◎',job:'鼻子有正職',hint:'先聞出藏在袋裡的東西，再把發現交給人。',rule:'用撒嬌聞提袋、咬開提袋，再叼一件東西送人；全場沒有咬人。',check:m=>m.sniffBag&&m.openBag&&m.gifts&&!TOT.bite,t:['你的鼻子讓訓練員留下名片。通過工作犬評估和訓練後，你開始協助緝毒。現在，連同事的零食都藏不住。'],punch:'我的鼻子，比你的履歷有用。'},
 fire:{n:'消防隊的搜救搭檔',an:'look_up',bg:'#ffe0c6',icon:'✦',job:'搜救犬培訓生',hint:'把甩出去的球找回來，再提醒人。',rule:'叼球後用吠甩出去，再叼回球、送人；全場沒有咬人。',check:m=>m.recoveredBall&&m.gifts&&!TOT.bite,t:['消防隊員發現你找東西很專心。經過評估與搜救訓練，你穿上工作背心。休假時，專門搜救掉到沙發下的餅乾。'],punch:'別怕，我聞得到你。'},
 factory_boss:{n:'工廠小老闆',an:'sofa',bg:'#e5e8dc',icon:'▣',job:'員工福利委員',hint:'會顧門，也要會做人——做狗。',rule:'對人吠過，並把物件送給至少 2 位不同的人。',check:m=>m.alert&&(m.giftPeople||[]).length>=2&&!TOT.bite,t:['工廠老闆帶你回家，白天一起上班。你有自己的窩、散步時間和一整排乾爹。董事長負責開會，你負責讓大家準時下班。'],punch:'老闆是他，公司是我的。'},
 shop:{n:'巷口店狗',an:'car_window',bg:'#f7e5bb',icon:'⌂',job:'迎賓兼收銀監工',hint:'嘴巴會送禮，身體會撒嬌。',rule:'送人一件物品，再對人撒嬌至少 2 次；全場沒有咬人。',check:m=>m.gifts&&(TOT.affection||0)>=2&&!TOT.bite,t:['店老闆把你帶回家。每天開店，你就坐在門口迎客。客人本來只想買醬油，最後都蹲下來跟你聊了十分鐘。'],punch:'本店可以摸狗，不能賒帳。'},
 cafe:{n:'咖啡店療癒部長',an:'lie',bg:'#f0dfc9',icon:'☕',job:'摸摸不用加價',hint:'安靜待著，也能讓人想多坐一下。',rule:'躺平至少 2 次、對人撒嬌一次；沒有咬人或拆東西。',check:m=>(ACT.lie||0)>=2&&(TOT.affection||0)>=1&&!TOT.bite&&!TOT.destroy,t:['你成了友善咖啡店的店狗，有自己的安靜休息區。客人說咖啡有療癒感，其實是你把頭靠在他鞋子上。'],punch:'拿鐵半糖，摸狗全糖。'},
 therapy:{n:'陪伴犬實習生',an:'rub',bg:'#f9dfeb',icon:'♡',job:'把難過接住',hint:'每個人都能分到你的溫柔。',rule:'對至少 2 位不同的人撒嬌，共至少 3 次，再翻肚一次；沒有咬人。',check:m=>(m.lovePeople||[]).length>=2&&(TOT.affection||0)>=3&&(ACT.roll||0)>=1&&!TOT.bite,t:['你被帶回一個願意陪你慢慢學習的家。完成評估與培訓後，你和照顧者一起做陪伴服務。你不懂煩惱，但很會靠著人。'],punch:'我不會說話，但我有空。'},
 gardener:{n:'園藝界的神祕高手',an:'wag',bg:'#e2efc5',icon:'❀',job:'遊戲限定施肥大師',hint:'這裡的盆栽，好像有自己的祕密。',rule:'在同一盆植物旁尿尿 3 次，讓它開花。',check:m=>m.bloom,t:['花店老闆看見你讓盆栽開花，當場決定聘你當店狗。這是遊戲裡的魔法：現實的花，還是要好好澆水。'],punch:'別人澆水，我澆奇蹟。'},
 slipper:{n:'拖鞋收藏家',an:'carry_walk',bg:'#ffe5d2',icon:'◇',job:'左右腳都歸我',hint:'愛一件東西，就帶著走，再分享出去。',rule:'叼起拖鞋至少 2 次，並把拖鞋送給人。',check:m=>(m.slipperPick||0)>=2&&m.slipperGift,t:['雜貨店老闆領養了你，還準備一雙專屬玩具拖鞋。每天打烊盤點，都會在你的窩裡多找到一隻左腳。'],punch:'我收藏的，是人類的腳味。'},
 tissue:{n:'衛生紙裝置藝術家',an:'belly_up',bg:'#e9e6f9',icon:'✺',job:'拆家美學系',hint:'作品完成後，記得用可愛負責。',rule:'咬衛生紙至少 3 次，再翻肚一次。',check:m=>(m.paperPulls||0)>=3&&(ACT.roll||0)>=1,t:['陶藝師把你帶回家，專門給你安全的嗅聞玩具。你第一次的作品叫《客廳，下雪了》。主人看了很久，最後去拿掃把。'],punch:'不是我拆的，是靈感。'},
 athlete:{n:'公園撿球冠軍',an:'walk',bg:'#def0d8',icon:'●',job:'球隊唯一主力',hint:'鼻子、嘴巴和四條腿，都拿來玩球。',rule:'用撒嬌頂球至少 3 次，再叼起球一次。',check:m=>(m.ballPush||0)>=3&&m.ballPick,t:['愛運動的一家人帶你回家。你成了公園的撿球冠軍，獎金是一條潔牙骨。頒獎時你還在盯著裁判手上的球。'],punch:'球可以輸，球不能丟。'},
 sofa_king:{n:'沙發不動產大亨',an:'sofa',bg:'#e5eadc',icon:'♜',job:'全家座位我分配',hint:'先佔位，再證明你真的很會躺。',rule:'在沙發旁撒嬌坐上去，再躺平至少 3 次。',check:m=>m.sofaSit&&(ACT.lie||0)>=3,t:['退休老師帶你回家。三天後，她坐小板凳，你睡三人沙發。她跟鄰居說：「牠很乖，只是房產比較多。」'],punch:'這不是沙發，這是我的地。'},
 magician:{n:'雞腿消失術大師',an:'head_tilt',bg:'#eee1f4',icon:'✧',job:'被窩裡的魔術師',hint:'雞腿不見了？看看沙發底下。',rule:'叼走雞腿後，靠近沙發按躺平躲起來。',check:m=>m.chickenHide,t:['一位魔術師領養了你。表演時他變不見硬幣，你變不見晚餐。觀眾掌聲最大的一次，是你把雞腿藏進沙發底下。'],punch:'你看見雞腿了嗎？我沒有。'},
 plumber:{n:'機車行的小助手',an:'sit',bg:'#dceef2',icon:'≈',job:'漏水偵測專員',hint:'地板上的水路，怎麼越來越複雜。',rule:'尿尿至少 5 次，再對人撒嬌一次；沒有咬人。',check:m=>(ACT.pee||0)>=5&&(TOT.affection||0)>=1&&!TOT.bite,t:['機車行師傅看你對液體很有研究，帶你回家當助手。你負責陪伴和迎客。現場漏水時，大家會先確認你剛剛在哪裡。'],punch:'這次的漏水，真的不是我。'},
 delivery:{n:'快遞站小幫手',an:'carry_walk',bg:'#f3e5c7',icon:'↗',job:'最後一公尺配送',hint:'每個人都收到東西，就算你送達。',rule:'送出至少 3 份物件，交給至少 2 位不同的人。',check:m=>(m.gifts||0)>=3&&(m.giftPeople||[]).length>=2&&!TOT.bite,t:['外送員把你帶回家。他出門送餐，你在安全的家裡等他，下班準時叼著牽繩催人回家。你的配送範圍：從門口到沙發。'],punch:'已送達。簽收請摸頭。'},
 diplomat:{n:'人類外交大使',an:'rub',bg:'#f5e8c4',icon:'✿',job:'見誰都像老朋友',hint:'不挑人，不挑場合，每個人都能摸一下。',rule:'對至少 3 位不同的人撒嬌，全場沒有咬人。',check:m=>(m.lovePeople||[]).length>=3&&!TOT.bite,t:['三組訪客都記得你主動靠過來的那一刻。你成了一家人的狗，也成了整條街的朋友。每天散步，都像在跑里民行程。'],punch:'我沒有選區，整條街都愛我。'}
};
for(const [id,f]of Object.entries(CAREERS)){FATE[id]=f;if(!FATES.includes(id))FATES.push(id)}
const TOTAL_FATES=FATES.length;
function newGame(){newGameLegacy();ORDER=sampleVisitors();LIFE={giftPeople:[],lovePeople:[],seenOffers:[]};LAST_OUTCOME=null;PAUSED=false;}
function bump(key){LIFE[key]=(LIFE[key]||0)+1}
function recordLife(a,P,O,held){
 if(!LIFE.giftPeople)LIFE.giftPeople=[];if(!LIFE.lovePeople)LIFE.lovePeople=[];
 if(a==='bark'&&P)bump('alert');
 if(a==='bark'&&held?.id==='ball')LIFE.ballThrown=held;
 if(a==='love'&&P){if(!LIFE.lovePeople.includes(P.id))LIFE.lovePeople.push(P.id);if(held){bump('gifts');if(!LIFE.giftPeople.includes(P.id))LIFE.giftPeople.push(P.id);if(held.id==='slipper')bump('slipperGift');}}
 if(a==='bite'&&!held&&O?.id==='ball'){bump('ballPick');if(LIFE.ballThrown===O)LIFE.recoveredBall=true;}
 if(a==='bite'&&!held&&O?.id==='slipper')bump('slipperPick');
 if(a==='bite'&&O?.id==='tissue')bump('paperPulls');
 if(a==='bite'&&O?.id==='bag')LIFE.openBag=true;
 if(a==='love'&&O?.id==='bag')LIFE.sniffBag=true;
 if(a==='love'&&O?.id==='ball')bump('ballPush');
 if(a==='love'&&O?.id==='sofa')LIFE.sofaSit=true;
 if(a==='pee'&&O?.id==='plant'&&O.water>=3)LIFE.bloom=true;
 if(a==='lie'&&O?.id==='sofa'&&held?.id==='chick')LIFE.chickenHide=true;
 const offers=careerOffers();LIFE.seenOffers||=[];for(const id of offers){if(!LIFE.seenOffers.includes(id)){LIFE.seenOffers.push(id);noteAt('發現狗生線索！',V.d.x,V.d.y-120,'#896536');toast(V.practice?'練習發現：'+CAREERS[id].hint:'有人注意到你的天賦了…');SND.ding();break;}}
}
const CAREER_VISITORS={police:['police_guest'],narcotics:['nose_guest'],fire:['fire_guest'],factory_boss:['factory_guest'],shop:['shop_guest'],cafe:['cafe_guest'],gardener:['flower_guest'],athlete:['sport_guest'],therapy:['rescue_guest'],slipper:['shop_guest'],tissue:['pottery_guest'],sofa_king:['teacher_guest'],magician:['magic_guest'],plumber:['moto_guest'],delivery:['courier_guest'],diplomat:null};
function careerVisitor(id){return RES.filter(r=>r.stars>=4&&GROUPS[r.k]&&(!CAREER_VISITORS[id]||CAREER_VISITORS[id].includes(r.k))).sort((a,b)=>b.stars-a.stars)[0]||null}
function careerOffers(){return Object.keys(CAREERS).filter(id=>CAREERS[id].check(LIFE)&&careerVisitor(id))}
function resolveEndingChoice(id,best){
 if(CAREERS[id]){const adopter=careerVisitor(id);if(adopter&&CAREERS[id].check(LIFE))return[id,adopter];const fallback=visitorOutcome();if(fallback[0]===id&&adopter)return[id,adopter];return fallback}
 return[id,best];
}
function ending(){
 RUN=false;PAUSED=false;const [base,best]=visitorOutcome(),offers=careerOffers();
 if(!offers.length){finishEnding(base,best);return;}
 show(`<h2>想跟誰回家？</h2><div class="career-offers">${offers.map(id=>`<button class="career-offer" data-ending="${id}"><span>${CAREERS[id].icon}</span><b>${CAREERS[id].n}</b><small>${escapeText(careerVisitor(id).n)} · ${careerVisitor(id).stars} 星</small></button>`).join('')}</div><button class="big alt" data-ending="${base}">看看原本的緣分：${FATE[base].n}</button>`,e=>{const id=e.target.closest('[data-ending]')?.dataset.ending;if(id&&[base,...offers].includes(id))finishEnding(id,best)});
}
function finishEnding(id,best,skillWin=false){
 const guaranteed=skillWin&&guaranteedSkillAdoption(id,best);
 if(!guaranteed)[id,best]=resolveEndingChoice(id,best);
 const homeId=best?(GROUPS[best.k]?.baseFate||({eng:'eng_good',fam:'fam_good',inf:'inf_good'}[best.k])):id;if(!guaranteed)id=futureChapter(id);
 const F=guaranteed?skillEnding(id,best):petEnding(id),tt=topTags(),t1=tt[0]||'calm',who=best?.n||'',nick=(NICK[t1]||'乖乖')+DOGN.slice(-1),line=pick(F.t).replace(/{habit}/g,HAB[t1]).replace(/{nick}/g,nick).replace(/{who}/g,who),ps=persona(),hl=highlight(),bd=BADGE.filter(b=>b[0]()).map(b=>b[1]).slice(0,3);
 const previous=store('adopt_fate'),isNew=!previous.includes(id);const uf=store('adopt_fate',id),up=store('adopt_persona',ps);const D={id,F,line,nick,ps,hl,bd,who,isNew,visitorKey:best?.k,homeId};LAST_OUTCOME=D;
 try{const records=JSON.parse(localStorage.getItem(PET==='cat'?'adopt_records_cat':'adopt_records')||'{}');records[id]={line,ps,hl,nick,name:DOGN,at:Date.now()};localStorage.setItem(PET==='cat'?'adopt_records_cat':'adopt_records',JSON.stringify(records))}catch(e){}
 SND[F.bad?'sad':'ding']();showOutcome(D,uf.length,up.length);
}
function showOutcome(D,n=store('adopt_fate').length,p=store('adopt_persona').length){
 const url=card(D),F=D.F,downloadUrl=cardBlobUrl(url);show(`<div class="no">${D.isNew?'NEW':'已收藏'} · ${outcomeCategory(D.id)}</div><h2>${F.n}</h2><img class="full" src="${url}" alt="${escapeText(F.n)}結局分享卡"><details class="recipe"><summary>後來呢？</summary><p>${escapeText(D.line)}</p></details><p class="sub">${collectionProgress()}</p><div class="cta"><button class="big" id="share-ending">分享我的狗生</button><a class="big alt download-card" href="${downloadUrl}" download="領養日-${escapeText(F.n)}.jpg">下載分享卡</a></div><button class="big alt" id="open-book">狗生圖鑑</button><button class="big alt" id="replay-ending">再玩一次</button><button class="big alt" id="home-ending">回首頁</button><button class="big alt" id="real-ending">真的在等家的孩子</button>`,e=>{const id=e.target.closest('button')?.id;if(id==='share-ending')shareImg(url,`領養日｜${DOGN}成了「${F.n}」。${F.punch||D.ps} 我的名場面：${D.hl}。你會過上哪種狗生？`);if(id==='open-book')openCollection(()=>showOutcome(D));if(id==='replay-ending'){newGame();startVisit()}if(id==='home-ending')returnToTitle();if(id==='real-ending')realAdopt(()=>showOutcome(D))});
}
function collectionGroups(){
 const homes=Object.entries(GROUPS).map(([key,g])=>({id:g.baseFate||({eng:'eng_good',fam:'fam_good',inf:'inf_good'}[key]),name:g.n,tag:g.tag}));
 const ids=new Set(homes.map(v=>v.id));
 return {homes,special:FATES.filter(id=>!ids.has(id))};
}
function collectionProgress(){const {homes,special}=collectionGroups(),owned=new Set(store('adopt_fate'));return `飼主歸宿 ${homes.filter(v=>owned.has(v.id)).length}/${homes.length} · 狗生際遇 ${special.filter(id=>owned.has(id)).length}/${special.length}`}
function outcomeCategory(id){const {homes,special}=collectionGroups(),index=homes.findIndex(v=>v.id===id);return index>=0?`飼主歸宿 ${index+1}/${homes.length}`:`狗生際遇 ${special.indexOf(id)+1}/${special.length}`}
function maySeeHint(id){return ['eng_good','fam_good'].includes(id)}
function openCollection(back=returnToTitle,section='homes'){
 const {homes,special}=collectionGroups(),owned=new Set(store('adopt_fate')),isHome=section==='homes',items=isHome?homes:special.map(id=>({id}));
 const total=items.length,count=items.filter(v=>owned.has(v.id)).length;
 show(`<div class="collection-head"><button id="book-back">← 返回</button><h2>狗生圖鑑</h2></div><div class="collection-tabs" role="tablist" aria-label="圖鑑分類"><button role="tab" aria-selected="${isHome}" data-section="homes">飼主歸宿 · ${homes.length}</button><button role="tab" aria-selected="${!isHome}" data-section="special">狗生際遇 · ${special.length}</button></div><p class="sub">已收集 ${count} / ${total}${isHome?' · 認識誰，跟誰回家':' · 奇遇、隱藏職涯與狗生波折'}</p><div class="fate-grid">${items.map(v=>{const f=petEnding(v.id),yes=owned.has(v.id),hint=maySeeHint(v.id),visible=yes||hint;return `<button ${visible?`data-fate="${v.id}"`:'disabled'} class="fate-tile ${yes?'found':''}"><span>${yes?(f.icon||'✦'):'？'}</span><b>${visible?escapeText(isHome?v.name:f.n):'未解鎖'}</b><small>${yes?'已收藏':hint?'入門線索':'等待你發現'}</small></button>`}).join('')}</div>`,e=>{
 const b=e.target.closest('button');if(!b)return;if(b.id==='book-back'){back();return}if(b.dataset.section){openCollection(back,b.dataset.section);return}
 const id=b.dataset.fate;if(!id||(!owned.has(id)&&!maySeeHint(id)))return;const f=petEnding(id),yes=owned.has(id),owner=homes.find(v=>v.id===id);
 const hint=id==='eng_good'?'阿凱喜歡安靜陪伴。靠近他，再試試躺平。':'林家喜歡親人又可愛的狗。靠近後試試撒嬌、翻肚。';
 show(`<div class="no">${isHome?'飼主歸宿':'狗生際遇'} · ${yes?'已收藏':'未解鎖'}</div><h2>${escapeText(yes?f.n:owner?owner.name:'還沒遇見的狗生')}</h2><p>${escapeText(yes?f.t[0].replace(/{habit}/g,'做自己').replace(/{nick}/g,DOGN).replace(/{who}/g,'有緣的人'):hint)}</p>${!yes&&maySeeHint(id)&&f.rule?'<details class="recipe"><summary>更明確的玩法</summary><p>'+escapeText(f.rule)+'</p></details>':''}<button class="big alt" id="detail-back">回圖鑑</button>`,e=>{if(e.target.closest('button')?.id==='detail-back')openCollection(back,section)});
 });
}
const bookButton=document.createElement('button');bookButton.className='book-link';bookButton.type='button';bookButton.textContent='狗生圖鑑';bookButton.onclick=()=>openCollection(()=>{hide()});$('#title').append(bookButton);
const stamp=document.querySelector('.cover-stamp');if(stamp)stamp.innerHTML='50 組飼主<br>80 種狗生';

/* Object URLs keep downloads small and preserve a native user-activated link. */
let lastDownloadUrl=null,lastDownloadData=null;
function cardBlob(url){const [meta,body]=url.split(','),bytes=Uint8Array.from(atob(body),c=>c.charCodeAt(0));return new Blob([bytes],{type:meta.includes('image/png')?'image/png':'image/jpeg'})}
function cardBlobUrl(url){if(lastDownloadUrl&&lastDownloadData===url)return lastDownloadUrl;lastDownloadData=url;if(lastDownloadUrl)URL.revokeObjectURL(lastDownloadUrl);lastDownloadUrl=URL.createObjectURL(cardBlob(url));return lastDownloadUrl}
async function shareImg(url,text){
 const caption=text+'\n#領養日 #認養代替購買',file=new File([cardBlob(url)],'領養日.jpg',{type:'image/jpeg'});
 try{if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],text:caption});return}}catch(e){if(e.name==='AbortError')return;}
 let copied=false;try{await navigator.clipboard.writeText(caption);copied=true}catch(e){}
 const a=document.createElement('a');a.href=cardBlobUrl(url);a.download='領養日.jpg';document.body.append(a);a.click();a.remove();
 toast(copied?'文案已複製；請儲存分享卡，再貼到喜歡的平台。':'請下載分享卡；也可以長按圖片儲存。');
}

/* Souvenir photographs use the same people as the visitor roster. */
const PHOTO_SCENES={
 eng_good:['home','eng','阿凱的家'],fam_good:['family','mom','林家的客廳'],inf_good:['studio','inf','Mia 的工作室'],
 police:['police','police_guest','警局的新搭檔'],narcotics:['training','nose_guest','訓練中心報到'],fire:['fire','fire_guest','消防隊大合照'],factory_boss:['factory','factory_guest','和老闆一起上班'],shop:['shop','shop_guest','巷口雜貨店'],cafe:['cafe','cafe_guest','咖啡店的新同事'],gardener:['flowers','flower_guest','花店開門了'],athlete:['park','sport_guest','今天一起去公園'],
 therapy:['home','mom','我的新家'],slipper:['shop','shop_guest','拖鞋都歸我'],tissue:['art','inf','我的藝術工作室'],sofa_king:['home','flower_guest','沙發有主人了'],magician:['studio','cafe_guest','魔術師的家'],plumber:['factory','factory_guest','師傅的新助手'],delivery:['shop','shop_guest','今天也一起下班'],diplomat:['family','mom','一家人的日常']
};
const VISITOR_PHOTOS={eng:'eng_good',fam:'fam_good',inf:'inf_good',police_guest:'police',nose_guest:'narcotics',fire_guest:'fire',factory_guest:'factory_boss',shop_guest:'shop',cafe_guest:'cafe',flower_guest:'gardener',sport_guest:'athlete'};
for(const v of ROSTER30){PHOTO_SCENES[v.ending]=[v.scene,v.key,v.place];VISITOR_PHOTOS[v.key]=v.ending;}
function photoSpec(D){if(CAREERS[D.id]&&D.visitorKey)return PHOTO_SCENES[VISITOR_PHOTOS[D.visitorKey]]||null;if(D.id==='star')return PHOTO_SCENES[VISITOR_PHOTOS[D.visitorKey]]||PHOTO_SCENES.fam_good;return PHOTO_SCENES[D.id]||null}
function drawPhotoPerson(q,key,x,base,h){const im=ART[key];if(!im?.naturalWidth)return;const w=h*im.naturalWidth/im.naturalHeight;q.drawImage(im,x-w/2,base-h,w,h)}
function card(D){
 const c=document.createElement('canvas');c.width=1080;c.height=1440;const q=c.getContext('2d'),F=D.F,spec=photoSpec(D),ink='#354e40';
 q.fillStyle='#eee4c9';q.fillRect(0,0,1080,1440);q.fillStyle='#fffdf3';q.save();q.translate(540,650);q.rotate(-.018);q.shadowColor='#354e4033';q.shadowBlur=24;q.shadowOffsetY=12;q.fillRect(-490,-590,980,1170);q.shadowColor='transparent';
 q.save();q.beginPath();q.rect(-455,-555,910,830);q.clip();const bg=ART[F.scene?'life_'+F.scene:spec?'scene_'+spec[0]:'room'];if(bg?.naturalWidth){const sw=bg.naturalWidth,sh=bg.naturalHeight,k=Math.max(910/sw,830/sh);q.drawImage(bg,-sw*k/2,-555+(830-sh*k)/2,sw*k,sh*k)}
 if(F.scene){const home=PHOTO_SCENES[D.homeId];if(!F.bad&&home)drawPhotoPerson(q,F.scene==='rescuegarden'?'rescue_guest':home[1],135,230,670);dog(q,F.an,F.bad?0:-110,265,F.bad?500:460,0);if(F.chain){q.strokeStyle='#777b70';q.lineWidth=7;q.setLineDash([12,8]);q.beginPath();q.moveTo(0,70);q.lineTo(420,200);q.stroke();q.setLineDash([])}}
 else if(spec){drawPhotoPerson(q,spec[1],135,230,670);if(D.id==='fam_good'||(D.id==='star'&&D.visitorKey==='fam'))drawPhotoPerson(q,'kid',-260,235,430);dog(q,'sit',-110,265,460,0)}
 else{q.fillStyle='#e4e9d655';q.fillRect(-455,-555,910,830);dog(q,F.an,-20,220,560,0);if(F.cage){q.strokeStyle='#778678';q.lineWidth=9;for(let x=-400;x<450;x+=100){q.beginPath();q.moveTo(x,-555);q.lineTo(x,275);q.stroke()}}if(F.chain){q.strokeStyle='#6a7566';q.lineWidth=9;q.setLineDash([14,9]);q.beginPath();q.moveTo(-80,10);q.lineTo(-450,190);q.stroke();q.setLineDash([])}}q.restore();
 q.textAlign='center';q.fillStyle=ink;q.font='900 58px sans-serif';q.fillText(petText(F.n),0,365,870);q.font='500 31px sans-serif';q.fillStyle='#7f806c';q.fillText(petText(F.place||(spec?spec[2]:'還在等一個家')),0,425,850);q.font='700 35px sans-serif';q.fillStyle='#9b653e';q.fillText(petText(F.punch||D.ps),0,505,850);q.restore();
 q.textAlign='center';q.fillStyle=ink;q.font='700 32px sans-serif';q.fillText(petText(`${DOGN}的狗生紀念照`),540,1305,950);q.font='400 25px sans-serif';q.fillStyle='#7c7b65';q.fillText(petText(D.hl),540,1358,940);q.font='400 20px sans-serif';q.fillText('#領養日　#認養代替購買',540,1405);
 return c.toDataURL('image/jpeg',.92);
}

/* Native illustrated cat, independent from uploaded photo cutouts. */
function drawCat(q,anim,x,y,S,t,o={}){
 S*=.82;
 const walking=['walk','run','carry_walk'].includes(anim);
 const map={bark:'meow',bark_angry:'meow',snap:'scared',bite_tug:'paw',eat:'sniff',belly_up:'roll',sploot:'lie',lie_flat:'lie',sofa:'sit',portrait:'sit',portrait_side:'sit',car_window:'paw',look_up:'idle',head_tilt:'idle',turn:'idle',wag:'idle',pet:'rub',lean:'rub',sad:'scared',shake:'scared',excited:'pounce',nudge:'sniff',carry_towel:'carry'};
 const pose=walking?['walk1','walk2','walk3','walk2'][Math.floor(t*(anim==='run'?11:7))%4]:(map[anim]||anim);
 const im=ART['cat_'+pose]||ART.cat_idle;if(!im?.naturalWidth)return;
 q.save();q.translate(x,y);if(o.flip)q.scale(-1,1);if(o.rot)q.rotate(o.rot);if(o.alpha!==undefined)q.globalAlpha=o.alpha;
 const bob=walking?-Math.abs(Math.sin(t*8))*S*.012:pose==='pounce'?-Math.abs(Math.sin(t*5))*S*.09:0;
 if(anim==='shake')q.translate(Math.sin(t*45)*S*.008,0);
 const breath=['idle','sleep','lie','sit'].includes(pose)?1+Math.sin(t*2)*.008:1;
 q.translate(0,bob);q.scale(1,breath);q.drawImage(im,-S/2,-S*472/512,S,S);q.restore();
}
function syncPetUI(){
 document.querySelectorAll('[data-pet]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pet===PET)));
 const name=document.querySelector('#cat-name');if(name){name.hidden=PET!=='cat';name.value=petDefaultName()}
 const heading=document.querySelector('#title h1 span');if(heading)heading.textContent=PET==='cat'?'今天，換你當貓。':'今天，換你當狗。';
 const edition=document.querySelector('.edition');if(edition)edition.textContent=PET==='cat'?'阿麥登場 · 自由互動小遊戲':'阿聰主演 · 自由互動小遊戲';
 const stamp=document.querySelector('.cover-stamp');if(stamp)stamp.innerHTML='50 組飼主<br>80 種'+(PET==='cat'?'貓':'狗')+'生';
 const book=document.querySelector('.book-link');if(book)book.textContent=PET==='cat'?'貓生圖鑑':'狗生圖鑑';
 const bark=document.querySelector('[data-a="bark"]');if(bark){const label=bark.querySelector('b');if(label)label.textContent=PET==='cat'?'喵':'吠';for(const node of bark.childNodes)if(node.nodeType===3)node.textContent=node.textContent.replace(/[吠喵]/g,PET==='cat'?'喵':'吠');bark.setAttribute('aria-label',PET==='cat'?'喵叫':'吠叫')}
 const note=document.querySelector('.desktop-note span');if(note)note.innerHTML='當一天'+(PET==='cat'?'貓':'狗')+'。<br>做一次自己的選擇。';
 markMy();
}
function selectPet(kind){
 if(!['dog','cat'].includes(kind)||RUN)return;
 PET=kind;BODY=null;FACE=null;setTint(null);DOGN=petDefaultName();
 try{localStorage.setItem('adopt_species',PET)}catch(e){}
 loadSaved();syncPetUI();SND.init();if(PET==='cat')SND.meow();else SND.pop();
}
const chooser=document.createElement('div');chooser.className='pet-chooser';chooser.setAttribute('aria-label','選擇主角');
chooser.innerHTML='<div class="pet-options"><button type="button" data-pet="dog">阿聰・狗狗</button><button type="button" data-pet="cat">阿麥・貓咪</button></div><input id="cat-name" maxlength="8" aria-label="貓咪名字" placeholder="幫貓咪取名字">';
document.querySelector('#bNew').before(chooser);
chooser.querySelectorAll('[data-pet]').forEach(b=>b.onclick=()=>selectPet(b.dataset.pet));
document.querySelector('#cat-name').onchange=e=>{const name=e.target.value.trim().replace(/[<>]/g,'')||'阿麥';try{localStorage.setItem('adopt_cat_name',name)}catch(err){}if(!BODY)DOGN=name;markMy()};
if(PET==='cat'&&!BODY)DOGN=petDefaultName();syncPetUI();
document.addEventListener('DOMContentLoaded',syncPetUI,{once:true});

/* Five completed actions unlock one skill for the immediately following visit. */
const SPECIAL_SKILLS={
 bark:{name:'王者號令',job:'王牌守護員',anim:'bark_angry',icon:'✦',people:['police_guest','guard_guest','ranger_guest']},
 pee:{name:'萬物開花',job:'魔法園藝師',anim:'pee',icon:'❀',people:['flower_guest','farm_guest','tea_guest']},
 bite:{name:'神級尋寶',job:'寶物鑑定師',anim:'bite_tug',icon:'◇',people:['gold_guest','scrap_guest','shop_guest']},
 love:{name:'療癒光環',job:'心靈療癒師',anim:'rub',icon:'♡',people:['rescue_guest','vet_guest','teacher_guest']},
 roll:{name:'翻滾奇蹟',job:'奇幻秀團長',anim:'belly_up',icon:'✧',people:['magic_guest','puppet_guest','opera_guest']},
 lie:{name:'夢境結界',job:'夢境收藏家',anim:'sleep',icon:'☾',people:['cafe_guest','inn_guest','remote_guest']}
};
function skillState(){return LIFE.special||(LIFE.special={last:null,count:0,pending:null,active:null,charged:false,fired:false})}
function queueSkillAction(a){const s=skillState();if(!SPECIAL_SKILLS[a]||s.active||s.charged)return;if(s.last!==a){s.last=a;s.count=0}V.skillAction={a,anim:V.d.act,start:V.d.actStart};}
function tickSkillAction(dt){const p=V.skillAction;if(!p)return;if(V.d.act!==p.anim||V.d.actStart!==p.start){V.skillAction=null;return}if(V.d.actT<=dt&&V.t+V.d.actT<=V.T){V.skillAction=null;completeSkillAction(p.a)}}
function completeSkillAction(a){const s=skillState();if(s.charged||s.active)return;if(s.last!==a){s.last=a;s.count=0}s.count++;if(s.count<5)return;s.charged=true;const skill=SPECIAL_SKILLS[a];SND.ding();if(VI>=2){s.tooLate=true;toast('解鎖「'+skill.name+'」！但已是最後一場，這次無法使用。',true)}else{s.pending={a,visit:VI+1};toast('解鎖「'+skill.name+'」！下一組有隱藏職業。',true)} }
function prepareSkillVisit(){const s=skillState();s.active=null;s.last=null;s.count=0;s.charged=false;s.tooLate=false;s.fired=false;if(!s.pending)return;if(s.pending.visit!==VI){s.pending=null;return}const a=s.pending.a,def=SPECIAL_SKILLS[a],seen=new Set(ORDER.slice(0,VI));const key=def.people.find(k=>!seen.has(k));s.pending=null;if(!key)return;const old=ORDER[VI],later=ORDER.indexOf(key,VI+1);if(later>=0)ORDER[later]=old;ORDER[VI]=key;s.active={a,key,visit:VI};}
function hiddenVisitLabel(k){const s=skillState();return s.active?.key===k?'隱藏職業｜'+SPECIAL_SKILLS[s.active.a].job:GROUPS[k].tag}
function skillHint(k){const s=skillState();return s.active?.key===k?'施放「'+SPECIAL_SKILLS[s.active.a].name+'」，讓對方決定帶你回家。':GROUPS[k].hint}
function canCastSkill(){const s=skillState();return !!(RUN&&!PAUSED&&V&&!V.d.act&&s.active&&!s.fired&&s.active.visit===VI&&s.active.key===V.k&&V.t<V.T)}
function castSpecialSkill(){if(!canCastSkill())return;const s=skillState(),def=SPECIAL_SKILLS[s.active.a];s.fired=true;s.adopter=V.k;RUN=false;const r={k:V.k,n:V.G.n,stars:5,txt:'親眼看見「'+def.name+'」，決定認養。'};const idx=RES.findIndex(x=>x.k===r.k);if(idx>=0)RES[idx]=r;else RES.push(r);const id=V.G.baseFate||({eng:'eng_good',fam:'fam_good',inf:'inf_good'}[V.k]);V.d.act=def.anim;V.d.actStart=V.t;SND.ding();show('<div class="no">'+def.icon+' 特殊技能成功</div><h2>'+def.name+'</h2><p>'+escapeText(r.n)+'：「就是你了，跟我回家！」</p><button class="big" id="skill-adopt">一起回家 →</button>',e=>{if(e.target.closest('button')?.id==='skill-adopt')finishEnding(id,r,true)});}
function guaranteedSkillAdoption(id,best){const s=skillState();return !!(s.fired&&s.active&&best?.k===s.adopter&&s.active.key===best.k&&s.active.visit===VI&&id===(GROUPS[best.k].baseFate||({eng:'eng_good',fam:'fam_good',inf:'inf_good'}[best.k])))}
function skillEnding(id,best){const def=SPECIAL_SKILLS[skillState().active.a];return {...petEnding(id),n:def.job+'的命定搭檔',punch:'一招'+def.name+'，直接錄取。',t:[best.n+'親眼見識你的「'+def.name+'」，當場決定認養。你跟著這位'+def.job+'回家，從今天起，你的天賦有了懂得珍惜它的人。']}}
function updateSkillUI(){const b=document.querySelector('#special-action');if(!b)return;const s=skillState();b.hidden=!RUN||!s.active;b.disabled=!canCastSkill();if(s.active)b.textContent=SPECIAL_SKILLS[s.active.a].icon+' '+SPECIAL_SKILLS[s.active.a].name+'・施放即認養';const p=document.querySelector('#skill-progress');if(p){p.hidden=!RUN||!(s.active||s.tooLate||s.pending);p.textContent=s.active?'隱藏職業來了！使用專屬技能':s.tooLate?'技能已解鎖，但沒有下一場面試':s.pending?'技能已解鎖！下一組遇見隱藏職業':''}}

const skillProgress=document.createElement('div');skillProgress.id='skill-progress';document.querySelector('#tray').prepend(skillProgress);const skillButton=document.createElement('button');skillButton.id='special-action';skillButton.type='button';skillButton.hidden=true;skillButton.onclick=castSpecialSkill;document.querySelector('#tray').append(skillButton);
