const routes = require('next-routes');

module.exports = routes().add({
	name: 'login',
	pattern: '/',
	page: 'login'
});
