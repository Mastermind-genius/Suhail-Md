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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263786023973";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVGdnJBTkJqSGEzNVNhOHBKbFVNL1BFZ1lGcFRKSW81MWlML3Y4YWsxYlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDY5NDU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUY0NEVDMTBENDdFRTA2QUY3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4OTMyNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0Njk0NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNkRERjg4OTJDMThCRjgzRjYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDg5MzI1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4Sl85WDhoZ1M5aXQyVmZOOElEXzZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlMjdkMDZkLTZhMDktNDg1Ny1iYjg3LTQwNGQ1NjY1NWFjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA5MyxcbiAgICAgIDExMCxcbiAgICAgIDEwNSxcbiAgICAgIDE4OSxcbiAgICAgIDI1MSxcbiAgICAgIDIzMyxcbiAgICAgIDM1LFxuICAgICAgMTc2LFxuICAgICAgMTA5LFxuICAgICAgNzYsXG4gICAgICAxMDIsXG4gICAgICAxNzcsXG4gICAgICAyMTMsXG4gICAgICAxMjQsXG4gICAgICAxOTQsXG4gICAgICAxMzQsXG4gICAgICA0LFxuICAgICAgMTU3LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDIxOSxcbiAgICAgIDIxNixcbiAgICAgIDQ2LFxuICAgICAgOTUsXG4gICAgICAxOTMsXG4gICAgICA5MCxcbiAgICAgIDI0NyxcbiAgICAgIDE4MCxcbiAgICAgIDEzMyxcbiAgICAgIDIwOCxcbiAgICAgIDI0MSxcbiAgICAgIDIxMCxcbiAgICAgIDE4NyxcbiAgICAgIDUsXG4gICAgICA4LFxuICAgICAgMTcyLFxuICAgICAgMTcxLFxuICAgICAgNzQsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMjQxdUlGRUwvK3lyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVpVTgzclVWcE9IMmwrRmFkeE8yaWtxaG0zRlFXTG9aaVZRcmdwank2RHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmcyWktCaURUVlMyU2xUc0U5dDd5UktwUEJ2U2Y0R0ZSR2NiODFQazhmRUFERHFFOGllN0txaDFIMWNZUUJNSTBmV3gvZE84blh6dnNsZU9Temt0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR05GNlo5Z1VqYXEzek1paW1jQVg1L0lSMUNqaDlvM0N5TzRrQys0aXBIanljS2hlRTVybVhTTFV6SmVyNld2SkNSdElKMGlIQUIwS3RDSGNyU3dQQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTM0Njk0NTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczNjAyNzM3OTA5OTYzOjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR2VuaXVzXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTM0Njk0NTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODkzMjUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3Q5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPdDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNalA1VzN0ZGpINVZFV3A2cVpOQTl4UWVVWHNGc0Q1KzFzOGVpRElqcitJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDkxMTQ0OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg5MzI1MDcyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mastemind",


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
