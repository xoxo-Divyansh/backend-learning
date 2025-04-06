!!!MERN- mongoDB, Express, React, Node!!

:::〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰:::
:::~~~~~~~~  ~~~~~~~~~~~~~   ~~~~~:::
|  |  |   🔴fILE STRUCTURE.  |  |  |
:::~~~~~     ~~~~~~~~~~~~~  ~~~~~~:::
:::〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰:::

  
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
|  |  |    🔴package.json   |  |  |
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::

 ``it is a DISCRIPTION of our Project.``
 discritpions for =>

🔹`Scripts`: running scripts
🔹`Dependencies`: Packages dependencies and also dependencies for packages.   
🔹`devDependencies`: packages which are used in developement.
🔹`Project-name`:'name of our project-folder'
🔹`licencing`:Isc/other
🔹`vesrsion`: 1.0.0
🔹~~~~~~~~~~~
🔹~~~~~~~~~~~

:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
| | |  🔴package-lock.json   | | |
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::


<!-- //xyz... -->


:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
|   |   |   🔴Express.js  |   |   |
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::

//Express is a FRAMEWORK --->   it gives a {rigid} flow of work.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
::\\Erpress js manages everything form receving the reguest and giving the response.\\::
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

for ROUTING {EXPRESS} by use node-HTTP module
📌EXPRESS js use node HTTP module to create a SERVER 
📌
📌



📍📍📍`// BOILER-PLATE~~ :CODE:`📍📍📍
 
<!--      
    const { request } = require("express");
const app = express()

app.get('/',function(req, res,next) {
    res.send('hellow world')    
})

app.listen(3000);
-->
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🔹                 🔹
🔹  💫REQUEST: REQ~ contains data`contains all the data form user-side DATA like --> location, device info and oter things related to user`🔹 
🔹  💫RESPONSE:RES~ contains control to circulate(req-DATA) to server`it contains all controls required for sanding-back responces to server`🔹 
🔹  💫NEXT    :  `next is a MIDDLEWARE`🔹 
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹

:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
|  |  |     🔴SERVER   |  |  |
:::~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:::
📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍
📍📍~NODE.js alows to make a server. 
📍📍~EXORESS.js use NODE behind the seen ot create server.
📍📍`Why Express.js is used`- NODE HTTP moduele is very difficult to use (for creating server),Express.js helps to ease the code process.    
📍📍`routing`: routing is used to create different visits like 🌌Home/profile/about/contect+us/
📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍📍

<!-- routing and  dynamic routing -->

🔹setting-up ejs for Html 

1) inistall EJS
     init i ejs


2) config.ejs
 app.set("view-engine","ejs")

