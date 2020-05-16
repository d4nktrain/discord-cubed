import {megaScrambler} from "./lib/megascramble";
import {imagestring, jaapschSeq, setSize} from "./lib/genScramble";

var fs = require('fs')
var Jimp = require('jimp')
var nodeHtmlToImage = require('node-html-to-image')

module.exports.run = async (bot, message, args) => {
    let scrambles = parseInt(args[0])
    scrambles = scrambles ? scrambles > 3 ? 3 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i+1}. `, megaScrambler.get888scramble(100)]

        message.channel.send(scramble.join("")).then((msg) => {
            msg.react("👀")
            msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                { max: 1, time: 15000 }).then(collected => {
                if (collected.first().count >= 2) {
                    setSize(8)
                    nodeHtmlToImage({
                        output: './pngs/' + msg.id + '.png',
                        html: imagestring(jaapschSeq(scramble[1], 8))
                    }).then(async () => {
                        let image = await Jimp.read('./pngs/' + msg.id + '.png')
                        image.crop(1, 1, 321, 241).resize(640, 480, Jimp.RESIZE_NEAREST_NEIGHBOR).write('./pngs/' + msg.id + '.png', () => {
                            msg.channel.send("", {
                                file: './pngs/' + msg.id + '.png'
                            }).then(() => {
                                fs.unlinkSync('./pngs/' + msg.id + '.png')
                            })
                        })
                    })
                }
                msg.clearReactions()
            }).catch(() => {
                msg.clearReactions()
            });
        })
    }
};
module.exports.config = { name: "8x8", aliases: ["8x8x8", "8"] };