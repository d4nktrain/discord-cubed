import {megaScrambler} from "./lib/megascramble";
import {imagestring, setSize} from "./lib/genScramble";

var fs = require('fs')
var Jimp = require('jimp')
var nodeHtmlToImage = require('node-html-to-image')

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, megaScrambler.get555WCAScramble(60)]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{ max: 1, time: 15000 }).then(collected => {
				if (collected.first().count >= 2) {
					setSize(5)
					nodeHtmlToImage({
						output: './pngs/' + msg.id + '.png',
						html: imagestring(scramble[1], 5)
                    }).then(async () => {
						let image = await Jimp.read('./pngs/' + msg.id + '.png')
						image.crop(1, 1, 201, 151).resize(400, 300, Jimp.RESIZE_NEAREST_NEIGHBOR).write('./pngs/' + msg.id + '.png', () => {
							msg.channel.send(i+1 + ".", {
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
};
module.exports.config = { name: "5x5", aliases: ["5x5x5", "isthata10x10", "5-bld", "5BLD", "5-BLD", "5"] }