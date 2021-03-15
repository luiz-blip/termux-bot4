exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES🍁*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*eits kamu belom daftar di RBOT daftar dulu untuk menggunakan bot cara daftar ${prefix}daftar nama|umur*\n*contoh= ${prefix}daftar ${pushname}|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin RBOT Dan Jangan Lupa Untuk Ketik ,rules sebelum memulai botnya ya😁`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *USER* ❱ ⊰─══
├➤ *Nama* : ${pushname}
├➤ *Nomer* : wa.me/${sender.split("@")[0]}
├➤ *Uang mu* : Rp${uangku}
├➤ *XP* : ${getLevelingXp(sender)}/${reqXp}
├➤ *Level* : ${getLevelingLevel(sender)}
├➤ *User register* : ${_registered.length}
╰──── ⸨ *RBOT* ⸩  ⊰─════╯

╭────❰ *MAKER MENU* ❱
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}sticker* (jika video max. 9det)
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kuncitext*
├♡ۜۜ͜͡✿➤ *${prefix}textdaun*
├♡ۜۜ͜͡✿➤ *${prefix}nulis*
├♡ۜۜ͜͡✿➤ *${prefix}nulis2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}silktext*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}makequote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}toimg*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ocr*
├♡ۜۜ͜͡✿➤ *${prefix}galaxstyle*
├♡ۜۜ͜͡✿➤ *${prefix}jokerlogo*
├♡ۜۜ͜͡✿➤ *${prefix}toxic*
├♡ۜۜ͜͡✿➤ *${prefix}trigger*
├♡ۜۜ͜͡✿➤ *${prefix}gtav*
├♡ۜۜ͜͡✿➤ *${prefix}gay*
├♡ۜۜ͜͡✿➤ *${prefix}nigthbeach*
├♡ۜۜ͜͡✿➤ *${prefix}laptop*
├♡ۜۜ͜͡✿➤ *${prefix}linephoto*
├♡ۜۜ͜͡✿➤ *${prefix}raindrop*
├♡ۜۜ͜͡✿➤ *${prefix}sketch*
├♡ۜۜ͜͡✿➤ *${prefix}wanted*
├♡ۜۜ͜͡✿➤ *${prefix}crossgun*
├♡ۜۜ͜͡✿➤ *${prefix}bloodfrosted*
├♡ۜۜ͜͡✿➤ *${prefix}hororblood*
├♡ۜۜ͜͡✿➤ *${prefix}halloween*
├♡ۜۜ͜͡✿➤ *${prefix}firework*
├♡ۜۜ͜͡✿➤ *${prefix}glitch*
├♡ۜۜ͜͡✿➤ *${prefix}blackpink*
├♡ۜۜ͜͡✿➤ *${prefix}goldplay*
├♡ۜۜ͜͡✿➤ *${prefix}hologram*
├♡ۜۜ͜͡✿➤ *${prefix}textbyname*
├♡ۜۜ͜͡✿➤ *${prefix}herrypoter*
├♡ۜۜ͜͡✿➤ *${prefix}imagetext*
├♡ۜۜ͜͡✿➤ *${prefix}greenneon*
├♡ۜۜ͜͡✿➤ *${prefix}metallogo*
│
├❰ *FUN MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}mining*
├♡ۜۜ͜͡✿➤ *${prefix}playstore*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bisakah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kapankah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}apakah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}seberapagay*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}rate*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}truth*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}dare*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hobby*
├♡ۜۜ͜͡✿➤ *${prefix}memeindo*
├♡ۜۜ͜͡✿➤ *${prefix}darkjoke*
├♡ۜۜ͜͡✿➤ *${prefix}cerpen*
├♡ۜۜ͜͡✿➤ *${prefix}quotesimage*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}fitnah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pasangan*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ntahlah*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}slap*
├♡ۜۜ͜͡✿➤ *${prefix}hemkel*
├♡ۜۜ͜͡✿➤ *${prefix}quotes2*
├♡ۜۜ͜͡✿➤ *${prefix}katadoi*
├♡ۜۜ͜͡✿➤ *${prefix}katakatadilan*
├♡ۜۜ͜͡✿➤ *${prefix}cogan*
├♡ۜۜ͜͡✿➤ *${prefix}cecan*
├♡ۜۜ͜͡✿➤ *${prefix}qoutes*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}caklontong*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}family100*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tebakin*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kbbi*
├♡ۜۜ͜͡✿➤ *${prefix}dadu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}artinama*
│
├❰ *ANIME MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}animesaran*
├♡ۜۜ͜͡✿➤ *${prefix}animesaran2*
├♡ۜۜ͜͡✿➤ *${prefix}husbu2*
├♡ۜۜ͜͡✿➤ *${prefix}anime*
├♡ۜۜ͜͡✿➤ *${prefix}wallpaperanime*
├♡ۜۜ͜͡✿➤ *${prefix}trap* (udh work)
├♡ۜۜ͜͡✿➤ *${prefix}baka2*
├♡ۜۜ͜͡✿➤ *${prefix}wallpapernime*
├♡ۜۜ͜͡✿➤ *${prefix}animefanart*
├♡ۜۜ͜͡✿➤ *${prefix}megumin*
├♡ۜۜ͜͡✿➤ *${prefix}doujinimage*
├♡ۜۜ͜͡✿➤ *${prefix}shinobu*
├♡ۜۜ͜͡✿➤ *${prefix}baka* (work)
├♡ۜۜ͜͡✿➤ *${prefix}eroyuri* (work)
├♡ۜۜ͜͡✿➤ *${prefix}neko4*
├♡ۜۜ͜͡✿➤ *${prefix}nino*
├♡ۜۜ͜͡✿➤ *${prefix}itsuki*
├♡ۜۜ͜͡✿➤ *${prefix}yotsuba*
├♡ۜۜ͜͡✿➤ *${prefix}ichika*
├♡ۜۜ͜͡✿➤ *${prefix}miku2*
├♡ۜۜ͜͡✿➤ *${prefix}senku2*
├♡ۜۜ͜͡✿➤ *${prefix}kurumi3*
├♡ۜۜ͜͡✿➤ *${prefix}testhusbu*
├♡ۜۜ͜͡✿➤ *${prefix}testwaifu*
├♡ۜۜ͜͡✿➤ *${prefix}boboboi*
├♡ۜۜ͜͡✿➤ *${prefix}happy*
├♡ۜۜ͜͡✿➤ *${prefix}dance*
├♡ۜۜ͜͡✿➤ *${prefix}kusonimesearch*
├♡ۜۜ͜͡✿➤ *${prefix}neko3*
├♡ۜۜ͜͡✿➤ *${prefix}smile*
├♡ۜۜ͜͡✿➤ *${prefix}wallpaper*
├♡ۜۜ͜͡✿➤ *${prefix}slapnime*
├♡ۜۜ͜͡✿➤ *${prefix}shota*
├♡ۜۜ͜͡✿➤ *${prefix}sagiri*
├♡ۜۜ͜͡✿➤ *${prefix}femdom*
├♡ۜۜ͜͡✿➤ *${prefix}waifukawai*
├♡ۜۜ͜͡✿➤ *${prefix}kuni*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwloli3*
├♡ۜۜ͜͡✿➤ *${prefix}kitsune*
├♡ۜۜ͜͡✿➤ *${prefix}yuri* (work)
├♡ۜۜ͜͡✿➤ *${prefix}yaoi* (work)
├♡ۜۜ͜͡✿➤ *${prefix}wancak*
├♡ۜۜ͜͡✿➤ *${prefix}quotesnime*
├♡ۜۜ͜͡✿➤ *${prefix}waifu2*
├♡ۜۜ͜͡✿➤ *${prefix}bj* (udh work)
├♡ۜۜ͜͡✿➤ *${prefix}ram*
├♡ۜۜ͜͡✿➤ *${prefix}lomly*
├♡ۜۜ͜͡✿➤ *${prefix}pictlolicon*
├♡ۜۜ͜͡✿➤ *${prefix}pictneko*
├♡ۜۜ͜͡✿➤ *${prefix}testwaifu*
├♡ۜۜ͜͡✿➤ *${prefix}nsfw_avatar*
├♡ۜۜ͜͡✿➤ *${prefix}senku*
├♡ۜۜ͜͡✿➤ *${prefix}pictwaifu*
├♡ۜۜ͜͡✿➤ *${prefix}kurumi2*
├♡ۜۜ͜͡✿➤ *${prefix}nakanomiku*
├♡ۜۜ͜͡✿➤ *${prefix}wibu*
├♡ۜۜ͜͡✿➤ *${prefix}wibu2*
├♡ۜۜ͜͡✿➤ *${prefix}boruto*
├♡ۜۜ͜͡✿➤ *${prefix}rize*
├♡ۜۜ͜͡✿➤ *${prefix}kaneki*
├♡ۜۜ͜͡✿➤ *${prefix}kemonomimi*
├♡ۜۜ͜͡✿➤ *${prefix}holo*
├♡ۜۜ͜͡✿➤ *${prefix}naruto*
├♡ۜۜ͜͡✿➤ *${prefix}amv*
├♡ۜۜ͜͡✿➤ *${prefix}minato*                                                                               ├♡ۜۜ͜͡✿➤ *${prefix}tagall*
├♡ۜۜ͜͡✿➤ *${prefix}gecg*
├♡ۜۜ͜͡✿➤ *${prefix}avatar*
├♡ۜۜ͜͡✿➤ *${prefix}miku*
├♡ۜۜ͜͡✿➤ *${prefix}kurumi*
├♡ۜۜ͜͡✿➤ *${prefix}elaina*
├♡ۜۜ͜͡✿➤ *${prefix}hinata*
├♡ۜۜ͜͡✿➤ *${prefix}sasuke*
├♡ۜۜ͜͡✿➤ *${prefix}sakura*
├♡ۜۜ͜͡✿➤ *${prefix}akura*
├♡ۜۜ͜͡✿➤ *${prefix}itori*
├♡ۜۜ͜͡✿➤ *${prefix}touka*
├♡ۜۜ͜͡✿➤ *${prefix}rem*
├♡ۜۜ͜͡✿➤ *${prefix}chika*
│
├❰ *ISLAM MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}quran*
├♡ۜۜ͜͡✿➤ *${prefix}listsurah*
│
├❰ *MEDIA MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}beritahoax*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}brainly*
├♡ۜۜ͜͡✿➤ *${prefix}jadwaltv*
├♡ۜۜ͜͡✿➤ *${prefix}ramalhp*
├♡ۜۜ͜͡✿➤ *${prefix}nekojav*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pinterest*
├♡ۜۜ͜͡✿➤ *${prefix}pinterest2*
├♡ۜۜ͜͡✿➤ *${prefix}googleimage*
├♡ۜۜ͜͡✿➤ *${prefix}igdlw*
├♡ۜۜ͜͡✿➤ *${prefix}ytmp3*
├♡ۜۜ͜͡✿➤ *${prefix}ytmp4*
├♡ۜۜ͜͡✿➤ *${prefix}play*
├♡ۜۜ͜͡✿➤ *${prefix}itxt*
├♡ۜۜ͜͡✿➤ *${prefix}kawai*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}husbu*
├♡ۜۜ͜͡✿➤ *${prefix}waifu2*
├♡ۜۜ͜͡✿➤ *${prefix}waifu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli*
├♡ۜۜ͜͡✿➤ *${prefix}erodoujin*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}neko*
├♡ۜۜ͜͡✿➤ *${prefix}neko2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nekonime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomanime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomhusbu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomcyberspace*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomexo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}blackpink*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomgame*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randommountain*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomloli*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomprogramer*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hartatahta*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}meme*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}memeindo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tts* (work)
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}play*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}lirik*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ssweb*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}map*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}stalkig*
├♡ۜۜ͜͡✿➤ *${prefix}afk*
├♡ۜۜ͜͡✿➤ *${prefix}unafk*
├♡ۜۜ͜͡✿➤ *${prefix}asupan*
│    
├❰ *LIMIT MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}limit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}buylimit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}dompet*
│
├❰ *NSFW MENU* ❱
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pokemon*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}anjing*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfwloli*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwneko*
├♡ۜۜ͜͡✿➤ *${prefix}hentai2*
├♡ۜۜ͜͡✿➤ *${prefix}solo*
├♡ۜۜ͜͡✿➤ *${prefix}solo2*
├♡ۜۜ͜͡✿➤ *${prefix}solo3*
├♡ۜۜ͜͡✿➤ *${prefix}pussy*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwtrap*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwpussy*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwyuri*
├♡ۜۜ͜͡✿➤ *${prefix}ero*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwloli2*
├♡ۜۜ͜͡✿➤ *${prefix}sideoppai* (work)
├♡ۜۜ͜͡✿➤ *${prefix}nsfwwaifu* (work)
├♡ۜۜ͜͡✿➤ *${prefix}ecchi* (work)
├♡ۜۜ͜͡✿➤ *${prefix}nekopoi* <judul>
│
├❰ *GROUP MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag*
├♡ۜۜ͜͡✿➤ *${prefix}del*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}grouplist*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}level*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leaderboard*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}linkgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tagall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setpp*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}add*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kick*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setname*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setdesc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}demote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}promote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listadmin*
├♡ۜۜ͜͡✿➤ *${prefix}tutuptime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}group* [buka/tutup]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leveling* [enable/disable]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfw* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}simih* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}welcome* [1/0]
│
├❰ *OWNER MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bcgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kickall* Mau Ngapain Tod? >:
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setreply*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setprefix*
├♡ۜۜ͜͡✿➤ *${prefix}antilinkgrup* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clearall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}block*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}unblock*
├♡ۜۜ͜͡✿➤ *${prefix}addbadword* <teks>
├♡ۜۜ͜͡✿➤ *${prefix}listbadword*
├♡ۜۜ͜͡✿➤ *${prefix}nobadword* <enable/disable>
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listblock*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leave*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}event* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clone*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setppbot*
│
│
├───⊱⸨ *TQTO* ⸩  ⊰─═══
│©ShizukaBot
│©Mr.A43G
│©LordAbdur
│©RBOT
├ *TQTO JAN DIHAPUS*
╰──── ⸨ *RBOT* ⸩  
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomer* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
