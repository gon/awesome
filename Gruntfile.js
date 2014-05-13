module.exports = function(grunt) {

  'use strict';

  //Configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['app/js/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: 'app/scss/*.scss',
        tasks: ['compass:dist'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: 'app/haml/*.haml',
        tasks: ['haml:dist'],
        options: {
          livereload: true,
        },
      }
    },
    connect: {
      main: {
        options: {
          port: 8000,
          base: './app'
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {},
      all: {
        files: { 
          //
        }
      }
    },
    jshint: {
      options: {
        jshintrc: './jshint.json'
      },
      main: ['Gruntfile.js', 'js/**/*.js']
    },
    haml: {
      dist: {
        files: grunt.file.expandMapping(['app/haml/*.haml'], './', {
          rename: function(base, path) {
            return base + path.replace(/\.haml$/, '.html').replace('haml/', '');
          }
        }),
        options: {
          rubyHamlCommand: 'haml',
          dependencies: {
            $: 'jquery',
            _: 'underscore'
          }
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'app/scss',
          cssDir: 'app/css',
          importPath: 'app/scss',
          fontsDir: 'assets/fonts',
          imagesDir: 'assets/images'
        }
      }
    },
    jasmine: {
      src: 'js/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  });

  //Dependencies.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  //Tasks.
  grunt.registerTask('default', ['jshint', 'compass', 'haml', 'uglify']);
  grunt.registerTask('spec', ['jshint', 'jasmine']);
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('server', ['compass:dist', 'haml:dist', 'connect:main', 'watch']);
};