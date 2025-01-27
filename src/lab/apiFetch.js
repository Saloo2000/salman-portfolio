

export async function dataFetch() {
    const data = await fetch("http://localhost:3000/books")
    const books = await data.json()
    console.log(books);
    
    return books
    
}