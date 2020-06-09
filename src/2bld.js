module.exports.run = async (bot, message, args, cube) => {
    return message.channel.send("This command is deprecated, please use (prefix)2 bld, 2x2x2 bld, or 2x2 bld!")

};
module.exports.config = { name: "2-bld", aliases: ["2-BLD", "2bld"]};
