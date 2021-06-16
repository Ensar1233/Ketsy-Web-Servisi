const model = require('../models/adres');


const adresInsert = (req,res)=>{

    model.adresInsert(req,res)
    .then(result=>{
        console.log(result);

        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });

}
const adresGetir = (req,res)=>{
    model.adresGetir(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);        
    })
    .catch(err=>{
        console.log(err);
    });

}
const adresUpdate = (req,res)=>{

    model.adresUpdate(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });

}

const adresSil = (req,res)=>{

        model.adresSil(req,res)
        .then(result=>{
            console.log(result);
            res.send(result);
        })
        .catch(err=>{
            console.log(err);
        });
}
const kayitliAdresGetir = (req,res)=>{
    model.kayitliAdresGetir(req,res)
    .then(result=>{
        console.log(result);
        res.send(result[0]);
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports = {
    adresInsert,
    adresGetir,
    adresUpdate,
    adresSil,
    kayitliAdresGetir
}