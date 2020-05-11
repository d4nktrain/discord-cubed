import {scramble_444} from "./cstimerlib/scramble_444";

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(var i = 0; i < scrambles; i++) {
		msgArr.push((i+1) + ". " + scramble_444.getRandomScramble());
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "4x4", aliases: ["4x4x4", "4"]};
