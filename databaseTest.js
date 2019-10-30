var pg = require('pg');

var connectionString = 'postgres://afygwjjd:bZ1BCKy3YC879KtAJStgMZRMX3mmysdl@manny.db.elephantsql.com:5432/afygwjjd'

var client = new pg.Client(connectionString);


client.connect(function(err){
  
    
    client.query('select * from test', function(err, result){
        console.log('inside query');
        console.log(result)
        client.end();  
    });
});
