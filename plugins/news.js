/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand( { pattern: 'news ?(.*)', fromMe: true, desc: "News in malayalam." }, async (message, match) => {
    let { result } = await getJson('https://untitled-1ouyr1rszhaw.runkit.sh/news')
    return await message.client.sendMessage(message.jid, MessageType.text);
  });


