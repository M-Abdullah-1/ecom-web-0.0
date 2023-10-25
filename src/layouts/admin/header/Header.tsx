import { Avatar, Badge, Drawer } from "antd";
import profilePic from "./../../../assets/profilePic.jpg";
import style from "./style.module.scss";
import { BellOutlined, MenuOutlined, MessageOutlined } from "@ant-design/icons";
import type { DrawerProps } from "antd/es/drawer";
import { useState } from "react";
import SideBar from "../sidebar/SideBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.main}>
      <div className={style.left} onClick={showDefaultDrawer}>
        <MenuOutlined />
      </div>
      <div className={style.right}>
        <Badge color="lime" dot>
          <MessageOutlined className={style.icon} />
        </Badge>
        <BellOutlined className={style.icon} />
        <Avatar
          className={style.avatar}
          size={40}
          src={profilePic}
          draggable={true}
        />
      </div>
      <Drawer
        // title={`${size} Drawer`}
        placement="left"
        size={size}
        width={250}
        onClose={onClose}
        open={open}
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
        }}
      >
        <SideBar />
      </Drawer>
    </div>
  );
};

export default Header;
