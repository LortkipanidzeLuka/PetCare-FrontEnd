import ReactLoader from 'react-loading';
import Text from '../text/Text';
import { TextType } from '../text/TextType';
import React from 'react';

const ApiLoader = (params) => {
	// exception in color (ამას ცვლადებიდან ვერ შემოვიტან)
	return (
		<>
			{params.loading ? (
				<div className={'d-flex justify-content-center flex-column'}>
					<div className={'full-width d-flex justify-content-center'}>
						<ReactLoader type={'spin'} color={'#6c757d'} />
					</div>
					<div><Text text={'Loading...'} classNames={['d-flex', ' justify-content-center']} align={'justify'}
										 type={TextType.MEDIUM} /></div>
				</div>
			) : (
				<>
					{params.children}
				</>
			)}

		</>
	);
};

export default ApiLoader;
