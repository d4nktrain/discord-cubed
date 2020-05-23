var util_scramble = require("./lib/utilscramble");

var fs = require("fs")
var scrambleImage = require("scramble-image")

function escapeRegExp(string){
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str, term, replacement) {
	return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 6 ? 6 : scrambles < 0 ? 1 : scrambles : 1;
	for(let i = 0; i < scrambles; i++) {
		let scramble = ["", replaceAll(util_scramble.getMegaminxWCAScramble(70), "  ", "")]

		message.channel.send((i+1) + ". " + "```" + scramble[1] + "```").then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{ max: 1, time: 15000 }).then(async collected => {
				if (collected.first().count >= 2) {
					var imageBuffer = await scrambleImage.genImage("megaminx", scramble[1], "default")
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
};
module.exports.config = { name: "megaminx", aliases: ["mega", "minx", "mm", "m"] };
