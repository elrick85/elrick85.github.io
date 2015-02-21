module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js'
      ],
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "node": true
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

    // Configuration to be run (and then tested).
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'node_modules/bootstrap/dist/css', src: ['*.css', '!*.min.css'], dest: 'css/'},
          {expand: true, cwd: 'node_modules/bootstrap/dist/fonts', src: ['**'], dest: 'fonts/'},
          {expand: true, cwd: 'node_modules/bootstrap/dist/js', src: ['*.js', '!*.min.js'], dest: 'js/'}
        ]
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('build', ['jshint', 'clean', 'copy']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'copy']);
};