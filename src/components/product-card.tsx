import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "sdsgsdgvb"

const ProductCard = ({
  productId,
  photo,
  price,
  stock,
  name,
  handler,
}: ProductsProps) => {
  return <div className="product-card">
    <img src={photo} alt={name} />
    <p>{name}</p>
    <span>₹{price}</span>


    <div>
      <button onClick={()=>handler()}>
        <FaPlus/>
      </button>
    </div>
  </div>;
};

export default ProductCard;
