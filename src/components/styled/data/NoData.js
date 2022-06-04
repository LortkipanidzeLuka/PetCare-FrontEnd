import DataNotFound from '../../../assets/images/noData.png';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

const NoData = (params) => {
	return (
		<>
			{params.noData ? (
				<div className={'d-flex flex-column align-items-center'}>
					<img src={DataNotFound} alt={'No Data Found'} />
					<Text text={'No Data Found'} type={TextType.LARGE}/>
				</div>

			) : (
				<>
					{params.children}
				</>
			)}
		</>

	);
};

export default NoData
