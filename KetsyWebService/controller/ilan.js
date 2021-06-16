
const model = require('../models/ilan');
const yildizIlan = require('../models/yildizIlan');

const andResimYukle = (req,res)=>{
    model.andResimYukle(req,res)
    .then(result=>{

        console.log(result);
        res.send({ilanURL:result});
    })
    .catch(err=>{
        console.log(err);
    });

}

const dbIlanInsert = (req,res)=>{

    model.dbIlanInsert(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}
const dbIlanSorgu = (req,res)=>{
    model.dbIlanSorgu(req,res)
    .then(result=>{

        let object;

        for(let i =0;i<result.length;i++){
            
            object = {
                ilann:{
                    id:result[i].id,
                    ilanURL:result[i].ilanURL,
                    ilanAd:result[i].ilanAd,
                    odemeTuru:result[i].odemeTuru,
                    fiyat:result[i].fiyat,
                    hesapId:result[i].hesapId,
                    yildiz:result[i].yildiz
                }
            }
            console.log(object);
            result[i] = object;
        }

        ///console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}

const dbIlanHesapId = (req,res)=>{

    model.dbIlanHesapId(req,res)
    .then(result=>{
        let object;
        console.log(result);
        for(let i =0;i<result.length;i++){
            object = {
                ilann:{
                    id:result[i].id,
                    ilanURL:result[i].ilanURL,
                    ilanAd:result[i].ilanAd,
                    odemeTuru:result[i].odemeTuru,
                    fiyat:result[i].fiyat,
                    hesapId:result[i].hesapId
                },
                yildizDeger:{
                    yildiz:result[i].yildiz
                }
            }
            result[i] = object;
        }
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}


const dbIlanId = (req,res)=>{
    model.dbIlanId(req,res)
    .then(result=>{
        console.log(result);
        res.send(result[0]);
    })
    .catch(err=>{
        console.log(err);
    })

};
const dbIlanSil = (req,res)=>{
    yildizIlan.dbYildizIlanSil(req.params.id)
    .then(result=>{
        model.dbIlanSil(req,res)
        .then(result=>{ 
            console.log(result);
            res.send({res:1});
                
    
        })
        .catch(err=>{
            console.log(err);
            res.send({res:-1});
        });
                
    })
    .catch(err=>{
        console.log(err);
        res.send({res:-1});
    });

};


const dbIlanGuncelle = (req,res)=>{
    model.dbIlanGuncelle(req,res)
    .then(result=>{
        console.log(result);
        res.send({res:1});
    })
    .catch(err=>{
        console.log(err);
        res.send({res:-1});
    });

};

const dbIlanDetay = (req,res)=>{
    model.dbIlanDetay(req,res)
    .then(result=>{
        if(result[0]!=undefined){
            let object = {
                ilann:{
                    hesapId:result[0].hesapId,
                    id:result[0].id,
                    ilanURL:result[0].ilanURL,
                    ilanAd:result[0].ilanAd,
                    fiyat:result[0].fiyat,
                    odemeTuru:result[0].odemeTuru,
                    degerlendirme:result[0].degerlendirme
                },
                hesap:{
                    kullaniciAdi:result[0].kullaniciAdi,
                    ad:result[0].ad,
                    soyad:result[0].soyad,
                    profilURL:result[0].profilURL
                }
            }
//            res.send(result[0]);
            console.log(object);

            res.send(object);
        }
        else{
            res.send({res:-1});
        }
    })
    .catch(err=>{
        console.log(err);
    })

}


module.exports = {
    andResimYukle,
    dbIlanInsert,
    dbIlanSorgu,
    dbIlanHesapId,
    dbIlanId,
    dbIlanSil,
    dbIlanGuncelle,
    dbIlanDetay

}