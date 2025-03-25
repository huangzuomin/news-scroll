import { initCharts } from './charts.js';
import { chinaMapData, worldMapData, mapConfig } from './map-data.js';
import { socialMediaData, socialConfig } from './social-data.js';

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有图表
    initCharts();
    
    // 初始化地图
    initMaps();
    
    // 加载社交媒体内容
    loadSocialContent();
    
    // 监听滚动事件，实现动画效果
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 为列表项添加延迟动画
                if (entry.target.classList.contains('service-list')) {
                    const items = entry.target.querySelectorAll('li');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.scroll-reveal, .fade-in, .slide-in-left, .slide-in-right, .highlight-content, .section-transition, .video-container, .social-post, .quote-box, .service-list li').forEach(el => {
        observer.observe(el);
    });
});

// 初始化地图
function initMaps() {
    const worldMap = echarts.init(document.getElementById('world-map'));
    worldMap.setOption({
        title: {
            text: '全球肥胖率分布',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        visualMap: {
            min: 0,
            max: 40,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#e0f3f8', '#4CAF50']
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '肥胖率',
            type: 'map',
            map: 'world',
            roam: true,
            emphasis: {
                label: {
                    show: true
                }
            },
            data: worldMapData.features.map(feature => ({
                name: feature.properties.name,
                value: feature.properties.obesity_rate
            }))
        }]
    });

    // 监听窗口大小变化，重绘地图
    window.addEventListener('resize', () => {
        worldMap.resize();
    });
}

// 加载社交媒体内容
function loadSocialContent() {
    const socialFeed = document.getElementById('social-feed');
    if (!socialFeed) return;

    // 创建微博内容
    const weiboContent = document.createElement('div');
    weiboContent.className = 'social-section weibo';
    weiboContent.innerHTML = `
        <h3>微博热议</h3>
        ${socialMediaData.weibo.map(post => `
            <div class="social-post scroll-reveal">
                <div class="post-header">
                    <img src="${post.avatar}" alt="${post.author}" class="avatar">
                    <span class="author">${post.author}</span>
                    <span class="timestamp">${post.timestamp}</span>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="post-stats">
                    <span>👍 ${post.likes}</span>
                    <span>💬 ${post.comments}</span>
                </div>
            </div>
        `).join('')}
    `;
    socialFeed.appendChild(weiboContent);

    // 创建微信内容
    const wechatContent = document.createElement('div');
    wechatContent.className = 'social-section wechat';
    wechatContent.innerHTML = `
        <h3>微信文章</h3>
        ${socialMediaData.wechat.map(article => `
            <div class="social-article scroll-reveal">
                <h4>${article.title}</h4>
                <p class="author">作者：${article.author}</p>
                <p class="content">${article.content}</p>
                <div class="article-stats">
                    <span>👁️ ${article.views}</span>
                    <span>👍 ${article.likes}</span>
                </div>
            </div>
        `).join('')}
    `;
    socialFeed.appendChild(wechatContent);
} 