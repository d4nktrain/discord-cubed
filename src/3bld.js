module.exports.run = async (bot, message, args, cube) => {
    return message.channel.send("This command is deprecated, please use s!3 bld, 3x3x3 bld, or 3x3 bld!")
}
module.exports.config = { name: "3bld", aliases: ["3-bld", "3-BLD", "3b"] }
