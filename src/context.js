import React from 'react';

const LangContext = React.createContext({
  currentLanguage: 'en',
  setLanguage: () => {},
});

export default LangContext;
