import {spring} from 'remotion'
import {useVideoConfig} from 'remotion'
import {useCurrentFrame} from 'remotion'
import {interpolate} from 'remotion'
import {BsGearWideConnected} from 'react-icons/bs'

type GearType = {
  className?: string;
  speed?: number;
  size?: number
}

const Gear = ({className = '', speed = 1, size = 80}: GearType) => {
	const frame = useCurrentFrame();
	const {width, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 120,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [-width, 0]);

  return (
    <div
      className={`absolute text-blue-300 ${className}`}
      style={{transform: `translateY(${entranceOffset}px) rotate(${frame * speed}deg)`}}
    >
      <BsGearWideConnected size={size} />
    </div>
  )
}

export default Gear;