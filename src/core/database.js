class DatabaseCore {
    let pg = require('pg');
    let connectionString = 'postgres://rqudjcey:0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0@balarama.db.elephantsql.com:5432/rqudjcey'    
    
    Constructor(){       
    }
    
    connect(queryToBeExecuted()){
        let client = new pg.Client(connectionString);
        
        client.connect(function(err){
            queryToBeExecuted();
            /*
            client.query('select * from users', function(err, result){
                console.log('inside query');
                console.log(result)
                client.end();
            });
            */
        });
    }

    getClient(){
        return new pg.Client(connectionString);
    }

}

module.exports = new DatabaseCore();