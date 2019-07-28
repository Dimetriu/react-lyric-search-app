import React, { useContext, lazy, Suspense } from 'react';
import { TrackListContext } from '../../context/TrackListContext';
import { withRouter } from 'react-router-dom';
import Spinner from '../Spinner';
import InternalServerError from '../errors/InternalServerError';

withRouter(InternalServerError);

export default function TrackList() {
  const { state } = useContext(TrackListContext);

  const {
    track_list,
    heading,
    isLoading,
    error,
  } = state;

  const renderContent = (
    track_list.map(({
      track: {
        artist_name: artist,
        track_id: id,
        track_name: name,
        album_name: album
      }
    }) => (
      <Suspense fallback={<Spinner isLoading={true} />}>
        <div key={id} className="col-md-6">
          <Track
            key={id}
            artist={artist}
            name={name}
            album={album}
          />
        </div>
      </Suspense>
    ))
  );

  if (error) {
    return <InternalServerError error />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {(isLoading && <Spinner isLoading />) || renderContent}
        </div>
      </>
    );
  }
}

const Track = lazy(() => import('./Track'));
