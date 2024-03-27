
import WishlistSingle from "./WishlistSingle";

const WishLIst = () => {
    const wishBook = localStorage.getItem('wishlist')
    const wishList = JSON.parse(wishBook)
    return (
        <div  className=" mt-10">
            {
                wishList && wishList.map(Book=> <WishlistSingle key={Book.id} book={Book}></WishlistSingle>)
            }
        </div>
    );
};

export default WishLIst;