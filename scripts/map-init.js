// 地图初始化脚本
// 不再使用import导入数据，改为直接访问全局变量

// 在文档加载完成后初始化地图
document.addEventListener('DOMContentLoaded', () => {
    console.log('地图初始化脚本加载');
    
    // 先加载地图数据，确保地图组件可用
    Promise.all([
        fetch('https://cdn.jsdelivr.net/npm/echarts@5.4.3/map/json/china.json').then(response => response.json()),
        fetch('https://cdn.jsdelivr.net/npm/echarts@5.4.3/map/json/world.json').then(response => response.json())
    ]).then(([chinaJson, worldJson]) => {
        // 手动注册地图数据
        echarts.registerMap('china', chinaJson);
        echarts.registerMap('world', worldJson);
        
        console.log('地图数据加载并注册成功');
        
        // 查找地图容器
        const chinaMapContainer = document.getElementById('china-map');
        const worldMapContainer = document.getElementById('world-map');
        
        // 地图数据加载完成后，初始化地图
        if (chinaMapContainer) {
            initChinaMap(chinaMapContainer);
        } else {
            console.error('找不到中国地图容器元素');
        }
        
        if (worldMapContainer) {
            initWorldMap(worldMapContainer);
        } else {
            console.error('找不到世界地图容器元素');
        }
    }).catch(error => {
        console.error('加载地图数据失败:', error);
    });
});

// 初始化中国地图
function initChinaMap(container) {
    try {
        // 确保地图数据已加载
        if (!echarts.getMap) {
            console.error('ECharts未包含地图组件，请确保引入了正确的ECharts库');
            return;
        }
        
        if (!echarts.getMap('china')) {
            console.error('未找到中国地图数据，请确保引入了china.js');
            return;
        }
        
        console.log('初始化中国地图ECharts实例');
        const chinaMap = echarts.init(container);
        let currentView = 'obesity';  // 默认视图
        
        // 配置地图视图的函数
        function getMapOption(dataType) {
            let data, title, colorRange;
            
            if (dataType === 'obesity') {
                data = chinaProvinces;
                title = '中国肥胖率分布';
                colorRange = ['#FFEBCC', '#FFAA88', '#FF6B6B'];
            } else if (dataType === 'growth') {
                data = chinaGrowthData;
                title = '肥胖率年增长(%)';
                colorRange = ['#CCFFCC', '#88DD88', '#33AA33'];
            } else {
                data = chinaRiskData;
                title = '健康风险指数';
                colorRange = ['#CCCCFF', '#8888FF', '#5555FF'];
            }
            
            return {
                title: {
                    text: title,
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if (dataType === 'obesity') {
                            return params.name + ': ' + params.value + '%';
                        } else if (dataType === 'growth') {
                            return params.name + ': +' + params.value + '%/年';
                        } else {
                            return params.name + ': ' + params.value + ' (风险指数)';
                        }
                    }
                },
                visualMap: {
                    min: dataType === 'risk' ? 35 : (dataType === 'growth' ? 2 : 10),
                    max: dataType === 'risk' ? 70 : (dataType === 'growth' ? 8 : 25),
                    text: dataType === 'obesity' ? ['高', '低'] : 
                         (dataType === 'growth' ? ['快', '慢'] : ['高', '低']),
                    calculable: true,
                    inRange: {
                        color: colorRange
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    left: 'left',
                    top: 'bottom'
                },
                series: [{
                    name: dataType === 'obesity' ? '肥胖率' : 
                         (dataType === 'growth' ? '增长率' : '风险指数'),
                    type: 'map',
                    map: 'china',
                    roam: true,
                    emphasis: {
                        label: {
                            show: true
                        },
                        itemStyle: {
                            areaColor: '#FDD835'
                        }
                    },
                    data: data
                }]
            };
        }
        
        // 设置初始视图
        chinaMap.setOption(getMapOption(currentView));
        
        // 移除加载动画
        const loadingElement = container.querySelector('.map-loading');
        if (loadingElement) {
            setTimeout(() => {
                loadingElement.classList.add('hidden');
            }, 1000);
        }
        
        // 监听视图切换
        const controlButtons = document.querySelectorAll('.map-control-btn');
        controlButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                currentView = this.getAttribute('data-view');
                
                // 更新按钮状态
                controlButtons.forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                
                // 更新地图视图
                chinaMap.setOption(getMapOption(currentView), true);
            });
        });
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            chinaMap.resize();
        });
        
        // 添加缩放控制
        container.addEventListener('mousewheel', function(e) {
            e.preventDefault(); // 允许ECharts自己处理缩放
        }, {passive: false});
        
    } catch (error) {
        console.error('初始化中国地图时出错:', error);
    }
}

