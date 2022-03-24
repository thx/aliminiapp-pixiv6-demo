const data = {
    stage: null,
    background: 0x6666,
    width: 283,
    height: 414, 
    framerate: 60,
    totalFrames: 1,
    assets: {
        "great": "https://img.alicdn.com/tfs/TB1O_4Eu4z1gK0jSZSgXXavwpXa-188-169.png",
        "bomb_sweat": "https://img.alicdn.com/tfs/TB1af8KuYj1gK0jSZFuXXcrHpXa-71-116.png",
        "bomb_eyebrow": "https://img.alicdn.com/tfs/TB1J3pGu7L0gK0jSZFAXXcA9pXa-163-137.png",
        "boom01": "https://img.alicdn.com/tfs/TB1ctK.uebviK0jSZFNXXaApXXa-509-748.png",
        "boom02": "https://img.alicdn.com/tfs/TB1SOdIuYH1gK0jSZFwXXc7aXXa-509-748.png",
        "boom03": "https://img.alicdn.com/tfs/TB1wnhIu7T2gK0jSZPcXXcKkpXa-509-748.png",
        "boom04": "https://img.alicdn.com/tfs/TB1qx4Du1T2gK0jSZFvXXXnFXXa-509-748.png",
        "boom05": "https://img.alicdn.com/tfs/TB1hTXFuYr1gK0jSZR0XXbP8XXa-509-748.png",
        "boom06": "https://img.alicdn.com/tfs/TB1BdNKu1H2gK0jSZJnXXaT1FXa-509-748.png",
        "boom07": "https://img.alicdn.com/tfs/TB1KGdBuWL7gK0jSZFBXXXZZpXa-509-748.png",
        "boom08": "https://img.alicdn.com/tfs/TB1IgBKuYj1gK0jSZFuXXcrHpXa-509-748.png",
        "boom09": "https://img.alicdn.com/tfs/TB1FidIu4v1gK0jSZFFXXb0sXXa-509-748.png",
        "bomb_eye2": "https://img.alicdn.com/tfs/TB19bJEu.z1gK0jSZLeXXb9kVXa-36-36.png",
        "bomb_eye": "https://img.alicdn.com/tfs/TB1CWtEu2b2gK0jSZK9XXaEgFXa-85-85.png",
        "bomb_body": "https://img.alicdn.com/tfs/TB1edRFu4n1gK0jSZKPXXXvUXXa-296-296.png",
        "bomb_body2": "https://img.alicdn.com/tfs/TB1dQXEu4z1gK0jSZSgXXavwpXa-116-80.png",
        "bomb_fire2": "https://img.alicdn.com/tfs/TB1qQREu.H1gK0jSZSyXXXtlpXa-76-105.png",
        "bomb_fire": "https://img.alicdn.com/tfs/TB11rVGu9f2gK0jSZFPXXXsopXa-76-105.png",
        "bomb_line": "https://img.alicdn.com/tfs/TB1gztHu5_1gK0jSZFqXXcpaXXa-118-86.png",
        "bomb_shadow": "https://img.alicdn.com/tfs/TB1hsXBuWL7gK0jSZFBXXXZZpXa-275-29.png"
    },
    lib: {},
    shapes: {},
    textures: {},
    spritesheets: [],
    getTexture: function(id) {
        if (data.textures[id]) {
            return data.textures[id];
        }
        const atlas = data.spritesheets.find(atlas => !!atlas.textures[id]);
        return atlas ? atlas.textures[id] : null;
    },
    setup: function(animate) {
    

    const MovieClip = animate.MovieClip;
    const Container = animate.Container;
    const Sprite = animate.Sprite;

    data.lib.mc2 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("great"))
            .setTransform(-94, -84.5);
        this.addChild(instance1);
    }
    }

    data.lib.mcgreat = class extends MovieClip {
        constructor() {
        super({
            duration: 80
        });
        const instance1 = new data.lib.mc2();
        this.addTimedChild(instance1, 0, 80, {
            "0": {
                y: 100,
                sx: 0.409,
                sy: 0.409,
                a: 0
            },
            "1": {
                y: 99.147,
                sx: 0.414,
                sy: 0.414,
                a: 0.01
            },
            "2": {
                y: 96.447,
                sx: 0.43,
                sy: 0.43,
                a: 0.04
            },
            "3": {
                y: 91.947,
                sx: 0.457,
                sy: 0.457,
                a: 0.08
            },
            "4": {
                y: 85.651,
                sx: 0.494,
                sy: 0.494,
                a: 0.14
            },
            "5": {
                y: 77.547,
                sx: 0.542,
                sy: 0.542,
                a: 0.23
            },
            "6": {
                y: 67.7,
                sx: 0.6,
                sy: 0.6,
                a: 0.32
            },
            "7": {
                y: 55.998,
                sx: 0.669,
                sy: 0.669,
                a: 0.44
            },
            "8": {
                y: 42.502,
                sx: 0.749,
                sy: 0.749,
                a: 0.57
            },
            "9": {
                y: 27.201,
                sx: 0.839,
                sy: 0.839,
                a: 0.73
            },
            "10": {
                y: 10.152,
                sx: 0.94,
                sy: 0.94,
                a: 0.9
            },
            "11": {
                y: 4.208,
                sx: 0.976,
                sy: 0.976,
                a: 0.96
            },
            "12": {
                y: 11.929,
                sx: 0.93,
                sy: 0.93,
                a: 0.88
            },
            "13": {
                y: 17.902,
                sx: 0.894,
                sy: 0.894,
                a: 0.82
            },
            "14": {
                y: 22.077,
                sx: 0.87,
                sy: 0.87,
                a: 0.78
            },
            "15": {
                y: 24.449,
                sx: 0.856,
                sy: 0.856,
                a: 0.76
            },
            "16": {
                y: 24.97,
                sx: 0.852,
                sy: 0.852,
                a: 0.75
            },
            "17": {
                y: 23.792,
                sx: 0.86,
                sy: 0.86,
                a: 0.76
            },
            "18": {
                y: 20.766,
                sx: 0.878,
                sy: 0.878,
                a: 0.79
            },
            "19": {
                y: 15.941,
                sx: 0.906,
                sy: 0.906,
                a: 0.84
            },
            "20": {
                y: 9.363,
                sx: 0.945,
                sy: 0.945,
                a: 0.91
            },
            "21": {
                y: 0.883,
                sx: 0.995,
                sy: 0.995,
                a: 0.99
            },
            "22": {
                y: 3.615,
                sx: 0.979,
                sy: 0.979,
                a: 0.96
            },
            "23": {
                y: 5.823,
                sx: 0.966,
                sy: 0.966,
                a: 0.94
            },
            "24": {
                y: 6.231,
                sx: 0.963,
                sy: 0.963
            },
            "25": {
                y: 4.842,
                sx: 0.972,
                sy: 0.972,
                a: 0.95
            },
            "26": {
                y: 1.65,
                sx: 0.99,
                sy: 0.99,
                a: 0.98
            },
            "27": {
                y: 1.215,
                sx: 0.993,
                sy: 0.993,
                a: 0.99
            },
            "28": {
                y: 1.494,
                sx: 0.991,
                sy: 0.991,
                a: 0.98
            },
            "29": {
                y: 0,
                sx: 1,
                sy: 1,
                a: 1
            },
            "67": {
                y: -25.35,
                sx: 0.773,
                sy: 0.773,
                a: 0.62
            },
            "68": {
                y: -35.15,
                sx: 0.685,
                sy: 0.685,
                a: 0.47
            },
            "69": {
                y: -42.15,
                sx: 0.622,
                sy: 0.622,
                a: 0.36
            },
            "70": {
                y: -47.6,
                sx: 0.573,
                sy: 0.573,
                a: 0.28
            },
            "71": {
                y: -52,
                sx: 0.534,
                sy: 0.534,
                a: 0.21
            },
            "72": {
                y: -55.55,
                sx: 0.502,
                sy: 0.502,
                a: 0.16
            },
            "73": {
                y: -58.5,
                sx: 0.476,
                sy: 0.476,
                a: 0.11
            },
            "74": {
                y: -60.9,
                sx: 0.454,
                sy: 0.454,
                a: 0.08
            },
            "75": {
                y: -62.75,
                sx: 0.438,
                sy: 0.438,
                a: 0.05
            },
            "76": {
                y: -64.15,
                sx: 0.425,
                sy: 0.425,
                a: 0.03
            },
            "77": {
                y: -65.15,
                sx: 0.416,
                sy: 0.416,
                a: 0.01
            },
            "78": {
                y: -65.75,
                sx: 0.411,
                sy: 0.411,
                a: 0
            },
            "79": {
                y: -65.95,
                sx: 0.409,
                sy: 0.409
            }
        });
    }
    }

    data.lib.b06 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_sweat"));
        this.addChild(instance1);
    }
    }

    data.lib.face01 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_eyebrow"));
        this.addChild(instance1);
    }
    }

    data.lib.boom = class extends MovieClip {
        constructor() {
        super({
            duration: 200
        });
        const instance1 = new Sprite(data.getTexture("boom01"));
        const instance2 = new Sprite(data.getTexture("boom02"));
        const instance3 = new Sprite(data.getTexture("boom03"));
        const instance4 = new Sprite(data.getTexture("boom04"));
        const instance5 = new Sprite(data.getTexture("boom05"));
        const instance6 = new Sprite(data.getTexture("boom06"));
        const instance7 = new Sprite(data.getTexture("boom07"));
        const instance8 = new Sprite(data.getTexture("boom08"));
        const instance9 = new Sprite(data.getTexture("boom09"));
        this.addTimedChild(instance1, 0, 2)
            .addTimedChild(instance2, 2, 2)
            .addTimedChild(instance3, 4, 2)
            .addTimedChild(instance4, 6, 2)
            .addTimedChild(instance5, 8, 2)
            .addTimedChild(instance6, 10, 2)
            .addTimedChild(instance7, 12, 2)
            .addTimedChild(instance8, 14, 2)
            .addTimedChild(instance9, 16, 1);
    }
    }

    data.lib.face05 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_eye2"));
        this.addChild(instance1);
    }
    }

    data.lib.face03 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_eye"));
        this.addChild(instance1);
    }
    }

    data.lib.b01 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_body"));
        this.addChild(instance1);
    }
    }

    data.lib.b02 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_body2"));
        this.addChild(instance1);
    }
    }

    data.lib.b05 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_fire2"));
        this.addChild(instance1);
    }
    }

    data.lib.b04 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_fire"));
        this.addChild(instance1);
    }
    }

    data.lib.fire03 = class extends MovieClip {
        constructor() {
        super({
            duration: 45
        });
        const instance2 = new data.lib.b04();
        const instance1 = new data.lib.b05();
        this.addTimedChild(instance2, 0, 45, {
            "0": {
                x: 0,
                y: 0,
                sx: 1,
                sy: 1
            },
            "1": {
                y: -1.15,
                sx: 0.998,
                sy: 1.012
            },
            "2": {
                x: 0.05,
                y: -2.4,
                sx: 0.996,
                sy: 1.024
            },
            "3": {
                x: 0,
                y: -3.6,
                sx: 0.994,
                sy: 1.036
            },
            "4": {
                y: -4.8,
                sx: 0.991,
                sy: 1.049
            },
            "5": {
                x: 0.05,
                y: -6,
                sx: 0.989,
                sy: 1.061
            },
            "6": {
                x: 0,
                y: -7.25,
                sx: 0.987,
                sy: 1.073
            },
            "7": {
                x: 0.05,
                y: -8.45,
                sx: 0.985,
                sy: 1.085
            },
            "8": {
                y: -9.6,
                sx: 0.983,
                sy: 1.097
            },
            "9": {
                x: 0,
                y: -10.85,
                sx: 0.981,
                sy: 1.109
            },
            "10": {
                x: 0.05,
                y: -12.05,
                sx: 0.979,
                sy: 1.121
            },
            "11": {
                x: 0,
                y: -13.3,
                sx: 0.976,
                sy: 1.134
            },
            "12": {
                y: -14.45,
                sx: 0.974,
                sy: 1.146
            },
            "13": {
                x: 0.05,
                y: -15.7,
                sx: 0.972,
                sy: 1.158
            },
            "14": {
                x: 0,
                y: -16.8,
                sx: 0.97,
                sy: 1.17
            },
            "15": {
                x: -0.45,
                y: -16.264,
                sx: 0.981,
                sy: 1.164
            },
            "16": {
                x: -0.9,
                y: -15.777,
                sx: 0.991,
                sy: 1.158
            },
            "17": {
                x: -1.35,
                y: -15.241,
                sx: 1.002,
                sy: 1.152
            },
            "18": {
                x: -1.85,
                y: -14.755,
                sx: 1.013,
                sy: 1.146
            },
            "19": {
                x: -2.3,
                y: -14.219,
                sx: 1.023,
                sy: 1.14
            },
            "20": {
                x: -2.75,
                y: -13.683,
                sx: 1.034,
                sy: 1.134
            },
            "21": {
                x: -3.2,
                y: -13.197,
                sx: 1.045,
                sy: 1.128
            },
            "22": {
                x: -3.7,
                y: -12.66,
                sx: 1.055,
                sy: 1.122
            },
            "23": {
                x: -4.15,
                y: -12.174,
                sx: 1.066,
                sy: 1.116
            },
            "24": {
                x: -4.6,
                y: -11.638,
                sx: 1.077,
                sy: 1.11
            },
            "25": {
                x: -5.05,
                y: -11.152,
                sx: 1.087,
                sy: 1.104
            },
            "26": {
                x: -5.55,
                y: -10.616,
                sx: 1.098,
                sy: 1.098
            },
            "27": {
                x: -6,
                y: -10.08,
                sx: 1.109,
                sy: 1.092
            },
            "28": {
                x: -6.45,
                y: -9.593,
                sx: 1.119,
                sy: 1.086
            },
            "29": {
                x: -6.95,
                y: -9.05,
                sx: 1.13,
                sy: 1.08
            },
            "30": {
                x: -6.447,
                y: -8.405,
                sx: 1.121,
                sy: 1.075
            },
            "31": {
                x: -5.993,
                y: -7.81,
                sx: 1.113,
                sy: 1.069
            },
            "32": {
                x: -5.54,
                y: -7.216,
                sx: 1.104,
                sy: 1.064
            },
            "33": {
                x: -5.037,
                y: -6.571,
                sx: 1.095,
                sy: 1.059
            },
            "34": {
                x: -4.633,
                y: -5.976,
                sx: 1.087,
                sy: 1.053
            },
            "35": {
                x: -4.13,
                y: -5.382,
                sx: 1.078,
                sy: 1.048
            },
            "36": {
                x: -3.677,
                y: -4.737,
                sx: 1.069,
                sy: 1.043
            },
            "37": {
                x: -3.223,
                y: -4.142,
                sx: 1.061,
                sy: 1.037
            },
            "38": {
                x: -2.77,
                y: -3.548,
                sx: 1.052,
                sy: 1.032
            },
            "39": {
                x: -2.267,
                y: -2.903,
                sx: 1.043,
                sy: 1.027
            },
            "40": {
                x: -1.864,
                y: -2.308,
                sx: 1.035,
                sy: 1.021
            },
            "41": {
                x: -1.36,
                y: -1.714,
                sx: 1.026,
                sy: 1.016
            },
            "42": {
                x: -0.907,
                y: -1.069,
                sx: 1.017,
                sy: 1.011
            },
            "43": {
                x: -0.454,
                y: -0.474,
                sx: 1.009,
                sy: 1.005
            },
            "44": {
                x: 0,
                y: 0,
                sx: 1,
                sy: 1
            }
        })
            .addTimedChild(instance1, 0, 45, {
                "0": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "2": {
                    x: 0.1,
                    y: -1.05,
                    sx: 0.999,
                    sy: 1.012
                },
                "3": {
                    x: 0.2,
                    y: -2.2,
                    sx: 0.997,
                    sy: 1.024
                },
                "4": {
                    x: 0.25,
                    y: -3.25,
                    sx: 0.996,
                    sy: 1.036
                },
                "5": {
                    x: 0.3,
                    y: -4.35,
                    sx: 0.995,
                    sy: 1.048
                },
                "6": {
                    x: 0.4,
                    y: -5.45,
                    sx: 0.993,
                    sy: 1.06
                },
                "7": {
                    x: 0.45,
                    y: -6.55,
                    sx: 0.992,
                    sy: 1.072
                },
                "8": {
                    x: 0.5,
                    y: -7.65,
                    sx: 0.991,
                    sy: 1.084
                },
                "9": {
                    x: 0.6,
                    y: -8.75,
                    sx: 0.989,
                    sy: 1.096
                },
                "10": {
                    x: 0.65,
                    y: -9.85,
                    sx: 0.988,
                    sy: 1.108
                },
                "11": {
                    x: 0.7,
                    y: -10.9,
                    sx: 0.987,
                    sy: 1.12
                },
                "12": {
                    x: 0.8,
                    y: -12.05,
                    sx: 0.985,
                    sy: 1.132
                },
                "13": {
                    x: 0.85,
                    y: -13.15,
                    sx: 0.984,
                    sy: 1.144
                },
                "14": {
                    x: 0.9,
                    y: -14.2,
                    sx: 0.983,
                    sy: 1.156
                },
                "15": {
                    x: 1,
                    y: -15.35,
                    sx: 0.981,
                    sy: 1.168
                },
                "16": {
                    y: -16.4,
                    sx: 0.98,
                    sy: 1.18
                },
                "17": {
                    x: 1.442,
                    y: -14.065,
                    sx: 0.972,
                    sy: 1.152
                },
                "18": {
                    x: 1.884,
                    y: -11.73,
                    sx: 0.964,
                    sy: 1.125
                },
                "19": {
                    x: 2.376,
                    y: -9.395,
                    sx: 0.956,
                    sy: 1.097
                },
                "20": {
                    x: 2.868,
                    y: -7.06,
                    sx: 0.948,
                    sy: 1.069
                },
                "21": {
                    x: 3.31,
                    y: -4.726,
                    sx: 0.94,
                    sy: 1.041
                },
                "22": {
                    x: 3.752,
                    y: -2.44,
                    sx: 0.933,
                    sy: 1.014
                },
                "23": {
                    x: 4.194,
                    y: -0.106,
                    sx: 0.925,
                    sy: 0.986
                },
                "24": {
                    x: 4.636,
                    y: 2.229,
                    sx: 0.917,
                    sy: 0.958
                },
                "25": {
                    x: 5.127,
                    y: 4.514,
                    sx: 0.909,
                    sy: 0.931
                },
                "26": {
                    x: 5.619,
                    y: 6.849,
                    sx: 0.901,
                    sy: 0.903
                },
                "27": {
                    x: 6.061,
                    y: 9.184,
                    sx: 0.893,
                    sy: 0.875
                },
                "28": {
                    x: 6.503,
                    y: 11.519,
                    sx: 0.885,
                    sy: 0.848
                },
                "29": {
                    x: 7,
                    y: 13.75,
                    sx: 0.877,
                    sy: 0.82
                },
                "30": {
                    x: 6.565,
                    y: 12.851,
                    sx: 0.885,
                    sy: 0.832
                },
                "31": {
                    x: 6.08,
                    y: 12.002,
                    sx: 0.894,
                    sy: 0.844
                },
                "32": {
                    x: 5.646,
                    y: 11.054,
                    sx: 0.902,
                    sy: 0.856
                },
                "33": {
                    x: 5.161,
                    y: 10.105,
                    sx: 0.91,
                    sy: 0.868
                },
                "34": {
                    x: 4.726,
                    y: 9.206,
                    sx: 0.918,
                    sy: 0.88
                },
                "35": {
                    x: 4.241,
                    y: 8.307,
                    sx: 0.926,
                    sy: 0.892
                },
                "36": {
                    x: 3.807,
                    y: 7.359,
                    sx: 0.935,
                    sy: 0.904
                },
                "37": {
                    x: 3.272,
                    y: 6.46,
                    sx: 0.943,
                    sy: 0.916
                },
                "38": {
                    x: 2.837,
                    y: 5.511,
                    sx: 0.951,
                    sy: 0.928
                },
                "39": {
                    x: 2.353,
                    y: 4.662,
                    sx: 0.959,
                    sy: 0.94
                },
                "40": {
                    x: 1.918,
                    y: 3.714,
                    sx: 0.967,
                    sy: 0.952
                },
                "41": {
                    x: 1.433,
                    y: 2.765,
                    sx: 0.975,
                    sy: 0.964
                },
                "42": {
                    x: 0.998,
                    y: 1.866,
                    sx: 0.984,
                    sy: 0.976
                },
                "43": {
                    x: 0.514,
                    y: 0.967,
                    sx: 0.992,
                    sy: 0.988
                },
                "44": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                }
            });
    }
    }

    data.lib.mcline = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_line"));
        this.addChild(instance1);
    }
    }

    const Graphic1 = class extends MovieClip {
        constructor(mode) {
        super({ mode: mode, duration: 46, loop: false });
        const instance1 = new data.lib.mcline();
        this[instance1.name = "mcline"] = instance1;
        this.addTimedChild(instance1);
    }
    }

    data.lib.b07 = class extends Container {
        constructor() {
        super();
        const instance1 = new Sprite(data.getTexture("bomb_shadow"));
        this.addChild(instance1);
    }
    }

    data.lib.bomb_scene = class extends MovieClip {
        constructor() {
        super({
            duration: 120
        });
        const instance12 = new data.lib.b07();
        const instance11 = new Graphic1(MovieClip.SYNCHED);
        const instance10 = new data.lib.fire03();
        const instance9 = new data.lib.b02();
        const instance8 = new data.lib.b01();
        const instance7 = new data.lib.face03();
        const instance6 = new data.lib.face05();
        const instance5 = new data.lib.face03();
        const instance4 = new data.lib.face05();
        const instance3 = new data.lib.face01();
        const instance2 = new data.lib.face01();
        const instance1 = new data.lib.b06();
        const instance13 = new data.lib.boom()
            .setTransform(1.5, -374);
        this.addTimedChild(instance12, 0, 46, {
            "0": {
                x: 122,
                y: 161
            }
        })
            .addTimedChild(instance11, 0, 46, {
                "0": {
                    x: 222,
                    y: -203
                }
            })
            .addTimedChild(instance10, 0, 46, {
                "0": {
                    x: 292,
                    y: -255.95
                },
                "1": {
                    x: 288.25
                },
                "2": {
                    x: 284.45,
                    y: -255.9
                },
                "3": {
                    x: 280.7
                },
                "4": {
                    x: 276.95,
                    y: -255.85
                },
                "5": {
                    x: 273.15
                },
                "6": {
                    x: 269.4,
                    y: -255.8
                },
                "7": {
                    x: 265.65
                },
                "8": {
                    x: 261.85,
                    y: -255.75
                },
                "9": {
                    x: 258.1
                },
                "10": {
                    x: 254.3,
                    y: -255.7
                },
                "11": {
                    x: 250.55
                },
                "12": {
                    x: 246.8
                },
                "13": {
                    x: 243,
                    y: -255.65
                },
                "14": {
                    x: 239.25
                },
                "15": {
                    x: 235.5,
                    y: -255.6
                },
                "16": {
                    x: 231.7
                },
                "17": {
                    x: 227.95,
                    y: -255.55
                },
                "18": {
                    x: 224.2
                },
                "19": {
                    x: 220.4,
                    y: -255.5
                },
                "20": {
                    x: 216.65
                },
                "21": {
                    x: 215.2,
                    y: -253.75
                },
                "22": {
                    x: 213.8,
                    y: -251.95
                },
                "23": {
                    x: 212.35,
                    y: -250.2
                },
                "24": {
                    x: 210.95,
                    y: -248.45
                },
                "25": {
                    x: 209.5,
                    y: -246.7
                },
                "26": {
                    x: 208.1,
                    y: -244.9
                },
                "27": {
                    x: 206.65,
                    y: -243.15
                },
                "28": {
                    x: 205.2,
                    y: -241.4
                },
                "29": {
                    x: 203.8,
                    y: -239.65
                },
                "30": {
                    x: 202.35,
                    y: -237.85
                },
                "31": {
                    x: 200.95,
                    y: -236.1
                },
                "32": {
                    x: 199.5,
                    y: -234.35
                },
                "33": {
                    x: 198.05,
                    y: -232.6
                },
                "34": {
                    x: 196.65,
                    y: -230.8
                },
                "35": {
                    x: 195.2,
                    y: -229.05
                },
                "36": {
                    x: 193.8,
                    y: -227.3
                },
                "37": {
                    x: 192.35,
                    y: -225.55
                },
                "38": {
                    x: 190.95,
                    y: -223.75
                },
                "39": {
                    x: 189.5,
                    y: -222
                }
            })
            .addTimedChild(instance9, 0, 46, {
                "0": {
                    x: 168,
                    y: -154.95,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: 167.611,
                    y: -155.963,
                    sx: 1.008,
                    sy: 1.008
                },
                "2": {
                    x: 167.17,
                    y: -156.974,
                    sx: 1.015,
                    sy: 1.015
                },
                "3": {
                    x: 166.729,
                    y: -157.985,
                    sx: 1.022,
                    sy: 1.022
                },
                "4": {
                    x: 166.29,
                    y: -158.998,
                    sx: 1.03,
                    sy: 1.03
                },
                "5": {
                    x: 165.851,
                    y: -159.962,
                    sx: 1.038,
                    sy: 1.038
                },
                "6": {
                    x: 165.41,
                    y: -160.972,
                    sx: 1.045,
                    sy: 1.045
                },
                "7": {
                    x: 164.971,
                    y: -161.986,
                    sx: 1.053,
                    sy: 1.053
                },
                "8": {
                    x: 164.53,
                    y: -162.997,
                    sx: 1.06,
                    sy: 1.06
                },
                "9": {
                    x: 164.088,
                    y: -163.958,
                    sx: 1.067,
                    sy: 1.067
                },
                "10": {
                    x: 163.699,
                    y: -164.971,
                    sx: 1.075,
                    sy: 1.075
                },
                "11": {
                    x: 163.261,
                    y: -165.984,
                    sx: 1.083,
                    sy: 1.083
                },
                "12": {
                    x: 162.819,
                    y: -166.995,
                    sx: 1.09,
                    sy: 1.09
                },
                "13": {
                    x: 162.378,
                    y: -167.956,
                    sx: 1.097,
                    sy: 1.097
                },
                "14": {
                    x: 161.939,
                    y: -168.969,
                    sx: 1.105,
                    sy: 1.105
                },
                "15": {
                    x: 161.501,
                    y: -169.982,
                    sx: 1.113,
                    sy: 1.113
                },
                "16": {
                    x: 161.059,
                    y: -170.993,
                    sx: 1.12,
                    sy: 1.12
                },
                "17": {
                    x: 160.62,
                    y: -171.956,
                    sx: 1.128,
                    sy: 1.128
                },
                "18": {
                    x: 160.179,
                    y: -172.967,
                    sx: 1.135,
                    sy: 1.135
                },
                "19": {
                    x: 159.738,
                    y: -173.978,
                    sx: 1.142,
                    sy: 1.142
                },
                "20": {
                    x: 159.25,
                    y: -174.9,
                    sx: 1.15,
                    sy: 1.15
                },
                "21": {
                    x: 159.757,
                    y: -173.849,
                    sx: 1.142,
                    sy: 1.142
                },
                "22": {
                    x: 160.211,
                    y: -172.795,
                    sx: 1.134,
                    sy: 1.134
                },
                "23": {
                    x: 160.67,
                    y: -171.747,
                    sx: 1.126,
                    sy: 1.126
                },
                "24": {
                    x: 161.126,
                    y: -170.696,
                    sx: 1.118,
                    sy: 1.118
                },
                "25": {
                    x: 161.583,
                    y: -169.645,
                    sx: 1.111,
                    sy: 1.111
                },
                "26": {
                    x: 162.039,
                    y: -168.594,
                    sx: 1.103,
                    sy: 1.103
                },
                "27": {
                    x: 162.496,
                    y: -167.543,
                    sx: 1.095,
                    sy: 1.095
                },
                "28": {
                    x: 162.952,
                    y: -166.492,
                    sx: 1.087,
                    sy: 1.087
                },
                "29": {
                    x: 163.411,
                    y: -165.394,
                    sx: 1.079,
                    sy: 1.079
                },
                "30": {
                    x: 163.865,
                    y: -164.391,
                    sx: 1.071,
                    sy: 1.071
                },
                "31": {
                    x: 164.324,
                    y: -163.342,
                    sx: 1.063,
                    sy: 1.063
                },
                "32": {
                    x: 164.781,
                    y: -162.291,
                    sx: 1.055,
                    sy: 1.055
                },
                "33": {
                    x: 165.237,
                    y: -161.19,
                    sx: 1.047,
                    sy: 1.047
                },
                "34": {
                    x: 165.694,
                    y: -160.189,
                    sx: 1.039,
                    sy: 1.039
                },
                "35": {
                    x: 166.15,
                    y: -159.139,
                    sx: 1.032,
                    sy: 1.032
                },
                "36": {
                    x: 166.607,
                    y: -158.038,
                    sx: 1.024,
                    sy: 1.024
                },
                "37": {
                    x: 167.066,
                    y: -156.989,
                    sx: 1.016,
                    sy: 1.016
                },
                "38": {
                    x: 167.52,
                    y: -155.986,
                    sx: 1.008,
                    sy: 1.008
                },
                "39": {
                    x: 168,
                    y: -154.95,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance8, 0, 46, {
                "0": {
                    x: 112,
                    y: -111,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: 111.261,
                    y: -112.506,
                    sx: 1.005,
                    sy: 1.005
                },
                "2": {
                    x: 110.569,
                    y: -114.059,
                    sx: 1.01,
                    sy: 1.01
                },
                "3": {
                    x: 109.83,
                    y: -115.615,
                    sx: 1.015,
                    sy: 1.015
                },
                "4": {
                    x: 109.089,
                    y: -117.119,
                    sx: 1.02,
                    sy: 1.02
                },
                "5": {
                    x: 108.349,
                    y: -118.674,
                    sx: 1.025,
                    sy: 1.025
                },
                "6": {
                    x: 107.608,
                    y: -120.228,
                    sx: 1.03,
                    sy: 1.03
                },
                "7": {
                    x: 106.869,
                    y: -121.734,
                    sx: 1.035,
                    sy: 1.035
                },
                "8": {
                    x: 106.128,
                    y: -123.288,
                    sx: 1.04,
                    sy: 1.04
                },
                "9": {
                    x: 105.388,
                    y: -124.843,
                    sx: 1.045,
                    sy: 1.045
                },
                "10": {
                    x: 104.649,
                    y: -126.349,
                    sx: 1.05,
                    sy: 1.05
                },
                "11": {
                    x: 103.907,
                    y: -127.902,
                    sx: 1.055,
                    sy: 1.055
                },
                "12": {
                    x: 103.168,
                    y: -129.458,
                    sx: 1.06,
                    sy: 1.06
                },
                "13": {
                    x: 102.427,
                    y: -131.012,
                    sx: 1.065,
                    sy: 1.065
                },
                "14": {
                    x: 101.687,
                    y: -132.517,
                    sx: 1.07,
                    sy: 1.07
                },
                "15": {
                    x: 100.946,
                    y: -134.071,
                    sx: 1.075,
                    sy: 1.075
                },
                "16": {
                    x: 100.207,
                    y: -135.627,
                    sx: 1.08,
                    sy: 1.08
                },
                "17": {
                    x: 99.466,
                    y: -137.131,
                    sx: 1.085,
                    sy: 1.085
                },
                "18": {
                    x: 98.726,
                    y: -138.686,
                    sx: 1.09,
                    sy: 1.09
                },
                "19": {
                    x: 97.985,
                    y: -140.24,
                    sx: 1.095,
                    sy: 1.095
                },
                "20": {
                    x: 97.1,
                    y: -141.7,
                    sx: 1.1,
                    sy: 1.1
                },
                "21": {
                    x: 97.933,
                    y: -140.069,
                    sx: 1.095,
                    sy: 1.095
                },
                "22": {
                    x: 98.72,
                    y: -138.442,
                    sx: 1.089,
                    sy: 1.089
                },
                "23": {
                    x: 99.506,
                    y: -136.815,
                    sx: 1.084,
                    sy: 1.084
                },
                "24": {
                    x: 100.241,
                    y: -135.236,
                    sx: 1.079,
                    sy: 1.079
                },
                "25": {
                    x: 101.027,
                    y: -133.61,
                    sx: 1.074,
                    sy: 1.074
                },
                "26": {
                    x: 101.812,
                    y: -131.981,
                    sx: 1.068,
                    sy: 1.068
                },
                "27": {
                    x: 102.598,
                    y: -130.354,
                    sx: 1.063,
                    sy: 1.063
                },
                "28": {
                    x: 103.384,
                    y: -128.727,
                    sx: 1.058,
                    sy: 1.058
                },
                "29": {
                    x: 104.169,
                    y: -127.098,
                    sx: 1.053,
                    sy: 1.053
                },
                "30": {
                    x: 104.954,
                    y: -125.519,
                    sx: 1.047,
                    sy: 1.047
                },
                "31": {
                    x: 105.74,
                    y: -123.893,
                    sx: 1.042,
                    sy: 1.042
                },
                "32": {
                    x: 106.476,
                    y: -122.266,
                    sx: 1.037,
                    sy: 1.037
                },
                "33": {
                    x: 107.261,
                    y: -120.637,
                    sx: 1.032,
                    sy: 1.032
                },
                "34": {
                    x: 108.047,
                    y: -119.01,
                    sx: 1.026,
                    sy: 1.026
                },
                "35": {
                    x: 108.832,
                    y: -117.381,
                    sx: 1.021,
                    sy: 1.021
                },
                "36": {
                    x: 109.618,
                    y: -115.805,
                    sx: 1.016,
                    sy: 1.016
                },
                "37": {
                    x: 110.404,
                    y: -114.178,
                    sx: 1.011,
                    sy: 1.011
                },
                "38": {
                    x: 111.189,
                    y: -112.549,
                    sx: 1.005,
                    sy: 1.005
                },
                "39": {
                    x: 112,
                    y: -111,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance7, 0, 46, {
                "0": {
                    x: 149,
                    y: 8,
                    sx: 1,
                    sy: 1
                },
                "3": {
                    x: 144.97,
                    y: 5.54,
                    sx: 1.03,
                    sy: 1.03
                },
                "4": {
                    x: 140.89,
                    y: 3.08,
                    sx: 1.06,
                    sy: 1.06
                },
                "5": {
                    x: 136.759,
                    y: 0.57,
                    sx: 1.09,
                    sy: 1.09
                },
                "6": {
                    x: 132.679,
                    y: -1.94,
                    sx: 1.12,
                    sy: 1.12
                },
                "7": {
                    x: 128.6,
                    y: -4.4,
                    sx: 1.15,
                    sy: 1.15
                },
                "8": {
                    x: 128.098,
                    y: -5.6
                },
                "9": {
                    x: 127.548,
                    y: -6.9
                },
                "10": {
                    x: 126.998,
                    y: -8.15
                },
                "11": {
                    x: 126.448,
                    y: -9.45
                },
                "12": {
                    x: 125.898,
                    y: -10.7
                },
                "13": {
                    x: 125.398,
                    y: -12
                },
                "14": {
                    x: 124.848,
                    y: -13.25
                },
                "15": {
                    x: 124.298,
                    y: -14.55
                },
                "16": {
                    x: 123.748,
                    y: -15.8
                },
                "17": {
                    x: 123.198,
                    y: -17.1
                },
                "18": {
                    x: 122.6,
                    y: -18.4
                },
                "19": {
                    x: 123.887,
                    y: -17.135,
                    sx: 1.143,
                    sy: 1.143
                },
                "20": {
                    x: 125.125,
                    y: -15.871,
                    sx: 1.136,
                    sy: 1.136
                },
                "21": {
                    x: 126.364,
                    y: -14.657,
                    sx: 1.129,
                    sy: 1.129
                },
                "22": {
                    x: 127.604,
                    y: -13.393,
                    sx: 1.121,
                    sy: 1.121
                },
                "23": {
                    x: 128.891,
                    y: -12.128,
                    sx: 1.114,
                    sy: 1.114
                },
                "24": {
                    x: 130.18,
                    y: -10.814,
                    sx: 1.107,
                    sy: 1.107
                },
                "25": {
                    x: 131.418,
                    y: -9.55,
                    sx: 1.1,
                    sy: 1.1
                },
                "26": {
                    x: 132.707,
                    y: -8.336,
                    sx: 1.093,
                    sy: 1.093
                },
                "27": {
                    x: 133.946,
                    y: -7.071,
                    sx: 1.086,
                    sy: 1.086
                },
                "28": {
                    x: 135.184,
                    y: -5.807,
                    sx: 1.079,
                    sy: 1.079
                },
                "29": {
                    x: 136.473,
                    y: -4.543,
                    sx: 1.071,
                    sy: 1.071
                },
                "30": {
                    x: 137.711,
                    y: -3.328,
                    sx: 1.064,
                    sy: 1.064
                },
                "31": {
                    x: 138.95,
                    y: -2.064,
                    sx: 1.057,
                    sy: 1.057
                },
                "32": {
                    x: 140.189,
                    y: -0.8,
                    sx: 1.05,
                    sy: 1.05
                },
                "33": {
                    x: 141.477,
                    y: 0.464,
                    sx: 1.043,
                    sy: 1.043
                },
                "34": {
                    x: 142.766,
                    y: 1.779,
                    sx: 1.036,
                    sy: 1.036
                },
                "35": {
                    x: 144.003,
                    y: 2.993,
                    sx: 1.029,
                    sy: 1.029
                },
                "36": {
                    x: 145.291,
                    y: 4.257,
                    sx: 1.021,
                    sy: 1.021
                },
                "37": {
                    x: 146.53,
                    y: 5.522,
                    sx: 1.014,
                    sy: 1.014
                },
                "38": {
                    x: 147.769,
                    y: 6.786,
                    sx: 1.007,
                    sy: 1.007
                },
                "39": {
                    x: 149,
                    y: 8,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance6, 0, 46, {
                "0": {
                    x: 176,
                    y: 33,
                    sx: 1,
                    sy: 1
                },
                "3": {
                    x: 173.289,
                    y: 31.52,
                    sx: 1.04,
                    sy: 1.04
                },
                "4": {
                    x: 170.58,
                    y: 29.99,
                    sx: 1.08,
                    sy: 1.08
                },
                "5": {
                    x: 167.869,
                    y: 28.46,
                    sx: 1.12,
                    sy: 1.12
                },
                "6": {
                    x: 165.161,
                    y: 26.93,
                    sx: 1.16,
                    sy: 1.16
                },
                "7": {
                    x: 162.35,
                    y: 25.35,
                    sx: 1.2,
                    sy: 1.2
                },
                "8": {
                    x: 162.548,
                    y: 24.85
                },
                "9": {
                    x: 162.695,
                    y: 24.299
                },
                "10": {
                    x: 162.895,
                    y: 23.749
                },
                "11": {
                    x: 163.095,
                    y: 23.199
                },
                "12": {
                    x: 163.245,
                    y: 22.649
                },
                "13": {
                    x: 163.443,
                    y: 22.149
                },
                "14": {
                    x: 163.593,
                    y: 21.599
                },
                "15": {
                    x: 163.793,
                    y: 21.049
                },
                "16": {
                    x: 163.993,
                    y: 20.499
                },
                "17": {
                    x: 164.14,
                    y: 19.948
                },
                "18": {
                    x: 164.35,
                    y: 19.4
                },
                "19": {
                    x: 164.943,
                    y: 20.096,
                    sx: 1.19,
                    sy: 1.19
                },
                "20": {
                    x: 165.489,
                    y: 20.742,
                    sx: 1.181,
                    sy: 1.181
                },
                "21": {
                    x: 166.035,
                    y: 21.388,
                    sx: 1.171,
                    sy: 1.171
                },
                "22": {
                    x: 166.581,
                    y: 22.034,
                    sx: 1.162,
                    sy: 1.162
                },
                "23": {
                    x: 167.127,
                    y: 22.68,
                    sx: 1.152,
                    sy: 1.152
                },
                "24": {
                    x: 167.723,
                    y: 23.326,
                    sx: 1.143,
                    sy: 1.143
                },
                "25": {
                    x: 168.219,
                    y: 23.972,
                    sx: 1.133,
                    sy: 1.133
                },
                "26": {
                    x: 168.815,
                    y: 24.618,
                    sx: 1.124,
                    sy: 1.124
                },
                "27": {
                    x: 169.361,
                    y: 25.264,
                    sx: 1.114,
                    sy: 1.114
                },
                "28": {
                    x: 169.907,
                    y: 25.91,
                    sx: 1.105,
                    sy: 1.105
                },
                "29": {
                    x: 170.453,
                    y: 26.556,
                    sx: 1.095,
                    sy: 1.095
                },
                "30": {
                    x: 170.999,
                    y: 27.203,
                    sx: 1.086,
                    sy: 1.086
                },
                "31": {
                    x: 171.545,
                    y: 27.849,
                    sx: 1.076,
                    sy: 1.076
                },
                "32": {
                    x: 172.141,
                    y: 28.495,
                    sx: 1.067,
                    sy: 1.067
                },
                "33": {
                    x: 172.637,
                    y: 29.141,
                    sx: 1.057,
                    sy: 1.057
                },
                "34": {
                    x: 173.233,
                    y: 29.787,
                    sx: 1.048,
                    sy: 1.048
                },
                "35": {
                    x: 173.779,
                    y: 30.433,
                    sx: 1.038,
                    sy: 1.038
                },
                "36": {
                    x: 174.325,
                    y: 31.079,
                    sx: 1.029,
                    sy: 1.029
                },
                "37": {
                    x: 174.871,
                    y: 31.725,
                    sx: 1.019,
                    sy: 1.019
                },
                "38": {
                    x: 175.417,
                    y: 32.371,
                    sx: 1.01,
                    sy: 1.01
                },
                "39": {
                    x: 176,
                    y: 33,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance5, 0, 46, {
                "0": {
                    x: 284.5,
                    y: 9,
                    sx: 1,
                    sy: 1
                },
                "5": {
                    x: 286.035,
                    y: 6.17,
                    sx: 1.03,
                    sy: 1.03
                },
                "6": {
                    x: 287.565,
                    y: 3.29,
                    sx: 1.06,
                    sy: 1.06
                },
                "7": {
                    x: 289.1,
                    y: 0.41,
                    sx: 1.09,
                    sy: 1.09
                },
                "8": {
                    x: 290.63,
                    y: -2.47,
                    sx: 1.12,
                    sy: 1.12
                },
                "9": {
                    x: 291.65,
                    y: -5.1,
                    sx: 1.15,
                    sy: 1.15
                },
                "10": {
                    x: 291.843,
                    y: -5.83,
                    sx: 1.145,
                    sy: 1.145
                },
                "11": {
                    x: 292.036,
                    y: -6.51,
                    sx: 1.141,
                    sy: 1.141
                },
                "12": {
                    x: 292.233,
                    y: -7.289,
                    sx: 1.136,
                    sy: 1.136
                },
                "13": {
                    x: 292.431,
                    y: -7.969,
                    sx: 1.132,
                    sy: 1.132
                },
                "14": {
                    x: 292.628,
                    y: -8.699,
                    sx: 1.127,
                    sy: 1.127
                },
                "15": {
                    x: 292.83,
                    y: -9.379,
                    sx: 1.123,
                    sy: 1.123
                },
                "16": {
                    x: 293.027,
                    y: -10.109,
                    sx: 1.118,
                    sy: 1.118
                },
                "17": {
                    x: 293.225,
                    y: -10.789,
                    sx: 1.114,
                    sy: 1.114
                },
                "18": {
                    x: 293.418,
                    y: -11.568,
                    sx: 1.109,
                    sy: 1.109
                },
                "19": {
                    x: 293.615,
                    y: -12.298,
                    sx: 1.104,
                    sy: 1.104
                },
                "20": {
                    x: 294.2,
                    y: -13.3,
                    sx: 1.1,
                    sy: 1.1
                },
                "21": {
                    x: 293.771,
                    y: -12.192,
                    sx: 1.095,
                    sy: 1.095
                },
                "22": {
                    x: 293.3,
                    y: -11.185,
                    sx: 1.09,
                    sy: 1.09
                },
                "23": {
                    x: 292.825,
                    y: -10.127,
                    sx: 1.086,
                    sy: 1.086
                },
                "24": {
                    x: 292.405,
                    y: -9.02,
                    sx: 1.081,
                    sy: 1.081
                },
                "25": {
                    x: 291.88,
                    y: -7.962,
                    sx: 1.076,
                    sy: 1.076
                },
                "26": {
                    x: 291.455,
                    y: -6.904,
                    sx: 1.071,
                    sy: 1.071
                },
                "27": {
                    x: 290.985,
                    y: -5.847,
                    sx: 1.067,
                    sy: 1.067
                },
                "28": {
                    x: 290.51,
                    y: -4.789,
                    sx: 1.062,
                    sy: 1.062
                },
                "29": {
                    x: 290.035,
                    y: -3.732,
                    sx: 1.057,
                    sy: 1.057
                },
                "30": {
                    x: 289.614,
                    y: -2.674,
                    sx: 1.052,
                    sy: 1.052
                },
                "31": {
                    x: 289.094,
                    y: -1.567,
                    sx: 1.048,
                    sy: 1.048
                },
                "32": {
                    x: 288.669,
                    y: -0.559,
                    sx: 1.043,
                    sy: 1.043
                },
                "33": {
                    x: 288.199,
                    y: 0.498,
                    sx: 1.038,
                    sy: 1.038
                },
                "34": {
                    x: 287.724,
                    y: 1.556,
                    sx: 1.033,
                    sy: 1.033
                },
                "35": {
                    x: 287.249,
                    y: 2.614,
                    sx: 1.029,
                    sy: 1.029
                },
                "36": {
                    x: 286.828,
                    y: 3.671,
                    sx: 1.024,
                    sy: 1.024
                },
                "37": {
                    x: 286.303,
                    y: 4.729,
                    sx: 1.019,
                    sy: 1.019
                },
                "38": {
                    x: 285.878,
                    y: 5.836,
                    sx: 1.014,
                    sy: 1.014
                },
                "39": {
                    x: 285.408,
                    y: 6.894,
                    sx: 1.01,
                    sy: 1.01
                },
                "40": {
                    x: 284.933,
                    y: 7.951,
                    sx: 1.005,
                    sy: 1.005
                },
                "41": {
                    x: 284.5,
                    y: 9,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance4, 0, 46, {
                "0": {
                    x: 305,
                    y: 33.5,
                    sx: 1,
                    sy: 1
                },
                "5": {
                    x: 305.498,
                    y: 31.59,
                    sx: 1.04,
                    sy: 1.04
                },
                "6": {
                    x: 306.001,
                    y: 29.68,
                    sx: 1.08,
                    sy: 1.08
                },
                "7": {
                    x: 306.449,
                    y: 27.77,
                    sx: 1.12,
                    sy: 1.12
                },
                "8": {
                    x: 306.951,
                    y: 25.86,
                    sx: 1.16,
                    sy: 1.16
                },
                "9": {
                    x: 307.35,
                    y: 23.85,
                    sx: 1.2,
                    sy: 1.2
                },
                "10": {
                    x: 307.195,
                    y: 23.55
                },
                "11": {
                    x: 307.041,
                    y: 23.199
                },
                "12": {
                    x: 306.841,
                    y: 22.799
                },
                "13": {
                    x: 306.641,
                    y: 22.449
                },
                "14": {
                    x: 306.491,
                    y: 22.099
                },
                "15": {
                    x: 306.286,
                    y: 21.749
                },
                "16": {
                    x: 306.136,
                    y: 21.399
                },
                "17": {
                    x: 305.936,
                    y: 21.049
                },
                "18": {
                    x: 305.736,
                    y: 20.649
                },
                "19": {
                    x: 305.581,
                    y: 20.299
                },
                "20": {
                    x: 305.35,
                    y: 19.75
                },
                "21": {
                    x: 305.373,
                    y: 20.393,
                    sx: 1.19,
                    sy: 1.19
                },
                "22": {
                    x: 305.35,
                    y: 21.036,
                    sx: 1.181,
                    sy: 1.181
                },
                "23": {
                    x: 305.327,
                    y: 21.68,
                    sx: 1.171,
                    sy: 1.171
                },
                "24": {
                    x: 305.304,
                    y: 22.323,
                    sx: 1.162,
                    sy: 1.162
                },
                "25": {
                    x: 305.281,
                    y: 22.966,
                    sx: 1.152,
                    sy: 1.152
                },
                "26": {
                    x: 305.258,
                    y: 23.659,
                    sx: 1.143,
                    sy: 1.143
                },
                "27": {
                    x: 305.236,
                    y: 24.253,
                    sx: 1.133,
                    sy: 1.133
                },
                "28": {
                    x: 305.263,
                    y: 24.946,
                    sx: 1.124,
                    sy: 1.124
                },
                "29": {
                    x: 305.24,
                    y: 25.539,
                    sx: 1.114,
                    sy: 1.114
                },
                "30": {
                    x: 305.217,
                    y: 26.233,
                    sx: 1.105,
                    sy: 1.105
                },
                "31": {
                    x: 305.194,
                    y: 26.876,
                    sx: 1.095,
                    sy: 1.095
                },
                "32": {
                    x: 305.121,
                    y: 27.519,
                    sx: 1.086,
                    sy: 1.086
                },
                "33": {
                    x: 305.099,
                    y: 28.162,
                    sx: 1.076,
                    sy: 1.076
                },
                "34": {
                    x: 305.126,
                    y: 28.806,
                    sx: 1.067,
                    sy: 1.067
                },
                "35": {
                    x: 305.103,
                    y: 29.449,
                    sx: 1.057,
                    sy: 1.057
                },
                "36": {
                    x: 305.08,
                    y: 30.142,
                    sx: 1.048,
                    sy: 1.048
                },
                "37": {
                    x: 305.057,
                    y: 30.736,
                    sx: 1.038,
                    sy: 1.038
                },
                "38": {
                    x: 305.035,
                    y: 31.429,
                    sx: 1.029,
                    sy: 1.029
                },
                "39": {
                    x: 305.062,
                    y: 32.022,
                    sx: 1.019,
                    sy: 1.019
                },
                "40": {
                    x: 305.039,
                    y: 32.716,
                    sx: 1.01,
                    sy: 1.01
                },
                "41": {
                    x: 305,
                    y: 33.5,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance3, 0, 46, {
                "0": {
                    x: 90,
                    y: -81,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: 84.3,
                    y: -86.38,
                    sx: 1.03,
                    sy: 1.03
                },
                "2": {
                    x: 78.5,
                    y: -91.81,
                    sx: 1.06,
                    sy: 1.06
                },
                "3": {
                    x: 72.75,
                    y: -97.14,
                    sx: 1.09,
                    sy: 1.09
                },
                "4": {
                    x: 66.95,
                    y: -102.57,
                    sx: 1.12,
                    sy: 1.12
                },
                "5": {
                    x: 61.199,
                    y: -107.9,
                    sx: 1.15,
                    sy: 1.15
                },
                "6": {
                    x: 55.3,
                    y: -113.3,
                    sx: 1.18,
                    sy: 1.18
                },
                "7": {
                    x: 61.803,
                    y: -107.368,
                    sx: 1.142,
                    sy: 1.142
                },
                "8": {
                    x: 68.206,
                    y: -101.437,
                    sx: 1.103,
                    sy: 1.103
                },
                "9": {
                    x: 74.711,
                    y: -95.458,
                    sx: 1.065,
                    sy: 1.065
                },
                "10": {
                    x: 81.113,
                    y: -89.526,
                    sx: 1.027,
                    sy: 1.027
                },
                "11": {
                    x: 87.567,
                    y: -83.545,
                    sx: 0.988,
                    sy: 0.988
                },
                "12": {
                    x: 94.05,
                    y: -77.55,
                    sx: 0.95,
                    sy: 0.95
                },
                "13": {
                    x: 88.673,
                    y: -85.939,
                    sx: 0.975,
                    sy: 0.975
                },
                "14": {
                    x: 83.347,
                    y: -94.379,
                    sx: 1,
                    sy: 1
                },
                "15": {
                    x: 77.924,
                    y: -102.721,
                    sx: 1.025,
                    sy: 1.025
                },
                "16": {
                    x: 72.548,
                    y: -111.061,
                    sx: 1.05,
                    sy: 1.05
                },
                "17": {
                    x: 67.222,
                    y: -119.501,
                    sx: 1.075,
                    sy: 1.075
                },
                "18": {
                    x: 61.8,
                    y: -127.8,
                    sx: 1.1,
                    sy: 1.1
                },
                "19": {
                    x: 66.513,
                    y: -123.312,
                    sx: 1.083,
                    sy: 1.083
                },
                "20": {
                    x: 71.176,
                    y: -118.875,
                    sx: 1.067,
                    sy: 1.067
                },
                "21": {
                    x: 75.891,
                    y: -114.391,
                    sx: 1.05,
                    sy: 1.05
                },
                "22": {
                    x: 80.604,
                    y: -109.904,
                    sx: 1.033,
                    sy: 1.033
                },
                "23": {
                    x: 85.268,
                    y: -105.468,
                    sx: 1.017,
                    sy: 1.017
                },
                "24": {
                    x: 90,
                    y: -101,
                    sx: 1,
                    sy: 1
                },
                "25": {
                    y: -99.65
                },
                "26": {
                    y: -98.35
                },
                "27": {
                    y: -97
                },
                "28": {
                    y: -95.65
                },
                "29": {
                    y: -94.35
                },
                "30": {
                    y: -93
                },
                "31": {
                    y: -91.65
                },
                "32": {
                    y: -90.35
                },
                "33": {
                    y: -89
                },
                "34": {
                    y: -87.65
                },
                "35": {
                    y: -86.35
                },
                "36": {
                    y: -85
                },
                "37": {
                    y: -83.65
                },
                "38": {
                    y: -82.35
                },
                "39": {
                    y: -81
                }
            })
            .addTimedChild(instance2, 0, 46, {
                "0": {
                    x: 426.5,
                    y: -82,
                    sx: 1,
                    sy: 1,
                    ky: 3.142
                },
                "4": {
                    x: 431.91,
                    y: -87.1,
                    sx: 1.025,
                    sy: 1.025
                },
                "5": {
                    x: 437.226,
                    y: -92.1,
                    sx: 1.05,
                    sy: 1.05
                },
                "6": {
                    x: 442.636,
                    y: -97.15,
                    sx: 1.075,
                    sy: 1.075
                },
                "7": {
                    x: 448.046,
                    y: -102.249,
                    sx: 1.1,
                    sy: 1.1
                },
                "8": {
                    x: 453.362,
                    y: -107.25,
                    sx: 1.125,
                    sy: 1.125
                },
                "9": {
                    x: 458.7,
                    y: -112.25,
                    sx: 1.15,
                    sy: 1.15
                },
                "10": {
                    x: 452.645,
                    y: -106.594,
                    sx: 1.117,
                    sy: 1.117
                },
                "11": {
                    x: 446.653,
                    y: -101.041,
                    sx: 1.083,
                    sy: 1.083
                },
                "12": {
                    x: 440.562,
                    y: -95.389,
                    sx: 1.05,
                    sy: 1.05
                },
                "13": {
                    x: 434.513,
                    y: -89.784,
                    sx: 1.017,
                    sy: 1.017
                },
                "14": {
                    x: 428.472,
                    y: -84.182,
                    sx: 0.983,
                    sy: 0.983
                },
                "15": {
                    x: 422.4,
                    y: -78.55,
                    sx: 0.95,
                    sy: 0.95
                },
                "16": {
                    x: 427.805,
                    y: -86.965,
                    sx: 0.975,
                    sy: 0.975
                },
                "17": {
                    x: 433.167,
                    y: -95.381,
                    sx: 1,
                    sy: 1
                },
                "18": {
                    x: 438.542,
                    y: -103.7,
                    sx: 1.025,
                    sy: 1.025
                },
                "19": {
                    x: 443.903,
                    y: -112.067,
                    sx: 1.05,
                    sy: 1.05
                },
                "20": {
                    x: 449.265,
                    y: -120.483,
                    sx: 1.075,
                    sy: 1.075
                },
                "21": {
                    x: 454.6,
                    y: -128.8,
                    sx: 1.1,
                    sy: 1.1
                },
                "22": {
                    x: 449.955,
                    y: -124.296,
                    sx: 1.083,
                    sy: 1.083
                },
                "23": {
                    x: 445.267,
                    y: -119.895,
                    sx: 1.067,
                    sy: 1.067
                },
                "24": {
                    x: 440.586,
                    y: -115.395,
                    sx: 1.05,
                    sy: 1.05
                },
                "25": {
                    x: 435.848,
                    y: -110.894,
                    sx: 1.033,
                    sy: 1.033
                },
                "26": {
                    x: 431.21,
                    y: -106.442,
                    sx: 1.017,
                    sy: 1.017
                },
                "27": {
                    x: 426.5,
                    y: -102,
                    sx: 1,
                    sy: 1
                },
                "28": {
                    y: -100.35
                },
                "29": {
                    y: -98.65
                },
                "30": {
                    y: -97
                },
                "31": {
                    y: -95.35
                },
                "32": {
                    y: -93.65
                },
                "33": {
                    y: -92
                },
                "34": {
                    y: -90.35
                },
                "35": {
                    y: -88.65
                },
                "36": {
                    y: -87
                },
                "37": {
                    y: -85.35
                },
                "38": {
                    y: -83.65
                },
                "39": {
                    y: -82
                }
            })
            .addTimedChild(instance1, 0, 33, {
                "0": {
                    x: 83,
                    y: -37,
                    a: 1
                },
                "1": {
                    y: -34.5
                },
                "2": {
                    y: -32
                },
                "3": {
                    y: -29.5
                },
                "4": {
                    y: -27
                },
                "5": {
                    y: -24.5
                },
                "6": {
                    y: -22
                },
                "7": {
                    y: -19.5
                },
                "8": {
                    y: -17
                },
                "9": {
                    y: -14.5
                },
                "10": {
                    y: -12
                },
                "11": {
                    y: -9.5
                },
                "12": {
                    y: -7
                },
                "13": {
                    y: -4.5
                },
                "14": {
                    y: -2
                },
                "15": {
                    y: 0.5
                },
                "16": {
                    y: 3
                },
                "17": {
                    y: 5.5
                },
                "18": {
                    y: 8
                },
                "19": {
                    y: 10.5
                },
                "20": {
                    y: 13,
                    a: 0.92
                },
                "21": {
                    y: 15.5,
                    a: 0.85
                },
                "22": {
                    y: 18,
                    a: 0.77
                },
                "23": {
                    y: 20.5,
                    a: 0.69
                },
                "24": {
                    y: 23,
                    a: 0.62
                },
                "25": {
                    y: 25.5,
                    a: 0.54
                },
                "26": {
                    y: 28,
                    a: 0.46
                },
                "27": {
                    y: 30.5,
                    a: 0.38
                },
                "28": {
                    y: 33,
                    a: 0.31
                },
                "29": {
                    y: 35.5,
                    a: 0.23
                },
                "30": {
                    y: 38,
                    a: 0.15
                },
                "31": {
                    y: 40.5,
                    a: 0.08
                },
                "32": {
                    y: 43,
                    a: 0
                }
            })
            .addTimedChild(instance13, 46, 74);
    }
    }

    data.lib.boommc = class extends Container {
        constructor() {
        super();
        const instance2 = new data.lib.bomb_scene()
            .setTransform(-145.85, 8.5, 0.46, 0.46);
        this[instance2.name = "mc_f"] = instance2;
        const instance1 = new data.lib.mcgreat()
            .setTransform(-30, 204.5);
        this[instance1.name = "mc_s"] = instance1;
        this.addChild(instance2, instance1);
    }
    }

    data.lib.bombscene = class extends MovieClip {
        constructor() {
        super({
            duration: 1,
            framerate: 60
        });
        const instance1 = new data.lib.boommc()
            .setTransform(172.25, 109.25);
        this[instance1.name = "boommc"] = instance1;
        this.addChild(instance1);
    }
    }

    data.stage = data.lib.bombscene;

    }
};

export default data;