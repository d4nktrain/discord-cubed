const fs = require("fs");

module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/pepeadmin.gif",
			name: "pepeadmin.gif"
		}]
	});
};
module.exports.config = { name: "pepeadmin", aliases: [] };
