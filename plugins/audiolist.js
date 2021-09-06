const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'audio command', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/Fe0yGRL.jpg";
    r_text[1] = "https://i.imgur.com/smgyikh.jpeg";
    r_text[2] = "https://i.imgur.com/7ylxsF3.jpeg";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━ NEW AUDIO UPDATING SOON ━*
3g
Aah
Acting
Admin
Aliya
Aliyo
Ano
Anoo
Appan
Ariyo
Atheppo
Ayn
Baby
Bgm
Birthday
Blind psycho
Boss
Bot Remove
Bot
Business
Bye
Chaya
Chill
Chiri
Class
Cruz
Cruze
Dance
Dora
Dream
Edit
Eppadi
Eppol
Error
Ethi
FF
Free Fire
Good Night
Hai
Hambada
Happy
Hate
Hi
Hloo
How
Hy
I Love You
I love you
Kick
Kiss
Kopp
Kundan
Line
Love You
Love you
Love
Lub
Manassilayilla
Mandan
Mazha
Mikhaiel
Mindanda
Mindula
Miss You
Miss u
Mood
Mooji
Morning
Mrng
Mullassery
Music
Mute
Muthe
Muthee
Mwol
NEW
Nanban
Nee Poda
New
Neymar
Njan Vannu
Ntha Ingane
Offer
Online
Oorma
Oru pattu pad
Paisa
Pediya
Poda
Pokki Para
Poli
Porn
Pottan
Pottum
Pova
Povano
Powli
Pro
Recharge
Remove
Ringtone
Rip
S
Samshayam
Sarasu
Sathyam
Save
Scene
Sex
Share
Sheri
Sherikkum
Shine
Single
Smoker
Smooth
Sorry
Spam
Sry
Stop
Subscribe
Super
Tea
Tentacion
Tha
Thank U
Thanks
Tharuo
Thech
Theram
Thund
Top Up
Umma
Vannu
Vedi
Welcome
Wow
XXX
Yes
Ys
acting
admin
akash
alive
aliya
aliyo
aloo
ano
anoo
appan
ariyo
atheppol
ayn
ban
bgm
blind psycho
boss
business
bye
chaya
chiri
class
cruz
cruze
dance
dream
edit
eppadi
eppol
free fire
girls
hai
hate
hi
how
http
https
hy
joli
kick
killadi
kiss
life
love you
love
lub
manassilayilla
mandan
mazha
mention
mindanda
mindula
miss you
mm
mood
moonji
morning
mrng
music
mute
muthe
muthee
mwol
myre
nanban
nee ntha engane
nee poda
nice
njan vannu
noob
offer
online
oorma
pani
para
pediya
poda myre
poda
podo
pokki para
poli
porn
pottum
pova
povoola
powli
pro
pwoli
recharge
remove
rip
saji
samshayam
sarasu
sathyam
save
scene
sed
sex
share
sheri
sherikkum
single
smoker
smooth
song
sorry
spam
sry
stop
subscribe
super
tagall
tea
tha
thaa
thank u
thanks
tharuo
thayoli
thech
theram
thund
top up
umma
urang
vayya
vedi
vere bot
welcome
wow
yes
*━━━━━ AUDIO COMMAND ━━━*
_*🌍© MIKHAIEL [ JIMBROOTAN , LUCIFER ]*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'audio command', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/Fe0yGRL.jpg";
    r_text[1] = "https://i.imgur.com/smgyikh.jpeg";
    r_text[2] = "https://i.imgur.com/7ylxsF3.jpeg";
   
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━ NEW AUDIO UPDATING SOON ━*
3g
Aah
Acting
Admin
Aliya
Aliyo
Ano
Anoo
Appan
Ariyo
Atheppo
Ayn
Baby
Bgm
Birthday
Blind psycho
Boss
Bot Remove
Bot
Business
Bye
Chaya
Chill
Chiri
Class
Cruz
Cruze
Dance
Dora
Dream
Edit
Eppadi
Eppol
Error
Ethi
FF
Free Fire
Good Night
Hai
Hambada
Happy
Hate
Hi
Hloo
How
Hy
I Love You
I love you
Kick
Kiss
Kopp
Kundan
Line
Love You
Love you
Love
Lub
Manassilayilla
Mandan
Mazha
Mikhaiel
Mindanda
Mindula
Miss You
Miss u
Mood
Mooji
Morning
Mrng
Mullassery
Music
Mute
Muthe
Muthee
Mwol
NEW
Nanban
Nee Poda
New
Neymar
Njan Vannu
Ntha Ingane
Offer
Online
Oorma
Oru pattu pad
Paisa
Pediya
Poda
Pokki Para
Poli
Porn
Pottan
Pottum
Pova
Povano
Powli
Pro
Recharge
Remove
Ringtone
Rip
S
Samshayam
Sarasu
Sathyam
Save
Scene
Sex
Share
Sheri
Sherikkum
Shine
Single
Smoker
Smooth
Sorry
Spam
Sry
Stop
Subscribe
Super
Tea
Tentacion
Tha
Thank U
Thanks
Tharuo
Thech
Theram
Thund
Top Up
Umma
Vannu
Vedi
Welcome
Wow
XXX
Yes
Ys
acting
admin
akash
alive
aliya
aliyo
aloo
ano
anoo
appan
ariyo
atheppol
ayn
ban
bgm
blind psycho
boss
business
bye
chaya
chiri
class
cruz
cruze
dance
dream
edit
eppadi
eppol
free fire
girls
hai
hate
hi
how
http
https
hy
joli
kick
killadi
kiss
life
love you
love
lub
manassilayilla
mandan
mazha
mention
mindanda
mindula
miss you
mm
mood
moonji
morning
mrng
music
mute
muthe
muthee
mwol
myre
nanban
nee ntha engane
nee poda
nice
njan vannu
noob
offer
online
oorma
pani
para
pediya
poda myre
poda
podo
pokki para
poli
porn
pottum
pova
povoola
powli
pro
pwoli
recharge
remove
rip
saji
samshayam
sarasu
sathyam
save
scene
sed
sex
share
sheri
sherikkum
single
smoker
smooth
song
sorry
spam
sry
stop
subscribe
super
tagall
tea
tha
thaa
thank u
thanks
tharuo
thayoli
thech
theram
thund
top up
umma
urang
vayya
vedi
vere bot
welcome
wow
yes
*━━━━━ AUDIO COMMAND ━━━*
_*🌍 © MIKHAIEL [ JIMBROOTAN , LUCIFER ]*_
`}) 

 }));
}
