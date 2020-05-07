module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? undefined : scrambles : undefined;
	let scramble = cube.type("pyram").get(scrambles);
	for(var i = 0; i < scramble.length; i++) {scramble[i] = (i+1) + ". " + scramble[i]}
};
module.exports.config = { name: "pyraminx", aliases: ["pyra", "pyramid", "p"] };
