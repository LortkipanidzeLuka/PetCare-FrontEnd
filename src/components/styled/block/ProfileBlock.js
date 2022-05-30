import Block from './Block';
import React from 'react';
import Text from '../text/Text';
import { TextType } from '../text/TextType';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../storage/user/Selector';

const ProfileBlock = ({ data }) => {

	const { sub } = useSelector(userSelectors.userInfo);

	return (
		<Block className={'profile-block'}>
			<div className={'profile-image-overlay'}>
				<div className={'d-flex justify-content-center align-items-center'}>
					<div className={'mrt-medium profile-name-image d-flex justify-content-center align-items-center'}>
						<Text text={'T.K'} type={TextType.EXTRA_LARGE} />
					</div>
				</div>
			</div>
			<div className={'p-all-medium'}>

				<div className={'full-width d-flex justify-content-center align-items-center'}>
					<Text text={data.firstname + ' ' + data.lastname} type={TextType.LARGE} />
				</div>
				<div className={'mrt-small full-width d-flex justify-content-between align-items-center'}>
					<Text text={'E-Mail: '} type={TextType.HEADER_TAB} classNames={['faint-text']} />
					<Text text={sub} type={TextType.HEADER_TAB} classNames={['faint-text dotted-text']} />
				</div>
				<div className={'mrt-small full-width d-flex justify-content-between align-items-center'}>
					<Text text={'Mob: '} type={TextType.HEADER_TAB} classNames={['faint-text']} />
					<Text text={data.phoneNumber} type={TextType.HEADER_TAB} classNames={['faint-text dotted-text']} />
				</div>
				<div className={'mrt-small full-width d-flex justify-content-between align-items-center'}>
					<Text text={'Gender: '} type={TextType.HEADER_TAB} classNames={['faint-text']} />
					<Text text={data.sex} type={TextType.HEADER_TAB} classNames={['faint-text dotted-text']} />
				</div>
			</div>

		</Block>


	);
};

export default ProfileBlock;
