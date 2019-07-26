import React, {
  useContext,
  useEffect
} from 'react';
import { TrackListContext } from '../../context/TrackListContext';

export default function TrackList() {
  const { state } = useContext(TrackListContext);

  const {
    track_list,
    heading,
    isLoading,
    error,
  } = state;

  return (
    <>
      <h3>{heading}</h3>
      {
        track_list.map(({ track: { track_id: id, track_name: name } }) => (
          <p key={id}>{name}</p>
        ))
      }
    </>
  );
}
