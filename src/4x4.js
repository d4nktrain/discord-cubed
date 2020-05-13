import {scramble_444} from "./cstimerlib/scramble_444";
import {getEmojiArray} from "./jaapschlib/genScramble4";
import {fourByFour} from "./jaapschlib/genVisualScramble";

function jaapschSeq(scramble) {
	let a = scramble
	scramble = scramble.split(" ")
	for(var i = 0; i < scramble.length; i++) {
		if(scramble[i] === "D") scramble[i] = 0
		if(scramble[i] === "D2") scramble[i] = 1
		if(scramble[i] === "D'") scramble[i] = 2
		if(scramble[i] === "L") scramble[i] = 4
		if(scramble[i] === "L2") scramble[i] = 5
		if(scramble[i] === "L'") scramble[i] = 6
		if(scramble[i] === "B") scramble[i] = 8
		if(scramble[i] === "B2") scramble[i] = 9
		if(scramble[i] === "B'") scramble[i] = 10
		if(scramble[i] === "U") scramble[i] = 12
		if(scramble[i] === "U2") scramble[i] = 13
		if(scramble[i] === "U'") scramble[i] = 14
		if(scramble[i] === "R") scramble[i] = 16
		if(scramble[i] === "R2") scramble[i] = 17
		if(scramble[i] === "R'") scramble[i] = 18
		if(scramble[i] === "F") scramble[i] = 20
		if(scramble[i] === "F2") scramble[i] = 21
		if(scramble[i] === "F'") scramble[i] = 22
		if(scramble[i] === "Dw") scramble[i] = "24 0"
		if(scramble[i] === "Dw2") scramble[i] = "25 1"
		if(scramble[i] === "Dw'") scramble[i] = "26 2"
		if(scramble[i] === "Lw") scramble[i] = "28 4"
		if(scramble[i] === "Lw2") scramble[i] = "29 5"
		if(scramble[i] === "Lw'") scramble[i] = "30 6"
		if(scramble[i] === "Bw") scramble[i] = "32 8"
		if(scramble[i] === "Bw2") scramble[i] = "33 9"
		if(scramble[i] === "Bw'") scramble[i] = "34 10"
		if(scramble[i] === "Uw") scramble[i] = "36 12"
		if(scramble[i] === "Uw2") scramble[i] = "37 13"
		if(scramble[i] === "Uw'") scramble[i] = "38 14"
		if(scramble[i] === "Rw") scramble[i] = "40 16"
		if(scramble[i] === "Rw2") scramble[i] = "41 17"
		if(scramble[i] === "Rw'") scramble[i] = "42 18"
		if(scramble[i] === "Fw") scramble[i] = "44 20"
		if(scramble[i] === "Fw2") scramble[i] = "45 21"
		if(scramble[i] === "Fw'") scramble[i] = "46 22"
	}

	scramble.pop()
	scramble.push("0")

	return scramble.join(" ").split(" ")
}

module.exports.run = async (bot, message, count) => {
	let scramble = scramble_444.getRandomScramble()

	var indent = "                         "
	var emojiArray = getEmojiArray(jaapschSeq(scramble))
	var scrambleImage = fourByFour(indent, emojiArray)

	message.channel.send(count + ". " + scramble).then((msg) => {
		msg.react("👀")
		msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
			{ max: 1, time: 10000 }).then(collected => {
			if (collected.first().count >= 2) {
				msg.edit(count + ". " + scramble + scrambleImage)
			}
			msg.clearReactions()
		}).catch(() => {
			msg.clearReactions()
		});
	})
	return
};
module.exports.config = { name: "4x4", aliases: ["4x4x4", "4"]};
