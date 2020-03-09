const express = require('express');
const fs = require('fs');

const router = express.Router();
const db = require('./miniDb');
const Menu = require('./menu');

function getFile(path, afterFond){
  var content;
  fs.readFile(path, function read(err, data) {
    if (err) {  throw err; }
    content = data.toString();
    afterFond(content);
});
 }

const viewsPath = 'views/';

router.get('/', (req, res) => {
  getFile(viewsPath + "index.html", (file) => { res.send(file); });
});
router.get('/gallery', (req, res) => {
  getFile(viewsPath + "index.html", (file) => { res.send(file); });
});

router.post('/getVociMenu', (req, res) => {
  let getVociMenu = new Promise((resolve, reject) => {
    let vociMenu;
      fs.readdir( `public/img`, (err, folderNames) => {
        console.log(folderNames);
        vociMenu = folderNames;
        resolve(vociMenu);
      });
  });
  getVociMenu.then((vociMenu) => {
    let menuList = JSON.stringify(vociMenu);
    res.json({menuList});
  });
});

router.post('/getArgument', (req, res) => {
  const { arg } = req.body;
  console.log({arg});
  
  let getArgPieces = new Promise((resolve, reject) => {
      fs.readFile( `public/img/${arg}/${arg}.html`, (err, data) => {
        if(err){ console.log(err); }
        console.log('data: ' + data);
        
        resolve(data.toString());
      });
  });
  getArgPieces.then((data) => {
    res.json({data});
  });
});

router.post('/getSubArgument', async (req, res) => {
  const argument = req.body.arg;
  const tosend = {};
  fs.readFile( `public/img/mostre/${argument}/testo.txt`, (err, data) => {
    if(err){ console.log(err); }
      tosend.testo = data.toString();
      fs.readdir(( `public/img/mostre/${argument}/download`), (err, data) => {
        if(err){ console.log(err); }
        tosend.download = data.map((item) => { return {name: item, path: `img/mostre/${argument}/download/${item}`} });
        fs.readdir(( `public/img/mostre/${argument}/gallery`), (err, data) => {
          if(err){ console.log(err); }
          tosend.galleryPath = `public/img/mostre/${argument}/gallery`;
          tosend.gallery = data.map((item) => { return `img/mostre/${argument}/gallery/${item}`; });
          tosend.mainPic = `img/mostre/${argument}/mainPicture.jpg`
          res.json({tosend});
        });
      });
  });

});

router.post('/getSubArgument', async (req, res) => {
  const argument = req.body.arg;
  const tosend = {};
  fs.readFile( `public/img/mostre/${argument}/testo.txt`, (err, data) => {
    if(err){ console.log(err); }
      tosend.testo = data.toString();
      fs.readdir(( `public/img/mostre/${argument}/download`), (err, data) => {
        if(err){ console.log(err); }
        tosend.download = data;
        fs.readdir(( `public/img/mostre/${argument}/gallery`), (err, data) => {
          if(err){ console.log(err); }
          tosend.galleryPath = `public/img/mostre/${argument}/gallery`;
          tosend.gallery = data.map((item) => { return `img/mostre/${argument}/gallery/${item}`; });
          tosend.mainPic = `img/mostre/${argument}/mainPicture.jpg`
          res.json({tosend});
        });
      });
  });

});

router.post('/getImgList', async (req, res) => {
  const galleryFolder = req.body.galleryFolder;
  fs.readdir(galleryFolder, (err, data) => {
    res.json({data});
  });
});





/*
function sendToRender(toRender){
  router.post('/render', (req, res) => {
    const { test } = req.body;
    res.json({ toRender });
  });
}

router.post('/ajax/test', (req, res) => {
  const { test } = req.body;
  console.log(test);
  res.json({ output: test });
});

router.post('/getDb', (req, res) => {
  const { test } = req.body;
  res.json({ output: db });
});
router.post('/give/:voceMenu', (req, res) => {
  let tipo = req.params.voceMenu;
  const { test } = req.body;

  switch (tipo) {
    case 'exhibitions':
    console.log(tipo);
    let meat = '';
    db[0].meat.forEach((item) => {
      meat += `<p onclick="$('.draggable').css({'z-index': '10'});creaWind('${item.title}')">${item.title}</p>`
    });
    res.json({output: { meat }});
      break;
      case 'about':
      res.json({ output: db[1] });
      break;
    default:
    db[0].meat.forEach((exhib) => {
      if(exhib.title == tipo){
        let meat =  "<h1>" + exhib.title + "</h1>" + exhib.locandina + "<p>" + exhib.text+ "</p>";
        exhib.images.forEach((img) => {
          meat += `<p class="images">${img}</p>`;
        });

        res.json({ output: { meat } });
      }
      console.log(exhib.title);
    });
  }
});

*/

module.exports = router;
