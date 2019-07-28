import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
  position: absolute;
  border-color: red;
  margin: auto;
`;

export default function Spinner({ isLoading }) {
  return (
    <div className='sweet-loading'>
      <ClipLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={isLoading}
      />
    </div>
  );
}
