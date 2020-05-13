import {imagestring, jaapschSeq, setSize} from "./jaapschlib/genScramble";
var nodeHtmlToImage = require("node-html-to-image")
var Jimp = require('jimp')

var fs = require("fs")

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1
	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i + 1}. `, cube.type("222").length(10).get(1)[0]]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{max: 1, time: 15000}).then(collected => {
				if (collected.first().count >= 2) {
					setSize(2)
					nodeHtmlToImage({
						output: './pngs/' + msg.id + '.png',
						html: imagestring(jaapschSeq(scramble[1], 2))
					}).then(async () => {
						let image = await Jimp.read('./pngs/' + msg.id + '.png')
						image.crop(1, 1, 81, 61).resize(160, 120, Jimp.RESIZE_NEAREST_NEIGHBOR).write('./pngs/' + msg.id + '.png', () => {
							msg.channel.send("", {
								file: './pngs/' + msg.id + '.png'
							}).then(() => {
								fs.unlinkSync('./pngs/' + msg.id + '.png')
							})
						})
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
