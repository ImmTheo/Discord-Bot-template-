const Discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setTitle("Ce que le bot dois dire pour la commande help")
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'help',
  };
