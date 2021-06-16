const model = require('../models/siparis');


const siparisInsert = (req,res)=>{

    model.siparisInsert(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });

};
const siparisSorgu = (req,res)=>{

    model.siparisSorgu(req,res)
    .then(result=>{
        let obj ;
        console.log(result.length);
        for(let i =0;i<result.length;i++){
            obj = {
                id:result[i].id,
                ilann:{
                    ilanURL:result[i].ilanURL,
                    ilanAd:result[i].ilanAd,
                },
                adress:{
                    adres:result[i].adres
                }
            }
            result[i] = obj;
        }
        console.log(result);        
        res.send(result);
    }).catch(err=>{
        console.log(err);
    });

};
const siparisSil = (req,res)=>{
    model.siparisSil(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);

    }).catch(err=>{
        console.log(err);
    });

}


module.exports = {
    siparisInsert,
    siparisSorgu,
    siparisSil
}