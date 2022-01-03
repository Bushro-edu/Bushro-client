import Image from "next/image";
import Childrens from "../../assets/images/childrens.png";
const Informations = () => {
  return (
    <>
      <section className="info-section">
        <div className="container">
          <div className="imi">
            <Image
              className="child-img"
              src={Childrens}
              alt="photo"
              width={620}
              height={820}
            />
          </div>

          <div className="info__content">
            <h2 className="info__content-header">Языковой центр Bushro</h2>
            <strong className="info__strong">30 лет рядом с вами</strong>
            <ul className="info__list">
              <li className="info__item">
                <img
                  src="http://trinitycentre.ru/wp-content/themes/kws-template/images/marker.png"
                  alt="icon"
                />
                <p>растем!</p>
              </li>
              <li className="info__item">
                <img
                  src="http://trinitycentre.ru/wp-content/themes/kws-template/images/marker.png"
                  alt="icon"
                />
                <p>развиваемся!</p>
              </li>
              <li className="info__item">
                <img
                  src="http://trinitycentre.ru/wp-content/themes/kws-template/images/marker.png"
                  alt="icon"
                />
                <p>радуем результатами!</p>
              </li>
              <li className="info__item">
                <img
                  src="http://trinitycentre.ru/wp-content/themes/kws-template/images/marker.png"
                  alt="icon"
                />
                <p>радуемся результатам!</p>
              </li>
            </ul>
            <button className="info__btn">Курсы</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Informations;
