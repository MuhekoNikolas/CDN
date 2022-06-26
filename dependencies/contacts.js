



dataStore = require("nedb")


contactsDB= new dataStore({filename:"./databases/contacts.json", timestampData:true})
contactsDB.loadDatabase()


function reWrite(){
  contactsDB.remove({},{multi:true})
    
    
  replitIcon = "https://media.discordapp.net/attachments/916795140943802368/980303829587337246/image0.jpg"
  discordBotIcon = "https://cdn.discordapp.com/attachments/916795140943802368/980305685399089252/IMG_0335.png"
  instagramIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
  joeBidenIcon ="https://media.discordapp.net/attachments/916795140943802368/980305685399089252/IMG_0335.png" // "https://images-ext-1.discordapp.net/external/7ry8_0ObkANZbGWR7tL4rq9hYN3pjA2wW8quX1yEinU/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/739799370907779092/98c599d8a4eb4da1d4933c45f4456f95.webp"
  discordPfp ="https://www.svgrepo.com/show/331368/discord-v2.svg" // "https://images-ext-1.discordapp.net/external/5E1X1NyA8jy7WDK4YNAifF7S39mY3yni3Y0BzhAY5lg/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/564452749425639483/499dba7f4169ec65c13b5af6f5c524f0.webp"
  
    
  joeBidenInvite = "https://discord.com/oauth2/authorize?client_id=739799370907779092&permissions=2134207679&scope=bot%20applications.commands"
  
  
  icons = [replitIcon, replitIcon, instagramIcon, discordPfp, joeBidenIcon]
    
  names = ["@3525Nikolas", "@joebidenbot", "@mxrningster", "@nikolipo#2300", "Joe Biden"]
    
  urls = ["https://replit.com/@3525Nikolas", "https://replit.com/@joebidenbot", "https://www.instagram.com/mxrningster/",  "https://discord.gg/program", joeBidenInvite]
    
  types = ["replit", "replit", "instagram", "discord", "discord bot"]
    
  
  for(let x=0; x<icons.length; x++){
    obj = {
      name: names[x],
      icon: icons[x],
      url: urls[x],
      type: types[x]
    }
    
      
    contactsDB.insert(obj)
      
  }
  console.log("updated contacts")
    
}


module.exports= {
  reWrite:reWrite
}