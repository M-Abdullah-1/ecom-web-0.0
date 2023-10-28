import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import { Button, Image } from "antd";

import pic00 from "./../../assets/product/images00.jpeg";
import pic01 from "./../../assets/product/images01.jpeg";
import pic02 from "./../../assets/product/images02.jpeg";

const cartData = [
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    pic: pic00,
    title: "Lorem ipsumf few",
    price: 78,
    quantity: 9,
    total: 834,
  },
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    pic: pic01,
    title: "Fewwrg Ipsumf",
    price: 18,
    quantity: 3,
    total: 84,
  },
  {
    id: `${Math.floor(Math.random() * 10) + 1}`,
    pic: pic02,
    title: "Ipsumf few",
    price: 99,
    quantity: 5,
    total: 495,
  },
];

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.tableBox}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((el) => (
              <tr key={el.id}>
                <td>
                  <div className={style.item}>
                    <div className={style.image}>
                      <Image src={el.pic} />
                    </div>
                    <div className={style.title}>{el.title}</div>
                  </div>
                </td>
                <td>
                  <div className={style.price}>${el.price}</div>
                </td>
                <td>
                  <div className={style.quantity}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<PlusOutlined />}
                    />
                    <span>{el.quantity}</span>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<MinusOutlined />}
                    />
                  </div>
                </td>
                <td>
                  <div className={style.total}>
                    <span>$ {el.total}</span>
                  </div>
                </td>
                <td>
                  <Button shape="circle" icon={<CloseOutlined />} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
