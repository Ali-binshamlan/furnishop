'use client';

import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';

const ProductCard = ({ image, title, price, oldPrice }) => {
  return (
    <div
      className="
        w-[160px] h-[225px] p-2 rounded-xl shadow-sm hover:shadow-md 
        transition duration-200 flex flex-col mb-5
        md:w-[290px] md:h-[350px]
      "
    >
      {/* Image + Button Area */}
      <div
  className="
    relative w-[120px] h-[130px] mx-auto border border-gray-200 
    rounded-md overflow-hidden
    md:w-[240px] md:h-[250px]
  "
>
  <img
    src={image}
    alt={title}
    className="object-contain rounded-md w-full h-full"
  />
  <button
    className="
      absolute bottom-2 right-2 w-7 h-7 flex items-center justify-center 
      rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 
      transition
    "
  >
    <FiPlus size={16} />
  </button>
</div>


      {/* Text Area */}
      <div className="mt-3 px-2">
        <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
        <div className="flex items-center text-sm mt-1">
          <span className="font-semibold">${price}</span>
          <span className="ml-2 line-through text-gray-400 text-xs">${oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
