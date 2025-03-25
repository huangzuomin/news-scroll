const content = {
  // 专题基本信息
  title: "国家体重：失控的增长与全民的战役",
  subtitle: "中国“体重管理年”行动深度解析",
  author: "你的名字/团队名称",
  publishDate: "2024-07-29",

  // 主视觉
  heroImage: {
    url: "建议图片描述: 俯瞰中国城市，人群熙熙攘攘，其中一些人的体型明显偏胖，画面整体偏暗，营造出一种压抑感和紧迫感",
    alt: "中国城市人群",
    credit: "图片来源/图库名称",
    style: "暗调，略微模糊，营造出一种压抑感和紧迫感",
  },

  // 章节内容
  sections: [
    {
      id: "section-1",
      title: "警钟长鸣：失控的体重",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一张巨幅中国地图，用热图的形式呈现肥胖率的分布，颜色由浅到深，北方地区颜色最深，形成视觉冲击",
        style: "fixed", //固定背景，增强视觉冲击
        overlay: "dark", //暗色遮罩，突出标题和文字
      },
      content: [
        {
          type: "text",
          value:
            "近年来，随着经济的快速发展和生活方式的转变，肥胖问题在中国日益突出，已成为一个不容忽视的公共卫生挑战。一个曾经以精瘦著称的国家，如今正面临着一场前所未有的“体重危机”。",
          style: "large", //大号字体，作为开场白
          animation: "fade-in", //淡入动画
        },
        {
          type: "quote",
          value: "目前中国成年人中约有半数体重超重或肥胖，并且这一趋势仍在加剧。",
          attribution: "——中国疾病预防控制中心",
          style: "highlight boxed", //高亮，带边框，突出显示
        },
        {
          type: "text",
          value: "令人警醒的数据，无情地揭示了这场危机的严重性。如果不采取有效干预措施...",
          style: "parallax",
          animation: 'slide-up'
        },
        {
          type: "chart",
          chartType: "line",
          title: "中国成人超重和肥胖率预测 (2010-2030)",
          description:
            "根据当前趋势预测，到2030年，中国成人超重和肥胖率可能高达70.5%。这条陡峭的上升曲线，预示着一场迫在眉睫的公共卫生灾难。",
          dataStructure: `[
                        { year: 2010, rate: 40 },
                        { year: 2015, rate: 45 },
                        { year: 2020, rate: 52 },
                        { year: 2025, rate: 60 },
                        { year: 2030, rate: 70.5 }
                      ]`,
          interactivity: "hover", //鼠标悬停显示数据点
        },
        {
          type: "text",
          value:
            "这不仅仅是对个体健康的威胁，更是对中国劳动力和社会经济发展的潜在威胁。糖尿病、高血压...200余种疾病的患病风险显著增加，医疗系统不堪重负，经济发展面临严峻挑战。",
            style: "parallax"
        },
         {
            type: "text",
            value: "面对这场危机，中国政府果断行动，一场全国性的“体重管理年”行动正式打响。",
            style: 'highlight'
          }
      ],
    },
    {
      id: "section-2",
      title: "南北分化：体重地图的秘密",
      background: {
        type: "image",
        url: "建议的背景图片描述: 中国地图，用不同颜色代表不同的肥胖率，从北向南颜色逐渐变浅，形成鲜明对比",
        style: "scroll",
        overlay: "gradient-blue", //蓝色渐变遮罩，增加视觉层次感
      },
      content: [
        {
          type: "text",
          value:
            "肥胖率的攀升并非全国性的“齐步走”，而呈现出复杂的地域、性别和城乡差异。深入剖析这些差异，才能找到精准干预的突破口。",
          style: "large",
        },
        {
          type: "text",
            value: "一项基于2004年至2018年数据的研究表明，中国成年肥胖人口数量在此期间增加了两倍多，达到约8500万。",
            style: 'highlight'
        },
        {
          type: "interactive",
          interactiveType: "explore",
          description:
            "点击地图，探索不同地区、不同性别、不同年龄段人群的肥胖率数据，发现隐藏在数据背后的故事。",
          setupGuide:
            "使用echarts等库创建中国地图，并绑定数据，实现点击交互，展示不同区域的详细数据。",
        },
        {
          type: "two-columns",
          leftColumn: {
            content: "男性肥胖率的增长速度快于女性，尤其是在2010年之后，男性的平均BMI、超重率和肥胖率均高于女性，扭转了之前的局面。",
            type: "text",
          },
          rightColumn: {
            content: "建议图片描述: 一个体重秤，指针指向超重区域，旁边放着一个汉堡和一瓶可乐，象征着不健康的生活方式。",
            type: "image",
            alt: '不健康生活方式',
            caption: "不健康饮食是男性体重增长的重要原因"
          }
        },
        {
          type: "text",
          value:
            "城乡差异同样显著。农村地区女性的肥胖率持续上升，甚至超过了城市女性。而教育程度与肥胖的关联也呈现出性别差异：女性教育程度越高，肥胖率越低；男性则恰恰相反。",
        },
        {
          type: "text",
          value:
            "这些复杂的数据背后，隐藏着怎样的社会变迁和生活方式的改变？",
          animation: 'slide-up'
        },
      ],
    },
    {
      id: "section-3",
      title: "生命不能承受之重",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一位肥胖者孤独地坐在医院走廊的长椅上，背景虚化，突出人物的无助和焦虑",
        style: "parallax-slow", //慢速视差效果，增强画面深度
        overlay: "dark",
      },
      content: [
        {
          type: "text",
          value:
            "肥胖，绝不仅仅是体型的改变，更是一场悄无声息的健康危机。它如同一颗定时炸弹，潜伏在身体内部，随时可能引爆一系列的健康问题。",
          style: "large",
        },
        {
          type: "quote",
          value:
            "肥胖儿童患高血压的风险是正常体重儿童的2.6至8倍，患血脂异常的风险高达50%。",
          attribution: "——《中国儿童肥胖报告》",
          style: "highlight",
        },

        {
          type: "video",
          url: "建议的视频内容描述: 一段关于肥胖导致各种疾病的科普动画，包括糖尿病、高血压、心脏病等，用直观的方式呈现肥胖对健康的危害",
          caption: "肥胖：健康的隐形杀手",
          autoplay: true,
          loop: true,
        },
        {
          type: "text",
          value:
            "除了生理上的疾病，肥胖还会对心理健康造成影响。肥胖者更容易遭受歧视和排斥，导致自卑、焦虑、抑郁等心理问题。",
        },
        {
          type: "text",
          value:
            "沉重的负担，不仅压在个体身上，更压在了整个社会。医疗支出不断攀升，劳动力效率下降，经济发展面临挑战...",
          style: 'parallax'
        },
        {
          type: "chart",
          chartType: 'bar',
          title: '中国因超重和肥胖造成的经济影响预测',
          description: '到2060年，中国因超重和肥胖造成的经济影响将超过10万亿美元，占GDP的3.1%',
          dataStructure: `[
            { year: 2019, economicImpact: 2595.1, gdpPercentage: 1.8 },
            { year: 2030, economicImpact: 2766.35, gdpPercentage: 2.8 },
            { year: 2060, economicImpact: 10108.34, gdpPercentage: 3.1 }
          ]`,
          interactivity: 'hover'
        }
      ],
    },
    {
      id: "section-4",
      title: "全民动员：国家的决心",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一群人在公园里跑步、跳广场舞、打太极拳，展现出积极向上的精神面貌，背景是高楼大厦，象征着城市的发展与健康生活的融合",
        style: "scroll",
        overlay: "gradient-blue",
      },
      content: [
        {
          type: "text",
          value:
            "面对肥胖危机，中国政府以前所未有的力度，打响了一场全民参与的“体重保卫战”。",
          style: "large",
        },
         {
          type: "text",
          value:
            "2024年3月，国家卫生健康委员会等16个部门联合启动了为期三年的“体重管理年”行动。这不仅仅是一项政策，更是一次全民动员，一次对健康生活方式的倡导，一次对未来的承诺。",
          style: 'highlight'
        },
        {
          type: "text",
          value: "这项行动的目标清晰而坚定：",
        },
        {
          type: "quote",
          value:
            "力争在未来三年内有效遏制中国成人和儿童肥胖率的上升趋势，降低因肥胖引发的慢性疾病的患病率，最终提升国民整体健康水平。",
          attribution: "——国家卫生健康委员会",
          style: "large boxed", //大号字体，带边框
        },
        {
          type: "text",
          value: "具体措施涵盖了生活的方方面面：",
        },
        {
          type: "interactive",
          interactiveType: "slider",
          description:
            "滑动滑块，了解“体重管理年”行动的具体措施，包括政策引导、健康食堂建设、全民健身推广、健康教育等。",
          setupGuide:
            "使用Swiper等库创建滑块，每个滑块展示一项具体措施，配以图片和文字说明。",
        },
          {
            type: 'text',
            value: "这场战役，需要每个人的参与，需要全社会的共同努力。"
          }
      ],
    },
    {
      id: "section-5",
      title: "社区前线：科学减重的堡垒",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一家社区卫生服务中心的科学减重门诊，医生、营养师、运动专家正在为患者提供咨询和服务，画面温馨、专业",
        style: "fixed",
        overlay: "dark",
      },
      content: [
        {
          type: "text",
          value:
            "为了更直接地服务社区居民，全国各地纷纷设立科学减重门诊，将专业的体重管理服务送到百姓身边。",
          style: "large",
        },
        {
          type: "text",
          value:
            "这些门诊不仅仅是提供减肥建议的地方，更是健康的加油站，是改变生活方式的起点。",
        },
        {
            type: 'video',
            url: "建议的视频内容描述: 实地探访一家社区科学减重门诊，展示门诊的服务内容、医护人员的工作场景、患者的就诊体验，突出门诊的专业性和人性化",
            caption: "走进科学减重门诊",
            autoplay: false
          },
        {
          type: "text",
          value:
            "在这里，你可以得到：",
          animation: 'slide-up'
        },
        {
          type: "text",
          value: "* 全面的医学评估，了解你的身体状况和潜在风险。"
        },
          {
          type: "text",
          value: "* 个性化的减重方案，为你量身定制饮食、运动计划。"
        },
          {
          type: "text",
          value: "* 专业的营养咨询，帮助你养成健康的饮食习惯。"
        },
        {
          type: "text",
          value: "* 运动指导和训练，让你安全有效地动起来。"
        },
          {
          type: "text",
          value: "* 心理支持和行为干预，帮助你克服减重过程中的困难。"
        },
        {
          type: "text",
          value:
            "从上海到北京，从浙江到新疆，越来越多的社区加入到这场行动中来，为居民提供触手可及的健康服务。",
        },

      ],
    },
    {
      id: "section-6",
      title: "媒体之声：健康的共鸣",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一张报纸的头版头条，标题是“体重管理：全民健康的必修课”，旁边是各种媒体平台的Logo，象征着媒体的广泛关注和传播",
        style: "scroll",
        overlay: "gradient-blue",
      },
      content: [
        {
          type: "text",
          value:
            "官方媒体在“体重管理年”行动中扮演着重要的角色，它们的声音，传递着国家的决心，引导着公众的认知。",
          style: "large",
        },
        {
          type: "quote",
          value:
            "体重管理是健康工程，而非外貌歧视。",
          attribution: "——《人民日报》",
          style: "highlight",
        },
        {
          type: "text",
          value:
            "《人民日报》、《新华社》、《中国日报》...主流媒体纷纷发声，强调肥胖是严重的公共卫生问题，体重管理关乎全民健康。",
        },
        {
          type: "text",
          value:
            "它们反复强调，体重管理的首要任务是预防慢性疾病，倡导科学健康的减重方式，呼吁全社会共同参与。",
        },
        {
          type: "text",
            value: '除了传统媒体, 社交媒体也加入到这场宣传中，利用其强大的传播力，将健康理念传递到每一个角落。'
        },
         {
          type: "image",
          url: "建议的图片描述: 手机屏幕上显示着各种社交媒体平台上的体重管理相关话题、活动、短视频等，形成一个信息流",
          alt: "社交媒体上的体重管理话题",
          caption: "社交媒体：健康传播的新阵地",
          position: "full",
        },
      ],
    },
    {
      id: "section-7",
      title: "他山之石：国际经验的启示",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一张世界地图，用不同的颜色标注出不同国家在肥胖防控方面的成功案例，例如墨西哥的含糖饮料税、智利的食品标签法、美国的“America On the Move”倡议等",
        style: "fixed",
        overlay: "dark",
      },
      content: [
        {
          type: "text",
          value:
            "肥胖，是全球性的挑战。在应对这场挑战的过程中，许多国家积累了宝贵的经验，值得我们学习和借鉴。",
          style: "large",
        },
        {
          type: "text",
          value:
            "墨西哥对含糖饮料征税、智利推行食品标签法、美国开展大规模公共健康宣传...这些国家用不同的策略，取得了显著的成效。",
        },
        {
          type: "interactive",
          interactiveType: "explore",
          description:
            "点击地图，了解不同国家的肥胖防控措施，学习它们的成功经验，思考如何将其应用到中国。",
          setupGuide:
            "使用echarts等库创建世界地图，并绑定数据，实现点击交互，展示不同国家的详细信息。",
        },
        {
          type: "text",
          value: "国际经验告诉我们，控制肥胖需要一个多层面、综合性的策略，需要政府、社会、个人的共同努力。"
        }
      ],
    },
    {
      id: "section-8",
      title: "迈向未来：健康的承诺",
      background: {
        type: "image",
        url: "建议的背景图片描述: 一家人在阳光明媚的公园里散步，孩子在前面奔跑，父母在后面微笑着，展现出健康、幸福的生活场景，远景是绿树成荫，象征着美好的未来",
        style: "parallax-slow",
        overlay: "gradient-blue",
      },
      content: [
        {
          type: "text",
          value:
            "“体重管理年”行动，是中国应对肥胖挑战迈出的重要一步，也是对全民健康的一份庄严承诺。",
          style: "large",
        },
        {
          type: "text",
          value:
            "这不仅仅是一场短期的行动，更是一场持久的战役，需要我们每个人的参与，需要全社会的共同努力。",
        },
        {
          type: "text",
          value:
            "未来，我们需要持续监测、完善政策、加强教育、鼓励科研、加强国际合作...不断探索，不断前进。",
          animation: 'slide-up'
        },
        {
          type: "quote",
          value:
            "让我们携手并肩，为更健康的中国，为更美好的未来，共同努力！",
          style: "large highlight",
        },
      ],
    },
  ],

  // 结尾内容
  conclusion: {
    content:
      "肥胖，是一场没有硝烟的战争。在这场战争中，没有旁观者，每个人都是参与者。只有当我们每个人都行动起来，关注自己的体重，改变自己的生活方式，才能赢得这场战争的胜利。让我们一起，迈向更健康的未来！",
    callToAction: "从今天起，关注体重，改变生活，一起加入“体重管理年”行动！",
    shareOptions: ["wechat", "weibo", "qq"], // 建议的分享选项
  },
};

export default content;