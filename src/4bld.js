import {megaScrambler} from "./ilovecstimer/megascramble";

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		var rotation1 = randomElement(["x", "x2", "x'"])
        var rotation2 = randomElement(["z", "z2", "z'"])
        var rotation3 = randomElement(["y", "y2", "y'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    msgArr.push(megaScrambler.get444WCAScramble(40) + " " + rotation1 + " " + rotation3)
        } else if(whatRotation == 1) {
		    msgArr.push(megaScrambler.get444WCAScramble(40) + " " + rotation2 + " " + rotation3)
        } else if(whatRotation == 2) {
		    msgArr.push(megaScrambler.get444WCAScramble(40) + " " + rotation1)
        } else if(whatRotation == 3) {
		    msgArr.push(megaScrambler.get444WCAScramble(40) + " " + rotation2)
        } else if(whatRotation == 4) {
		    msgArr.push(megaScrambler.get444WCAScramble(40) + " " + rotation3)
        }
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "fourBLD", aliases: ["4-BLD", "4bld"]};