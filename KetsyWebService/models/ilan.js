const db = require('../baglanti');

const decode = require('../destek/decode');

const andResimYukle = (req,res)=>{
    return new Promise((resolve,reject)=>{

        decode.resimYukle(req.body.resimByte,req.body.resimYol);
        resolve(req.body.resimYol);

    });

}

const dbIlanInsert = (req,res)=>{
    return new Promise((resolve,reject)=>{

        db.query('INSERT INTO tbl_ilan (ilanURL,ilanAd,odemeTuru,fiyat,yildiz,degerlendirme,hesapId) values (?,?,?,?,0,0,?)',[req.body.ilanURL,req.body.ilanAd,req.body.odemeTuru,req.body.fiyat,req.body.hesapId]
        ,(err,rows,field)=>{
            if(!err) return resolve(rows);

            console.log(rows);

        });

    });

}

const dbIlanSorgu = (req,res)=>{
    
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_ilan',(err,rows,field)=>{
            if(!err) return  resolve(rows);                            
            console.log(err);
            
        });

    });


}
//http://localhost:8080/ilanSorgu/16
const dbIlanHesapId = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_ilan where hesapId = ?',[req.params.id],
        (err,rows,field)=>{
            console.log(rows);
            resolve(rows);

        });


    });
}
const dbIlanId = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_ilan where id = ?',[req.params.id],(err,rows,field)=>{
            resolve(rows);

        });

    });

}
const dbIlanSil = (req,res)=>{
    console.log(req.params.id);
    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM tbl_ilan where id = ?',[req.params.id],(err,rows,field)=>{
            if(!err){
                resolve(rows);
            }
            else{
                console.log(err);
            }
        });

    });
}
const dbIlanGuncelle = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('update tbl_ilan set ilanAd = ? , odemeTuru = ?,fiyat = ? where id = ?',[req.body.ilanAd,req.body.odemeTuru,req.body.fiyat,req.params.id],
        (err,rows,field)=>{
            resolve(rows);
        });

    });

};
const dbIlanDetay = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('select tbl_hesap.id as hesapId,tbl_ilan.id,kullaniciAdi,ad,soyad,profilURL,ilanURL,ilanAd,fiyat,odemeTuru,degerlendirme from tbl_hesap,tbl_ilan where tbl_hesap.id = tbl_ilan.hesapId and tbl_ilan.id =?',
        [req.params.id],(err,rows,field)=>{
            resolve(rows);
            
        })

    })


}


module.exports ={
    andResimYukle,
    dbIlanInsert,
    dbIlanSorgu,
    dbIlanHesapId,
    dbIlanId,
    dbIlanSil,
    dbIlanGuncelle,
    dbIlanDetay
}