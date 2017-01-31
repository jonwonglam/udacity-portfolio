/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    autoprefixer: {
            dist: {
                files: {
                    'build/main.css': 'css/main.css',
                    'build/responsive.css': 'css/responsive.css'
                }
            }
        },

    watch: {
                styles: {
                    files: ['css/main.css', 'css/responsive.css'],
                    tasks: ['autoprefixer']
                }
            },

    /* Clear out the images directory if it exists */
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
