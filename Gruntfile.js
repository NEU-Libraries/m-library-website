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
        files: "_less/*.less",
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

  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.registerTask('default',  ['recess', 'jekyll:serve' ]);
  grunt.registerTask('jekll-serve', ['jekyll:serve']);

};
