// 数据可视化配置
const chartConfig = {
    colors: ['#2c3e50', '#3498db', '#e74c3c', '#2ecc71', '#f1c40f'],
    animationDuration: 1000,
    responsive: true
};

// 初始化数据可视化
function initDataVisualization() {
    // 加载新闻分类统计
    loadNewsCategories();
    // 加载阅读趋势
    loadReadingTrends();
    // 加载热门话题
    loadHotTopics();
}

// 加载新闻分类统计
async function loadNewsCategories() {
    try {
        const response = await fetch('https://api.example.com/news/categories');
        const data = await response.json();
        renderCategoryChart(data);
    } catch (error) {
        console.error('加载新闻分类数据失败:', error);
    }
}

// 渲染分类图表
function renderCategoryChart(data) {
    const container = document.querySelector('.visualization-container');
    if (!container) return;

    const chartHTML = `
        <div class="chart-wrapper">
            <h3>新闻分类统计</h3>
            <canvas id="categoryChart"></canvas>
        </div>
    `;
    container.innerHTML = chartHTML;

    const ctx = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(item => item.category),
            datasets: [{
                data: data.map(item => item.count),
                backgroundColor: chartConfig.colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: chartConfig.responsive,
            animation: {
                duration: chartConfig.animationDuration
            }
        }
    });
}

// 加载阅读趋势
async function loadReadingTrends() {
    try {
        const response = await fetch('https://api.example.com/news/trends');
        const data = await response.json();
        renderTrendChart(data);
    } catch (error) {
        console.error('加载阅读趋势数据失败:', error);
    }
}

