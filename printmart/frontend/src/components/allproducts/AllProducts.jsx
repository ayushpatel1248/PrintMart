import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function AllProducts() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  

  const fetchProductData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/getAllProduct`);
      setProducts(response.data.data);
      console.log("this is dat a= ", products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    fetchProductData();
  },[])

  
  
  return (
    <>
    <Header />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} onClick={() => navigate(`/product/${product._id}`)} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
