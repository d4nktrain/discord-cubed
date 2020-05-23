var megaScrambler = require("./lib/megascramble");
var scrambleImage = require("scramble-image")

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str, term, replacement) {
    return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

module.exports.run = async (bot, message, args, cube) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i + 1}. `, replaceAll(replaceAll(megaScrambler.get333DoubleMoveScramble(), "22", "2"), "'", "")]

        message.channel.send(scramble.join("")).then((msg) => {
            msg.react("👀")
            msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                {max: 1, time: 15000}).then(async collected => {
                if (collected.first().count >= 2) {
                    var imagebuffer = await scrambleImage.genImage("333", scramble[1], "default")
                    msg.channel.send(i+1 + ".", {
                        file: imagebuffer
                    })
                }
                msg.clearReactions()
            }).catch(() => {
                msg.clearReactions()
            });
        })
    }
};
module.exports.config = { name: "3x3double", aliases: ["3x3d", "3d"] }