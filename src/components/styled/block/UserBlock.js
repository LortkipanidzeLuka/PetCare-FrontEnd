import Text from '../text/Text';
import { TextType } from '../text/TextType';

const UserBlock = ({ data }) => {
	return (
		<div className={'d-flex full-width'}>
			<div className={'border-block colored-block full-width'}>
				<div className={'d-flex justify-content-center align-items-center'}>
					<div>
						<i className={'mdi mdi-36px mdi-account mdi-dark mrr-small mrl-small'} />
					</div>
					<div className={'full-width'}>
						<div>
							<Text text={data.fullName} type={TextType.MEDIUM} />
						</div>
						<div className={'d-flex'}>
							<Text text={`Mob: ${data.phoneNumber}`} type={TextType.REGULAR} />
							<Text text={`E-mail: ${data.username}`} type={TextType.REGULAR} classNames={['mrl-big']}/>
						</div>
					</div>
					{data.leftData && <div>
								<Text text={data.leftData} type={TextType.LARGE} styles={{width:"170px"}} classNames={['mrr-small']} align={'right'}/>
					</div>}
				</div>
			</div>
		</div>
	);
};

export default UserBlock;
