module.exports.run = async (bot, message, args, cube) => {
	return message.channel.send("This command is depreciated, please use (prefix)4 bld, 4x4x4 bld, or 4x4 bld!")
};
module.exports.config = { name: "fourBLD", aliases: ["4-BLD", "4bld", "4b"]};
