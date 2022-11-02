import { Navigate } from "react-router-dom";

const PrivateRotuer = ({ authenticated, children }) => {
  return (
    <>
      {authenticated ? (
        <Navigate to="/" {...alert("접근할 수 없습니다.")} />
      ) : (
        children
      )}
    </>
  );
};

export default PrivateRotuer;
