# Discord facts

> A library that gives you facts about Discord

[![Discord](https://discordapp.com/api/guilds/352896116812939264/widget.png)](https://lenoxbot.com/discord)
![npm](https://img.shields.io/npm/v/discordfacts.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/discordbots.svg)
![npm](https://img.shields.io/npm/dt/discordfacts.svg)
![GitHub](https://img.shields.io/github/license/monkeyyy11/discordfacts.svg)

## Installation

    npm install discordfacts

## Usage

If you simply want a random fact of Discord, you can use the following code:

    var discordFacts = require('discordfacts');
    var randomFact = discordFacts.random();

If you want all facts of Discord, you can use the following code:

    var discordFacts = require('discordfacts');
    var randomFact = discordFacts.all();

## How can I add new facts to discordfacts?

We are very happy if you have any new facts about Discord and want to add them to the project!

Open the file [discordfacts.json](https://github.com/Monkeyyy11/discordfacts/blob/master/discordfacts.json), then simply add a new fact about Discord by using the following template:

    {
        name: "NAME OF THE FACT (should be short)",
        description: "THE DESCRIPTION OF THE FACT"
    }

When you've completed this, you can create a pull request and we will accept is ASAP!
Thanks in advance! :)

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## License

MIT