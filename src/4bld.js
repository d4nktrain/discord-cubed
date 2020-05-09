import {scramble_444} from "./ilovecstimer/scramble_444";

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(var i = 0; i < scrambles; i++) {
		var rotation1 = randomElement(["x", "x2", "x'"])
        var rotation2 = randomElement(["z", "z2", "z'"])
        var rotation3 = randomElement(["y", "y2", "y'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    msgArr.push(scramble_444.getRandomScramble() + " " + rotation1 + " " + rotation3)
        } else if(whatRotation == 1) {
		    msgArr.push(scramble_444.getRandomScramble() + " " + rotation2 + " " + rotation3)
        } else if(whatRotation == 2) {
		    msgArr.push(scramble_444.getRandomScramble() + " " + rotation1)
        } else if(whatRotation == 3) {
		    msgArr.push(scramble_444.getRandomScramble() + " " + rotation2)
        } else if(whatRotation == 4) {
		    msgArr.push(scramble_444.getRandomScramble() + " " + rotation3)
        }
	}
	for(var i = 0; i < msgArr.length; i++) {msgArr[i] = (i+1) + ". " + msgArr[i]}; return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "fourBLD", aliases: ["4-BLD", "4bld", "4b"]};