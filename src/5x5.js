var megaScrambler = require("./lib/megascramble");

function randomElement(arr) {
	return arr[Math.floor(Math.random()*arr.length)]
}

module.exports.run = async (bot, message, args, cube, scrambleImage) => {
	let scrambles = parseInt(args[0])
	if(isNaN(scrambles) && args[0]) {
		if(args[0] === "bld") {
			let scrambles = parseInt(args[1]);
			scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
			for(var i = 0; i < scrambles; i++) {
				let scramble = [`${i+1}. `]
				var rotation1 = randomElement(["3Rw", "3Rw2", "3Rw'"])
				var rotation2 = randomElement(["3Fw", "3Fw2", "3Fw'"])
				var rotation3 = randomElement(["3Uw", "3Uw2", "3Uw'"])
				var whatRotation = Math.floor(Math.random()*5)
				if(whatRotation == 0) {
					scramble[1] = megaScrambler.get555WCAScramble(60) + " " + rotation1 + " " + rotation3
				} else if(whatRotation == 1) {
					scramble[1] = megaScrambler.get555WCAScramble(60) + " " + rotation2 + " " + rotation3
				} else if(whatRotation == 2) {
					scramble[1] = megaScrambler.get555WCAScramble(60) + " " + rotation1
				} else if(whatRotation == 3) {
					scramble[1] = megaScrambler.get555WCAScramble(60) + " " + rotation2
				} else if(whatRotation == 4) {
					scramble[1] = megaScrambler.get555WCAScramble(60) + " " + rotation3
				}

				message.channel.send(scramble.join("")).then((msg) => {
					msg.react("👀")
					msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
						{max: 1, time: 15000}).then(async collected => {
						if (collected.first().count >= 2) {
							var imageBuffer = await scrambleImage.genImage("555", scramble[1], "default")
							msg.channel.send(i+1 + ".", {
								file: imageBuffer
							}).then((image) => {
								image.delete(300000*(i+1))
							})
						}
						msg.clearReactions().catch(error => console.log(error))
					}).catch(() => {
						msg.clearReactions().catch(error => console.log(error))
					});
				})
			}
		}
	} else {
		scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

		for(let i = 0; i < scrambles; i++) {
			let scramble = [`${i+1}. `, megaScrambler.get555WCAScramble(60)]

			message.channel.send(scramble.join("")).then((msg) => {
				msg.react("👀")
				msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
					{max: 1, time: 15000}).then(async collected => {
					if (collected.first().count >= 2) {
						var imageBuffer = await scrambleImage.genImage("555", scramble[1], "default")
						msg.channel.send(i+1 + ".", {
							file: imageBuffer
						}).then((image) => {
							image.delete(300000*(i+1))
						})
					}
					msg.clearReactions().catch(error => console.log(error))
				}).catch(() => {
					msg.clearReactions().catch(error => console.log(error))
				});
			})
		}
	}
};
module.exports.config = { name: "5x5", aliases: ["5x5x5", "isthata10x10", "5-bld", "5BLD", "5-BLD", "5"] }
