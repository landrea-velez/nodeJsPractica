const booksDB = [
    {
        id: 1,
        title: 'clean code'
    },
    {
        id: 2,
        title: 'node code'
    },
    {
        id: 3,
        title: 'Web Dev node'
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

getBookById(3, (err, book) => {
    if(err){
        return console.log(err.message);
    }
    return console.log(book);

});