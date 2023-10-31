import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { Button, Image, Progress, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const reviewRatingData = [
  { id: `${Math.random()}`, star: "5", percent: 89.9, noOfReviews: 48 },
  { id: `${Math.random()}`, star: "4", percent: 69.9, noOfReviews: 18 },
  { id: `${Math.random()}`, star: "3", percent: 0, noOfReviews: 0 },
  { id: `${Math.random()}`, star: "2", percent: 19.9, noOfReviews: 7 },
  { id: `${Math.random()}`, star: "1", percent: 3.9, noOfReviews: 4 },
];

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
      <div className={style.productDetailSection}>
        <div className={style.productDetailBox}>
          <h1>Details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas
            doloribus voluptates blanditiis ratione aspernatur rem quae nam
            sapiente facilis expedita tempora dolor natus ex consequatur
            reiciendis quo iusto similique, sint voluptatem officiis sunt
            laudantium labore? Sapiente non nemo earum similique porro sit
            aperiam repellendus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in
            itaque neque dicta qui labore ut ducimus eligendi quisquam, soluta
            libero repellat hic illum voluptas numquam fugiat laudantium est!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            esse tenetur labore molestiae similique aliquam assumenda qui
            architecto quia mollitia est, sed magni minima velit quod laudantium
            soluta repellat dignissimos placeat blanditiis non. Adipisci
            voluptatum dolores inventore illo, alias sequi quia, assumenda
            laboriosam ea non numquam aliquid doloremque est suscipit
            perferendis repellendus praesentium vero hic. Consequuntur,
            molestias? Expedita, ducimus autem!
          </p>
        </div>
        <div className={style.reviewDetailBox}>
          <div className={style.reviewRow}>
            <Rate
              className={style.reviewStars}
              disabled
              allowHalf
              defaultValue={4.5}
            />
            <span className={style.reviewNumber}>4.8</span>
          </div>
          {reviewRatingData.map((el) => (
            <div className={style.progressRow} key={el.id}>
              <span className={style.star}>{el.star}</span>
              <Progress
                percent={el.percent}
                status="active"
                showInfo={false}
                strokeColor={{ from: "#108ee9", to: "#87d068" }}
              />
              <span className={style.reviewNo}>{el.noOfReviews}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
