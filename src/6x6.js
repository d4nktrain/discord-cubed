module.exports.run = async (bot, message, args) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1;
	for(var i = 0; i < scrambles; i++) {
		let wides = ["Rw", "Uw", "Fw", "Lw", "Dw", "Bw", "3Rw", "3Uw", "3Fw"];
		let nonWides = ["R", "U", "L", "D", "F", "B"];
		let scramble = [];
		let i = 0;
		while(scramble.length < 80) {
			let move = Math.random() > 0.3 ? nonWides[Math.floor(Math.random() * nonWides.length)] : wides[Math.floor(Math.random() * wides.length)];
			if(i > 0 && (scramble[i - 1] === move)) {
				continue;
			} else {
				scramble.push(move);
				i++;
			}
		}
		msgArr.push((i+1) + ". " + scramble.map(index => Math.random() < 0.5 ? index += "2" : index += "\'").join(" "));
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "6x6", aliases: ["6x6x6", "6"] };
