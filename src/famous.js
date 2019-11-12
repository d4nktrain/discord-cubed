const Discord = require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
	if(!args[0] || args[0] == "help") {
        return message.channel.send(new Discord.RichEmbed()
        .setTitle("Get famous scrambles").setColor("RANDOM")
        .setDescription("Usage: \`s!famous <person>\`")
        .addField("Options", "jay"))}
    if(args[0] == "jay") {
        return message.channel.send("L2 U L2 D F2 D' F2 R2 D L2 B R2 F' L2 D' L B' U2")
    } else return message.channel.send("Scramble not found, please suggest it with the suggest command")
};
module.exports.config = { name: "famous", aliases: ["famousscramble"] };