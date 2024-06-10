var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1533.5,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4145472548527327
      },
      "linkHotspots": [
        {
          "yaw": 0.04018631802188111,
          "pitch": 0.44262390695493536,
          "rotation": 0,
          "target": "1-main-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06481021536698606,
          "pitch": 0.5858399588358871,
          "title": "Entrance",
          "text": "From street Septimiu Albini no. 110"
        }
      ]
    },
    {
      "id": "1-main-view",
      "name": "Main view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1850,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5951995209065579,
          "pitch": -0.02607530473756725,
          "rotation": 5.497787143782138,
          "target": "4-gardening--more"
        },
        {
          "yaw": 0.1767898724942203,
          "pitch": 0.17260102273935551,
          "rotation": 0,
          "target": "2-private-area--office"
        },
        {
          "yaw": 0.016237967823835575,
          "pitch": 1.0050743275584448,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.56355819397643,
          "pitch": -0.16484742982776268,
          "title": "Container",
          "text": "Text"
        },
        {
          "yaw": 0.03937015782052988,
          "pitch": -0.027143300253769098,
          "title": "Private Area",
          "text": "Text"
        },
        {
          "yaw": 0.3796304504579453,
          "pitch": -0.05848010948795945,
          "title": "Office",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-private-area--office",
      "name": "Private area & Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1923,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2607795613871282,
          "pitch": 1.0522915465151428,
          "rotation": 3.141592653589793,
          "target": "1-main-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.18678704742489138,
          "pitch": 0.2649875284967873,
          "title": "Private Area",
          "text": "Text"
        },
        {
          "yaw": 1.1400529191819864,
          "pitch": -0.18247220977053935,
          "title": "Office entrance",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-shop",
      "name": "Shop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1921,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10364141208813393,
          "pitch": 1.3625868578320262,
          "rotation": 3.141592653589793,
          "target": "1-main-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1929340326206912,
          "pitch": 0.17726498467356322,
          "title": "Cash Desk",
          "text": "Text"
        },
        {
          "yaw": -0.1801257102140923,
          "pitch": 0.6005219064522151,
          "title": "Bouquets",
          "text": "Text"
        },
        {
          "yaw": -1.3844418055358876,
          "pitch": 0.04122065709773537,
          "title": "Gifts &amp; More",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-gardening--more",
      "name": "Gardening & More",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1930,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.528591109273388,
          "pitch": -0.10083726871339316,
          "rotation": 0,
          "target": "3-shop"
        },
        {
          "yaw": 1.533391447606892,
          "pitch": 1.5059454293812937,
          "rotation": 3.141592653589793,
          "target": "1-main-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3970427514622337,
          "pitch": -0.30307321585605784,
          "title": "Gifts &amp; Cash Desk",
          "text": "Text"
        },
        {
          "yaw": -1.5009967994419569,
          "pitch": 0.10971202235502986,
          "title": "Gardening",
          "text": "Text"
        },
        {
          "yaw": -0.041167271146180795,
          "pitch": -0.09188721633878671,
          "title": "Candles &amp; Season specials",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-shop-view",
      "name": "Shop view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1930,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12388424431392409,
          "pitch": -0.20534302927228865,
          "rotation": 0,
          "target": "3-shop"
        },
        {
          "yaw": 1.6346450760741789,
          "pitch": 0.1207856118269035,
          "rotation": 0,
          "target": "2-private-area--office"
        },
        {
          "yaw": -0.9059653132575285,
          "pitch": 1.4880885989484467,
          "rotation": 8.63937979737193,
          "target": "1-main-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.16152448238845807,
          "pitch": -0.40350934995307064,
          "title": "Gifts &amp; Cash desk",
          "text": "Text"
        },
        {
          "yaw": 1.4900515432909298,
          "pitch": 0.011980922319127174,
          "title": "Private area &amp; Office",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "FloriArt virtual tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
