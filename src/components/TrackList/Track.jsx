import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faCompactDisc,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const compactDiscIcon = <FontAwesomeIcon icon={faCompactDisc} />;
const chevronRight = <FontAwesomeIcon icon={faChevronRight} />;

export default function Track({
  id,
  artist,
  name,
  album
}) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{artist}</h5>

        <p className="card-text">
          <strong>{playIcon} Track</strong>: {name}
          <br/>
          <strong>{compactDiscIcon} Album</strong>: {album}
        </p>

        <Link
          to={`lyrics/track/${id}`}
          className="btn btn-block btn-dark"
        >
          {chevronRight} View Lyrics
        </Link>
      </div>
    </div>
  );
}
