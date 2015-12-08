var util = require('util'),
    NODE_PATH=/usr/local/lib/node_modules
   // require.paths.push('/usr/local/lib/node_modules');
    require('apac').OperationHelper;

var opHelper = new OperationHelper({
  awsId: 'AKIAJSVVFQLR7BZ4ENPA',
  awsSecret: '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',
  assocId: 'bensimonbyrne-20'
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}, function(err, results) {
	console.log(results);
});
