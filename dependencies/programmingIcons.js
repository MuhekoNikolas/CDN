



dataStore = require("nedb")


iconsDB= new dataStore({filename:"./databases/programmingIcons.json", timestampData:true})
iconsDB.loadDatabase()



function updateProgrammingIcons(){
  iconsDB.remove({},{multi:true})

  javascriptIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  javascriptName = "JavaScript"

  pythonIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  pythonName = "Python"

  htmlIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  htmlName = "HTML5"

  cssIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  cssName = "CSS3"

  nodeIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  nodeName = "Node JS"

  expressIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  expressName = "Express JS"

  flaskIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  flaskName = "Flask"

  p5jsIcon= "https://media.discordapp.net/attachments/916795140943802368/988420211646537778/icon-256x256-removebg-preview.png"
  p5jsName = "p5js"

  sqlIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
  sqlName = "sql database"

  nedbIcon= "https://media.discordapp.net/attachments/916795140943802368/988402562912878632/IMG_0375.png"
  nedbName = "nedb database"

  icons = [javascriptIcon, pythonIcon, htmlIcon, cssIcon, nodeIcon, expressIcon, flaskIcon, p5jsIcon, sqlIcon, nedbIcon]
  
  names = [javascriptName, pythonName, htmlName, cssName, nodeName, expressName, flaskName, p5jsName, sqlName, nedbName]

  

  for(let name of names){
    ind = names.indexOf(name)
    obj = {
      name:names[ind],
      icon: icons[ind]
    }
    iconsDB.insert(obj)
    
    
  }
  
  console.log("updated programming icons")
  
}

module.exports = {
  updateProgrammingIcons:updateProgrammingIcons
}