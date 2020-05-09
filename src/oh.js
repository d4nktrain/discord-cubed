module.exports.run = async (bot, message, args, cube) => {
	let scrambles = parseInt(args[0])
	scrambles = scrambles ? scrambles > 10 ? 10 : scrambles < 0 ? 1 : scrambles : 1
	let scramble = cube.type("333").length(20).get(scrambles)
	for(var i = 0; i < scramble.length; i++) {scramble[i] = (i+1) + ". " + scramble[i]}; return message.channel.send(scramble.join("\n\n"));
}
module.exports.config = { name: "oh", aliases: ["onehanded", "one-handed", "onehand", "one-hand", "o"] }
