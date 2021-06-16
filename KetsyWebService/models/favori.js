const db = require('../baglanti');


const dbFavoriInsert = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO tbl_favoriler (ilanId,hesapId) values(?,?)',[req.body.ilanId,req.body.hesapId],(err,rows,field)=>{
            resolve(rows);

        });    
    })

}

const dbFavoriSil = (req,res)=>{
    console.log("favori sil: ",req.params.ilanId);
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM tbl_favoriler where ilanId = ?',[req.params.ilanId],(err,rows,field)=>{

            resolve(rows);
        });

    });

}
const getFavori = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_favoriler',(err,rows,field)=>{

            resolve(rows);
        });
    })

}
const getFavoriHesapId = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT tbl_favoriler.id,ilanId,tbl_favoriler.hesapId,ilanURL,ilanAd,odemeTuru,yildiz,fiyat FROM tbl_favoriler,tbl_ilan where tbl_favoriler.ilanId = tbl_ilan.id and tbl_favoriler.hesapId = ?',[req.params.hesapId],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);
        });

    });

}
module.exports = {
    dbFavoriInsert,
    dbFavoriSil,
    getFavori,
    getFavoriHesapId
}