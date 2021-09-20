/*
Copyright (C) 2020 Mikhaiel
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jinn = Config.THERI !== false ? Config.THERI.split(',') : [];
const jid = Config.DISBGM !== undefined ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: true})
        }
const array = ['3g','Aah','Acting','Admin','Aliya','Aliyo','Ano','Anoo','Appan','Ariyo','Atheppo','Ayn','Baby','Bgm','Birthday','Blind psycho','Boss','Bot Remove','Bot','Business','Bye','Chaya','Chill','Chiri','Class','Cruz','Cruze','Dance','Dora','Dream','Edit','Eppadi','Eppol','Error','Ethi','FF','Free Fire','Good Night','Hai','Hambada','Happy','Hate','Hi','Hloo','How','Hy','I Love You','I love you','Kick','Kiss','Kopp','Kundan','Line','Love You','Love you','Love','Lub','Manassilayilla','Mandan','Mazha','Mikhaiel','Mindanda','Mindula','Miss You','Miss u','Mood','Mooji','Morning','Mrng','Mullassery','Music','Mute','Muthe','Muthee','Mwol','NEW','Nanban','Nee Poda','New','Neymar','Njan Vannu','Ntha Ingane','Offer','Online','Oorma','Oru pattu pad','Paisa','Pediya','Poda','Pokki Para','Poli','Porn','Pottan','Pottum','Pova','Povano','Powli','Pro','Recharge','Remove','Ringtone','Rip','S','Samshayam','Sarasu','Sathyam','Save','Scene','Sex','Share','Sheri','Sherikkum','Shine','Single','Smoker','Smooth','Sorry','Spam','Sry','Stop','Subscribe','Super','Tea','Tentacion','Tha','Thank U','Thanks','Tharuo','Thech','Theram','Thund','Top Up','Umma','Vannu','Vedi','Welcome','Wow','XXX','Yes','Ys','acting','admin','akash','alive','aliya','aliyo','aloo','ano','anoo','appan','ariyo','atheppol','ayn','ban','bgm','blind psycho','boss','business','bye','chaya','chiri','class','cruz','cruze','dance','dream','edit','eppadi','eppol','free fire','girls','hai','hate','hi','how','hy','joli','kick','killadi','kiss','life','love you','love','lub','manassilayilla','mandan','mazha','mention','mindanda','mindula','miss you','mm','mood','moonji','morning','mrng','music','mute','muthe','muthee','mwol','myre','nanban','nee ntha engane','nee poda','nice','njan vannu','noob','offer','online','oorma','pani','para','pediya','poda myre','poda','podo','pokki para','poli','porn','pottum','pova','povoola','powli','pro','pwoli','recharge','remove','rip','saji','samshayam','sarasu','sathyam','save','scene','sed','sex','share','sheri','sherikkum','single','smoker','smooth','song','sorry','spam','sry','stop','subscribe','super','tagall','tea','tha','thaa','thank u','thanks','tharuo','thayoli','thech','theram','thund','top up','umma','urang','vayya','vedi','vere bot','welcome','wow','yes']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.CHANGER == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/trance.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.TAGM) {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: true})
        }
const array = ['poda','komban','Nee Poda','alive','Morning','Naye','Veruppikkalla','sing','Sugamalle','status','Bot','Kozhi','tone','Ayin','photo','illa','Ramees','Romantic','aju','Show','wait','list','Break Up','da','line','kozhi','Da','Wait','Komban','sugamalle','Aju','Tone','show','Break up','naye','ramees','veruppikkalla','Status','ayin','Sing','chunk','romantic','Yodhav','tnx','Ara','Aara','Delete','ameen','Bro','kutti','Stop','entha cheyya','re entry','nirth','Podi','ara','Re Entry','Sed','bro','Chunk','thanks','Kutti','nanban','aara','Ameen','Entha Cheyya','kundan','Nirth','Tnx','help','Noob','delete','podi','yodhav','single','3g','Aah','Acting','Admin','Aliya','Aliyo','Ano','Anoo','Appan','Ariyo','Atheppo','Ayn','Baby','Bgm','Birthday','Blind psycho','Boss','Bot Remove','Bot','Business','Bye','Chaya','Chill','Chiri','Class','Cruz','Cruze','Dance','Dora','Dream','Edit','Eppadi','Eppol','Error','Ethi','FF','Free Fire','Good Night','Hai','Hambada','Happy','Hate','Hi','Hloo','How','Hy','I Love You','I love you','Kick','Kiss','Kopp','Kundan','Line','Love You','Love you','Love','Lub','Manassilayilla','Mandan','Mazha','Mikhaiel','Mindanda','Mindula','Miss You','Miss u','Mood','Mooji','Morning','Mrng','Mullassery','Music','Mute','Muthe','Muthee','Mwol','NEW','Nanban','Nee Poda','New','Neymar','Njan Vannu','Ntha Ingane','Offer','Online','Oorma','Oru pattu pad','Paisa','Pediya','Poda','Pokki Para','Poli','Porn','Pottan','Pottum','Pova','Povano','Powli','Pro','Recharge','Remove','Ringtone','Rip','S','Samshayam','Sarasu','Sathyam','Save','Scene','Sex','Share','Sheri','Sherikkum','Shine','Single','Smoker','Smooth','Sorry','Spam','Sry','Stop','Subscribe','Super','Tea','Tentacion','Tha','Thank U','Thanks','Tharuo','Thech','Theram','Thund','Top Up','Umma','Vannu','Vedi','Welcome','Wow','XXX','Yes','Ys','acting','admin','akash','alive','aliya','aliyo','aloo','ano','anoo','appan','ariyo','atheppol','ayn','ban','bgm','blind psycho','boss','business','bye','chaya','chiri','class','cruz','cruze','dance','dream','edit','eppadi','eppol','free fire','girls','hai','hate','hi','how','hy','joli','kick','killadi','kiss','life','love you','love','lub','manassilayilla','mandan','mazha','mention','mindanda','mindula','miss you','mm','mood','moonji','morning','mrng','music','mute','muthe','muthee','mwol','myre','nanban','nee ntha engane','nee poda','nice','njan vannu','noob','offer','online','oorma','pani','para','pediya','poda myre','poda','podo','pokki para','poli','porn','pottum','pova','povoola','powli','pro','pwoli','recharge','remove','rip','saji','samshayam','sarasu','sathyam','save','scene','sed','sex','share','sheri','sherikkum','single','smoker','smooth','song','sorry','spam','sry','stop','subscribe','super','tagall','tea','tha','thaa','thank u','thanks','tharuo','thayoli','thech','theram','thund','top up','umma','urang','vayya','vedi','vere bot','welcome','wow','yes']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.CHANGER == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/uploads/trance.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.TAGM) {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/upload/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: true})
        }
const array = ['3g','Aah','Acting','Admin','Aliya','Aliyo','Ano','Anoo','Appan','Ariyo','Atheppo','Ayn','Baby','Bgm','Birthday','Blind psycho','Boss','Bot Remove','Bot','Business','Bye','Chaya','Chill','Chiri','Class','Cruz','Cruze','Dance','Dora','Dream','Edit','Eppadi','Eppol','Error','Ethi','FF','Free Fire','Good Night','Hai','Hambada','Happy','Hate','Hi','Hloo','How','Hy','I Love You','I love you','Kick','Kiss','Kopp','Kundan','Line','Love You','Love you','Love','Lub','Manassilayilla','Mandan','Mazha','Mikhaiel','Mindanda','Mindula','Miss You','Miss u','Mood','Mooji','Morning','Mrng','Mullassery','Music','Mute','Muthe','Muthee','Mwol','NEW','Nanban','Nee Poda','New','Neymar','Njan Vannu','Ntha Ingane','Offer','Online','Oorma','Oru pattu pad','Paisa','Pediya','Poda','Pokki Para','Poli','Porn','Pottan','Pottum','Pova','Povano','Powli','Pro','Recharge','Remove','Ringtone','Rip','S','Samshayam','Sarasu','Sathyam','Save','Scene','Sex','Share','Sheri','Sherikkum','Shine','Single','Smoker','Smooth','Sorry','Spam','Sry','Stop','Subscribe','Super','Tea','Tentacion','Tha','Thank U','Thanks','Tharuo','Thech','Theram','Thund','Top Up','Umma','Vannu','Vedi','Welcome','Wow','XXX','Yes','Ys','acting','admin','akash','alive','aliya','aliyo','aloo','ano','anoo','appan','ariyo','atheppol','ayn','ban','bgm','blind psycho','boss','business','bye','chaya','chiri','class','cruz','cruze','dance','dream','edit','eppadi','eppol','free fire','girls','hai','hate','hi','how','hy','joli','kick','killadi','kiss','life','love you','love','lub','manassilayilla','mandan','mazha','mention','mindanda','mindula','miss you','mm','mood','moonji','morning','mrng','music','mute','muthe','muthee','mwol','myre','nanban','nee ntha engane','nee poda','nice','njan vannu','noob','offer','online','oorma','pani','para','pediya','poda myre','poda','podo','pokki para','poli','porn','pottum','pova','povoola','powli','pro','pwoli','recharge','remove','rip','saji','samshayam','sarasu','sathyam','save','scene','sed','sex','share','sheri','sherikkum','single','smoker','smooth','song','sorry','spam','sry','stop','subscribe','super','tagall','tea','tha','thaa','thank u','thanks','tharuo','thayoli','thech','theram','thund','top up','umma','urang','vayya','vedi','vere bot','welcome','wow','yes']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Media/upload/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919544846609@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Media/stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted : message.data, ptt: false})
    }
const array = ['Pinky','asena','ayin','back','Back','Bot','fuck','Fuck','Hehe','Hello','Hlo','Kill','kill','kiss','line','love','mwolu','Mwolu','single','tha','thund','z','Z','bie','Bie']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./Media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp,contextInfo: { forwardingScore: 10, isForwarded: false }, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
