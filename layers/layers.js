var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

var lyr_colormap_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'colormap, m<br />\
    <img src="styles/legend/colormap_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/colormap_2_1.png" /> 1.0000<br />\
    <img src="styles/legend/colormap_2_2.png" /> 2.0000<br />\
    <img src="styles/legend/colormap_2_3.png" /> 3.0000<br />\
    <img src="styles/legend/colormap_2_4.png" /> 4.0000<br />\
    <img src="styles/legend/colormap_2_5.png" /> 5.0000<br />\
    <img src="styles/legend/colormap_2_6.png" /> 6.0000<br />\
    <img src="styles/legend/colormap_2_7.png" /> 7.0000<br />\
    <img src="styles/legend/colormap_2_8.png" /> 8.0000<br />\
    <img src="styles/legend/colormap_2_9.png" /> 9.0000<br />\
    <img src="styles/legend/colormap_2_10.png" /> 10.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/colormap_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_150_cm_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_150_cm_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_125_cm_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_125_cm_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_100_cm_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_100_cm_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_075_cm_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 075 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_075_cm_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_050_cm_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_050_cm_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_025_cm_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_025_cm_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_40_hrs__Depth_010_cm_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ความสูงน้ำล้นคันฯสูงสุด 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_40_hrs__Depth_010_cm_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_150_cm_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_150_cm_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_125_cm_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_125_cm_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_100_cm_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_100_cm_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_075_cm_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_075_cm_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_050_cm_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_050_cm_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_025_cm_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_025_cm_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_30_hrs__Depth_010_cm_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_30_hrs__Depth_010_cm_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_150_cm_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_150_cm_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_125_cm_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_125_cm_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_100_cm_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_100_cm_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_075_cm_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_075_cm_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_050_cm_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_050_cm_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_025_cm_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_025_cm_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_20_hrs__Depth_010_cm_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_20_hrs__Depth_010_cm_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_150_cm_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_150_cm_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_125_cm_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_125_cm_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_100_cm_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_100_cm_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_075_cm_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_075_cm_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_050_cm_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_050_cm_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_025_cm_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_025_cm_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_15_hrs__Depth_010_cm_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_15_hrs__Depth_010_cm_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_150_cm_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_150_cm_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_125_cm_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_125_cm_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_100_cm_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_100_cm_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_075_cm_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_075_cm_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_050_cm_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_050_cm_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_025_cm_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_025_cm_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_10_hrs__Depth_010_cm_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_10_hrs__Depth_010_cm_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_150_cm_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_150_cm_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_125_cm_39 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_125_cm_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_100_cm_40 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_100_cm_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_075_cm_41 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_075_cm_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_050_cm_42 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_050_cm_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_025_cm_43 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_025_cm_43.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_05_hrs__Depth_010_cm_44 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_05_hrs__Depth_010_cm_44.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_150_cm_45 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_150_cm_45.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_125_cm_46 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_125_cm_46.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_100_cm_47 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 1.00 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_100_cm_47.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_075_cm_48 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.75 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_075_cm_48.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_050_cm_49 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.50 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_050_cm_49.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_025_cm_50 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.25 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_025_cm_50.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var lyr_Duration_01_hrs__Depth_010_cm_51 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Overflow Depth 0.10 m<br /><br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Duration_01_hrs__Depth_010_cm_51.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11215460.020266, 2125489.101762, 11221666.270695, 2133336.465402]
        })
    });
