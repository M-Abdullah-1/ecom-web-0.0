import Chart from "../chart/Chart";
import style from "./style.module.scss";

const StatBox = () => {
  return (
    <div className={style.main}>
      <h3 className={style.title}>Product Sold</h3>
      <div className={style.stats}>
        <span className={style.statNum}>987</span>
        <div className={style.lineChart}>
          <Chart />
        </div>
      </div>
      <div className={style.description}>
        <p>+2.6% gain from last week</p>
      </div>
    </div>
  );
};

export default StatBox;
