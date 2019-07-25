import React, {
  createContext,
  useState
} from 'react';

export const TrackListContext = createContext({});

export const TrackListProvider = ({ children }) => {

  const [state, setState] = useState({
    track_list: [
      { track: { track_name: "abc" } },
      { track: { track_name: "123" } }
    ],
    heading: "Tpo 10 tracks"
  });

  return (
    <TrackListContext.Provider value={{state, setState}}>
      {children}
    </TrackListContext.Provider>
  );
}
