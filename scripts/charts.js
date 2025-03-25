// Chart.js configurations and utility functions
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1000,
        easing: 'easeInOutQuart'
    },
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#fff'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
                size: 14,
                color: '#fff'
            },
            bodyFont: {
                size: 13,
                color: '#fff'
            }
        }
    }
};

// Chart creation functions
export function createObesityRateChart() {
    const ctx = document.getElementById('obesity-rate-chart');
    if (!ctx) return;
    
    console.log("Creating obesity rate chart");
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2010', '2015', '2020', '2025', '2030'],
            datasets: [{
                label: '肥胖率 (%)',
                data: [40, 45, 52, 60, 70.5],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '中国肥胖率趋势预测',
                    font: {
                        size: 16,
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '肥胖率 (%)',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

export function createEconomicImpactChart() {
    const ctx = document.getElementById('economic-impact-chart');
    if (!ctx) return;
    
    console.log("Creating economic impact chart");
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2019', '2030', '2060'],
            datasets: [{
                label: '经济损失 (十亿美元)',
                data: [2595.1, 2766.35, 10108.34],
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '中国因超重和肥胖造成的经济影响预测',
                    font: {
                        size: 16,
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '经济损失 (十亿美元)',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

export function createHealthRisksChart() {
    const ctx = document.getElementById('health-risks-chart');
    if (!ctx) return;
    
    console.log("Creating health risks chart");
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['心血管疾病', '糖尿病', '高血压', '关节问题', '呼吸系统', '心理健康'],
            datasets: [{
                label: '健康风险指数',
                data: [85, 75, 70, 65, 60, 55],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '肥胖相关健康风险',
                    font: {
                        size: 16,
                        color: '#fff'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

export function createDemographicAnalysisChart() {
    const ctx = document.getElementById('demographic-analysis-chart');
    if (!ctx) return;
    
    console.log("Creating demographic analysis chart");
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['男性', '女性'],
            datasets: [{
                label: '2010年前',
                data: [45, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.8)'
            }, {
                label: '2010年后',
                data: [10, -2],
                backgroundColor: 'rgba(255, 99, 132, 0.8)'
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '肥胖率的人口统计学分析',
                    font: {
                        size: 16,
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '变化率 (%)',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

export function createPolicyTimelineChart() {
    const ctx = document.getElementById('policy-timeline-chart');
    if (!ctx) return;
    
    console.log("Creating policy timeline chart");
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12'],
            datasets: [{
                label: '政策实施进度',
                data: [20, 40, 60, 80, 85, 90, 95, 100],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                title: {
                    display: true,
                    text: '体重管理年行动实施进度',
                    font: {
                        size: 16,
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: '完成度 (%)',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

// 初始化所有图表的函数
export function initCharts() {
    console.log("Initializing all charts");
    createObesityRateChart();
    createEconomicImpactChart();
    createHealthRisksChart();
    createDemographicAnalysisChart();
    createPolicyTimelineChart();
} 