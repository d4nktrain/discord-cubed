import {scramble_333} from "./cstimerlib/scramble_333_edit"

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1
	var scramble = []
	for(var i = 0; i < scrambles; i++) {
		scramble[i] = (i+1) + ". " + scramble_333.getFMCScramble()
	}
	return message.channel.send(scramble.join("\n\n"))
}
module.exports.config = { name: "fmc", aliases: ["FMC", "f"] }