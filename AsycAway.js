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

async function getBookById (id){
    const book = booksDB.find(book => book.id === id);
        if(!book){
            const error = new Error();
            error.message = "Book no found!";
            throw error;
        }
   return book;
}

async function getAuthorById (id){
        const author = authorDb.find(author => author.id === id);
            if(!author){
                const error = new Error();
                error.message = "Author no found!";
                throw error;
            }
        return author;
   }
   

async function main () {

    try{
        const book = await getBookById(2);
            const author = await getAuthorById(book.authoId);
            console.log(`This book ${book.title} was written by ${author.name}`);
    }catch(ex){
        console.log(ex.message);
    }    
}

main();
