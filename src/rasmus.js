const fs = require("fs");

module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/rasmus.gif",
			name: "rasmus.gif"
		}]
	});
};
module.exports.config = { name: "rasmus", aliases: [] };
