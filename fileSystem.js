// const { log } = require('node:console');
// const { error, log } = require('node:console');
// const fs = require('node:fs/promises');
// const { callbackify } = require('node:util');

// fs.writeFile("index.txt", "hi I create this file with using fs module",(err) => {
//     if (err) {
//         console.log("error");
        
//     }else console.log("error");  
// })

// APPENDFILE
// fs.appendFile("index.txt", "hi I append this file using APPENDFILE fs module",(err) => {
//     if (err) {
//         console.log("error");
        
//     }else console.log("error");
    
    
// })

// 

// fs.rename("express.txt", "express.js",(err) => {
//     if (err) console.log("error");
        
//     else console.log("done");
        
// })

// delete file


// copyfile

// fs.copyFile("index.txt", /copy/index.txt, (err) => {
//     if (err) console.log("Error:", err.message);
//     else console.log("File copied successfully!");
// });
    


// Unlink

// fs.unlink("./index.txt",(err)=>{
// if (err) {
//     console.log("error:".err.message);
    
// }else{
//     console.log("done");
    
// }
    
// })


// REMOVE DIRECTORY

// fs.rmdir("./copy", { recursive: true }, (err) => {
//     if (err) {
//         console.log("Directory create karte waqt error:", err);
//     } 
//             else console.log("File successfully copy ho gayi!");
      
    
// });


// create folders~~
// fs.mkdir("./copy", { recursive: true }, (err) => {
//     if (err) {
//         console.log("Directory create karte waqt error:", err);
//     } 
//             else console.log("File successfully copy ho gayi!");
      
    
// });


// READ FILE

// fs.readlink("./","script.js", (err) => {
//     if (err) console.log("Directory create karte waqt error:", err.message)
//         else console.log("ile successfully copy ho gayi!");
        
    
// } )