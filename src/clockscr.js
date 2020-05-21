import {clock} from "./lib/clockcs";
var scrambleImage = require("scramble-image")

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, clock.getScramble()]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{ max: 1, time: 15000 }).then(async collected => {
				if (collected.first().count >= 2) {
					var imageBuffer = await scrambleImage.genImage("clk", scramble[1], "default")
					msg.channel.send(i+1 + ".", {
						file: imageBuffer
					})
				}
				msg.clearReactions()
			}).catch(() => {
				msg.clearReactions()
			});
		})
	}
};
module.exports.config = { name: "clock", aliases: ["watch", "cloncc", "clocc", "c"] };