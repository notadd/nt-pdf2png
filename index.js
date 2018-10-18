var PDFImage = require("pdf-image").PDFImage;
const fs = require('fs');
var express = require('express');
var app = express();

app.get(/(.*\.pdf)\/([0-9]+).png$/i, function (req, res) {
    var pdfPath = req.params[0];
    var pageNumber = req.params[1];

    var PDFImage = require("pdf-image").PDFImage;
    var pdfImage = new PDFImage(process.cwd()+pdfPath,{
      outputDirectory:"/tmp"
    });

    pdfImage.convertPage(pageNumber).then(function (imagePath) {
      res.sendFile(imagePath);
    }, function (err) {
      res.send(err, 500);
    });
  });

  app.listen(3000, function () {
    console.log('listening on port 3000!');
  });