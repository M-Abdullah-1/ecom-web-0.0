import {
  DeleteOutlined,
  EditOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./style.module.scss";
import { Avatar, Pagination, Image } from "antd";
import pic00 from "./../../assets/product/images00.jpeg";
import pic01 from "./../../assets/product/images01.jpeg";
import pic02 from "./../../assets/product/images02.jpeg";
import pic03 from "./../../assets/product/images03.jpeg";

const data = [
  {
    id: `${Math.random()}`,
    name: "abe",
    category: "sport",
    quantity: "78",
    src: pic00,
  },
  {
    id: `${Math.random()}`,
    name: "abe",
    category: "sport",
    quantity: "78",
    src: pic01,
  },
  {
    id: `${Math.random()}`,
    name: "abe",
    category: "sport",
    quantity: "78",
    src: pic02,
  },
  {
    id: `${Math.random()}`,
    name: "abe",
    category: "sport",
    quantity: "78",
    src: pic03,
  },
  {
    id: `${Math.random()}`,
    name: "abe",
    category: "sport",
    quantity: "78",
    src: pic02,
  },
];

const CustomTable = () => {
  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td>
                <div className={style.firstCol}>
                  {/* <Avatar shape="square" src={el.src} /> */}
                  <Image
                    width={50}
                    // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    src={el.src}
                  />
                  <span className={style.name}>{el.name}</span>
                </div>
              </td>
              <td>{el.category}</td>
              <td>{el.quantity}</td>
              <td className={style.actionBox}>
                <div className={style.icon}>
                  <ReadOutlined />
                </div>
                <div className={style.icon}>
                  <EditOutlined />
                </div>
                <div className={style.icon}>
                  <DeleteOutlined />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.paginationBox}>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
};

export default CustomTable;
