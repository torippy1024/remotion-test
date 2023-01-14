import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';
import {LOGO_END_TIME} from './const';

export const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [LOGO_END_TIME, LOGO_END_TIME + 20],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );
  return (
    <div
      style={{opacity}}
      className='text-gray-500 text-3xl font-bold leading-relaxed'
    >
      Osaka Univercity Robot Making Organization
    </div>
  );
};
