var handler = async (m, { conn, args }) => {
let group = m.chat
const pp = await conn.profilePictureUrl(group, 'image').catch((_) => 'https://o.uguu.se/MJVbgdQD.jpg')
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
let message = `\t*⌁☍꒷₊˚ Link del Grupo ꒷₊˚⌁☍*\n\n> \`Link:\` ${link}`
await conn.sendMessage(group, { image: { url: pp }, caption: message })
}

handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'enlace']
handler.group = true
handler.botAdmin = true

export default handler