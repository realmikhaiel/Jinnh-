const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'NEW VERSION', description: "VERSION 3 COMMING SOON.\n\n\nhttps://github.com/Mikhaiel/Jinnh- ", rowId:" rowid1"},
       ]
       
       const sections = [{title: "𝘫𝘪𝘮𝘣𝘳𝘰𝘰𝘵𝘢𝘯", rows: rows}]
       
       const button = {
        buttonText: '★彡[ᴄʟɪᴄᴋ]彡★',
        description: "★彡[ᴏꜰꜰɪᴄᴀʟ ᴋɪɴɢ ʟᴏᴀᴅɪɴɢ]彡★",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
