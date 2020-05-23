var scramble_333 = require("./lib/scramble_333_edit");
var scrambleImage = require("scramble-image")

function crossColor(scramble, color) {
    var mapObj;
    let exportColor;

    if(color === "random") {
        let random = Math.floor(Math.random() * 6) + 1
        if(random === 1) color = "yellow"
        if(random === 2) color = "orange"
        if(random === 3) color = "red"
        if(random === 4) color = "blue"
        if(random === 5) color = "green"
        if(random === 6) color = "white"
    }

    if(color === "yellow") {
        mapObj = {R: "R"}
        exportColor = "Yellow"
    } else if(color === "orange") {
        mapObj = {R: "D", L:"U", U:"R", D:"L"}
        exportColor = "Orange"
    } else if(color === "red") {
        mapObj = {R: "U", L:"D", U:"L", D:"R"}
        exportColor = "Red"
    } else if(color === "blue") {
        mapObj = {F: "D", B: "U", U:"F", D:"B"}
        exportColor = "Blue"
    } else if(color === "green") {
        mapObj = {F: "U", B: "D", U:"B", D:"F"}
        exportColor = "Green"
    } else {
        mapObj = {R:"L", L:"R", U:"D", D:"U"}
        exportColor = "White"
    }

    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return [scramble.replace(re, function(matched){
        return mapObj[matched];
    }), exportColor]
}

module.exports.run = async (bot, message, args, cube) => {
    let scrambles = parseInt(args[1])
    scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

    for(let i = 0; i < scrambles; i++) {
        let scramble = [`${i + 1}. `]

        if(args[0]) scramble[1] = crossColor(scramble_333.getF2LScramble(), args[0])
        else scramble[1] = crossColor(scramble_333.getF2LScramble(), "white")

        message.channel.send(scramble[0] + "(" + scramble[1][1] + " cross) " + scramble[1][0]).then((msg) => {
            msg.react("👀")
            msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                {max: 1, time: 15000}).then(async collected => {
                if (collected.first().count >= 2) {
                    var imageBuffer = await scrambleImage.genImage("333", scramble[1][0], "default")
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
module.exports.config = { name: "crosssolved", aliases: ["cross"] }