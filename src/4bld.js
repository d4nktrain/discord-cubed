import {megaScrambler} from "./ilovecstimer/megascramble";

// http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function replaceAll(str,mapObj) {
    if (!mapObj)
        return str;
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched];
    });
}

function randomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function applyRotationForAlgorithm(alg, rot) {
    var mapObj;
    if (rot=="y")
        mapObj = {R:"F", r:"f", F:"L", f:"l", L:"B", l:"b", B:"R", b:"r"};
    if (rot=="y'")
        mapObj = {R:"B", r:"b", B:"L", b:"l", L:"F", l:"f", F:"R", f:"r"};
    if (rot=="y2")
        mapObj = {R:"L", r:"l", L:"R", l:"r", B:"F", b:"f", F:"B", f:"b"};

    return replaceAll(alg, mapObj);
}

module.exports.run = async (bot, message, args, cube) => {
	let msgArr = [];
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1;
	for(let x = 0; x < scrambles; x++) {
		var rotation = randomElement(["", "y", "y2", "y'"]);
		msgArr.push(applyRotationForAlgorithm(megaScrambler.get444WCAScramble(40), rotation))
	}
	return message.channel.send(msgArr.join("\n\n"));
};
module.exports.config = { name: "fourBLD", aliases: ["4-BLD", "4bld"]};