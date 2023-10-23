import CustomTable from "../../components/customTable/CustomTable";
import style from "./style.module.scss";

const OrderPage = () => {
  return (
    <div className={style.main}>
      <CustomTable />
    </div>
  );
};

export default OrderPage;
