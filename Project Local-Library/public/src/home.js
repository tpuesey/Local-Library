//actual helper function
function sortArray(array){
  return array.sort((one, two) => one.count < two.count ? 1 : -1).splice(0, 5);
}

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = [];
  for (let i = 0; i < books.length; i++){
    if(books[i].borrows[0].returned === false){
      borrowed.push(books[i]);
    }
  }
  let total = borrowed.length;
  return total;
}

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  bookGenres.map((genre) => {
    const genreLocation = temp.findIndex((element) => element.name === genre);
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}


function getMostPopularBooks(books, count=5) {
    const borrows = books.map(book=>({name:book.title, count:book.borrows.length}));
    borrows.sort((a,b) => b.count - a.count);
    return borrows.slice(0,count);
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
    //helper function for list sorting
  }).sort((a, b) => b.count - a.count).slice(0,5)
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
