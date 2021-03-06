const Discord = require("discord.js")
module.exports.run = async (bot, message, args, cube) => {
	let helpEmbed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle("Help")
		.setDescription("For any of the commands listed below just type \`s!<command>\` (without the <>). For example, s!2x2 will generate a 2x2 scramble, s!redi will generate a redi cube scramble, etc.\n\nFor more help with utility commands, simply add \" help\" after the command.")
		.addField("WCA", "6x6, 7x7, skewb, pyra, sq1, clock, fmc")
		.addField("Non-WCA", "redi, ivy, 2x2x3, 2bld, 1x1, 8x8, crosssolved, kilominx")
		.addField("Multi-Argument", "3x3 (bld, oh, corner, edge, double, cross (white, yellow, orange, red, blue, green, random), superflip, feet, oll, pll, zbll, ll), 4x4 (bld), 5x5 (bld), 2x2 (bld), mega (carrot)")
		.addField("Multi-Scramble", "To get multiple scrambles, you can do \`s!<scramble> <number of scrambles>\`. For example, doing \`s!3x3 5\` will give you 5, 3x3x3 scrambles.")
		.addField("Relays", "2-3, 2-4, 2-5, 2-6, 2-7, 4-7, 5-7, miniguilford, side\nThese will generate the scrambles for multiple types of puzzles depending on the relay type.", true)
		.addField("Utility", "prefix, ignore, ignored, updates, stats, info, ping, suggest", true)
		.addField("Comps", "submit, manage, compconfig, config, comp, events, podium")
		.addField("Famous scrambles (s!famous)", "jay, 3x3wr, leo")
		.addField("Gifs", "jay, egg, hays, usps, rasmus, pepepls", true)
		.addField("Documentation", "For detailed instructions on using any of these commands, check out the documentation! https://scrambler.ethanh.xyz/")
		.setTimestamp()
		.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
	message.channel.send(helpEmbed)
}
module.exports.config = { name: "help", aliases: ["relay"] }
