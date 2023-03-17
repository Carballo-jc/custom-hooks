import { useState, useEffect } from 'react';

export default url => {
  const [data, setData] = useState({});
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw Error(response.status);
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setHasFetched(true);
      }
    };

    if (!hasFetched) fetchData();

    return () => {
      console.log('CWU');
    };
  }, [hasFetched]);

  return data;
};


// import React, { Component, useState, useEffect, useMemo } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import useGet from './useGet';

// const App = React.memo(props => {
//   const data = useGet('https://api.github.com/users/andersontr15');
//   console.log(data, 'DATA');
//   return Object.values(data).length ? (
//     <div>
//       Data here:
//       <code>{JSON.stringify(data)}</code>
//     </div>
//   ) : (
//     'LOADING'
//   );
// });

// export default App;