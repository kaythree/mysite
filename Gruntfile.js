module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/k.personal.min.css': ['css/k.personal.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/k.personal.min.js': ['js/k.personal.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin','uglify']);

};