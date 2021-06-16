const db = require('../baglanti');


const adresInsert = (req,res)=>{

    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO tbl_adres (adres,hesapId) values (?,?)',[req.body.adres,req.body.hesapId],(err,rows,field)=>{
            
            !err ? resolve(rows) : console.log(err);

        });
    });

}
const adresGetir = (req,res)=>{

    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_adres where hesapId = ?',[req.params.hesapId],(err,rows,field)=>{

            !err ? resolve(rows) : console.log(err);
        });
    });

}
const adresUpdate = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('update tbl_hesap set adres = ? where id = ?',[req.body.adres,req.params.hesapId],(err,rows,field)=>{

            !err ? resolve(rows) : console.log(err);
        });

    });

}
const adresSil = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM tbl_adres where id = ?',[req.params.id],(err,rows,field)=>{
            !err ? resolve(rows) : err;
        });

    });

}
const kayitliAdresGetir = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_hesap where id = ?',[req.params.id],(err,rows,field)=>{
            !err ? resolve(rows) : console.log(err);
        });
    });

}

module.exports = {
    adresInsert,
    adresGetir,
    adresUpdate,
    adresSil,
    kayitliAdresGetir
}