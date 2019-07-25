import React, { useContext } from 'react';
import { TrackListContext } from '../../context/TrackListContext';

export default function TrackList() {
  const { state, setState } = useContext(TrackListContext);

  const { track_list, heading } = state;

  return (
    <>
      <p>{heading}</p>
      {track_list.map(({ track: { track_name } }) => (
        <p>{track_name}</p>
      ))}
    </>
  );
}
