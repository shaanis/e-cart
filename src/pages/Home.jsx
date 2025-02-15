import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Slices/productSlice";
const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, errMsg } = useSelector((state) => state.productReducer);
  console.log(allProducts, loading, errMsg);

  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalpages = Math.ceil(allProducts?.length/productPerPage) 
  const currentPageProductLastIndex = currentPage* productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productPerPage
  const visibleProduct = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const navigateNextPage =()=>{
    if(currentPage != totalpages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateprevPage =()=>{
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome={true} />
      <div className="pt-20 container px-4 auto">
        {loading ? (
          <div className="flex justify-center items-center my-5 text-lg">
            <img
              width={"70px"}
              height={"70px"}
              src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"
              alt=""
            />
            Loading....
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {allProducts?.length > 0 ? (
                visibleProduct?.map((product) => (
                  <div
                    key={product.id}
                    className="rounded border p-2 shadow-2xl"
                  >
                    <img
                      className="w-full h-50"
                      src={product.thumbnail}
                      alt=""
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      <Link
                        to={`/${product.id}/view`}
                        className="bg-violet-600 rounded p-2 mt-3 text-white inline-block"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center font-bold to-red-600 my-5 text-lg">
                  No Products Found!!!
                </div>
              )}
            </div>
          <div className="text-2xl text-center mt-20">
              <span onClick={navigateprevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
              <span >{currentPage} of {totalpages}</span>
              <span onClick={navigateNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>
          </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
