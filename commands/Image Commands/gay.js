"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const DIG = require("discord-image-generation");
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('gay', {
            aliases: ['gay'],
            category: 'Image Commands',
            descgaytion: {
                content: 'Generate a gay image of some user.',
                usage: 'gay <User>',
                examples: [
                    'gay @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
    
    const memberLogo = message.mentions.users.first()
    ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
    : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })


    let img = await new DIG.Gay().getImage(memberLogo)

    let attach = new Discord.MessageAttachment(img, "delete.gif");;
    
    message.channel.send(attach)

    }
}
exports.default = ripCommand;
