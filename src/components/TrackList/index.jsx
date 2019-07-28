import React, {
  useContext,
  lazy,
  Suspense
} from 'react';
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

  if (error) {
    return <InternalServerError error />;
  } else {
    return (
      <>
        <h3>{heading}</h3>
        {
          isLoading ?
          <Spinner isLoading /> :
          track_list.map(({ track: { track_id: id, track_name: name } }) => (
            <p key={id}>{name}</p>
          ))
        }
      </>
    );
  }
}

