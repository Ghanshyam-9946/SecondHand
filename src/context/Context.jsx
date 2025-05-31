import React, { createContext, useState } from 'react';

// Step 1: Create the context
export const UserContext = createContext(null);

// Step 2: Create the provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Srishti",
    age: 12,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
