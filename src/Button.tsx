import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {LOGO_END_TIME} from './const';

const scaleButton = (frame: number) => {
  const scale = Math.sin(frame / 7) + 0.05;
  return scale > 1 ? scale : 1;
};

export const Button = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [LOGO_END_TIME + 30, LOGO_END_TIME + 50],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

  return (
    <div
      className='text-3xl text-white bg-gray-600 py-4 px-8 m-2 rounded-full'
      style={{opacity, transform: `scale(${scaleButton(frame)})`}}
    >
      <div className='' />
      TAP
    </div>
  );
};
