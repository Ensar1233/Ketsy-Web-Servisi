const models = require("../models/yildizIlan");

const dbInsert = (req,res)=>{
    models.dbInsert(req,res)
   .then(result=>{
        console.log(req.body.yildiz);
        models.getYildizIlanId(req.body.ilanId)
        .then(result=>{
            let yildizToplam = 0;
            let yildizOrtalama;
            if(result!=undefined){
                for(let i = 0;i<result.length;i++){
                    console.log(result[i]);
                    
                    yildizToplam += Number.parseFloat(result[i].yildiz);
                }
                yildizOrtalama = yildizToplam/result.length;

                models.dbYildizUpdate(req.body.ilanId,yildizOrtalama)
                .then(result=>{
                    models.dbDegerSorgu(req.body.ilanId)
                    .then(result=>{
                        let degerlendirme = result[0].degerlendirme;
                        let deger;
                        
                        console.log(degerlendirme);

                        if(degerlendirme==0){
                            deger = 1;
                        }
                        else{
                            deger = Number.parseInt(degerlendirme) +1;
                        }
                        models.dbDegerUpdate(req.body.ilanId,deger)
                        .then(result=>{
                            console.log(result);
                        })
                        .catch(err=>{
                            console.log(err);
                        })

                        
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                    //res.send(result);
                })
                .catch(err=>{
                    console.log(err);
                })
                console.log("ortalama: " + yildizOrtalama);
                
            }
        })
        .catch(err=>{
            console.log(err);
        })


      res.send(result);
       
   }) 
   .catch(err=>{
     console.log(err);  
   })

}
/* ilanId = 19 hesapId = 15 yildiz = 3*/
const dbYildizControl = (req,res)=>{
    models.dbYildizControl(req,res)
    .then(result=>{
        console.log(result);
        let object ;
        if(result[0]!=undefined) object = {yildiz:result[0].yildiz};
        else object = {yildiz:-1};
        res.send(object);
    })
    .catch(err=>{
        console.log(err);
    });

}

module.exports = {

    dbInsert,
    dbYildizControl
}