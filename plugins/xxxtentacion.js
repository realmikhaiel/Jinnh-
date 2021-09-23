/* Copyright (C) 2021 ameer-kallumthodi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
201 Images Of Rashmika in random
re edited by Shahid-devil
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'xxxtentacion', fromMe: true, desc: 'xxxtentacion images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://c4.wallpaperflare.com/wallpaper/568/486/574/singers-xxxtentacion-wallpaper-preview.jpg";
r_text[1] = "https://c4.wallpaperflare.com/wallpaper/791/977/285/juice-wrld-xxxtentacion-hd-wallpaper-preview.jpg";
r_text[2] = "https://c4.wallpaperflare.com/wallpaper/691/675/681/singer-4k-xxxtentacion-wallpaper-preview.jpg";
r_text[3] = "https://c4.wallpaperflare.com/wallpaper/1017/783/591/5c1cb3f890d40-wallpaper-preview.jpg";
r_text[4] = "https://c4.wallpaperflare.com/wallpaper/341/824/990/singer-4k-xxxtentacion-wallpaper-preview.jpg";
r_text[5] = "https://c4.wallpaperflare.com/wallpaper/687/732/848/xxxtentacion-rapper-rip-hd-wallpaper-preview.jpg";
r_text[6] = "https://c4.wallpaperflare.com/wallpaper/153/630/406/singers-xxxtentacion-wallpaper-preview.jpg";
r_text[7] = "https://wallpapers-hub.art/wallpaper-images/425415.jpg";
r_text[8] = "https://wallpapers-hub.art/wallpaper-images/425425.jpg";
r_text[9] = "https://wallpapers-hub.art/wallpaper-images/24660.jpg";
r_text[10] = "https://wallpapers-hub.art/wallpaper-images/24683.jpg";
r_text[11] = "https://wallpapers-hub.art/wallpaper-images/425436.jpg";
r_text[12] = "https://wallpapers-hub.art/wallpaper-images/425441.jpg";
r_text[13] = "https://wallpapers-hub.art/wallpaper-images/143537.jpg";
r_text[14] = "https://wallpapers-hub.art/wallpaper-images/425453.png";
r_text[15] = "https://wallpapers-hub.art/wallpaper-images/334362.jpg";
r_text[16] = "https://wallpapers-hub.art/wallpaper-images/24682.jpg";
r_text[17] = "https://wallpapers-hub.art/wallpaper-images/425541.jpg";
r_text[18] = "https://wallpapers-hub.art/wallpaper-images/334264.png";
r_text[19] = "https://wallpapers-hub.art/wallpaper-images/334301.jpg";
r_text[20] = "https://wallpapers-hub.art/wallpaper-images/24656.png";
r_text[21] = "https://wallpapers-hub.art/wallpaper-images/24666.jpg";
r_text[22] = "https://wallpapers-hub.art/wallpaper-images/24680.jpg";
r_text[23] = "https://wallpapers-hub.art/wallpaper-images/24697.png";
r_text[24] = "https://wallpapers-hub.art/wallpaper-images/24710.jpg";
r_text[25] = "https://wallpapers-hub.art/wallpaper-images/24717.png";
r_text[26] = "https://wallpapers-hub.art/wallpaper-images/24720.png";
r_text[27] = "https://wallpapers-hub.art/wallpaper-images/24723.jpg";
r_text[28] = "https://wallpapers-hub.art/wallpaper-images/24725.jpg";
r_text[29] = "https://wallpapers-hub.art/wallpaper-images/24726.jpg";
r_text[30] = "https://wallpapers-hub.art/wallpaper-images/24730.jpg";

var i = Math.floor(31*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.JINN})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'xxxtentacion', fromMe: false, desc: 'xxxtentacion images'}, (async (message, match) => {

    var r_text = new Array ();


r_text[0] = "https://c4.wallpaperflare.com/wallpaper/568/486/574/singers-xxxtentacion-wallpaper-preview.jpg";
r_text[1] = "https://c4.wallpaperflare.com/wallpaper/791/977/285/juice-wrld-xxxtentacion-hd-wallpaper-preview.jpg";
r_text[2] = "https://c4.wallpaperflare.com/wallpaper/691/675/681/singer-4k-xxxtentacion-wallpaper-preview.jpg";
r_text[3] = "https://c4.wallpaperflare.com/wallpaper/1017/783/591/5c1cb3f890d40-wallpaper-preview.jpg";
r_text[4] = "https://c4.wallpaperflare.com/wallpaper/341/824/990/singer-4k-xxxtentacion-wallpaper-preview.jpg";
r_text[5] = "https://c4.wallpaperflare.com/wallpaper/687/732/848/xxxtentacion-rapper-rip-hd-wallpaper-preview.jpg";
r_text[6] = "https://c4.wallpaperflare.com/wallpaper/153/630/406/singers-xxxtentacion-wallpaper-preview.jpg";
r_text[7] = "https://wallpapers-hub.art/wallpaper-images/425415.jpg";
r_text[8] = "https://wallpapers-hub.art/wallpaper-images/425425.jpg";
r_text[9] = "https://wallpapers-hub.art/wallpaper-images/24660.jpg";
r_text[10] = "https://wallpapers-hub.art/wallpaper-images/24683.jpg";
r_text[11] = "https://wallpapers-hub.art/wallpaper-images/425436.jpg";
r_text[12] = "https://wallpapers-hub.art/wallpaper-images/425441.jpg";
r_text[13] = "https://wallpapers-hub.art/wallpaper-images/143537.jpg";
r_text[14] = "https://wallpapers-hub.art/wallpaper-images/425453.png";
r_text[15] = "https://wallpapers-hub.art/wallpaper-images/334362.jpg";
r_text[16] = "https://wallpapers-hub.art/wallpaper-images/24682.jpg";
r_text[17] = "https://wallpapers-hub.art/wallpaper-images/425541.jpg";
r_text[18] = "https://wallpapers-hub.art/wallpaper-images/334264.png";
r_text[19] = "https://wallpapers-hub.art/wallpaper-images/334301.jpg";
r_text[20] = "https://wallpapers-hub.art/wallpaper-images/24656.png";
r_text[21] = "https://wallpapers-hub.art/wallpaper-images/24666.jpg";
r_text[22] = "https://wallpapers-hub.art/wallpaper-images/24680.jpg";
r_text[23] = "https://wallpapers-hub.art/wallpaper-images/24697.png";
r_text[24] = "https://wallpapers-hub.art/wallpaper-images/24710.jpg";
r_text[25] = "https://wallpapers-hub.art/wallpaper-images/24717.png";
r_text[26] = "https://wallpapers-hub.art/wallpaper-images/24720.png";
r_text[27] = "https://wallpapers-hub.art/wallpaper-images/24723.jpg";
r_text[28] = "https://wallpapers-hub.art/wallpaper-images/24725.jpg";
r_text[29] = "https://wallpapers-hub.art/wallpaper-images/24726.jpg";
r_text[30] = "https://wallpapers-hub.art/wallpaper-images/24730.jpg";


    var i = Math.floor(31*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.JINN})

    }));
}
