import { Product } from "./styled";
import { Link } from "react-router-dom";

const ProductsItem = () => {
  return (
    <Product>
      <Link to={`/products/${}`}>
        <img src={} alt="상품 이미지" />
        <ul>
          <li className="store-title">{}</li>
          <li className="product-name">{}</li>
          <li className="product-price">
            {priceWon}
            <span>원</span>
          </li>
        </ul>
      </Link>
    </Product>
  );
};

export default ProductsItem;
