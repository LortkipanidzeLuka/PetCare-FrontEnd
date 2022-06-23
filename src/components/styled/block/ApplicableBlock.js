import Text from '../text/Text';
import { TextType } from '../text/TextType';

const ApplicableBlock = ({ data }) => {
	const serviceicons={
	//TODO
	}


	return (
		<div className={'d-flex full-width applicable-block'}>
			<div className={'border-block colored-block full-width'}>
				<div className={'applicable-block-row'}>
					<div className={'left'}>
						<Text text={'Animals'} type={TextType.LARGE} classNames={['faint-text']} align={'left'}/>
					</div>
					<div className={'right'}>
						{data.applicablePetList.map((value => (
							<Text text={value} type={TextType.MEDIUM} icon={'mdi mdi-circle-medium text-success mr-1'}/>
						)))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicableBlock;
