var twilio = require('twilio');
var amazon = require('../lib');
var A_title
var A_URL 
var  randnum = random (0, 20);

//Initialize a REST client in a single line:
var client = require('twilio')('AC36a2b29ebc7f5c69294426a7a3f9daae', 'c0af6b2a7d40e55b01d4c1c87beef6eb');
var client2 = amazon.createClient({
    awsId: 'AKIAIJJTZTPIUNQZYI2A',
    awsSecret: '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',
    awsTag: 'bensimonbyrne-20'

});

// gift icon 🎁

function sendms(title, URL) {
     console.log(title,URL);
 client.sendMms({
            to: '6478984043',
            from: '+13067003394',
            body: title,
            mediaUrl: URL
        }, function (error, message) {
            if (!error) {
                console.log('Success! The SID for this SMS message is:');
                console.log(message.sid);
                console.log('Message sent on:');
                console.log(message.dateCreated);
            } else {
                console.log('Oops! There was an error.' + error.message);
            }
        });


};


client2.itemSearch({
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
        sendms(results[1].ItemAttributes[0].Title, results[Math.floor(Math.random()*results.length)].LargeImage[0].URL)
      
        //console.log(results[1].ItemAttributes[0].Title);
        // console.log(randnum);
         //console.log(results[Math.floor(Math.random()*results.length)].LargeImage[0].URL);

       

    }
});


function random (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}