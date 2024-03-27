/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
const ToReade = () => {
  const readBooks = localStorage.getItem("readBook");
  const readList = JSON.parse(readBooks);
  const TriangleBar = (props) => {
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className='my-44'>
      <BarChart width={1000} height={600} data={readList}>
    <XAxis dataKey="bookName"  />
    <YAxis />
    <Bar dataKey="totalPages" fill="#66d164"
      shape={<TriangleBar />} />
  </BarChart>
    </div>
  );
};

export default ToReade;
