//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BvV2h5R09DaVp3MkZFeDh4bWJnMVZuNmpQSWNBNFY5VitwemltRU1XZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXdiRGdFN3VwS2lWbDFzOHI4VmNhM1hGU0t6bnVKelltR1p3aGNCNGUzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSzhmKzJyMWFtQks3MFdqWnFvRVJ5VU0vdmJvZnI0dng3ejhZbDVHOW5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWmMrc3prOUM3SmhIa0NIbG9iTVdrRTY3T2xtRHZhTU1DRDJDRVR6d2tzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLdFF5TEJmdi9Sak9PeUtEeVE3TkNldFdkOGR6ekRLSWxnelkrWmxWM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVxb2hRUXVzYVFwekZrcmRueXJWWGhINmpubXpJQ2pxVkpmRFprY08vUnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JNNmVaaWUvVEU4MEZMWUsrM2RKeWJEa2QrMnlqcTZwRG1ZdjBmOXdHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5rc20yYkxTT1RCMGthRXFKeTU0b2pHQ09taWxjYThwdkJGMTcxUi9qND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVtNEFmdFRpZVVIU1RMK1hCaWV3VzJpNjgydWZybEJOOW5TYkUzM0FCekNEdVJUYUk1YUFtVWVBOGhlbENxZnNUUU1ZYlJqeHVoVTUyaGxTY2lyL0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJXT0dOT3dmZjBPODhJUDBqNWhkK0pnekc1OVBhZ1c4ZnRUSXEzSHdQcExNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTk2NDMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlBNkUyQTE3Q0VEOTNENTJDMTNERDQ4OTJFNUQwRkYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3Mzk4NzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTk2NDMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEzNDgwMzBEQkYyQjZGRUNFRERENEY4NjgzRUIwM0UyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3Mzk4NzN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0NTk2NDMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5OTVBOUM3NzMyQTZEM0JDNzczRkEwMDQ0QTA4NjM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3Mzk4NzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpWQ2RsNjRSUjE2MlZyUEpkaEloV3ciLCJwaG9uZUlkIjoiZGE0OWY3NGQtZGQ3Zi00YjcwLWFkOTQtZTE0YmE5YjliMzYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhS0xFSk5MbTdGcnhtc0dQaUtSYWEyZkxPND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcDJjeVdoTWlRUXpRNGI5NnQ5OVlDSmY0cFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkNXSDlMWFIiLCJtZSI6eyJpZCI6Ijk0Nzg0NTk2NDMxOjU5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzQ5MDg4NDMzOTcyODA6NTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaVN6SlVCRU5MdG1jVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWWG91MWd4R0duWTJZcXczbUJDMTJxdXNtcDB3dlpqVnNpWTRvZUJyZkEwPSIsImFjY291bnRTaWduYXR1cmUiOiIrT3BRc25RUjZhUFp6bjUwYitBZlYzdmdUWGxwZWhmalY0SmdtMWhCT0RHTUcwSzdGVE83b3hPMFF2eDBzRjk1U0NPRXRCKzRxR0JmUTluTm5rTkRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVVhOTVJjeXhERGFyYWFyangrT2JpWFQ4MjRDd09JRmpqbFEzVDhFVWxTWUNWNHpNY1p3S3NSd2RVd3M5R0E0dTZJYW1qcy9yZzJKTFBwMmpMcFJoQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NDU5NjQzMTo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWVjZMdFlNUmhwMk5tS3NONWdRdGRxcnJKcWRNTDJZMWJJbU9LSGdhM3dOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3Mzk4NzEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDNhIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94750197110",
  PASSWORD: 
    process.env.PASSWORD || "81691074",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94762862143", "94741321391"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
