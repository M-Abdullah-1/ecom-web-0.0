import style from "./style.module.scss";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.testBox}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
