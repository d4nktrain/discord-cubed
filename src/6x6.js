var megaScrambler = require("./lib/megascramble");

module.exports.run = async (bot, message, args, scrambleImage) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1

	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, megaScrambler.get666WCAScramble(80)]

		message.channel.send(scramble.join(""))
	}
};
module.exports.config = { name: "6x6", aliases: ["6x6x6", "6"] }
