import { Link } from "react-router-dom"
import Header from "../header/Header"

const products = [
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
    {
      id: 1,
      name: 'Classmate',
      href: '#',
      imageSrc: 'https://scooboo.in/cdn/shop/products/classmate-pulse-6-subject-notebook-b5ruledclassmatescooboo02100117ps8902519001177-969669.jpg?v=1667525100&width=1125',
      imageAlt: "Classmate",
      price: '35R',
      color: 'white page',
    },
   
  ]
  
  export default function AllProducts() {
    return (
      <>
      <Header/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to="/product">
                <div key={product.id} className="group relative">
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
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div></>
    )
  }
  