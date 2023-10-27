import React, { useState } from "react";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import { Avatar, Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.container}>
      <h3>Ecom</h3>
      <div className={style.rightSection}>
        <div className={style.icon}>
          <div onClick={showDrawer}>
            <ShoppingCartOutlined />
          </div>
          <Drawer title="Cart" placement="right" onClose={onClose} open={open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Header;
