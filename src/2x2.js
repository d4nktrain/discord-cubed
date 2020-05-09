module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0]);
	scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
	let scramble = cube.type("222").length(10).get(scrambles);
	for(var i = 0; i < scramble.length; i++) {scramble[i] = (i+1) + ". " + scramble[i]}; return message.channel.send(scramble.join("\n\n"));
};
// 2x2 scramble generator, scrambo library + multi scramble technology
module.exports.config = { name: "2x2", aliases: ["2x2x2", "4cube", "minicube", "2"] };
