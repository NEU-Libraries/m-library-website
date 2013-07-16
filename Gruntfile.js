'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    //load the package.json for files
    pkg: grunt.file.readJSON('package.json'),
    recess: {
      dist:{
        options: {
            compile: true
        },
        files: {
             'css/global.css'  : ['_less/global.less']
        },
      },
    },
    watch: {
      less: {
        files: "_less/**.less",
        tasks: "recess:dist",
      }

    },
    jekyll:{
      serve:{
        options: {
          config: ['_config.yml','_config_dev.yml'],
          server: true,
          baseurl: "/",
          watch: true,
        },
      },
    },
    copy: {
      fontAwesome: {
        src: '_font_awesome/font/*',
        dest: 'font/',
        expand: true,
        flatten: true,
      }
    },
    uglify:{
      dev: {
        options: {
          beautify: true
        },
        files: {
        'js/main.js': ['_bootstrap/js/*.js','js/app.js'],
        },
      },
      prod: {
        options: {
          compress: true,
          mangle: true,
        },
        files: {
        'js/main.js': ['_bootstrap/js/*.js','js/app.js'],
        },
      },
    }


  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default',  ['copy:fontAwesome','recess','uglify:prod', 'jekyll:serve',]);
  grunt.registerTask('jekll-serve', ['jekyll:serve']);
  grunt.registerTask('buildjs-dev', ['uglify:dev']);

};
