import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {LOGO_END_TIME} from './const';

export const Subtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [LOGO_END_TIME + 10, LOGO_END_TIME + 30],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

  return (
    <div className='text-gray-600 text-3xl' style={{opacity}}>
      https://www.robohan.net/
    </div>
  );
};
