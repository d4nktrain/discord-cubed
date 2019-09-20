module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? undefined : scrambles : undefined;
	let scramble = cube.type("333").length(20).get(scrambles);
	return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "3x3", aliases: ["3x3x3", "3-bld", "3BLD", "3-BLD"] };
