module.exports = function (grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		babel: {
			options: {
				sourceMap: true,
				//presets: ['env'],
				//presets: ['@babel/preset-env'],
				plugins: [
					'@babel/plugin-transform-classes',
				],
			},
			dist: {
				files: {
					'build/<%= pkg.name %>.js': 'funnel.js',
				}
			},

		}
	});
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', [
		'babel'
	]);
};
