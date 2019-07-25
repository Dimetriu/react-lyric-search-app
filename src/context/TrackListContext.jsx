import React, {
  createContext,
  useState
} from 'react';

export const TrackListContext = createContext({});

export const TrackListProvider = ({ children }) => {

  const [state, setState] = useState({
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
      },
      {
        name: 'The Hipsta - Shaken Soda',
      },
      {
        name: 'Tobu - Such Fun',
      },
    ],
  });

  return (
    <TrackListContext.Provider value={{state, setState}}>
      {children}
    </TrackListContext.Provider>
  );
}
