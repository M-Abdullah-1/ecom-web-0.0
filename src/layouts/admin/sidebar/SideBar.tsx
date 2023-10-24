import {
  BarChartOutlined,
  CreditCardOutlined,
  DeliveredProcedureOutlined,
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import style from "./style.module.scss";
import Divider from "../../../components/customDivider/CustomDivider";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={style.container}>
      <div className={style.brandName}>Brand Name</div>
      <Divider />
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="/admin"
            end
          >
            <HomeOutlined className={style.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="order"
          >
            <ShoppingCartOutlined className={style.icon} />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="product"
          >
            <ShoppingOutlined className={style.icon} />
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="report"
          >
            <BarChartOutlined className={style.icon} />
            <span>Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="transaction"
          >
            <CreditCardOutlined className={style.icon} />
            <span>Transactions</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="shipment"
          >
            <DeliveredProcedureOutlined className={style.icon} />
            <span>Shipment</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.activeLink}` : style.navLink
            }
            to="setting"
          >
            <SettingOutlined className={style.icon} />
            <span>Setting</span>
          </NavLink>
        </li>
        <li>
          <div className={style.navLink}>
            <LogoutOutlined className={style.icon} />
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
