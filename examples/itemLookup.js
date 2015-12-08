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
  SearchIndex: 'Toys',
  Keywords: 'weird stuff',
  ResponseGroup: 'Images, ItemAttributes'
 
}, function (err, results) {
  if (err) {
    console.log(err[0].Error);
    //console.log(amazon.awsId);
  } else {

    console.log(results[1].MediumImage);
    console.log(results[1].ItemAttributes[0].Title);
   
   //   console.log(results);
      
    
  }
});

