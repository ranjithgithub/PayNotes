const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors')
const fs = require("fs")

const app = express();
const port = process.env.PORT || 5000;


// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// Then pass them to cors:
app.use(cors(corsOptions));

// API calls
app.post('/api/submit', (req, res) => {
  let reponse = {}
  const params = req.body
  if(params && params.username === 'user@example.com' && params.password === '1234') {
    reponse.ok = true
  } else {
    reponse = {ok: false, message: 'Invalid username or password'}
  }
  res.send(reponse)
});

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getJson(file){
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}



app.get('/api/get_cards', (req, res) => {
  res.send(getJson('notesData.json'));
});

app.post('/api/get_note', (req, res) => {
  console.log('in get_note')
  let respose = getJson('notesData.json').notes.find(note => note.id === req.body.id)
  res.send(respose);
});

app.post('/api/note_edit', (req, res) => {
  function callback(){
    res.send({ok: true})
  }
  let response
  var filepath = __dirname + '/' + 'notesData.json';
  fs.readFile(filepath, 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
      res.send({ok: false})
  } else {
  obj = JSON.parse(data); //now it an object
  Math.floor(Math.random() * 100)
  if(req.body.id) {
    let upatedNotes = obj.notes.map(note =>  { if(note.id == req.body.id) {
      note.title = req.body.title
      note.content = req.body.content
      return note
    } else {
      return note
    }
  })
    obj.notes = upatedNotes
  } else {
     let note = {}
     note.id = Math.floor(Math.random() * 100)
     note.title = req.body.title
     note.content = req.body.content
     obj.notes.push(note)
  }
  
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile(filepath, json, 'utf8', callback); // write it back 
  }});
});

app.post('/api/note_delete', (req, res) => {
  function callback(){
    res.send({id: req.body.id})
  }
  let response
  var filepath = __dirname + '/' + 'notesData.json';
  fs.readFile(filepath, 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
      res.send({ok: false})
  } else {
  obj = JSON.parse(data); //now it an object
  let upatedNotes = obj.notes.filter(note =>  { if(note.id !== req.body.id) {
    return note
  } 
})
  obj.notes = upatedNotes
  json = JSON.stringify(obj); //convert it back to json
  fs.writeFile(filepath, json, 'utf8', callback); // write it back 
  }});
});




if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));