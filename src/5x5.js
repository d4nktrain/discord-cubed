import {megaScrambler} from "./cstimerlib/megascramble";

module.exports.run = async (bot, message, args, cube) => {
	let scramble = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(var i = 0; i < scrambles; i++) {
		scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60)
	}
	return message.channel.send(scramble.join("\n\n"))
};
module.exports.config = { name: "5x5", aliases: ["5x5x5", "isthata10x10", "5-bld", "5BLD", "5-BLD", "5"] }