import './Home.css';
import MenuPrincipal from './../MenuPrincipal/MenuPrincipal';
import MenuLateral from './../MenuLateral/MenuLateral';
import Layout from '../Layout/Layout';
import DataFromAPI from '../Services/DataFromAPI';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState();
  const API = 'mock';


  useEffect(() => {

    if (API === 'mock') {
      const getDataFromMock = async () => {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        setData(data);
      };
      getDataFromMock();
    } else {
      const getDataFromAPI = async () => {
        //a "keydata" b "activity" c "average " d "performance"
        await DataFromAPI().then(([{data: keyData}, {data: activityData}, {data: averageData}, {data: performanceData}]) => {
          let performance = {
            performance: [
              {
                subject: 'cardio',
                value: performanceData.data[0].value,
              },
              {
                subject: 'energy',
                value: performanceData.data[1].value,
              },
              {
                subject: 'endurance',
                value: performanceData.data[2].value,
              },
              {
                subject: 'strength',
                value: performanceData.data[3].value,
              },
              {
                subject: 'speed',
                value: performanceData.data[4].value,
              },
              {
                subject: 'intensity',
                value: performanceData.data[5].value,
              },
            ],
          };
          let activity = { activity: activityData.sessions };
          // eslint-disable-next-line
          const user = Object.assign({}, keyData, activity, averageData, performance);
          setData(user);
        });
      };
      getDataFromAPI();
    }
    
  }, []);



  



  if (!data) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="Home">
      <MenuPrincipal />
      <MenuLateral />
      <Layout user={data} />
    </div>
  );
}

export default Home;
