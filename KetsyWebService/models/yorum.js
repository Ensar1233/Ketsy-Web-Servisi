const db = require('../baglanti');

const dbGetTekYorum= (req,res)=>{

    return new Promise((resolve,reject)=>{
        console.log("tek yorum: "+req.params.id);
        db.query('SELECT * FROM tbl_yorumm where id = (SELECT MAX(id) from tbl_yorumm where hesapId = ?)',[req.params.id],(err,rows,field)=>{
            !err ? resolve(rows):console.log(err);            
        })
        
    });
}

const dbGetYorum = (req,res)=>{
    console.log(req.params.hesapId);
    return new Promise((resolve,reject)=>{

        db.query('SELECT profilURL,ad,soyad,kullaniciAdi,yorum FROM tbl_yorumm,tbl_hesap where tbl_yorumm.yapanHesap =tbl_hesap.id and tbl_yorumm.hesapId = ?',[req.params.hesapId],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);

        });
        
    });

}

const dbYorumInsert = (req,res)=>{
    console.log(req.body.yorum);
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO tbl_yorumm (yorum,hesapId,yapanHesap) values (?,?,?)',[req.body.yorum,req.body.hesapId,req.body.yapanHesap],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);

        });

    });

} 

module.exports = {
    dbGetYorum,
    dbYorumInsert,
    dbGetTekYorum
}