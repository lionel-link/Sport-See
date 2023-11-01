function DataFromAPI(id) {

  const promise1 = fetch(`http://localhost:3000/user/${id}`).then((res) => res.json());

  const promise2 = fetch(`http://localhost:3000/user/${id}/activity`).then((res) => res.json());

  const promise3 = fetch(`http://localhost:3000/user/${id}/average-sessions`).then((res) => res.json());

  const promise4 = fetch(`http://localhost:3000/user/${id}/performance`).then((res) => res.json());


  return Promise.all([promise1, promise2, promise3, promise4]);

}

export default DataFromAPI;
