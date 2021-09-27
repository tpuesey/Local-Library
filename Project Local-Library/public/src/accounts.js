 function findAccountById(accounts, id) {
  let user = accounts.find((account) => (account.id === id));
   return user;
  }
 
 function sortAccountsByLastName(accounts) {
     let accLast = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
     return accLast;
 }
 
 function getTotalNumberOfBorrows(account, books) {
    const borrowId = account.id;
   let total = 0;
   books.forEach(book => book.borrows.forEach(borrow => borrowId === borrow.id && total++));
   return total;
 }
 
 function getBooksPossessedByAccount(account, books, authors) {
     let books_taken = [];
     books.forEach(book=>{
       if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
         books_taken.push(book);
       }
     })
     console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);      book['author'] = anAuthor;
    })
  console.log(books_taken);
    return books_taken;
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
