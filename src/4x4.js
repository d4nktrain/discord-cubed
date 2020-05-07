import {scramble_444} from "./ilovecstimer/scramble_444";

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		msgArr.push(scramble_444.getRandomScramble());
	}
	for(var i = 0; i < msgArr.length; i++) {msgArr[i] = (i+1) + ". " + msgArr[i]}; return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "4x4", aliases: ["4x4x4", "4"]};
