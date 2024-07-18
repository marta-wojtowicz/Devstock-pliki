const library  = {
    name: 'Wojewódzka Biblioteka Publiczna w Krakowie',
    books: [
        {
            title1: 'Tajemnica Klejnotu Nefertiti - część 1',
            author1: 'Agnieszka Stelmaszyk',
            yearOfPublication1: '2010'
        },
        {
            title2: 'Drużyna Pierścienia',
            author2: 'J.R.R. Tolkiena',
            yearOfPublication2: '1954'
        },
        {
            title3: 'Prawiek i inne czasy',
            author3: 'Olga Tokarczuk',
            yearOfPublication3: '1996'
        }
    ],
}

const bookInfo1 = `Tytuł: "${library.books[0].title1}", Autor: ${library.books[0].author1}, Rok wydania: ${library.books[0].yearOfPublication1}.`
const bookInfo2 = `Tytuł: "${library.books[1].title2}", Autor: ${library.books[1].author2}, Rok wydania: ${library.books[1].yearOfPublication2}.`
const bookInfo3 = `Tytuł: "${library.books[2].title3}", Autor: ${library.books[2].author3}, Rok wydania: ${library.books[2].yearOfPublication3}.`

let oldestBook;
if(library.books[0].yearOfPublication1 < library.books[1].yearOfPublication2 && library.books[0].yearOfPublication1 < library.books[2].yearOfPublication3) {
    oldestBook = library.books[0].title1;
} else if(library.books[1].yearOfPublication2 < library.books[0].yearOfPublication1 && library.books[1].yearOfPublication2 < library.books[2].yearOfPublication3) {
    oldestBook = library.books[1].title2;
} else if(library.books[2].yearOfPublication3 <library.books[0].yearOfPublication1 && library.books[2].yearOfPublication3 < library.books[1].yearOfPublication2) {
    oldestBook = library.books[2].title3;
}
const libraryInfo = `${library.name} zawiera książki: "${library.books[0].title1}", "${library.books[1].title2}", "${library.books[2].title3}". Najstarsza książka to: ${oldestBook}.`;

console.log(libraryInfo);