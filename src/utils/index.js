
import toast from "react-hot-toast"




export const getBooks =()=>{
    let books = []
    const storedBooks = localStorage.getItem('readBook')
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}

export  const saveBooks = book=>{
    let books = getBooks()
    const isExist = books.find(b=> b.id=== book.id)
    if(isExist){
        return toast.error('Already Added to the List')
    }
    books.push(book)
    localStorage.setItem('readBook', JSON.stringify(books))
    toast.success('Book Added to Read List')
}




export const getWishlist =()=>{
    
    let books = []
    const storedBooks = localStorage.getItem('wishlist')
    if(storedBooks){
        books = JSON.parse(storedBooks)
        
    }
    return books
}

export  const saveWishlist = book=>{
    
    let books = getWishlist()
    
    const isExist = books.find(b=> b.id=== book.id)
    if(isExist){
        return toast.error('Already Added to Wishlist')
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books))
    toast.success('Book Added to Wishlist')
}