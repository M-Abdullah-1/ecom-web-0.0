import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className={style.container}>
      <h3>Ecom</h3>
      <div className={style.rightSection}>
        <div className={style.icon}>
          <ShoppingCartOutlined />
        </div>
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Header;
