// by dv.shadow - https://github.com/Yuji-XDev
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { conn }) => {
  const name = 'Arceus Whois ⚡ ';
  const numCreador = '51936994155';
  const empresa = 'Arceus Whois ⚡.';
  const about = '💫 Developer Whois';
  const correo = 'yallico2024@gmail.com';
  const web = 'https://Instagram.com/whois.yallico';
  const direccion = 'Tokyo, Japón 🇯🇵';
  const fotoPerfil = 'https://qu.ax/fMxXt.jpg';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa}
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:${correo}
URL:${web}
NOTE:${about}
ADR:;;${direccion};;;;
X-ABADR:ES
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();

  const contactMessage = {
    displayName: name,
    vcard
  };
  m.react('☁️');
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [contactMessage]
    },
    contextInfo: {
    mentionedJid: [m.sender],
      externalAdReply: {
        title: '📌 ƈσɳƚαƈƚσ ԃҽ ɱι ƈɾҽαԃσɾ •💫',
        body: '',
        mediaType: 1,
        thumbnailUrl: fotoPerfil,
        renderLargerThumbnail: true,
        sourceUrl: web
      }
    }
  }, { quoted: fkontak });
};

handler.help = ['creador'];
handler.tags = ['info'];
handler.command = ['creador', 'creator', 'owner'];
export default handler;