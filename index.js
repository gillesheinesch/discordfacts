const facts = require('./discordfacts.json');

module.exports = function randomDiscordFact() {
	const factIndex = Math.floor((Math.random() * facts.length) + 1);
	return facts[factIndex];
};
