const fs = require("fs");

module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/rowe.gif",
			name: "rowe.gif"
		}]
	});
};
module.exports.config = { name: "rowe", aliases: [] };
