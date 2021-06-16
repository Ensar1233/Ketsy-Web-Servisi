const { resolveContent } = require('nodemailer/lib/shared');
const db = require('../baglanti');

const siparisInsert = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO tbl_siparisler (ilanId,hesapId,adresId) values (?,?,?)',[req.body.ilanId,req.body.hesapId,req.body.adresId],
        (err,rows,field)=>{
            !err ? resolve(rows) : console.log(err); 
    
        });
    
    });

}
const siparisSorgu = (req,res)=>{
    console.log(req.params.hesapId);
    return new Promise((resolve,reject)=>{
        
        db.query(`SELECT tbl_siparisler.id,ilanURL,ilanAd,tbl_adres.adres FROM tbl_siparisler,tbl_ilan,tbl_hesap,tbl_adres where 
        tbl_siparisler.ilanId = tbl_ilan.id and tbl_siparisler.hesapId = tbl_hesap.id and tbl_siparisler.adresId = tbl_adres.id and tbl_hesap.id = ?
        `,[req.params.hesapId],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);
        });

    });

};
const siparisSil = (req,res)=>{
    return new Promise((resolve,reject)=>{

        db.query('DELETE FROM tbl_siparisler where id = ?',[req.params.id],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);
        });

    });

}

module.exports = {
    siparisInsert,
    siparisSorgu,
    siparisSil

}