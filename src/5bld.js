import {megaScrambler} from "./cstimerlib/megascramble";

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

module.exports.run = async (bot, message, args, cube) => {
	let scramble = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(var i = 0; i < scrambles; i++) {
		var rotation1 = randomElement(["3Rw", "3Rw2", "3Rw'"])
		var rotation2 = randomElement(["3Fw", "3Fw2", "3Fw'"])
		var rotation3 = randomElement(["3Uw", "3Uw2", "3Uw'"])
		var whatRotation = Math.floor(Math.random()*5)
		if(whatRotation == 0) {
			scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60) + " " + rotation1 + " " + rotation3
		} else if(whatRotation == 1) {
			scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60) + " " + rotation2 + " " + rotation3
		} else if(whatRotation == 2) {
			scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60) + " " + rotation1
		} else if(whatRotation == 3) {
			scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60) + " " + rotation2
		} else if(whatRotation == 4) {
			scramble[i] = (i+1) + ". " + megaScrambler.get555WCAScramble(60) + " " + rotation3
		}
	}
	return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "5bld", aliases: ["5-BLD", "5-BLD", "5b"] };