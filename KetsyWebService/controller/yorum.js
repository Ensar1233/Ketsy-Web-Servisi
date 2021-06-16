const db = require('../baglanti');
const model = require('../models/yorum');


const dbGetYorum = (req,res)=>{

    model.dbGetYorum(req,res)
    .then(result=>{
//       console.log(result);
        for(let i =0;i<result.length;i++){
            let obj = {
                hesap:{
                    profilURL:result[i].profilURL,
                    ad:result[i].ad,
                    soyad:result[i].soyad,
                    kullaniciAdi:result[i].kullaniciAdi
                },

                yorumm:result[i].yorum
                
           }
           result[i] = obj;
        }
        res.send(result);
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })

}
const dbGetTekYorum = (req,res)=>{
    model.dbGetTekYorum(req,res)
    .then(result=>{
        let obj = {
            yorumm:result[0].yorum,
            hesapId:result[0].hesapId,
            yapanHesap:result[0].yapanHesap
        };
        result = obj;
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}

const dbYorumInsert = (req,res)=>{
    model.dbYorumInsert(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}

module.exports = {
    dbYorumInsert,
    dbGetYorum,
    dbGetTekYorum
}