var scramble_333 = require("./lib/scramble_333_edit");

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
    return message.channel.send("This command is deprecated, please use s!3 cross, 3x3x3 cross, or 3x3 cross!")

};
module.exports.config = { name: "crosssolved", aliases: ["cross"] }
