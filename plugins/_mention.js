//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://cdn.ironman.my.id/q/DDEFR.mp4"
    let url = "https://github.com/LUCKYSERSKBA/XLICON-V2"
    let murl = "https://instagram.com/the____.red___eye"
    let hash = global.botname
    let img = "https://files.catbox.moe/c4hu3g.jpeg"
    let num = ["233268374753"]

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (num.includes(phoneNumber)) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
