function findAuthorById(authors, id) {
  let authorId = authors.find((author) => (author.id === id));
  return authorId;
}

function findBookById(books, id) {
  let bookLookup = books.find((book) => (book.id === id));
  return bookLookup;
}

function partitionBooksByBorrowedStatus(books) {
    const borrowed = books.filter((book)=> !book.borrows[0].returned);
    const returned = books.filter((book)=> book.borrows[0].returned);
    let partitioned = [borrowed, returned];
    return partitioned;
}

function getBorrowersForBook(book, accounts) {
    let borrowers = [];
  accounts.map((account)=>{
   book.borrows.find((borrow)=> {
     if(borrow.id === account.id) {
       account["returned"] = borrow.returned
       borrowers.push(account)
       }
     })
   })
  return borrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
