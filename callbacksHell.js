const booksDB = [
    {
        id: 1,
        title: 'clean code',
        authoId: 10
    },
    {
        id: 2,
        title: 'node code',
        authoId: 20
    },
    {
        id: 3,
        title: 'Web Dev node',
        authoId: 30
    }
];


const authorDb = [
    {
        id: 10,
        name: 'Robetr A'
    }, 
    {
        id: 20,
        name: 'Martin G'
    }, 
    {
        id: 30,
        name: 'Alan F'
    }
];

function getBookById (id, callback){
 const book = booksDB.find(book => book.id === id);
  if(!book){
      const error = new Error();
      error.message = "Book no found!";
    return callback(error);
  }

  callback(null, book);
}

function getAuthorById (id, callback){
    const author = authorDb.find(author => author.id === id);
     if(!author){
         const error = new Error();
         error.message = "Author no found!";
       return callback(error);
     }
   
     callback(null, author);
   }

   getBookById(3, (err, book) => {
    if(err){
        return console.log(err.message);
    }
    
    getAuthorById(book.authoId, (err, author) => {
        if(err){
            return console.log(err.message);
        }
        console.log(`The book ${book.title} was written by ${author.name}`)
    });

    return console.log(book);

});