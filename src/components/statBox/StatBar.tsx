import LineBar from "../chart/LineBar";
import style from "./style.module.scss";

const StatBox = () => {
  return (
    <div className={style.largeBox}>
      <h3 className={style.title}>Monthly Revenue</h3>
      <div className={style.barChart}>
        <LineBar />
      </div>
    </div>
  );
};

export default StatBox;
