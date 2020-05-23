var util_scramble = require("./lib/utilscramble");

module.exports.run = async (bot, message, args, cube) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i+1}. `, util_scramble.getMasterPyraScramble()]
        message.channel.send(scramble.join(""))
    }
}
module.exports.config = { name: "masterpyraminx", aliases: ["masterpyra", "mpyra", "mp"] };
