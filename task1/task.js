export function getLongestBookByAuthorName(authors, books, authorName) {
    const author = authors.find(a => a.name === authorName)
    if (!author) return null

    const authorBooks = books.filter(b => b.author_id === author.id)
    if (authorBooks.length === 0) return null

    let maxPages = 0

    for(const book of authorBooks) {
        if (book.pages > maxPages) {
            maxPages = book.pages
        }
    }

    const longestBook = authorBooks.filter(book => book.pages === maxPages).sort((a, b) => a.title.localeCompare(b.title))
    return longestBook[0].title
}