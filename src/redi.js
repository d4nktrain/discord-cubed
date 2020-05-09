import {util_scramble} from "./ilovecstimer/utilscramble";

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
    for(var i = 0; i < scrambles; i++) {
		let scramble = util_scramble.getRediWCAScramble(8)
		msgArr.push(scramble);
	}
	for(var i = 0; i < msgArr.length; i++) {msgArr[i] = (i+1) + ". " + msgArr[i]}; return message.channel.send(msgArr.join("\n\n"));
};

module.exports.config = { name: "redi", aliases: ["redicube"] };
