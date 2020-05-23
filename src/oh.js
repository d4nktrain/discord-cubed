import {scramble_333} from "./lib/scramble_333_edit";
var scrambleImage = require("scramble-image")

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i + 1}. `, scramble_333.getRandomScramble()]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{max: 1, time: 15000}).then(async collected => {
				if (collected.first().count >= 2) {
					var imagebuffer = await scrambleImage.genImage("333", scramble[1], "default")
					msg.channel.send(i+1 + ".", {
						file: imagebuffer
					})
				}
				msg.clearReactions()
			}).catch(() => {
				msg.clearReactions()
			});
		})
	}
}
module.exports.config = { name: "oh", aliases: ["onehanded", "one-handed", "onehand", "one-hand", "o"] }
