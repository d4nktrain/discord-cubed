var megaScrambler = require("./lib/megascramble");

module.exports.run = async (bot, message, args, scrambleImage) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1

	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, megaScrambler.get777WCAScramble(100)]

		message.channel.send(scramble.join(""))
	}
};
module.exports.config = { name: "7x7", aliases: ["7x7x7", "superrubikscube", "7"] }
