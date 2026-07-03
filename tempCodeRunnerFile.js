// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("aggregate");

// Find a document in a collection.
// db.getCollection("customers").findOne({

// });
db.sales.aggregate([
    {
       $sort: {
         price: -1
       }

    }
])