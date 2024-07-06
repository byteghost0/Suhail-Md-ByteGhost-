const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "0751 645 671" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0751 645 671";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_57_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImx4L3RHUzBORFUzYnduODRyOVJpa2dGdWxXS1Z2MndHY01PdHlIRVBVcGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NTE2NDU2NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZERDI1NzI3NEYxODZGQUQ5RkMyMzk4RTg0MEUwM0Q4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI1MjYyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzUxNjQ1NjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQUM0M0UyRDM2MTJDRTY0NjdEMzJERTExNUZCRTcxRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNTI2MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVdoQ2hnWHhSaXlPbnJIMThrZGVQQVwiLFxuICBcInBob25lSWRcIjogXCI2NDFkYzZiZC02NTRiLTQyZmQtYjE2MS0yNTI1ZGY0NWE1MzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICA2MyxcbiAgICAgIDE4MCxcbiAgICAgIDQ5LFxuICAgICAgMTMwLFxuICAgICAgNzAsXG4gICAgICAyMzcsXG4gICAgICA4NCxcbiAgICAgIDgwLFxuICAgICAgMTE5LFxuICAgICAgNDUsXG4gICAgICAxMjUsXG4gICAgICAxMTEsXG4gICAgICAyMDMsXG4gICAgICAyMDUsXG4gICAgICAyNDIsXG4gICAgICAxNTYsXG4gICAgICA0LFxuICAgICAgNzYsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMzAsXG4gICAgICAxNTAsXG4gICAgICAyNSxcbiAgICAgIDE2NCxcbiAgICAgIDEyMyxcbiAgICAgIDE1OSxcbiAgICAgIDMsXG4gICAgICA5NSxcbiAgICAgIDE5MSxcbiAgICAgIDIzOCxcbiAgICAgIDE0NyxcbiAgICAgIDI1LFxuICAgICAgMjM0LFxuICAgICAgMjQ4LFxuICAgICAgODYsXG4gICAgICAxNDQsXG4gICAgICAzNyxcbiAgICAgIDE1OSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNDJZTEVLV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NTE2NDU2NzE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxMzYzOTgzNjc5NTUyOjEwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJ5dGVHaG9zdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0phaytiWUdFTXZ4bzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlNwWktBaDVudURTcTN3dis0ZmxZT0NEbTR4OFl6VnYvQlk2blJJNnVVaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTNFBneXRtanhHTStZdXNaTUVhWSswMkg2a0QvcTFJbG5Kd1dZdHIzYTRUcVhaaU9KVTdCNm9lV21Vc1pLcTRBSGlQRHZUaHN5R0xnZElvQ0V6ZmVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMcVlPbng4MTBjeWxZU2gwbzBrZTU3ZmM5ZlZCOFIra0toY0tjQmwxTjhCam1mN0xuR3pBRnFLem9YcXUxQXVKemFMT2tlT21BUXpvYUNRVTNmMDFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0MDc1MTY0NTY3MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1MjYyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdXZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1dmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3hjS096NldLSEhwMnRJajZmcVhkSjQzbUVSelYyM2pFMnZkbGVCUEJqRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzI1ODQ2MDM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNTI2MjY4NzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ByteGhost",
  ownername:process.env.OWNER_NAME|| "ByteGhost",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
