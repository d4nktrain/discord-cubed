module.exports.run = async (bot, message, args, cube) => {
    let scrambles = parseInt(args[0]);
    scrambles = scrambles ? scrambles > 12 ? 12 : scrambles < 0 ? 1 : scrambles : 1;
    let scramble = cube.type("skewb").get(scrambles);
    for(var i = 0; i < scramble.length; i++) {scramble[i] = (i+1) + ". " + "grasp both ends of the puzzle and pull your arms apart"}; return message.channel.send(scramble.join("\n\n"));
};
module.exports.config = { name: "snake", aliases: ["rubikssnake"] };
