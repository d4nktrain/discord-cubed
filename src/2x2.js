var fourCube = require("./lib/2x2x2")

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
				var rotation1 = randomElement(["x", "x2", "x'"])
				var rotation2 = randomElement(["z", "z2", "z'"])
				var rotation3 = randomElement(["y", "y2", "y'"])
				var whatRotation = Math.floor(Math.random()*5)
				if(whatRotation == 0) {
					scramble[1] = fourCube.getScramble("222o", 10) + " " + rotation1 + " " + rotation3
				} else if(whatRotation == 1) {
					scramble[1] = fourCube.getScramble("222o", 10) + " " + rotation2 + " " + rotation3
				} else if(whatRotation == 2) {
					scramble[1] = fourCube.getScramble("222o", 10) + " " + rotation1
				} else if(whatRotation == 3) {
					scramble[1] = fourCube.getScramble("222o", 10) + " " + rotation2
				} else if(whatRotation == 4) {
					scramble[1] = fourCube.getScramble("222o", 10) + " " + rotation3
				}

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
	} else {
		scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

		for(let i = 0; i < scrambles; i++) {
			let scramble = [`${i+1}. `, fourCube.getScramble("222o", 10)]

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
};
module.exports.config = { name: "2x2", aliases: ["2x2x2", "4cube", "minicube", "2"] }
