import React, { useContext } from 'react';
import { TrackListContext } from '../../context/TrackListContext';

export default function TrackList() {
  const { state, setState } = useContext(TrackListContext);

  return (
    <>
      {state.tracks.map(track => (
        <div className="box">
          <div className="song-title">
            {track.name}
          </div>
        </div>
      ))}
    </>
  );
}
