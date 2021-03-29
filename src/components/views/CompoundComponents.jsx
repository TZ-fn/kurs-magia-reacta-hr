import React, { useContext } from 'react';

const MyContext = React.createContext();

const SubComponent = () => {
  const context = useContext(MyContext);
  const { name } = context;
  return (
    <div>
      <p>User: {name}</p>
    </div>
  );
};

const CompoundComponents = () => (
  <div>
    <MyContext.Provider value={{ name: 'Tomek' }}>
      <h2 className='title is-3'>Compound Components Practice</h2>
      <SubComponent />
    </MyContext.Provider>
  </div>
);

export default CompoundComponents;
