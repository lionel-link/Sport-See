import './Nutrients.css';
import calories from './../assets/img/calories-icon.png';
import carbs from './../assets/img/carbs-icon.png';
import proteines from './../assets/img/protein-icon.png';
import fat from './../assets/img/fat-icon.png';

function Nutrients({ data }) {
  return (
    <div className="nutrients">
      <div className="Layout__dataCard">
        <img className="Layout__dataCard__img" src={calories} alt="" />
        <div className="Layout__dataCard__description">
          <div className="Layout__dataCard__data">{data.calorieCount} KCal</div>
          <div className="Layout__dataCard__title">Calories</div>
        </div>
      </div>
      <div className="Layout__dataCard">
        <img className="Layout__dataCard__img" src={proteines} alt="" />
        <div className="Layout__dataCard__description">
          <div className="Layout__dataCard__data">{data.carbohydrateCount} g</div>
          <div className="Layout__dataCard__title">Proteines</div>
        </div>
      </div>
      <div className="Layout__dataCard">
        <img className="Layout__dataCard__img" src={carbs} alt="" />
        <div className="Layout__dataCard__description">
          <div className="Layout__dataCard__data">{data.carbohydrateCount} g</div>
          <div className="Layout__dataCard__title">Glucides</div>
        </div>
      </div>
      <div className="Layout__dataCard">
        <img className="Layout__dataCard__img" src={fat} alt="" />
        <div className="Layout__dataCard__description">
          <div className="Layout__dataCard__data">{data.lipidCount} g</div>
          <div className="Layout__dataCard__title">Lipides</div>
        </div>
      </div>
    </div>
  );
}

export default Nutrients;
