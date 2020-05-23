var scramble_333 = require("./lib/scramble_333_edit");
var scrambleImage = require("scramble-image")

function applyRot(scramble) {
    var mapObj;

    mapObj = {R:"L", L:"R", U:"D", D:"U"};

    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return scramble.replace(re, function(matched){
        return mapObj[matched];
    });
}

module.exports.run = async (bot, message, args, cube) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i + 1}. `, applyRot(scramble_333.getF2LScramble())]

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
module.exports.config = { name: "crosssolved", aliases: ["cross"] }