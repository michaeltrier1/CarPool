var pg = require('pg');

var connectionString = 'postgres://rqudjcey:0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0@balarama.db.elephantsql.com:5432/rqudjcey'
var client = new pg.Client(connectionString);


client.connect(function(err){
    client.query('select * from users', function(err, result){
        console.log('inside query');
        console.log(result)
        client.end();  
    });
});