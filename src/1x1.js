//*sigh* lets get this over with
var megaScrambler = require("./lib/megascramble")

module.exports.run = async (bot, message, args, cube) => {
    let msgArr = []
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1
    for(var i = 0; i < scrambles; i++) {
        msgArr.push((i+1) + ". " + megaScrambler.get111scramble())
    }
    return message.channel.send(msgArr.join("\n\n"))
}
// 2x2 scramble generator, scrambo library + multi scramble technology
module.exports.config = { name: "1x1", aliases: ["1", "stoprequestingthis", "ihateeverything"] }