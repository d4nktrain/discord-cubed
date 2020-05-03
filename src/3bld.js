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
    let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? undefined : scrambles : undefined;
	let scramble = cube.type("333").length(20).get(scrambles);
	scramble.forEach(scr => {
		var rotation = randomElement(["", "y", "y2", "y'"]);
		scr = applyRotationForAlgorithm(scr, rotation)
	})
	return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "3bld", aliases: ["3-bld", "3-BLD"] };