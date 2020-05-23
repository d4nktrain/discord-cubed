var scrambleImage = require("scramble-image")

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1
	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i + 1}. `, cube.type("222").length(10).get(1)[0]]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{max: 1, time: 15000}).then(async collected => {
				if (collected.first().count >= 2) {
					var imagebuffer = await scrambleImage.genImage("222", scramble[1], "default")
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
// 2x2 scramble generator, scrambo library + multi scramble technology
module.exports.config = { name: "2x2", aliases: ["2x2x2", "4cube", "minicube", "2"] }
