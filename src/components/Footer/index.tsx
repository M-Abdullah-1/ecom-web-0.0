import style from "./style.module.scss";

const index = () => {
  return (
    <div className={style.container}>
      <div>
        <span>© 2023 Ecom</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Cookies</span>
      </div>
    </div>
  );
};

export default index;
