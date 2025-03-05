import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from "../../../types/producttype";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
      <div className="relative max-h-72 flex-1/2">IMG</div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-blue-900 mt-4 ">R$ {product.price}</p>
      </div>
      <div className="flex justify-between text-center">
        <button className="text-black shadow-lg px-4 py-2 rounded-lg mt-4">
          <a href="#" className="hover:text-gray-400">
            Detalhes
          </a>
        </button>
        <button className="text-black shadow-lg  px-4 py-2 rounded-md mt-4">
          <a href="#" className="hover:text-gray-400">
            <FaShoppingCart className="w-4 h-4" />
          </a>
        </button>
      </div>
    </div>
  );
}
