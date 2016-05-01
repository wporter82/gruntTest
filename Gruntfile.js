var pkgjson = require('./package.json');

var config = {
	pkg: pkgjson,
	app: 'bower_components',
	dist: 'lib'
}

module.exports = function (grunt) {
	grunt.initConfig({
		config: config,
		pkg: config.pkg,
		bower: {
			install: {
				options: {
					targetDir: './lib',
					layout: 'byComponent',
					install: true,
					verbose: false,
					bowerOptions: {}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');

	grunt.registerTask('default', [
		'bower:install'
	]);
};