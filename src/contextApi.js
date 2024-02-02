// NameContext.js
import React, { createContext, useContext, useState } from 'react';

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState('');

  const setNameValue = (newName) => {
    setName(newName);
  };

  const getNameValue = () => {
    return name;
  };

  const contextValue = {
    getNameValue,
    setNameValue,
  };

  return (
    <NameContext.Provider value={contextValue}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);

  if (!context) {
    throw new Error('useName must be used within a NameProvider');
  }

  return context;
};
