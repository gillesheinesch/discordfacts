const factsJSON = require('./discordfacts.json');

module.exports = {
	random: function() {
		const factIndex = Math.floor((Math.random() * factsJSON.facts.length));
		return factsJSON.facts[factIndex];
	},

	all: function() {
		return factsJSON.facts;
	}
};
