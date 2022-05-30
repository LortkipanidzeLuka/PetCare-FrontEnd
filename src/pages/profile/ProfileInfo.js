import ProfileBlock from '../../components/styled/block/ProfileBlock';
import React, { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import Api from '../../services';

const ProfileInfo = () => {
	const [info, setInfo] = useState({});
	const { setMessage: setError } = useToast(ToastType.ERROR);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await Api.Prof.getInfo();
				setInfo(data);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}, [setInfo, setError]);

	return (
		<ProfileBlock data={info} />
	);
};

export default ProfileInfo;
