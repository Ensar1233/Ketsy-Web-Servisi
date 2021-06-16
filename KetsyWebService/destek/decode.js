const fs = require('fs');


const resimYukle = (base64Image,dosyaIsim)=>{
    let decodedImage = new Buffer(base64Image, 'base64').toString('binary');

     fs.writeFile(dosyaIsim, decodedImage, 'binary', function(err) {
         console.log(err);
     });
}


module.exports = {
    resimYukle
}