import './Layout.css';
import DailyActivity from '../DailyActivity/DailyActivity';
import AverageSession from '../AverageSession/AverageSession';
import RadarSession from '../RadarSession/RadarSession';
import Score from '../Score/Score';
import Nutrients from '../Nutrients/Nutrients';

function Layout({ user }) {
  console.log(user)
  const activity = user.activity;
  const average = user.sessions;
  const score = user.score;
  const performance = user.performance;
  const data = user.keyData
  return (
    <div className="Layout">
      <div className="Layout__title">
        Bonjour <span className="Layout__userName"> {user.userInfos.lastName}</span>
      </div>
      <div className="Layout__subTitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
      <div className="Layout__reportingContainer">
        <div className="Layout__reporting">
          <div className="Layout__dailyActivity">
            <DailyActivity activity={activity} />
          </div>
          <div className="Layout__reportingContainer">
            <div className="Layout__dailyActivity">
              <AverageSession average={average} />
            </div>
            <div className="Layout__dailyActivity">
              <RadarSession performance={performance} />
            </div>
            <div className="Layout__dailyActivity">
              <Score score={score} />
            </div>
          </div>
        </div>
        <div className="Layout__data">
          <Nutrients data={data}/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
