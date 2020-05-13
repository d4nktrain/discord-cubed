import {scramble_333} from "./cstimerlib/scramble_333_edit";
import {getEmojiArray} from "./jaapschlib/genScramble3";
import {fourByFour, threeByThree} from "./jaapschlib/genVisualScramble";
import {scramble_444} from "./cstimerlib/scramble_444";

var fs = require("fs")

function jaapschSeq(scramble) {
    scramble = scramble.split(" ")
    for(var i = 0; i < scramble.length; i++) {
        if(scramble[i] === "D") scramble[i] = 0
        if(scramble[i] === "D2") scramble[i] = 1
        if(scramble[i] === "D'") scramble[i] = 2
        if(scramble[i] === "L") scramble[i] = 4
        if(scramble[i] === "L2") scramble[i] = 5
        if(scramble[i] === "L'") scramble[i] = 6
        if(scramble[i] === "B") scramble[i] = 8
        if(scramble[i] === "B2") scramble[i] = 9
        if(scramble[i] === "B'") scramble[i] = 10
        if(scramble[i] === "U") scramble[i] = 12
        if(scramble[i] === "U2") scramble[i] = 13
        if(scramble[i] === "U'") scramble[i] = 14
        if(scramble[i] === "R") scramble[i] = 16
        if(scramble[i] === "R2") scramble[i] = 17
        if(scramble[i] === "R'") scramble[i] = 18
        if(scramble[i] === "F") scramble[i] = 20
        if(scramble[i] === "F2") scramble[i] = 21
        if(scramble[i] === "F'") scramble[i] = 22
    }

    scramble.pop()
    scramble.push("0")

    return scramble
}

module.exports.run = async (bot, message, count) => {
    let scramble = scramble_333.getRandomScramble()

    var indent = "                   "
    var emojiArray = getEmojiArray(jaapschSeq(scramble))
    var scrambleImage = threeByThree(indent, emojiArray)

    return message.channel.send(count + ". " + scramble).then((msg) => {
        msg.react("👀")
        msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
            { max: 1, time: 10000 }).then(collected => {
            if (collected.first().count >= 2) {
                msg.edit(count + ". " + scramble + scrambleImage)
            }
            msg.clearReactions()
        }).catch(() => {
            msg.clearReactions()
        });
    })
};
module.exports.config = { name: "3x3", aliases: ["3x3x3", "3"] }