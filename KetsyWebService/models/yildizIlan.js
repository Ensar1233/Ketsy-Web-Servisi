const db = require('../baglanti');

const dbInsert = (req,res)=>{
    return new Promise((resolve,reject)=>{
        db.query('INSERT INTO tbl_yildizliIlan (ilanId,hesapId,yildiz) values (?,?,?)',[req.body.ilanId,req.body.hesapId,req.body.yildiz],
        (err,rows,field)=>{

            resolve(rows);                
        })

    });

}
const dbYildizControl = (req,res)=>{
    console.log(req.body.ilanId);
    console.log(req.body.hesapId);
    return new Promise((resolve,reject)=>{
        db.query('select * from tbl_yildizliIlan where ilanId = ? and hesapId = ?',[req.body.ilanId,req.body.hesapId]
        ,(err,rows,field)=>{

            if(!err) resolve(rows);
            else console.log(err);
        });

    });

}

const dbYildizIlanSil = (ilanId)=>{
    console.log(ilanId);

    return new Promise((resolve,reject)=>{
        db.query('DELETE FROM tbl_yildizliIlan where ilanId = ? ',[ilanId],(err,rows,field)=>{
            resolve(rows);
        });

    });


};
const getYildizIlanId = (ilanId)=>{
    console.log(ilanId);
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_yildizliIlan where ilanId = ? ',[ilanId],(err,rows,field)=>{
            if(!err){
                resolve(rows);

            }
            else{
                console.log(err);
            }
        });
    });

}
const dbYildizUpdate = (ilanId,yildiz)=>{
    return new Promise((resolve,reject)=>{
        db.query('UPDATE tbl_ilan set yildiz = ? where id = ?',[yildiz,ilanId],(err,rows,field)=>{

            if(!err){
                resolve(rows);
            }
            else{
                console.log(err);
            }
        });

    });

}
const dbDegerUpdate = (ilanId,deger)=>{

    return new Promise((resolve,reject)=>{
        db.query('UPDATE tbl_ilan set degerlendirme =  ? where id = ?',[deger,ilanId],(err,rows,field)=>{

            !err ? resolve(rows):console.log(err);

        });

    });

}
const dbDegerSorgu = (ilanId)=>{

    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_ilan where id = ? ',[ilanId],(err,rows,field)=>{

            !err ? resolve(rows):err;

        });

    });
}

module.exports = {
    dbInsert,
    dbYildizControl,
    dbYildizIlanSil,
    getYildizIlanId,
    dbYildizUpdate,
    dbDegerUpdate,
    dbDegerSorgu
}