const model = require('../models/favori');



const dbFavoriInsert = (req,res)=>{

    model.dbFavoriInsert(req,res)
    .then(result=>{
        console.log(result);
        res.send({id:result.insertId});
    })
    .catch(err=>{
        console.log(err);
    })

}
const dbFavoriSil = (req,res)=>{
    
    model.dbFavoriSil(req,res)
    .then(result=>{
        console.log(result);
        res.send({id:1});
    })
    .catch(err=>{
        console.log(err);
        
    })

}
const getFavori = (req,res)=>{
    model.getFavori(req,res)
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });

}
const getFavoriHesapId = (req,res)=>{
    model.getFavoriHesapId(req,res)
    .then(result=>{
        let obj ;

        for(let i =0;i<result.length;i++){
            obj = {
                ilann:{
                    id:result[i].ilanId,
                    ilanAd:result[i].ilanAd,
                    ilanURL:result[i].ilanURL,
                    yildiz:result[i].yildiz                    
                }
            }
            result[i] = obj;

        }
        res.send(result);
        console.log(obj);
    })
    .catch(err=>{
        console.log(err);
    })

}

module.exports = {
    dbFavoriInsert,
    dbFavoriSil,
    getFavori,
    getFavoriHesapId

}