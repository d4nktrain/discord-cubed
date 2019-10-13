module.exports.run = async (bot, message, args) => {
	let msgArr = [];
	let scrambles = parseInt(args[1]);
	let cubetype = Math.floor(parseInt(args[0]));
	if(cubetype < 8) return message.channel.send("Cube type must be higher than 7!")
	if(cubetype > 100) return message.channel.send("No.")
	if(scrables > 5) return message.channel.send("No.")
	let scrambleLength = 100 + (20*cubetype)
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		let wides = ["Rw", "Uw", "Lw", "Dw", "Fw", "Bw", "3Rw", "3Uw", "3Lw", "3Dw", "3Fw", "3Bw",];
		let tempWides = wides.join(" ")
		for(var k = 8; k<cubetype; k++) {
			if(k%2===0) tempWides = tempWides + " " + k/2 + "Rw" + " " + k/2 + "Uw" + " " + k/2 + "Lw" + " " + k/2 + "Dw" + " " + k/2 + "Fw" + " " + k/2 + "Bw"
		}
		wides = tempWides.split(" ")
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < scrambleLength) {
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
	if(msgArr.join("\n\n").length > 2000) {
		bigMessage = msgArr.join("\n\n").match(/.{1,2000}/g)
		for (n = 0; n < bigMessage.length; n++) {
			message.channel.send(bigMessage[n])
		}
	} else {
		message.channel.send(msgArr.join("\n\n"));
	}
	return
};
module.exports.config = { name: "bigcube", aliases: [] };