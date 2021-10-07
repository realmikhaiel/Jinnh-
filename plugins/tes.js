/* 
Copyright (C) 2021 Mikhaiel.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Jimbru = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Language = require('../language');
const Lang = Language.getString('weather');
const json = Json

	Jimbru.addCommand({ pattern: 'news ?(.*)', fromMe: true, desc: "News in malayalam." }, async (message, match) => {
    let { result } = await getJson('https://untitled-1ouyr1rszhaw.runkit.sh/news')
    return await message.sendMessage(result)
  })
   Jimbru.addCommand({ pattern: 'lyrics ?(.*)', fromMe: true, desc: "Lyrics." },
   async (message, match) => {
    let { status, result } = await getJson(`https://untitled-1ouyr1rszhaw.runkit.sh/lyrics?name=${match}`)
    if (!status) return await message.sendMessage(result)
    let { title, author, lyrics} = result
    return await message.sendMessage('```' + `Title  : ${title}\n
Author : ${author}\n
Lyrics : ${lyrics}` + '```', { quoted: message.data });
});
