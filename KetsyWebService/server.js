const express = require('express');
const parser = require('body-parser');
const controller = require('./controller/hesap')
const ilan = require('./controller/ilan');
const mailer = require('nodemailer');
const yildiz = require('./controller/yildizIlan');
const favori = require('./controller/favori');
const yorum = require('./controller/yorum');
const adres = require('./controller/adres');
const kredi = require('./controller/kredi_karti');
const siparis = require('./controller/siparis');
const db = require('./baglanti');

const app = express();

app.use(parser.urlencoded({extended:true}));


app.post('/hesapResim',(req,res)=>{
    controller.andResimYukle(req,res);


});
app.post('/hesap',(req,res)=>{
    controller.dbHesapInsert(req,res);

});
app.post('/sorgu',(req,res)=>{
    controller.dbSifreGuncelle(req,res);
});

app.post('/giris',(req,res)=>{
    controller.dbGirisKontrol(req,res);

});

app.post('/anaekran',(req,res)=>{
    controller.dbAnaEkran(req,res);
});
app.get(`/profils/:profilURL`,(req,res)=>{
    console.log(req.params.profilURL);
//    console.log(__dirname+`/profils/${req.params.profilURL}`);
    res.sendFile(__dirname+`/profils/${req.params.profilURL}`);

});

app.post('/guncelle',(req,res)=>{
    controller.dbGuncelle(req,res);
});

app.get("/hesap/:id",(req,res)=>{
    controller.hesapSorgu(req,res);

});

app.post('/hesapp',(req,res)=>{
    controller.hesapHepsiGetir(req,res);
});
//ILANLAR 

app.post('/ilanResim',(req,res)=>{

    ilan.andResimYukle(req,res);

});

app.post('/ilanEkle',(req,res)=>{
    ilan.dbIlanInsert(req,res);

});

app.get(`/ilan/:ilanURL`,(req,res)=>{
    console.log(req.params.ilanURL);
//    console.log(__dirname+`/profils/${req.params.profilURL}`);
    res.sendFile(__dirname+`/ilan/${req.params.ilanURL}`);

});
app.get('/ilanSorgu',(req,res)=>{

    ilan.dbIlanSorgu(req,res);
    
});

app.get('/ilanSorgu/:id',(req,res)=>{
    ilan.dbIlanHesapId(req,res);
});
app.get('/ilanQuery/:id',(req,res)=>{
    ilan.dbIlanId(req,res);
});
app.delete('/ilanSil/:id',(req,res)=>{
    ilan.dbIlanSil(req,res);
});
app.put('/ilanGuncelle/:id',(req,res)=>{
    ilan.dbIlanGuncelle(req,res);
});
app.get('/ilanDetay/:id',(req,res)=>{
    ilan.dbIlanDetay(req,res);
})

//YILDIZLI Ilan
app.post('/yildizInsert',(req,res)=>{
    yildiz.dbInsert(req,res);
});
app.post('/yildizSorgu',(req,res)=>{
    yildiz.dbYildizControl(req,res);
});
//FAVORİ

app.post('/favoriInsert',(req,res)=>{
    favori.dbFavoriInsert(req,res);

});
app.delete('/favoriSil/:ilanId',(req,res)=>{
    favori.dbFavoriSil(req,res);
});
app.get('/favoriSorgu',(req,res)=>{
    favori.getFavori(req,res);
})
app.get('/favoriSorgu/:hesapId',(req,res)=>{
    favori.getFavoriHesapId(req,res);
});
//yorumlar
app.post('/yorum',(req,res)=>{
    yorum.dbYorumInsert(req,res);
})
app.get('/yorum/:hesapId',(req,res)=>{
    yorum.dbGetYorum(req,res);
})
// adres
app.post('/adres',(req,res)=>{

    adres.adresInsert(req,res);
    
});
app.get('/adres/:hesapId',(req,res)=>{

    adres.adresGetir(req,res);
});
app.put('/adres/:hesapId',(req,res)=>{

    adres.adresUpdate(req,res);
});
app.delete('/adres/:id',(req,res)=>{
    adres.adresSil(req,res);
});
app.get('/kayitliAdres/:id',(req,res)=>{
    adres.kayitliAdresGetir(req,res);
});

//KART KONTROL 
app.post('/kredi',(req,res)=>{

    kredi.krediKartiKontrol(req,res);

});
//SİPARİŞ
app.post('/siparis',(req,res)=>{
    siparis.siparisInsert(req,res);
});
app.get('/siparis/:hesapId',(req,res)=>{
    siparis.siparisSorgu(req,res);
});
app.delete('/siparis/:id',(req,res)=>{
    siparis.siparisSil(req,res);
});

//MAİL
app.post('/mail',(req,res)=>{
//android değerlendiren kişi sayısı ekle
//    let test = await mailer.createTestAccount();
    const output = `
        <p> Kodun</p>
        <h3>Kod </h3>
        <p>${req.body.kod} </p>
    `;
    
    let transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'ktsketsy@gmail.com',
            pass:'ketsy123'
        }
    })
    console.log(req.body.email);
    let mailOption = {
        from:'ktsketsy@gmail.com',
        to:`${req.body.email}`,
        subject:'Node Contact Request',
        text:'Hello World?',
        html:output
    }
    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            res.send({email:"false"});
            return console.log(error);
        }

        console.log('message send: %s ',info.messageId);

        console.log('Prewiew URL: %s',mailer.getTestMessageUrl(info));
        res.send({email:'true'});
    });

});


const PORT = 8080;

app.listen(PORT,(err)=>{

    if(!err){
        console.log(`${PORT} dinleniyor...`);
    }
    else{
        console.log(err);
    }
})
