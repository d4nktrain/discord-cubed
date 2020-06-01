module.exports.run = async (bot, message, args, cube) => {
	message.channel.send({
		files: [{
			attachment: "./src/gifs/pepepls.gif",
			name: "pepepls.gif"
		}]
	});
};
module.exports.config = { name: "pepepls", aliases: [] };
