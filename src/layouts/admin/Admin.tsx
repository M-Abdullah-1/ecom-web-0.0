import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import style from "./style.module.scss";
import Header from "./header/Header";

const AdminLayout = () => {
  return (
    <>
      <div className={style.bgImage} />
      <div className={style.container}>
        <nav className={style.sidebar}>
          <SideBar />
        </nav>
        <main className={style.main}>
          <header className={style.header}>
            <Header />
          </header>
          <div className={style.content}>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
