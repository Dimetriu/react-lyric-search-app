import React, {
  createContext,
  useState,
  useEffect
} from 'react';
import axios from 'axios';

export const TrackListContext = createContext({});

export const TrackListProvider = ({ children }) => {

  const [state, setState] = useState({
    track_list: [],
    heading: "Tpo 10 tracks",
    isLoading: true,
    error: false,
  });


  const fetchData = async () => {
    try {
      const { data } = await axios(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      );

      const { message: { body: { track_list } } } = data;

      setState({ ...state, isLoading: false, track_list });
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <TrackListContext.Provider value={{state, setState}}>
      {children}
    </TrackListContext.Provider>
  );
}
