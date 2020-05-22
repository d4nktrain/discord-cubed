module.exports.run = async (bot, message, args, cube) => {

    let sum = 0
    let time = 0

    for (var i = 0; i < args.length; i++) {
        sum += Number(args[i])
    }

    time = String(sum/args.length)

    if(time.split("").length > 5) {
        time = time.split("")
        time = time[0] + time[1] + time[2] + time[3] + time[4]
    }

    return message.channel.send(time)
};
module.exports.config = { name: "avg", aliases: ["average", "calcaverage", "calcavg"] };