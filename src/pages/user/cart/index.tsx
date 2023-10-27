import CartTable from "../../../components/cartTable";
import style from "./style.module.scss";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>Your Items in Cart</div>
      <div className={style.cartProductSection}>
        <CartTable />
      </div>
    </div>
  );
};

export default index;
