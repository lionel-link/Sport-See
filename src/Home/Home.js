import './Home.css';
import MenuPrincipal from './../MenuPrincipal/MenuPrincipal';
import MenuLateral from './../MenuLateral/MenuLateral';
import Layout from '../Layout/Layout';
import DataFromAPI from '../Services/DataFromAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  const [data, setData] = useState();
  const [dataApi, setDataApi] = useState();
  const [dataMock, setDataMock] = useState();
  const { id } = useParams();
  const [error, setError] = useState();
  const [api, setApi] = useState();

  useEffect(() => {
    const getDataFromMock = async () => {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      let user = data.find((user) => (user.id ==  id));
      //console.log(user);
      setDataMock(user);
      //console.log(dataMock)
    };

    getDataFromMock();

    if (error) {
      setData(dataMock);
    } 
  }, [error]);

  useEffect(() => {
    setData(dataApi);
  }, [dataApi]);

  useEffect(() => {
    const getDataFromAPI = async () => {
      console.log('ppppp')
      const res = await DataFromAPI(id)
        .then(([{ data: keyData }, { data: activityData }, { data: averageData }, { data: performanceData }]) => {
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
          
          const user = Object.assign({}, keyData, activity, averageData, performance);
          setDataApi(user);
        })
        .catch((error) => {
          return error
        });
      if (res) {
        //console.log(res)
        setError(true);
      }
      // else{
      //   setDataApi({name:'leo'})
      //   console.log(dataApi)
      // }
    };
    //console.log(error)
    getDataFromAPI();
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
