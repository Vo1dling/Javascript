const book1 = {
    bookName    : "I Feel Bad About My Neck",
    bookAuthor  : "Nora Ephron",
    publishYear : "2006",
}
function bookReader(book){
    return(`The Book ${book.bookName} Was Written by ${book.bookAuthor} In The Year ${book.publishYear}`)
}
let myBook = bookReader(book1)
console.log(myBook)