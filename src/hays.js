const fs = require("fs")

module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/hays.gif",
			name: "hays.gif"
		}]
	})
}
module.exports.config = { name: "hays", aliases: [] }
