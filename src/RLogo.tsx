import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {OtherLogo} from './OtherLogo';

export const RLogo = () => {
  const frame = useCurrentFrame();
  const {width, fps} = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 30,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [width, 0]);

  return (
    <div className='flex items-end'>
      <div
        className='text-9xl text-blue-700 drop-shadow-lg shadow-white font-bold'
        style={{transform: `translateX(${entranceOffset}px)`}}
      >
        R
      </div>
      <OtherLogo char='o' time={20} />
      <OtherLogo char='b' time={25} />
      <OtherLogo char='o' time={30} />
      <OtherLogo char='h' time={35} />
      <OtherLogo char='a' time={40} />
      <OtherLogo char='n' time={45} />
    </div>
  );
};
