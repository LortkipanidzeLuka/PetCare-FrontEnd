import { TextTypeParams } from './TextType';

const Text = ({ type, text, styles, classNames, align, icon }) => {
	const textParams = TextTypeParams[`${type}`];
	const textStyle = textParams && {
		fontFamily: `${textParams.fontFamily}`,
		fontSize: textParams.fontSize,
		fontWeight: textParams.fontWeight,
		textAlign: align || 'initial',
		display: icon ? 'flex' : '',
		alignItems: icon ? 'center' : ''
	};

	return (
		<div className={classNames && typeof classNames == 'object' ? classNames.join(' ') : ''}
				 style={styles ? { ...textStyle, ...styles } : { ...textStyle }}>
			{icon && <div className={`${icon} mrr-small`} style={{ fontSize: 'unset' }} />}
			<div className={'inner-text-overridable'}>{text}</div>
		</div>
	);
};

export default Text;
