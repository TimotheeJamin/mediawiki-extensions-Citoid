/*!
 * Grunt file
 *
 * @package Citoid
 */

/* eslint-env node */

module.exports = function ( grunt ) {
	var conf = grunt.file.readJSON( 'extension.json' );

	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		eslint: {
			fix: {
				options: {
					fix: true
				},
				src: '<%= eslint.main %>'
			},
			main: [
				'modules/**/*.js',
				'!node_modules/**'
			]
		},
		banana: conf.MessagesDirs,
		stylelint: {
			src: [
				'**/*.css',
				'!node_modules/**'
			]
		},
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		}
	} );

	grunt.registerTask( 'test', [ 'eslint:main', 'stylelint', 'jsonlint', 'banana' ] );
	grunt.registerTask( 'default', 'test' );
};
