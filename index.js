const Discord = require('discord.js');
const bot = new Discord.Client();

//add token here:
const token = 'N';

const PREFIX = '!'

// const ytdl = require("ytdl-core");
// const commando = require("discord.js-commando");

bot.on('ready', () => {
    console.log('This bot is online');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).toLowerCase().split(" ");
    if (message.content.charAt(0) != '!' || message.author.bot) {
        return;
    }
    let spaceSepArgs = message.content.substring(message.content.indexOf(' ') + 1);
    var usefulMessage = 'The mod \"' + spaceSepArgs +
        '\" would have been useful in this situation!  :wink:  ';

    // var commandTime = system

    switch (args[0]) {
        case 'args':
            message.channel.send(args);
            break;
        case 'google':
            message.channel.send("https://www.google.com/search?q=" +
                spaceSepArgs.replace(/ /g, '+'));
            break;
        case 'mod':
            message.channel.send(usefulMessage);
            break;
        // case 'virus':
        //     var servers = {};
        //     // if(servers[message.guild.id])
        //     // if (!message.guild.)

        //         // message.
        //             break;

        case 'modl':
            // message.channel.send('dummyMessage');
            // message.channel.send(message.content);
            // var i = 1;
            var linkEnd = spaceSepArgs.replace(/ /g, '-').replace(/'/g, '');
            // while (args[i] != null) {
            //     linkEnd += args[i]
            // }
            // for (let i = 1; i < args.length; i++) {
            //     linkEnd += args[i]
            // }
            // message.channel.send(linkEnd);

            message.channel.send(usefulMessage +
                'https://www.curseforge.com/minecraft/mc-mods/' + linkEnd);
            break;
        case 'help':
            message.channel.send('The command !' + args[0] + 'is not a command');
            break;
        case 'creator':
            message.channel.send('I was made by Colter (GoldenLion5648)');
            break;
        case 'worship':
        case 'worships':
            // message.channel.send('I was made by Colter (GoldenLion5648)');
            let name = message.author.username.toLowerCase();
            if (!args[1]) {

                if (name == 'michael_')
                    message.channel.send('Michael worships the pumpkins in his pumpkin patch.');
                else if (name.includes('nish'))
                    message.channel.send('Nish worships literally everything bad for her');
                else if (name.includes('seeker'))
                    message.channel.send('Etienne worships his god tier mic.');
                else if (name.includes('golden'))
                    message.channel.send('Colter worships the discord bot.');

            }
            else {
                if (args[1].includes('michael'))
                    message.channel.send('Michael worships the pumpkins in his pumpkin patch');
                if (args[1].includes('nish'))
                    message.channel.send('Nish worships literally everything bad for her');
                if (args[1].includes('seeker') || args[1].includes('eti'))
                    message.channel.send('Etienne worships his god tier mic');
                if (args[1].includes('golden') || args[1].includes('colter'))
                    message.channel.send('Colter worships the discord bot.');

            }
            break;
        case 'nished':
            message.channel.send('Gosh dang it Nish!');
            break;
        case 'simp':
            message.channel.send('Simp mode engaged! :stuck_out_tongue: ');
            break;
        // case 'virus':
        //     message.channel.send('!play https://www.youtube.com/watch?v=yokPWzRYSgc&feature=youtu.be&t=34');
        //     // setTimeout(
        //     //     console.log('Finished command2')
        //     // , 4000);
        //     console.log("Hello");
        //     setTimeout(() => {
        //         message.channel.send('!stop');
        //     }, 3000);
        //     // console.log("Goodbye!");
        //     // console.log('Finished command');
        //     break;
        case 'smile':
        case ':)':
        case ':-)':
            message.channel.send(':thumbsup:  :slight_smile: :smiley: :slight_smile: :thumbsup: ');
            break;
        case 'supergenius':
        case 'iq':
            message.channel.send('The Super Genius Solution! :open_mouth: 200 IQ!  ');
            break;

        case 'hand':
            message.channel.send('Talk to the hand :raised_back_of_hand: :raised_back_of_hand: :raised_back_of_hand: ');
            break;
        case 'shave':
            message.channel.send('Just shave! :bearded_person:  --> :slight_smile: ');
            break;
        case 'nishditch':
            message.channel.send('Classic <@524497108015775747> she ditched. Nothing new  :yawning_face: ');
            break;
        case 'thank':
        case 'thanks':
            message.channel.send('Sir thank you sir! :smile:  :zany_face:  ');
            break;
        case 'energy':
            if (message.author.username.toLowerCase().includes('nish')) {
                if (!args[1]) {
                    message.reply('Here\'s the energy you wanted!  :dango:');
                }
                else {
                    message.reply('Here\'s the energy you wanted!' + ':dango: '.repeat(Math.min(args[1], 10)));
                }
            }
            break;
        case 'comeonnish':
            message.channel.send('Get Minecraft Nishat!');
            break;
        case 'simple':
            if (args[1]) {
                message.channel.send('I am a simple man. I see ' + args[1] + ', I click like.  :thumbsup:');
            }
            else {
                message.channel.send('I am a simple man. I see pumpkin, I click like.  :thumbsup:');
            }
            break;
        case 'awesome':
            if (message.author.username.toLowerCase() === 'goldenlion5648') {
                message.reply('Yes you are awesome!');
            }
            break
        case 'clearm':
            if (!args[1] || isNaN(args[1])) {
                // message.delete(4000);
                return message.reply('Define you must define the number of lines to clear');//.then(d_msg => { d_msg.delete(4000); });

            }

            message.channel.bulkDelete(parseInt(args[1]) + 1);
            // message.channel.messages.client.
            //if(message.channel.messages.)
            break;
        default:
            if (args[0].substr(0, 3) === 'ree' && args[0].length <= 12) {
                message.channel.send(args[0].toUpperCase() +
                    args[0].substr(1).toUpperCase().repeat(4) +
                    '  :triumph:  :pouting_cat: '.repeat(4));

            }
            else if (args[0].includes('oof') && args[0].length <= 12) {
                message.channel.send('O'.repeat(args[0].toLowerCase().match(/o/g).length * 4) +
                    'F'.repeat(args[0].toLowerCase().match(/f/g).length * 3) + '  :open_mouth: :open_mouth: ');

            }
            break;

    }
    // if (args[0].substr(0, 3) === 'ree' && args[0].length <= 12) {
    //     message.channel.send(args[0].toUpperCase() +
    //         args[0].substr(1).toUpperCase().repeat(4) +
    //         '  :triumph:  :pouting_cat: '.repeat(4));

    // }

})

bot.login(token);