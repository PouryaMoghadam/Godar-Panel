module.exports = {
	plugins: [require('postcss-easy-import')({ prefix: '_' }), require('lost')({}), require('rucksack-css')({}), require('autoprefixer')({}), require('csswring')({})]
};
