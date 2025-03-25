// 社交媒体内容数据
const socialMediaData = {
    weibo: [
        {
            id: 1,
            author: "健康中国",
            avatar: "https://example.com/avatars/health-china.jpg",
            content: "最新研究显示，我国成年人超重肥胖率持续上升。专家建议：1. 保持规律运动 2. 均衡饮食 3. 定期体检",
            timestamp: "2024-03-20 10:30",
            likes: 1234,
            comments: 89
        },
        {
            id: 2,
            author: "营养师小张",
            avatar: "https://example.com/avatars/nutritionist.jpg",
            content: "今天在社区开展健康饮食讲座，很多居民都表示收获很大。记住：健康的生活方式从每一餐开始！",
            timestamp: "2024-03-20 09:15",
            likes: 856,
            comments: 45
        },
        {
            id: 3,
            author: "运动达人",
            avatar: "https://example.com/avatars/fitness.jpg",
            content: "分享一个简单的居家运动方案：每天30分钟，包括10分钟热身、15分钟有氧、5分钟拉伸。坚持就是胜利！",
            timestamp: "2024-03-20 08:45",
            likes: 2345,
            comments: 156
        },
        {
            id: 4,
            author: "心理医生",
            avatar: "https://example.com/avatars/psychologist.jpg",
            content: "减重不仅需要改变生活习惯，更需要调整心态。建议：1. 设定合理目标 2. 保持积极心态 3. 寻求专业支持",
            timestamp: "2024-03-20 08:00",
            likes: 987,
            comments: 67
        }
    ],
    wechat: [
        {
            id: 1,
            title: "科学减重指南",
            author: "医学专家团队",
            content: "详细介绍了科学减重的方法和注意事项，包括饮食建议、运动方案等。",
            views: 5000,
            likes: 1200
        },
        {
            id: 2,
            title: "社区健康活动回顾",
            author: "健康社区",
            content: "上周六的社区健康跑活动圆满结束，参与人数超过200人！",
            views: 3000,
            likes: 800
        },
        {
            id: 3,
            title: "营养均衡食谱推荐",
            author: "营养师团队",
            content: "为您推荐一周营养均衡的食谱，包括早餐、午餐、晚餐和加餐建议。",
            views: 4500,
            likes: 950
        },
        {
            id: 4,
            title: "运动损伤预防指南",
            author: "运动医学专家",
            content: "科学运动，预防损伤。详细介绍了常见运动损伤的预防方法和注意事项。",
            views: 3800,
            likes: 780
        }
    ],
    qq: [
        {
            id: 1,
            group: "健康生活交流群",
            content: "群友们分享的减重经验：1. 每天坚持步行10000步 2. 控制晚餐时间 3. 多喝水",
            members: 500,
            messages: 120
        },
        {
            id: 2,
            group: "营养师在线咨询",
            content: "专业营养师在线解答减重问题，欢迎加入交流！",
            members: 300,
            messages: 80
        },
        {
            id: 3,
            group: "运动打卡群",
            content: "每天运动打卡，互相鼓励，共同进步！",
            members: 800,
            messages: 250
        },
        {
            id: 4,
            group: "健康食谱分享",
            content: "分享健康美味的食谱，交流烹饪经验。",
            members: 600,
            messages: 180
        }
    ]
};

// 社交媒体配置
const socialConfig = {
    refreshInterval: 300000, // 5分钟刷新一次
    maxPosts: 10,
    displayOptions: {
        showAvatar: true,
        showTimestamp: true,
        showStats: true,
        showShareButton: true,
        showCommentButton: true,
        showLikeButton: true
    },
    animation: {
        duration: 500,
        easing: 'ease-out',
        delay: 100
    },
    layout: {
        gridColumns: 2,
        gap: 20,
        padding: 15
    },
    responsive: {
        mobile: {
            gridColumns: 1,
            gap: 15,
            padding: 10
        }
    }
};

export { socialMediaData, socialConfig }; 