const model = require('../models/kredi_karti');


const krediKartiKontrol = (req,res)=>{

    model.krediKartiKontrol(req,res)
    .then(result=>{
        res.send(result[0]);
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });
};


module.exports = {
    krediKartiKontrol

}