/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            options: {
                separator: ";"
            },
            dist: {
                src: ["app/app.js", "app/**/*Module.js", "app/**/*.js"],
                dest: "dist/<%= pkg.name %>.js"
            }
        },

        jshint: {
            all: {
                src: ["app/**/*.js"]
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    optimization: 2,
                    merge: true,
                    sycImport: true
                },
                files: {
                    "dist/app.css": "content/styles/*.less"
                }
            }
        },

        watch: {
            src: {
                files: ["app/**.*", "content/**.*"],
                tasks: ["devCode"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("devCode", ["concat", "jshint", "less"]);
    grunt.registerTask("all", ["less"]);
};