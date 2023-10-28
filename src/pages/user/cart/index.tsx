import { Button } from "antd";
import CartTable from "../../../components/cartTable";
import style from "./style.module.scss";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>Your Items in Cart</div>
      <div className={style.cartProductSection}>
        <CartTable />
        <div className={style.checkoutBox}>
          <div className={style.title}>
            <h3>Summary</h3>
          </div>
          <div className={style.row}>
            <span>Subtotal</span>
            <span>$90</span>
          </div>
          <div className={style.row}>
            <span>Estimated Shipping & Handling</span>
            <span>$12</span>
          </div>
          <div className={style.row}>
            <span>Estimated Tax</span>
            <span>--</span>
          </div>

          <div className={style.row}>
            <span>Total</span>
            <span>$123</span>
          </div>
          <div className={style.btnBox}>
            <Button type="primary" block>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
