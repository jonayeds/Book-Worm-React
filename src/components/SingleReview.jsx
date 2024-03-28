/* eslint-disable react/prop-types */

const SingleReview = ({book}) => {
    const  {review,  bookName, image} =book  
    return (
        <div className="bg-gray-100 my-10 p-10 rounded-3xl flex flex-col items-center">
            <img src={image} alt="" className="h-96" />
            <h1 className="text-4xl text-gray-500 font-serif my-6">{bookName}</h1>
            <p className="text-2xl text-gray-400 font-semibold"><span className="text-gray-600">Review:</span> {review}</p>
        </div>
    );
};

export default SingleReview;