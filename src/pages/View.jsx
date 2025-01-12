import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWhishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);

  const { allProducts } = useSelector((state) => state.productReducer);
  console.log(allProducts);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
      console.log(allProducts.find((item) => item.id == id));
      setProduct(allProducts.find((item) => item.id == id));
    }
  }, []);

  const handleWishlist=()=>{
    const existingproduct = userWishlist?.find(item=>item.id == id)
    if(existingproduct){
      alert("Product Already in Wishlist")
    }else{
      dispatch(addToWhishlist(product))
    }
  }
  const handleCart=()=>{
    dispatch(addToCart(product))
    const existingproduct = userCart?.find(item=>item.id == id)
    if(existingproduct){
      alert("Product Incrementing")
    }else{
      alert("Product added to cart!!!")
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col mx-5 ">
        <div className="grid grid-cols-2 items-center h-screen">
          <img
            width={"450px"}
            height={"200px"}
            src={product?.thumbnail}
            alt=""
          />
          <div className="pt-36">
            <h3 className="font-bold">PID : {id}</h3>
            <h1 className="font-bold text-5xl">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">
              ${product?.price}
            </h4>
            <h4>Category : {product?.category}</h4>
            <p>
              <span className="font-bold">Description</span>:
              {product?.description}
            </p>
            <div className="flex  justify-between mt-5 mb-28">
              <button onClick={handleWishlist} className="bg-blue-600 text-white p-2 rounded-md shadow-2xl">
                Add to wishlist
              </button>
              <button onClick={handleCart} className="bg-green-600 text-white p-2 rounded-md shadow-2xl">
                Add to Cart
              </button>
            </div>
            <h2 className="mt-5 font-bold text-2xl mb-5">Client Reviews</h2>
            {
              product?.reviews?.length>0 ?
              product?.reviews?.map(item=>(
                <div key={item.date} className="shadow-border p-2 mb-2">
                    <h5>
                      <span className="font-bold">{item?.reviewerName}</span> : 
                      <span> {item?.comment}</span>
                    </h5>
                    <p>Rating : {item?.rating}<i class="fa-solid fa-star text-yellow-500"></i></p>
                </div>
              )):
              <div>No Reviews Yet!!!</div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
