import { useLoaderData } from "react-router-dom";
import SingleReview from "../components/SingleReview";

const BookReviews = () => {
    const allBooks = useLoaderData()
    

    return (
        <div className="w-full">
            <div className="w-full text-center mt-20 py-8 bg-gray-100 text-4xl font-bold rounded-2xl">
            <h1 className="">
                Reviews
            </h1>
        </div>
        {
            allBooks.map(book=> <SingleReview key={book.id} book={book}></SingleReview>)
        }
        </div>
    );
};

export default BookReviews;