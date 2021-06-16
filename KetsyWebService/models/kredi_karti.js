const db = require('../baglanti');

const krediKartiKontrol = (req,res)=>{

    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_kredi where isim =?  and kartNo = ? and  tarih = ? and CVV= ? and hesapId = ?',
        [req.body.isim,req.body.kartNo,req.body.tarih,req.body.CVV,req.body.hesapId],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);

        });      

    });

};



module.exports = {
    krediKartiKontrol

};