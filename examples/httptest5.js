var http = require('http');
var twilio = require('twilio');
var amazon = require('../lib');
var waterfall = require('async-waterfall');

global.A_title = "hi"
global.A_URL = 'http://i.imgur.com/Act0Q.gif'
var randnum = random(0, 20);


//Initialize a REST client in a single line:
var client = require('twilio')('AC36a2b29ebc7f5c69294426a7a3f9daae', 'c0af6b2a7d40e55b01d4c1c87beef6eb');
var client2 = amazon.createClient({
    awsId: 'AKIAIJJTZTPIUNQZYI2A',
    awsSecret: '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',
    awsTag: 'bensimonbyrne-20'

});
//

//
http.createServer(function (req, res) {

    var body = '';

    req.on('data', function (data) {
        console.log('req on:');
        body += data;
    });

    req.on('end', function () {

        //Create TwiML response
        waterfall([
  function (callback) {

            
                    client2.itemSearch({
                        AWSAccessKeyId: 'AKIAIJJTZTPIUNQZYI2A',
                        AssociateTag: 'bensimonbyrne-20',
                        SearchIndex: 'Blended',
                        Keywords: 'weird stuff',
                        ResponseGroup: 'Images'

                    }, function (err, results) {
                        if (err) {
                            console.log('error');
                            console.log(err);
                            console.log(err[0].Error);
                          
                        } else {
                            // sendms(results[1].ItemAttributes[0].Title, results[Math.floor(Math.random()*results.length)].LargeImage[0].URL)
                            var num = Math.floor(Math.random() * results.length)
                            console.log(num);                           
                          
                            var title = results[num].ItemAttributes[0].Title.toString();
                     
                            console.dir(JSON.stringify(results[num]));
                            var URL = results[num].LargeImage[0].URL[0].toString();
                            //console.lMath.floor(Math.random()*results.length)].LargeImage[0].URLog(results[1].ItemAttributes[0].Title);
                            //console.log(global.A_title);
                            console.log(num);
                            //console.log(results[Math.floor(Math.random()*results.length)].LargeImage[0].URL);
                              callback(null, title, URL);
                            



                        }
                    });
           


              
  },
  function (arg1, arg2, callback) {
                var twiml = new twilio.TwimlResponse();

                twiml.message(function () {

                    this.body(arg1);
                    this.media(arg2);
                    console.log(arg1);
                    console.log(arg2);
                });

                res.writeHead(200, {
                    'Content-Type': 'text/xml'
                });
                res.end(twiml.toString());
                callback(null, 'three');
  },
  function (arg1, callback) {
                // arg1 now equals 'three' 
       callback(null, 'done');
                
  }
], function (err, result) {
          console.log('finished');
        });
        //

    });

}).listen(80);






// gift icon 🎁






function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}