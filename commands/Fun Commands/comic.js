"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const fetch = require('node-fetch')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('comic', {
            aliases: ['comic'],
            category: 'Fun Commands',
            description: {
                content: 'Generate comics from public API',
                usage: 'comic',
                examples: [
                    'comic'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        fetch('https://meme-api.herokuapp.com/gimme/comic')
              .then(res => res.json())
              .then(async json => {
                    let msg = await message.channel.send('Generating Meme....')
                     const memeEmbed = new Discord.MessageEmbed()
                        .setTitle(json.title)
                        .setImage(json.url)
                        .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                        .setColor('RANDOM');
                    msg.edit(memeEmbed);
              });
    }
}
exports.default = MemeCommand;
