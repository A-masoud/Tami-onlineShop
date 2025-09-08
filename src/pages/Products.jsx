import { products } from "../data/fakeData";
import { Link } from "react-router-dom";

export function Products() {
  return (
    
      <div className="grid w-full rounded-xl   mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 p-4 bg-black ">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              p-4 rounded-xl 
              flex flex-row-reverse items-center gap-4
              sm:flex-col
              shadow-md
              shadow-gray-500
              w-auto
             bg-gray-900
              
            "
          >
            {/* عکس */}
            <img
              src={product.image}
              alt={product.title}
              className="lg:w-48 lg:h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 w-24 h-24 object-contain rounded-md"

            />

            {/* محتوا سمت چپ عکس */}
            <div className="flex flex-col flex-grow items-center">
              <h3 className=" text-lg text-gray-700">{product.title}</h3>
              <div className="mt-auto">
                <p className="text-gray-950">
                  {product.price.toLocaleString()} تومان
                </p>
                {/* اینجا می‌تونی امتیاز یا ستاره اضافه کنی */}
                {/* <p className="text-yellow-500">★★★★☆</p> */}
              </div>

              <Link
                to={`/products/${product.id}`}
                className="bg-blue-700  text-sm rounded-lg p-1.5 m-1.5 text-gray-200 w-auto"
              >
                افزودن به سبد خرید
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
}
