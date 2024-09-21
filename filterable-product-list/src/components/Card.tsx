import { Product } from "./products"; // Importing the Product type

type CardProps = {
  product: Product;
};

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg text-[#020817] transition shadow-lg hover:shadow-xl p-1">
      {/* image */}
      <div className="relative h-[300px] sm:h-[300px]">
        <img
          src={product.src}
          alt="product image"
          className="inset-0 h-full w-full rounded-t-lg object-contain p-1"
        />
      </div>

      {/* body */}
      <div className="bg-white p-3 border-t rounded-b-lg ">
        {/* ===== category ===== */}
        <p className="mb-2 text-sm lowercase font-medium text-sky-500">
          {product.category}
        </p>
        {/* ===== title ===== */}
        <h3 className="md:text-lg text-sm font-semibold text-gray-900  hover:text-sky-600 transition duration-300 line-clamp-1">
          {product.title}
        </h3>
        {/* ===== description ===== */}
        <h3 className="mt-2 mb-4 md:text-base text-sm text-gray-600 line-clamp-2">
          {product.description}
        </h3>
        {/* ===== price ===== */}
        <p className="text-3xl font-bold text-[#00A97F]">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
