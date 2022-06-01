const Block = (params) => {

	// add if needed
	const styles = {
		noShadow: params.noShadow,
		noBorder: params.noBorder,
		bigBorder: params.bigBorder

	};

	return (
		<div
			className={`block ${styles.noShadow ? '' : 'shadow-block'}
			 ${styles.bigBorder ? ' big-block ' : styles.noBorder ? ' ' : ' border-block '} 
			 ${params.className ? params.className : ''}`
			}>
			{params.children}
		</div>
	);
};

export default Block;
