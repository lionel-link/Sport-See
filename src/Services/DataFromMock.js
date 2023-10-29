import { useEffect, useState } from 'react';

function DataFromMock() {
    
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  return user;
}

export default DataFromMock;