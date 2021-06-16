const db = require('../baglanti');

const destek = require('../destek/decode');

const andResimYukle = (req,res)=>{
    return new Promise((resolve,reject)=>{

        destek.resimYukle(req.body.resimByte,req.body.resimYol);
        resolve(req.body.resimYol);
    });

}



const dbHesapInsert = (req,res)=>{

    return new Promise((resolve,reject)=>{

        db.query('INSERT INTO tbl_hesap (telNo,ad,soyad,profilURL,email,kullaniciAdi,sifre) values(?,?,?,?,?,?,?)',
        [req.body.telNo,req.body.ad,req.body.soyad,req.body.profilURL,req.body.email,req.body.kullaniciAdi,req.body.sifre],(err,rows,field)=>{
            if(!err){
                resolve(rows);                
            }
            else{
                console.log(err);
            }

        });
    });

}
//my134205@gmail.com

const dbHesapSorgu = (req,res)=>{
    console.log(req.body.email);
    return new Promise((resolve,reject)=>{

        db.query('SELECT * FROM tbl_hesap WHERE email=?',[req.body.email],(err,rows,field)=>{
            console.log(rows);
            resolve(rows);                    

        });

    });
}

const dbSifreGuncelle = (rek,res)=>{
    return new Promise((resolve,reject)=>{
        dbHesapSorgu(rek,res)
        .then(result=>{
            if(result[0].id!=0){
                db.query('UPDATE tbl_hesap SET sifre = ? WHERE id = ?',[rek.body.sifre,result[0].id],(err,rows,field)=>{
                    console.log(rows);
                      resolve(rows);  

                });                  
            }


        })
        .catch(err=>{
            console.log(err);
        })

    });

}

const dbGirisKontrol = (req,res)=>{
    return new Promise((resolve,reject)=>{

        db.query('SELECT * FROM tbl_hesap WHERE email=? and sifre=?',[req.body.email,req.body.sifre],(err,rows,field)=>{

            resolve(rows);                
        });

    });


}
const dbAnaEkran = (req,res)=>{

    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_hesap WHERE id = ?',[req.body.id],(err,rows,field)=>{
            resolve(rows);

        });

    });

}

const dbGuncelle = (req,res)=>{
    console.log(req.body);
    return new Promise((resolve,reject)=>{
        db.query('UPDATE tbl_hesap SET email=?, telNo =? WHERE id = ?',[req.body.email,req.body.telNo,req.body.id],(err,rows,field)=>{
            console.log(rows);
                resolve(rows);

        });
    });

}
const dbHesapSorguId = (id)=>{
    return new Promise ((resolve,reject)=>{
        db.query('SELECT * FROM tbl_hesap WHERE id = ? ',[id],(err,rows,field)=>{
            if(!err) return resolve(rows);

            console.log(rows);    
        });    

    });

}
const hesapSorgu = (req,res)=>{
    console.log(req.params.id);
    return new Promise((resolve,reject)=>{
        db.query('SELECT * FROM tbl_hesap WHERE id = ? ',[req.params.id],(err,rows,field)=>{
            if(!err)return  resolve(rows);
            console.log(err);

        });

    });

}

const hesapHepsiGetir = (req,res)=>{
    return new Promise((resolve,reject)=>{

        db.query(`SELECT * FROM tbl_hesap where kullaniciAdi  like '%${req.body.kullaniciAdi}%' `,[req.body.kullaniciAdi],(err,rows,field)=>{
            !err ? resolve(rows) : console.log(err);

        });
    });

}

module.exports = {
    dbHesapInsert,
    andResimYukle,
    dbSifreGuncelle,
    dbGirisKontrol,
    dbAnaEkran,
    dbGuncelle,
    dbHesapSorguId,
    hesapSorgu,
    hesapHepsiGetir
}
