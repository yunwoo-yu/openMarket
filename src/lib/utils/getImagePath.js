const getImagePath = () => {
  const nowUrl = window.location.pathname;
  const publicUrl = process.env.PUBLIC_URL;

  if (nowUrl === "/cart") {
    return `${publicUrl}/assets/icon-shopping-cart-2.svg`;
  }
  return `${publicUrl}/assets/icon-shopping-cart.svg`;
};
export default getImagePath;
