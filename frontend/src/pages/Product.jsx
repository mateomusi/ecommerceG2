import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [flavor, setFlavor] = useState(""); // Cambiar "size" por "flavor"

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-[#0085ff]">
            {productData.name}
          </h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2 text-[#69b4ff]">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-[#e1ffff]">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-[#69b4ff] md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 text-[#e1ffff]">
            <p>Select Flavor</p> {/* Cambiado "Size" por "Flavor" */}
            <div className="flex gap-2">
              {productData.flavors.map((item, index) => (
                <button
                  onClick={() => setFlavor(item)} // Cambiado "setSize" por "setFlavor"
                  className={`border py-2 px-4 bg-[#69b4ff] ${
                    item === flavor ? "border-[#0085ff]" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, flavor)} // Cambiado "size" por "flavor"
            className="bg-black text-[#69b4ff] px-8 py-3 text-sm active:bg-gray-700 border-[#69b4ff]"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-[#9e9e9e] mt-5 flex flex-col gap-1">
            <p>100% Producto Original.</p>
            <p>El pago en efectivo esta disponible en este producto.</p>
            <p>
              Política de devolución y cambio sencilla en un plazo de 7 días.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm text-[#0085ff]">Descripcion</b>
          <p className="border px-5 py-3 text-sm text-[#0085ff]">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-[#9e9e9e]">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* --------- display related products ---------- */}

      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;
