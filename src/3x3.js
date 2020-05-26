var scramble_333 = require("./lib/scramble_333_edit");
var megaScrambler = require("./lib/megascramble")

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(str, term, replacement) {
    return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
}

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

module.exports.run = async (bot, message, args, cube, scrambleImage) => {
    let scrambles = parseInt(args[0])
    if(isNaN(scrambles) && args[0]) {
        if(args[0] === "bld") {
            scrambles = parseInt(args[1])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for(let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `, scramble_333.getRandomScramble()]

                var rotation1 = randomElement(["Rw", "Rw2", "Rw'"])
                var rotation2 = randomElement(["Fw", "Fw2", "Fw'"])
                var rotation3 = randomElement(["Uw", "Uw2", "Uw'"])
                var whatRotation = Math.floor(Math.random()*5)
                if(whatRotation == 0) {
                    scramble[1] = scramble[1] + rotation1 + " " + rotation3
                } else if(whatRotation == 1) {
                    scramble[1] = scramble[1] + rotation2 + " " + rotation3
                } else if(whatRotation == 2) {
                    scramble[1] = scramble[1] + rotation1
                } else if(whatRotation == 3) {
                    scramble[1] = scramble[1] + rotation2
                } else if(whatRotation == 4) {
                    scramble[1] = scramble[1] + rotation3
                }

                message.channel.send(scramble.join("")).then((msg) => {
                    msg.react("👀")
                    msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                        {max: 1, time: 15000}).then(async collected => {
                        if (collected.first().count >= 2) {
                            var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
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
        } else if(args[0] === "oh" || args[0] === "feet") {
            scrambles = parseInt(args[1])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for (let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `, scramble_333.getRandomScramble()]

                message.channel.send(scramble.join("")).then((msg) => {
                    msg.react("👀")
                    msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                        {max: 1, time: 15000}).then(async collected => {
                        if (collected.first().count >= 2) {
                            var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
                            msg.channel.send(i + 1 + ".", {
                                file: imageBuffer
                            }).then((image) => {
                                image.delete(300000 * (i + 1))
                            })
                        }
                        msg.clearReactions()
                    }).catch(() => {
                        msg.clearReactions()
                    });
                })
            }
        } else if(args[0] === "edge") {
            scrambles = parseInt(args[1])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for (let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `, scramble_333.getCornerScramble()]

                message.channel.send(scramble.join("")).then((msg) => {
                    msg.react("👀")
                    msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                        {max: 1, time: 15000}).then(async collected => {
                        if (collected.first().count >= 2) {
                            var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
                            msg.channel.send(i + 1 + ".", {
                                file: imageBuffer
                            }).then((image) => {
                                image.delete(300000 * (i + 1))
                            })
                        }
                        msg.clearReactions()
                    }).catch(() => {
                        msg.clearReactions()
                    });
                })
            }
        } else if(args[0] === "corner") {
            scrambles = parseInt(args[1])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for (let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `, scramble_333.getEdgeScramble()]

                message.channel.send(scramble.join("")).then((msg) => {
                    msg.react("👀")
                    msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                        {max: 1, time: 15000}).then(async collected => {
                        if (collected.first().count >= 2) {
                            var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
                            msg.channel.send(i + 1 + ".", {
                                file: imageBuffer
                            }).then((image) => {
                                image.delete(300000 * (i + 1))
                            })
                        }
                        msg.clearReactions()
                    }).catch(() => {
                        msg.clearReactions()
                    });
                })
            }
        } else if(args[0] === "double") {
            scrambles = parseInt(args[1])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for(let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `, replaceAll(replaceAll(megaScrambler.get333DoubleMoveScramble(), "22", "2"), "'", "")]

                message.channel.send(scramble.join("")).then((msg) => {
                    msg.react("👀")
                    msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                        {max: 1, time: 15000}).then(async collected => {
                        if (collected.first().count >= 2) {
                            var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
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
        } else if(args[0] === "cross") {
            scrambles = parseInt(args[2])
            scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

            for(let i = 0; i < scrambles; i++) {
                let scramble = [`${i + 1}. `]

                if(args[1]) scramble[1] = crossColor(scramble_333.getF2LScramble(), args[1])
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
        } else if(args[0] === "superflip") {
            let scramble = ["1. ", "U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2"]

            message.channel.send(scramble.join("")).then((msg) => {
                msg.react("👀")
                msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                    {max: 1, time: 15000}).then(async collected => {
                    if (collected.first().count >= 2) {
                        var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
                        msg.channel.send("1.", {
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
        } else {
            message.channel.send("Invalid type!")
        }
    } else {
        scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1

        for(let i = 0; i < scrambles; i++) {
            let scramble = [`${i + 1}. `, scramble_333.getRandomScramble()]

            message.channel.send(scramble.join("")).then((msg) => {
                msg.react("👀")
                msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👀'),
                    {max: 1, time: 15000}).then(async collected => {
                    if (collected.first().count >= 2) {
                        var imageBuffer = await scrambleImage.genImage("333", scramble[1], "default")
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
    }
};
module.exports.config = { name: "3x3", aliases: ["3x3x3", "3"] }