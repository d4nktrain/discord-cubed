module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
	var scramble = cube.type("333").length(20).get(scrambles)
	for(var i = 0; i < scramble.length; i++) {
		scramble[i] = "R' U' F " + scramble[i] + " R' U' F"
	}
	for(var i = 0; i < scramble.length; i++) {scramble[i] = (i+1) + ". " + scramble[i]}; return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "fmc", aliases: ["FMC", "f"] };