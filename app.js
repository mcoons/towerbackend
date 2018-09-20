// require/import the express module(s)
const express = require('express'); 
const queries = require("./queries");
const database = require("./database-connection");


// instantiate an instance of the express class as 'app'
const app = express();              

// set a local port number for development
const localport = 3030;

// use the providers (heroku) port variable if there is one (production)
// otherwise use our local port
const port = process.env.port || localport;

// create a base route to direct root GET requests to
app.get('/', (request, response, next) => response.send('Hello There'));    


app.get("/api/", (request, response, next) => {
    queries
      .list()
      .then(students => { response.json({ students }); })
      .catch(next);
  });
  
  app.get("/api/id/:id", (request, response, next) => {
    queries
      .read('id', request.params.id)
      .then(score => { response.json({score}); })
      .catch(next);
  });
  




// tell the Express app to listen for requests on our port      
app.listen(port, () => console.log(`Server is now listening on port ${port}`));