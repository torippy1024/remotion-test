import {AbsoluteFill} from 'remotion';
import { RLogo } from './RLogo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import Gear from './Gear';
import { Button } from './Button';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-900 items-center justify-center relative">
      <Gear className='top-12 left-12' speed={-1.5} />
      <Gear className='top-[110px] left-20' speed={1} size={120} />
      <Gear className='top-12 right-12' speed={1.5} />
      <Gear className='top-[110px] right-20' speed={-1} size={120} />
      <RLogo />
			<div className="m-3" />
			<Title />
			<Subtitle />
      <Button />
		</AbsoluteFill>
	);
};
