module.exports.run = async (bot, message, args, cube) => {
    let times = 0

    for(let i = 0; i < args.length; i++) {
        times = times + parseInt(args[i])
    }

    return message.channel.send(times/args.length)
};
module.exports.config = { name: "avg", aliases: ["average", "calcaverage", "calcavg"] };