function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 60) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push(scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
	}
	for(i = 0; i < msgArr.length; i++) {
		var rotation1 = randomElement(["3Rw", "3Rw2", "3Rw'"])
        var rotation2 = randomElement(["3Fw", "3Fw2", "3Fw'"])
        var rotation3 = randomElement(["3Uw", "3Uw2", "3Uw'"])
        var whatRotation = Math.floor(Math.random()*5)
        if(whatRotation == 0) {
		    msgArr[i] = msgArr[i] + " " + rotation1 + " " + rotation3
        } else if(whatRotation == 1) {
		    msgArr[i] = msgArr[i] + " " + rotation2 + " " + rotation3
        } else if(whatRotation == 2) {
		    msgArr[i] = msgArr[i] + " " + rotation1
        } else if(whatRotation == 3) {
		    msgArr[i] = msgArr[i] + " " + rotation2
        } else if(whatRotation == 4) {
		    msgArr[i] = msgArr[i] + " " + rotation3
        }
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "5bld", aliases: ["5-BLD", "5-BLD", "5b"] };