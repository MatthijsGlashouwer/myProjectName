import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
        .then(response => response.json())
        .then(data => setData(data));
}, []);


  return (
    <div>
      <h1>CRUD React Frontend</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
