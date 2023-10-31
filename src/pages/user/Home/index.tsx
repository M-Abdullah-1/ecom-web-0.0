import { HeartOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import { Button, Image } from "antd";
import pic0 from "./../../../assets/product/images00.jpeg";
import pic1 from "./../../../assets/product/images01.jpeg";
import pic2 from "./../../../assets/product/images02.jpeg";
import pic3 from "./../../../assets/product/images03.jpeg";
import pic4 from "./../../../assets/product/images04.jpeg";
import pic5 from "./../../../assets/product/images05.jpeg";
import pic6 from "./../../../assets/product/images06.jpeg";
import pic7 from "./../../../assets/product/images07.jpeg";
import pic8 from "./../../../assets/product/images08.jpeg";
import { useNavigate } from "react-router-dom";

const productData = [
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Lorem ipsum dolor sit...",
    price: 43,
    pic: pic0,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Ipsum sit...",
    price: 89,
    pic: pic1,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Lorem ipsum...",
    price: 40,
    pic: pic2,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Sitipsum dolor...",
    price: 23,
    pic: pic3,
  },
];

const featuredProductData = [
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Lorem ipsum dolor sit...",
    price: 43,
    pic: pic4,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Ipsum sit...",
    price: 89,
    pic: pic5,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Lorem ipsum...",
    price: 40,
    pic: pic6,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Sitipsum dolor...",
    price: 23,
    pic: pic7,
  },
  {
    id: `${Math.floor(Math.random() * 100) + 1}`,
    title: "Sitipsum dolor...",
    price: 23,
    pic: pic8,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const productNavigateHandler = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={style.container}>
      <div className={style.heroSection}>
        <div className={style.titleBox}>
          <h1>Your Dream Shoe, Just a Click Away</h1>
        </div>
      </div>
      <div className={style.productSection}>
        <div className={style.sectionTitle}>
          <h1>New Arrivals</h1>
        </div>
        <div className={style.productRow}>
          {productData.map((el) => (
            <div
              onClick={() => {
                productNavigateHandler(+el.id);
              }}
              className={style.box}
              key={el.id}
            >
              <div className={style.pic}>
                <Image
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                  preview={false}
                  src={el.pic}
                />
              </div>
              <div className={style.infoSection}>
                <div className={style.title}>
                  <span>{el.title}</span>
                </div>
                <div className={style.footer}>
                  <div className={style.icon}>
                    <Button shape="circle" icon={<HeartOutlined />} danger />
                  </div>
                  <div className={style.price}>
                    <span>${el.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.productSection}>
        <div className={style.sectionTitle}>
          <h1>Featured Products</h1>
        </div>
        <div className={style.productRow}>
          {featuredProductData.map((el) => (
            <div className={style.box} key={el.id}>
              <div className={style.pic}>
                <Image
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                  preview={false}
                  src={el.pic}
                />
              </div>
              <div className={style.infoSection}>
                <div className={style.title}>
                  <span>{el.title}</span>
                </div>
                <div className={style.footer}>
                  <div className={style.icon}>
                    <Button shape="circle" icon={<HeartOutlined />} danger />
                  </div>
                  <div className={style.price}>
                    <span>${el.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
