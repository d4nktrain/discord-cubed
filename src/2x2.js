var fourCube = require("./lib/2x2x2")

var scrambleImage = require("scramble-image")

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1
	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i + 1}. `, fourCube.getScramble("222o", 10)]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{max: 1, time: 15000}).then(async collected => {
				if (collected.first().count >= 2) {
					var imageBuffer = await scrambleImage.genImage("222", scramble[1], "default")
					msg.channel.send(i+1 + ".", {
						file: imageBuffer
					}).then((image) => {
						image.delete(300000*(i+1))
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
