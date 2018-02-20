module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'projects/frontend-nanodegree-arcade-game/*.js', 'frontend-nanodegree-neighborhood-map/js/*.js'],
            options: {
                globals: {
                    strict: true,
                    esversion: 6
                }
            },
            filter: 'isFile'

        },
        mkdir: {
            all: {
                options: {
                    create: ['img-1x', 'img-2x']
                }
            }

        },
        image_resize: {
            small_resize: {
                options: {
                    width: 360,
                    height: 200
                },
                src: 'img/*.png',
                dest: 'img-1x/'

            },
            big_resize: {
                options: {
                    upscale: true,
                    suffix: '2x',
                    width: 720,
                    height: 400
                },
                src: 'img/*.png',
                dest: 'img-2x/'

            }
        },
        clean: {
            all: {
                files: [{
                    src: ['img-1x', 'img-2x']
                }]
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'clean', 'mkdir', 'image_resize']);
};