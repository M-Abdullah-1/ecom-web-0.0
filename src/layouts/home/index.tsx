import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const index = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default index;
