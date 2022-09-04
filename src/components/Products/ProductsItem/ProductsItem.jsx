import { Product } from "./styled";

const ProductsItem = ({ item }) => {
  const { image, price, product_name, seller_store } = item;

  const priceWon = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Product>
      <img src={image} alt="상품 이미지" />
      <ul>
        <li className="store_title">{seller_store}</li>
        <li className="product_name">{product_name}</li>
        <li className="product_price">
          {priceWon}
          <span>원</span>
        </li>
      </ul>
    </Product>
  );
};

export default ProductsItem;
