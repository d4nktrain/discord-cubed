function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? undefined : scrambles : undefined;
    let scramble = cube.type("222").length(10).get(scrambles);
    for(i = 0; i < scramble.length; i++) {
		var rotation1 = randomElement(["x", "x2", "x'"])
        var rotation2 = randomElement(["z", "z2", "z'"])
        var rotation3 = randomElement(["y", "y2", "y'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    scramble[i] = scramble[i] + " " + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
		    scramble[i] = scramble[i] + " " + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    scramble[i] = scramble[i] + " " + rotation1
        } else if(whatRotation == 3) {
		    scramble[i] = scramble[i] + " " + rotation2
        } else if(whatRotation == 4) {
		    scramble[i] = scramble[i] + " " + rotation3
        }
    }
	return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "2-bld", aliases: ["2-BLD", "2bld"]};