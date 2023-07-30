const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
const getTheTitles = function (books) {
  const filtered = books.map((book) => {
    return book.title;
  });
  return filtered;
};

// Do not edit below this line
module.exports = getTheTitles;
