import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';

type OtherLogoType = {
  char: string;
  time: number;
}

export const OtherLogo = ({char, time}: OtherLogoType) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [time, time + 20], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity}}
			className="text-8xl text-blue-700 font-bold pb-1"
		>
			{char}
		</div>
	);
};
