var amazon = require('../lib');

//var client = amazon.createClient({
//  awsTag: process.env.AWS_TAG,
//  awsId: process.env.AWS_ID,
//  awsSecret: process.env.AWS_SECRET
//});

var client = amazon.createClient({
  awsId: 'AKIAIJJTZTPIUNQZYI2A',
  awsSecret: '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',
  awsTag: 'bensimonbyrne-20'

});



client.itemSearch({
  AWSAccessKeyId: 'AKIAIJJTZTPIUNQZYI2A',
  AssociateTag: 'bensimonbyrne-20',
  SearchIndex: 'Blended',
  Keywords: 'weird stuff',
  ResponseGroup: 'Images'
 
}, function (err, results) {
  if (err) {
    console.log(err[0].Error);
    //console.log(amazon.awsId);
  } else {
    var num = Math.floor(Math.random() * results.length)
    console.log(num);
    console.log(results.length);

    //console.dir(JSON.stringify( results[num].ItemAttributes));
      //var URL = results[56].MediumImage[0].URL.toString();
     //  console.dir(JSON.stringify(results[56]));
      //console.dir(JSON.stringify(results[16]));
     
      console.log(results[num].LargeImage);
     
      console.dir(JSON.stringify( results[32]));
      

 
      
    
  }
});

