const fs = require("fs")

module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/usps.gif",
			name: "usps.gif"
		}]
	})
	return message.reply("This is what happens to your cubes when you ship with USPS")
}
module.exports.config = { name: "usps", aliases: [] }
