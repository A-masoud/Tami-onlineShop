import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  ShareIcon,
  HeartIcon,
  BellIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export function ProductImages({ product }) {
  return (
    <div className="flex flex-col md:flex-row  md:order-3  ">
      {/* بخش تصاویر */}
      <div className="flex flex-col items-center md:items-start md:w-4/5 lg:w-3/4">
        {/* تصویر اصلی */}
        <img
          src={product.image}
          alt={product.title}
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-md "
        />

        {/* تصاویر کوچک + آیکون‌ها */}
        <div className=" flex flex-row justify-center gap-2 items-center w-full ">
          
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              className="w-14 h-14  object-contain "
            />
          ))}
          
        </div>
      </div>

      {/* آیکون‌های کناری */}
      <div className="flex md:flex-col  items-center gap-4 md:gap-3 md:w-1/5 lg:w-1/4  ">
        <ShareIcon className="w-6 h-6 text-gray-700 hover:text-blue-600" />
        <HeartIcon className="w-6 h-6 text-gray-700 hover:text-red-500" />
        <BellIcon className="w-6 h-6 text-gray-700 hover:text-yellow-500" />
        <ChartBarIcon className="w-6 h-6 text-gray-700 hover:text-green-600" />
      </div>
    </div>
  );
}
