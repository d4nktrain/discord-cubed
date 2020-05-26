module.exports.run = async (bot, message, args, cube, scrambleImage) => {
    return message.channel.send("This command is depreciated, please use (prefix)3 double, 3x3x3 double, or 3x3 double!")
};
module.exports.config = { name: "3x3double", aliases: ["3x3d", "3d"] }