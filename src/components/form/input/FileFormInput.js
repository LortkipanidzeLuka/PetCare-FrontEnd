import { Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import { TransformImageArrToBase64 } from '../../../utils/UtilActions';

export const FileFormInput = ({ setError, requiredMessage,setValue, getValue, register, errors, name, xl, lg, sm, xs }) => {
	const outerValue = getValue(name);
	const [inputFiles, setInputFiles] = useState([]);

	useEffect(() => {
		const modified = [];
		if (outerValue && outerValue.length) {
			for (let i = 0; i < outerValue.length; i++) {
				modified.push({
					content: outerValue[i].content,
					title: outerValue[i].title
				});
			}
			setInputFiles(modified);
		}
	}, [outerValue]);

	const handleAcceptedFiles = async (files) => {
		const res = await TransformImageArrToBase64(files);
		const modified = [];
		for (let i = 0; i < res.length; i++) {
			modified.push(res[i]);
		}
		for (let i = 0; i < inputFiles.length; i++) {
			modified.push(inputFiles[i]);
		}
		setValue(name, modified);
		setInputFiles(modified);
		setError(name, '');
	};

	const deleteFile = (index) => {
		const modified = [];
		for (let i = 0; i < inputFiles.length; i++) {
			if (i !== index) {
				modified.push({
					content: outerValue[i].content,
					title: outerValue[i].title
				});
			}
		}
		setValue(name, modified);
		setInputFiles(modified);
		if (modified.length === 0) {
			setError(name, { type: 'required', message: requiredMessage });
		}else {
			setError(name, '');
		}
	};

	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Dropzone
					onDrop={(acceptedFiles) => {
						handleAcceptedFiles(acceptedFiles);
					}}>
					{({ getRootProps }) => {
						return (
							<div {...getRootProps()} className={'form-control drop-wrapper'}>
								<input
									type={'file'}
									id='fileUploader'
									multiple
									required={false}
								/>
								<div className={''}>
									<i className='mdi mdi-file-upload mdi-24px' />
								</div>
								<Text text={'Drop files or click and upload.'} type={TextType.MEDIUM} />
							</div>
						);
					}}
				</Dropzone>
				<input
					name={name}
					{...register(name, { required: requiredMessage })}
					type={'text'}
					className={'invisible-form'}
					required={false}
				/>
				<div className='mrt-medium no-padding' id='file-contents'>
					{inputFiles.map((file, index) => {
						return (
							<div className='form-control mrt-small' key={index + '-file'}>
								<Row className='no-padding align-items-center'>
									<Col>
										<Row>
											<Col className={'file-description'}>
												<img
													height='80'
													alt={file.title}
													src={file.content}
												/>
											</Col>
											<Col className={'file-description'}>
												<Text text={file.title} type={TextType.MEDIUM} align={'left'} />
												<Text text={`Picture index: ${index}`} type={TextType.REGULAR} align={'left'}
															classNames={['faint-text']} />
											</Col>
										</Row>
									</Col>
									<Col className={'d-flex justify-content-center align-items-center'} xl={'1'} sm={'1'} lg={'1'}
											 xxl={'1'} xs={'1'} md={'1'}>
										<i className={'mdi mdi-delete mdi-24px error-text pointer'} onClick={() => {
											deleteFile(index);
										}} />
									</Col>
								</Row>
							</div>
						);
					})}
				</div>
				{errors[name] && errors[name].message &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
};
