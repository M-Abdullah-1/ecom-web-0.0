import { Avatar, Badge } from "antd";
import profilePic from "./../../../assets/profilePic.jpg";
import style from "./style.module.scss";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={style.main}>
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
  );
};

export default Header;
