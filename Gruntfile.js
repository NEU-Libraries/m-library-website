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
      },
      bootStrap: {
        src: '_bootstrap/_gh_pages/dist/js/bootstrap.min.js',
        dest: 'js/vendor/bootstrap.min.js',
      }
    },
    uglify:{
      dev: {
        options: {
          beautify: true
        },
        files: {
        'js/main.js': ['js/app.js'],
        },
      },
      prod: {
        options: {
          compress: true,
          mangle: false,
        },
        files: {
        'js/main.js': ['js/app.js'],
        },
      },
    }


  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default',  ['copy','recess','uglify:prod', 'jekyll:serve',]);
  grunt.registerTask('dev',['copy:fontAwesome','recess','uglify:dev','jekyll:serve'] );
  grunt.registerTask('jekll-serve', ['jekyll:serve']);
  grunt.registerTask('buildjs-dev', ['uglify:dev']);

};
