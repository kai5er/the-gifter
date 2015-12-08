var twilio = require('twilio');



//Initialize a REST client in a single line:
var client = require('twilio')('AC36a2b29ebc7f5c69294426a7a3f9daae', 'c0af6b2a7d40e55b01d4c1c87beef6eb');
 
// Use this convenient shorthand to send an SMS:
client.sendMms({
    to:'6478984043',
    from:'+13067003394',
    body:'ahoy hoy! 🎁',
    mediaUrl: 'http://media.giphy.com/media/zl170rmVMCpEY/giphy.gif'
    
}, function(error, message) {
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.'+error.message);
    }
});
