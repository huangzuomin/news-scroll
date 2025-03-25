// 高级视差滚动效果
function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    const contentSections = document.querySelectorAll('.content-section');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    // 背景视差效果
    window.addEventListener('scroll', () => {
        // 背景元素视差
        parallaxSections.forEach(section => {
            const speed = section.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            section.style.backgroundPositionY = `${yPos}px`;
            
            // 添加淡入淡出效果
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const opacity = 1 - (Math.abs(rect.top) / windowHeight) * 0.8;
                section.style.opacity = Math.max(opacity, 0.3);
            }
        });
        
        // 内容元素视差
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.2;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const yPos = (rect.top - windowHeight) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
    
    // 给内容区域添加视差效果
    contentSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        section.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        
        if (rect.top > window.innerHeight) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
}

// 增强的滚动显示动画
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal, .social-post, .social-article, .chart-container, .map-container, .quote-box, .strategy-card, .service-list li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 添加延迟动画
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = `${delay}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((element, index) => {
        // 为列表项添加递增延迟
        if (element.classList.contains('service-list')) {
            element.querySelectorAll('li').forEach((li, i) => {
                li.dataset.delay = i * 0.1;
            });
        }
        observer.observe(element);
    });
}

// 平滑滚动效果
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70; // 导航栏高度
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动进度指示器
function initScrollProgress() {
    // 创建进度条元素
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // 创建部分滚动指示器
    const sections = document.querySelectorAll('section[id]');
    const sectionIndicator = document.createElement('div');
    sectionIndicator.className = 'section-indicator';
    document.body.appendChild(sectionIndicator);
    
    sections.forEach(section => {
        const dot = document.createElement('div');
        dot.className = 'section-dot';
        dot.dataset.section = section.id;
        sectionIndicator.appendChild(dot);
        
        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        // 更新主进度条
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
        
        // 更新部分指示器
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const dot = sectionIndicator.querySelector(`[data-section="${section.id}"]`);
            
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}

// 3D倾斜效果
function init3DTilt() {
    const tiltElements = document.querySelectorAll('.tilt-effect');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', e => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 计算鼠标在元素上的相对位置 (0-1)
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // 计算倾斜角度 (-10 到 10 度)
            const tiltX = 10 - (yPercent * 20);
            const tiltY = (xPercent * 20) - 10;
            
            // 应用变换
            element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// 内容层叠效果
function initContentStacking() {
    const stackingSections = document.querySelectorAll('.stacking-section');
    
    window.addEventListener('scroll', () => {
        stackingSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const stackElements = section.querySelectorAll('.stack-element');
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollPercent = 1 - Math.abs(rect.top) / window.innerHeight;
                
                stackElements.forEach((element, index) => {
                    const delay = index * 0.1;
                    const translateY = 100 - (scrollPercent * 100) + (index * 10);
                    const opacity = scrollPercent - (index * 0.1);
                    
                    element.style.transform = `translateY(${translateY > 0 ? translateY : 0}px)`;
                    element.style.opacity = opacity > 0 ? opacity : 0;
                    element.style.transitionDelay = `${delay}s`;
                });
            }
        });
    });
}

// 初始化所有滚动效果
function initScrollEffects() {
    initParallax();
    initScrollReveal();
    initSmoothScroll();
    initScrollProgress();
    init3DTilt();
    initContentStacking();
    
    // 初始触发一次滚动事件，确保效果应用
    window.dispatchEvent(new Event('scroll'));
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initScrollEffects);

// 导出函数供其他模块使用
export {
    initParallax,
    initScrollReveal,
    initSmoothScroll,
    initScrollProgress,
    init3DTilt,
    initContentStacking,
    initScrollEffects
}; 