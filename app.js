const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

var upload = multer({dest: 'uploads/'});
app.use(express.static(__dirname + '/script'));

app.post('/profile', upload.single('myFile'), function (req, res, next) {
  var theFile = req.file;
  if(theFile===null) {
    console.log("Error: the input file is null");
  } else {
    //console.log("The file is NOT NULL");
    //console.log(req.file.path);
    var s = req.file.size;
    res.json({size: s});
  }
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8085, function(){
	console.log('filemetadata app listening on port 8085');
});
