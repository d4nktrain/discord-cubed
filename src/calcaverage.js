module.exports.run = async (bot, message, args, cube) => {
    let sum = 0
    let time = 0
    let dnfs = 0

    for (var i = 0; i < args.length; i++) {
        if(args[i] === "DNF") {
            args[i] = 1290398*Math.random()
            dnfs++
        }
    }

    if(dnfs >= 2) return message.channel.send("DNF")

    if(args.length >= 5) {
        args.sort((a,b)=>Number(a)-Number(b))
        args.pop()
        args.shift()
    } else {
        args.sort((a,b)=>Number(a)-Number(b))
    }

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