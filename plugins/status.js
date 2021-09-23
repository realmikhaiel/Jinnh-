/* 
Copyright © 2020 Mikhaiel.
Don't re-use with out permission
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('whatsappstatus');


if (Config.WORKTYPE == 'private') {

    Ktb.addCommand({pattern: 'status', fromMe: true, desc: Status Video}, (async (message, match) => {
        
     var reply = await message.client.sendMessage(message.jid,' 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚂𝚃𝙰𝚃𝚄𝚂 🚀 ',MessageType.text);
 
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        
        

        var i = Math.floor(4*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        

        reply = await message.client.sendMessage(message.jid,'Status Uploading',MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.JINN})

        
    }));
}
else if (Config.WORKTYPE == 'public') {

    Ktb.addCommand({pattern: 'status', fromMe: false, desc: Status Video}, (async (message, match) => {
        
      var reply = await message.client.sendMessage(message.jid,' Downloading Whatsapp Status',MessageType.text);
 
     
        
        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        

        var i = Math.floor(4*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        
// EXPORTING
        reply = await message.client.sendMessage(message.jid,'Status Downloading',MessageType.text);
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.JINN })

    }));

} 
