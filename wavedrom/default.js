var WaveSkin = WaveSkin || {};
WaveSkin.default = ['svg', {
    id: 'svg',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    height: '0'
},
    ['style', {
        type: 'text/css'
    }, 'text{font-size:11pt;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:center;fill-opacity:1;font-family:Helvetica}.h1{font-size:33pt;font-weight:bold}.h2{font-size:27pt;font-weight:bold}.h3{font-size:20pt;font-weight:bold}.h4{font-size:14pt;font-weight:bold}.h5{font-size:11pt;font-weight:bold}.h6{font-size:8pt;font-weight:bold}.muted{fill:#aaa}.warning{fill:#f6b900}.error{fill:#f60000}.info{fill:#0041c4}.success{fill:#00ab00}text{fill:var(--pst-color-text-base)}.s1{fill:none;stroke:var(--pst-color-text-base);stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none}.s2{fill:none;stroke:var(--pst-color-text-base);stroke-width:0.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none}.s3{color:var(--pst-color-text-base);fill:none;stroke:var(--pst-color-text-base);stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:1, 3;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible}.s4{color:var(--pst-color-text-base);fill:none;stroke:var(--pst-color-text-base);stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible}.s5{fill:var(--pst-color-background);stroke:none}.s6{fill:var(--pst-color-text-base);fill-opacity:1;stroke:none}.s7{color:var(--pst-color-text-base);fill:var(--pst-color-background);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s8{color:var(--pst-color-text-base);fill:#ffffb4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s9{color:var(--pst-color-text-base);fill:var(--pst-color-secondary);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s10{color:var(--pst-color-text-base);fill:var(--pst-color-primary);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s11{color:var(--pst-color-text-base);fill:#ccfdfe;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s12{color:var(--pst-color-text-base);fill:#cdfdc5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s13{color:var(--pst-color-text-base);fill:#f0c1fb;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s14{color:var(--pst-color-text-base);fill:#f5c2c0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s15{fill:#0041c4;fill-opacity:1;stroke:none}.s16{fill:none;stroke:#0041c4;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none}'],
    ['defs', ['g', {
        id: 'socket'
    },
        ['rect', {
            y: '15',
            x: '6',
            height: '20',
            width: '20'
        }]
    ],
        ['g', {
            id: 'pclk'
        },
            ['path', {
                d: 'M0,20 0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'nclk'
        },
            ['path', {
                d: 'm0,0 0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '000'
        },
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0m0'
        },
            ['path', {
                d: 'm0,20 3,0 3,-10 3,10 11,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0m1'
        },
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mx'
        },
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 5,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 4,16',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0md'
        },
            ['path', {
                d: 'm8,20 10,0',
                class: 's3'
            }],
            ['path', {
                d: 'm0,20 5,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mu'
        },
            ['path', {
                d: 'm0,20 3,0 C 7,10 10.107603,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mz'
        },
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '111'
        },
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1m0'
        },
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1m1'
        },
            ['path', {
                d: 'M0,0 3,0 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mx'
        },
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M3.5,1.5 5,0',
                class: 's2'
            }]
        ],
        ['g', {
            id: '1md'
        },
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mu'
        },
            ['path', {
                d: 'M0,0 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M8,0 18,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: '1mz'
        },
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xxx'
        },
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 10,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 15,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 20,0',
                class: 's2'
            }],
            ['path', {
                d: 'M5,20 20,5',
                class: 's2'
            }],
            ['path', {
                d: 'M10,20 20,10',
                class: 's2'
            }],
            ['path', {
                d: 'm15,20 5,-5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xm0'
        },
            ['path', {
                d: 'M0,0 4,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 4,1',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M5,20 8,17',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xm1'
        },
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 4,20 9,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 9,1',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 5,15',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmx'
        },
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 10,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 15,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 20,0',
                class: 's2'
            }],
            ['path', {
                d: 'M5,20 20,5',
                class: 's2'
            }],
            ['path', {
                d: 'M10,20 20,10',
                class: 's2'
            }],
            ['path', {
                d: 'm15,20 5,-5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmd'
        },
            ['path', {
                d: 'm0,0 4,0 c 3,10 6,20 16,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 4,1',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 5.5,4.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6.5,8.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 8,12',
                class: 's2'
            }],
            ['path', {
                d: 'm5,20 5,-5',
                class: 's2'
            }],
            ['path', {
                d: 'm10,20 2.5,-2.5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmu'
        },
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 4,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 10,0',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 10,5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 6,14',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmz'
        },
            ['path', {
                d: 'm0,0 4,0 c 6,10 11,10 16,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 4,0 C 10,10 15,10 20,10',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 4.5,0.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 6.5,3.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 8.5,6.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 11.5,8.5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'ddd'
        },
            ['path', {
                d: 'm0,20 20,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'dm0'
        },
            ['path', {
                d: 'm0,20 10,0',
                class: 's3'
            }],
            ['path', {
                d: 'm12,20 8,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dm1'
        },
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmx'
        },
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 5,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 4,16',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmd'
        },
            ['path', {
                d: 'm0,20 20,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'dmu'
        },
            ['path', {
                d: 'm0,20 3,0 C 7,10 10.107603,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmz'
        },
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'uuu'
        },
            ['path', {
                d: 'M0,0 20,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'um0'
        },
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'um1'
        },
            ['path', {
                d: 'M0,0 10,0',
                class: 's3'
            }],
            ['path', {
                d: 'm12,0 8,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umx'
        },
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M3.5,1.5 5,0',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'umd'
        },
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umu'
        },
            ['path', {
                d: 'M0,0 20,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'umz'
        },
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's4'
            }]
        ],
        ['g', {
            id: 'zzz'
        },
            ['path', {
                d: 'm0,10 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zm0'
        },
            ['path', {
                d: 'm0,10 6,0 3,10 11,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zm1'
        },
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmx'
        },
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 6.5,8.5',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'zmd'
        },
            ['path', {
                d: 'm0,10 7,0 c 3,5 8,10 13,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmu'
        },
            ['path', {
                d: 'm0,10 7,0 C 10,5 15,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmz'
        },
            ['path', {
                d: 'm0,10 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'gap'
        },
            ['path', {
                d: 'm7,-2 -4,0 c -5,0 -5,24 -10,24 l 4,0 C 2,22 2,-2 7,-2 z',
                class: 's5'
            }],
            ['path', {
                d: 'M-7,22 C -2,22 -2,-2 3,-2',
                class: 's1'
            }],
            ['path', {
                d: 'M-3,22 C 2,22 2,-2 7,-2',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'Pclk'
        },
            ['path', {
                d: 'M-3,12 0,3 3,12 C 1,11 -1,11 -3,12 z',
                class: 's6'
            }],
            ['path', {
                d: 'M0,20 0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'Nclk'
        },
            ['path', {
                d: 'M-3,8 0,17 3,8 C 1,9 -1,9 -3,8 z',
                class: 's6'
            }],
            ['path', {
                d: 'm0,0 0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-2'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's7'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-2'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's7'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-2'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's7'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-2'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's7'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-2'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's7'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-2'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-2'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-2'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's7'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-2'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-3'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's8'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-3'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's8'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-3'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's8'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-3'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's8'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-3'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's8'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-3'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-3'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-3'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's8'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-3'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-4'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's9'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-4'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's9'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-4'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's9'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-4'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's9'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-4'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's9'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-4'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-4'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-4'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's9'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-4'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-5'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's10'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-5'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's10'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-5'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's10'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-5'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's10'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-5'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's10'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-5'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-5'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-5'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's10'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-5'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-6'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's11'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-6'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's11'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-6'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's11'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-6'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's11'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-6'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's11'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-6'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-6'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-6'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's11'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-6'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-7'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's12'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-7'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's12'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-7'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's12'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-7'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's12'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-7'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's12'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-7'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-7'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-7'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's12'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-7'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-8'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's13'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-8'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's13'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-8'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's13'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-8'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's13'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-8'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's13'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-8'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-8'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-8'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's13'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-8'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-9'
        },
            ['path', {
                d: 'M2.875,0 20,0 20,20 9,20 z',
                class: 's14'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,5 3.5,1.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,10 4.5,5.5',
                class: 's2'
            }],
            ['path', {
                d: 'M0,15 6,9',
                class: 's2'
            }],
            ['path', {
                d: 'M0,20 4,16',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 3,20 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-9'
        },
            ['path', {
                d: 'M3,0 20,0 20,20 9,20 z',
                class: 's14'
            }],
            ['path', {
                d: 'm3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm6,10 3,10 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,10 6,10 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-9'
        },
            ['path', {
                d: 'M20,20 0,20 0,0 20,0',
                class: 's14'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-9'
        },
            ['path', {
                d: 'M0,20 0,0 3,0 9,20',
                class: 's14'
            }],
            ['path', {
                d: 'M0,0 3,0 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-9'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 9,0',
                class: 's14'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-9'
        },
            ['path', {
                d: 'M0,0 0,20 3,20 6,10 3,0',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'm20,15 -5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M20,10 10,20',
                class: 's2'
            }],
            ['path', {
                d: 'M20,5 8,17',
                class: 's2'
            }],
            ['path', {
                d: 'M20,0 7,13',
                class: 's2'
            }],
            ['path', {
                d: 'M15,0 7,8',
                class: 's2'
            }],
            ['path', {
                d: 'M10,0 9,1',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-9'
        },
            ['path', {
                d: 'm0,0 0,20 20,0 C 10,20 7,10 3,0',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 c 4,10 7,20 17,20',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-9'
        },
            ['path', {
                d: 'm0,0 0,20 3,0 C 7,10 10,0 20,0',
                class: 's14'
            }],
            ['path', {
                d: 'm0,20 3,0 C 7,10 10,0 20,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-9'
        },
            ['path', {
                d: 'M0,0 3,0 C 10,10 15,10 20,10 15,10 10,10 3,20 L 0,20',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 c 7,10 12,10 17,10',
                class: 's1'
            }],
            ['path', {
                d: 'm0,20 3,0 C 10,10 15,10 20,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-2'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-3'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-4'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-5'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-6'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-7'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-8'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-9'
        },
            ['path', {
                d: 'M9,0 20,0 20,20 9,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M3,0 0,0 0,20 3,20 6,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm0,0 3,0 6,20 11,0',
                class: 's1'
            }],
            ['path', {
                d: 'M0,20 3,20 9,0 20,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'arrow0'
        },
            ['path', {
                d: 'm-12,-3 9,3 -9,3 c 1,-2 1,-4 0,-6 z',
                class: 's15'
            }],
            ['path', {
                d: 'M0,0 -15,0',
                class: 's16'
            }]
        ],
        ['marker', {
            id: 'arrowhead',
            style: 'fill:#0041c4',
            markerHeight: 7,
            markerWidth: 10,
            markerUnits: 'strokeWidth',
            viewBox: '0 -4 11 8',
            refX: 15,
            refY: 0,
            orient: 'auto'
        },
            ['path', {
                d: 'M0 -4 11 0 0 4z'
            }]
        ],
        ['marker', {
            id: 'arrowtail',
            style: 'fill:#0041c4',
            markerHeight: 7,
            markerWidth: 10,
            markerUnits: 'strokeWidth',
            viewBox: '-11 -4 11 8',
            refX: -15,
            refY: 0,
            orient: 'auto'
        },
            ['path', {
                d: 'M0 -4 -11 0 0 4z'
            }]
        ],
        ['marker', {
            id: 'tee',
            style: 'fill:#0041c4',
            markerHeight: 6,
            markerWidth: 1,
            markerUnits: 'strokeWidth',
            viewBox: '0 0 1 6',
            refX: 0,
            refY: 3,
            orient: 'auto'
        },
            ['path', {
                d: 'M 0 0 L 0 6',
                style: 'stroke:#0041c4;stroke-width:2'
            }]
        ]
    ],
    ['g', {
        id: 'waves'
    },
        ['g', {
            id: 'lanes'
        }],
        ['g', {
            id: 'groups'
        }]
    ]
];
try {
    module.exports = WaveSkin;
} catch (err) { }