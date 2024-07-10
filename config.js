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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_55_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhyMVNsRnBWRGM1bnVoNFBtelVOMEJxUlpmUGIvMFZEQ1B1VVpiQ0VjRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDY5NDU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTE3RUQ4OTZFRDgzRjREMDhFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2Mzc3MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0Njk0NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNzRFQTUwMDk3NjVGQzMxMDE3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYzNzcyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1VFFOUENNOFRneVdld0VnT3NFOUpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4NzVmODQ5LThjOWYtNDlmNC04OGE1LTNlZTE5NDdiMjRjZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMjEsXG4gICAgICA3NSxcbiAgICAgIDk5LFxuICAgICAgMTM4LFxuICAgICAgMTUsXG4gICAgICA1MyxcbiAgICAgIDE5MixcbiAgICAgIDYzLFxuICAgICAgODcsXG4gICAgICAxOCxcbiAgICAgIDI0NCxcbiAgICAgIDIzOSxcbiAgICAgIDEyNSxcbiAgICAgIDExMixcbiAgICAgIDIxMixcbiAgICAgIDE3NyxcbiAgICAgIDQsXG4gICAgICAzMCxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMTI1LFxuICAgICAgNjQsXG4gICAgICA0NyxcbiAgICAgIDIwNCxcbiAgICAgIDE3OCxcbiAgICAgIDEwMixcbiAgICAgIDc5LFxuICAgICAgNTYsXG4gICAgICAzNSxcbiAgICAgIDIwMCxcbiAgICAgIDE5OCxcbiAgICAgIDgyLFxuICAgICAgMjMsXG4gICAgICA4NixcbiAgICAgIDM1LFxuICAgICAgMzEsXG4gICAgICAyMyxcbiAgICAgIDQ3LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbVNyYjRJRUpDeXU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVpVTgzclVWcE9IMmwrRmFkeE8yaWtxaG0zRlFXTG9aaVZRcmdwank2RHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQnFmcWRYSDNRZFJjL2lFdnBRUGhlaE5xSk9mWkh2cHMzcFpSTXVlckhRQlZtVkdWeCsrUTdEdVFIYjVUQzR6N2syajMydCtEMTdnZG5TQlZ3WXlNQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDdoVGlqa1FOSHhPS2ZvMm9zRVYwTklmU29CN01NejRJZlZrckZpNllVeW5pM1loaWdWNlBST0xqYlFUSHAzTG9OZlYyR3RLVFQxTFQvZE1MdTRTamc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTM0Njk0NTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjczNjAyNzM3OTA5OTYzOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiR2VuaXVzXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTM0Njk0NTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjM3NzE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3V4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdXguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2em9LNWc3YzlaMEJ1SmJNSlEveDd1bys1MVFUWUx5UW90ek05T1V3WXFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNzgyNDY3NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzNzcxNTI5NlwifSIKfQ=="  // PUT your SESSION_ID 


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
