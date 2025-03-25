// 中国地图数据
const chinaMapData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "北京",
                "obesity_rate": 25.3
            },
            "geometry": {
                "type": "Point",
                "coordinates": [116.4053, 39.9042]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "上海",
                "obesity_rate": 23.8
            },
            "geometry": {
                "type": "Point",
                "coordinates": [121.4737, 31.2304]
            }
        },
        // ... 其他城市数据
    ]
};

// 世界地图数据
const worldMapData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "中国",
                "obesity_rate": 15.7
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[73.6754, 3.8693], [135.0263, 3.8693], [135.0263, 53.5506], [73.6754, 53.5506], [73.6754, 3.8693]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "美国",
                "obesity_rate": 36.2
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[-125.0000, 24.3963], [-66.9346, 24.3963], [-66.9346, 49.3844], [-125.0000, 49.3844], [-125.0000, 24.3963]]]
            }
        },
        // ... 其他国家数据
    ]
};

// 地图配置
const mapConfig = {
    china: {
        center: [104.5, 38.0],
        zoom: 4,
        style: {
            backgroundColor: '#f5f5f5',
            borderColor: '#ddd',
            borderWidth: 1
        }
    },
    world: {
        center: [0, 20],
        zoom: 2,
        style: {
            backgroundColor: '#f5f5f5',
            borderColor: '#ddd',
            borderWidth: 1
        }
    }
};

export { chinaMapData, worldMapData, mapConfig }; 