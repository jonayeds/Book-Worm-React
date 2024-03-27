import { NavLink, useLoaderData } from 'react-router-dom';
import banner from '../assets/banner.png'
import Books from '../components/Books';
const Home = () => {
  const data = useLoaderData()
  
  console.log(data)
  const{id} =data
  return (
    <div>
        <div className="hero min-h-screen bg-base-200 mt-20 rounded-2xl px-5 ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img src={banner} className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-7xl font-medium medium  font-serif  leading-relaxed">Books to freshen up <br />
your bookshelf</h1>
      
<NavLink  to={'/listed-books'} className=" btn border-none bg-green-500 text-white mt-8">View The List</NavLink>
    </div>
  </div>
</div>
<div className=' my-32 font-serif'>
<h1 className="text-5xl text-center  font-semibold">Books</h1>
<div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2  grid-cols-1'>
{
  data.map((book)=><Books book={book} key={id}></Books>)
}
</div>
</div>
  
    </div>

  );
};

export default Home;
