var megaScrambler = require("./lib/megascramble");

module.exports.run = async (bot, message, args, scrambleImage) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i+1}. `, megaScrambler.get999scramble(120)]
        message.channel.send(scramble.join("")).then((msg) => {
            msg.react("👀")
            msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                {max: 1, time: 15000}).then(async collected => {
                if (collected.first().count >= 2) {
                    var imageBuffer = await scrambleImage.genImage("999", scramble[1], "default")
                    msg.channel.send(i+1 + ".", {
                        file: imageBuffer
                    }).then((image) => {
                        image.delete(300000*(i+1))
                    })
                }
                msg.clearReactions()
            }).catch(() => {
                msg.clearReactions()
            });
        })
    }
};
module.exports.config = { name: "9x9", aliases: ["9x9x9", "9"] };