// 渲染趋势图表
function renderTrendChart(data) {
    const container = document.querySelector('.visualization-container');
    if (!container) return;

    const chartHTML = `
        <div class="chart-wrapper">
            <h3>阅读趋势</h3>
            <canvas id="trendChart"></canvas>
        </div>
    `;
    container.appendChild(document.createElement('div')).innerHTML = chartHTML;

    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.date),
            datasets: [{
                label: '阅读量',
                data: data.map(item => item.views),
                borderColor: chartConfig.colors[0],
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: chartConfig.responsive,
            animation: {
                duration: chartConfig.animationDuration
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// 加载热门话题
async function loadHotTopics() {
    try {
        const response = await fetch('https://api.example.com/news/hot-topics');
        const data = await response.json();
        renderHotTopics(data);
    } catch (error) {
        console.error('加载热门话题数据失败:', error);
    }
}

// 渲染热门话题
function renderHotTopics(data) {
    const container = document.querySelector('.visualization-container');
    if (!container) return;

    const topicsHTML = `
        <div class="topics-wrapper">
            <h3>热门话题</h3>
            <div class="topics-grid">
                ${data.map(topic => `
                    <div class="topic-card">
                        <h4>${topic.title}</h4>
                        <p>${topic.description}</p>
                        <div class="topic-stats">
                            <span>热度: ${topic.heat}</span>
                            <span>讨论: ${topic.discussions}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.appendChild(document.createElement('div')).innerHTML = topicsHTML;
}

// 创建肥胖率趋势图表
function createObesityRateChart() {
    const chart = echarts.init(document.getElementById('obesity-rate-chart'));
    
    const option = {
        title: {
            text: '中国成人超重和肥胖率预测 (2010-2030)',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const data = params[0];
                return `${data.name}年<br/>
                        肥胖率: ${data.value}%<br/>
                        ${data.value > 50 ? '⚠️ 超过半数人口' : ''}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [2010, 2015, 2020, 2025, 2030],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '肥胖率 (%)',
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        series: [{
            name: '肥胖率',
            type: 'line',
            data: [40, 45, 52, 60, 70.5],
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: '#ff6b6b'
            },
            lineStyle: {
                width: 3,
                color: '#ff6b6b'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 107, 107, 0.3)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 107, 107, 0.1)'
                }])
            },
            emphasis: {
                focus: 'series',
                itemStyle: {
                    color: '#ff6b6b',
                    borderWidth: 2,
                    borderColor: '#fff'
                }
            }
        }],
        annotations: [{
            type: 'line',
            start: [2010, 40],
            end: [2030, 70.5],
            lineStyle: {
                color: '#ff6b6b',
                width: 2,
                type: 'dashed'
            }
        }, {
            type: 'text',
            position: [2020, 75],
            content: '预计2030年达到70.5%',
            style: {
                color: '#ff6b6b',
                fontSize: 14,
                fontWeight: 'bold'
            }
        }]
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 创建经济影响图表
function createEconomicImpactChart() {
    const chart = echarts.init(document.getElementById('economic-impact-chart'));
    
    const option = {
        title: {
            text: '中国因超重和肥胖造成的经济影响预测',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const data = params[0];
                return `${data.name}年<br/>
                        经济损失: ${data.value.toFixed(2)}亿美元<br/>
                        GDP占比: ${data.data.gdpPercentage}%`;
            }
        },
        legend: {
            data: ['经济损失', 'GDP占比'],
            top: 50,
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [2019, 2030, 2060],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        yAxis: [{
            type: 'value',
            name: '经济损失 (亿美元)',
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value}亿'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }, {
            type: 'value',
            name: 'GDP占比 (%)',
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value}%'
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: '经济损失',
            type: 'bar',
            data: [
                { value: 2595.1, gdpPercentage: 1.8 },
                { value: 2766.35, gdpPercentage: 2.8 },
                { value: 10108.34, gdpPercentage: 3.1 }
            ],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff6b6b'
                }, {
                    offset: 1,
                    color: '#ff8787'
                }])
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ff5252'
                    }, {
                        offset: 1,
                        color: '#ff6b6b'
                    }])
                }
            }
        }, {
            name: 'GDP占比',
            type: 'line',
            yAxisIndex: 1,
            data: [1.8, 2.8, 3.1],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: '#4ecdc4'
            },
            lineStyle: {
                width: 3,
                color: '#4ecdc4'
            },
            emphasis: {
                focus: 'series',
                itemStyle: {
                    color: '#4ecdc4',
                    borderWidth: 2,
                    borderColor: '#fff'
                }
            }
        }],
        annotations: [{
            type: 'text',
            position: [2, 10500],
            content: '预计2060年经济损失将超过1万亿美元',
            style: {
                color: '#ff6b6b',
                fontSize: 14,
                fontWeight: 'bold'
            }
        }]
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 创建健康风险雷达图
function createHealthRisksChart() {
    const chart = echarts.init(document.getElementById('health-risks-chart'));
    
    const option = {
        title: {
            text: '肥胖相关健康风险',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `${params.name}<br/>
                        风险指数: ${params.value}%<br/>
                        ${getRiskDescription(params.value)}`;
            }
        },
        radar: {
            indicator: [
                { name: '心血管疾病', max: 100 },
                { name: '糖尿病', max: 100 },
                { name: '高血压', max: 100 },
                { name: '关节问题', max: 100 },
                { name: '呼吸系统', max: 100 },
                { name: '心理健康', max: 100 }
            ],
            radius: '65%',
            splitNumber: 5,
            axisName: {
                color: '#fff',
                fontSize: 12,
                padding: [3, 5],
                formatter: function(name) {
                    return name;
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.1)']
                }
            }
        },
        series: [{
            name: '健康风险',
            type: 'radar',
            data: [{
                value: [85, 75, 70, 65, 60, 55],
                name: '风险指数',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#ff6b6b'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 107, 107, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 107, 107, 0.1)'
                    }])
                },
                emphasis: {
                    itemStyle: {
                        color: '#ff6b6b',
                        borderWidth: 2,
                        borderColor: '#fff'
                    }
                }
            }]
        }],
        annotations: [{
            type: 'text',
            position: ['center', '85%'],
            content: '数据来源：中国疾病预防控制中心',
            style: {
                color: '#fff',
                fontSize: 12,
                opacity: 0.7
            }
        }]
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 获取风险描述
function getRiskDescription(value) {
    if (value >= 80) return '极高风险';
    if (value >= 60) return '高风险';
    if (value >= 40) return '中等风险';
    if (value >= 20) return '低风险';
    return '极低风险';
}

// 创建人口统计学分析图表
function createDemographicAnalysisChart() {
    const chart = echarts.init(document.getElementById('demographic-analysis-chart'));
    
    const option = {
        title: {
            text: '肥胖率的人口统计学分析',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2010年前', '2010年后'],
            top: 50,
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['男性', '女性'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '肥胖率 (%)',
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        series: [{
            name: '2010年前',
            type: 'bar',
            stack: 'total',
            data: [45, 50],
            itemStyle: {
                color: '#ff6b6b'
            },
            emphasis: {
                itemStyle: {
                    color: '#ff5252'
                }
            }
        }, {
            name: '2010年后',
            type: 'bar',
            stack: 'total',
            data: [10, -2],
            itemStyle: {
                color: '#4ecdc4'
            },
            emphasis: {
                itemStyle: {
                    color: '#45b7af'
                }
            }
        }],
        annotations: [{
            type: 'text',
            position: [0, 60],
            content: '男性肥胖率显著上升',
            style: {
                color: '#ff6b6b',
                fontSize: 14,
                fontWeight: 'bold'
            }
        }, {
            type: 'text',
            position: [1, 45],
            content: '女性肥胖率略有下降',
            style: {
                color: '#4ecdc4',
                fontSize: 14,
                fontWeight: 'bold'
            }
        }]
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 创建政策实施时间表
function createPolicyTimelineChart() {
    const chart = echarts.init(document.getElementById('policy-timeline-chart'));
    
    const option = {
        title: {
            text: '体重管理年行动实施时间表',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                const data = params[0];
                return `${data.name}<br/>
                        开始: ${data.data.start}<br/>
                        结束: ${data.data.end}`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['启动阶段', '全面实施', '评估调整'],
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        yAxis: {
            type: 'value',
            show: true,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '实施阶段',
            type: 'bar',
            data: [
                { value: 1, start: '2024-03', end: '2024-06' },
                { value: 2, start: '2024-07', end: '2026-12' },
                { value: 1, start: '2027-01', end: '2027-03' }
            ],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff6b6b'
                }, {
                    offset: 1,
                    color: '#ff8787'
                }])
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ff5252'
                    }, {
                        offset: 1,
                        color: '#ff6b6b'
                    }])
                }
            },
            label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                    return `${params.data.start} - ${params.data.end}`;
                },
                color: '#fff',
                fontSize: 12
            }
        }],
        annotations: [{
            type: 'text',
            position: ['center', '85%'],
            content: '为期三年的全民健康行动',
            style: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold'
            }
        }]
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 导出函数供其他模块使用
export {
    initDataVisualization,
    loadNewsCategories,
    loadReadingTrends,
    loadHotTopics
}; 