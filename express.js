const express = require('express'); // Import Express
const app = express(); // Create an instance of Express //,,Now app has all powers of Express.

// `Middleware`:: 
 app.use(function(req, res,next){
    console.log(`Middleware working yoyo`);
    next();// next() is used to forword the request other-wise request stuck hear, so no responce comes!.
  }) // Parse incoming JSON requests

//   2nd middleware::
 app.use(function(req,res,next){
    console.log("middleware 2 working!!!!");
    next();
  }) // Parse incoming JSON requests

// Routes
// 1~~~~
app.get('/', (req, res) => {
    res.send(' Home page!'); // Respond with a simple message
    return next(new Error("somthing went wrong Home page!"));
});

// 2~~~~::errorHandling::
app.get('/about', (req, res, next) => {
    res.send(' About page!'); // Respond with a simple message
    return next(new Error("somthing went wrong about page!"));
});


// 3~~~~
app.get('/about/profile', (req, res,next) => {
    res.send(' Profile page!'); // Respond with a simple message
    return next(new Error("somthing went wrong on profile page!"));
});

// divyansh-profile
// app.get('/about/profile/:usermane', (req, res,next) => {
//     res.send(`${user:1} profile page`); // Respond with a simple message
//     return next(new Error("somthing went wrong on profile page!"));
// });
// // vipransh-profile
// app.get('/about/profile/:username', (req, res,next) => {
//     res.send(`${user:2} profile page`);// Respond with a simple message
//     return next(new Error("somthing went wrong on profile page!"));
// });
// // kshitiz-profile
// app.get('/about/profile/:usermane', (req, res,next) => {
//     res.send(`${user:3} profile page`); // Respond with a simple message
//     return next(new Error("somthing went wrong on profile page!"));
// });

// DYNAMIC~ROUTING
app.get('/about/profile/:username', (req, res,next) => {
    res.send(`${req.params.username} profile page`); // Respond with a simple message
    return next(new Error(`somthing went wrong on ${req.params.username}  profile page!`)); // ~`ErrorHandling`~ 
});

// ErrorHandler:: provided by express.js
app.use((err,req, res, next)=>{
    console.error(err.message);
    res.status(500).send('Something went double-r o n g');
    
})


 
// Start the server
const PORT = 3000; // Define the port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server status
});
 