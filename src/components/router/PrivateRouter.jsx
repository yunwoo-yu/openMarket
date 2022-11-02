import { Navigate } from "react-router-dom";

const PrivateRotuer = ({ authenticated, children }) => {
  return <>{authenticated ? <Navigate to={"/"} /> : children}</>;
};

export default PrivateRotuer;
