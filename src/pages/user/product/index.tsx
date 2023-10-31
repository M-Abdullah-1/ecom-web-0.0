import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { Button, Image, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const Index = () => {
  const params = useParams();
  return (
    <div className={style.container}>
      <div className={style.selectionBox}>
        <div className={style.imageBox}>
          <div className={style.box}>
            <Image.PreviewGroup
              items={[
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
              ]}
            >
              <Image
                width={300}
                src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
              />
            </Image.PreviewGroup>
            <div className={style.galleryBox}>
              <Image
                preview={false}
                width={100}
                src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
              />
              <Image
                preview={false}
                width={100}
                src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
              />
            </div>
          </div>
        </div>
        <div className={style.detailBox}>
          <div className={style.box}>
            <h3 className={style.title}>Lorem, ipsum dolor.</h3>
            <div className={style.reviewBox}>
              <Rate disabled defaultValue={2} />
              <span className={style.totalReview}>32 reviews</span>
            </div>
            <h1 className={style.price}>$199.99</h1>
            <div className={style.colorBox}>
              <div className={style.selectedColor}>
                <span>Color :</span>
                <Button style={{ background: "#000" }}></Button>
              </div>
              <div className={style.colorBtns}>
                <Button style={{ background: "#000" }}></Button>
                <Button
                  style={{ background: "rgba(255,255,255,0.7)" }}
                ></Button>
                <Button style={{ background: "rgba(0,0,0,0.3)" }}></Button>
              </div>
            </div>
            <div className={style.btnBox}>
              <Button type="primary" block>
                Primary Button
              </Button>
              <Button
                type="primary"
                shape="circle"
                icon={<HeartOutlined />}
                danger
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
