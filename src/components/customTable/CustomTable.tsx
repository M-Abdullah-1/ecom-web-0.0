import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import style from "./style.module.scss";
import { Pagination, Image, Modal, Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import pic00 from "./../../assets/product/images00.jpeg";
import pic01 from "./../../assets/product/images01.jpeg";
import pic02 from "./../../assets/product/images02.jpeg";
import pic03 from "./../../assets/product/images03.jpeg";

const data = [
  {
    id: `${Math.random()}`.slice(0, 7),
    product: "abe",
    date: Date.now(),
    items: `${Math.floor(Math.random() * 10 + 1)}`,
    price: `${Math.random() * 1000}`.slice(0, 5),
    status: "pending",
    src: pic00,
  },
  {
    id: `${Math.random()}`.slice(0, 7),
    product: "abe",
    date: Date.now(),
    items: `${Math.floor(Math.random() * 10 + 1)}`,
    price: `${Math.random() * 1000}`.slice(0, 5),
    status: "pending",
    src: pic01,
  },
  {
    id: `${Math.random()}`.slice(0, 7),
    product: "abe",
    date: Date.now(),
    items: `${Math.floor(Math.random() * 10 + 1)}`,
    price: `${Math.random() * 1000}`.slice(0, 5),
    status: "pending",
    src: pic02,
  },
  {
    id: `${Math.random() * 10}`.slice(0, 7),
    product: "abe",
    date: Date.now(),
    items: `${Math.floor(Math.random() * 10 + 1)}`,
    price: `${Math.random() * 1000}`.slice(0, 5),
    status: "pending",
    src: pic03,
  },
  {
    id: `${Math.random()}`.slice(0, 7),
    product: "abe",
    date: Date.now(),
    items: `${Math.floor(Math.random() * 10 + 1)}`,
    price: `${Math.random() * 1000}`.slice(0, 5),
    status: "pending",
    src: pic02,
  },
];

const config = {
  title: "Warnning!",
  okText: "Yes",
  cancelText: "No",
  okButtonProps: { style: { backgroundColor: "red", color: "white" } },
  content: (
    <>
      <p>Are you sure, that you want to delete!</p>
    </>
  ),
};

const CustomTable = () => {
  const [modal, contextHolder] = Modal.useModal();

  const items: MenuProps["items"] = [
    {
      label: (
        <div>
          <EyeOutlined />
          &nbsp;&nbsp;
          <span>Preview</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div>
          <EditOutlined />
          &nbsp;&nbsp;
          <span>Edit</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          onClick={async () => {
            const confirmed = await modal.confirm(config);
            console.log("Confirmed: ", confirmed);
          }}
          style={{ color: "red" }}
        >
          <DeleteOutlined />
          &nbsp;&nbsp;
          <span>Delete</span>
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <div className={style.table}>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Product</th>
            <th>Date</th>
            <th>Items</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>
                <div className={style.firstCol}>
                  <Image width={50} src={el.src} />
                  <span className={style.name}>{el.product}</span>
                </div>
              </td>
              <td>{el.date}</td>
              <td>{el.items}</td>
              <td>${el.price}</td>
              <td>{el.status}</td>
              <td>
                <div className={style.actionBox}>
                  {/* <div className={style.icon}>
                    <ReadOutlined />
                  </div>
                  <div className={style.icon}>
                    <EditOutlined />
                  </div>
                  <div className={style.icon}>
                    <Button
                      onClick={async () => {
                        const confirmed = await modal.confirm(config);
                        console.log("Confirmed: ", confirmed);
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div> */}
                  <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                    placement="bottomRight"
                    arrow
                  >
                    {/* <a onClick={(e) => e.preventDefault()}>Click me</a> */}
                    <div className={style.icon}>
                      <MoreOutlined />
                    </div>
                  </Dropdown>
                  {contextHolder}
                  {/* <div className={style.icon}>
                    <DeleteOutlined />
                  </div> */}
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
