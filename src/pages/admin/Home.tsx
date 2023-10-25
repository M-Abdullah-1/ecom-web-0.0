import StatBar from "../../components/statBox/StatBar";
import StatBox from "../../components/statBox/StatBox";
import StatLineShadow from "../../components/statBox/StatLineShadow";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={style.main}>
      <div className={style.home}>
        <div className={style.firstRow}>
          <StatBox />
          <StatLineShadow />
        </div>
        <div className={style.secondRow}>
          <StatBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
