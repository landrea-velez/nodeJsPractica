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

function getBookById (id){
    return new Promise((resolve, reject) => {
        const book = booksDB.find(book => book.id === id);
        if(!book){
            const error = new Error();
            error.message = "Book no found!";
            reject(error);
        }
        resolve(book);
    });
}

function getAuthorById (id){
    return new Promise((resolve, reject) => {
        const author = authorDb.find(author => author.id === id);
            if(!author){
                const error = new Error();
                error.message = "Author no found!";
            reject(error);
            }  
            resolve(author); 
    });    
   }
   
   getBookById(1)
   .then(book => {
       return getAuthorById(book.authoId);
   })
   .then(author => {
    console.log(author);
   })
   .catch(error => {
       console.log(error.message);
   });