var group_Duration01hrs = new ol.layer.Group({
                                layers: [lyr_Duration_01_hrs__Depth_150_cm_45,lyr_Duration_01_hrs__Depth_125_cm_46,lyr_Duration_01_hrs__Depth_100_cm_47,lyr_Duration_01_hrs__Depth_075_cm_48,lyr_Duration_01_hrs__Depth_050_cm_49,lyr_Duration_01_hrs__Depth_025_cm_50,lyr_Duration_01_hrs__Depth_010_cm_51,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 01 ชม.'});
var group_Duration05hrs = new ol.layer.Group({
                                layers: [lyr_Duration_05_hrs__Depth_150_cm_38,lyr_Duration_05_hrs__Depth_125_cm_39,lyr_Duration_05_hrs__Depth_100_cm_40,lyr_Duration_05_hrs__Depth_075_cm_41,lyr_Duration_05_hrs__Depth_050_cm_42,lyr_Duration_05_hrs__Depth_025_cm_43,lyr_Duration_05_hrs__Depth_010_cm_44,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 05 ชม.'});
var group_Duration10hrs = new ol.layer.Group({
                                layers: [lyr_Duration_10_hrs__Depth_150_cm_31,lyr_Duration_10_hrs__Depth_125_cm_32,lyr_Duration_10_hrs__Depth_100_cm_33,lyr_Duration_10_hrs__Depth_075_cm_34,lyr_Duration_10_hrs__Depth_050_cm_35,lyr_Duration_10_hrs__Depth_025_cm_36,lyr_Duration_10_hrs__Depth_010_cm_37,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 10 ชม.'});
var group_Duration15hrs = new ol.layer.Group({
                                layers: [lyr_Duration_15_hrs__Depth_150_cm_24,lyr_Duration_15_hrs__Depth_125_cm_25,lyr_Duration_15_hrs__Depth_100_cm_26,lyr_Duration_15_hrs__Depth_075_cm_27,lyr_Duration_15_hrs__Depth_050_cm_28,lyr_Duration_15_hrs__Depth_025_cm_29,lyr_Duration_15_hrs__Depth_010_cm_30,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 15 ชม.'});
var group_Duration20hrs = new ol.layer.Group({
                                layers: [lyr_Duration_20_hrs__Depth_150_cm_17,lyr_Duration_20_hrs__Depth_125_cm_18,lyr_Duration_20_hrs__Depth_100_cm_19,lyr_Duration_20_hrs__Depth_075_cm_20,lyr_Duration_20_hrs__Depth_050_cm_21,lyr_Duration_20_hrs__Depth_025_cm_22,lyr_Duration_20_hrs__Depth_010_cm_23,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 20 ชม.'});
var group_Duration30hrs = new ol.layer.Group({
                                layers: [lyr_Duration_30_hrs__Depth_150_cm_10,lyr_Duration_30_hrs__Depth_125_cm_11,lyr_Duration_30_hrs__Depth_100_cm_12,lyr_Duration_30_hrs__Depth_075_cm_13,lyr_Duration_30_hrs__Depth_050_cm_14,lyr_Duration_30_hrs__Depth_025_cm_15,lyr_Duration_30_hrs__Depth_010_cm_16,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 30 ชม.'});
var group_Duration40hrs = new ol.layer.Group({
                                layers: [lyr_Duration_40_hrs__Depth_150_cm_3,lyr_Duration_40_hrs__Depth_125_cm_4,lyr_Duration_40_hrs__Depth_100_cm_5,lyr_Duration_40_hrs__Depth_075_cm_6,lyr_Duration_40_hrs__Depth_050_cm_7,lyr_Duration_40_hrs__Depth_025_cm_8,lyr_Duration_40_hrs__Depth_010_cm_9,],
                                fold: 'close',
                                title: 'ระยะเวลาที่น้ำล้นคันฯ 40 ชม.'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_colormap_2.setVisible(true);lyr_Duration_40_hrs__Depth_150_cm_3.setVisible(false);lyr_Duration_40_hrs__Depth_125_cm_4.setVisible(false);lyr_Duration_40_hrs__Depth_100_cm_5.setVisible(false);lyr_Duration_40_hrs__Depth_075_cm_6.setVisible(false);lyr_Duration_40_hrs__Depth_050_cm_7.setVisible(false);lyr_Duration_40_hrs__Depth_025_cm_8.setVisible(false);lyr_Duration_40_hrs__Depth_010_cm_9.setVisible(false);lyr_Duration_30_hrs__Depth_150_cm_10.setVisible(false);lyr_Duration_30_hrs__Depth_125_cm_11.setVisible(false);lyr_Duration_30_hrs__Depth_100_cm_12.setVisible(false);lyr_Duration_30_hrs__Depth_075_cm_13.setVisible(false);lyr_Duration_30_hrs__Depth_050_cm_14.setVisible(false);lyr_Duration_30_hrs__Depth_025_cm_15.setVisible(false);lyr_Duration_30_hrs__Depth_010_cm_16.setVisible(false);lyr_Duration_20_hrs__Depth_150_cm_17.setVisible(false);lyr_Duration_20_hrs__Depth_125_cm_18.setVisible(false);lyr_Duration_20_hrs__Depth_100_cm_19.setVisible(false);lyr_Duration_20_hrs__Depth_075_cm_20.setVisible(false);lyr_Duration_20_hrs__Depth_050_cm_21.setVisible(false);lyr_Duration_20_hrs__Depth_025_cm_22.setVisible(false);lyr_Duration_20_hrs__Depth_010_cm_23.setVisible(false);lyr_Duration_15_hrs__Depth_150_cm_24.setVisible(false);lyr_Duration_15_hrs__Depth_125_cm_25.setVisible(false);lyr_Duration_15_hrs__Depth_100_cm_26.setVisible(false);lyr_Duration_15_hrs__Depth_075_cm_27.setVisible(false);lyr_Duration_15_hrs__Depth_050_cm_28.setVisible(false);lyr_Duration_15_hrs__Depth_025_cm_29.setVisible(false);lyr_Duration_15_hrs__Depth_010_cm_30.setVisible(false);lyr_Duration_10_hrs__Depth_150_cm_31.setVisible(false);lyr_Duration_10_hrs__Depth_125_cm_32.setVisible(false);lyr_Duration_10_hrs__Depth_100_cm_33.setVisible(false);lyr_Duration_10_hrs__Depth_075_cm_34.setVisible(false);lyr_Duration_10_hrs__Depth_050_cm_35.setVisible(false);lyr_Duration_10_hrs__Depth_025_cm_36.setVisible(false);lyr_Duration_10_hrs__Depth_010_cm_37.setVisible(false);lyr_Duration_05_hrs__Depth_150_cm_38.setVisible(false);lyr_Duration_05_hrs__Depth_125_cm_39.setVisible(false);lyr_Duration_05_hrs__Depth_100_cm_40.setVisible(false);lyr_Duration_05_hrs__Depth_075_cm_41.setVisible(false);lyr_Duration_05_hrs__Depth_050_cm_42.setVisible(false);lyr_Duration_05_hrs__Depth_025_cm_43.setVisible(false);lyr_Duration_05_hrs__Depth_010_cm_44.setVisible(false);lyr_Duration_01_hrs__Depth_150_cm_45.setVisible(false);lyr_Duration_01_hrs__Depth_125_cm_46.setVisible(false);lyr_Duration_01_hrs__Depth_100_cm_47.setVisible(false);lyr_Duration_01_hrs__Depth_075_cm_48.setVisible(false);lyr_Duration_01_hrs__Depth_050_cm_49.setVisible(false);lyr_Duration_01_hrs__Depth_025_cm_50.setVisible(false);lyr_Duration_01_hrs__Depth_010_cm_51.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrainHybrid_1,lyr_colormap_2,group_Duration40hrs,group_Duration30hrs,group_Duration20hrs,group_Duration15hrs,group_Duration10hrs,group_Duration05hrs,group_Duration01hrs];
