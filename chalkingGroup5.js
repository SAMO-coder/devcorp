/*To install chalk use code below
		npm install chalk or npm install -g chalk
*/
//Import chalk package.
const chalk = require("chalk");

//Declare global variable chalking1.
var chalking1;

//Style a string.
console.log(chalk.blue("Hello world!"));

//Combine styled and normal strings.
chalking1 = chalk.rgb(255, 255, 0)("Hello") + "World" + chalk.red("!");
console.log(chalking1);

// Compose multiple styles.
chalking1 = chalk.blue.bgYellowBright("Hello world!");
console.log(chalking1);

// Pass in multiple arguments.
chalking1 = chalk
	.hex("ff00ff")
	.bold("Hello", "World!", "Foo", "bar", "biz", "baz");
console.log(chalking1);

// Nest styles.
chalking1 = chalk.underline("Hello", chalk.green("world") + "!");
console.log(chalking1);
