import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

global.botNumber = "" 
global.owner = ["51936994155", "59161601787", "529813279747", "56931300864", "573042479614", "51993800613"]
global.suittag = ["5193699455"] 
global.prems = []


global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2 • Latest"
global.nameqr = "Arceus Whois"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.kanekiAIJadibts = true


global.botname = "𖹭  ׄ  ְ 🌱 Arceus Whois ✩"
global.textbot = "Arceus - Dev Whois"
global.dev = "© Developer Whois 🌱"
global.author = "@Whois.yallico"
global.etiqueta = "Whois Yallico 🌱"
global.currency = "soles"
global.banner = "https://o.uguu.se/MJVbgdQD.jpg"
global.icono = "https://o.uguu.se/MJVbgdQD.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r?mode=wwc"
global.community = "https://chat.whatsapp.com/Fi6FHZ8VSGnAT7CKJkcd9r?mode=wwc"
global.channel = "https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m"
global.github = "https://github.com"
global.gmail = "yallico2024@gmail.com"
global.ch = {
ch1: "120363419947391620@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'shadow.xyz' },
stellar: { url: "https://api.stellarwa.xyz", key: "this-xyz"},
light: { url: "https://api--shadowcorexyz.replit.app", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'settings'"))
import(`${file}?update=${Date.now()}`)
})
