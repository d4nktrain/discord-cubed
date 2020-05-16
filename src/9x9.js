import {megaScrambler} from "./lib/megascramble";

module.exports.run = async (bot, message, args) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i+1}. `, megaScrambler.get999scramble(120)]
        message.channel.send(scramble.join(""))
    }
};
module.exports.config = { name: "9x9", aliases: ["9x9x9", "9"] };