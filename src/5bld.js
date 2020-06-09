module.exports.run = async (bot, message, args, cube) => {
	return message.channel.send("This command is deprecated, please use (prefix)5 bld, 5x5x5 bld, or 5x5 bld!")
};
module.exports.config = { name: "5bld", aliases: ["5-BLD", "5-BLD", "5b"] };
