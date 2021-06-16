
const model = require('../models/hesap');


const dbHesapInsert = (req,res)=>{

    model.dbHesapInsert(req,res)
    .then(result=>{
        console.log(result);
        res.send({id:result.insertId});

    })
    .catch(err=>{
        console.log(err);

    });


}
const andResimYukle = (req,res)=>{
    model.andResimYukle(req,res)
    .then(result=>{

        console.log(result);
        res.send({profilURL:result});
    })
    .catch(err=>{
        console.log(err);
    });

}


const dbSifreGuncelle = (req,res)=>{

    model.dbSifreGuncelle(req,res)
    .then(result=>{
        console.log(result);
        let durum;
        if(result.changedRows!=0) durum = true;
        else durum=false;
        res.send({durum:durum});
    })
    .catch(err=>{
        console.log(err);
    });
}
const dbGirisKontrol = (req,res)=>{

    model.dbGirisKontrol(req,res)
    .then(result=>{
        console.log(result[0]);
        res.send({hesap:result[0]});
    })
    .catch(err=>{
        console.log(err);
    });

}
const dbAnaEkran = (req,res)=>{

    model.dbAnaEkran(req,res)
    .then(result=>{
        console.log(result[0]);
        res.send({hesap:result[0]});
    })
    .catch(err=>{
        console.log(err);
    });
}
//Güncelleme

const dbGuncelle = (req,res)=>{
    model.dbGuncelle(req,res)
    .then(result=>{

        model.dbHesapSorguId(req.body.id)
        .then(sonuc=>{
            console.log(sonuc[0]);
            res.send({hesap:sonuc[0]});          
        })
        .catch(err=>{
            console.log(err);
        });
    })
    .catch(err=>{
        console.log(err);
    });

}
const hesapSorgu = (req,res)=>{
    model.hesapSorgu(req,res)
    .then(result=>{
        
        let obj = {
            hesap:{
                id:result[0].id,
                ad:result[0].ad,
                soyad:result[0].soyad,
                profilURL:result[0].profilURL,
                kullaniciAdi:result[0].kullaniciAdi
            }
        }
        result = obj;
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });
}
const hesapHepsiGetir = (req,res)=>{

    model.hesapHepsiGetir(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })

}

module.exports = {
    dbHesapInsert,
    andResimYukle,
    dbSifreGuncelle,
    dbGirisKontrol,
    dbAnaEkran,
    dbGuncelle,
    hesapSorgu,
    hesapHepsiGetir
}
