const Discord = require("discord.js");
module.exports.run = async (bot, message, args, cube) => {
    if(message.author.id == 182620322846081024) {
        let member = message.mentions.members.first();
        let roleFive = message.guild.roles.find(role => role.name === "Newcomer (lvl 5)");
		let roleTen = message.guild.roles.find(role => role.name === "Good (lvl 10)");
		let roleTwenty = message.guild.roles.find(role => role.name === "Great (lvl 20)");
		let roleThirty = message.guild.roles.find(role => role.name === "Brilliant (lvl 30)");
		let roleFourty = message.guild.roles.find(role => role.name === "Exceptional (lvl 40)");
		let roleFifty = message.guild.roles.find(role => role.name === "Marvellous (lvl 50)");
		let roleSixty = message.guild.roles.find(role => role.name === "Platinum (lvl 60)");
        if(message.content.indexOf("Level 5U") != -1) {
            member.addRole(roleFive).catch(console.error);
        } else if(message.content.indexOf("Level 10U") != -1) {
            member.addRole(roleTen).catch(console.error);
        } else if(message.content.indexOf("Level 20U") != -1) {
            member.addRole(roleTwenty).catch(console.error);
        } else if(message.content.indexOf("Level 30U") != -1) {
            member.addRole(roleThirty).catch(console.error);
        } else if(message.content.indexOf("Level 40U") != -1) {
            member.addRole(roleFourty).catch(console.error);
        } else if(message.content.indexOf("Level 50U") != -1) {
            member.addRole(roleFifty).catch(console.error);
        } else if(message.content.indexOf("Level 60U") != -1) {
            member.addRole(roleSixty).catch(console.error);
        }
    }
};
module.exports.config = { name: "grant", aliases: ["grantrank"] };