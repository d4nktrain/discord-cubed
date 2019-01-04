const relay = require("../relay.js");
module.exports.run = async (bot, message, args, cube) => {
	let two = relay.twox();
	let three = relay.threex();
	let four = relay.fourx();
	let five = relay.fivex();
	let six = relay.sixx();
	return message.channel.send(`**2x2:**\n${two}\n\n**3x3:**\n${three}\n\n**4x4:**\n${four}\n\n**5x5:**\n${five}\n\n**6x6:**\n${six}`);
};
module.exports.config = { name: "2-6", aliases: [] };
