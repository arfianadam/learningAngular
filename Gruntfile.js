module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['assets/**/*.css', 'bower_components/**/*.css'],
        tasks: 'cssmin',
        options: {}
      },
      scripts: {
        files: ['assets/**/*.js', 'bower_components/**/*.js'],
        tasks: 'uglify',
        options: {}
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/style.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'assets/css/highlightdefault.css',
            'assets/css/style.css'
          ]
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'public/js/main.min.js': [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'assets/js/highlight.pack.js',
            'assets/js/main.js'
          ]
        }
      }
    }

  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ["watch"]);

};