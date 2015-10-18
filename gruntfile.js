var grunt = require('grunt');
var path = require("path");
var webpack = require("webpack");

module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        etc: 'etc',
        src: 'src',
        app: 'src',
        dist: 'dist',
        build: 'build',
        ui: 'lib/ui',
        core: 'lib/core',

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            tgz: ['*.tgz']
        },

        webpack: {
            app: {
                entry: './build/compile/app.js',

                output: {
                    path: './dist/js',
                    filename: 'app.js'
                },

                module: {
                    loaders: [{
                        test: /\.js$/,
                        loaders: ['ng-annotate'],
                        exclude: /node_modules|lib/
                    }, ]
                },

                resolve: {
                    root: [path.join(__dirname, "lib")]
                },
                plugins: [
                    new webpack.ResolverPlugin(
                        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
                    )
                ],

                devtool: 'source-map'
            }
        },

        ts: {
            options: {
                module: 'commonjs',
                sourceMap: false,
                target: 'es5',
                removeComments: false,
                noResolve: true,
                noImplicitAny: false,
                preserveConstEnums: true,
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
            },
            build: {
                src: ["<%= app %>/**/*.ts"],
                outDir: "build/compile"
            },
            develop: {
                options: {
                    inlineSourceMap: true,
                    inlineSources: true,
                },
                src: ['<%= app %>/**/*.ts'],
                outDir: "build/compile"
            }
        },

        less: {
            options: {
                sourceMap: true
            },
            app: {
                options: {
                    sourceMapURL: 'app.css.map'
                },
                files: {
                    '<%= app %>/styles/app.css': '<%= app %>/styles/app.less'
                }
            }
        },

        cssmin: {
            options: {
                advanced: false,
                sourceMap: true
            },
            app: {
                files: {
                    '<%= dist %>/css/app.min.css': [
                        '<%= app %>/styles/app.css'
                    ]
                }
            }
        },

        processhtml: {
            dist: {
                options: {
                    process: true
                },
                files: {
                    '<%= dist %>/index.html': ['<%= app %>/index.html'],
                }
            }
        },

        uglify: {
            options: {
                mangle: true,
                sourceMap: false
            },

            app: {
                files: {
                    '<%= dist %>/js/app.min.js': [
                        '<%= dist %>/js/app.js'
                    ]
                }
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app %>/images/',
                    src: ['**'],
                    dest: '<%= dist %>/images/'
                }, {
                    expand: true,
                    cwd: "<%= build %>/compile/modules/",
                    src: "**/class/*.d.ts",
                    dest: '<%= dist %>/ts/'
                }, {
                    expand: true,
                    cwd: '<%= app %>/fonts',
                    src: ['**'],
                    dest: '<%= dist %>/fonts/'
                }, {
                    src: '<%= app %>/404.html',
                    dest: '<%= dist %>/404.html'
                }, {
                    src: '<%= app %>/favicon.ico',
                    dest: '<%= dist %>/favicon.ico'
                }, {
                    src: '<%= app %>/i18n.js',
                    dest: '<%= dist %>/i18n.js'
                }, {
                    src: '<%= etc %>/config.js',
                    dest: '<%= dist %>/config.js'
                }, {
                    src: '<%= ui %>/dist/js/ui.js',
                    dest: '<%= dist %>/js/ui.js'
                }, {
                    src: '<%= ui %>/dist/js/ui.min.js',
                    dest: '<%= dist %>/js/ui.min.js'
                }, {
                    src: '<%= core %>/dist/js/core.js',
                    dest: '<%= dist %>/js/core.js'
                }, {
                    src: '<%= core %>/dist/js/core.min.js',
                    dest: '<%= dist %>/js/core.min.js'
                }, {
                    src: '<%= ui %>/dist/js/vendor.js',
                    dest: '<%= dist %>/js/vendor.js'
                }, {
                    src: '<%= ui %>/dist/js/vendor.min.js',
                    dest: '<%= dist %>/js/vendor.min.js'
                }]
            }
        },

        browserSync: {
            develop: {
                bsFiles: {
                    src: [
                        'src/**/*.*',
                        '<%= ui %>/dist/js/*.js',
                        '<%= core %>/dist/js/*.js',
                        '<%= core %>/dist/css/*.css'
                    ]
                },
                options: {
                    server: {
                        baseDir: './'
                    },
                    index: 'index.html',
                    directory: true,
                    watchTask: true,
                    startPath: '/src/index.html'
                }
            },
            dist: {
                bsFiles: {
                    src: ['dist/**/*.*']
                },
                options: {
                    server: {
                        baseDir: './'
                    },
                    directory: true,
                    watchTask: false,
                    index: 'index.html',
                    startPath: '/dist/index.html'
                }
            },
            test: {
                options: {
                    server: {
                        baseDir: './'
                    },
                    open: false,
                    watchTask: false
                }
            }
        },

        watch: {
            options: {
                livereload: 35728
            },
            grunt: {
                files: 'gruntfile.js',
                tasks: 'watch'
            },

            less: {
                files: ['<%= app %>/**/*.less'],
                tasks: 'less'
            },

            app: {
                files: ['<%= app %>/**/*.js'],
                tasks: ['webpack']
            },

            ts: {
                files: ['<%= app %>/**/*.ts'],
                tasks: ['ts', 'webpack']
            }

        },

        protractor: {
            options: {
                configFile: "test/protractor.config.js",
                keepAlive: false, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {}
            },
            all: { // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    args: {} // Target-specific arguments
                }
            }
        },

        conventionalChangelog: {
            options: {
                changelogOpts: {
                    preset: 'angular'
                }
            },
            release: {
                src: 'CHANGELOG.md'
            }
        },

        bump: {
            options: {
                files: ['package.json', 'bower.json', '<%= src %>/app.js'],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json', 'bower.json', 'CHANGELOG.md', '<%= src %>/app.js', '<%= dist %>/**/*', 'demo/**/*'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: 'rc',
                regExp: false
            }
        }

    });

    grunt.registerTask('develop', ['ts:develop', 'less']);

    grunt.registerTask('app', ['ts:build', 'webpack', 'uglify']);
    grunt.registerTask('css', ['less', 'cssmin']);

    grunt.registerTask('build', ['app', 'css', 'copy', 'processhtml']);

    grunt.registerTask('compile', ['ts:develop', 'less', 'webpack:libDevelop']);

    grunt.registerTask('server', ['browserSync:develop', 'watch']);
    grunt.registerTask('server:dist', ['browserSync:dist', 'watch']);
    grunt.registerTask('serve', ['server']);

    grunt.registerTask('release', ['bump-only:patch', 'conventionalChangelog', 'build', 'bump-commit']);

    grunt.registerTask('default', ['build']);
};
