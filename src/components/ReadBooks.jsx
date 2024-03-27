import ReadBooksingle from "./ReadBooksingle";

const ReadBooks = () => {
    const readBooks = localStorage.getItem('readBook')
    const readList = JSON.parse(readBooks)
    console.log(readList)
    return (
        <div  className=" mt-10">
            {
                readList && readList.map(Book=> <ReadBooksingle key={Book.id} book={Book}></ReadBooksingle>)
            }
        </div>
    );
};

export default ReadBooks;