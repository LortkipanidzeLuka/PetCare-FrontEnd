import { useEffect, useState } from 'react';
import Api from '../../services';
import Text from '../../components/styled/text/Text';

const ProfilePage = () => {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const { data } = await Api.Prof.info();
			console.log(data);
			setUserInfo(data)
		};
		fetchUser();
	}, []);


	return (
		<div>
			<Text text={userInfo.firstname}/>
			<Text text={userInfo.lastname}/>
			<Text text={userInfo.sex}/>
			<Text text={userInfo.phoneNumber}/>
		</div>
	);
};

export default ProfilePage;
