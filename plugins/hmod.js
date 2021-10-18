/* Copyright (C) 2021 plk-dqz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/


/*
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {


Asena.addCommand({pattern: 'modapp ?(.*)', fromMe: true, desc: 'get mod apk from happymod' , dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {


Asena.addCommand({pattern: 'modapp ?(.*)', fromMe: false, desc: 'get mod apk from happymod' , dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
*/
	
 const jimbru = require('../events');

 const { MessageType, Mimetype } = require('@adiwajshing/baileys');

 const fs = require('fs');

 const ffmpeg = require('fluent-ffmpeg');

 const { execFile } = require('child_process');

 const Config = require('../config');

          var mode = ''

if (Config.OWNRN == 'default') mode = '𝘫𝘪𝘮𝘣𝘳𝘰𝘰𝘵𝘵𝘢𝘯'

else mode = '𝘧𝘰𝘳𝘸𝘢𝘳𝘥𝘦𝘥 𝘣𝘺 ' + Config.OWNRN

            const jimbroo = {

                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "jimbroottan", "caption": mode , 'jpegThumbnail': fs.readFileSync('./Media/image/logo.jpg')}}





            }

jimbru.addcommand({pattern: 'mforward ?(.*)', fromMe: true, desc: 'its foraward replied audio' , dontAddCommandList: true }, async (message, match) => {    

    if (message.reply_message === false);



    if(message.reply_message.video ||

      message.reply_message.sticker ||

      message.reply_message.pdf

    )

      return message.sendMessage("*Not supported!*\n\n  𝘰𝘯𝘭𝘺 𝘴𝘶𝘱𝘱𝘰𝘳𝘵 𝘢𝘶𝘥𝘪𝘰 𝘧𝘪𝘭𝘦");



        if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");



    var location = await message.client.downloadAndSaveMediaMessage({

        key: {

            remoteJid: message.reply_message.jid,

            id: message.reply_message.id

        },

        message: message.reply_message.data.quotedMessage

    });

let id = match[1];

    ffmpeg(location)

        .format('mp3')

        .save('output.mp3')

        .on('end', async () => {

            await message.client.sendMessage(id, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: jimbroo,contextInfo: { forwardingScore: 2, isForwarded: true}});

});

});
