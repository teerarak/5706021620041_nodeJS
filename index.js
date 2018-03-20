const express = require('express')
const app = express()
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyAJnyDh8nfaFCBPXa95n8URPxLSIC4qty8",
  authDomain: "midtermselectedforis.firebaseapp.com",
  databaseURL: "https://midtermselectedforis.firebaseio.com",
  projectId: "midtermselectedforis",
  storageBucket: "midtermselectedforis.appspot.com",
  messagingSenderId: "836879259519"
};
firebase.initializeApp(config)
var database = firebase.database()
app.get('/getData', async (req,res) => {
  let data = []
  await database.ref('Highway').once('value').then(snapshot => {
      data = snapshot.val()
  })
  res.send(data)
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
