class DatabaseCore {
        
    Constructor(){
    }

    connect(queryToBeExecuted){
        let pg = require('pg');
        let connectionString = 'postgres://rqudjcey:0XBP0dAZ7j39d5Gu3nYuC3xl95Rz-Hr0@balarama.db.elephantsql.com:5432/rqudjcey'
        
        let client = new pg.Client(connectionString);
        //console.log("entered databaseCore")
        
        client.connect(function(err){
            //console.log("before entering query")
            queryToBeExecuted(client);            
        });
    }

    /* getClient(){
        return new pg.Client(connectionString);
    } */
}

module.exports = new DatabaseCore();