import {megaScrambler} from "./cstimerlib/megascramble";

module.exports.run = async (bot, message, args) => {
	let scramble = []
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1
	for(var i = 0; i < scrambles; i++) {
		scramble[i] = (i+1) + ". " + megaScrambler.get777WCAScramble(100)
	}
	return message.channel.send(scramble.join("\n\n"))
};
module.exports.config = { name: "7x7", aliases: ["7x7x7", "superrubikscube", "7"] }
