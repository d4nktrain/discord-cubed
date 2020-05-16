import {util_scramble} from "./lib/utilscramble";

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 6 ? 6 : scrambles < 0 ? 1 : scrambles : 1;
	let scramble = []
	for(let i = 0; i < scrambles; i++) {
		scramble[i] = (i+1) + ". " + "\n```" + util_scramble.getMegaminxWCAScramble(70) + "```"
	}
	return message.channel.send(scramble.join(""));
};
module.exports.config = { name: "megaminx", aliases: ["mega", "minx", "mm", "m"] };