// 初始化世界地图
function initWorldMap(container) {
    try {
        // 确保地图数据已加载
        if (!echarts.getMap) {
            console.error('ECharts未包含地图组件，请确保引入了正确的ECharts库');
            return;
        }
        
        if (!echarts.getMap('world')) {
            console.error('未找到世界地图数据，请确保引入了world.js');
            return;
        }
        
        console.log('初始化世界地图ECharts实例');
        const worldMap = echarts.init(container);
        
        const option = {
            title: {
                text: '全球肥胖干预措施成效',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    const data = worldInterventionData.find(item => item.name === params.name);
                    if (!data) return params.name;
                    
                    let html = `<div style="font-weight:bold;margin-bottom:5px;">${params.name}: ${data.value}分</div>`;
                    html += '<div style="margin-top:5px;">主要干预措施:</div>';
                    html += '<ul style="padding-left:20px;margin:5px 0;">';
                    data.measures.forEach(measure => {
                        html += `<li>${measure}</li>`;
                    });
                    html += '</ul>';
                    return html;
                },
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderColor: 'rgba(255,255,255,0.2)',
                borderWidth: 1,
                padding: 10,
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                min: 60,
                max: 90,
                text: ['高', '低'],
                calculable: true,
                inRange: {
                    color: ['#C2FFEB', '#77EED8', '#00BFAC']
                },
                textStyle: {
                    color: '#fff'
                },
                left: 'left',
                top: 'bottom'
            },
            series: [{
                name: '肥胖干预措施成效',
                type: 'map',
                map: 'world',
                roam: true,
                emphasis: {
                    label: {
                        show: true
                    },
                    itemStyle: {
                        areaColor: '#FDD835'
                    }
                },
                data: worldInterventionData,
                nameMap: {
                    'China': '中国',
                    'United States': '美国',
                    'Japan': '日本',
                    'United Kingdom': '英国',
                    'Germany': '德国',
                    'Australia': '澳大利亚',
                    'Brazil': '巴西',
                    'South Africa': '南非',
                    'Mexico': '墨西哥',
                    'South Korea': '韩国',
                    'Canada': '加拿大',
                    'India': '印度',
                    'Russia': '俄罗斯',
                    'France': '法国',
                    'Italy': '意大利',
                    'Spain': '西班牙',
                    'Netherlands': '荷兰',
                    'Sweden': '瑞典',
                    'Switzerland': '瑞士',
                    'Singapore': '新加坡'
                }
            }]
        };
        
        // 设置地图选项
        worldMap.setOption(option);
        
        // 移除加载动画
        const loadingElement = container.querySelector('.map-loading');
        if (loadingElement) {
            setTimeout(() => {
                loadingElement.classList.add('hidden');
            }, 1000);
        }
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            worldMap.resize();
        });
        
        // 添加缩放控制
        container.addEventListener('mousewheel', function(e) {
            e.preventDefault(); // 允许ECharts自己处理缩放
        }, {passive: false});
        
    } catch (error) {
        console.error('初始化世界地图时出错:', error);
    }
}

// 添加响应式设计支持
function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        // 横屏模式
        document.body.classList.add('landscape');
        // 调整地图高度以适应横屏
        document.querySelectorAll('.map-container').forEach(el => {
            el.style.height = '70vh';
        });
    } else {
        // 竖屏模式
        document.body.classList.remove('landscape');
        // 恢复地图默认高度
        document.querySelectorAll('.map-container').forEach(el => {
            el.style.height = '500px';
        });
    }
}

// 初始检查和监听方向变化
window.addEventListener('DOMContentLoaded', () => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
});