const Discord = require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
	if(!args[0] || args[0] == "help") {
        return message.channel.send(new Discord.RichEmbed()
        .setTitle("Get famous scrambles").setColor("RANDOM")
        .setDescription("Usage: \`s!famous <solve>\`")
        .addField("Options", "jay, 3x3wr"))}
    if(args[0] == "jay") {
        message.channel.send("Scramble: L2 U L2 D F2 D' F2 R2 D L2 B R2 F' L2 D' L B' U2")
        return message.channel.send("Reconstruction:\nx' z2  // Inspection\nF D R2' F' R // X-Cross\ny U' R' U R // Pair 2\nL U L' U L U L' // Pair 3\ny' R' U R // Pair 4\nR' U' R' F R F' U R // OLL \nU'// Attempted AUF\n[massive fumbles equivalent to z'] // rip\nL2// PLL skip")
    } else if(args[0] == "3x3wr") {
        message.channel.send("Scramble: F U2 L2 B2 F' U L2 U R2 D2 L' B L2 B' R2 U2")
        return message.channel.send("Reconstruction:\nz y // Inspection\nU R2 U' F' L F' U' L' // Double X-Cross\nU' R U R2 U R // 3rd Pair\nU2 R' U R // 4th Pair\nU R' U' R U' R' U2 R // OLL(CP)\nU // AUF")
    } else return message.channel.send("Scramble not found, please suggest it with the suggest command")
};
module.exports.config = { name: "famous", aliases: ["famousscramble"] };