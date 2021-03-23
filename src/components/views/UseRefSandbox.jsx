import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseRefSandbox = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://run.mocky.io/v3/5795a752-0676-48d6-b033-6648908bad1c',
      );
      setItemsList(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='title is-3'>useRef Sandbox</h1>
      {itemsList.map((item) => {
        return <p key={item.content}>{item.content}</p>;
      })}
    </div>
  );
};

export default UseRefSandbox;
