import {scramble_444} from "./lib/scramble_444";
import {imagestring, setSize} from "./lib/genScramble";

var nodeHtmlToImage = require('node-html-to-image')
var Jimp = require('jimp')
var fs = require('fs')

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, scramble_444.getRandomScramble()]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{ max: 1, time: 15000 }).then(collected => {
				if (collected.first().count >= 2) {
					setSize(4)
					nodeHtmlToImage({
						output: './pngs/' + msg.id + '.png',
						html: imagestring(scramble[1], 4)
                    }).then(async () => {
						let image = await Jimp.read('./pngs/' + msg.id + '.png')
						image.crop(1, 1, 161, 121).resize(320, 240, Jimp.RESIZE_NEAREST_NEIGHBOR).write('./pngs/' + msg.id + '.png', () => {
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
module.exports.config = { name: "4x4", aliases: ["4x4x4", "4"]};
