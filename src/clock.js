import {util_scramble} from "./ilovecstimer/utilscramble"

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		msgArr.push(util_scramble.getClockWCAScramble());
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "clock", aliases: ["watch", "cloncc", "clocc"] };
