import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <Link className={style.link} to="/">
        <h3>Ecom</h3>
      </Link>
      <div className={style.rightSection}>
        <div className={style.icon}>
          <Link className={style.link} to="cart">
            <ShoppingCartOutlined />
          </Link>
        </div>
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Header;
