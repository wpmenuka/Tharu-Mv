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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpZT1JuZ0NDcXQxb0dJVG94UDl3N2NUR0doNU5GbFVQK0ZOc2xyTGEyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkJoM2d2bEVNNWhPem9pRm1JcGdKNngydmhTRngrVDVmYWdYUHViLzFHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQVIzZk9acm52ODBkVTBqTWhBVmwvNVk0NFdudDFUdStJazBZWVBlVFZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhYWdYbGtUZVZrRFl2N2RIeGI1dllFUVo5WThrSjBPR01LcHRpTWFUVW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBMW5JWDcvZzRybmQxRXNBRktSZlcrNnlOSExVaWRnenpPTDBucjdkM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZlZk1LbWpET2J6ZS9xYThmVklrVENVbDFidCtnbHRTeDVKdS9kREZjeVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZFOUpyN2FLVlUxODFXd0NJMHlJQU1ZWkdidlNoQUtualI0czJ6dGdGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5ZVEhPaTZvZWlkbFZwdzdBZUxFSXNMQ0NaQzF6OW1TRVZBWmtaR2h4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdlMEFPQm80YTZrZUh6SE9rTEZpMmduK1A4dStDZDFicEtzTGpyWFl3WGVpU2kvbzN6NDdzdklLSS9SemN3UmpTYjhxbm0rOGVORXVrdmpLSXRKQkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJJVmRCWW5KV1doYXNyTHBNSUNFNjFNOUh3UjNIMUl5a0RPdlFqNjA5a3VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUwMTk3MTEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3QTEwNDE3MTM4QjVGODM0Rjg0RDIwMkNGNEIwNjE3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTEwMjQ0ODh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iks1NXZRdXlrUWhXa0JHNTcyalZScmciLCJwaG9uZUlkIjoiNWQwOGIwOTUtMmQyYy00YWI0LTlmYzUtZWJjOTEwY2EzN2Q4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVqdDlQZHJxWXM1VVBtTmNodGtkTWNXTEFIND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvdnhHTG0ydmtZb3d3eUFXZXpuSUE1V0ZBMnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEVETDVSWVYiLCJtZSI6eyJpZCI6Ijk0NzUwMTk3MTEwOjU5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZpbG0gV29ybGQiLCJsaWQiOiIyNjQxNjY4NzkyNjQ4Njk6NTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeTU5NXdHRU5hRytzSUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0UlA4Z3BQY29WOVRqV3ZRSTkvZU53dGRkWFBWVzhzYWZ1VDc5NjlPWmwwPSIsImFjY291bnRTaWduYXR1cmUiOiJRV0FnSnEwOFh6bU9zK2owVVJjL1ZJZDBsTitNZ2M3SGJPQWxkaDJEcThDbmdUUnREQk9UUW9ZOE83SG9xZklteXRURzZoZlA5MHk2aFFBcWx5TEtBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNmlqTDJGN2JqWk96dEg2TjhTd2ZleE5EZGxRMmoyMmZ5QXlTS00ram9rcVhvTlhEMEowUXcrcGtRc1MxckJENWsyZXcvWWwzQktnbW5vcVczY2RoREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MDE5NzExMDo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlRVQvSUtUM0tGZlU0MXIwQ1BmM2pjTFhYVnoxVnZMR243aysvZXZUbVpkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEwMjQ0ODMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlVsIn0=",
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
