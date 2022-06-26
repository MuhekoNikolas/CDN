


express = require("express")
axios = require("axios")
fs = require("fs")
dataStore = require("nedb")

contactsUpdate = require("./dependencies/contacts.js")
iconsUpdating = require("./dependencies/programmingIcons.js")

contactsDB= new dataStore({filename:"./databases/contacts.json", timestampData:true})
contactsDB.loadDatabase()

iconsDB= new dataStore({filename:"./databases/programmingIcons.json", timestampData:true})
iconsDB.loadDatabase()

//contactsUpdate.reWrite()
//iconsUpdating.updateProgrammingIcons()

app = express()
app.use(express.json())

//console.clear()


function removeCors(req,resp,next){

  resp.set({
    "Access-Control-Allow-Origin":false
  })
  
  next()
}

app.get("/p51", removeCors, (req,resp)=>{
  resp.sendFile(__dirname+"/p5js1.js")
  
})


app.get("/p52", removeCors, (req,resp)=>{
  resp.sendFile(__dirname+"/p5js2.js")
  
})

app.get("/p53", removeCors, (req,resp)=>{
  resp.sendFile(__dirname+"/p5js3.js")
  
})


app.get("/matter1", removeCors, (req,resp)=>{
  resp.sendFile(__dirname+"/matter1.js")
  
})


app.get("/qoutes/programming", removeCors, (req,resp)=>{

  fs.readFile("programmingQoutes.json", (err, data)=>{
    data = JSON.stringify(JSON.parse(data))

    resp.send(data)
   
  })
  
})


app.get("/portfolio/api/contacts.json", removeCors, (req,resp)=>{
  contactsDB.find({}).sort({createdAt:1}).exec((err,doc)=>{
    resp.json(JSON.stringify(doc))
  })
})

app.get("/portfolio/api/pIcons.json", removeCors, (req,resp)=>{
  iconsDB.loadDatabase()
  iconsDB.find({}).sort({name:1}).exec((err,doc)=>{
    resp.json(JSON.stringify(doc))
  })
})


app.listen(8080)
/*/

app.get("/portfolio/api/programmingIcons.json", removeCors, (req,resp)=>{
  iconsDB.find({}).sort({name:1}).exec((err,doc)=>{
    resp.json(JSON.stringify(doc))
    console.log(doc)
  })
})/*/




