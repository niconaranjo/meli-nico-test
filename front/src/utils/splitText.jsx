import React from 'react';

/* eslint-disable import/prefer-default-export */
export const splitText = (text) => (
  text.split('\n').map((str) => <p key={str}>{str}</p>)
);
