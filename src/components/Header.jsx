import React from "react";
import { Link } from "react-router-dom";

const Header = ({insideHome}) => {
  return (
    <nav className="flex bg-violet-600 w-full text-white p-2 fixed">
      <Link className="text-2xl font-bold" to={"/"}>
        <i className="fa-solid fa-truck-fast me-3"></i>E Cart
      </Link>
      <ul className="flex-1 text-right">
        { insideHome && <li className="list-none inline-block px-5">
          <input
            className="w-48 rounded p-2"
            type="text"
            placeholder="Search Product here"
          />{" "}
        </li>}

        <li className="list-none inline-block px-5">
          <Link to={'/wishlist'}>
              <i className="fa-solid fa-heart text-red-600 me-1"></i>Wishlist{" "}
              <span className=" bg-black text-white rounded-full p-1 ">0</span>
          </Link>
        </li>

        <li className="list-none inline-block px-5">
         <Link to={'/cart'}>
              <i className="fa-solid fa-cart-plus text-green-600"></i>Cart{" "}
              <span className=" bg-black text-white rounded-full p-1">0</span>
         </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
