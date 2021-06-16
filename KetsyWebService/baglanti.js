const mysql = require('mysql');


let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Galicier56',
    database:'ketsy'
});


db.connect((err)=>{
    if(!err){
        console.log('MYSQL Bağlantısı başarılı');
    }
    else{
        console.log("MYSQL Bağlantısı başarısız");
    }


});

module.exports = db;