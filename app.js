// require/import the express module(s)

// https://agile-citadel-53491.herokuapp.com/

const express = require('express'); 
const queries = require("./queries");
const database = require("./database-connection");
const bodyParser = require('body-parser');
const cors = require('cors');


// instantiate an instance of the express class as 'app'
const app = express();              

app.use(bodyParser.json());
app.use(cors());

// set a local port number for development
const localport = 3030;

// use the providers (heroku) port variable if there is one (production)
// otherwise use our local port
const port = process.env.PORT || localport;

// create a base route to direct root GET requests to
app.get('/', (request, response, next) => response.send('Hello There'));    


app.get("/api/", (request, response, next) => {
  queries
    .list()
    .then(scores => { response.json({ scores }); })
    .catch(next);
});

app.get("/api/:id", (request, response, next) => {
  queries
    .read('id', request.params.id)
    .then(score => { response.json({score}); })
    .catch(next);
});

app.post("/api/", (request, response, next) => {
  queries.create(request.body).then(score => {
    response.status(201).json({score: score});
  }).catch(next);
});


app.delete("/api/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({deleted: true});
  }).catch(next);
});





// tell the Express app to listen for requests on our port      
app.listen(port, () => console.log(`Server is now listening on port ${port}`));