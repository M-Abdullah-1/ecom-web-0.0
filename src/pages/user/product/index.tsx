import { useParams } from "react-router-dom";
import style from "./style.module.scss";

const Index = () => {
  const params = useParams();
  return (
    <div className={style.container}>
      <h1>{params.id}</h1>
    </div>
  );
};

export default Index;
