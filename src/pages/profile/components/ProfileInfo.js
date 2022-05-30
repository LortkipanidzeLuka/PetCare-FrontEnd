import ProfileBlock from '../../../components/styled/block/ProfileBlock';
import React, { useEffect } from 'react';
import useToast, { ToastType } from '../../../hooks/UseToast';
import Api from '../../../services';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../storage/user/Selector';

const ProfileInfo = ({info, setInfo}) => {
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const user = useSelector(userSelectors.userInfo);

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
	}, [setInfo, setError, user]);

	return (
		<ProfileBlock data={info} />
	);
};

export default ProfileInfo;
