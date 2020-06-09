const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
	function formatMili(miliseconds) {
		let days, hours, minutes, total_hours, total_minutes, total_seconds;

		total_seconds = parseInt(Math.floor(miliseconds / 1000));
		total_minutes = parseInt(Math.floor(total_seconds / 60));
		total_hours = parseInt(Math.floor(total_minutes / 60));
		days = parseInt(Math.floor(total_hours / 24));
		minutes = parseInt(total_minutes % 60);
		hours = parseInt(total_hours % 24);
		return `${days} days, ${hours} hours, ${minutes} minutes`;
	}

	let embed = new Discord.RichEmbed()
		.setAuthor(bot.user.username, bot.user.displayAvatarURL)
		.setColor("RANDOM")
		.addField("Language", "Node.js", true)
		.addField("Library", "Discord.js", true)
		.addField("Ping", `${Math.floor(bot.ping)}ms`, true)
		.addField("Invite Bot", "[Invite Here!](https://discordapp.com/oauth2/authorize?client_id=603602729805414480&scope=bot&permissions=130048)", true)
		.addField("Support Server", "[Join Here!](https://discord.gg/XBa52r2)", true)
		.addField("GitHub Repository", "[Check it out!](https://github.com/iseexsd/discord-cubed)", true)
		.addField("Documentation", "[Click here to read the docs!](https://scrambler.ethanh.xyz/)")
		.addField("Guilds", bot.guilds.size, true)
		.addField("Human Users", bot.users.filter((usr) => !usr.bot).size, true)
		.addField("Uptime", `${formatMili(bot.uptime)}`, true)
		.addField("Creators", "**ecuber#0566**, **Bacon#1153**, and **danktrain#0001**")
		.addField("Special Thanks", "**cs0x7f, for a lot of random state scrambles and scramble imaging**")
		.addField("Created", bot.user.createdAt)
		.addField("Description", "UPS Scrambler is a Discord bot that generates scrambles for common twisty puzzles. Concept originated from ecuber#0566, this version of bot has been coded mostly by Bacon#1153, revised with new features by ecuber and danktrain.")
		.setTimestamp()
		.setFooter(`Discord^3`, bot.user.displayAvatarURL);

	return message.channel.send({ embed: embed });
};
module.exports.config = { name: "info", aliases: ["description", "information"] };
