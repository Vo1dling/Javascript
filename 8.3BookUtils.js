let darkMans = {
    name   : "Darkmans",
    author : "Nicola Barker",
    year   : 2007
}
let brokenGlass = {
    name   : "Broken Glass",
    author : "Alain Mabanckou",
    year   : 2005
}
let bookUtils = {}
bookUtils.getFirstPublished = function(bookname1,bookname2){
    if(bookname1.year < bookname2.year){
        console.log(`${bookname2.name} got published first`)
    }
    else if(bookname1.year > bookname2.year){
        console.log(`${bookname1.name} got published first`)
    }
}
bookUtils.getFirstPublished(darkMans,brokenGlass)
bookUtils.setNewEdition = function(book,edition){
    book.latestEdition = edition
}
bookUtils.setNewEdition(darkMans, 2010)
console.log(darkMans.latestEdition)

bookUtils.setLanguage = function(book,language){
    book.language = language
}
bookUtils.setLanguage(brokenGlass,'English')
console.log(brokenGlass.language)

bookUtils.setTranslation = function(book,translator){
    book.translation = translator
}
bookUtils.setTranslation(darkMans,{'Japanese' : 'lorem'})
console.log(darkMans.translation)

bookUtils.setPublisher = function(book,location){
    book.publisher = location
}
bookUtils.setPublisher(brokenGlass,{'lorem' : 'New York'})
console.log(brokenGlass.publisher)

bookUtils.isSamePublisher = function(book1,book2){
    if(book1.publisher === book2.publisher){
    console.log(`Yes`)
    }
    else{
       console.log(`No`)
    }
}
bookUtils.isSamePublisher(darkMans,brokenGlass)
