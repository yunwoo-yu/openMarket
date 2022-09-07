import { Product } from "./styled";
import { Link } from "react-router-dom";

const ProductsItem = ({ item }) => {
  const { image, price, product_name, seller_store, product_id } = item;

  const priceWon = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Product>
      <Link to={`/products/${product_id}`}>
        <img src={image} alt="상품 이미지" />
        <ul>
          <li className="store-title">{seller_store}</li>
          <li className="product-name">{product_name}</li>
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
