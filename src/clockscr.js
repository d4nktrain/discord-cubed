var util_scramble = require('./lib/utilscramble')

module.exports.run = async (bot, message, args, cube, scrambleImage) => {
	if(args[0] === "show") {
		args.shift()
		let scram = args.join(" ")

		var imageBuffer = await scrambleImage.genImage("clk", scram, "default")
		message.channel.send("", {
			file: imageBuffer
		}).then((image) => {
			image.delete(300000*(i+1))
		})
		return
	}
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
	for(let i = 0; i < scrambles; i++) {
		let scramble = [`${i+1}. `, util_scramble.getClockWCAScramble()]

		message.channel.send(scramble.join("")).then((msg) => {
			msg.react("👀")
			msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
				{ max: 1, time: 15000 }).then(async collected => {
				if (collected.first().count >= 2) {
					var imageBuffer = await scrambleImage.genImage("clk", scramble[1], "default")
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
module.exports.config = { name: "clock", aliases: ["watch", "cloncc", "clocc", "c"] };
