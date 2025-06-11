import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/reducers/cartdata";


const ShoeCard = () => {

  const data = useSelector((state) => state.shoe.data);
  // console.log(data)
  const dispatch = useDispatch()
  const navigate = useNavigate();
   const handleAddToCart = (data) => {
    dispatch(addToCart(data))
    navigate('/cart')
  
  };


  return (
    <>
      <div className="h-fit w-screen  mt-10 flex flex-wrap gap-10 items-center py-8 px-30  ">
        {data.map((item) => (
          <div key={item.id}  className=" bg-[rgb(226,226,231)] h-80 w-70 b-blue-200" onClick={()=> handleAddToCart(item)}>
            <div className='h-65 w-69'>
              <img src={item.image} alt="" />
            </div>
            <h3 className="text-xl mt-[-6%]">${item.price}</h3>
            <p>{item.para}</p>
            <small>Performance</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoeCard;
