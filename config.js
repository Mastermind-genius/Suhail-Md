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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_10_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUU3VkxFZXJvdE5vWHNKdzFiOFdUR3AvRWtvSkFOQlo1TmNFb2F4SkdXMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0Njk0NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMDk3RjlGMzJGNDRERDIxNDkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk0MzgzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzQ2OTQ1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFQkE5MUE2MDUzNDFCQzREQkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTQzODMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDY5NDU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTY5MzVBODA1RkM5QUMwQzQ4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5NDM4MzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibWQtT25oNkVUM1dnX3ZHT3pNd0dsUVwiLFxuICBcInBob25lSWRcIjogXCI5NDlkMDFmNC1kOThkLTQ3ZTctOTdkYS0zNTdjMTg5YjZlOWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTg3LFxuICAgICAgMzksXG4gICAgICAxOSxcbiAgICAgIDIyNSxcbiAgICAgIDkzLFxuICAgICAgMTMsXG4gICAgICAxNTEsXG4gICAgICAxNDUsXG4gICAgICAxNzQsXG4gICAgICA3LFxuICAgICAgNjUsXG4gICAgICA1NSxcbiAgICAgIDEwNixcbiAgICAgIDk0LFxuICAgICAgMjE3LFxuICAgICAgMTM2LFxuICAgICAgMTE3LFxuICAgICAgNDAsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDExOSxcbiAgICAgIDEwOSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMCxcbiAgICAgIDE3MyxcbiAgICAgIDI1NCxcbiAgICAgIDE0NSxcbiAgICAgIDExLFxuICAgICAgMjI5LFxuICAgICAgOSxcbiAgICAgIDE3NSxcbiAgICAgIDEyMSxcbiAgICAgIDgyLFxuICAgICAgMjI4LFxuICAgICAgMjMxLFxuICAgICAgMTg3LFxuICAgICAgMzcsXG4gICAgICA1NixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IOXUrOE5FSkdGa2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZWlVODNyVVZwT0gybCtGYWR4TzJpa3FobTNGUVdMb1ppVlFyZ3BqeTZEdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSSnRPUmxtN3B5eXJ5dVVJNDJMTnBFL054YlR4Ti8yZ21zMGdNcjFmb0ZwUlRhNjJFUlI3cGdTQnRWZUw3azNnUHNVRGFBRm5yM3NTSVFXaTI1Q29Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNRnV3OXRHWnJGUDYvUHVrYWRDZ2QzYnBteC9IMU54MHU3OVZuY3R6MlVqaXV5R1BWV0d6M2FmTFVDcldYNGcybUNxNDAyWndUalV4eFgxNDkyQWJBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzQ2OTQ1NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzM2MDI3Mzc5MDk5NjM6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJHZW5pdXNcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzQ2OTQ1NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDM4MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNY25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1jbi5qc29uIjogIntcImtleURhdGFcIjpcIk5zQ3lUYm5JMGtsK3lUL3BRaGtCVWJOYWRjU01LYmtNU2VET1JNY05LOWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcyMzQyNzUyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQzODI4NzAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mastermind",


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
