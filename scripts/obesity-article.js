// 在文档加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    // 绘制肥胖率预测图表
    initObesityChart();
    // 绘制经济影响图表
    initEconomicImpactChart();
    // 初始化中国地图互动
    initChinaMap();
    // 初始化世界地图互动
    initWorldMap();
    // 初始化措施滑块
    initMeasuresSlider();
});

// 肥胖率预测图表
function initObesityChart() {
    const ctx = document.getElementById('obesityChart');
    if (!ctx) return;

    const data = [
        { year: 2010, rate: 40 },
        { year: 2015, rate: 45 },
        { year: 2020, rate: 52 },
        { year: 2025, rate: 60 },
        { year: 2030, rate: 70.5 }
    ];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.year.toString()),
            datasets: [{
                label: '肥胖率(%)',
                data: data.map(item => item.rate),
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                borderWidth: 2,
                pointBackgroundColor: '#3498db',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `肥胖率: ${context.raw}%`;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '肥胖率 (%)'
                    },
                    suggestedMax: 80
                },
                x: {
                    title: {
                        display: true,
                        text: '年份'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// 经济影响图表
function initEconomicImpactChart() {
    const ctx = document.getElementById('economicImpactChart');
    if (!ctx) return;

    const data = [
        { year: 2019, economicImpact: 2595.1, gdpPercentage: 1.8 },
        { year: 2030, economicImpact: 2766.35, gdpPercentage: 2.8 },
        { year: 2060, economicImpact: 10108.34, gdpPercentage: 3.1 }
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.year.toString()),
            datasets: [
                {
                    label: '经济影响 (亿美元)',
                    data: data.map(item => item.economicImpact),
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: '#e74c3c',
                    borderWidth: 1
                },
                {
                    label: 'GDP占比 (%)',
                    data: data.map(item => item.gdpPercentage),
                    type: 'line',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: '#2ecc71',
                    borderWidth: 2,
                    pointBackgroundColor: '#2ecc71',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '经济影响 (亿美元)'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'GDP占比 (%)'
                    },
                    min: 0,
                    max: 5
                },
                x: {
                    title: {
                        display: true,
                        text: '年份'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// 中国地图互动
function initChinaMap() {
    const mapContainer = document.getElementById('chinaMap');
    if (!mapContainer) return;

    // 初始化ECharts实例
    const chart = echarts.init(mapContainer);
    
    // 模拟肥胖率数据
    const obesityData = [
        { name: '北京', value: 56.3 },
        { name: '天津', value: 58.1 },
        { name: '河北', value: 60.5 },
        { name: '山西', value: 57.2 },
        { name: '内蒙古', value: 63.4 },
        { name: '辽宁', value: 59.7 },
        { name: '吉林', value: 61.2 },
        { name: '黑龙江', value: 62.5 },
        { name: '上海', value: 48.6 },
        { name: '江苏', value: 49.3 },
        { name: '浙江', value: 46.8 },
        { name: '安徽', value: 51.7 },
        { name: '福建', value: 44.3 },
        { name: '江西', value: 48.9 },
        { name: '山东', value: 55.6 },
        { name: '河南', value: 52.8 },
        { name: '湖北', value: 50.4 },
        { name: '湖南', value: 47.9 },
        { name: '广东', value: 42.1 },
        { name: '广西', value: 43.5 },
        { name: '海南', value: 41.2 },
        { name: '重庆', value: 49.7 },
        { name: '四川', value: 48.3 },
        { name: '贵州', value: 45.6 },
        { name: '云南', value: 44.8 },
        { name: '西藏', value: 39.5 },
        { name: '陕西', value: 53.1 },
        { name: '甘肃', value: 50.8 },
        { name: '青海', value: 49.1 },
        { name: '宁夏', value: 54.7 },
        { name: '新疆', value: 58.9 }
    ];

    // 加载中国地图数据，需要先引入中国地图的GeoJSON数据
    // 这里仅提供配置，实际使用需要引入地图数据
    chart.showLoading();
    
    // 实际项目中，这里应该是从服务器获取地图数据
    // fetch('china.json').then(response => response.json()).then(chinaJson => {
    //     echarts.registerMap('china', chinaJson);
    //     chart.hideLoading();

    const option = {
        title: {
            text: '中国肥胖率分布',
            subtext: '数据来源：模拟数据',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        visualMap: {
            min: 35,
            max: 65,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            }
        },
        series: [
            {
                name: '肥胖率',
                type: 'map',
                map: 'china',
                data: obesityData,
                emphasis: {
                    itemStyle: {
                        areaColor: '#ffde75',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用模拟选项，在实际项目中应替换为真实数据
    chart.setOption(option);
    
    // 响应窗口大小变化
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 世界地图互动
function initWorldMap() {
    const mapContainer = document.getElementById('worldMap');
    if (!mapContainer) return;

    // 初始化ECharts实例
    const chart = echarts.init(mapContainer);
    
    // 模拟国际经验数据
    const internationalData = [
        { name: '墨西哥', value: 1, measure: '对含糖饮料征税，每升征收1比索的税' },
        { name: '智利', value: 1, measure: '实施严格的食品标签制度，清晰标示高糖、高盐、高脂食品' },
        { name: '美国', value: 1, measure: '开展大规模公共健康宣传活动，如"America On the Move"' },
        { name: '英国', value: 1, measure: '推出"糖税"，对高糖饮料征税' },
        { name: '日本', value: 1, measure: '实施"特定健康检查"制度，强制测量腰围' },
        { name: '法国', value: 1, measure: '限制学校食堂不健康食品，增加体育活动时间' },
        { name: '新加坡', value: 1, measure: '推出"健康学校计划"，规范校园食品' },
    ];

    const option = {
        title: {
            text: '全球肥胖防控措施',
            subtext: '点击国家查看详情',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const data = internationalData.find(item => item.name === params.name);
                if (data) {
                    return `<b>${data.name}</b><br/>${data.measure}`;
                }
                return params.name;
            }
        },
        series: [
            {
                name: '全球肥胖防控',
                type: 'map',
                map: 'world',
                selectedMode: 'single',
                emphasis: {
                    itemStyle: {
                        areaColor: '#ffde75',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: internationalData
            }
        ]
    };

    // 使用模拟选项，在实际项目中应替换为真实数据
    chart.setOption(option);

    // 响应窗口大小变化
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 措施滑块
function initMeasuresSlider() {
    const slider = document.getElementById('measuresSlider');
    if (!slider) return;

    const prevButton = document.querySelector('.slider-controls .prev');
    const nextButton = document.querySelector('.slider-controls .next');
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;

    // 隐藏所有幻灯片
    function hideAllSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }

    // 显示当前幻灯片
    function showSlide(n) {
        hideAllSlides();
        slides[n].style.display = 'block';
    }

    // 下一张幻灯片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 上一张幻灯片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // 初始化显示第一张幻灯片
    showSlide(currentSlide);

    // 添加按钮事件监听
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    // 自动轮播
    setInterval(nextSlide, 5000);
}

// 添加社交媒体分享功能
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 获取分享信息
        const title = document.title;
        const url = window.location.href;
        
        // 根据按钮类型选择分享平台
        const platform = this.classList[1]; // wechat, weibo, qq
        
        // 这里应该调用相应的分享API，以下为示例
        console.log(`分享到 ${platform}: ${title} - ${url}`);
        
        // 实际项目中，应该调用各平台的分享接口
        // 例如微博分享
        if (platform === 'weibo') {
            window.open(`http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`);
        }
    });
}); 