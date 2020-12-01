var express = require('express');
var router = express.Router();

 const anaSayfa=function(req, res,next){
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa1',
      'sayfaBaslik':{
      'siteAd':'Mekan32',
      'aciklama':'Isparta civarındaki mekanları keşfedin!'
    },
       'mekanlar':[
         {
      'ad':'Starbucks',
      'adres':'Iyaş AVM',
      'puan':'4',
      'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
      'mesafe':'10km'
         },
         {
         'ad':'Gloria Jeans',
         'adres':'Sdü Doğu Kampüsü',
         'puan':4,
         'imkanlar':['Kahve','Çay','Pasta'],
          'mesafe':'10km'
         },
   
   {
    'ad':'Mackbear',
   'adres':'Iyas Arkası',
   'puan':3,
   'imkanlar':['kahve','kurabiye','atıştırmalık'],
    'mesafe':'6km'
   },

   {
    'ad':'Köfteci Yusuf',
   'adres':'Iyaş Bulvar',
   'puan':3,
   'imkanlar':['Köfte','Çorba','Tatlı','İçecek'],
    'mesafe':'12km'
   },
 
    {
    'ad':'Adıyaman Çiğköftesi',
   'adres':'Çarşı',
   'puan':3,
   'imkanlar':['çiğ köfte','ayran'],
   'mesafe':'8km'
   }
   ]
     }
);





};

 const mekanBilgisi=function(req, res,next){
  res.render('mekan-detay',{
      'baslik':'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':4,
          'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
          'koordinatlar':{
              'enlem':37.78157,
              'boylam':30.56516
          },
          'saatler':[
              {
                'gunler':'Pazartesi-Cuma',
                'acilis':'8:00',
                'kapanis':'00:00',
                'kapali':false
              },
              {
                'gunler':'Cumartesi-Pazar',
                'acilis':'9:00',
                'kapanis':'23:00',
                'kapali':false
              },
          ],
          'yorumlar':[
              {
                 'yorumYapan':'Hüseyin Tarık Uslu',
                 'puan':3,
                 'tarih':'30 Kasım 2020',
                 'yorumMetni':'Kahveleri çok güzel'
              }
          ]
       }
   });

};

 const yorumEkle=function(req, res,next){
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
};

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}
